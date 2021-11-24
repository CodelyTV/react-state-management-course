import { Product } from "../product";

const ProductItem = ({ data, onAddToCartClicked }: {data: Product, onAddToCartClicked: (product: Product) => void}) => (
  <div style={{ marginBottom: 20 }}>
    <div>
      {data.title} - {data.price} €
    </div>

    <button onClick={() => onAddToCartClicked(data)}>Add to cart</button>
  </div>
);

const ProductList = ({ products, onAddToCartClicked }: {products: Product[], onAddToCartClicked: (product: Product) => void}) => {
  
  return (
    <div>
      <h3>Products</h3>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          data={product}
          onAddToCartClicked={(data) => {
            onAddToCartClicked(data);
          }}
        />
      ))}
    </div>
  );
};

export default ProductList;
