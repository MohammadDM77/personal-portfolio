import styled from "styled-components";

import "./Brand.css";

import b1 from "../img/Brands/Brand1.webp";
import b2 from "../img/Brands/Brand2.webp";
import b3 from "../img/Brands/Brand3.webp";
import b4 from "../img/Brands/Brand4.webp";
import b5 from "../img/Brands/Brand5.webp";

const Brand = () => {
  return (
    <Container>
      <div className="brandsContainer">
        <div className="brands">
          <div className="imgHolder">
            <img src={b1} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b2} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b3} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b4} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b5} alt="" />
          </div>
          <div className="imgHolder">
            <img src={b1} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b2} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b3} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b4} alt="" />
          </div>

          <div className="imgHolder">
            <img src={b5} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: linear-gradient(90deg, #8490ff 0%, #62bdfc 100%);
  min-height: 40vh;
  margin-top: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .brandsContainer {
    width: 114rem;
    overflow: hidden;

    .brands {
      width: 228rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      animation: brandAnim 15s infinite;

      .imgHolder {
        width: 22.8rem;

        img {
          margin: 0 auto;
          display: block;
        }
      }
    }
  }
`;

export default Brand;
