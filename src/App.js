import React from 'react';
import Header from "./components/Header";
import Product from "./components/Product";
import Drawer from "./components/Drawer"

function App() {
  console.log('test the new branch')
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://60dda7fc878c890017fa2a80.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json)=> {
        setItems(json);
      });
  },[]);


  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose = {() => setCartOpened(false)} />}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero-content__title">Organic food store</h1>
            <div className="hero-content__text">Current delivery lead times are between 5-7 working days</div>
            <a href="#" className="button-shop">Show now</a>
          </div>
        </div>
      </div>
      <main>
        <section className="section">
          <div className="container">
            <h2 className="section__title"><span>Our</span> products</h2>
            <div className="products">
              {items.map((obj) => (
                <Product name={obj.name} desc={obj.desc} size={obj.size} price={obj.price} imgUrl={obj.imgUrl} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
