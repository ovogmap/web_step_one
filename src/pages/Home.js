import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "hyosun-design-system";

import { Container } from "../components";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Inner>
        <Header>
          <StyledLink to="/">
            <h1>웹 접근성을 고려한 UI 컴포넌트</h1>
          </StyledLink>
          <Button label="메뉴" size="sm" onClick={() => setOpen(true)} />
          <StyledNav open={open}>
            <header>
              <Button
                label="X"
                variant="outlined"
                onClick={() => setOpen(false)}
              />
            </header>
            <ul>
              <li>
                <Link>test1</Link>
              </li>
              <li>
                <Link>test2</Link>
              </li>
              <li>
                <Link>test3</Link>
              </li>
              <li>
                <Link>test4</Link>
              </li>
            </ul>
          </StyledNav>
        </Header>
      </Inner>
    </Container>
  );
};

export default Home;

const Inner = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid #eee;
  position: relative;
  box-sizing: border-box;
`;

const StyledLink = styled(Link)`
  h1 {
    font-size: 20px;
  }
`;

const StyledNav = styled.nav`
  header {
    display: flex;
    justify-content: flex-end;
  }
  border-left: 1px solid #eee;
  background: #fff;
  width: 400px;
  height: 100vh;

  z-index: 1;
  position: absolute;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-400px")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};

  transition: all 0.2s;
`;
