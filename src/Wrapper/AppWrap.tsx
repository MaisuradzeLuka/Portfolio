import React from "react";
import { NavigationBtns, Socials } from "../Components";

import "./AppWrap.scss";

const AppWrap = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <div id={idName} className="app__wrap">
        <Socials />
        <div className="app__wrap-navigation">
          <Component />

          {/* <div className="copyright">
            <p className="p-text">@2020 MICHAEL</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
        </div>
        <NavigationBtns active={idName} />
      </div>
    );
  };

export default AppWrap;
