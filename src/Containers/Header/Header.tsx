/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";

import "./Header.scss";
import { images } from "../../Constants";

import AppWrap from "../../Wrapper/AppWrap";

const Header: React.FC = () => {
  return (
    <header className="header" id="home">
      <motion.div
        className="header__info"
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.6 }}
      >
        <div className="header__info-textWrapper">
          <span>👋</span>
          <div>
            <p className="p-text">Hello, I am</p>
            <h1>Luka</h1>
          </div>
        </div>
        <div className="header__info-textWrapper">
          <p className="p-text">Web Developer</p>
        </div>
      </motion.div>
      <motion.div className="header__profile">
        <motion.img
          animate={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{ duration: 1.5 }}
          src={images.circle}
          alt="profile_background"
          className="profile-bg"
          width={350}
          height={480}
        />
        <motion.img
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.6 }}
          src={images.profile}
          alt="profile_image"
          className="profile-img"
        />
      </motion.div>
      <motion.div
        className="header__circles"
        whileInView={{ scale: [0, 1], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => {
          return (
            <div className="circle" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          );
        })}
      </motion.div>
    </header>
  );
};

export default AppWrap(Header, "home");
