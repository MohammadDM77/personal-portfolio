// import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  min-height: 85vh;
  max-width: 114rem;
  margin: 6rem auto 0;

  .container__header {
    max-width: 65rem;
    margin: 0 auto 1rem;

    h1 {
      font-size: 3.6rem;
    }

    p {
      color: #777777;
    }
  }

  .container__cards {
    padding-bottom: 6rem;
  }

  .container__list {
    list-style: none;
    margin-top: 7rem;

    li {
      padding: 1.8rem 1.5rem;
      background: transparent;
      display: inline-block;
      color: #222;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: bold;
      transition: all 0.3s;

      &:hover {
        color: #8490ff;
        transform: translateY(-1rem) rotate(-15deg);
      }
    }

    .textColor {
      color: #8490ff;
    }
  }

  .container__images {
    margin-top: 5rem;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex: 0 0 33.33%;

    p {
      padding-top: 1rem;
    }

    .card {
      margin: 0 3rem;

      .card__img {
        border-radius: 5rem;
        overflow: hidden;
        position: relative;
        z-index: 5;
        transition: all 1s;

        box-shadow: 7px 15px 15px rgba(0, 0, 0, 0.4);

        &:hover > .overlay {
          opacity: 0.8;
          transform: scale(7);
        }

        &:hover > img {
          transform: scale(1.05);
        }
      }

      .card__text {
        margin: 3rem 0 5.5rem;
      }

      .overlay {
        background-image: linear-gradient(120deg, #8490ff 0%, #62bdfc 100%);
        /* font-size: 3rem; */
        transform: scale(4);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        transition: all 0.5s;
        opacity: 0;
      }

      img {
        height: 30rem;
        width: 30rem;
        object-fit: cover;
        transition: all 0.3s;
        transform: scale(1.21);
        z-index: -10;
      }
    }
  }
`;
