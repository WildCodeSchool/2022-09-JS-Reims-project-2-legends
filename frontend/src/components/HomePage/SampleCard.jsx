import React from "react";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import sampleCardData from "./sampleCardData";

export default function SampleCard() {
  return (
    <div className="flex justify-center box-content">
      <MTCard className="w-24 h-40 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-0">
          <img
            className=""
            src={sampleCardData.image}
            alt={sampleCardData.name}
          />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2  text-yellow-500"
          >
            {sampleCardData.name}
          </Typography>
          <Typography className="grid grid-cols-2" textGradient>
            <span className="text-white flex justify-center items-center absolute top-[0%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              {sampleCardData.intelligence}
            </span>
            <span className="text-white flex justify-center items-center absolute top-[38%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              {sampleCardData.power}
            </span>
            <span className="text-white flex justify-center items-center absolute top-[70%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              {sampleCardData.durability}
            </span>
            <span className="text-white flex justify-center items-center absolute top-[0%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              {sampleCardData.strength}
            </span>
            <span className="text-white flex justify-center items-center absolute top-[38%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              {sampleCardData.speed}
            </span>
            <span className="text-white flex justify-center items-center absolute top-[70%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              {sampleCardData.combat}
            </span>
          </Typography>
        </CardBody>
      </MTCard>
    </div>
  );
}
