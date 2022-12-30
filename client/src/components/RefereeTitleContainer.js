import PropTypes from "prop-types";

const RefereeTitleContainer = ({ name, classification, image }) => {
  return (
    <div className="referee-page-card-css">
      <section className="referee-header">
        <header className="referee-head-css">
          <div className="referee-color-css">
            <div color="red" className="referee-color-line-top"></div>
            <div color="red" className="referee-color-line-bottom"></div>
          </div>
          <div
            className="referee-page-icon  referee-page-icon-css"
            width="70"
            height="70"
          >
            <img
              alt=""
              className="image referee-page-image"
              width="70"
              height="70"
              src={image}
            />
          </div>
          <h1 className="referee-page-name">{name}</h1>
          <>
            <img
              alt=""
              className="image league-icon "
              width="20"
              height="20"
              src="https://images.fotmob.com/image_resources/logo/leaguelogo/dark/71.png"
            />
            <span className="referee-page-position">{classification}</span>
          </>
        </header>
      </section>
    </div>
  );
};

RefereeTitleContainer.propTypes = {
  name: PropTypes.string,
  classification: PropTypes.string,
  image: PropTypes.string,
};

RefereeTitleContainer.defaultProps = {
  name: "",
  classification: "",
  image: "",
};

export default RefereeTitleContainer;
