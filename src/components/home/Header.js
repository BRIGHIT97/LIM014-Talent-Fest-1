import React from 'react';
import logoheader from '../../images/logoheader.png'
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider';
import { FormControl, InputGroup } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
 
export const Header = () => {
  let history = useHistory();
  //let { path, url } = useRouteMatch();
 
  const {logOut} = useAuth();
 
  const meryli = {
    listStyle: "none",
  }
  const merylink = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    marginRight: "3rem",
    fontWeight: "bold",
  }
 
  return (
    <>
      <header className="meryheader d-flex justify-content-between px-5 pe-5">
        <ul className="d-flex justify-content-between align-self-center">
          <Link style={merylink}>Cuidado</Link>
        </ul>
        <figure className="meryimgheader d-flex align-items-center">
          <Link to={"/"} onClick={() => logOut()} style={merylink}>
            Salir
          </Link>
          <img src={logoheader} alt="logo" className="merylogoheader" />
        </figure>
      </header>
      <section className="merysubnav">
        <nav className="px-5 pt-3 pb-2">
          <ul className="d-flex justify-content-between">
            <li style={meryli}>
              <Link to="/cuidado/salud" style={merylink}>
                Salud
              </Link>
            </li>
            <li style={meryli}>
              <Link to="/cuidado/seguridad" style={merylink}>
                Seguridad
              </Link>
            </li>
            <li style={meryli}>
              <Link to="/cuidado/beneficios" style={merylink}>
                Beneficios
              </Link>
            </li>
            <InputGroup
              className="mb-3 me-3 input-group m-auto"
              id="searchNancy"
              // onChange={(e) => handleChange(e)}
            >
              <InputGroup.Text className="border-0 bg-transparent text-danger">
                <i className="fas fa-search"></i>
              </InputGroup.Text>
              <FormControl
                className="border-0 bg-white rounded-pill"
                placeholder="Encuentra tu producto aquí..."
                aria-label="Encuentra tu producto aquí..."
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <button className="merylinkjob" onClick={()=> history.push('/mi-trabajo')}>Para mi trabajo</button>
            {/* <button className="merylinkjob" onClick={()=> history.push('/mi-trabajo')}>Admin</button> */}
            {/* <button className="merylinkjob" onClick={()=> history.push('/mi-trabajo')}>Registrador</button> */}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Administrador
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item >
                  <Link to='/administrador/usuarios'>Usuarios</Link>                 
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to='/administrador/revision-post'>Revisión de Posts</Link>      
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Registrador
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to='/registrador/historial-post'>Posts</Link>                 
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </nav>
      </section>
    </>
  );
}



