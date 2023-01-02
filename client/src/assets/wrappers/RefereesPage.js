import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  body * {
    font-weight: normal;
    font-feature-settings: "ss01";
    box-sizing: border-box;
    color: black;
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

  .card-css > :last-child {
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;
  }

  .data-view-controls-container-css {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  }

  @media (min-width: 992px) {
    .data-view-controls-container-css {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 20px;
      margin: 0px 20px;
      padding: 20px 0px;
      -webkit-box-align: center;
      align-items: center;
    }
  }

  .css-league-span {
    font-size: 18px;
  }

  .data-view-controls-container-css > div:first-of-type {
    grid-area: 2 / 1 / auto / auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    gap: 10px;
    -webkit-box-align: center;
    align-items: center;
  }

  .select-applyMediumHover {
    width: 115.211px;
    border: none;
    /* background: url(/_next/static/media/ic_chevron_down_darkmode.2bb1683c.svg)
      right center / 18px no-repeat transparent; */
    outline: none;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: 0px;
    cursor: pointer;
  }

  select:not(:-internal-list-box) {
    overflow: visible !important;
  }

  select {
    writing-mode: horizontal-tb !important;
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    background-color: field;
    cursor: default;
    margin: 0em;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    border-radius: 0px;
  }

  option {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }

  .hidden-span {
    position: absolute;
    visibility: hidden;
    white-space: nowrap;
    overflow: visible;
    padding-right: 40px;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: 0px;
  }

  .data-view-controls-container-css > div:last-of-type {
    justify-self: flex-end;
    grid-area: 2 / 2 / auto / auto;
  }

  .select-applyMediumHover-right {
    width: 109.094px;
    border: none;
    /* background: url(/_next/static/media/ic_chevron_down_darkmode.2bb1683c.svg)
      right center / 18px no-repeat transparent; */
    outline: none;
    font-size: 15px;
    line-height: 1.47;
    letter-spacing: 0px;
    cursor: pointer;
  }

  option {
    background-color: rgba(200, 200, 200, 0.3) !important;
    color: black !important;
  }

  .league-season-stats-css .mui-paper-root {
    box-shadow: none !important;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
  }

  .jss1 {
    display: flex;
    flex-direction: column;
  }

  .jss2 {
    width: 100%;
    overflow: auto;
    flex-grow: 1;
    -webkit-overflow-scrolling: touch;
  }

  .league-season-stats-css .mui-table-root {
    padding: 0px 20px !important;
  }

  .jss3 {
    table-layout: fixed;
    border-collapse: separate;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    text-indent: initial;
  }

  .mui-table-root {
    width: 100%;
    display: table;
    border-spacing: 0;
    /* border-collapse: collapse; */
    min-width: calc(285px);
  }

  colgroup {
    display: table-column-group;
  }

  .col1 {
    width: 25px;
  }

  .col2 {
    width: 60px;
  }

  .col3 {
    width: 200px;
  }

  .col4 {
    width: auto;
  }

  .mui-table-body-root {
    display: table-row-group;
  }

  .mui-table-row-root {
    color: inherit;
    display: table-row;
    outline: 0;
    vertical-align: middle;
  }

  .league-season-stats-css .mui-table-row-root td:first-of-type {
    font-size: 14px;
  }

  .jss11 {
    white-space: nowrap;
  }

  .mui-table-cell-root {
    display: table-cell;
    padding: 16px;
    font-size: 0.875rem;
    text-align: left;
    /* font-family: "Roboto", "Helvetica", "Arial", sans-serif; */
    font-weight: 400;
    line-height: 1.43;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    letter-spacing: 0.01071em;
    vertical-align: inherit;
  }

  .jss7 {
    overflow: hidden;
    padding-left: 8px;
    padding-right: 8px;
    text-overflow: ellipsis;
  }

  .css-table-cell {
    color: inherit;
    font: inherit;
    letter-spacing: 0.2px;
    padding-left: 0px !important;
  }

  .jss10 {
    text-align: center;
  }

  .referee-icon-container {
    position: relative;
  }

  .referee-icon-css {
    display: flex;
    position: relative;
    box-sizing: content-box;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: end;
    align-items: end;
    border-radius: 50%;
    width: 42px;
    height: 42px;
  }

  .referee-icon-css * {
    border-radius: 50%;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .styled-link {
    display: block;
    font-size: 16px;
    padding: 0;
  }

  .styled-link:hover {
    color: var(--primary-500);
  }

  .league-season-stats-css .mui-table-row-root td:last-of-type {
    /* font-size: 14px; */
    padding-right: 0px;
  }

  .jss9 {
    text-align: right;
  }
`;
export default Wrapper;
