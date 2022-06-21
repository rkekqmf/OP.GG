import Lottie from "react-lottie-player";
import styled from "styled-components";
import lottieJson from "/public/animation.json";
export default function Home({ posts }) {
  return (
    <Container>
      <Content>
        <h1>Welcome to My Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
        <span>프로젝트 보러가기</span>
      </Content>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 500, height: 500 }}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
