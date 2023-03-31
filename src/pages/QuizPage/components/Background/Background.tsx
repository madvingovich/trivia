import backgroundContainerStyle from "../../../BackgroundContainer.module.css";
import backgroundStyle from "./Background.module.css";

import img1 from "../../../../images/bg-quiz-1.svg";
import img2 from "../../../../images/bg-quiz-2.svg";
import img3 from "../../../../images/bg-quiz-3.svg";
import img4 from "../../../../images/bg-quiz-4.svg";
import img5 from "../../../../images/bg-quiz-5.svg";

function Background() {
  return (
    <div className={backgroundContainerStyle.container}>
      <img alt="" src={img1} />
      <img alt="" className={backgroundStyle.img2} src={img2} />
      <img alt="" className={backgroundStyle.img3} src={img3} />
      <img alt="" className={backgroundStyle.img4} src={img4} />
      <img alt="" className={backgroundStyle.img5} src={img5} />
    </div>
  );
}

export default Background;
