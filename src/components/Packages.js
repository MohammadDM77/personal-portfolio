import styled from "styled-components";

const packageDetails = [
  {
    packNum: "01",
    packName: "Economy",
    use: "For the individuals",
    packList: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
    price: "$199.00",
  },
  {
    packNum: "02",
    packName: "Business",
    use: "For the individuals",
    packList: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
    price: "$299.00",
  },
  {
    packNum: "03",
    packName: "Premium",
    use: "For the individuals",
    packList: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
    price: "$399.00",
  },
  {
    packNum: "04",
    packName: "Exclusive",
    use: "For the individuals",
    packList: [
      "Secure Online Transfer",
      "Unlimited Styles for interface",
      "Reliable Customer Service",
    ],
    price: "$499.00",
  },
];

const Packages = () => {
  return (
    <PackagesContainer>
      {packageDetails.map((packDetail) => {
        return (
          <div className="package" key={Math.random()}>
            <div className="top-part">
              <h1>{packDetail.packNum}</h1>
              <h4>{packDetail.packName}</h4>
              <p>{packDetail.use}</p>
            </div>

            <div>
              <ul>
                {packDetail.packList.map((list) => {
                  return <li key={Math.random()}>{list}</li>;
                })}
              </ul>
            </div>

            <div className="bottom-part">
              <h1>{packDetail.price}</h1>
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </PackagesContainer>
  );
};

const PackagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f9f9ff;
  min-height: 70vh;
  margin-top: 4rem;

  .package {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;

    transition: all 0.3s;

    h1 {
      font-size: 3.6rem;
    }

    .top-part {
      margin: 0 auto;

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;

        border-radius: 50%;
        width: 14rem;
        height: 14rem;
        border: 30px solid rgba(132, 144, 255, 0.2);
      }

      p {
        margin: 1rem 0;
      }
    }

    ul {
      margin: 2rem 0;
      font-size: 1.4rem;
      line-height: 2rem;
      list-style: none;

      li {
        color: #535353;
        border-top: 1px solid #dadada;
        padding: 1rem 0;

        :last-child {
          border-bottom: 1px solid #dadada;
        }
      }
    }

    .bottom-part {
      position: relative;

      h1 {
        margin: 0;
      }

      button {
        width: 100%;
        background: #fff;
        color: #000000;
        font-weight: 700;
        position: absolute;
        top: 0;
        left: 0%;
        z-index: -10;
        opacity: 0;
      }
    }

    :hover {
      background-image: linear-gradient(90deg, #8490ff 0%, #62bdfc 100%);
      transform: scale(1.07);

      h1,
      h4,
      p,
      li {
        color: #fff;
      }

      .top-part h1 {
        border-color: rgba(255, 255, 255, 0.21);
        background-color: rgba(255, 255, 255, 0.1);
      }

      .bottom-part {
        h1 {
          opacity: 0;
        }

        button {
          z-index: 10;
          opacity: 1;
        }
      }
    }
  }
`;

export default Packages;
