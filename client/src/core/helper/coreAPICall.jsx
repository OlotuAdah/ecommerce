import axios from "axios";

export const getProducts = async () => {
  try {
    const result = await axios.get("product");
    console.log(result.data);
    // return result.data;
    return result.data.map((obj) => setSomeMissingKeys(obj)); // remove when missing values from api are corrected at backend
  } catch (error) {
    return [{ error: true }];
  }
};

const setSomeMissingKeys = (object) => {
  const rate = getRandomArbitrary(3, 5);
  return Object.defineProperties(object, {
    rate: { value: rate },
    reviews: { value: 25 },
  });
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
