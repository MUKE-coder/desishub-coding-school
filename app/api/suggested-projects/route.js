import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { description, email, fullName, design, techStack, title } =
      await request.json();
    // Check if the user has already suggested 2 projects from the same location
    const existingUser = await db.puser.findUnique({
      where: { email },
    });
    if (!existingUser) {
      // If the user doesn't exist, create a new user
      const user = await db.puser.create({
        data: {
          email,
          fullName,
        },
      });

      // Create a new suggested project for the user
      const suggestedProject = await db.suggestedProject.create({
        data: {
          title,
          design,
          description,
          techStack,
          puserId: user.id,
          status: false, // Default status is false
        },
      });

      return NextResponse.json({ user, suggestedProject }, { status: 201 });
    } else {
      // Check if the user has already suggested 2 projects from the same location
      const existingProjects = await db.puser.findUnique({
        where: { email },
        include: { suggestedProjects: true },
      });

      if (
        existingProjects?.suggestedProjects &&
        existingProjects.suggestedProjects.length >= 2
      ) {
        return NextResponse.json(
          { error: "You can only suggest 2 projects." },
          { status: 409 }
        );
      }

      // Create a new suggested project for the user
      const suggestedProject = await db.suggestedProject.create({
        data: {
          title,
          design,
          description,
          techStack,
          puserId: existingUser.id,
          status: false, // Default status is false
        },
      });
      return NextResponse.json(
        { user: existingUser, suggestedProject },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: "Failed to create a Project",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(request) {
  try {
    const projects = await db.suggestedProject.findMany({
      orderBy: {
        createdAt: "desc", //Latest projs
      },
      include: {
        puser: true,
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Fetch projects",
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
    // console.log(id);
    const deleteProject = await db.suggestedProject.delete({
      where: {
        id,
      },
    });
    // console.log(deleteProject);
    return NextResponse.json(deleteProject);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Failed to Delete suggestedProject",
      },
      {
        status: 500,
      }
    );
  }
}
