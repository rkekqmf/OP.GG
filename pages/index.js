import Link from "next/link";
import styled from "styled-components";
import Animation from "../components/home/animation";

const Home = () => {
  return (
    <Container>
      <Content>
        <p>안녕하세요</p>
        <p>프론트엔드 개발자</p>
        <p>&quot;서성용&quot; 포트폴리오 입니다.</p>
        <div>
          <Link href="/profile">
            <a>
              <span>프로필 보러가기</span>
            </a>
          </Link>
          <Link href="/project">
            <a>
              <span>프로젝트 보러가기</span>
            </a>
          </Link>
        </div>
      </Content>
      <Animation />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 2.5em;
    font-weight: 600;
  }
  div {
    display: flex;
    column-gap: 1.5em;
    margin-top: 1em;
  }
  a {
    padding: 10px 20px;
    border-radius: 5px;
    width: fit-content;
    font-size: 1.5em;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.shadowColor};
  }
`;

export default Home;

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
