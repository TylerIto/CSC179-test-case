import React from 'react'
import { createVendiaClient } from '@vendia/client'

const client = createVendiaClient({
  apiUrl: `https://8ox2axykv8.execute-api.us-west-2.amazonaws.com/graphql/`,
  websocketUrl: `wss://cyua4epxl0.execute-api.us-west-2.amazonaws.com/graphql`,
  apiKey: 'FVGkPyD9HcrLBbFC4DmFDM1attWQFieLzyqtymoKQVwZ', //real world dont put this here its public
})

const {entities} = client;

const usemyFDA = () => {
    return {entities}
}
export default function usemyFDA() {
    return(
        <div>usemyFDA</div>
    )
}