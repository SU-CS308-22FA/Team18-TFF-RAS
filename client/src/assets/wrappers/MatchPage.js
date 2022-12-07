import styled from "styled-components";

const Wrapper = styled.main`
  padding-top: 20px;
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.5;
    /* cursor: pointer; */
    z-index: 5;
  }

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
    /* font-family: GTWalsheim-Md; */
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

  .rating-body-container {
    /* background-color: yellow; */
  }

  .rating-body-referee-container {
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
  }

  .referee-image {
    border-radius: 50%;
  }

  .rating-body-rating-container {
    padding: 0;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .referee-comment {
    margin: 15px 0;
    width: 80%;
  }

  .add-event-review-button {
    margin-bottom: 15px;
    width: 80%;
    position: relative;
    z-index: 10;
  }

  .add-review-button {
    margin-bottom: 15px;
    width: 80%;
  }
`;

export default Wrapper;
