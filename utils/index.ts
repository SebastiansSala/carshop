import axios from "axios";

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
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getCars = async (model: string) => {
  try {
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8053962894msh160c716e76101ddp1501b4jsnf755d759827f",
          "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
        },
        next: {revalidate: 1000}
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
