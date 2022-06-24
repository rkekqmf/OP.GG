import Lottie from "react-lottie-player";
import lottieJson from "/public/animation.json";

const Animation = () => {
  return <Lottie loop animationData={lottieJson} play style={{ width: 400, height: 400 }} />;
};

export default Animation;
