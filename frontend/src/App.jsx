import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Card from "./components/Card";

const hero = {
  name: "Nightcrawler",
  image:
    "https://i.pinimg.com/736x/1b/58/f2/1b58f20fc5556f3fbddd26703a33f250--marvel-dc-comics-marvel.jpg",
  intelligence: 20,
  strength: 30,
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
      <Home />

      <Card
        image={hero.image}
        alt={hero.name}
        name={hero.name}
        intelligence={hero.intelligence}
        strength={hero.strength}
        life={hero.life}
      />
      <Card
        image={enemyInitialState.image}
        alt={enemyInitialState.name}
        name={enemyInitialState.name}
        intelligence={enemyInitialState.intelligence}
        strength={enemyInitialState.strength}
        life={enemyInitialState.life}
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
      <div className="flex flex-col gap-36">
        <Card
          image={hero.image}
          alt={hero.name}
          name={hero.name}
          intelligence={hero.intelligence}
          strength={hero.strength}
          life={hero.life}
        />
        <Card
          image={enemyInitialState.image}
          alt={enemyInitialState.name}
          name={enemyInitialState.name}
          intelligence={enemyInitialState.intelligence}
          strength={enemyInitialState.strength}
          life={enemyInitialState.life}
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
