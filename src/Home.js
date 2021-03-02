import "./Home.css";
import Product from "./Product";
import useProdcts from "./useProducts";

const Home = () => {
  const { productList } = useProdcts();
  console.log(productList);
  return (
    <>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://9to5toys.com/wp-content/uploads/sites/5/2020/03/amazon-prime-video-cinema.jpg?quality=82&strip=all"
            alt=""
          />
          <div className="home__productrows">
            {productList &&
              productList.map((value, index) => (
                <div className="home__row">
                  <Product
                    id={value.sku}
                    name={value.albumTitle}
                    image={value.image}
                    description={value.longDescription}
                    key={value.sku}
                    regularPrice={value.regularPrice}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
