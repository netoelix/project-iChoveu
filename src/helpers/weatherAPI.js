const token = import.meta.env.VITE_TOKEN;
// `http://api.weatherapi.com/v1/current.json?key=${token}&q=${term}`
export const searchCities = async (term) => {
  const city = await fetch(`http://api.weatherapi.com/v1/search.json?key=${token}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        return window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
  return city;
};

export const getWeatherByCity = async (cityURL) => {
  const city = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      return { temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon };
    });
  return city;
};
