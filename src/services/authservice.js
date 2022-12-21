import axios from "axios";

const API_URL = "https://cms.lidaverse.com";

const login = async (email, password) => {
  console.log(email, password);
  const response = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  console.log("Login response", response);

  if (response.data) {
    response.data.logintime = new Date();
    localStorage.setItem("auth", JSON.stringify(response.data));
    axios
      .get(`${API_URL}/users?filter[email][_eq]=${email}`, {
        Authorization: `Bearer ${response.data.access_token}`,
      })
      .then((response2) => {
        console.log("User response", response2);
        if (response2.data) {
          localStorage.setItem("user", JSON.stringify(response2.data.data[0]));
        }
      });
  }
  return response.data;
};

const refreshToken = () => {
  axios
    .post(`${API_URL}/auth/refresh`, {
      refresh_token: JSON.parse(localStorage.getItem("auth")).refresh_token,
    })
    .then((response) => {
      console.log("Refresh response", response);
      if (response.data) {
        response.data.logintime = new Date();
        localStorage.setItem("auth", JSON.stringify(response.data));
        return response.data;
      }
      return false;
    });
};

const logout = () => {
  localStorage.removeItem("auth");
  localStorage.removeItem("user");
  localStorage.removeItem("email");
  localStorage.removeItem("password");
};

const getCurrentUser =  async () => {
  const email = localStorage.getItem("email");
  await axios
    .get(`${API_URL}/users?filter[email][_eq]=${email}`, {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem("auth")).access_token
      }`,
    })
    .then((response2) => {
      if (response2.data.data) {
        localStorage.setItem("user", JSON.stringify(response2.data.data[0]));
      }
    });
};
const authService = {
  login,
  logout,
  refreshToken,
  getCurrentUser,
};

export default authService;
