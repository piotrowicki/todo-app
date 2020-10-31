import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tasks");
  }
}

export default new TutorialDataService();
