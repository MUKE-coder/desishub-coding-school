import jb from "../public/jb.JPG";
import Image from "next/image";
export default function Cube() {
  const chats = [
    {
      you: "When I follow along with tutorials I feel I know exactly what to do, but as soon as I try to build my own projects I get stuck.",
      mePhoto: jb,
      youPhoto: jb,
      me: "As a self-taught developer, I used to feel the same way! Let me show you how I overcame this.",
    },
    {
      you: "I have tried so many courses, but still don't know how to code JavaScript.",
      mePhoto: jb,
      youPhoto: jb,
      me: "This is because other courses don't teach you the most important topic, how to think like a developer.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex items-start justify-start flex-col">
        <h1 className="text-[1.5rem] sm:text-4xl lg:text-[3rem] md:font-extrabold lg:leading-[3.2rem] font-bold text-white leading-8 sm:leading-10 ">
          We can help you <span className="text-green-400">build</span> your
          dream <span className="text-pink-500">irrespective</span>of your
          previous struggles ...
        </h1>
        {chats.map((item, i) => {
          return (
            <div className="py-4" key={i}>
              <div className="py-3 mb-4 px-4 bg-slate-200 text-slate-600 flex items-center space-x-2 rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden mr-16">
                <Image
                  src={item.youPhoto}
                  width={50}
                  height={50}
                  alt="visitor"
                  className="rounded-full"
                />
                <span className="text-xs md:text-sm">{item.you}</span>
              </div>
              <div className="py-3 px-4 bg-slate-600 text-slate-100 flex items-center space-x-2 rounded-tr-[2rem] rounded-bl-[2rem] overflow-hidden ml-16">
                <span className="text-xs md:text-sm ">{item.me}</span>
                <Image
                  src={item.mePhoto}
                  width={50}
                  height={50}
                  alt="JB WEB DEVELOPER"
                  className="rounded-full"
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        <div className="cube-container">
          <div className="cube cube1">
            <div className="box box1 front">Front</div>
            <div className="box box1 right">Right</div>
            <div className="box box1 top">Top</div>
            <div className="box box1 bottom">Bottom</div>
            <div className="box box1 left">Left</div>
            <div className="box box1 back">Back</div>
          </div>
          {/* <div className="cube cube2">
            <div className="box box2 front">Front</div>
            <div className="box box2 back">Back</div>
            <div className="box box2 top">Top</div>
            <div className="box box2 bottom">Bottom</div>
            <div className="box box2 left">Left</div>
            <div className="box box2 right">Right</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
