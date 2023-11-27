import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { firstName, lastName, email, phone } = await request.json();
    const alreadyExists = await db.bootcamp.findUnique({
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
      const bootcamp = await db.bootcamp.create({
        data: {
          firstName,
          lastName,
          email,
          phone,
        },
      });
      console.log(bootcamp);
      return NextResponse.json(bootcamp);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Bootcamp",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const bootcamps = await db.bootcamp.findMany({
      orderBy: {
        createdAt: "desc", //Latest bootcamps
      },
    });
    return NextResponse.json(bootcamps);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch bootcamps",
      },
      {
        status: 500,
      }
    );
  }
}
