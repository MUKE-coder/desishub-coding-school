import React from "react";

export default function FindOut() {
  return (
    <div className="bg-red-600 mt-32 flex ">
      <div className="">
        <h2 className="text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-10">
          We can help you build your dream career,{" "}
          <span className="text-lime-400">even if ...</span>
        </h2>
        <ul>
          <li>
            You're <strong className="text-green-400">completely new</strong> to
            technology and have never written a line of code before!
          </li>
          <li>
            You've <strong className="text-green-400">struggled</strong> with
            coding in the past.!
          </li>
          <li>
            You've wondered "am I{" "}
            <strong className="text-green-400">too old</strong> to start
            something new?"
          </li>
          <li>
            You're{" "}
            <span className="text-green-400">completely overwhelmed</span> and
            have no idea where to start.
          </li>
        </ul>
      </div>
      <div className="w-1/4 bg-purple-600 flex flex-col gap-2">
        <h2>Sound like you?</h2>
        <p>If so, take our Tech Career Path Quiz now to get a</p>
        <p>personalized, step-by-step roadmap to achieving your dream career</p>
        <button className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm md:text-xl px-5 py-2.5 md:py-4 text-center mr-2 mb-2">
          Create My Career Path
        </button>
      </div>
    </div>
  );
}
