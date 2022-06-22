import Image from "next/image";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import SvgController from "./svgController";

const TAG_BACKGROUND = {
  React: "#61DAFB",
  "Next.js": "#000000",
  Sass: "#CC6699",
  "Styled Components": "#DB7093",
  "KakaoMap API": "#FFCD00",
  Axios: "#56347C",
  "Notion API": "#000000",
  "Riot API": "#D32936",
};

const ProjectsItem = ({ project }) => {
  const themeContext = useContext(ThemeContext);

  const projectCover = project.cover.external.url;
  const projectTitle = project.properties.name.title[0].plain_text;
  const projectIcon = project.icon.emoji;
  const projectTag = project.properties.tag.multi_select;
  const projectDescription =
    project.properties.description.rich_text[0].plain_text;
  const projectGithub = project.properties.github.rich_text[0].plain_text;
  const projectUrl = project.url;
  const projectStart = project.properties.period.date.start;
  const projectEnd = project.properties.period.date.end;

  const getPeriod = (start, end) => {
    if (end === null) return "진행중";

    const startDate = new Date(start);
    const endDate = new Date(end);
    const projectPeriod = endDate.getTime() - startDate.getTime();

    return Math.abs(projectPeriod / (1000 * 60 * 60 * 24)) + "일";
  };

  console.log(project);
  return (
    <Container>
      <ImageBox>
        <span>이미지 왜안나와</span>
        <Image
          src={projectCover}
          layout="fill"
          objectFit="fill"
          alt="projectCover"
        />
      </ImageBox>
      <Content>
        <Text display="inline-block" fontSize={1.5} margin={5}>
          {projectIcon}
        </Text>
        <Text display="inline-block" fontSize={1.5}>
          {projectTitle + " (" + getPeriod(projectStart, projectEnd) + ")"}
        </Text>
        <Text>{projectDescription}</Text>
        {projectTag.map((tag) => (
          <Text
            key={tag.id}
            display="inline-block"
            margin={10}
            padding={"3px 10px"}
            background={TAG_BACKGROUND[tag.name]}
            color="#fff"
            fontSize={0.9}
          >
            {tag.name}
          </Text>
        ))}
        <Text />
        <div>
          <Text
            as="a"
            href={projectGithub}
            target="_blank"
            margin={10}
            fontSize={1.2}
            cursor="pointer"
          >
            <SvgController
              name="github"
              width={30}
              height={30}
              fill={themeContext.fontColor}
            />
          </Text>
          <Text
            as="a"
            href={projectUrl}
            target="_blank"
            fontSize={1.2}
            cursor="pointer"
          >
            <SvgController
              name="notion"
              width={30}
              height={30}
              fill={themeContext.fontColor}
            />
          </Text>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
    box-shadow: 1px 1px 3px 1px ${({ theme }) => theme.shadowColor};
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  max-height: 200px;
`;

const Content = styled.div`
  padding: 15px 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Text = styled.p`
  display: ${({ display }) => display};
  margin-right: ${({ margin }) => margin}px;
  margin-bottom: 10px;
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  background: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize}em;
  color: ${({ color }) => color};
  &:hover {
    cursor: ${({ cursor }) => cursor};
  }
`;
export default ProjectsItem;
