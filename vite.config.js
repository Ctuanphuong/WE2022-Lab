// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                detail: resolve(__dirname, 'Detail.html'),
                products: resolve(__dirname, 'Products.html'),
                signin: resolve(__dirname, 'Signin.html'),
                signup: resolve(__dirname, 'Signup.html'),

            }
        }
    }
})