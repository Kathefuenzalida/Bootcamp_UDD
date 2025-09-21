import React, {useContext} from 'react'
import GuitarContext from '../../contexts/guitars/GuitarContext'

export default function GuitarList() {
    // Obtenemos el contexto
    const ctx = useContext(GuitarContext)
    // Extraemos los datos a través de desestructuración de objetos.
    const { guitars } = ctx
    return (
        <div>
            Esta es la lista de guitarras
            {/* Mostramos los datos */}
            {
                guitars.map((e) => {
                    return (
                        <div key={e.id}>
                            <h1>{e.nombre}</h1>
                            <p>{e.precio}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}