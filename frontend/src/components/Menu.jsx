import React from "react";

function Menu() {
  return (
    <header className="h-screen flex flex-col justify-between items-center">
      <h1 className="text-yellow-300 text-center text-4xl font-istok-web my-4">
        LEGENDS
      </h1>
      <nav className="text-center font-iceland text-2xl ">
        <ul className="flex justify-around items-center">
          <li>
            <a href="/">CARTES</a>
          </li>
          <li>
            <a href="/">REGLES</a>
          </li>
          <li>
            <a href="/">INFOS</a>
          </li>
        </ul>
      </nav>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Netus sem proin
        arcu laoreet accumsan blandit! Phasellus porttitor curabitur per.
      </p>
    </header>
  );
}

export default Menu;
