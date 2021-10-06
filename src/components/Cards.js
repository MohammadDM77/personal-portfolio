import styled from "styled-components";
import "../img/Icon/icon-font.css";

import Card from "./Card";

const cartDetails = [
  {
    class: "icon-basic-watch",
    h1: "Web Design",
    p:
      "“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”",
  },
  {
    class: "icon-basic-laptop",
    h1: "Web Development",
    p:
      "If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.",
  },
  {
    class: "icon-basic-photo",
    h1: "Photography",
    p:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.",
  },
  {
    class: "icon-basic-picture",
    h1: "Clipping Path",
    p:
      "Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.",
  },
  {
    class: "icon-basic-tablet",
    h1: "Apps Interface",
    p:
      "Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.",
  },
  {
    class: "icon-basic-paperplane",
    h1: "Graphic Design",
    p:
      "You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.",
  },
];

const Cards = () => {
  return (
    <StyledDiv>
      {cartDetails.map((cartDetail) => {
        return <Card cartDetail={cartDetail} key={Math.random()} />;
      })}
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Cards;
