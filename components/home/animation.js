import Lottie from "react-lottie-player";
import lottieJson from "/public/animation.json";

const Animation = () => {
  return (
    <Lottie loop animationData={lottieJson} play style={{ width: "32rem", height: "32rem" }} />
  );
};

export default Animation;
