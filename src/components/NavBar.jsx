import { useState } from 'react'
import '../index.css'
import CartWidget from './CartWidget'
import ProfileWidget from './ProfileWidget'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-none">
                <a className="btn btn-ghost normal-case text-xl" href='/'>Agendas y Cuadernos</a>
            </div>
            <div className="flex-1 justify-center">
                <a className="btn btn-ghost normal-case text-lg">Cuadernos</a>
                <a className="btn btn-ghost normal-case text-lg">Agendas</a>
                <a className="btn btn-ghost normal-case text-lg">Especiales</a>
            </div>
            <div className="flex-none">
                <CartWidget cantItems={1} subtotal={100} />
                <ProfileWidget />
            </div>
        </div>
    )
}

export default NavBar