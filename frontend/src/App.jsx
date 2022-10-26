import "./App.css";
import React from "react";
import Card from "./components/Card";
import Heroes from "./components/Heroes";

const hero = {
  name: "Nightcrawler",
  image:
    "https://i.pinimg.com/736x/1b/58/f2/1b58f20fc5556f3fbddd26703a33f250--marvel-dc-comics-marvel.jpg",
  intelligence: 15,
  strength: 20,
  life: 100,
};
const enemyInitialState = {
  name: "Magneto",
  image:
    "https://w0.peakpx.com/wallpaper/516/619/HD-wallpaper-magneto-dark-mag.jpg",
  intelligence: 20,
  strength: 40,
  life: 100,
};

function App() {
  const [enemy, setEnemy] = React.useState(enemyInitialState);
  const setEnemyLife = (life) => {
    setEnemy({ ...enemy, life });
  };
  return (
    <div className="App">
      <Heroes />
      <div className="m-0 p-0 flex flex-col gap-32">
        <Card
          image={enemy.image}
          alt={enemy.name}
          name={enemy.name}
          intelligence={enemy.intelligence}
          strength={enemy.strength}
          life={enemy.life}
        />
        <Card
          image={hero.image}
          alt={hero.name}
          name={hero.name}
          intelligence={hero.intelligence}
          strength={hero.strength}
          life={hero.life}
        >
          <div className="flex flex-row w-full">
            <button
              type="button"
              className="bg-red-500 w-full h-8 text-white"
              onClick={() => {
                const damage = Math.floor(Math.random() * hero.strength);
                setEnemyLife(enemy.life - damage);
              }}
            >
              Attack
            </button>
            <button type="button" className="bg-blue-500 w-full h-8 text-white">
              Defend
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
// ss
