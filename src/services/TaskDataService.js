import http from "../http-common";

class TaskDataService {
  getAll() {
    return http.get("/tasks");
  }
  getById(id) {
    return http.get(`/tasks/${id}`);
  }
  update(id, data) {
    return http.put(`/tasks/${id}`, data);
  }
}

export default new TaskDataService();
