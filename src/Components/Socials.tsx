import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com/MaisuradzeLuka" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/luka-maisuradze-a5041b303"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/luka.gio.5" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};

export default Socials;
