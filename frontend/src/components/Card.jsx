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
    <div className="flex justify-center box-content">
      <MTCard className="w-48 h-80 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-0">
          <img className="" src={image} alt={name} />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray "
            className="mb-2  text-yellow-500"
          >
            {name}
          </Typography>
          <Typography className="grid grid-cols-2" textGradient>
            <div className="flex justify-center items-center absolute top-1 left-2 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 ">
              <img className="w-5 h-5" src="./icons/cerveau.png" alt="icon" />
              <div className="text-white ">{intelligence}</div>
            </div>

            <div className="flex justify-center items-center absolute top-1 right-2 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2">
              <img className="w-5 h-5" src="./icons/sword.png" alt="icon" />
              <div className="text-white ">{strength}</div>
            </div>
            <div className="flex justify-center items-center col-span-2">
              <progress id="life" style={{ width: `${life}px` }} value={life}>
                {life}
              </progress>
              <label className="text-white font-black" htmlFor="life">
                {life}
              </label>
              {/* <div className="bg-red-500 w-32 8 h-2" />
              <div className="text-white ">{life}</div> */}
            </div>
          </Typography>
        </CardBody>
        {children}
      </MTCard>
    </div>
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
