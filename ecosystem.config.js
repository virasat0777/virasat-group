module.exports = {
  apps: [
    {
      name: "virasat-frontend",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

