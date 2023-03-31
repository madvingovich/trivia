import backgroundContainerStyle from "pages/BackgroundContainer.module.css";
import backgroundStyle from "./Background.module.css";
import img1 from "images/bg-welcome-1.svg";
import img2 from "images/bg-welcome-2.svg";
import img3 from "images/bg-welcome-3.svg";

function Background() {
  return (
    <div
      className={`${backgroundContainerStyle.container} ${backgroundStyle.container}`}
    >
      <img alt="" src={img1} />
      <img alt="" className={backgroundStyle.img2} src={img2} />
      <img alt="" className={backgroundStyle.img3} src={img3} />
      <img alt="" className={backgroundStyle.img4} src={img1} />
    </div>
  );
}

export default Background;
