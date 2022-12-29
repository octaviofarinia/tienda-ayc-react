import React from 'react'
import '../index.css'

const ProfileWidget = () => {
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a>Perfil</a>
                </li>
                <li>
                    <a>Configuración</a>
                </li>
                <li>
                    <a>Salir</a>
                </li>
            </ul>
        </div>
    )
}

export default ProfileWidget