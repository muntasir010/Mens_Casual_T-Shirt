import PropTypes from 'prop-types';
const Product = ({ product, handleAddToCart }) => {
    console.log(handleAddToCart)
    return (
        <div className="shadow-2xl p-4 space-y-3 rounded-2xl">
            <img className="w-52 h-60 flex mx-auto mt-6" src={product.image} alt="" />
            <h1 className="text-3xl font-semibold text-center">{product.title.slice(0, 11)}</h1>
            <p>{product.description.slice(0, 149)}...</p>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-medium">${product.price}</h3>
                <button onClick={() => handleAddToCart(product)} className="border-2 p-2 rounded-xl font-bold text-orange-600 bg-blue-100">Add to cart</button>
            </div>
        </div>
    );
};

Product.propTypes ={
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Product;