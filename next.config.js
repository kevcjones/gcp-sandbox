/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    experimental: {
        serverActions: true,
    },
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}

module.exports = nextConfig
