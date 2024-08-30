import { Firebase } from "@/class/Firebase";
import { getAuth, signInWithEmailAndPassword, UserCredential, signOut } from "firebase/auth";


export async function Login(email: string, password: string): Promise<UserCredential> {
    let firebase = new Firebase()
    const auth = getAuth(firebase.getAPP());
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                resolve(userCredential)
            })
            .catch((error) => {
                reject(error.message)
            });
    })
}

export async function LogOut(): Promise<boolean> {
    let firebase = new Firebase()
    const auth = getAuth(firebase.getAPP());
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then(() => {
                resolve(true)
            })
            .catch((error) => {
                reject(false)
            });
    })
}

export async function GetCurrentUser(): Promise<boolean> {
    try {
        let firebase = new Firebase()
        const auth = getAuth(firebase.getAPP());
        await auth.authStateReady();
        if (auth.currentUser) {
            return true
        }
        return false
    } catch (error) {
        return false
    }
}