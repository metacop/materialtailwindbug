/** @format */

import type { Config } from 'tailwindcss';

import { mtConfig } from '@material-tailwind/react';

// const { mtConfig } = require('@material-tailwind/react/');

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',

        './node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}',
    ],

    plugins: [mtConfig],
};

export default config;
