"use client"
import { useEffect } from 'react';
import { isAfterSixPm } from '../../utils/time';

function ColorTimer() {
    let colors;
    if (isAfterSixPm()) {
        colors = `<style>
        :root {
            --theme-background: green !important;
            --theme-ul-background: #000;
            --theme-light-background: #000;
            --theme-dark-background: #000;

            --theme-color: green !important;
            --theme-ul-color: #000;
            --theme-light-color: #000;
            --theme-dark-color: #000;

            --theme-dark-color: green !important;
            --white-color: #fff;
            --black-color: #000;
            }
    </style>`;
    }

  return (
    <div dangerouslySetInnerHTML={{ __html: colors}}></div>
  );
}

export default ColorTimer;
