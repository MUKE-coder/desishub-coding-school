import React from "react";
import Typed from "typed.js";

export default function Typing() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '$&nbsp;Welcome to Desishub Coding School 💻<br/><span class="text-primary">where you can learn coding and become a professional developer 👨‍💻 in no time.</span><br/><br/>$&nbsp;Whether you are interested in frontend🖥️🌐, backend🌐🔌, fullstack or mobile app 📱📲 development<br/><span class="text-success">we have the courses that suit your needs and goals .</span><br/><br/><span class="text-primary">$&nbsp;Join us 🤝 today 📅 and discover how coding can transform your life!🚀</span>',
      ],
      typeSpeed: 50,
      backSpeed: 0,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
