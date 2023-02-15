import express from "express";
const app = express();

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

  //   const cars = await Car.insertMany([
  //     {
  //       brand: "Audi",
  //       model: " A5",
  //       color: "Grey",
  //       hp: 261,
  //       img: "https://m.atcdn.co.uk/vms/media/9e2165478c6f437b8f1055c7e1f88308.jpg",
  //     },
  //     {
  //       brand: "Audi",
  //       model: "E-Tron",
  //       color: "Blue",
  //       hp: 355,
  //       img: "https://images.dealer.com/ddc/vehicles/2023/Audi/e-tron%20S/SUV/trim_Premium_Plus_053ee9/color/Navarra%20Blue%20Metallic-2D2D-10%2C33%2C127-640-en_US.jpg?impolicy=resize&w=414",
  //     },
  //     {
  //       brand: "Audi",
  //       model: "Q3",
  //       color: "Blue",
  //       hp: 184,
  //       img: "https://images.dealer.com/ddc/vehicles/2023/Audi/Q3/SUV/trim_45_S_line_Premium_4c81a0/color/Turbo%20Blue-N6N6-35%2C133%2C202-640-en_US.jpg?impolicy=resize&w=640",
  //     },
  //     {
  //       brand: "Audi",
  //       model: "Q5",
  //       color: "Black",
  //       hp: 201,
  //       img: "https://dealer-content.s3.amazonaws.com/images/models/audi/2021/q5/brilliant-black.png",
  //     },
  //     {
  //       brand: "Audi",
  //       model: "R8",
  //       color: "Yellow",
  //       hp: 562,
  //       img: "https://images.netdirector.co.uk/gforces-auto/image/upload/w_372,h_248,q_auto,c_fill,f_auto,fl_lossy/auto-client/4c9645380bfbe615d21fbfb4b6119a3e/screenshot_2020_05_11_at_10.59.55.png",
  //     },
  //     {
  //       brand: "Audi",
  //       model: "RS6",
  //       color: "Grey",
  //       hp: 591,
  //       img: "https://i.pinimg.com/originals/86/9b/5b/869b5b7a3545c9110deb48ec11785e45.png",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "i8",
  //       color: "White",
  //       hp: 369,
  //       img: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC90BMC681A021001.jpg",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "M4",
  //       color: "Yellow",
  //       hp: 503,
  //       img: "https://prod.cosy.bmw.cloud/bmvis/cosySec?COSY-EU-100-2545J3qAHyFnz5cRoHSWRzMESVDbIHyJR5BoJirjGpuaprQbzAQd82q0zJXnTqoQdRH7RzcYi967qmMb3Kq0zKBGjqoQedorDNcYiJjJl382b33NcYitH%25g4Mb3NZZcYiwJ6GoExmoGl3ixt93l38F5MIlBgv5dIl38lbW7%25Wu3fdqogqaR24l3ilUQ3GcRScH86oMbnMdoPayJGy5BubrQ%25r9Y33W8zWuEJQqogqaFnyl3ilUjvUcRScHz09MbnMdg7iyJGy5iKErQ%25r9SMBW8zWunfGqogqaDJNl3ilUCGRcRScHbQ9MbnMdJmSyJGy5Q0BrQ%25r98SGW8zWuonNqogqa3sFl3ilUUJzcRScHHJ9MbnMddVHyJRTa4QSN9q0zY3btqoQkyFnJ5muarQbpJg1sW7%25iobrQbAcYirQGd9uyJR9lBguC",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "M8",
  //       color: "Blue",
  //       hp: 617,
  //       img: "https://images.dealer.com/ddc/vehicles/2023/BMW/M8%20Gran%20Coupe/Sedan/still/front-left/front-left-640-en_US.jpg",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "M8",
  //       color: "White",
  //       hp: 617,
  //       img: "https://media.adtorqueedge.com/new-cars/bmw-my/m8-coupe/variant/m8.png",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "X4",
  //       color: "Yellow",
  //       hp: 355,
  //       img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/a1329df2-0a6c-43a1-8557-cb806aa21373/880a641a-1c06-456a-a83b-da5bf2043eb6.png",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "X6",
  //       color: "White",
  //       hp: 375,
  //       img: "https://www.pngitem.com/pimgs/m/516-5162042_2019-bmw-x6-m-bmw-x5-2018-white.png",
  //     },
  //     {
  //       brand: "BMW",
  //       model: "Z4",
  //       color: "Blue",
  //       hp: 255,
  //       img: "https://www.pngitem.com/pimgs/m/658-6586784_2020-bmw-z4-misano-blue-hd-png-download.png",
  //     },
  //     {
  //       brand: "Koenigsegg",
  //       model: "Agera",
  //       color: "White",
  //       hp: 1160,
  //       img: "https://www.autoguide.com/auto-news/wp-content/uploads/2012/10/koenigsegg-agera-r.jpg",
  //     },
  //     {
  //       brand: "Tesla",
  //       model: "Model 3",
  //       color: "White",
  //       hp: 221,
  //       img: "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/5d67d072-4532-43a4-a6aa-f0c48bd50470/a8645129-31a8-440c-91fe-37aa3b9daaae.png",
  //     },
  //     {
  //       brand: "VolksWagen",
  //       model: "Arteon",
  //       color: "Yellow",
  //       hp: 300,
  //       img: "https://w7.pngwing.com/pngs/536/911/png-transparent-volkswagen-crafter-car-volkswagen-arteon-2-tdi-150-volkswagen-polo-volkswagen-compact-car-sedan-car.png",
  //     },
  //   ]);
}

main();
