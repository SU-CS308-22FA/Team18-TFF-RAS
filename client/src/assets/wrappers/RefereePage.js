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

  .referee-head-css {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 100px;
    overflow: hidden;
    background-color: white;
  }

  @media (min-width: 768px) {
    .referee-head-css {
      height: 110px;
      margin-left: -70px;
    }
  }

  .referee-color-css {
    position: relative;
    height: 60px;
    width: 100px;
    margin-left: -54px;
  }

  @media (min-width: 768px) {
    .referee-color-css {
      margin-left: 100px;
    }
  }

  .referee-color-css [class*="referee-color-line-top"] {
    -webkit-transform: translateY(44px) translateX(-10px) rotate(-29deg);
    -moz-transform: translateY(44px) translateX(-10px) rotate(-29deg);
    -ms-transform: translateY(44px) translateX(-10px) rotate(-29deg);
    transform: translateY(44px) translateX(-10px) rotate(-29deg);
  }

  @media (min-width: 768px) {
    .referee-color-css [class*="referee-color-line-top"] {
      -webkit-transform: translateY(52px) translateX(-15px) rotate(-29deg);
      -moz-transform: translateY(52px) translateX(-15px) rotate(-29deg);
      -ms-transform: translateY(52px) translateX(-15px) rotate(-29deg);
      transform: translateY(52px) translateX(-15px) rotate(-29deg);
    }
  }

  .referee-color-line-top {
    width: 108px;
    height: 50px;
    border-bottom: 15px solid red;
    position: absolute;
  }

  .referee-color-css [class*="referee-color-line-bottom"] {
    -webkit-transform: translateY(23px) translateX(48px) rotate(-29deg);
    -moz-transform: translateY(23px) translateX(48px) rotate(-29deg);
    -ms-transform: translateY(23px) translateX(48px) rotate(-29deg);
    transform: translateY(23px) translateX(48px) rotate(-29deg);
  }

  @media (min-width: 768px) {
    .referee-color-css [class*="referee-color-line-bottom"] {
      -webkit-transform: translateY(23px) translateX(57px) rotate(-29deg);
      -moz-transform: translateY(23px) translateX(57px) rotate(-29deg);
      -ms-transform: translateY(23px) translateX(57px) rotate(-29deg);
      transform: translateY(23px) translateX(57px) rotate(-29deg);
    }
  }

  .referee-color-line-bottom {
    width: 50px;
    height: 50px;
    margin-top: 40px;
    border-bottom: 15px solid red;
    position: relative;
  }

  .referee-head-css [class*="referee-page-icon"] {
    position: absolute;
    left: 28px;
    top: 30px;
  }

  @media (min-width: 768px) {
    .referee-head-css [class*="referee-page-icon"] {
      left: 170px;
      top: 40px;
    }
  }

  .referee-page-icon-css {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    box-sizing: content-box;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: end;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: end;
    border-radius: 50%;
    width: 70px;
    height: 70px;
  }

  .referee-page-icon-css * {
    border-radius: 50%;
  }

  .referee-head-css [class*="referee-page-icon"] img {
    border-radius: 0%;
  }

  img.image.referee-page-image {
    width: 70px;
    aspect-ratio: auto 70 / 70;
    height: 70px;
  }

  .referee-page-name {
    position: absolute;
    top: 30px;
    left: 108px;
    font-size: 21px;
    line-height: 1.22;
    letter-spacing: 0.54px;
  }

  @media (min-width: 768px) {
    .referee-page-name {
      top: 40px;
      left: 250px;
    }
  }

  h1 {
    display: block;
    /* font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em; */
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .referee-head-css [class*="league-icon"] {
    position: absolute;
    top: 54px;
    left: 108px;
    width: 15px;
    height: 15px;
  }

  @media (min-width: 768px) {
    .referee-head-css [class*="league-icon"] {
      top: 67px;
      left: 250px;
      width: 20px;
      height: 20px;
    }
  }

  img.image.league-icon {
    width: 20px;
    aspect-ratio: auto 20 / 20;
    height: 20px;
  }

  .referee-page-position {
    position: absolute;
    top: 53px;
    left: 131px;
    width: 200px;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: 0.45px;
  }

  @media (min-width: 768px) {
    .referee-page-position {
      top: 68px;
      left: 276px;
    }
  }

  .referee-info-section-css {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    .referee-info-section-css {
      display: grid;
      grid-template-columns: repeat(3, minMax(300px, 1fr));
      gap: 20px;
    }
  }

  .referee-stats-h2 {
    height: 0;
    visibility: hidden;
  }

  .referee-stats-section-css {
    display: grid;
    padding: 0 20px;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(3, minmax(50px, 1fr));
  }

  @media (min-width: 768px) {
    .referee-stats-section-css {
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(3, minmax(50px, 135px));
      height: 252px;
    }
  }

  .referee-single-stat-container-top {
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    /* border-bottom: 1px solid rgba(38, 38, 38, 1); */
    border-bottom: 1px solid #bd2727;
  }

  .referee-stat-title {
    text-align: center;
    height: 40px;
    font-size: 16px;
    color: rgba(159, 159, 159, 1);
  }

  .referee-stat-value {
    height: 18px;
    font-size: 18px;
    line-height: 1.07;
    letter-spacing: 0.23px;
  }

  .referee-single-stat-container-bottom {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
`;

export default Wrapper;
