import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 70px auto 0;
  padding: 0 20px;
  flex-wrap: wrap;
  min-width: 300px;

  @media only screen and (max-width: 854px) {
    flex-wrap: wrap-reverse;
    margin-top: 30px;
  }
`;

export const Img = styled.img`
  width: 50%;
  height: auto;
  margin: 20px auto 0;
  padding-right: 20px;

  @media only screen and (max-width: 854px) {
    width: 60vh;
    padding: 0;
  }
`;

export const Text = styled.div`
  width: 40%;
  flex: 1 1 auto;

  @media only screen and (max-width: 854px) {
    flex: 1 1 auto;
    width: auto;
  }
`;

export const TextMain = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 4rem;
    margin: 0 0 15px 0;
    font-weight: bold;
    font-family: serif;
    line-height: 3.6rem;
  }

  span {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.7rem;
    height: 120px;
    color: rgb(100, 100, 100);
    
  }

  @media only screen and (max-width: 854px) {
    p {
      line-height: 40px;
      font-size: 2.8rem;
    }

    span {
      font-size: 1.2rem;
      height: unset;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  input {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 3px;
    padding: 20px;
    margin: 20px 0;
    height: 60px;
    border: inset 0px 0px 1px 0px rgba(0, 0, 0, 0.4);
    width: 55%;

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
cursor: pointer;
  }

  span{
    color: rgb(100, 100, 100);

       a {
    padding: 0 10px;
    font-size: 1em;
  }
}

  @media only screen and (max-width: 415px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      width: 100%;
    }

    button {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
