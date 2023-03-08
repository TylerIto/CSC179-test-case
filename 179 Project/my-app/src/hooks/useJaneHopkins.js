import React from 'react'

import { createVendiaClient } from '@vendia/client';

const client = createVendiaClient({
    apiUrl: `https://hdeur38iif.execute-api.us-west-2.amazonaws.com/graphql/`,
    websocketUrl: `wss://rif9sb65x7.execute-api.us-west-2.amazonaws.com/graphql`,
    apiKey: `Ay5wQcUeQiBtkBtByRJDEUWK7CYoDoLSZzmRoZwKg9Ry`, 
  })

const { entities } = client;

const useJaneHopkins = () => { return {entities}; };

export default useJaneHopkins;