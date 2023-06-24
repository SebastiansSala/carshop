export type UserType = {
  id: string;
  email: string;
  username: string;
  password: string;
};

export type CarsType = {
  _id: string;
  brand: string;
  model: string;
  year: number;
  color: string;
  price: number;
  img: string;
};

export type ButtonPropsType = {
  text: string;
  handleClick? : () => void; 
};

export type AnchorPropsType = {
  text: string;
  route: string;
  handleClick? : () => void; 
};

export type ServicePropsType = {
  img: string;
  title: string;
  desc: string;
};

export type ViewType = {
  [key: string]: boolean;
  bmw: boolean;
  honda: boolean;
  ford: boolean;
  mercedes: boolean;
  chevrolet: boolean;
  toyota: boolean;
};

export type CollectionNavbarBrandType = {
  text: string;
  handleView: (brand: string) => void;
  view: ViewType;
};
