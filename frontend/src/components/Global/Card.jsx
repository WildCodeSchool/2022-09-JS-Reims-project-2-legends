import PropTypes from "prop-types";
import React from "react";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import CardProps from "../../prop-types/CardProps";

export default function Card({ character, onClick }) {
  const {
    name,
    image: { url },
  } = character;
  const listStats = Object.entries(character.powerstats);
  const style =
    "flex flex-col justify-center items-center shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-12 h-16 z-10 -translate-y-1/2";

  return (
    <button
      type="button"
      className="flex justify-center box-content w-52"
      onClick={onClick}
    >
      <MTCard className="w-48 h-80 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-0">
          <img className="" src={url} alt={name} />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2  text-yellow-500"
          >
            {name}
          </Typography>
          <Typography>
            {listStats.map((stat) => {
              const statName = stat[0];
              const statValue = stat[1];
              const statNameShort = statName.slice(0, 3).toUpperCase();
              return (
                <span
                  key={statName}
                  className={`
                ${style} 
                ${statName === "intelligence" && "absolute top-[0%] -left-4"}
                ${statName === "power" && "absolute top-[38%] -left-4"}
                ${statName === "durability" && "absolute top-[70%] -left-4"}
                ${statName === "strength" && "absolute top-[0%] -right-4"}
                ${statName === "speed" && "absolute top-[38%] -right-4"}
                ${statName === "combat" && "absolute top-[70%] -right-4"}`}
                >
                  <span className="text-yellow-600">
                    {statNameShort === "SPE" ? "SPD" : statNameShort}
                  </span>
                  <span className="text-white">{statValue}</span>
                </span>
              );
            })}
          </Typography>
        </CardBody>
      </MTCard>
    </button>
  );
}

Card.propTypes = {
  character: CardProps.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick: null,
};
