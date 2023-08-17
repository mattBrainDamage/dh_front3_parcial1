import { useState } from 'react'
import './Components/Card'
import './App.css'
import './assets/Form.css'
import Card from './Components/Card';



function App() {

  const [usuario, setUsuario] = useState({
    nombre: " "
  });

  const [color, setColor] = useState({
    nombre: " "
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {

    if (usuario.nombre.length > 2 && color.nombre.length > 5 ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
      setShow(false);
    }
  };

  return (
    <>
      <h2>Elige un participante</h2>

      <div className="form">
        <div>
          <label>Ingrese su nombre </label>
          <input
            type="text"
            value={usuario.nombre}
            onChange={(event) =>
    
              setUsuario({ ...usuario, nombre: event.target.value })
            }
          />
        </div>

        <div>
          <label>Ingrese su color favorito </label>
          <input
            type="text"
            value={setColor.nombre}
            onChange={(event) =>
              setColor({ ...color, nombre: event.target.value })
            }
          />
        </div>
        <br />
        <button className="boton" onClick={handleSubmit}>
          Enviar
        </button>
      </div>

      {show && (
          <Card usuarioNombre={usuario.nombre} colorFavorito={color.nombre}/>
      )}
      {error && (
        <h5 style={{ color: "red" }}>
          
          Error en los datos. Corroborar que el nombre sea de 3 o mas
          caracteres y que no comience con un espacio adelante, y el color de 6
          o mas caracteres
        </h5>
      )}
    </>
  );
}

export default App
