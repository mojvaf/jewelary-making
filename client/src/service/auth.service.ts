import axios from "axios";
import {LoginRequestBody, RegisterRequestBody, RegisterResponseBody} from "../models/auth";

export class AuthService {
    static login(body: LoginRequestBody) {
        return axios.post("/api/auth", body)
    }

    static register(body: RegisterRequestBody) {
        return axios.post<RegisterResponseBody>("/api/users", body)
    }

    static getProfile() {
        return axios.get("/api/users/getProfile", {
            headers: {
                "x-auth-token": localStorage.getItem("token")||""
            }
        })
    }
}
