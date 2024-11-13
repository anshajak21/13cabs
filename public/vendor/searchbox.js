
const at = 'pk.eyJ1IjoiaG9wcHVtIiwiYSI6ImNsZHg1eGg0NTBkOHEzcHAwN29vbng1cHgifQ.U65ufDlmu18n-jx0N7cPlQ';
mapboxgl.accessToken = at;
const script = document.getElementById('search-js');
script.onload = () => {
    const elements = document.querySelectorAll('mapbox-address-autofill');
    for (const autofill of elements) {
        autofill.accessToken = ACCESS_TOKEN;
    }
};