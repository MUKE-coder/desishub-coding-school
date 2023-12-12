import Marquee from "react-fast-marquee";
import LanguageCard from "./LanguageCard";

export default function FeaturedLanguages({languages}) {
  return (
    <Marquee pauseOnHover={true} gradient={true} className="">
      {languages.map((lang, i) => (
        <LanguageCard key={i} logo={lang.logo} title={lang.name} />
      ))}
    </Marquee>
  );
}
