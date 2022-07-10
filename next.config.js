/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (
    config, {
      buildId,
      dev,
      isServer,
      defaultLoaders,
      nextRuntime,
      webpack
    }
  ) => {
    // Important: return the modified config
    config.module.rules.push({
      test: /\.mp4/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    })
    return config
  },
}