/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next/static/files",
//           outputPath: "static/files",
//           name: "[name].[ext]",
//         },
//       },
//     });
//     return config;
//   },
// };
