import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="card glass w-full">
      <Link to={`/singleProduct/${product.id}`} className="mx-auto">
        <img className="w-48 lg:w-40" src={product.thumbnail} alt="car!" />
      </Link>
      <div className="card-body w-full">
        <h2 className="card-title text-center mb-5 font-bold font-serif h-5">
          {product.title}
        </h2>
        <p className="line-clamp-1 text-center mb-5">{product.description} </p>
        <div className="card-actions justify-center ">
          <Link
            to={`/singleProduct/${product.id}`}
            type="button"
            className="btn btn-block tracking-[2px] btn-info font-serif font-semibold"
          >
            Buy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
