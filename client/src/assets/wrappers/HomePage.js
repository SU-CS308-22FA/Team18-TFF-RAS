import styled from "styled-components";

const Wrapper = styled.main`
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }

  .div {
    /* height: 120px; */
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

  .css-league-table-section [class*="card-css"] {
    height: fit-content;
  }

  .card-css > :last-child {
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;
    border-bottom: 0;
  }

  .css-league-table-section .league-table-header {
    display: flex;
    font-size: 21px;
    height: 70px px;
    padding-left: 30px;
    -webkit-box-align: center;
    align-items: center;

    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .league-overview-table-css article {
    padding: 0px 20px 20px;
  }

  .css-league-table {
    width: 100%;

    border-collapse: collapse;
    border-spacing: 0;

    display: table;
    text-indent: initial;
  }

  thead {
    display: table-header-group;
  }

  .css-table-header-row {
    height: 50px;
    border-top: rgba(200, 200, 200, 0.3);

    display: table-row;
  }

  .css-table-header-row::before {
    padding: 0px;
    content: "";
  }

  .css-header-item-1 {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 15px;
    text-align: center;
    color: white;
    vertical-align: middle;
    width: 22px;
  }

  .css-header-item-2 {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 15px;
    text-align: left;
    color: white;
    vertical-align: middle;
    width: 50px;
  }

  .css-header-item-3 {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 15px;
    text-align: center;
    color: white;
    vertical-align: middle;
    width: 50px;
  }

  .css-table-header-row th {
    width: 50px;
    font-size: 14px;
    color: rgba(159, 159, 159, 1);
  }

  th {
    display: table-cell;
  }

  .css-table-header-row th:nth-of-type(2) {
    padding-left: 11px;
    width: auto;
  }

  .css-league-table tbody {
    position: relative;

    display: table-row-group;
  }

  tr {
    display: table-row;
  }

  .table-team-row {
    height: 50px;
    position: relative;
  }

  .css-league-table [class*="table-team-row"] {
    border-bottom: none;
  }

  .table-team-row::before {
    content: "";
    position: absolute;
    display: block;
    border-radius: 6px;
    width: 3px;
    height: 42px;
    margin-top: 4px;
  }

  .table-team-row-clq::before {
    content: "";
    position: absolute;
    display: block;
    border-radius: 6px;
    width: 3px;
    height: 42px;
    margin-top: 4px;
    background-color: rgb(255, 217, 8);
  }

  .table-team-row-elq::before {
    content: "";
    position: absolute;
    display: block;
    border-radius: 6px;
    width: 3px;
    height: 42px;
    margin-top: 4px;
    background-color: rgb(2, 204, 240);
  }

  .table-team-row-relegation::before {
    content: "";
    position: absolute;
    display: block;
    border-radius: 6px;
    width: 3px;
    height: 42px;
    margin-top: 4px;
    background-color: rgb(255, 70, 70);
  }

  .css-league-table [class*="table-team-row"]:hover {
    opacity: 1;
    border-radius: 50px !important;
    background-color: rgba(200, 200, 200, 0.3);
  }

  .css-league-table [class*="table-team-row"] td:first-of-type {
    padding-left: 0px;
  }

  .table-team-row > td {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 15px;
    vertical-align: middle;
  }

  .table-team-row td {
    vertical-align: middle;
  }

  .css-cell {
    text-align: center;
  }

  .css-cell-2 {
    text-align: left;
  }

  td {
    display: table-cell;
  }

  .table-team-row td:nth-of-type(2) {
    padding-left: 11px;
  }

  .team-cell-content-css {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .table-team-row a {
    vertical-align: middle;
  }

  .team-cell-content-link {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 10px;
  }

  a,
  button {
    text-decoration: none;
    color: var(--GlobalColorScheme-Text-textDefault);
    outline: none;
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 0;
  }

  .table-team-row img {
    flex-shrink: 0;
    vertical-align: middle;
  }

  img {
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  .css-league-table [class*="table-team-row"] td [class*="css-team-name"] {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .css-team-name {
    font-size: 14px;
    letter-spacing: 0.2px;
    line-height: 15px;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    .css-legend-wrapper {
      width: 100%;
      margin-right: -55px;
    }
  }

  .css-qual-block {
    display: flex;
    min-height: 60px;
    padding: 10px 0px 10px 20px;
    row-gap: 10px;
    flex-flow: row wrap;
    -webkit-box-align: center;
    align-items: center;
  }

  ol,
  ul {
    list-style: none;
  }

  ul {
    /* display: block;
    list-style-type: disc; */
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  .css-qual-block > li {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-right: 20px;
    font-size: 14px;
    letter-spacing: 0.18px;
    color: rgba(159, 159, 159, 1);
  }

  li {
    display: list-item;
    text-align: -webkit-match-parent;
  }

  .css-qual-icon-1 {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgb(255, 217, 8);
    border-radius: 3px;
    margin-right: 10px;
  }

  .css-qual-icon-2 {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgb(2, 204, 240);
    border-radius: 3px;
    margin-right: 10px;
  }

  .css-qual-icon-3 {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgb(255, 70, 70);
    border-radius: 3px;
    margin-right: 10px;
  }
`;

export default Wrapper;
