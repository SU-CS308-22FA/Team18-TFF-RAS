import PropTypes from "prop-types";

const RefereeInfoContainer = ({ region, licenseNumber }) => {
  const fanRating = 8.5;
  const overallRating = 6;
  const expertRating = 3;
  const fanSentiment = 10;
  const overallSentiment = 10;
  const expertSentiment = 10;

  return (
    <div className="referee-rating-section-css">
      <div className="referee-page-card-css">
        <section className="referee-stats-section-css">
          <div className="referee-single-stat-container-top"></div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">Region</div>
            <b className="referee-stat-value">{region}</b>
          </div>
          <div className="referee-single-stat-container-top"></div>
          <div className="referee-single-stat-container-bottom"></div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">License Number</div>
            <b className="referee-stat-value">{licenseNumber}</b>
          </div>
          <div className="referee-single-stat-container-bottom"></div>
        </section>
      </div>
      <div className="referee-page-card-css">
        <section className="referee-info-section-css">
          <h2 className="referee-info-header">Referee info</h2>
          <div className="css-separator"></div>
          <div className="css-info-section">
            <h3 className="css-region-header">Region</h3>
            <span className="css-info-text">{region}</span>
          </div>
          <div className="css-separator"></div>
          <div className="css-info-section">
            <h3 className="css-license-number-header">TFF License Number</h3>
            <span className="css-info-text">{licenseNumber}</span>
          </div>
        </section>
      </div>
      <div className="referee-page-card-css">
        <section className="referee-stats-section-css referee-rating-card-css">
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">Overall Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  overallRating >= 6.9
                    ? "rgb(30, 200, 83)"
                    : overallRating >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{overallRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">Fan Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  fanRating >= 6.9
                    ? "rgb(30, 200, 83)"
                    : fanRating >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{fanRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-top">
            <div className="referee-stat-title">Expert Rating</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  expertRating >= 6.9
                    ? "rgb(30, 200, 83)"
                    : expertRating >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{expertRating}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">Overall Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  overallSentiment >= 6.9
                    ? "rgb(30, 200, 83)"
                    : overallSentiment >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{overallSentiment}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">Fan Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  fanSentiment >= 6.9
                    ? "rgb(30, 200, 83)"
                    : fanSentiment >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{fanSentiment}</span>
            </div>
          </div>
          <div className="referee-single-stat-container-bottom">
            <div className="referee-stat-title">Expert Sentiment</div>
            <div
              fontSize="20"
              width="52"
              height="30"
              className="css-referee-rating-styled"
              style={{
                backgroundColor:
                  expertSentiment >= 6.9
                    ? "rgb(30, 200, 83)"
                    : expertSentiment >= 5.0
                    ? "rgb(240, 128, 34)"
                    : "rgb(229, 94, 91)",
              }}
            >
              <span>{expertSentiment}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

RefereeInfoContainer.propTypes = {
  region: PropTypes.string,
  licenseNumber: PropTypes.string,
};

RefereeInfoContainer.defaultProps = {
  region: "",
  licenseNumber: "",
};

export default RefereeInfoContainer;
