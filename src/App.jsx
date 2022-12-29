import { Button, Container, Flex, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react'
import products from "../products.json"
import NavBar from './components/NavBar';
import ProductCard from './components/ProductCard';

function App() {
    const [productos, setProductos] = useState([]);

    console.log(productos)

    return (
        <Container width="100%" maxWidth="100vw">
            <NavBar className="navbar" />
        </Container>
    )

    // return (
    //     <div>
    //         <Button colorScheme="green" onClick={() => setProductos(products)}>
    //             Mostrar Productos
    //         </Button>
    //         <Button colorScheme="green" onClick={() => setProductos([])}>
    //             Ocultar Productos
    //         </Button>
    //         <SimpleGrid mt="5" columns={[2, null, 3]} spacing='40px'>
    //             {productos.map((producto) => {
    //                 return (
    //                     <ProductCard
    //                         key={producto.id}
    //                         image={producto.image}
    //                         title={producto.title}
    //                         description={producto.description}
    //                         price={producto.price}
    //                     />
    //                 )
    //             })}
    //         </SimpleGrid>
    //     </ div >
    // )
}

export default App
