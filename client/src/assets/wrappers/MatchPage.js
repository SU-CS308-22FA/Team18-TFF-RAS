import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;

  #match-facts-wrapper {
    width: 100%;
  }

  .full-screen-match-content {
    display: flex;
    flex-direction: column;
    row-gap: 0px;
    column-gap: 0px;
    position: relative;
  }

  @media (min-width: 992px) {
    .full-screen-match-content {
      display: grid;
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 960px 300px;
    }
  }

  .full-screen-match-content [class*="RightColumn"] {
    margin-top: 0px;
  }

  .rating-section {
    text-align: center;
  }

  .rating-title-container {
    height: 70px;
    width: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
    text-align: center;
  }

  .rating-title {
    font-size: 18px;
    font-family: GTWalsheim-Md;
  }

  h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;

export default Wrapper;
