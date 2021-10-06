import { Container } from "../styles";

import Packages from "./Packages";

const Price = () => {
  return (
    <Container>
      <header className="container__header">
        <h1>Choose Your Plan</h1>
        <p>
          When someone does something that they know that they shouldn’t do, did
          they.
        </p>
      </header>

      <Packages />
    </Container>
  );
};

export default Price;
