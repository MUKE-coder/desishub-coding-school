import path from "path";
import fs from "fs";
import { NextResponse } from "next/server";
function getCourses() {
  const filePath = path.join(process.cwd(), "courses.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const courses = JSON.parse(fileContent);
  return courses;
}

export async function GET(request) {
  const products = await getProducts();
  return NextResponse.json(products);
}
