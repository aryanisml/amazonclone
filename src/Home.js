import "./Home.css";
import Product from "./Product";
import useProdcts from "./useProducts";

const Home = () => {
  const { productList } = useProdcts();
  console.log(productList);
  return (
    <>
      <div className="home">
        <img
          className="home__image"
          src="https://9to5toys.com/wp-content/uploads/sites/5/2020/03/amazon-prime-video-cinema.jpg?quality=82&strip=all"
          alt=""
        />
{/* 
        <Product /> */}
      </div>
    </>
  );
};

export default Home;
