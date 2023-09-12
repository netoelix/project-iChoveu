// const token = import.meta.env.VITE_TOKEN;
const token = 'ef9ddd9f276b4299987223454231109';

export async function searchCities(term) {
  const city = await fetch(`http://api.weatherapi.com/v1/search.json?key=${token}&q=${term}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        return window.alert('Nenhuma cidade encontrada');
      }
      return data;
    })
    .catch(console.log('Erro eo acessar a API na função searchCities'));
  return city;
}

export async function getWeatherByCity(cityURL) {
  // const city = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     return { temp: data.current.temp_c,
  //       condition: data.current.condition.text,
  //       icon: data.current.condition.icon };
  //   })
  //   .catch(console.log('Erro eo acessar a API na função getWeatherByCity'));
  // return city;

  const apiFetch = await fetch(`http://api.weatherapi.com/v1/current.json?lang=pt&key=${token}&q=${cityURL}`);
  const jsonReturn = await apiFetch.json();
  const { location, current } = jsonReturn;
  const newReturn = {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    url: cityURL,
  };
  return newReturn;
}
