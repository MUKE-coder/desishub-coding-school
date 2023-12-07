import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const booking = await db.booking.findUnique({
      where: {
        id,
      },
    });
    if (!booking) {
      return NextResponse.json(
        {
          data: null,
          message: "No Booking Found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(booking);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch Booking",
      },
      {
        status: 500,
      }
    );
  }
}
