/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
        remotePatterns: [{hostname: 'images.unsplash.com'}]
    }
}

module.exports = nextConfig;