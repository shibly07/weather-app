import { API_KEY } from "@env";

const BASE_URL = "https://foreca-weather.p.rapidapi.com";

const query = {
  locationSearch: "location/search",
  currrentWeather: "current",
  hourlyForecast: "forecast/hourly",
  dailyForecast: "forecast/daily",
  nearbyWeather: "observation/latest",
};

const requestWeatherData = async (query, searchParams) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  const urlSearchParams = new URLSearchParams({ ...searchParams, lang: "en" });
  const url = `${BASE_URL}/${query}?${urlSearchParams}`;

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

const getCityId = (data) => {
  const { id, name, country, adminArea } = data;

  return { id, name, country, adminArea };
};

const getCityIdFromName = async (city) => {
  const response = await requestWeatherData(query.locationSearch + "/" + city);

  if (response.locations.length < 1) {
    throw new Error("Please search a valid name");
  }

  const data = await requestWeatherData(query.locationSearch + "/" + city);

  return data.locations;
};

const fetchHourlyWeather = async (id) => {
  const hourlyWeatherData = await requestWeatherData(
    query.hourlyForecast + "/" + id,
    {
      tempunit: "C",
      windunit: "MS",
      dataset: "full",
      periods: "12",
    }
  );

  return hourlyWeatherData.forecast;
};

const fetchDailyWeather = async (id) => {
  const dailyWeatherData = await requestWeatherData(
    query.dailyForecast + "/" + id,
    {
      tempunit: "C",
      windunit: "MS",
      dataset: "full",
      periods: "12",
    }
  );

  return dailyWeatherData.forecast;
};

const fetchNearbyWeather = async (id) => {
  const nearbyWeatherData = await requestWeatherData(
    query.nearbyWeather + "/" + id,
    {
      tempunit: "C",
      windunit: "MS",
      dataset: "full",
    }
  );

  return nearbyWeatherData.observations;
};

const fetchWeather = async ({ id, name, country }) => {
  const hourlyWeatherData = await fetchHourlyWeather(id);
  const dailyWeatherData = await fetchDailyWeather(id);
  const nearbyWeatherData = await fetchNearbyWeather(id);

  const settleAllPromise = Promise.allSettled([
    hourlyWeatherData,
    dailyWeatherData,
    nearbyWeatherData,
  ]).then((values) => {
    let arr = [];
    values.forEach((item) => {
      if (item.status !== "fulfilled" && !item.value.length) {
        arr.push([]);
      } else {
        arr.push(item.value);
      }
    });

    return arr;
  });

  const [hourlyWeather, dailyWeather, nearbyWeather] = await settleAllPromise;

  return {
    id,
    name,
    country,
    hourlyWeather,
    dailyWeather,
    nearbyWeather,
  };
};

export { getCityIdFromName, fetchWeather };
