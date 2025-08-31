const mongoose = require("mongoose")

const connectDB = async () => {
    try {
	    // conexión a base de datos
        await mongoose.connect(process.env.MONGODB_URI, {
	        useNewUrlParser: true,
            useUnifiedTopology: true
        })
	    console.log("connected to the database")
    } catch (error) {
        console.log(error)
        process.exit(1) // detiene la app por completo
    }
}
module.exports = connectDB