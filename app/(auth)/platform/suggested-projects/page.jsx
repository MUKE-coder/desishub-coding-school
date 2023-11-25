import DeleteBtn from "@/components/DeleteBtn";
import ProjectSuggestionForm from "@/components/ProjectSuggestionForm";
import ToggleBtn from "@/components/ToggleBtn";
import VoteButton from "@/components/admin/VoteButton";
import { getData } from "@/lib/getData";
import { BarChart2 } from "lucide-react";
import React from "react";

export default async function page() {
  const projectIdeas = await getData("suggested-projects");
  return (
    <div>
      <div className="max-w-4xl mx-auto grid grid-col-1 mt-16">
        <ProjectSuggestionForm />
      </div>
      {projectIdeas && (
        <>
          <h2 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold text-3xl md:text-4xl lg:text-6xl py-8 mb-4 max-w-6xl mx-auto ">
            All projects
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-4 lg:gap-8">
            {projectIdeas.map((item, i) => {
              return (
                <div
                  key={i}
                  className="py-4 px-4 bg-slate-100 rounded-lg shadow-xl"
                >
                  <h2 className="bg-slate-800 text-slate-100 px-3 py-2 text-2xl rounded-lg">
                    {" "}
                    {item.title}
                  </h2>
                  <p className="text-slate-800 py-3 border-b border-gray-400 line-clamp-6">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center text-slate-800 py-4">
                    <ToggleBtn
                      endpoint={`api/suggested-projects/${item.id}`}
                      initialStatus={item.status}
                      resourceName="Status"
                    />
                    <DeleteBtn id={item.id} endpoint="suggested-projects" />
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
