import React, { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <h1 className="logo">Conversor</h1>
      <nav className={`nav ${menuAberto ? "ativo" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={alternarMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={alternarMenu}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#cotacoes" onClick={alternarMenu}>
              Cotações
            </a>
          </li>
          <li>
            <a href="#duvidas" onClick={alternarMenu}>
              Dúvidas
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-hamburguer" onClick={alternarMenu}>
        ☰
      </div>
    </header>
  );
};

export default Header;
