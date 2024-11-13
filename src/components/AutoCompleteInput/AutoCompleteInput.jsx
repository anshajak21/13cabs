"use client";
import React, { useState, useRef, useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding';

const geocoder = MapboxGeocoder({ accessToken: 'pk.eyJ1IjoiaG9wcHVtIiwiYSI6ImNsZHg1eGg0NTBkOHEzcHAwN29vbng1cHgifQ.U65ufDlmu18n-jx0N7cPlQ' });

const AutoCompleteInput = ({ name, id, className, type, placeholder, required }) => {
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const containerRef = useRef(null);

    const handleChange = async (e) => {
        const value = e.target.value;
        setAddress(value);

        if (value.length > 1) {
            const response = await geocoder.forwardGeocode({
                query: value,
                autocomplete: true,
                limit: 5,
                language: ['en'],
                proximity: [151.2093, -33.8688],
                bbox: [150.5209, -34.1183, 151.3430, -33.5781],
            }).send();

            setSuggestions(response.body.features);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (selectedAddress) => {
        setAddress(selectedAddress.place_name);
        setSuggestions([]);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setSuggestions([]);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            <input
                name={name}
                id={id}
                className={`w-full text-lg border border-gray-300 rounded-lg focus:outline-none ${className}`}
                type={type}
                style={{ width: "100%" }}
                value={address}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                autoComplete="off"  // Disable default browser autocomplete
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {suggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            onClick={() => handleSelect(suggestion)}
                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                            <div className="font-semibold">{suggestion.text}</div>
                            <div className="text-sm text-gray-500">{suggestion.place_name}</div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoCompleteInput;
