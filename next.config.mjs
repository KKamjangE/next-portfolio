/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com",
            },
            {
                hostname: "lh3.googleusercontent.com",
            },
        ],
    },
    webpack: (config) => {
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.(".svg"),
        )

        config.module.rules.push(
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/,
            },
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: {
                    not: [...fileLoaderRule.resourceQuery.not, /url/],
                },
                use: ["@svgr/webpack"],
            },
        )

        return config
    },
}

export default nextConfig
