import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::selection {
        color: white;
        background:#8490ff ;
    }
}

html {
    font-size: 62.5%;

    @media (max-width:450px) {
        font-size: 50%;
    }
}

body {
    font-family: 'Inter', sans-serif;
    background: #fff;
    overflow-x: hidden;
}

h1 {
    font-size: 5.5rem;
    font-weight: 600;
    color: #222;  
    margin: 2rem 0;
}

h2 {
    font-size: 2.5rem;
    font-weight: 500;
    padding: 1rem;
}

h4 {
    font-size: 1.8rem;
    font-weight: 700;
    color: #222;
}

h6 {
    letter-spacing: 2px;
    font-size: 1.5rem;
    color: #222;
    font-weight: 400;
}

p {
    color: #777;
    font-size: 1.5rem;
}

a {
    font-size: 1.7rem;
}

button {
    text-transform: uppercase;
    border: none;
    color: #fff;
    padding: 1.5rem 3rem;
    font-weight: 500;
    cursor: pointer;
    background-image: linear-gradient(0deg,
     #8490ff 0%,
     #62bdfc 100%);

    transition: all 0.2s;

    :hover {
        box-shadow: 0 20px 20px 0 rgba(132, 144, 255, 0.5);
    }
}



@media (max-width:800px) {
    p {

    }
}
`;

export default GlobalStyle;
