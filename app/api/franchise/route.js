import { NextResponse } from "next/server";
import { addFranchiseLead } from "@/lib/leadsStore";
import { isValidEmail, isValidPhoneIN } from "@/lib/validators";

export async function POST(req) {
  try {
    const body = await req.json();

    const lead = {
      name: String(body?.name || "").trim(),
      city: String(body?.city || "").trim(),
      phone: String(body?.phone || "").trim(),
      email: String(body?.email || "").trim(),
      budget: String(body?.budget || "").trim(),
      message: String(body?.message || "").trim(),
      source: "website-franchise"
    };

    if (!lead.name || lead.name.length < 2) {
      return NextResponse.json({ message: "Invalid name." }, { status: 400 });
    }
    if (!lead.city) {
      return NextResponse.json({ message: "City is required." }, { status: 400 });
    }
    if (!isValidPhoneIN(lead.phone)) {
      return NextResponse.json({ message: "Invalid phone number." }, { status: 400 });
    }
    if (!isValidEmail(lead.email)) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }

    const saved = addFranchiseLead(lead);

    return NextResponse.json({ ok: true, lead: saved }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  }
}
