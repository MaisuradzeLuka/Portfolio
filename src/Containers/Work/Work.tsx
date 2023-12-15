import "./Work.scss";
import AppWrap from "../../Wrapper/AppWrap";

import { workList } from "../../Constants/lists";
import { motion } from "framer-motion";

import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const Work = () => {
  return (
    <motion.div
      className="work"
      whileInView={{ y: [200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2>
        My Creative <span>Portfolio</span>
      </h2>
      <div className="worksList">
        {workList.map((item) => (
          <div key={item.id} className="worksList__work">
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <div className="imgOverlay">
              <a href={item.projectUrl} target="_blank">
                <FaEye />
              </a>
              <a href={item.codeUrl} target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AppWrap(Work, "work");
