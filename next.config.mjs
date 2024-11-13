import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  // output: 'export',
  // images: { unoptimized: true },
  // output: 'standalone',
  // trailingSlash : true,
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for faster builds

  // Custom Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src'); // Ensure the path is correct
    return config;
  },

  // PWA configuration
  // pwa: {
  //   dest: 'public',
  //   register: true,
  //   skipWaiting: true,
  //   disable: !isProd, // Disable PWA in non-production environments for faster development
  // },

  // Other Next.js configurations
  // images: {
  //   domains: ['example.com'], // Add your image domains here
  // },
  
  // Custom headers for better security
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: "default-src 'self'; script-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none';",
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

// export default withPWA(nextConfig);



// const nextConfig = {};
export default nextConfig;

// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.resolve.alias['@'] = path.join(__dirname, 'src'); // Adjust the path to your project structure
//     return config;
//   },
// };

// export default nextConfig;


// import { i18n } from './next-i18next.config.mjs';
// import { PHASE_PRODUCTION_BUILD } from 'next/constants';

// const nextConfig = (phase, { defaultConfig }) => {
//   const isProd = phase === PHASE_PRODUCTION_BUILD;

//   return {
//     // Internationalization configuration
//     i18n,
    
//     // Enabling React strict mode for catching potential problems
//     reactStrictMode: true,

//     // Image optimization configuration
//     images: {
//       domains: ['http://localhost:3000/'], // Add your domains here
//       deviceSizes: [320, 420, 768, 1024, 1200],
//       imageSizes: [16, 32, 48, 64, 96],
//     },

//     // Enabling SWC minification for faster builds
//     swcMinify: true,

//     // Webpack configuration
//     webpack: (config, { dev, isServer }) => {
//       if (!isServer) {
//         // Client-side specific configurations
//         config.optimization.splitChunks.cacheGroups = {
//           framework: {
//             chunks: 'all',
//             name: 'framework',
//             test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
//             priority: 40,
//             enforce: true,
//           },
//           lib: {
//             test(module) {
//               return module.size() > 160000 && /node_modules[/]/.test(module.identifier());
//             },
//             name(module) {
//               const hash = require('crypto').createHash('sha1');
//               if (module.libIdent) {
//                 hash.update(module.libIdent({ context: __dirname }));
//               }
//               return hash.digest('hex').substring(0, 8);
//             },
//             priority: 30,
//             minChunks: 1,
//             reuseExistingChunk: true,
//           },
//         };
//       }

//       // Adding Brotli compression
//       if (isProd) {
//         const CompressionPlugin = require('compression-webpack-plugin');
//         config.plugins.push(
//           new CompressionPlugin({
//             filename: '[path][base].br',
//             algorithm: 'brotliCompress',
//             test: /\.(js|css|html|svg)$/,
//             compressionOptions: { level: 11 },
//             threshold: 10240,
//             minRatio: 0.8,
//             deleteOriginalAssets: false,
//           })
//         );
//       }

//       return config;
//     },

//     // Headers configuration for caching
//     async headers() {
//       return [
//         {
//           source: '/(.*)',
//           headers: [
//             {
//               key: 'Cache-Control',
//               value: 'public, max-age=31536000, immutable',
//             },
//           ],
//         },
//       ];
//     },

//     // Enabling the future flag for Webpack 5
//     future: {
//       webpack5: true,
//     },

//     // Customizing build output folder
//     distDir: 'build',

//     // Enabling experimental features
//     experimental: {
//       esmExternals: false,
//       optimizeCss: true,
//       optimizeImages: true,
//     },
//   };
// };

// export default nextConfig;