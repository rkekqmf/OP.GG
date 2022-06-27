import axios from "axios";
import styled from "styled-components";
import ProjectsItem from "../components/projects/projectsItem";
import { DATABASE_ID, TOKEN } from "../config";

const Project = ({ projects }) => {
  return (
    <Container>
      <Title>
        <h1>프로젝트</h1>
        <span>( 총 : {projects.length}개 )</span>
      </Title>
      <ProjectsList>
        {projects.map((project) => (
          <ProjectsItem key={project.id} project={project} />
        ))}
      </ProjectsList>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  row-gap: 8em;
  margin-top: 10em;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  align-items: center;
  transform: translateX(0);

  ${({ theme }) => theme.lg`
    flex-direction: row;
    column-gap: 2em;
    transform: translateX(5em);  
  `}

  h1 {
    font-size: 5rem;
    margin-top: 1em;
    ${({ theme }) => theme.lg`
    margin-top: 0;
  `}
  }

  span {
    font-size: 2.5rem;
    opacity: 0.8;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  width: 70%;
  gap: 4em 6em;
  ${({ theme }) => theme.sm`
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));  
  `}
`;

export default Project;

export const getStaticProps = async () => {
  try {
    const options = {
      method: "POST",
      url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      headers: {
        Accept: "application/json",
        "Notion-Version": "2022-02-22",
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      data: { sorts: [{ property: "period", direction: "ascending" }] },
    };

    const response = await axios.request(options);

    return {
      props: {
        projects: response.data.results,
      },
    };
  } catch (err) {
    console.log(err);
  }
};
