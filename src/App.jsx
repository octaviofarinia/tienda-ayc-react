import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { db } from '../db/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import CheckoutForm from './components/CheckoutForm/CheckoutForm';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const CartContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ products: [] });
  const productsCollectionsRef = collection(db, 'products');

  const getProducts = async () => {
    // REQUEST TO FIREBASE
    const querySnapshot = await getDocs(productsCollectionsRef);
    const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log('se realizo una llamada a firebase para obtener los productos');
    // REQUEST TO JSON-SERVER
    // const docs = await axios
    //   .get('http://localhost:3001/api/noticias')
    //   .then((res) => res.data);

    setProducts(docs);
  };

  const getCart = async () => {
    // const testCart = await axios
    //   .get('http://localhost:3001/api/noticias/cart')
    //   .then((res) => res.data);
    // setCart(testCart);
    setCart({
      userID: 1,
      products: [],
      total: 0
    });
  };

  useEffect(() => {
    getProducts();
    getCart();
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="h-screen bg-gray-900">
        <NavBar />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={<ItemListContainer greeting={'Bienvenido!'} products={products} />}
          />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer products={products} />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer products={products} />}
          />
          <Route path="/checkout" element={<CheckoutForm />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
}

export default App;
