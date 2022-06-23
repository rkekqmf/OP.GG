import Image from "next/image";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import SvgController from "../common/svgController";

const TAG_COLOR = {
  React: "#61DAFB",
  "Next.js": "#7f7f7f",
  Sass: "#CC6699",
  "Styled Components": "#DB7093",
  "KakaoMap API": "#FFCD00",
  Axios: "#ae6afc",
  "Notion API": "#7f7f7f",
  "Riot API": "#D32936",
};

const ProjectsItem = ({ project }) => {
  const themeContext = useContext(ThemeContext);

  const projectCover = project.cover.file.url;
  const projectTitle = project.properties.name.title[0].plain_text;
  const projectIcon = project.icon.emoji;
  const projectTag = project.properties.tag.multi_select;
  const projectDescription = project.properties.description.rich_text[0].plain_text;
  const projectCategory = project.properties.category.rich_text[0].plain_text;
  const projectGithub = project.properties.github.rich_text[0]?.plain_text;
  const projectUrl = project.url;
  const projectStart = project.properties.period.date.start;
  const projectEnd = project.properties.period.date.end;
  console.log(projectGithub);
  const getPeriod = (start, end) => {
    if (end === null) return "진행중";

    const startDate = new Date(start);
    const endDate = new Date(end);
    const projectPeriod = endDate.getTime() - startDate.getTime();

    return Math.abs(projectPeriod / (1000 * 60 * 60 * 24)) + "일";
  };

  return (
    <Container>
      <ImageBox>
        <Image src={projectCover} layout="fill" objectFit="fill" alt="projectCover" />
      </ImageBox>
      <Property>
        <Title>
          <Name>
            <Text fontSize={1.5} marginRight={5}>
              {projectIcon}
            </Text>
            <Text fontWeight={800} fontSize={1.5}>
              {projectTitle + " (" + getPeriod(projectStart, projectEnd) + ")"}
            </Text>
          </Name>
          <Link>
            <Text as="a" href={projectGithub} target="_blank" display="flex" gap={10} marginRight={10} fontSize={1.2} cursor="pointer">
              <SvgController name="github" width={25} height={25} fill={themeContext.fontColor} />
            </Text>
            <Text as="a" href={projectUrl} target="_blank" display="flex" gap={10} fontSize={1.2} cursor="pointer">
              <SvgController name="notion" width={25} height={25} fill={themeContext.fontColor} />
            </Text>
          </Link>
        </Title>
        <Text fontWeight={700} fontSize={1.2}>
          {projectCategory}
        </Text>
        <Text fontWeight={400} fontSize={1.1} marginTop={10} marginBottom={10}>
          {projectDescription}
        </Text>
        {projectTag.map((tag) => (
          <Text
            key={tag.id}
            display="inline-block"
            marginRight={10}
            marginTop={10}
            padding={"3px 10px"}
            color={TAG_COLOR[tag.name]}
            fontWeight={700}
            fontSize={0.9}
            boxShadow={"0 0 3px 1px" + themeContext.shadowColor}
          >
            {tag.name}
          </Text>
        ))}
        <Text />
      </Property>
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
  height: 250px;
`;

const Property = styled.div`
  padding: 15px 12px 5px 12px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.div`
  display: flex;
`;

const Link = styled(Name)``;

const Text = styled.p`
  display: ${({ display }) => display};
  column-gap: ${({ gap }) => gap}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
  width: fit-content;
  font-family: Nanum Gothic, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}em;
  color: ${({ color }) => color};
  &:hover {
    cursor: ${({ cursor }) => cursor};
  }
`;
export default ProjectsItem;
