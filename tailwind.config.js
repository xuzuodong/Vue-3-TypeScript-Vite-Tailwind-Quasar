const fs = require('fs')

const colors = JSON.parse(fs.readFileSync('./colors.json').toString())

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
