import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
import  App  from "./app.js";
import app1 from './app1.js';

window.addEventListener("DOMContentLoaded", function(){
	createApp(App).mount('#app');
	createApp(app1).mount('#app1');
});