import { motion } from "framer-motion";
import { Navbar } from "../../Components";

import "./Header.scss";
import { images } from "../../Constants";

const Header = () => {
  return (
    <>
      <Navbar />
      <header className="header">
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
    </>
  );
};

export default Header;
