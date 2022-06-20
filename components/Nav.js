import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/photos">
            <a>Photos</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.nav`
  ul {
    display: flex;
    column-gap: 20px;
  }
`;
export default Nav;
