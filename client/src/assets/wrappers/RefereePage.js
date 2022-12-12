import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;

  .referee-page-content {
    margin: 0 auto;
    margin-top: 10px;
  }

  .referee-page-card-css > :last-child {
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    /* background-color: rgb(39, 39, 39); */
    background-color: white;
    border-bottom: 5px solid #bd2727;
  }
`;

export default Wrapper;
