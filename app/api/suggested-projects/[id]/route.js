import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const project = await db.suggestedProject.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch the Category",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { status } = await request.json();
    const project = await db.suggestedProject.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
    // console.log(project);
    return NextResponse.json(project);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Update the project",
      },
      {
        status: 500,
      }
    );
  }
}
