import React from "react";

function RulesTab() {
  return (
    <div className=" flex flex-col justify-between items-center ">
      <h3 className="text-center text-[#54EB75]">{"règles".toUpperCase()}</h3>
      <section className="w-5/6 h-4/5 flex overflow-auto flex-col justify-evenly bg-blue-gray-200 bg-opacity-10 rounded-xl">
        <h4 className="pl-2 underline">DRAFT PICK :</h4>
        <p className=" pl-2 text-white ">
          Le joueur 1 commence la Draft, le jeu propose 3 cartes, le joueur
          pourra choisir une carte, les deux autres iront directement dans le
          deck du joueur adverse. La draft continue alors jusqu'à ce que chaque
          joueur ait 6 cartes.
        </p>
        <h4 className="pl-2 underline">COMBAT :</h4>
        <p className="pl-2 text-white ">
          Une stat est choisie aléatoirement par le jeu et annoncé au début de
          la partie. Chaque joueur choisit son héros pour le placer sur le
          board, si la stat est équivalente pour les deux personnages aucun des
          joueurs ne gagne de points autrement le personnage avec la stat dont
          la valeur est la plus élevée donne 1 point au joueur. La partie se
          termine quand les 2 joueurs n’ont plus de cartes.
        </p>
      </section>
    </div>
  );
}

export default RulesTab;
