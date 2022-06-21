import axios from "axios";
import styled from "styled-components";
import { DATABASE_ID, TOKEN } from "../config";

const projects = ({ projects }) => {
  return (
    <Container>
      <h1>프로젝트</h1>
      <h3>{projects.length}</h3>
      {projects.map((project) => (
        <h5 key={project}>{project.properties.이름.title[0].plain_text}</h5>
      ))}
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export default projects;

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
      data: { sorts: [{ property: "이름", direction: "ascending" }] },
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
