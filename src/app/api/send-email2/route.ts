import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/email"; // Import the reusable function

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, captcha } = await req.json();

    // Verify CAPTCHA (if required, using your backend verification)
    if (!captcha) {
      return NextResponse.json({ success: false, message: "CAPTCHA verification failed" }, { status: 400 });
    }

    // Call the reusable function to send email
    const response = await sendEmail(
      "signups@techcraftinc.com",
      "New Signup Form Submission (Signup)",
      `You received a message from:
      \nName: ${name}
      \nEmail: ${email}
      \nPhone: ${phone}
      \n\nMessage:\n${message}`
    );

    return NextResponse.json(response, { status: response.success ? 200 : 500 });
  } catch (error: unknown) {
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
