import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { db } from '../db/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [products, setProducts] = useState([]);
  const productsCollectionsRef = collection(db, 'products');

  const getProducts = () => {
    getDocs(productsCollectionsRef)
      .then((querySnapshot) => {
        const docs = querySnapshot.docs.map((doc) => doc.data());
        setProducts(docs);
      })
      .catch((e) => console.err(e));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
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
      </Routes>
    </div>
  );
}

export default App;
