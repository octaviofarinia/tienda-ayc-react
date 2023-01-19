import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import products from '../products.json';
import { Navigate, Route, Routes } from 'react-router-dom';
import { navigation } from './components/NavBar/NavBar';

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
        {navigation.map((navItem) => (
          <Route
            key={navItem.name}
            path={navItem.href}
            element={
              <ItemListContainer
                greeting={navItem.greeting}
                products={products.filter((product) => product.category === navItem.name)}
              />
            }
          />
        ))}
        ;
      </Routes>
    </div>
  );
}

export default App;
