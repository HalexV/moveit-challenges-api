const app = require("./app");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) console.log(error);
    else console.log("Mongo Connected");
  }
);

app.listen(process.env.PORT || 3000, () => {
  if (process.env.PORT) {
    console.log(`Server running on port: ${process.env.PORT}`);
  } else {
    console.log(`Server running on port: 3000`);
  }
});
