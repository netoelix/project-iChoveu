const token = import.meta.env.VITE_TOKEN;

export async function searchCities(term) {
  const city = await fetch(`http://api.weatherapi.com/v1/search.json?key=${token}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        window.alert('Nenhuma cidade encontrada');
      }
      return data;
    });
  return city;
  // const city = await fetch(`http://api.weatherapi.com/v1/search.json?key=${token}&q=${term}`);
  // const jsonReturn = city.json();

  // if (jsonReturn.length === 0) {
  //   return window.alert('Nenhuma cidade encontrada');
  // }
  // return jsonReturn;
}

export async function getWeatherByCity(cityURL) {
  const city = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`)
    .then((response) => response.json())
    .then((data) => {
      return { name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
        url: cityURL };
    });
  return city;

  // const apiFetch = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
  // const jsonReturn = await apiFetch.json();
  // const { location, current } = jsonReturn;
  // const newReturn = {
  //   name: data.location.name,
  //   country: data.location.country,
  //   temp: data.current.temp_c,
  //   condition: data.current.condition.text,
  //   icon: data.current.condition.icon,
  //   url: cityURL,
  // };
  // return newReturn;
}
