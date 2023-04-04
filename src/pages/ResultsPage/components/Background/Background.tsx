import backgroundContainerStyle from "pages/BackgroundContainer.module.css";
import backgroundStyles from "./Background.module.css";

import img1 from "images/bg-result-1.svg";
import img2 from "images/bg-result-2.svg";
import img3 from "images/bg-result-3.svg";
import img4 from "images/bg-result-4.svg";
import img5 from "images/bg-result-5.svg";
import img6 from "images/bg-result-6.svg";

import imgDesktop1 from "images/bg-result-desktop-1.svg";
import imgDesktop2 from "images/bg-result-desktop-2.svg";
import imgDesktop3 from "images/bg-result-desktop-3.svg";
import imgDesktop4 from "images/bg-result-desktop-4.svg";

function Background() {
  return (
    <div
      className={`${backgroundContainerStyle.container} ${backgroundStyles.container}`}
    >
      <div className={backgroundContainerStyle.mobileView}>
        <img alt="" className={backgroundStyles.img1} src={img1} />
        <img alt="" className={backgroundStyles.img2} src={img2} />
        <img alt="" className={backgroundStyles.img3} src={img3} />
        <img alt="" className={backgroundStyles.img4} src={img4} />
        <img alt="" className={backgroundStyles.img5} src={img5} />
        <img alt="" className={backgroundStyles.img6} src={img6} />
      </div>
      <div className={backgroundContainerStyle.desktopView}>
        <img alt="" src={imgDesktop1} />
        <img
          alt=""
          className={backgroundStyles.imgDesktop2}
          src={imgDesktop2}
        />
        <img
          alt=""
          className={backgroundStyles.imgDesktop3}
          src={imgDesktop3}
        />
        <img
          alt=""
          className={backgroundStyles.imgDesktop4}
          src={imgDesktop4}
        />
      </div>
    </div>
  );
}

export default Background;
