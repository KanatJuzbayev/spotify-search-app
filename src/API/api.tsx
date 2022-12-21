import { Data } from 'types';

export async function fetchHandler(value: string): Promise<Data> {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e4215c9690msh5c93b1c7bb3e700p1f606cjsn1fe6db495828',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    },
  };

  const data: Data = await fetch(
    'https://spotify23.p.rapidapi.com/search/?q=' +
      value +
      '&type=multi&offset=0&limit=100&numberOfTopResults=5',
    options
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));

  return data;
}
