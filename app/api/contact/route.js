import { NextResponse } from "next/server";
import { isValidEmail, isValidPhoneIN } from "@/lib/validators";

export async function POST(req) {
  try {
    const body = await req.json();

    const msg = {
      name: String(body?.name || "").trim(),
      phone: String(body?.phone || "").trim(),
      email: String(body?.email || "").trim(),
      message: String(body?.message || "").trim(),
      createdAt: new Date().toISOString(),
      source: "website-contact"
    };

    if (!msg.name || msg.name.length < 2) {
      return NextResponse.json({ message: "Invalid name." }, { status: 400 });
    }
    if (!isValidPhoneIN(msg.phone)) {
      return NextResponse.json({ message: "Invalid phone." }, { status: 400 });
    }
    if (!isValidEmail(msg.email)) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }
    if (!msg.message || msg.message.length < 3) {
      return NextResponse.json({ message: "Message too short." }, { status: 400 });
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
