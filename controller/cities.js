import citiesService from "../service/cities.js";

class CitiesContorller {
  async get(req, res, next) {
    try {
      const { limit, city } = req.query;
      const cities = await citiesService.get(limit, city);
      return res.json(cities);
    } catch (e) {
      next(e);
    }
  }
}
export default new CitiesContorller();
