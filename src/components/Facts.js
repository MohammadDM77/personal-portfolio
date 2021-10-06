import styled from "styled-components";

import { useFactCounter } from "./useFactCounter";

const Facts = () => {
  const { element: e1, counter: c1 } = useFactCounter(1589, 754);
  const { element: e2, counter: c2 } = useFactCounter(6784, 5551);
  const { element: e3, counter: c3 } = useFactCounter(2239, 1623);
  const { element: e4, counter: c4 } = useFactCounter(434, 67);

  return (
    <Container>
      <div className="row">
        <div>
          <h1>{c1}</h1>
          <p ref={e1}>Projects Completed</p>
        </div>
        <div>
          <h1>{c2}</h1>
          <p ref={e2}>Happy Clients</p>
        </div>
        <div>
          <h1>{c3}</h1>
          <p ref={e3}>Cups of Coffee</p>
        </div>
        <div>
          <h1>{c4}</h1>
          <p ref={e4}>Real Professionals</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(90deg, #8490ff 0%, #62bdfc 100%);

  .row {
    min-height: 40vh;
    max-width: 114rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }

  h1 {
    font-size: 3.6rem;
    color: #fff;
    margin: 0;
  }

  p {
    color: #fff;
  }
`;

export default Facts;
