import axios from "axios";
const API_URL = "https://admin.lidaverse.com/";
class AuthService {
    async login(username, password) {
        const response = await axios
            .post(API_URL + "auth/login", {
                username,
                password
            });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }
    async refreshToken() {
        const response = await axios.post(API_URL + "auth/refresh", {
            refresh_token: this.getCurrentUser().refresh_token
        });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }
    logout() {
        localStorage.removeItem("user");
    }
    register(username, email, password) {
        return axios.post(API_URL + "users", {
            username,
            email,
            password
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }
}
export default new AuthService();