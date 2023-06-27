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
    const response = await axios.post("http://localhost:5000/users/signup", {
      username,
      email,
      password,
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await axios.post("http://localhost:5000/users/login", {
      email,
      password,
    });
    return response;
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
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};