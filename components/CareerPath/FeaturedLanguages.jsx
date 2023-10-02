import Marquee from "react-fast-marquee";
import LanguageCard from "./LanguageCard";

const languages = [
  {
    name: "HTML",
    logo: "/logos/htmlred.svg",
  },
  {
    name: "Css",
    logo: "/logos/css-3.svg",
  },
  {
    name: "Javascript",
    logo: "/logos/js.svg",
  },
  {
    name: "Python",
    logo: "/logos/python.svg",
  },
  {
    name: "Django",
    logo: "/logos/django.svg",
  },
  {
    name: "Larvel",
    logo: "/logos/laravel.svg",
  },
  {
    name: "PHP",
    logo: "/logos/php-1.svg",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
  },
  {
    name: "Jamstack",
    logo: "/logos/jamstack.svg",
  },
  {
    name: "Tailwind",
    logo: "/logos/tailwind.svg",
  },
  {
    name: "Next Js",
    logo: "/logos/nextjs.svg",
  },
  {
    name: "Node Js",
    logo: "/logos/nodejs.svg",
  },
  {
    name: "Github",
    logo: "/logos/git.svg",
  },
  {
    name: "C++",
    logo: "/logos/cplus.svg",
  },
];

export default function FeaturedLanguages() {
  return (
    <Marquee pauseOnHover={true} gradient={true} className="">
      {languages.map((lang, i) => (
        <LanguageCard key={i} logo={lang.logo} title={lang.name} />
      ))}
    </Marquee>
  );
}
