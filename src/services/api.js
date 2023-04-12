  const getDataFromAPI = () => {
    return fetch('./dataProjects.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
      });
  };
  export default getDataFromAPI;
  