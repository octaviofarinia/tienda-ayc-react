import React from 'react'
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting, products }) => {
    return (
        <div className="container flex flex-col mx-auto px-4">
            <h1 className="text-xl font-bold text-center mt-5">{greeting}</h1>
            <div className="grid grid-cols-1 gap-8 justify-items-center md:grid-cols-2 lg:grid-cols-3 mt-5">
                {products.map(producto =>
                    <ProductCard
                        key={producto.id}
                        title={producto.title}
                        description={producto.description}
                        image={producto.image} />
                )}
            </div>
        </div>
    )
}

export default ItemListContainer