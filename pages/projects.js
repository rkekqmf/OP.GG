import axios from "axios";
import styled from "styled-components";
import ProjectsItem from "../components/projects/ProjectsItem";
import { DATABASE_ID, TOKEN } from "../config";

<<<<<<< HEAD
const projects = ({ projects }) => {
=======
const projects = ({ theme, projects }) => {
>>>>>>> 43b04657238185c51422e0052288e14cab260eaa
  return (
    <Container>
      <div>
        <h1>프로젝트</h1>
        <span>(총 : {projects.length}개)</span>
      </div>
      <ProjectsList>
        {projects.map((project) => (
<<<<<<< HEAD
          <ProjectsItem key={project.id} project={project} />
=======
          <ProjectsItem key={project.id} theme={theme} project={project} />
>>>>>>> 43b04657238185c51422e0052288e14cab260eaa
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
<<<<<<< HEAD
  margin-top: 30px;
  row-gap: 50px;
=======
  margin-top: 25px;
  row-gap: 25px;
>>>>>>> 43b04657238185c51422e0052288e14cab260eaa
  h1 {
    display: inline-block;
  }
`;

const ProjectsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  width: 70vw;
<<<<<<< HEAD
  gap: 25px;
=======
  gap: 30px;
>>>>>>> 43b04657238185c51422e0052288e14cab260eaa
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
