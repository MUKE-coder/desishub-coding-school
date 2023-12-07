import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone, regNo } = await request.json();
    const alreadyExists = await db.booking.findUnique({
      where: {
        email,
      },
    });
    if (alreadyExists) {
      return NextResponse.json(
        {
          message: "Email already exists",
          data: null,
        },
        { status: 409 }
      );
    } else {
      const booking = await db.booking.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
          regNo,
        },
      });
      console.log(booking);
      return NextResponse.json({
        data: booking,
        message: "Booking Created Successfully",
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Booking",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const bookings = await db.booking.findMany({
      orderBy: {
        createdAt: "desc", //Latest bootcamps
      },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch bookings",
      },
      {
        status: 500,
      }
    );
  }
}
