import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request, { params: { slug } }) {
  try {
    const course = await db.course.findUnique({
      where: {
        slug,
      },
    });
    if (!course) {
      return NextResponse.json(
        {
          data: null,
          message: "No Course Found",
        },
        { status: 404 }
      );
    }
    const {
      title,
      slug: newSlug,
      description,
      courseImage,
      nowPrice,
      soonPrice,
      laterPrice,
      isPublished,
      isPaid,
      enrolledStudentCount,
      courseOverview,
      courseIntroLink,
      whatYouWillLearn,
      whatWillYouBuild,
      courseFor,
      requirements,
      keywords,
    } = await request.json();

    const updatedCourse = await db.course.update({
      where: {
        slug,
      },
      data: {
        title,
        slug: newSlug,
        description,
        courseImage,
        whatWillYouBuild,
        nowPrice: parseFloat(nowPrice),
        soonPrice: parseFloat(soonPrice),
        laterPrice: parseFloat(laterPrice),
        isPublished,
        isPaid,
        enrolledStudentCount: parseInt(enrolledStudentCount),
        courseOverview,
        courseIntroLink,
        whatYouWillLearn,
        courseFor,
        prerequisites,
        keywords,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch Course",
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(request, { params: { slug } }) {
  try {
    const course = await db.course.findUnique({
      where: {
        slug,
      },
    });
    if (!course) {
      return NextResponse.json(
        {
          data: null,
          message: "No Course Found",
        },
        { status: 404 }
      );
    }
    return NextResponse.json(course);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch Course",
      },
      {
        status: 500,
      }
    );
  }
}
