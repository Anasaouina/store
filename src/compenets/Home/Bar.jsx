import './Bar.css'
function Bar() {
  return (
    <section id="bar">
      <div className="barinfo">
        <div className="holder">
          <i className="fa-solid fa-truck"></i>
          <p>livraison en moins de 24h</p>
          <strong>Agadir et régions** </strong>
        </div>
        <div className="holder">
          <i className="fa-solid fa-apple-whole"></i>
          <p>Quality </p>
          <strong>Produit Frais</strong>
        </div>
        <div className="holder">
          <i className="fa-solid fa-heart"></i>
          <p>Services</p>
          <strong>Satisfait ou Remplacé</strong>
        </div>
        <div className="holder">
          <i className="fa-solid fa-gift"></i>
          <p>Livraison gratuite à partir</p>
          <strong>200 dhs d'achat</strong>
        </div>
        <div className="holder">
          <i className="fa-solid fa-comment-dots"></i>
          <p>Contacter nous </p>
          <strong>+21206245163</strong>
        </div>
      </div>
    </section>
  );
}
export default Bar;
