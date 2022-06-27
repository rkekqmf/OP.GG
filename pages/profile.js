import Image from "next/image";
import { Container, Contact, ImageBox, Content, Title, Comment } from "../styles/profileStyle";
import { comment1, comment2 } from "../data/profileData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Profile = ({ container }) => {
  //   const { bold, color, children } = container;
  //   const containerStyle = { bold, color };
  // <S.Container {...containerStyle}>
  //     {children}
  return (
    <Container>
      <Contact>
        <ImageBox>
          <Image src="/증명사진.jpg" layout="fill" objectFit="fill" alt="프로필 사진" />
        </ImageBox>
        <a href="tel:+821063367941" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        <a href="mailto:rkekqmf@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </Contact>
      <Content>
        <Title>{comment1}</Title>
        <Comment>{comment2}</Comment>
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

// Profile.defaultProps = {
//   container: { bold: true, color: "red", children: "zz" },
// };

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
