import React from "react";

function Menu() {
  return (
    <header className="flex flex-col justify-between px-8">
      <h1 className="text-yellow-300 text-center text-4xl font-istok-web my-4">
        LEGENDS
      </h1>
      <nav className="text-center font-iceland text-2xl ">
        <ul className="navbar flex justify-between  text-green-400">
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
    </header>
  );
}

export default Menu;
