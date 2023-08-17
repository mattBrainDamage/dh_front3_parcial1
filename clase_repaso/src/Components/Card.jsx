
import './Card.css'; 

const Card = ({ usuarioNombre, colorFavorito }) => {
  return (
    <div className="card-container">
      <h4 className="card-title">El color favorito de {usuarioNombre} es {colorFavorito}</h4>
    </div>
  );
};

export default Card;