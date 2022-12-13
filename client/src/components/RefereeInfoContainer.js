import PropTypes from "prop-types";

const RefereeInfoContainer = ({ region, licenseNumber }) => {
  return (
    <div className="referee-info-section-css">
      <div className="referee-page-card-css">
        <section>
          {/* <h2 className="referee-stats-h2">Referee Stats</h2> */}
          <div className="referee-stats-section-css">
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
          </div>
        </section>
      </div>
      <div className="referee-page-card-css"></div>
      <div className="referee-page-card-css"></div>
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
