import PropTypes from "prop-types";

const arrayPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
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
  })
);

const objectPropType = PropTypes.shape({
  id: PropTypes.number,
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

export default { arrayPropType, objectPropType };
