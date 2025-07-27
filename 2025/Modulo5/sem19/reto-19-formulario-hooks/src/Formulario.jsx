import { useState, useEffect, useRef } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  useEffect(() => {
    if (password || confirmPassword) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        setMensaje("❌ Las contraseñas no coinciden.");
      } else {
        setMensaje("");
      }
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !apellido.trim() || !email.trim()) {
      setMensaje("❌ Nombre, apellido y correo son obligatorios.");
      return;
    }

    const emailValido = /\S+@\S+\.\S+/.test(email);
    if (!emailValido) {
      setMensaje("❌ Formato de correo inválido.");
      return;
    }

    if (password || confirmPassword) {
      if (password !== confirmPassword) {
        setMensaje("❌ Las contraseñas no coinciden.");
        return;
      }
    }

    setMensaje("✅ Formulario enviado correctamente.");
    // Aquí podrías limpiar el formulario si quieres
    // setNombre(""); setApellido(""); setEmail(""); setPassword(""); setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre (obligatorio)</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>

      <div>
        <label>Apellido (obligatorio)</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>

      <div>
        <label>Email (obligatorio)</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Contraseña (opcional)</label>
        <input
          type="password"
          ref={passwordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <label>Confirmar contraseña (opcional)</label>
        <input
          type="password"
          ref={confirmPasswordRef}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button type="submit">Enviar</button>

      {mensaje && <p>{mensaje}</p>}
    </form>
  );
}

export default Formulario;