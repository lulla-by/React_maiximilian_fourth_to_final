import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "first", description: "first book" },
  { id: "p2", price: 5, title: "second", description: "second book" },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => {
          return <ProductItem
          id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />;
        })}
      </ul>
    </section>
  );
};

export default Products;
