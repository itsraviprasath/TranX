const mongoose = require("mongoose"); // import mongoose
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }); // connect to db
    console.log(`MongoDB connected: ${conn.connection.host}`); // log connection
  } catch (error) {
    console.log(error); // log error
    process.exit(1); // exit with failure
  }
};

module.exports = connectDb; // export db connection
