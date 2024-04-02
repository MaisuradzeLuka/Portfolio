import AppWrap from "../../Wrapper/AppWrap";
import { motion } from "framer-motion";
import { skillsList, experienceList } from "../../Constants/lists";
import "./Skills.scss";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      whileInView={{ y: [200, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2>Skills & Experience</h2>

      <div className="contentWrapper">
        <ul className="contentWrapper__skills">
          {skillsList.map((item) => (
            <li key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                style={{ backgroundColor: item.bgColor }}
              />
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>

        <article className="contentWrapper__experiences">
          {experienceList.map((item) => (
            <div
              className="contentWrapper__experiences__experience"
              key={item.id}
            >
              <h4 className="date">{item.date}</h4>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </article>
      </div>
    </motion.div>
  );
};

export default AppWrap(Skills, "skills");
