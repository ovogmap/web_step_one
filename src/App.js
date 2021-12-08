import styled from "@emotion/styled";
import AppRouter from "./router";

function App() {
  return (
    <Container>
      <AppRouter />
    </Container>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
