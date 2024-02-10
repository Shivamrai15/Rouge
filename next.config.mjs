/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        unoptimized : true,
        remotePatterns : [
            {
                protocol : "https",
                hostname : "res.cloudinary.com",
            }
        ]
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;