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
            When your team needs to kick off a project, hire a new employee,
            deploy some code, review o sales contract, finalize next year's
            budget, measure an A/B test, plan your next office opening, and
            more, Zore has you covered.
          </span>
        </TextMain>

        <Form>
          <input type="text" placeholder="Email address" />
          <button>GET STARTED</button>
          <span>
            Already using Zore?
            <a href="#">Sign in</a>
          </span>
        </Form>
      </Text>
    </Container>
  );
}
