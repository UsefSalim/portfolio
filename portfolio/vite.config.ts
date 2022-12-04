import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import dns from "dns";

dns.setDefaultResultOrder("verbatim");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("./.cert/key.pem"),
      cert: fs.readFileSync("./.cert/cert.pem"),
    },
    port: 443,
    host: true,
  },
});
