import AppWrap from "../../Wrapper/AppWrap";

import "./About.scss";

import { aboutList } from "../../Constants/lists";
import { motion } from "framer-motion";

const About = () => {
  return (
    <article className="about">
      <h2 className="about__title">
        I Know That <span>Good Dev</span> Means <br />{" "}
        <span>Good Business</span>
      </h2>
      <div className="about__cards">
        {aboutList.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="about__cards-card"
          >
            <img src={item.img} alt={`${item.title} image`} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </article>
  );
};

export default AppWrap(About, "about");
