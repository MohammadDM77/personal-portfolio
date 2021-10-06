import { useState } from "react";
import styled from "styled-components";

import user1 from "../img/user 1.webp";
import user2 from "../img/user 2.webp";
import michaelScott from "../img/michaelScott.png";
import michaelScott2 from "../img/michaelScott2.png";

const commentDetails = [
  {
    img: user1,
    name: "Harriet Maxwell",
    CEO: "Google",
    text:
      "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
  },
  {
    img: user2,
    name: "Carolyn Craig",
    CEO: "Facebook",
    text:
      "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes. However.",
  },
  {
    img: michaelScott,
    name: "Michael Scott",
    CEO: "Dunder Mifflin",
    text: "That's what she said!",
  },
  {
    img: michaelScott2,
    name: "Michael Scott",
    CEO: "Dunder Mifflin",
    text: "NOOOO God Noooo GOD Please no no no NOOOO",
  },
];

const Comments = () => {
  const [numOfComment, setNumOfComment] = useState(0);
  const [numOfComment2, setNumOfComment2] = useState(1);

  const nextComment = () => {
    if (numOfComment + 1 === commentDetails.length) setNumOfComment(-1);
    if (numOfComment2 + 1 === commentDetails.length) setNumOfComment2(-1);
    setNumOfComment((prevComment) => prevComment + 1);
    setNumOfComment2((prevComment) => prevComment + 1);
  };

  const prevComment = () => {
    if (numOfComment > 0) {
      setNumOfComment((prevNum) => prevNum - 1);
    } else {
      setNumOfComment(commentDetails.length - 1);
    }

    if (numOfComment2 > 0) {
      setNumOfComment2((prevNum) => prevNum - 1);
    } else {
      setNumOfComment2(commentDetails.length - 1);
    }
  };

  return (
    <CommentsContainer>
      <div className="commentContainer">
        <div className="comment">
          <img src={commentDetails[numOfComment].img} alt="user" />

          <div className="text">
            <h4>{commentDetails[numOfComment].name}</h4>
            <p>{commentDetails[numOfComment].text}</p>
            <h6>CEO at {commentDetails[numOfComment].CEO}</h6>
          </div>
        </div>

        <div className="comment">
          <img src={commentDetails[numOfComment2].img} alt="user" />

          <div className="text">
            <h4>{commentDetails[numOfComment2].name}</h4>
            <p>{commentDetails[numOfComment2].text}</p>
            <h6>CEO at {commentDetails[numOfComment2].CEO}</h6>
          </div>
        </div>
      </div>

      <div className="btn">
        <button onClick={nextComment}>↑</button>
        <button onClick={prevComment}>↓</button>
      </div>
    </CommentsContainer>
  );
};

const CommentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin-top: 3rem;

  .commentContainer {
    display: flex;
    flex: 1;
  }

  .comment {
    background: #e6e6e6;
    padding: 2.5rem 3rem 1.2rem;
    margin: 1.5rem;
    flex: 1;
    display: flex;
    border-radius: 1rem;
    min-height: 19.6rem;

    &:hover h4 {
      color: #8490ff;
      letter-spacing: 2px;
      transform: skewY(2deg) skewX(15deg) scale(1.1);
      text-shadow: 0.5rem 1rem 2rem rgb(0 0 0 / 20%);
    }

    img {
      height: 8rem;
      width: 8rem;
      object-fit: cover;
      margin-right: 2rem;
      border-radius: 50%;
    }

    .text {
      display: flex;
      flex-direction: column;
      text-align: left;
      justify-content: space-between;

      h4,
      h6,
      p {
        margin-bottom: 1.3rem;
        transition: all 0.3s;
      }

      p {
        line-height: 2rem;
      }
    }
  }

  .btn {
    display: flex;
    margin: auto 0;
    flex-direction: column;

    button {
      background: rgb(157, 157, 157, 0.2);
      color: #8490ff;
      font-size: 2.5rem;
      padding: 1rem 1.83rem;
      margin: 0.2rem;
      border-radius: 1rem;
      box-shadow: -14.142px 14.142px 20px 0 rgb(157 157 157 / 20%);

      transition: all 0.3s;

      &:hover {
        transform: rotate(90deg);
        background-image: linear-gradient(120deg, #8490ff 0%, #62bdfc 100%);
        color: #fff;
      }
    }
  }
`;

export default Comments;
