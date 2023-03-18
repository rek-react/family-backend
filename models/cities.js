import { model, Schema } from "mongoose";

const CityModel = new Schema({
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
});

export default model("City", CityModel);
