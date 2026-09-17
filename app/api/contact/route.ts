import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  mobileNumber: z.string().trim().optional().or(z.literal("")),
  inquiryType: z.enum([
    "General Inquiry",
    "Reservation Request",
    "Group / Special Inquiry",
    "Coffee Tasting",
    "Barista Workshop",
    "Franchise Inquiry",
    "Feedback",
    "Other",
  ]),
  preferredBranch: z.string().trim().optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  partySize: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please include a brief message."),
  website: z.string().trim().max(0, "Unexpected submission.").optional().or(z.literal("")),
});

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());

    const parsed = contactSchema.safeParse({
      fullName: payload.fullName,
      email: payload.email,
      mobileNumber: payload.mobileNumber,
      inquiryType: payload.inquiryType,
      preferredBranch: payload.preferredBranch,
      preferredDate: payload.preferredDate,
      partySize: payload.partySize,
      message: payload.message,
      website: payload.website,
    });

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || "Please check the form and try again.";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL || !resend) {
      return NextResponse.json(
        {
          success: true,
          demo: true,
          message: "Demo mode is active. Email delivery is not configured yet.",
        },
        { status: 200 },
      );
    }

    const submittedAt = new Date().toLocaleString("en-PH", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #1f1c1a; line-height: 1.6;">
        <h2 style="margin-bottom: 16px; color: #1d1a18;">New Website Inquiry</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.mobileNumber || "N/A"}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
        <p><strong>Preferred Branch:</strong> ${data.preferredBranch || "N/A"}</p>
        <p><strong>Preferred Date:</strong> ${data.preferredDate || "N/A"}</p>
        <p><strong>Party Size:</strong> ${data.partySize || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 12px 16px; background: #f7f1ea; border-radius: 10px; margin-top: 10px;">${data.message.replace(/\n/g, "<br />")}</div>
        <p style="margin-top: 20px;"><strong>Submitted:</strong> ${submittedAt}</p>
      </div>
    `;

    const emailResponse = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: data.email,
      subject: `[Foam Website] ${data.inquiryType} – ${data.fullName}`,
      html,
      text: [
        "New Website Inquiry",
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.mobileNumber || "N/A"}`,
        `Inquiry Type: ${data.inquiryType}`,
        `Preferred Branch: ${data.preferredBranch || "N/A"}`,
        `Preferred Date: ${data.preferredDate || "N/A"}`,
        `Party Size: ${data.partySize || "N/A"}`,
        "",
        `Message: ${data.message}`,
        "",
        `Submitted: ${submittedAt}`,
      ].join("\n"),
    });

    if (emailResponse.error) {
      return NextResponse.json({ error: emailResponse.error.message || "Unable to send email right now." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Your request has been sent. The Foam Coffee team will need to confirm availability." }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
