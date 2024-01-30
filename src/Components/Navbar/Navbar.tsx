import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";

import "./Navbar.scss";
import { useState } from "react";

import { images } from "../../Constants";
import { navList } from "../../Constants/lists";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <nav className="navBar">
      <div className="navBar__imgContainer">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="navBar__main">
        {navList.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              onClick={() => setShowNavBar(false)}
            >
              {item.section}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navBar__menu">
        <RxHamburgerMenu
          onClick={() => setShowNavBar(true)}
          className="navBar__menu-open"
        />

        {showNavBar && (
          <motion.div
            className="navBar__menu-sidePanel"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <IoIosClose
              onClick={() => setShowNavBar(false)}
              className="navBar__menu-close"
            />
            {navList.map((item) => {
              return (
                <ul key={item.id}>
                  <li>
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      onClick={() => setShowNavBar(false)}
                    >
                      {item.section}
                    </Link>
                  </li>
                </ul>
              );
            })}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
