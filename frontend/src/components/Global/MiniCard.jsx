import React from "react";
import PropTypes from "prop-types";

export default function MiniCard({ dataDeck, selectCardToPlay }) {
  const image = dataDeck.image.url;
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="border-pink-900 border-solid border-4 w-[75%] rounded-[3xl] aspect-auto">
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
  dataDeck: PropTypes.shape({
    image: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
  selectCardToPlay: PropTypes.func.isRequired,
};
