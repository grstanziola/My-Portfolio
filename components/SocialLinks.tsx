import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const SocialLinks = () => {
  // Function to handle the click event
  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex space-x-4">
      <div
        className="text-black hover:text-blue-500 cursor-pointer"
        onClick={() =>
          handleLinkClick(
            "https://www.linkedin.com/in/gabriel-stanziola-862722187"
          )
        }
      >
        <SiLinkedin size={20} />
      </div>
      <div
        className="text-black hover:text-blue-500 cursor-pointer"
        onClick={() => handleLinkClick("https://github.com/gabo2001")}
      >
        <SiGithub size={20} />
      </div>
    </div>
  );
};

export default SocialLinks;
