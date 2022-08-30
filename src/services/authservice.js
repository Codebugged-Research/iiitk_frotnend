import axios from "axios";

const API_URL = "https://admin.lidaverse.com";
const signup = (email, password) => {
    console.log(email, password);
    return axios
        .post(`${API_URL}/signup`, {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("auth", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const login = (email, password) => {
    console.log(email, password);
    return axios
        .post(`${API_URL}/auth/login`, {
            email,
            password,
        })
        .then((response) => {
            console.log("Login response", response);
            if (response.data) {
                response.data.logintime = new Date();
                localStorage.setItem("auth", JSON.stringify(response.data));
                axios.get(`${API_URL}/users?filter[email][_eq]=${email}`, { Authorization: `Bearer ${response.data.access_token}` }).then((response2) => {
                    console.log("User response", response2);
                    if (response2.data) {
                        localStorage.setItem("user", JSON.stringify(response2.data));
                    }
                });
            }
            return response.data;
        });
};

const refreshToken = () => {
    axios.post(`${API_URL}/auth/refresh`, {
        "refresh_token": JSON.parse(localStorage.getItem("auth")).refresh_token,
    }).then((response) => {
        console.log("Refresh response", response);
        if (response.data) {
            response.data.logintime = new Date();
            localStorage.setItem("auth", JSON.stringify(response.data));
            return response.data;
        }
        return false;
    });
}

const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
};

const getCurrentUser = () =>
    JSON.parse(localStorage.getItem("user"));
;

const authService = {
    signup,
    login,
    logout,
    refreshToken,
    getCurrentUser,
};

export default authService;