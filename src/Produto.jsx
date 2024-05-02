import React from "react";
import {
  NavLink,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./Produto.css";
import ProdutoDescricao from "./ProdutoDescricao";
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produto = () => {
  const [produtos, setProdutos] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleFetch() {
    setCarregando(true);
    const dados = await (
      await fetch("https://ranekapi.origamid.dev/json/api/produto")
    ).json();
    setProdutos(dados);
    setCarregando(false);
  }

  React.useEffect(() => {
    handleFetch();
  }, []);
  if (carregando) {
    return (
      <section className="c-loaderBody">
        <div className="c-loader"></div>
      </section>
    );
  }
  return (
    <section className="ProdutoContainer">
      {produtos &&
        produtos.map((produto) => (
          <div key={produto.id}>
            <NavLink
              key={produto.id}
              className="ProdutoImg"
              to={`/produto/${produto.id}`}
              onClick={() => setId(produto.id)}
            >
              <img src={produto.fotos[0].src} alt={produto.fotos[0].alt} />
            </NavLink>
            <h1 className="ProdutoNome">{produto.nome}</h1>
          </div>
        ))}
    </section>
  );
};

export default Produto;
