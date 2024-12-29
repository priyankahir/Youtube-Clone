export const api_key = "AIzaSyDZa-NetvZ6eX1Aqa-GO1GuulpjnW7S2Kg";


//thius function are covert the view into million or etc..
export const value_conveter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
