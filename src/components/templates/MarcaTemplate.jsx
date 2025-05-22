import styled from "styled-components";
import { BtnCircular, Btnfiltro, Btnsave, RegistrarMarca, TablaMarca, useAuthStore, Title, v } from "../../index"
import { useState } from "react";
import { Header } from "../../index";
import { ContentFiltro } from "../../index";

export function MarcaTemplate({data}) {
  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const nuevoRegistro = () =>{
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect([]);
  }
  return (
    <Container>
      {
        openRegistro && <RegistrarMarca dataSelect={dataSelect} accion={accion} onClose={() => SetopenRegistro(!openRegistro)}/>
      }
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}/>
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Marcas
          </Title>
          <Btnfiltro funcion={nuevoRegistro} bgcolor="#f6f3f3"
          textcolor="353535"
          icono={<v.agregar/>}
          />
        </ContentFiltro>
      </section>
      <section className="area2">

      </section>
      <section className="main">
        <TablaMarca data={data}/>
      </section>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({theme}) => theme.text};
  width: 100%;
  display: grid;
  padding: 15px;
  grid-template:
  "header" 100px
  "area1" 100px
  "area2" 100px
  "main" auto
  ;
  .header{
    grid-area:header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .area1{
    grid-area:area1;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }
  .area2{
    grid-area:area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }
  .main{
    grid-area:main;
    background-color: rgba(255, 255, 255, 0.14);
    display: flex;
    align-items: center;
  }
`;