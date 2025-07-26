export const MyComponent = ({ name, lastname, age, adult, hobbies, address, job }) => {
  return (
    <div>
      <p>
        Nombre: {name} {lastname}
      </p>
      <p>Edad: {age}</p>
      <p>Mayor de edad: {adult ? "si" : "no"}</p>
      <p>Hobbies: {hobbies}</p>
      Direccion
      <p>
        Calle: {address.street} {address.number}
      </p>
      <p>Ciudad: {address.city}</p>
      <p>Profesion: {job}</p>
    </div>
  );
};
