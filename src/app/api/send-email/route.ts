import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email"; // Import the function

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Call the reusable function
    const response = await sendEmail(
      "briefs@techcraftinc.com", 
      "New Contact Form Submission (Brief)",
      `You received a message from:
      \nName: ${name}
      \nEmail: ${email}
      \nPhone: ${phone}
      \nService: ${service}
      \n\nMessage:\n${message}`
    );

    return NextResponse.json(response, { status: response.success ? 200 : 500 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
