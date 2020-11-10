import http from "../http-common";

class TaskDataService {
  getAll() {
    return http.get("/tasks");
  }
  getById(id) {
    return http.get(`/tasks/${id}`);
  }
}

export default new TaskDataService();
