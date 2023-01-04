import './index.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import products from '../products.json';

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido!'} products={products} />
    </div>
  );
}

export default App;
