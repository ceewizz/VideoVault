// npm install node-fetch@2 - node-fetch v3.x and later are ESM-only whixh require import
const fetch = require('node-fetch');

async function fetchTikTokData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching TikTok data:", err);
        throw err; 
    }
}

module.exports = fetchTikTokData;