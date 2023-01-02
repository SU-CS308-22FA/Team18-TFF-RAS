import styled from "styled-components";

const Wrapper = styled.main`
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  .div {
    height: 120px;
    background-color: transparent;
    width: 100%;
  }

  .matches-container {
    width: 100%;
    background-color: rgb(255, 255, 255);
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
    box-shadow: rgba(34, 34, 38, 0.08) 0px 1px 4px;
    padding: 0;
    overflow: hidden;

    display: inline-block;
    /* background-color: var(--primary-700); */
  }

  .matches-container .match-item:last-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  .matches-container .match-item:first-of-type {
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
  }

  .no-matches-container {
    text-align: center;
    font-size: 20px;
  }

  .title-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .title-container h3 {
    display: inline;
  }

  .title-container a {
    color: var(--primary-500);
  }

  .title-container a:hover {
    color: var(--primary-800);
  }

  .referees-title {
    margin-top: 15px;
  }

  .referee-container {
    padding: 0px 20px !important;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  }

  .referee-info-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .referee-image {
    border-radius: 50%;
    margin-right: 10px;
  }

  .styled-link:hover {
    color: var(--primary-500);
  }

  .referee-rating-span {
    /* color: var(--primary-600); */
  }

  //////////////////////////////////

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  /* @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  } */
`;

export default Wrapper;
