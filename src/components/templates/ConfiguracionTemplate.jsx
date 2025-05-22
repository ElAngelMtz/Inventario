import styled from "styled-components";
import fondocuadros from "../../assets/fondocuadros.svg";
import { Link } from "react-router-dom";
import { DataModulosConfiguracion } from "../../utils/dataEstatica";

export function ConfiguracionTemplate() {
  return (
    <Container>
      <div id="cards">
        {DataModulosConfiguracion.map((item, index) => (
          <Link
            to={item.link}
            className={item.state ? "card" : "card false"}
            key={index}
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div className="card-content">
              <div className="card-image">
                <img src={item.icono} alt={item.title} />
              </div>
              <div className="card-info-wrapper">
                <div className="card-info">
                  <div className="card-info-title">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgtotal};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

  #cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 960px;
    width: 100%;
    justify-content: center;
  }

  .card {
    background-color: ${({ theme }) => theme.bgcards};
    border-radius: 12px;
    width: 280px;
    height: 220px;
    transition: 0.3s ease;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    border: 1px solid #333;
  }

  .card:hover {
    transform: scale(1.03);
    border-color: #777;
  }

  .card-image {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 60px;
    }
  }

  .card-info-wrapper {
    padding: 10px;
    color: ${({ theme }) => theme.text};
  }

  .card-info-title h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .card-info-title h4 {
    margin: 0;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colorsubtitlecard};
  }
  

  @media (max-width: 1000px) {
    body {
      align-items: flex-start;
      overflow: auto;
    }
`;

