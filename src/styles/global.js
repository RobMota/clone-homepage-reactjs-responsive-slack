import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  overflow-x: hidden;
  font-family:'Roboto', sans-serif; 
  -webkit-font-smoothing: antialiased !important!;

  font-size: 16px;
}
`;
