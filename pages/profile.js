import axios from "axios";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const comment1 = "프론트엔드 개발자 서성용 입니다.";
  const comment2 =
    "경험과 도전 그리고,\n즐거움을 최고의 가치로 생각합니다.\n\n수 차례 많은 실패와 실수,\n그런 경험에서 얻은 교훈을 바탕으로 또 다시 도전합니다.\n\n이러한 과정들 속에서 스스로의 행복과,\n업무능력 향상에 도움되는 즐거움을 찾습니다.";

  return (
    <Container>
      <Contact>
        <ImageBox>
          <Image src="/증명사진.jpg" width={250} height={250} alt="프로필사진" />
        </ImageBox>
        <a href="tel:+821063367941" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="mailto:rkekqmf@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </Contact>
      <Content>
        <Comment1>{comment1}</Comment1>
        <Comment2>{comment2}</Comment2>
        <a
          href="https://rkekqmf.notion.site/896b6c5d619949f4a430931addbe3dd1"
          target="_blank"
          rel="noreferrer"
        >
          <span>이력서 보러가기</span>
        </a>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5.5em;
`;

const ImageBox = styled.div`
  position: relative;
  margin-bottom: 30px;
  border-radius: 50%;
  height: 250px;
  overflow: hidden;
`;

const Contact = styled.div`
  text-align: center;
  a {
    margin: 0 10px;
    padding: 10px 10px;
    border-radius: 50%;
    width: fit-content;
    font-size: 1.5em;
    box-shadow: 0 0 3px 1px ${({ theme }) => theme.shadowColor};
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  a {
    padding: 10px 20px;
    border-radius: 5px;
    width: fit-content;
    font-size: 1.5em;
    box-shadow: 0 0 3px 1px ${({ theme }) => theme.shadowColor};
  }
`;

const Comment1 = styled.p`
  font-family: Nanum Gothic, sans-serif;
  font-weight: 800;
  font-size: 1.8em;
  letter-spacing: 0.01em;
  word-spacing: 0.1em;
  line-height: 1.5em;
`;
const Comment2 = styled(Comment1)`
  font-weight: 600;
  font-size: 1.5em;
  white-space: pre;
`;
export default Profile;

// export const getStaticProps = async () => {
//   const options = {
//     method: "GET",
//     url: `https://api.notion.com/v1/blocks/${page_id}/children`,
//     headers: {
//       Accept: "application/json",
//       "Notion-Version": "<<latestNotionVersion>>",
//       Authorization: "Bearer `${NOTION_KEY}`,
//     },
//   };

//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
