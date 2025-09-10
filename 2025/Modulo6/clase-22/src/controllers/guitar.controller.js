const Guitar = require('../models/Guitar');

// Obtener todas las guitarras
const getAllGuitars = async (req, res) => {
  try {
    const guitars = await Guitar.find();
    res.status(200).json({
      message: "Lista de guitarras obtenida correctamente ✅",
      guitars
    });
  } catch (error) {
    res.status(500).json({ message: "Error al obtener guitarras", error });
  }
};

// Crear una nueva guitarra
const createGuitar = async (req, res) => {
  try {
    const { nombre, precio } = req.body;

    const guitar = new Guitar({ name: nombre, price: precio });
    await guitar.save();

    res.status(201).json({
      message: "Guitarra creada correctamente ✅",
      guitarra: guitar
    });
  } catch (error) {
    res.status(500).json({ message: "Error al crear la guitarra", error });
  }
};

// Actualizar una guitarra por ID
const updateGuitarById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, precio } = req.body;

    const updatedGuitar = await Guitar.findByIdAndUpdate(
      id,
      { name: nombre, price: precio },
      { new: true } // retorna el objeto actualizado
    );

    if (!updatedGuitar) {
      return res.status(404).json({ message: "Guitarra no encontrada ❌" });
    }

    res.status(200).json({
      message: "Guitarra actualizada correctamente ✅",
      guitarra: updatedGuitar
    });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la guitarra", error });
  }
};

// Eliminar una guitarra por ID
const deleteGuitarById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGuitar = await Guitar.findByIdAndDelete(id);

    if (!deletedGuitar) {
      return res.status(404).json({ message: "Guitarra no encontrada ❌" });
    }

    res.status(200).json({
      message: "Guitarra eliminada correctamente ✅",
      guitarra: deletedGuitar
    });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la guitarra", error });
  }
};

module.exports = {
  getAllGuitars,
  createGuitar,
  updateGuitarById,
  deleteGuitarById
};
