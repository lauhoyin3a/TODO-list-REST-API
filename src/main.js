import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import './main.css'



const app=createApp(App)
app.use(router)

app.use(router).mount('#app')


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAWWS2fBZugNPMZXxmEGPWlluC-rI7A-q0",
  authDomain: "todo-4ebfc.firebaseapp.com",
  projectId: "todo-4ebfc",
  storageBucket: "todo-4ebfc.appspot.com",
  messagingSenderId: "919903286123",
  appId: "1:919903286123:web:844eef8e0fc6796add922e"
};

 initializeApp(firebaseConfig);