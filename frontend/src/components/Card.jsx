import PropTypes from "prop-types";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Card(props) {
  const { image, name, intelligence, strength, life, children } = props;
  return (
    <MTCard className="w-48 h-80 bg-black m-4">
      <CardHeader floated={false} className="mt-4 p-y-6">
        <img className="" src={image} alt={name} />
      </CardHeader>
      <CardBody className="text-center p-1">
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2  text-yellow-500"
        >
          {name}
        </Typography>
        <Typography className="grid grid-cols-2" textGradient>
          <div className="flex justify-center items-center">
            <img className="w-4 h-4" src="./icons/cerveau.png" alt="icon" />
            <div className="text-white ">{intelligence}</div>
          </div>

          <div className="flex justify-center items-center">
            <img className="w-4 h-4" src="./icons/sword.png" alt="icon" />
            <div className="text-white ">{strength}</div>
          </div>
          <div className="flex justify-center items-center col-span-2">
            <div className="bg-red-500 w-[100px] h-2" />
            <div className="text-white ">{life}</div>
          </div>
        </Typography>
      </CardBody>
      {children}
    </MTCard>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  image: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired,
  life: PropTypes.number.isRequired,
};

Card.defaultProps = {
  children: null,
};
