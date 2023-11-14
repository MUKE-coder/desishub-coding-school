import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email } = await request.json();

    const alreadyExists = await db.waitlist.findUnique({
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
      const waitlist = await db.waitlist.create({
        data: {
          firstName,
          lastName,
          email,
        },
      });
      console.log(waitlist);
      return NextResponse.json(waitlist);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Waitlist",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const waitlists = await db.waitlist.findMany({
      orderBy: {
        createdAt: "desc", //Latest waitlist
      },
    });
    return NextResponse.json(waitlists);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch waitlists",
      },
      {
        status: 500,
      }
    );
  }
}
