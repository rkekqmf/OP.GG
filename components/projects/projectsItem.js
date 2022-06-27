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
  Redux: "#ae6afc",
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
            <Text fontSize={2.2} marginRight={0.5}>
              {projectIcon}
            </Text>
            <Text fontSize={2.2} fontWeight={800} opacity={0.8}>
              {projectTitle + " (" + getPeriod(projectStart, projectEnd) + ")"}
            </Text>
          </Name>
          <Link>
            {projectGithub !== undefined && (
              <Text
                as="a"
                href={projectGithub}
                target="_blank"
                rel="noreferrer"
                marginRight={1}
                fontSize={1.5}
                cursor="pointer"
              >
                <SvgController name="github" width={30} height={30} fill={themeContext.fontColor} />
              </Text>
            )}
            <Text
              as="a"
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              fontSize={1.5}
              cursor="pointer"
            >
              <SvgController name="notion" width={30} height={30} fill={themeContext.fontColor} />
            </Text>
          </Link>
        </Title>
        <Text fontWeight={700} fontSize={1.8}>
          {projectCategory}
        </Text>
        <Text fontWeight={400} fontSize={1.6} marginTop={1} marginBottom={1} lineHeight={1.5}>
          {projectDescription}
        </Text>
        {projectTag.map((tag) => (
          <Text
            key={tag.id}
            display="inline-block"
            marginRight={1}
            marginTop={1}
            padding={"0.3em 1em"}
            color={TAG_COLOR[tag.name]}
            fontWeight={700}
            fontSize={1.5}
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
    transform: none;
    box-shadow: none;
    ${({ theme }) => theme.lg`
    transform: scale3d(1.1, 1.1, 1.1);
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.shadowColor};
  `}
  }
`;

const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
`;

const Property = styled.div`
  padding: 2em 1.3em;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3em;
  ${({ theme }) => theme.sm`
  flex-direction: row;
  `}
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled(Name)``;

const Text = styled.p`
  display: ${({ display }) => display};
  column-gap: ${({ gap }) => gap}em;
  margin-top: ${({ marginTop }) => marginTop}em;
  margin-right: ${({ marginRight }) => marginRight}em;
  margin-bottom: ${({ marginBottom }) => marginBottom}em;
  padding: ${({ padding }) => padding};
  border-radius: 5px;
  box-shadow: ${({ boxShadow }) => boxShadow};
  background: ${({ background }) => background};
  width: fit-content;
  font-family: Nanum Gothic, sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  word-spacing: 0.05em;
  letter-spacing: 0.02em;
  line-height: ${({ lineHeight }) => lineHeight}em;
  &:hover {
    cursor: ${({ cursor }) => cursor};
  }
`;
export default ProjectsItem;
