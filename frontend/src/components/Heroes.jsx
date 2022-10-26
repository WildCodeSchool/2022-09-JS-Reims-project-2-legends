import React from "react";

import axios from "axios";

export default function Heroes() {
  const [heroes, setHeroes] = React.useState([]);

  const fetchData = () => {
    const promises = new Array(50).fill(null).map(() => {
      const random = Math.floor(Math.random() * 700);
      return axios.get(
        `https://www.superheroapi.com/api.php/4070424506516370/${random}`
      );
    });

    Promise.all(promises).then((responses) => {
      setHeroes(responses.map((response) => response.data));
    });
  };
  return (
    <div>
      <button type="button" onClick={fetchData}>
        Click here
      </button>
      <p>{heroes}</p>
    </div>
  );
}
