import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const sql = neon(process.env.DATABASE_URL!);

    await sql`
      INSERT INTO beta_signup (email, created_at)
      VALUES (${email.trim()}, ${new Date().toISOString()})
    `;

    if (process.env.POPCORN_BETA_SIGNUPS_WEBHOOK) {
      try {
        await fetch(process.env.POPCORN_BETA_SIGNUPS_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.trim(),
            createdAt: new Date().toISOString(),
          }),
        });
      } catch {
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
    console.error("Waitlist submission error:", error);

    if (
      error instanceof Error &&
      error.message.includes("duplicate key")
    ) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
