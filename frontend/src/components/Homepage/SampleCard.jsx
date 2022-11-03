import React from "react";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import samplecarddata from "./samplecarddata";

export default function SampleCard() {
  return (
    <div className="flex justify-center box-content">
      <MTCard className="w-24 h-40 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-0">
          <img
            className=""

            src={samplecarddata.image}
            alt={samplecarddata.name}

          />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray "
            className="mb-2  text-yellow-500"
          >
            {samplecarddata.name}
          </Typography>
          <Typography className="grid grid-cols-2" textGradient>
            <div className="flex justify-center items-center absolute top-[0%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              <div className="text-white ">{samplecarddata.intelligence}</div>
            </div>
            <div className="flex justify-center items-center absolute top-[38%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              <div className="text-white ">{samplecarddata.power}</div>
            </div>
            <div className="flex justify-center items-center absolute top-[70%] -left-4 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-8 h-8">
              <div className="text-white ">{samplecarddata.durability}</div>
            </div>

            <div className="flex justify-center items-center absolute top-[0%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              <div className="text-white ">{samplecarddata.strength}</div>
            </div>
            <div className="flex justify-center items-center absolute top-[38%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              <div className="text-white ">{samplecarddata.speed}</div>
            </div>
            <div className="flex justify-center items-center absolute top-[70%] -right-4 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-8 w-8">
              <div className="text-white ">{samplecarddata.combat}</div>
            </div>
          </Typography>
        </CardBody>
      </MTCard>
    </div>
  );
}
