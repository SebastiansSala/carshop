import axios from "axios";
import { CarsType } from "@/types";

export const signupRequest = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    console.log(username);
    console.log(email);
    console.log(password);
    const response = await axios.post("http://localhost:3100/auth/signup", {
      username,
      email,
      password,
    });
  } catch (e) {
    console.error(e);
  }
};

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:3100/auth/login", {
      email,
      password,
    });
    return await response.data;
  } catch (e) {
    console.error(e);
  }
};

const getAllCars = async () => {
  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=Corolla",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "4aaf57147fmsh2f6d656deea7190p191480jsn1a00115a4a22",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
    return response.json();;
  } catch (error) {
    console.error(error);
  }
}

export const getCars = async () => {
  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "4aaf57147fmsh2f6d656deea7190p191480jsn1a00115a4a22",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
      }
    );
    return response.json();;
  } catch (error) {
    console.error(error);
  }
};
