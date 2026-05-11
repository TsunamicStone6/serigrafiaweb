/**
 * PM2 Ecosystem Config — Hostinger Node.js
 *
 * Subir a Hostinger y correr:
 *   pm2 start ecosystem.config.js --env production
 *   pm2 save
 */

module.exports = {
  apps: [
    {
      name: 'calacas-prints',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
    },
  ],
}
