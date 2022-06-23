import Github from "/public/github.svg";
import Notion from "/public/notion.svg";
import Blogger from "/public/blogger.svg";
import Gmail from "/public/gmail.svg";
import Instagram from "/public/instagram.svg";
import Riotgames from "/public/riotgames.svg";

const SvgController = ({ name, width, height, fill }) => {
  return (
    <>
      {name === "github" && <Github width={width} height={height} fill={fill} />}
      {name === "notion" && <Notion width={width} height={height} fill={fill} />}
      {name === "blogger" && <Blogger width={width} height={height} fill={fill} />}
      {name === "gmail" && <Gmail width={width} height={height} fill={fill} />}
      {name === "instagram" && <Instagram width={width} height={height} fill={fill} />}
      {name === "riotgames" && <Riotgames width={width} height={height} fill={fill} />}
    </>
  );
};

export default SvgController;
