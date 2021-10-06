import Cards from "./Cards";
import { Container } from "../styles";

const Services = () => {
  return (
    <Container>
      <header className="container__header">
        <h1>My Offered Services</h1>
        <p>
          At about this time of year, some months after New Year’s resolutions
          have been made and kept, or made and neglected.
        </p>
      </header>

      <div className="container__cards">
        <Cards />
      </div>
    </Container>
  );
};

export default Services;
