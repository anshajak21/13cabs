"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const AddressAutofill = dynamic(
    () => import('@mapbox/search-js-react').then(mod => mod.AddressAutofill),
    { ssr: false }
);

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN ?? "pk.eyJ1IjoiaG9wcHVtIiwiYSI6ImNsZHg1eGg0NTBkOHEzcHAwN29vbng1cHgifQ.U65ufDlmu18n-jx0N7cPlQ";

const SearchBox = ({children}) => {
  return (
    <AddressAutofill accessToken={MAPBOX_TOKEN} options={{ country: 'AU' }}>
        {children}
    </AddressAutofill>
  )
}

export default SearchBox;