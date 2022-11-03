import React, { useState } from "react";
import PropTypes from "prop-types";
import CardsTab from "./CardsTab";
import RulesTab from "./RulesTab";
import InfoTab from "./InfoTab";
import logo from "../../assets/legends-logo.png";

function HomePage({ play }) {
  const [tab, setTab] = useState("rules");
  return (
    <div className="h-screen w-screen flex flex-col justify-evenly items-center text-yellow-500">
      <h1 className="text-2xl text-white">LEGENDS</h1>
      <img className="logo" src={logo} alt="Legends logo" />
      <br />
      <div className="w-screen h-1/6 list-none flex flex-col justify-around items-center">
        <div className="w-1/2 h-0.5 bg-[#54EB75] rounded-sm" />
        <ul className="w-screen list-none flex justify-evenly text-[#54EB75]">
          <li
            aria-hidden="true"
            onClick={() => setTab("cards")}
            className="hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            CARTES
          </li>
          <li
            aria-hidden="true"
            onClick={() => setTab("rules")}
            className="hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            REGLES
          </li>
          <li
            aria-hidden="true"
            onClick={() => setTab("info")}
            className="hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
          >
            INFOS
          </li>
        </ul>
        <div className="w-1/2 h-0.5 bg-[#54EB75] rounded-sm" />
      </div>
      {tab === "rules" && <RulesTab />}
      {tab === "cards" && <CardsTab />}
      {tab === "info" && <InfoTab />}

      <button
        type="button"
        className=" text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 active:bg-green-50 focus:bg-green-500"
        onClick={play}
      >
        PLAY
      </button>
    </div>
  );
}
HomePage.propTypes = {
  play: PropTypes.func.isRequired,
};
export default HomePage;
