import React, {useReducer} from 'react'

import GuitarContext from './GuitarContext'
import GuitarReducer from './GuitarReducer'

const GuitarState = (props) => {
    // 1. ESTADO INICIAL
    const initialState = {
        guitars: [
            { 
                id: 0,
                nombre: "Blaze MGR",
                precio: 2619
            }
        ]
    }
    // 2. DISPATCHING Y REDUCERS 
    const [globalState, dispatch] = useReducer(GuitarReducer, initialState)
    // 3. FUNCIONES 
    // NOS VAN A AYUDAR A CAPTURAR LOS EVENTOS DE LOS COMPONENTES
    // 4. RETORNO DE ESTADO GLOBAL
    return (
        <GuitarContext.Provider
            value={{
                guitars: globalState.guitars
            }}>
            { props.children }            
        </GuitarContext.Provider>
    )
}

export default GuitarState