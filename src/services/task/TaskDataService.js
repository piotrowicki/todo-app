import http from "../../http-common";
import { authHeader } from '../../components/auth/auth-header';

class TaskDataService {
  getAll() {
    return http.get("/tasks", { headers: authHeader() });
  }
  getById(id) {
    return http.get(`/tasks/${id}`, { headers: authHeader() });
  }
  update(id, data) {
    return http.put(`/tasks/${id}`, data, { headers: authHeader() });
  }
  save(data) {
    return http.post(`/tasks/new`, data, { headers: authHeader() });
  }
}

export default new TaskDataService();
