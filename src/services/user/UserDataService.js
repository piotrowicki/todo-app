import http from "../../http-common";

class UserDataService {
    save(data) {
        return http.post(`/register`, data);
    }
    login(data) {
        return http.post(`/login`, data);
    }
}

export default new UserDataService();