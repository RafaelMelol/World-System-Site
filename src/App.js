import React, { useRef, useState, useEffect } from "react"; // Adicione o useEffect
import "./App.css";
import worldIcon from "./assets/world-icon.png";
import techBg from "./assets/tech-bg.jpg";
import peopleWorking from "./assets/people-working.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const empresaRef = useRef(null);
  const oportunidadesRef = useRef(null);
  const contatoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRef = (ref) => {
    setIsMenuOpen(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <a
            href="#top"
            className="logo-link"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              setIsMenuOpen(false);
            }}
          >
            <span>World</span>
            <img
              src={worldIcon}
              alt="World System Icon"
              className="logo-icon"
            />
            <span>System</span>
          </a>
        </div>

        {/* Hamburger Icon para mobile */}
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`} />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToRef(empresaRef)}>Empresa</button>
          <button onClick={() => scrollToRef(oportunidadesRef)}>
            Oportunidades
          </button>
          <button onClick={() => scrollToRef(contatoRef)}>Contato</button>
        </nav>
      </header>

      <div className="hero-container">
        <div
          className="hero-image"
          style={{ backgroundImage: `url(${techBg})` }}
        ></div>
        <div className="hero-content">
          <h1 className="hero-title">Soluções que geram resultados</h1>
        </div>
      </div>

      {/* Seções da página */}
      <section ref={empresaRef} id="empresa" className="page-section">
        <h2>Sobre Nós</h2>
        <div className="empresa-content">
          <div className="empresa-text">
            <p className="parag1">
              A World System - Soluções em T.I, fundada em 1993 com sede em
              Lagoa da Prata a 187 km de Belo Horizonte no centro oeste mineiro,
              é uma empresa pioneira no mercado de soluções em TI.
              <br />{" "}
            </p>

            <p className="parag2">
              Ao longo dos seus anos no mercado, ela desenvolvendo e aprimorando
              sistemas de automação para empresas de diversos segmentos como
              autopeças, atacadistas de pequeno e médio porte e lojas de vários
              segmentos.
              <br />{" "}
            </p>

            <p className="parag3">
              Atualmente, sua equipe é composta por profissionais, dentre eles:
              bacharéis e pós graduados em Sistemas de Informação, Ciência da
              Computação, Técnico em Computação, Administração e Contabilidade.
              <br />{" "}
            </p>

            <p className="parag4">
              A World System conta também com sede própria, modernas instalações
              e equipamentos, vários veículos para atendimento in loco e
              tecnologia para uma amplo atendimento online com maior rapidez,
              sem perder a qualidade.
            </p>
          </div>
          <div className="empresa-image">
            <img
              src={peopleWorking}
              alt="Pessoas trabalhando"
              className="vector-image"
            />
          </div>
        </div>
      </section>

      <section
        ref={oportunidadesRef}
        id="oportunidades"
        className="page-section"
      >
        <h2>Oportunidades</h2>
        {/* Conteúdo aqui */}
      </section>

      <section ref={contatoRef} id="contato" className="page-section">
        <h2>Contato</h2>
        {/* Conteúdo aqui */}
      </section>
    </div>
  );
}

export default App;
