import { Container } from "../styles";

import Comments from "./Comments";

const Testimonial = () => {
  return (
    <Container style={{ minHeight: "50vh" }}>
      <header className="container__header">
        <h1>Client’s Feedback About Me</h1>
        <p>
          It is very easy to start smoking but it is an uphill task to quit it.
          Ask any chain smoker or even a person.
        </p>
      </header>

      <Comments />
    </Container>
  );
};

export default Testimonial;
