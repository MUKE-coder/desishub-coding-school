import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description, courseId } = await request.json();
    const newSection = await db.section.create({
      data: {
        title,
        description,
        courseId,
      },
    });
    // console.log(newSection);
    return NextResponse.json(
      {
        data: newSection,
        message: "Section Created Successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a Section",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const sections = await db.section.findMany({
      orderBy: {
        createdAt: "desc", //Latest waitlist
      },
      include: {
        lessons: true,
      },
    });
    return NextResponse.json(sections);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch sections",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const deletedSection = await db.section.delete({
      where: {
        id,
      },
    });
    console.log(deletedSection);
    return NextResponse.json(deletedSection);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete Section",
      },
      {
        status: 500,
      }
    );
  }
}
