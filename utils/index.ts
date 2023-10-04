export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "14ec8ea27amsh835318045b84025p12a925jsn3db2ccb6d312",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();

  return result;
}
