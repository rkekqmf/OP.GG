import Image from "next/image";
import React from "react";
import styled from "styled-components";

const TAG_BACKGROUND = { react: "#61DAFB", "next.js": "#000000" };

const ProjectsItem = ({ project }) => {
  const projectCover = project.cover.external.url;
  const projectTitle = project.properties.name.title[0].plain_text;
  const projectIcon = project.icon.emoji;
  const projectTag = project.properties.tag.multi_select;
  const projectDescription =
    project.properties.description.rich_text[0].plain_text;
  const projectGithub = project.properties.github.rich_text[0].plain_text;
  const projectStart = project.properties.period.date.start;
  const projectEnd = project.properties.period.date.end;

  const getPeriod = (start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const projectPeriod = endDate.getTime() - startDate.getTime();

    return Math.abs(projectPeriod / (1000 * 60 * 60 * 24));
  };

  return (
    <Container>
      <ImageBox>
        <Image
          src={projectCover}
          layout="fill"
          objectFit="fill"
          alt="projectCover"
        />
      </ImageBox>
      <Content>
        <Text display="inline-block" fontSize={1.5} margin={10}>
          {projectIcon}
        </Text>
        <Text display="inline-block" fontSize={1.5}>
          {projectTitle + "(" + getPeriod(projectStart, projectEnd) + "일)"}
        </Text>
        <Text>{projectDescription}</Text>
        {projectTag.map((tag) => (
          <Text
            key={tag.id}
            display="inline-block"
            margin={10}
            padding={5}
            background={TAG_BACKGROUND[tag.name]}
            color="#fff"
          >
            {tag.name}
          </Text>
        ))}

        <Text as="a" fontSize={1.2}>
          {projectGithub}
        </Text>
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
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  padding: 15px;
`;

const Text = styled.p`
  display: ${({ display }) => display};
  margin-right: ${({ margin }) => margin}px;
  margin-bottom: 10px;
  padding: ${({ padding }) => padding}px;
  border-radius: 5px;
  background: ${({ background }) => background};
  font-size: ${({ fontSize }) => fontSize}em;
  color: ${({ color }) => color};
`;
export default ProjectsItem;
