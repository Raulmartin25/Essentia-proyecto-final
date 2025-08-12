import { Link } from "react-router-dom";
import "./Hero.css";
import heroFashion from "../assets/hero-fashion.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="bi bi-stars" id="pill">
            <span>Nueva colección</span>
          </span>

          <h1 className="hero__title">
            Elegancia <em>atemporal</em> para cada momento
          </h1>

          <p className="hero__subtitle">
            Descubre piezas cuidadosamente seleccionadas que definen tu estilo
            personal con sofisticación y confort.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn--primary">
              <i className="bi bi-bag"></i>
              Explorar colección
            </Link>
            <Link to="/lookbook" className="btn btn--ghost">
              Ver lookbook
            </Link>
          </div>

          <ul className="hero__features">
            <li>
              <i className="bi bi-truck"></i>
              <div>
                <strong>Envío gratis</strong>
                <span>Compras +$80k</span>
              </div>
            </li>
            <li>
              <i className="bi bi-shield-check"></i>
              <div>
                <strong>Devoluciones</strong>
                <span>30 días</span>
              </div>
            </li>
            <li>
              <i className="bi bi-star"></i>
              <div>
                <strong>Calidad</strong>
                <span>Premium</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__image-wrap">
            <img
              src={heroFashion}
              alt="Nueva colección de prendas en tonos neutros"
              className="hero__image"
            />
            <div className="badge badge--discount">
              <strong>30%</strong>
              <span>Descuento</span>
            </div>
            <div className="badge badge--tag">
              <strong>2025</strong>
              <span>Nueva colección</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
