import styled from "styled-components";
import img from "../../img/back.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  margin: 0 auto;
  height: 70px;
  padding: 0 10px;
  @media only screen and (max-width: 1080px) {
    position: sticky;
    top: 0;
    background: #fff;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 1080px) {
    min-width: 277px;
  }
`;

export const Logo = styled.div`
  display: flex;
  display: ${(props) => (props.second ? "none" : "")};
  font: 2.5em "Roboto", sans-serif;
  font-weight: 600;
  padding-right: 25px;
  height: 70px;
  margin-bottom: 6px;
  color: ${(props) => (props.second ? "#FFF" : "")};
  line-height: 1.57;
  padding: 0 20px;

  @media only screen and (max-width: 1080px) {
    flex: 1;
    margin-top: 3px;
    display: ${(props) => (props.second ? "flex" : " ")};
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  display: none;
  align-self: center;
  margin-top: 2px;

  svg {
    font-size: 34px;
  }

  @media only screen and (max-width: 1080px) {
    cursor: pointer;
    display: flex;
    top: 18px;
    right: 0;
    position: absolute;
    padding: 0 20px;
  }
`;

export const NavRight = styled.div`
  display: flex;
  flex: 1;

  @media only screen and (max-width: 1080px) {
    flex-wrap: wrap;
    height: 100vh;
    left: 100%;
    position: relative;
    min-width: 100%;
    background: rgb(55, 58, 176);
    transition: left 0.4s ease;
    background-image: url(${img});
    background-size: 1300px 700px;
    background-repeat: no-repeat;

    &.responsive {
      position: absolute;
      display: flex;
      left: 0px;
      visibility: visible;
    }
  }
`;

export const NavMenu = styled.div`
  align-self: center;

  span {
    padding: 0 25px;
  }

  @media only screen and (max-width: 1080px) {
    width: 100%;
    height: calc(100% - 185px);
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;

    span {
      display: block;
      font-weight: 401;
      font-size: 1.4em;
      color: #fff;
      padding: 0;
      margin-top: 20px;
      cursor: pointer;
    }
  }
`;

export const ButtonOne = styled.button`
  margin-left: auto;
  font-size: 1em;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  border: 0;
  background: transparent;
  align-self: center;

  @media only screen and (max-width: 1080px) {
    flex: 1;
    margin-top: auto;
    background: transparent;
    font-size: 1em;
    font-weight: 401;
    color: #fff;
    text-align: center;
    cursor: pointer;
    padding: 10px;
  }
`;

export const ButtonTwo = styled.button`
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.9em;
  font-weight: 900;
  background: rgb(55, 58, 176);
  color: #fff;
  border-radius: 3px;
  border: 0;
  align-self: center;
  padding: 10px;

  @media only screen and (max-width: 1080px) {
    margin-top: auto;
    flex: 1;
    font-size: 1em;
    font-weight: 401;
    text-align: center;
    cursor: pointer;
    background: transparent;
  }
`;

export const ButtonThree = styled.button`
  display: none;

  @media only screen and (max-width: 1080px) {
    background: #fff;
    margin-top: auto;
    width: 100%;
    color: #fff;
    text-align: center;
    color: rgb(55, 58, 176);
    font-weight: 650;
    display: block;
    font-size: 1.3em;
    cursor: pointer;
    padding: 15px;
  }
`;
