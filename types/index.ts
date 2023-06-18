export type UserType = {
  id: string;
  email: string;
  username: string;
  password: string;
};

export type CarsType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type ButtonPropsType = {
  text: string;
  route: string;
};

export type ServicePropsType = {
  img: string;
  title: string;
  desc: string;
};

export type ViewType = {
  [key: string]: boolean;
  bmw: boolean;
  ferrari: boolean;
  ford: boolean;
  porsche: boolean;
  toyota: boolean;
  camry: boolean;
};

export type CollectionNavbarBrandType = {
  text: string;
  handleView: (brand: string) => void;
  view: ViewType;
};
