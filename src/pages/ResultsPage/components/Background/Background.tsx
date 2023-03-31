import backgroundContainerStyle from "pages/BackgroundContainer.module.css";
import backgroundStyles from "./Background.module.css";

function Background() {
  return (
    <div
      className={`${backgroundContainerStyle.container} ${backgroundStyles.container}`}
    ></div>
  );
}

export default Background;
