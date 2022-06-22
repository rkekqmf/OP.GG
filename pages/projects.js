import axios from "axios";
import styled from "styled-components";
import ProjectsItem from "../components/projects/ProjectsItem";
import { DATABASE_ID, TOKEN } from "../config";

const projects = ({ projects }) => {
  return (
    <Container>
      <div>
        <h1>프로젝트 총 : {projects.length}</h1>
      </div>
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
  margin-top: 25px;
  row-gap: 25px;
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  width: 70vw;
  gap: 30px;
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
      data: { sorts: [{ property: "name", direction: "ascending" }] },
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
