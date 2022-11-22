import PropTypes from "prop-types";

const CardProps = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  powerstats: PropTypes.shape({
    intelligence: PropTypes.string,
    strength: PropTypes.string,
    speed: PropTypes.string,
    durability: PropTypes.string,
    power: PropTypes.string,
    combat: PropTypes.string,
  }),
  image: PropTypes.shape({ url: PropTypes.string }),
});

export default CardProps;
