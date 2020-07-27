module.exports = {
  apps: [
    {
      name: "WEB",
      script: "./build/static/index.html",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
