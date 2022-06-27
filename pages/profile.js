import axios from "axios";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../components/common/commonStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ container }) => {
  const { bold, color, children } = container;
  const containerStyle = { bold, color };
  const comment1 = "프론트엔드 개발자 서성용 입니다.";
  const comment2 =
    "경험과 도전 그리고,\n즐거움을 최고의 가치로 생각합니다.\n\n수 차례 많은 실패와 실수,\n그런 경험에서 얻은 교훈을 바탕으로 또 다시 도전합니다.\n\n이러한 과정들 속에서 스스로의 행복과,\n업무능력 향상에 도움되는 즐거움을 찾습니다.";

  return (
    // <S.Container {...containerStyle}>
    //   {children}
    <Container>
      <Contact>
        <ImageBox>
          <Image src="/증명사진.jpg" layout="fill" objectFit="fill" alt="프로필사진" />
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
/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

// /* Small devices (portrait tablets and large phones, 600px and up)
// */
// @media only screen and (min-width: 600px) {...}

// /* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

// /* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and (min-width: 1200px) {...}

Profile.defaultProps = {
  container: { bold: true, color: "red", children: "zz" },
};

const ImageBox = styled.div`
  position: relative;
  margin-bottom: 3rem;
  border-radius: 50rem;
  overflow: hidden;
  box-shadow: 0 0 3px 3px ${({ theme }) => theme.shadowColor};
  @media only screen and (max-width: 600px) {
    width: 10rem;
    height: 10rem;
  }
  @media only screen and (min-width: 600px) {
    width: 15rem;
    height: 15rem;
  }
  @media only screen and (min-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
  @media only screen and (min-width: 992px) {
    width: 25rem;
    height: 25rem;
  }
  @media only screen and (min-width: 1200px) {
  }
`;

const Contact = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  a {
    margin: 0 1rem;
    border-radius: 50%;
    width: fit-content;
    box-shadow: 0 0 3px 3px ${({ theme }) => theme.shadowColor};
    @media only screen and (max-width: 600px) {
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
    }
    @media only screen and (min-width: 600px) {
      font-size: 1.5rem;
      padding: 0.7rem 0.7rem;
    }
    @media only screen and (min-width: 768px) {
      font-size: 2rem;
      padding: 0.9rem 0.9rem;
    }
    @media only screen and (min-width: 992px) {
      font-size: 2.5rem;
      padding: 1.1rem 1.1rem;
    }
    @media only screen and (min-width: 1200px) {
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  a {
    font-size: 2rem;
    padding: 10px 20px;
    border-radius: 5px;
    width: fit-content;
    box-shadow: 0 0 3px 2px ${({ theme }) => theme.shadowColor};
    @media only screen and (max-width: 600px) {
      font-size: 1.5rem;
      padding: 5px 10px;
    }
  }
  @media only screen and (max-width: 600px) {
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    align-items: center;
  }
  @media only screen and (min-width: 992px) {
    align-items: flex-start;
  }
`;

const Comment1 = styled.p`
  font-family: Nanum Gothic, sans-serif;
  font-weight: 800;
  letter-spacing: 0.01em;
  word-spacing: 0.1em;
  line-height: 1.4em;
  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 3rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;
const Comment2 = styled(Comment1)`
  font-weight: 600;
  font-size: 1.3em;
  white-space: pre-wrap;
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 600px) {
    font-size: 1.7rem;
  }
  @media only screen and (min-width: 992px) {
    font-size: 2.2rem;
  }
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
