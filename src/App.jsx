import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import products from '../products.json';
import { Navigate, Route, Routes } from 'react-router-dom';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={<ItemListContainer greeting={'Bienvenido!'} products={products} />}
        />
        <Route
          path="/category/:name"
          element={<ItemListContainer products={products} />}
        />
        ;
      </Routes>
    </div>
  );
}

export default App;
