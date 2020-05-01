import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'São Paulo'
        }
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage('Something went wrong :(');
    }
  };

  useEffect(() => {
    searchApi('hamburguer');
  }, []);

  return [searchApi, results, errorMessage];
};
