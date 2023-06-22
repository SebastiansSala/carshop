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

export const getAllCars = async () => {
  try {
    const response = await fetch(
      "http://localhost:5000/cars",
      {
        method: "GET",
        next: {revalidate: 60}
      }
    );
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const getCarsByBrand = async (brand: string) => {
  try {
    const response = await fetch(
      `http://localhost:5000/cars/${brand}`,
      {
        method: "GET",
        next: {revalidate: 60}
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};