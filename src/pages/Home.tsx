import React from "react";
import styled from "@emotion/styled";
import { EColors } from "../globalStyle";

const Home = () => {
  return (
    <Container>
      <TextCard>
        <p>
          안녕하세용
          <br />웹 접근성/웹 표준을 준수하며 작성하는 UI 컴포넌트
          만들기연습장입니당
          <br />
          여러가지 UI컴포넌트를 표준에 맞게 만들어보며 실무에 적용 할 수 있도록
          할 예정입니당^_^
        </p>
      </TextCard>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  width: 960px;
`;

const TextCard = styled.article`
  border-radius: 12px;
  border: 1px solid ${EColors.gray_80};
  background: #fff;
  padding: 20px;

  text-align: center;
`;
