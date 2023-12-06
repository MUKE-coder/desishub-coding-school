import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const section = await db.section.findUnique({
      where: {
        id,
      },
    });
    if (!section) {
      return NextResponse.json(
        {
          data: null,
          message: "No Section Found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(section);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch Section",
      },
      {
        status: 500,
      }
    );
  }
}
