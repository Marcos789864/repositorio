import Lottie from "lottie-react";
import intro from '../src/animations/developer.json';
import { useEffect, useState, useRef } from 'react';
import PadelClub from '../src/images/PadelClub.png';
import SuperMercado from '../src/images/supermercado.png';
import './App.css';

function App() {

  const experiencias = [
    "🚀 RockInDev",
    "🎾 PadelClub",
    "🖌️ Competencia UX/UI",
  ];

  const descripcionExperiencias = [
    "Tuve mi primera experiencia laboral como pasante durante 2 meses en esta empresa, desempeñándome como desarrollador backend. Utilicé NestJS para desarrollar una funcionalidad para agendar reuniones, integrando y manipulando dos APIs.",
    " Mi primer proyecto complejo, me desempeñé como desarrollador full-stack, encargándome de la creación de la base de datos, el desarrollo de endpoints, el cifrado de datos y el establecimiento de conexiones entre el frontend y el backend.",
    "Participé en la competencia UMAI UX Challenge 2023, donde adquirí conocimientos fundamentales sobre UX/UI. Junto a un equipo, desarrollamos una idea y creamos un prototipo en Figma, el cual presentamos frente a un jurado",
  ];

  const fotos = [
    PadelClub,
    SuperMercado,
  ];

  const descripcionProyectos = [
    "Padel club es una aplicación desarrollada para la gente de distintos clubes que les guste competir en el padel, contando con un sistema de elo e historial para llevar registro de los logros de los jugadores.",
    "La página web muestra una variedad de productos organizados por categorías. Los usuarios pueden filtrar según sus necesidades y agregar artículos a su carrito de compras. La plataforma permite gestionar y revisar los productos seleccionados antes de proceder a la compra.",
  ];

  const fullText = 'Marcos@portfolio:~$ Hola, soy Marcos un chico de 18 años apasionado por la informatica, en busca de generar aportes a proyectos y aprender de los mismos.';

  const repositorio= ["https://github.com/Marcos789864/Nest.js_Padel_Club_Original.git", "https://supermarket32.netlify.app/" ];

  const botonInfo = ["Repositorio", "Pagina"];


  const [text, setText] = useState('');
  const [titulo, setTitulo] = useState('');
  const [descExperiencia, setDescExperiencia] = useState('');
  const [descProyecto, setdescProyecto] = useState('');
  const [repo, setRepo] = useState('');
  const [buttonInfo, setButtoninfo] = useState('');
  const [foto, setFoto] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // Primera terminal
  const currentText1 = useRef("");
useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    if (i < fullText.length) {
      currentText1.current += fullText[i];
      setText(currentText1.current);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);

  return () => clearInterval(interval);
}, []);


  useEffect(() => {
    if (
      !experiencias[currentIndex1] ||
      !descripcionExperiencias[currentIndex1]
    ) return;

    let i = 0;
    let j = 0;
    let currentTitle = '';
    let currentDesc = '';

    const title = experiencias[currentIndex1];
    const desc = descripcionExperiencias[currentIndex1];

    const interval = setInterval(() => {
      const shouldContinue = i < title.length || j < desc.length;

      if (!shouldContinue) {
        clearInterval(interval);
        return;
      }

      if (i < title.length) {
        currentTitle += title[i];
        setTitulo(currentTitle);
        i++;
      }

      if (j < desc.length) {
        currentDesc += desc[j];
        setDescExperiencia(currentDesc);
        j++;
      }
    }, 30);

    setTitulo('');
    setDescExperiencia('');

    return () => clearInterval(interval);
    
  }, [currentIndex1, experiencias, descripcionExperiencias]);

  //Tercer Terminal
  useEffect(() => {
    if (
      !fotos[currentIndex2] ||
      !descripcionProyectos[currentIndex2]
    ) return;

    let j = 0;
    let currentDescProyecto = '';

    const descripcionProyecto = descripcionProyectos[currentIndex2];
  

    const interval = setInterval(() => {
      setFoto(fotos[currentIndex2]);
      setRepo(repositorio[currentIndex2]);
      setButtoninfo(botonInfo[currentIndex2]);

      if (j < descripcionProyecto.length) {
        currentDescProyecto += descripcionProyecto[j];
        setdescProyecto(currentDescProyecto);
        j++;
      }

    }, 30);

    setFoto(0);
    setdescProyecto('');

    return () => clearInterval(interval);
    
  }, [currentIndex2, fotos, descripcionProyectos, repositorio, botonInfo]);

  return (
    <>
      <section className="section1">
        <div className="section1-left">
          <Lottie animationData={intro} loop={true} className="lottie" />
        </div>
        <div className="section1-right">
          <h1>Hola 👋, soy Marcos</h1>
          <p>Desarrollador Backend enfocado en crear APIs robustas y sistemas escalables.</p>
          <div className="buttons">
            <button className="primary" onClick={() => document.getElementById("proyectos").scrollIntoView({ behavior: "smooth" })} >Ver proyectos</button>
            <button className="secondary"> <a href=" https://www.canva.com/design/DAGugQYr_0Q/Q_sLaNwozOX4HJ50-21bqw/view?utm_content=DAGugQYr_0Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1a74f537c0" target="_blank">Ver CV</a> </button>
          </div>
        </div>
      </section>

      <section className='section2'>
        <h1>Sobre mi</h1>
        <div className="terminal">
          <div className="topterminal"></div>
          <div className="terminal-content">
            <p className="typed-text">{text}</p>
          </div>
        </div>
      </section>

      <section className="section3">
        <h1>Experiencias</h1>

        <div className="terminal">
          <div className="topterminal"></div>

          <div className="terminal-content">
            <p className="typed-text">usuario@portfolio:~$ Select Experiencia from users where name = "Marcos".</p>

            <div className="experiencia-container">
              <button
                className="button"
                onClick={() =>
                  setCurrentIndex1((prev) =>
                    prev > 0 ? prev - 1 : experiencias.length - 1
                  )
                }
              >
                ←
              </button>
              <div className="card">
                <h1 className="typed-text">{titulo}</h1>
                <p className="typed-text">{descExperiencia}</p>
              </div>
              <button
                className="button"
                onClick={() =>
                  setCurrentIndex1((prev) => (prev + 1) % experiencias.length)
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section4" id="proyectos">
        <h1> Proyectos</h1>
        <div className="terminal">
          <div className="topterminal"></div>
          <p className="typed-text">usuario@portfolio:~$ Select Proyectos from users where name = "Marcos".</p>

          <div className="experiencia-container">
            <button
              className="button"
              onClick={() =>
                setCurrentIndex2((prev) =>
                  prev > 0 ? prev - 1 : experiencias.length - 1
                )
              }
            >
              ←
            </button>
            <div className="card2">
              <img src={foto} className="imagen-proyecto" alt="Proyecto" />
              <div className= "cardcenter">
              <button
                className="terminal-button "
                
                onClick={() => setIsModalOpen(true)}
              >
                Ver descripción
              </button>
               <button className="terminal-button "> <a href= {repo} target="_blank" rel="noreferrer" > {buttonInfo} </a> </button>
               </div>
            </div>
            <button
              className="button"
              onClick={() =>
                setCurrentIndex2((prev) => (prev + 1) % experiencias.length)
              }
            >
              →
            </button>
          </div>
        </div>
      </section>
   
      {isModalOpen && (
        <div className="modal-overlay">
  <div className="modal-terminal">
    <div className="modal-header">
      <button
        onClick={() => setIsModalOpen(false)}
      >
        X
      </button>
    </div>
    <div className="modal-content">
      <p className="typed-text">{descProyecto}</p>
    </div>
  </div>
</div>
      )}

      <div className="espacio"></div>
    </>
  );
}

export default App;

