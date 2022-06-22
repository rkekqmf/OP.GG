import Link from "next/link";

import styled from "styled-components";
import Animation from "../components/home/animation";

export default function Home() {
  return (
    <Container>
      <Content>
        <h1>안녕하세요</h1>
        <h1>포트폴리오입니다</h1>
        <Link href="/projects">
          <a>
            <span>프로젝트 보러가기</span>
          </a>
        </Link>
      </Content>
      <Animation />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// export const getStaticProps = async () => {
//   try {
//     const options = {
//       method: "POST",
//       url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
//       headers: {
//         Accept: "application/json",
//         "Notion-Version": "2022-02-22",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${TOKEN}`,
//       },
//       data: { page_size: 100 },
//     };

//     const response = await axios.request(options);

//     return {
//       props: {
//         projects: response.data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const getStaticProps = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//     );
//     return {
//       props: {
//         posts: response.data,
//       },
//     };
//   } catch (err) {
//     console.log(err);
//   }
// };
