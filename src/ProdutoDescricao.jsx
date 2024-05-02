import React from "react";
import { useParams } from "react-router-dom";
import "./ProdutoDescricao.css";
import "./animeLeft.css";
import "./loader.css";

const ProdutoDescricao = ({ id }) => {
  const [produto, setProduto] = React.useState();
  const [carregando, setCarregando] = React.useState(null);
  const params = useParams();

  async function handleFetch() {
    setCarregando(true);
    const dados = await (
      await fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
    ).json();
    setProduto(dados);
    setCarregando(false);
  }

  React.useEffect(() => {
    handleFetch();
  }, []);
  if (!produto) {
    return (
      <section className="c-loaderBody">
        <span className="c-loader"></span>
      </section>
    );
  }
  return (
    <section className="DescricaoContainer ">
      <div className="DescricaoContent">
        {produto.fotos.map((foto) => (
          <img src={foto.src} alt={foto.titulo} key={foto.titulo} />
        ))}
        <div className="DescricaoInfo">
          <h1>{produto.nome}</h1>
          <p className="preco">R$ {produto.preco}</p>
          <p>{produto.descricao}</p>
        </div>
      </div>
    </section>
  );
};

export default ProdutoDescricao;
