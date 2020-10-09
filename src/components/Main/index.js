import React from "react";
import { Container, Img, Text, TextMain, Form } from "./styles";

import img from "../../img/img.png";

export default function Main() {
  return (
    <Container>
      <Img src={img} />

      <Text>
        <TextMain>
          <p>Where Work Happens</p>
          <span>
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </span>
        </TextMain>

        <Form>
          <input type="text" placeholder="Email address" />
          <button>GET STARTED</button>
          <span>
            Already using Astatine?
            <a href="#">Sign in</a>
          </span>
        </Form>
      </Text>
    </Container>
  );
}
