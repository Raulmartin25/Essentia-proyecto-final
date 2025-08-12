import { useState, useEffect } from "react";
import "./ProductsList.css";
import axios from "axios";
import useCart from "../context/hooks/useCart";
import SearchBar from "../components/SearchBar";

export default function ProductsLists() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://dummyjson.com/products/category/womens-dresses"
        );
        setProducts(res.data.products);
      } catch {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <main className="container" style={{ padding: "1rem 0" }}>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="product-grid">
        {filteredProducts.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image">
              <img
                src={p.images?.[0] ?? "default-image.jpg"}
                alt={p.title}
                className="card-img"
              />
              <div className="overlay">
                <span className="discount">-{p.discountPercentage || 0}%</span>
                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    addToCart({
                      id: p.id,
                      title: p.title,
                      price: p.price,
                      image: p.images?.[0] ?? "default-image.jpg",
                    })
                  }
                >
                  <i className="bi bi-cart"></i> Agregar al carrito
                </button>
              </div>
            </div>

            <div className="product-info">
              <div className="category">{p.category}</div>
              <h5>{p.title}</h5>
              <div className="rating">
                ⭐ {p.rating} ({Array.isArray(p.reviews) ? p.reviews.length : 0}{" "}
                reviews)
              </div>
              <div className="price">
                <span className="new-price">${p.price}</span>
                <span className="old-price">
                  $
                  {(
                    p.price +
                    p.price * ((p.discountPercentage || 0) / 100)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
