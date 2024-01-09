import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PricingPlan({ coursePricing }) {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border border-green-700 rounded-lg">
      <div className="relative">
        <Image
          src="/grid.svg"
          alt="background"
          width={1572}
          height={795}
          className="absolute -top-28 -z-10"
          style="color: transparent"
        />
      </div>
      <div className=" mx-auto max-w-7xl ">
        <div className="max-w-xl px-8 mx-auto text-center md:px-0">
          <h2 className="text-3xl font-bold text-slate-300 sm:text-4xl xl:text-5xl font-pj">
            {coursePricing.title}
          </h2>
          <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
            {coursePricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:text-left md:mt-16 md:max-w-6xl md:grid-cols-3  w-full">
          {coursePricing?.plans.map((plan, i) => {
            // console.log(plan);
            if (plan.title === "Platinum") {
              return (
                <div key={i} className="relative">
                  <div className="absolute -inset-4">
                    <div
                      className="w-full h-full mx-auto rotate-180 opacity-30 blur-lg filter"
                      style={{
                        background:
                          "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                      }}
                    ></div>
                  </div>

                  <div className="relative overflow-hidden bg-gray-900 border border-gray-200 rounded-2xl">
                    <div className="p-6 lg:px-4 lg:py-8">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-white font-pj ">
                          {plan.title}
                        </h3>
                        <p className="mt-3 text-5xl font-bold text-white font-pj">
                          ${plan.price}
                        </p>
                        {/* {plan.description && (
                          <p className="mt-5 text-base font-normal leading-7 text-gray-400 font-pj">
                            {plan.description}
                          </p>
                        )} */}
                      </div>
                      <a
                        href={plan.subscriptionLink}
                        title=""
                        className="
                            inline-flex
                            items-center
                            justify-center
                            px-8
                            py-3.5
                            w-full
                            mt-8
                            text-base
                            font-bold
                            text-gray-900
                            bg-white
                            transition-all
                            duration-200
                            border-2 border-transparent
                            focus:ring-offset-gray-900
                            rounded-xl
                            font-pj
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white
                            hover:bg-opacity-90
                        "
                        role="button"
                      >
                        Buy Now
                      </a>

                      <p className="mt-8 text-base font-bold text-white font-pj">
                        What's included:
                      </p>

                      <ul className="mt-4 space-y-3 text-sm  text-gray-400 font-pj">
                        {plan.whatsIncluded.map((item, i) => {
                          return (
                            <li key={i} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                      {/* Special Access */}
                      <p className="mt-4 pt-8 text-base font-bold text-white font-pj border-t border-slate-500">
                        Special Access:
                      </p>

                      <ul className="mt-4 space-y-3 text-sm  text-gray-400 font-pj">
                        {plan.specialAccess.map((item, i) => {
                          return (
                            <li key={i} className="flex items-center space-x-2">
                              <Check className="w-4 h-4 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className="overflow-hidden bg-white border border-gray-200 rounded-2xl"
                >
                  <div className="p-3 lg:px-4 lg:py-8">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-gray-900 font-pj">
                        {plan.title}
                      </h3>
                      <p className="mt-3 text-5xl font-bold text-gray-900 font-pj">
                        ${plan.price}
                      </p>
                      {/* <p className="mt-5 text-sm font-normal leading-7 text-gray-600 font-pj">
                        {plan.description}
                      </p> */}
                    </div>
                    <a
                      href={plan.subscriptionLink}
                      title=""
                      className="
                        inline-flex
                        items-center
                        justify-center
                        px-8
                        py-3.5
                        w-full
                        mt-8
                        text-base
                        font-bold
                        text-gray-900
                        transition-all
                        duration-200
                        border-2 border-gray-400
                        rounded-xl
                        font-pj
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900
                        hover:bg-gray-900
                        focus:bg-gray-900
                        hover:text-white
                        focus:text-white
                        hover:border-gray-900
                        focus:border-gray-900
                    "
                      role="button"
                    >
                      Get Started
                    </a>

                    <p className="mt-8 text-base font-bold text-gray-900 font-pj">
                      What's included:
                    </p>
                    <ul className="mt-4 space-y-3 text-sm  text-gray-600 font-pj">
                      {plan.whatsIncluded.map((item, i) => {
                        return (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-4 h-4 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
