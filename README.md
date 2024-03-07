# KoinX Frontend Task

## Tech
- React.js
- Tailwind CSS
- React Router DOM v6

## Demo URL
URL Format : `https://task-koinx.vercel.app/[coinname]`

URL: https://task-koinx.vercel.app/bitcoin (ctrl + click)

## Overview and Features
- Implemented all components as shown in the Figma design.
- Implemented API calls for the following data:
  1. Price `/simple/price`
  2. Trending `/search/trending`
  3. Coins `/coins/{id}`
- Created a responsive design to ensure compatibility across various devices.
- Implemented Optional Tasks:
  - Users can dynamically change the coin name in the URL to view data and charts for different coins.
  - Example URL: `https://task-koinx.vercel.app/[coinname]`
  - Replace `[coinname]` with the name of the coin you want to view like:
    1. `bitcoin` for Bitcoin
    2. `ethereum` for Ethereum
    3. `ripple` for Ripple
- Implemented Error handling, for example if user enter `[coinname]` as something that is not crypto coin then a message will be displayed.
- Implemented functional breadcrumb navigation.
- Deployed in vercel.
- Note : I used FREE API Service from CoinGecko which has a `Rate Limit of 30 calls PER minute`.


## Preview

![image](https://github.com/kamal9494/koinx-task/assets/97849725/76dc0f90-b4f5-47c0-8940-ff0232a2efbb)
