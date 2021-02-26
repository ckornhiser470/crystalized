import http from "../http-common";

class CrystalDataServices {
  getAll() {
    return http.get("/crystals");
  }
}
export default new CrystalDataServices();
