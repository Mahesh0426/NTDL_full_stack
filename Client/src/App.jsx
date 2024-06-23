import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import TAskContainer from "./components/TaskContainer";

function App() {
  return (
    <>
      <Container>
        {/* heading */}
        <Header />
        {/* task container */}
        <TAskContainer />
      </Container>
    </>
  );
}

export default App;
