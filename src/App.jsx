import React, { useState, useEffect } from "react";
import { fetchCotacoes } from "./api";
import Header from "./components/Header";
import CurrencySelector from "./components/CurrencySelector";
import InputAmount from "./components/InputAmount";
import ConvertButton from "./components/ConvertButton";
import ResultDisplay from "./components/ResultDisplay";
import currencies from "./utils/currencies";
import "./styles/App.css";

const App = () => {
  const [moedaOrigem, setMoedaOrigem] = useState("USD");
  const [moedaDestino, setMoedaDestino] = useState("EUR");
  const [valor, setValor] = useState(1);
  const [resultado, setResultado] = useState(null);
  const [cotacoes, setCotacoes] = useState({});
  const [erro, setErro] = useState(null);
  const [exibirCotacoes, setExibirCotacoes] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de loading

  const moedas = Object.keys(currencies);

  useEffect(() => {
    const obterCotacoes = async () => {
      try {
        const dados = await fetchCotacoes(
          moedaOrigem,
          moedas.filter((m) => m !== moedaOrigem)
        );
        setCotacoes(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    obterCotacoes();
  }, [moedaOrigem, moedas]);

  const converter = () => {
    if (cotacoes[moedaDestino]) {
      setResultado((valor * cotacoes[moedaDestino]).toFixed(2));
    } else {
      setErro("Erro na conversão.");
    }
  };
  
  const buscarCotacoesEspecificas = async () => {
    setLoading(true); // Ativa o carregamento
    try {
      const dados = await fetchCotacoes("BRL", ["EUR", "GBP", "JPY", "USD"]);
      setCotacoes(dados);
      setExibirCotacoes(true); // Exibir as cotações após o clique
    } catch (error) {
      setErro(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false); // Desativa o carregamento após 2 segundos
      }, 2000);
    }
  };

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <main>
      <h1>CONVERSOR DE MOEDAS</h1>
      <div className="container">
        <>
          <Header />
        </>
        <CurrencySelector
          label="De:"
          value={moedaOrigem}
          onChange={(e) => setMoedaOrigem(e.target.value)}
          moedas={moedas}
        />
        <CurrencySelector
          label="Para:"
          value={moedaDestino}
          onChange={(e) => setMoedaDestino(e.target.value)}
          moedas={moedas.filter((m) => m !== moedaOrigem)}
        />
        <InputAmount
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <ConvertButton onClick={converter} />
        <button onClick={buscarCotacoesEspecificas}>
          {loading ? "Carregando..." : "Obter Cotações"}
        </button>
        <ResultDisplay resultado={resultado} moedaDestino={moedaDestino} />
        {loading && <p className="loading-spinner"></p>}
      </div>

      <div className="container">
        {exibirCotacoes && (
          <div className="cotacoes-container">
            <h2>Cotações:</h2>
            <p>Referência em BRL</p>
            {Object.entries(cotacoes).map(([moeda, taxa]) => (
              <div key={moeda} className="cotacao-item">
                <img
                  src={currencies[moeda]?.flag}
                  alt={moeda}
                  className="flag"
                />
                <span>
                  {currencies[moeda]?.name}: {taxa}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
