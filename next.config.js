// module.exports = {
//     images: {
//         remotePatterns: [
//             {
//                 hostname: 'cdn.sanity.io',
//             },
//         ],
//     },
// };
module.exports = {
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [
                    {
                        type: 'host',
                        value: 'https://bikebizz.vercel.app/', // あなたのVercelドメイン
                    },
                ],
                destination: 'https://bikebizz.vercel.app/:path*',
                permanent: true,
            },
        ];
    },
};
