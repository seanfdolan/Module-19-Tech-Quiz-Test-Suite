// import { defineConfig } from 'cypress'

// export default defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:8080',
//   },
//   component: {
//     devServer: {
//       framework: 'react',
//       bundler: 'vite',
//     },
//   },
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     open: true
//   },
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     setupFiles: './src/setupTests.js',
//     css: true
//   },
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "vite"
//     }
//   }
// })

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'o7yemk',
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.cy.{ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
