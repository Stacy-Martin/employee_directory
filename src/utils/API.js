// fetch data from the api
const fetchEmpData = () => {
  const empInfo =
    "https://randomuser.me/api/?inc=name,email,phone,picture,nat&results=15";
  return fetch(empInfo);
};

export default fetchEmpData;
