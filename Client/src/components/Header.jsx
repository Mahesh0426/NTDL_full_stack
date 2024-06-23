import { Alert } from "react-bootstrap";

const Header = () => {
  return (
    <Alert varrant="success">
      <h1 className="text-center fw-bold">NOT TO DO LIST</h1>
      <p className="text-end fst-italic">
        Being busy isnt an excuse; its about managing time effectively.
      </p>
    </Alert>
  );
};

export default Header;
