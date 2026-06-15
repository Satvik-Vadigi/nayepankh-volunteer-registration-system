import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const volunteer = await prisma.volunteer.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        college: body.college,
        skills: body.skills,
        availability: body.availability,
        motivation: body.motivation,
      },
    });

    return NextResponse.json(volunteer);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to register volunteer" },
      { status: 500 }
    );
  }
}