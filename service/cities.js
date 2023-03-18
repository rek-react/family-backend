import { ApiError } from "../exeptions/error.js";
import CityModel from "../models/cities.js";

class CitiesService {
  async get(limit, city) {
    const cities = await CityModel.find({
      city: { $regex: city, $options: "i" },
    }).limit(limit);
    if (!cities) {
      throw ApiError.notFound("Города не найдены");
    }
    return cities;
  }
}
export default new CitiesService();
