import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  margin: 0 auto;
  max-width: 1280px;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  * {
    font-weight: inherit;
  }

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

  .referee-rating-card-css {
    background-color: #dc143c !important;
    border-bottom: 5px solid #bd2727 !important;
  }

  .referee-rating-card-css .referee-stat-title {
    color: white;
  }

  .referee-rating-card-css .referee-stat-title-rating {
    color: white;
  }

  .referee-rating-card-css .referee-single-stat-container-top {
    border-bottom: 0;
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

  .referee-rating-section-css {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    .referee-rating-section-css {
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
    border-bottom: 1px solid #681515;
  }

  .referee-stat-title {
    height: 40px;
    display: flex;
    align-items: center;
  }

  .referee-stat-title span {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    /* color: rgba(159, 159, 159, 1); */
  }

  .referee-stat-title-rating {
    height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    /* color: rgba(159, 159, 159, 1); */
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

  .referee-info-section-css {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 30px 20px;
  }

  @media (min-width: 992px) {
    .referee-info-section-css {
      height: 252px;
    }
  }

  .referee-info-header {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.47;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .css-separator {
    /* border-bottom: solid 1px rgba(51, 51, 51, 1); */
    border-bottom: solid 1px #681515;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .css-info-section {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .css-region-header {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.15;
    letter-spacing: 0.2px;
    color: #bd2727;
  }

  .css-info-text {
    padding-top: 10px;
    text-transform: capitalize;
  }

  .css-license-number-header {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.15;
    letter-spacing: 0.2px;
    color: #bd2727;
  }

  .referee-info-section-css h2,
  .referee-info-section-css span,
  .referee-info-section-css h3 {
    margin: 0;
    padding: 0;
  }

  .css-referee-rating-styled {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 2px;
    min-width: 32px;
    min-height: 21px;
    width: 52px;
    height: 30px;
    border-radius: 10px;
    padding: 2px 6px 2px 6px;
    background-color: #1ec853;
  }

  .css-referee-rating-styled span {
    white-space: nowrap;
    letter-spacing: 0;
    font-size: 20px;
    color: white;
  }

  .referee-matches-section-css {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  @media (min-width: 992px) {
    .referee-matches-section-css {
      display: grid;
      grid-template-columns: repeat(3, minmax(300px, 1fr));
      grid-column-gap: 20px;
    }
  }

  .referee-matches-section-css > [class*="card-css"] {
    display: none;
  }

  .referee-matches-section-css [class*="card-css"] {
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
  }

  @media (min-width: 768px) {
    .referee-matches-section-css [class*="card-css"] {
      display: block;
    }
  }

  @media (min-width: 992px) {
    .referee-matches-section-css [class*="card-css"]:first-of-type {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }

  .referee-table-section-css {
    margin: 20px;
  }

  .referee-matches-table-container {
    width: 100%;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  table {
    display: table;
    border-collapse: separate;
    -webkit-border-horizontal-spacing: 2px;
    -webkit-border-vertical-spacing: 2px;
    border-top-color: gray;
  }

  thead {
    display: table-header-group;
    vertical-align: middle;
    border-top-color: inherit;
    border-right-color: inherit;
    border-bottom-color: inherit;
    border-left-color: inherit;
  }

  .referee-match-stats-header-css {
    height: 60px;
    display: grid;
    grid-template-columns: minmax(50px, 125px) minmax(100px, 1fr) repeat(
        5,
        minmax(20px, 40px)
      );
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-bottom: solid 1px var(--primary-800);
  }

  tr {
    display: table-row;
    vertical-align: inherit;
    border-top-color: inherit;
    border-right-color: inherit;
    border-bottom-color: inherit;
    border-left-color: inherit;
  }

  th {
    font-weight: bold;
  }

  td,
  th {
    display: table-cell;
    vertical-align: inherit;
  }

  .css-referee-matches-header-text {
    font-size: 16px;
    line-height: 1.15;
    letter-spacing: 0.2px;
    text-align: left;
    color: rgba(159, 159, 159, 1);
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-top-color: inherit;
    border-right-color: inherit;
    border-bottom-color: inherit;
    border-left-color: inherit;
  }

  .referee-match-stats-body-css {
    height: 60px;
    display: grid;
    grid-template-columns: minmax(50px, 125px) minmax(100px, 1fr) repeat(
        5,
        minmax(20px, 40px)
      );
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-bottom: solid 1px var(--primary-800);
  }

  .referee-match-stats-body-css:last-of-type {
    border-bottom: 0;
  }

  .referee-match-stats-body-css-no-border {
    border-bottom: 0;
  }

  .referee-match-stats-body-css td:first-of-type span {
    color: rgba(159, 159, 159, 1);
  }

  .referee-match-stats-body-css a,
  .referee-match-stats-body-css button {
    -webkit-text-decoration: none;
    text-decoration: none;
    /* color: rgba(255, 255, 255, 1); */
    outline: none;
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 0;
  }

  .referee-score-wrapper-applyMediumHover {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  @media (hover: hover) and (pointer: fine) {
    .referee-score-wrapper-applyMediumHover:hover {
      opacity: 0.6;
    }
  }

  .referee-score-wrapper-applyMediumHover span {
    font-weight: bold;
  }

  .center-span-in-td-css {
    display: grid;
    justify-self: center;
    text-align: center;
  }

  .referee-match-stats-body-css [class*="referee-table-rating-styled"] {
    margin-left: 6px;
  }

  .referee-table-rating-styled {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 2px;
    min-width: 32px;
    min-height: 21px;
    width: 34px;
    height: 20px;
    border-radius: 10px;
    padding: 2px 6px 2px 6px;
    background-color: #1ec853;
  }

  .referee-table-rating-styled span {
    white-space: nowrap;
    letter-spacing: 0;
    font-size: 14px;
    color: white;

    font-weight: bold;
  }

  .referee-match-date {
    padding-right: 10px;
  }

  .referee-matches-pagination {
    display: flex;
    justify-content: center;
  }
`;

export default Wrapper;
