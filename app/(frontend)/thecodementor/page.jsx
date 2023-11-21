import Image from "next/image";
import React from "react";
import codeImage from "../../public/theCode.png";

export default function Page() {
  return (
    <div className="">
      <div className="text-white bg-slate-950 z-50 lg:p-16  p-8">
        <div className="flex flex-col justify-center mx-auto items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold ">
            <span className="text-orange-300">the</span>
            <span className="uppercase text-lime-500 tracking-widest">
              CodeMentor
            </span>
          </h2>
          <div className="md:max-w-3xl ">
            <p className="py-6 text-sm lg:text-2xl text-center">
              WITH THE RIGHT MENTOR… YOU CAN BECOME A BETTER DEVELOPER AND BUILD
              AMAZING THINGS!
            </p>
            {/* <p>
              TheCodeMentor newsletter is the ultimate resource for developers
              who want to learn new skills, improve their problem-solving
              abilities, and ace their next tech interview. With twice-weekly
              emails packed with coding challenges, web development projects,
              how-to guides, and more, you'll be on your way to becoming a
              better developer in no time.
            </p> */}
          </div>
          <div className="md:max-w-5xl">
            <div className="grid md:grid-cols-2 items-center gap-4 ">
              <div className="col-span-full md:col-span-1">
                <Image
                  src={codeImage}
                  alt="theCodeMentor by JB"
                  width={1000}
                  height={600}
                  className="rounded-xl"
                />
              </div>
              <div className="col-span-full  md:col-span-1">
                <h2 className="py-3">
                  Coding challenges, web development projects, how-to guides,
                  and more, delivered straight to your inbox.
                </h2>
                <p className="">
                  <span>the</span>
                  <span className="text-lime-500">CodeMentor</span> newsletter
                  is the ultimate resource for developers who want to learn new
                  skills, improve their problem-solving abilities, and ace their
                  next tech interview. With twice-weekly emails packed with
                  coding challenges, web development projects, how-to guides,
                  and more, you'll be on your way to becoming a better developer
                  in no time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
