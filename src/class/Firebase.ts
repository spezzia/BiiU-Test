import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD3QWUuP7t2NnfnEEqNsF14Q6Dp-uAFm8o",
    authDomain: "biiu-b9bba.firebaseapp.com",
    projectId: "biiu-b9bba",
    storageBucket: "biiu-b9bba.appspot.com",
    messagingSenderId: "452807737722",
    appId: "1:452807737722:web:d24e8833a5bd6cdcb156c3"
};


export class Firebase {
    private app;

    public constructor() {
        this.app = initializeApp(firebaseConfig);
    }

    public getAPP() {
        return this.app
    }
}