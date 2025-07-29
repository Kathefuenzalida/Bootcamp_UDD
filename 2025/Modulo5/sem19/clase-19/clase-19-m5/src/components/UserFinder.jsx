import { Avatar, Button, Paper, TextField, Typography } from '@mui/material';
import { useState, useRef, useEffect } from "react"

const UserFinder = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const fetchUsers = async () => {
        try {
            const username = inputRef.current.value;
            console.log(`username`, username);
            const response = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}${username}`);
            if (!response.ok) {
                throw new Error('Usuario no encontrado');
            }   
            const userData = await response.json();
            console.log(`userData`, userData);
            setUser(userData);
            setError(null);
        } catch (error) {
            setError(error.message);
            setUser(null);
        }
    }
  return (
    <Paper 
    elevation={3}
    sx={{ 
        maxWidth: 400,
        margin: 'auto',
        padding: 2,
        textAlign: 'center',
        marginTop: 2,
        }}
    >
        <Typography>Buscar usuario de Github</Typography>
        <TextField 
            inputRef={inputRef}
            fullWidth
            variant="outlined"
            placeholder="Ingrese nombre de usuario"
            margin="normal"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    fetchUsers();
                }
                }}
            />
        <Button
            variant="contained"
            color="primary"
            onClick={fetchUsers}
            sx ={{ marginTop: 2 }}
        >
            Buscar
        </Button>   
          {error && (
            <Typography variant="body1" color="error">{error}</Typography>)}
            {
            user && ( 
                <div>
                <Avatar src={user.avatar_url}
                    alt="Avatar de usuario"
                    sx={{ 
                        width: 10 * 2,
                        height: 10 * 2,
                        margin: "0 auto",
                        marginTop: 2,
                        marginBottom: 2,
                    }}  
                />
                <Typography variant="body1" gutterBottom>Nombre:{user.name}</Typography>
                <Typography variant="body1">Seguidores:{user.followers}</Typography>
                <Typography variant="body1"> Repositorios publicos: {user.public_repos}</Typography>
                </div>
            )}
    </Paper>
  );
};

export default UserFinder