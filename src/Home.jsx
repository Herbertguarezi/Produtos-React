import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head";

const Home = () => {
  return (
    <div>
      <Head titulo="Home" descricao="Essa é a Home do site" />
      <h1>Home</h1>
      <p>Essa é a Home.</p>
      <Link to="produto/notebook">notebook</Link> |{" "}
      <Link to="produto/smartphone">smartphone</Link>
    </div>
  );
};

export default Home;
