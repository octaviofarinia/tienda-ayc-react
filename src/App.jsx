import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import products from '../products.json';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
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
          path="/item/:itemId*"
          element={<ItemDetailContainer products={products} />}
        />
      </Routes>
    </div>
  );
}

export default App;
