import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug } = await request.json();

    const alreadyExists = await db.course.findUnique({
      where: {
        slug,
      },
    });
    if (alreadyExists) {
      return NextResponse.json(
        {
          message: "Course already exists",
          data: null,
        },
        { status: 409 }
      );
    } else {
      const newCourse = await db.course.create({
        data: {
          title,
          slug,
        },
      });
      console.log(newCourse);
      return NextResponse.json(
        {
          data: newCourse,
          message: "Course Created Successfully",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Course",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const courses = await db.course.findMany({
      orderBy: {
        createdAt: "desc", //Latest waitlist
      },
    });
    return NextResponse.json(courses);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch courses",
      },
      {
        status: 500,
      }
    );
  }
}
