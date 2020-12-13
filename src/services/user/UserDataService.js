import http from "../../http-common";

class UserDataService {
    save(data) {
        return http.post(`/register`, data);
    }
}

export default new UserDataService();