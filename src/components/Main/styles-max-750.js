import styled from "styled-components";

export const Container = styled.div`
  @media only screen and (max-width: 750px) {
    flex-wrap: wrap-reverse;
    height: auto;
  }
`;

export const Img = styled.img`
  height: 95%;
  width: 50%;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 750px) {
    flex: 1 1 auto;
    padding: 15px;
  }
`;

export const Text = styled.div`
  width: 48%;
  padding-left: 4%;

  @media only screen and (max-width: 750px) {
    flex: 1 1 auto;
    width: auto;
    padding: 0 16px;
  }
`;

export const TextMain = styled.div`
  p {
    font-size: 3.1em;
    font-weight: bold;
    width: 100%;
    margin: 10px 0;
  }

  span {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.6);
  }

  @media only screen and (max-width: 410px) {
    p {
      font-size: 2.3em;
      line-height: 1;
      margin: 12px 0;
    }

    span {
      font-size: 1em;
      width: 100%;
    }
  }

  @media only screen and (min-width: 411px) {
    p {
      font-size: 2.7em;
    }
  }
`;

export const Form = styled.div`
  margin: 10px 0;
  width: 90vw;

  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    padding: 20px;
    margin: 10px 0;
    height: 60px;
    border: inset 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
    flex: 1;

    ::placeholder {
      color: rgba(0, 0, 0, 0.6);
      font-size: 1.3em;
    }
  }

  button {
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 3px;
    margin: 0 10px;
    height: 59px;
    font-weight: bold;
    background: rgb(55, 58, 176);
    border: 0;
    color: #fff;
    font-size: 0.9em;
    padding: 21px 25px;
  }

  span {
    font-weight: 401;
    font-size: 1em;
    display: inline-block;
  }

  a {
    padding: 0 10px;
    font-size: 1em;
  }

  @media only screen and (max-width: 410px) {
    text-align: center;
    width: 100%;

    button {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
