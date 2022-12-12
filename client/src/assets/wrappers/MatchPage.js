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
    padding-bottom: 20px;
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

  .events-reviews-container {
    padding-top: 0px;
    /* padding-right: 20px; */
    padding-bottom: 0px;
    /* padding-left: 20px; */

    display: grid;
    max-height: 700px;
    overflow-y: scroll;

    width: 80%;
  }

  .event-review-container {
    display: grid;
    height: fit-content;
    row-gap: 10px;
    column-gap: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-right: 0px;
    padding-left: 0px;
    max-height: 1000px;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 16px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgba(200, 200, 200, 0.5);
  }

  .events-reviews-container .event-review-container:last-of-type {
    border-bottom: none;
  }

  .event-review-details-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .event-review-time {
    margin-right: 11px;
    height: 16px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    font-weight: bolder;
  }

  .event-review-container span {
    color: rgba(97, 223, 110, 1);
  }

  .event-review-time span:first-of-type {
    justify-self: center;
  }

  .event-review-time span {
    font-size: 16px;
  }

  .event-review-container [class*="event-review-title"] {
    color: rgba(97, 223, 110, 1);
  }

  .event-review-title {
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.54px;

    display: block;
    font-size: 0.83em;
    /* margin-block-start: 1.67em;
    margin-block-end: 1.67em; */
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .event-review-container a,
  .event-review-container button {
    -webkit-text-decoration: none;
    text-decoration: none;
    color: var(--GlobalColorScheme-Text-textDefault);
    outline: none;
    border: 0;
    background: 0;
    cursor: pointer;
    padding: 0;
  }

  .event-review-player-card-container {
    position: relative;
    overflow: hidden;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    /* margin-top: 12px; */
    padding: 10px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    height: 70px;
    border-top-color: rgba(200, 200, 200, 0.5);
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: rgba(200, 200, 200, 0.5);
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: rgba(200, 200, 200, 0.5);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgba(200, 200, 200, 0.5);
    border-left-style: solid;
    border-left-width: 1px;
    -webkit-box-align: center;
    align-items: center;

    width: 100%;
  }

  .event-review-player-title-details {
    display: grid;
    grid-template-columns: 1fr auto;
    -webkit-box-align: center;
    align-items: center;
  }

  .player-icon-css .review-team-icon {
    position: absolute;
    right: 0px;
    bottom: 0px;
  }

  img.Image.review-team-icon {
    width: 16px;
    aspect-ratio: auto 16 / 16;
    height: 16px;
  }

  .event-review-player-name-container {
    display: grid;
    margin-left: 15px;
  }

  .event-review-player-first-name {
    letter-spacing: 0.2px;
    font-size: 16px;
    line-height: 1.23;
    text-align: left;
    color: black !important;
  }

  .event-review-player-last-name {
    letter-spacing: 0.2px;
    font-size: 16px;
    line-height: 1.23;
    text-align: left;
    margin-top: 2px;
    color: black !important;
  }

  .event-review-player-card-container svg {
    height: 28px;
    width: 28px;
  }

  .review-event-comment {
    margin-top: 10px;
    width: 100%;
  }

  .reviews-divider {
    width: 100%;
    height: 1.5px;
    background-color: rgba(200, 200, 200, 0.8);
    margin-bottom: 10px;
    margin-top: 5px;
  }

  .event-review-delete-overlay {
    position: absolute;
    width: 480px;
    height: 70px;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;

    transition: transform 250ms;
    z-index: 4;
  }

  .event-review-delete-overlay:hover {
    transform: translateX(-240px);
  }

  .noHover {
    pointer-events: none;
    cursor: not-allowed !important;
  }

  .event-review-delete-overlay-empty {
    width: 240px;
    height: 70px;
  }

  .event-review-delete-content {
    width: 240px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #d22b2b;
  }

  .delete-icon {
    color: white;
  }

  .event-review-delete-content span {
    margin-left: 7px;
    font-size: 16px;
    color: white;
  }
`;

export default Wrapper;
