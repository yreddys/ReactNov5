// ExampleComponent.js
import React, { useEffect, useState } from 'react';
import api from './path/to/axiosConfig';

const ExampleComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example GET request
    api.get('http://example.com/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // AxiosError interceptor will log the error
        // Handle the error or show an error message
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ExampleComponent;
