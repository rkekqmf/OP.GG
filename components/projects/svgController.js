import Notion from "/public/notion.svg";
import Github from "/public/github.svg";

const SvgController = ({ name, width, height, fill }) => {
  return (
    <>
      {name === "github" && (
        <Github width={width} height={height} fill={fill} />
      )}
      {name === "notion" && (
        <Notion width={width} height={height} fill={fill} />
      )}
    </>
  );
};

export default SvgController;
