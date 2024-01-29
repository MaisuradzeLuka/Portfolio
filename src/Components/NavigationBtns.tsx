import { navList } from "../Constants/lists";
import { Link } from "react-scroll";

const NavigationBtns = ({ active }: { active: string }) => {
  return (
    <div className="navBtn__container">
      {navList.map((item) => (
        <Link
          to={item.id}
          duration={500}
          smooth={true}
          key={item.id}
          className={active === item.id ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default NavigationBtns;
