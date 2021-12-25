import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "hyosun-design-system";
import { EColors } from "../globalStyle";

const NavItemList = [
  {
    path: "/text-editor",
    innerText: "텍스트 에디터",
  },
  {
    path: "/video-player",
    innerText: "비디오 플레이어",
  },
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Header>
        <StyledLink to="/">
          <h1>웹 접근성을 고려한 UI 컴포넌트</h1>
        </StyledLink>
        <StyledButton label="메뉴" size="sm" onClick={handleOpen} />
        <StyledNav open={open}>
          <header>
            <Button label="X" variant="outlined" onClick={handleClose} />
          </header>
          <StyledUl>
            {NavItemList.map((item) => (
              <StyledLi key={item.path}>
                <Link to={item.path} onClick={handleClose}>
                  {item.innerText}
                </Link>
              </StyledLi>
            ))}
          </StyledUl>
        </StyledNav>
      </Header>
      <Main>
        <Inner>{children}</Inner>
      </Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  width: 100%;
  flex: 1;
`;

const Inner = styled.section`
  min-width: 960px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 1px solid ${EColors.gray_80};
  position: relative;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  &:focus {
    outline: #333;
  }
`;

const StyledLink = styled(Link)`
  h1 {
    font-size: 20px;
  }
`;

const StyledNav = styled.nav<{ open: boolean }>`
  header {
    display: flex;
    justify-content: flex-end;
  }
  border-left: 1px solid ${EColors.gray_80};
  background: #fff;
  width: 300px;
  height: 100vh;

  z-index: 1;
  position: absolute;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-400px")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: all 0.2s;
`;

const StyledUl = styled.ul`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLi = styled.li`
  width: 100%;
  a {
    display: block;
    width: 100%;
    padding: 8px 16px;

    &:focus {
      background: ${EColors.gray_60};
    }
  }
`;
