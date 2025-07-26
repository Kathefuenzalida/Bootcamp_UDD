import { useState, useEffect } from "react"

export const FetchApi = () => {
    const [users, setUsers] = useState(null);
    const [update, setUpdate] = useState();
    
    useEffect(() => {
        console.log('se ejecuta el useEffect', update);
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(jsonResponse => {
                setUsers(jsonResponse.results)
            })
    }, [update])

    return (
        <div>
            <button onClick={() => setUpdate(!update)}>Actualizar usuario</button>
            <h3>USUARIO:</h3>
            {
                users ? (
                   <ul>
                    {
                        users.map(user => (
                            <li key={user.login.uuid}>
                                {user.name.title} {user.name.first} {user.name.last}
                                <p>{user.location.city}, {user.location.state}, {user.location.country}</p>
                            </li>
                        ))
                    }
                   </ul> 
                ) : (<p>Cargando datos...</p>)
            }
        </div>
    )
}