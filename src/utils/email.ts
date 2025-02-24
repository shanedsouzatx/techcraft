import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    // Configure Nodemailer with cPanel SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Use environment variables for security
      port: Number(process.env.SMTP_PORT) || 465, // Default to 465
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER, 
      to,
      subject,
      text,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully" };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, message: "Failed to send email", error: errorMessage };
  }
};
