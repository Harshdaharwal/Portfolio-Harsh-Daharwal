import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In production, integrate with Nodemailer / Resend / SendGrid
    console.log("New contact form submission:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Message received! I'll get back to you soon.",
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
