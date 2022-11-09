import React from "react";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import sampleCardData from "./sampleCardData";
import "./Homepage.css";

export default function SampleCard() {
  return (
    <div className="flex justify-center box-content">
      <MTCard className="w-24 h-40 bg-black m-4 relatives border-2 border-black border-solid ">
        <CardHeader floated={false} className="-m-">
          <img
            className=""
            src={sampleCardData.image}
            alt={sampleCardData.name}
          />
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray "
            className="mb-2  text-yellow-500"
          >
            {sampleCardData.name}
          </Typography>
          <Typography className="grid grid-cols-2" textGradient>
            <div className="hover-parent flex justify-center items-center absolute top-[0%] -left-5 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-10 h-8">
              <section className=" show-on-hover">
                <p>Intelligence </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/brainstorm.png"
                alt="intelligence"
              />
              <div className="text-white ">81</div>
            </div>
            <div className="hover-parent flex justify-center items-center absolute top-[30%] -left-5 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-10 h-8">
              <section className=" show-on-hover">
                <p>Strength </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/magic.png"
                alt="strength"
              />
              <div className="text-white ">40</div>
            </div>
            <div className="hover-parent flex justify-center items-center absolute top-[58%] -left-5 shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-10 h-8">
              <section className=" show-on-hover">
                <p>Durability </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/flash.png"
                alt="durability"
              />
              <div className="text-white ">55</div>
            </div>

            <div className="hover-parent flex justify-center items-center absolute top-[0%] -right-5 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-[33px] w-10">
              <section className=" show-on-hover-right">
                <p>Power </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/protest.png"
                alt="power"
              />
              <div className="text-white ">63</div>
            </div>
            <div className="hover-parent flex justify-center items-center absolute top-[30%] -right-5 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-[33px] w-10">
              <section className=" show-on-hover-right">
                <p>Combat </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/fighting.png"
                alt="combat"
              />
              <div className="text-white ">90</div>
            </div>
            <div className="hover-parent flex justify-center items-center absolute top-[58%] -right-5 bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 h-[33px] w-10">
              <section className=" show-on-hover-right">
                <p>Speed </p>
              </section>
              <img
                className="h-[20px] "
                src="./icons/running.png"
                alt="speed"
              />
              <div className="text-white ">29</div>
            </div>
          </Typography>
        </CardBody>
      </MTCard>
    </div>
  );
}
