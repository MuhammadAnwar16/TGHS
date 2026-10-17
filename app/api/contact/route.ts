import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, phone, email, plotInterest, plotNumber, message, honeypot, source } = body;

    // 1. Spam Honeypot Check: if bot filled this hidden field, silently return success
    if (honeypot) {
      return NextResponse.json({ success: true, note: "Dropped" }, { status: 200 });
    }

    // 2. Input Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid full name." }, { status: 400 });
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
      return NextResponse.json({ error: "Please provide a valid mobile/WhatsApp number." }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const inquiryRecord = {
      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : "N/A",
      plotInterest: plotInterest || "General Inquiry",
      plotNumber: plotNumber || "Not specified",
      message: message ? message.trim() : "No additional message",
      source: source || "Website Contact Form",
      receivedAt: timestamp,
    };

    console.log("=== NEW TAXILA GARDENS LEAD RECEIVED ===", inquiryRecord);

    // 3. Optional Resend / Nodemailer dispatch if environment variables exist
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || "info@taxilagardens.pk";

    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Taxila Gardens Inquiry <leads@taxilagardens.pk>",
            to: [notificationEmail],
            subject: `New Lead: ${inquiryRecord.fullName} (${inquiryRecord.plotInterest})`,
            html: `
              <h2>New Sales Inquiry - Taxila Gardens Housing Scheme</h2>
              <p><strong>Name:</strong> ${inquiryRecord.fullName}</p>
              <p><strong>Phone:</strong> ${inquiryRecord.phone}</p>
              <p><strong>Email:</strong> ${inquiryRecord.email}</p>
              <p><strong>Plot Category:</strong> ${inquiryRecord.plotInterest}</p>
              <p><strong>Plot #:</strong> ${inquiryRecord.plotNumber}</p>
              <p><strong>Message:</strong> ${inquiryRecord.message}</p>
              <p><strong>Source:</strong> ${inquiryRecord.source}</p>
              <p><em>Received at: ${inquiryRecord.receivedAt}</em></p>
            `,
          }),
        });

        if (!res.ok) {
          console.warn("Resend API warning:", await res.text());
        }
      } catch (emailErr) {
        console.error("Failed to forward email via Resend:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been successfully registered. Our sales director will contact you promptly.",
      leadId: `TG-${Date.now()}`,
    });
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error processing inquiry. Please try WhatsApp directly." },
      { status: 500 }
    );
  }
}
