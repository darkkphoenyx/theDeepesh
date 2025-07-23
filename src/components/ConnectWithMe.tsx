import { useEffect, useRef, useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import RotatingText from "../animations/TextAnimations/RotatingText/RotatingText";

const Links = [
  {
    id: 1,
    media: "Facebook",
    display: "Facebook - Deepesh Sunuwar",
    link: "https://www.facebook.com/deepesh.sunuwar.08",
    icon: <Facebook size={18} />,
  },
  {
    id: 2,
    media: "Instagram",
    display: "Instagram - sun_deepesh",
    link: "https://www.instagram.com/sun_deepesh/",
    icon: <Instagram size={18} />,
  },
  {
    id: 3,
    media: "Github",
    display: "Github - darkkphoenyx",
    link: "https://github.com/darkkphoenyx",
    icon: <Github size={18} />,
  },
  {
    id: 4,
    media: "LinkedIn",
    display: "LinkedIn - Deepesh Sunuwar",
    link: "https://www.linkedin.com/in/deepeshsunuwar/",
    icon: <Linkedin size={18} />,
  },
  {
    id: 5,
    media: "Gmail",
    display: "Gmail - Deepesh Sunuwar",
    link: "https://www.linkedin.com/in/deepeshsunuwar/",
    icon: <Linkedin size={18} />,
  },
];

const ConnectWithMe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const currentLink = Links[currentIndex].link;
    window.open(currentLink, "_blank");
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Links.length);
    }, 2000); // Match with RotatingText interval

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="px-4 z-20">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 bg-primary text-background px-4 py-2 rounded-md transition hover:scale-105 hover:bg-secondary cursor-pointer"
      >
        {Links[currentIndex].icon}
        <RotatingText
          texts={Links.map((link) => link.display)}
          rotationInterval={2000}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          initial={{ y: "100%" }}
          staggerFrom="last"
          staggerDuration={0.025}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          mainClassName="overflow-hidden text-sm"
          splitLevelClassName="overflow-hidden"
        />
      </button>
    </div>
  );
};

export default ConnectWithMe;
