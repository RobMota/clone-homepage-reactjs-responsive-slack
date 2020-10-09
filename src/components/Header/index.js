import React, { useState } from "react";
import { MdDehaze, MdClear } from "react-icons/md";

import {
  Container,
  Nav,
  Logo,
  MenuButton,
  NavRight,
  NavMenu,
  ButtonOne,
  ButtonTwo,
  ButtonThree,
} from "./styles";

const style = {
  fontSize: 30,
  color: "#FFF",
  lineHeight: 1.2,
};

function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <Nav>
        <Logo>At</Logo>
        <MenuButton onClick={() => setVisible(!visible)}>
          <MdDehaze />
        </MenuButton>

        <NavRight className={` ${visible ? " responsive" : " "}`}>
          <Logo second>At</Logo>
          <MenuButton onClick={() => setVisible(!visible)}>
            <MdClear style={{ color: "#FFF" }} />
          </MenuButton>

          <NavMenu>
            <span>Why Astatine?</span>
            <span>Item 2</span>
            <span>Item 3</span>
            <span>Item 4</span>
          </NavMenu>
          <ButtonOne>Sign in</ButtonOne>
          <span style={style}>|</span>
          <ButtonTwo>GET STARTED</ButtonTwo>
          <ButtonThree>Download Astatine App</ButtonThree>
        </NavRight>
      </Nav>
    </Container>
  );
}

export default Header;
