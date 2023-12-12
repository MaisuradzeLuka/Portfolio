import { navList } from "../Constants/lists";

const NavigationBtns = ({ active }: { active: string }) => {
  return (
    <div className="navBtn__container">
      {navList.map((item) => (
        <a
          href={item.id}
          key={item.id}
          className={active === item.id ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default NavigationBtns;
