import axios from "axios";
import styled from "styled-components";
import ProjectsItem from "../components/projects/projectsItem";
import { DATABASE_ID, TOKEN } from "../config";

const projects = ({ projects }) => {
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
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 65px;
  row-gap: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  h1 {
    font-size: 3em;
  }
  span {
    font-size: 1.5em;
  }
`;
const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  width: 80vw;
  gap: 40px 60px;
  transition: 0.01s;
`;

export default projects;

export const getServerSideProps = async () => {
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
