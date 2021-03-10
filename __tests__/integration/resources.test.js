require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../../src/app");

describe("Resources", () => {
  beforeAll(() => {
    return mongoose
      .connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Mongo Connected");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  test("It gets all challenges", async () => {
    const response = await request(app).get("/all");

    expect(response.status).toBe(200);
  });

  afterAll(() => {
    return mongoose.connection
      .close()
      .then(() => {
        console.log("Mongo disconnected");
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
