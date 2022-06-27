import Link from "next/link";
import Animation from "../components/home/animation";
import { Container, AnimationWrap, Content } from "../styles/indexStyle";
import { comment } from "../data/indexData";

const Home = () => {
  return (
    <Container>
      <Animation />
      <Content>
        <p>{comment}</p>
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
    </Container>
  );
};

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
