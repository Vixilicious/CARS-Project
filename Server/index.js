import express from "express";
const app = express();
import cors from "cors";
app.use(cors({ origin: "*" }));
app.use(express.json());
import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  color: String,
  hp: Number,
  img: String,
});

const Car = mongoose.model("cars", carSchema);

async function main() {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    "mongodb+srv://vixi:vixi@cluster0.plxlpeb.mongodb.net/?retryWrites=true&w=majority"
  );

  app.get("/cars", async (req, res) => {
    const brand = req.query.brand;
    const model = req.query.model;
    const color = req.query.color;
    const hp = req.query.hp;
    const img = req.query.img;
    const cars = await Car.find(
      brand
        ? { brand: brand }
        : model
        ? { model: model }
        : color
        ? { color: color }
        : hp
        ? { hp: hp }
        : img
        ? { img: img }
        : {}
    );
    res.send(cars);
  });
  app.listen(5000);
}

main();
