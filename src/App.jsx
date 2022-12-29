import './index.css'
import products from "../products.json"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting={"Bienvenido!!"} products={products} />
        </div>
    )
}

export default App
