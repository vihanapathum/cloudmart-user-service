module.exports = {
  apps: [
    {
      name: "user-service",
      script: "java",
      args: "-jar user-service.jar",
      cwd: "/opt/cloudmart/user-service",
      env: {
        SERVER_PORT: "8083",
        CONFIG_SERVER_URL: "http://localhost:8888",
        EUREKA_SERVER_URL: "http://localhost:8761/eureka",
        DB_URL: "jdbc:mysql://<CLOUD_SQL_PRIVATE_IP>:3306/userdb",
        DB_USERNAME: "user",
        DB_PASSWORD: "CHANGE_ME"
      },
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      restart_delay: 3000,
      out_file: "/var/log/pm2/user-service-out.log",
      error_file: "/var/log/pm2/user-service-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
