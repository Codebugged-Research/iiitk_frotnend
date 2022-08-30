import { Link, useNavigate } from "react-router-dom";

export default function authHeader() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("auth"));

    if (user && user.access_token && (user.logintime - new Date()) < user.expires_in) {
        console.log("User token", user);
        return { Authorization: 'Bearer ' + user.access_token };
    } else {
        if (refreshToken()) {
            const user2 = JSON.parse(localStorage.getItem("auth"));
            console.log("User2", user2);
            return { Authorization: 'Bearer ' + user2.access_token };
        } else {
            navigate("/home");
            window.location.reload();
            return {};
        }
    }
}
