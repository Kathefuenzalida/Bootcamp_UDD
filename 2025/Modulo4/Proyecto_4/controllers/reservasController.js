let reservas = [];
let idActual = 1;

exports.crearReserva = (req, res) => {
  const nueva = { id: idActual++, ...req.body };
  reservas.push(nueva);
  res.status(201).json(nueva);
};

exports.obtenerReservas = (req, res) => {
  const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estado, num_huespedes } = req.query;

  let filtradas = [...reservas];

  if (hotel) {
    filtradas = filtradas.filter(r => r.hotel.toLowerCase() === hotel.toLowerCase());
  }

  if (fecha_inicio && fecha_fin) {
    filtradas = filtradas.filter(r => r.fecha >= fecha_inicio && r.fecha <= fecha_fin);
  }

  if (tipo_habitacion) {
    filtradas = filtradas.filter(r => r.tipo_habitacion.toLowerCase() === tipo_habitacion);
  }

  if (estado) {
    filtradas = filtradas.filter(r => r.estado.toLowerCase() === estado);
  }

  if (num_huespedes) {
    filtradas = filtradas.filter(r => parseInt(r.num_huespedes) === parseInt(num_huespedes));
  }

  res.json(filtradas);
};

exports.obtenerReservaPorId = (req, res) => {
  const reserva = reservas.find(r => r.id === parseInt(req.params.id));
  if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
  res.json(reserva);
};

exports.actualizarReserva = (req, res) => {
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  reservas[index] = { ...reservas[index], ...req.body };
  res.json(reservas[index]);
};

exports.eliminarReserva = (req, res) => {
  const index = reservas.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });

  const eliminada = reservas.splice(index, 1);
  res.json({ mensaje: 'Reserva eliminada', eliminada });
};
