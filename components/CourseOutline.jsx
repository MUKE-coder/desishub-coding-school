import { Check, PlusCircle } from "lucide-react";
import React from "react";

export default function CourseOutline() {
  const modules = [
    {
      module: "Module:1 - Next js 14, Tailwind Css and Typescript Basics",
      title:
        "Building a Full-Stack Portfolio with CRUD, APIs, Prisma, and MongoDB",
      topics: [
        "Introduction to Next.js 14: Core Concepts, File-System Routing, Client and  Server Components",
        "Setting up a Next.js 14 Project with TypeScript and Tailwind CSS",
        "Data Fetching: Parallel fetching, Sequential Data Fetching, Fetching with third parties",
        "Routing: Pages, Dynamic Routes, Nested Routes",
        "State Management: React Context, Zustand, Redux Toolkit",
        "Forms: Handling User Input, Validation, File Uploads",
        "API Routes: Creating RESTful APIs for Data Interactions",
        "Integrating with Prisma and MongoDB for Data Handling",
        "Authentication and Authorization Concepts",
        "Error Handling and Edge Cases",
        "Deployment Strategies for Next.js Apps",
      ],
    },
    {
      module: "Module 2: SaaS Business Essentials for Developers",
      title: "Transforming Technical Skills into Successful SaaS Products",
      topics: [
        "What is saas and why is it popular",
        "Leveraging Technical Skills for SaaS",
        "How to find a saas idea and validate it",
        "How to design a saas product and user interface",
        "How to market and launch your saas product",
        "How to monetize and scale your saas product",
        "How to use analytics and feedback to improve your saas product",
        "Monetization Strategies: Subscription models, Freemium models,Pricing strategies",
      ],
    },
    {
      module: " Building a Medical App with Next.js",
      title: "Next Js in Health Care",
      topics: [
        "Understanding Medical App Requirements",
        "Planning and designing the medical app",
        "Creating the frontend UI with Next.js 14, Typescript and Tailwind CSS",
        "Creating the backend API with Next.js 14 ,Prisma and MongoDB",
        "Adding authentication and authorization with NextAuth",
        "Adding features such as booking appointments, managing prescriptions, and sending notifications",
        "Testing and debugging the medical app",
        "Deploying the medical app to Vercel or Netlify",
      ],
    },
    {
      module: "Module 4: Building a Banking App with Next.js",
      title: "FinTech with Next.js",
      topics: [
        "Financial Application Requirements",
        "Planning and designing the Banking app",
        "Creating the frontend UI with Next.js 14, Typescript and Tailwind CSS",
        "Creating the backend API with Next.js 14 ,Prisma and MongoDB",
        "User Authentication and Authorization (Multi-Factor)",
        "Account Management Features",
        "Transaction History and Reporting",
        "Payment Processing Integrations",
        "Deploying the Banking app to Vercel or Netlify",
      ],
    },
    {
      module: "Module 5: Reusable SaaS Template Development",
      title: "Building a Scalable Starter Kit for Future Projects",
      topics: [
        "Designing a Modular and Adaptable SaaS Template",
        "User Authentication and Authorization Components",
        "Subscription Management and Billing Features",
        "Data Management and API Endpoints",
        "User Interface Components and Templates",
        "Deployment and Scalability Considerations",
        "Testing and Maintenance Strategies",
      ],
    },
  ];
  const features = ["Feature 1", "Feature 2", "Feature 3"];
  return (
    <div className="p-16">
      <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
        {modules.map((item, i) => {
          return (
            <li className="mb-10 ms-6" key={i}>
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <PlusCircle className="w-4 h-4 text-blue-800 dark:text-blue-300 " />
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  text-transparent bg-clip-text textGradient">
                {item.module}
              </h3>
              <ul className="text-left pt-4 ">
                {item.topics.map((item, i) => {
                  return (
                    <li key={i} className="flex items-center space-x-2 mb-2">
                      <Check className="w-4 h-4 flex-shrink-0 text-pink-500" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
