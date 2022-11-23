import React from "react";
import PropTypes from "prop-types";
import "./MiniCard.css";

export default function MiniCard({ character, selectCardToPlay }) {
  const image = character.image.url;
  return (
    <div className="mini-card flex flex-col items-center justify-center overflow-hidden">
      <div className="border-green-900 border-solid border-2 rounded-[3xl] aspect-auto">
        <img
          src={image}
          alt=""
          className=""
          onClick={selectCardToPlay}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

MiniCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
  selectCardToPlay: PropTypes.func,
};

MiniCard.defaultProps = {
  selectCardToPlay: null,
};
