import ProjectSuggestionForm from "@/components/ProjectSuggestionForm";
import WaitListForm from "@/components/WaitListForm";
import VoteButton from "@/components/admin/VoteButton";
import { getData } from "@/lib/getData";
import { Award, BarChart2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page() {
  const projectIdeas = await getData("suggested-projects");
  const approvedIdeas = projectIdeas?.filter((item) => item.status);
  // console.log(approvedIdeas);
  return (
    <div className="lg:p-16 p-8 mt-8 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-8 ">
          Project Suggestions Hub
        </h2>
        <p className="text-xl mb-8">
          Explore, propose, and vote on the next exciting projects! Share your
          project ideas, and let the community decide which ones rise to the
          top. Limiting users to two suggestions each ensures a diverse range of
          proposals!
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-col-1 mt-16">
        <ProjectSuggestionForm />
      </div>
      {approvedIdeas?.length > 0 && (
        <>
          <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-4 max-w-7xl mx-auto mt-16">
            All projects
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-4 lg:gap-8">
            {approvedIdeas?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-4 px-4 bg-slate-100 rounded-lg shadow-xl"
                >
                  <h2 className="bg-slate-800 text-slate-100 px-3 py-2 text-2xl rounded-lg">
                    {" "}
                    {item.title}
                  </h2>
                  <p className="text-slate-800 py-3 border-b border-gray-400 line-clamp-6 ">
                    {item.description}
                  </p>
                  <p className="text-slate-800 py-3 border-b border-gray-400">
                    Stack: {item.techStack}
                  </p>
                  <div className="flex justify-between items-center text-slate-800 py-4 border-b border-gray-400">
                    <a target="_blank" href={item.design}>
                      View Project Concept
                    </a>
                    <div title="votes" className="flex items-center space-x-2">
                      <BarChart2 />
                      {item.votes}
                    </div>
                    <VoteButton id={1} />
                  </div>
                  <div className="flex items-center py-4 justify-between">
                    <p className="text-slate-900 text-sm">Suggested By: </p>
                    <small className="font-bold text-pink-800">
                      {item?.puser?.fullName}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
