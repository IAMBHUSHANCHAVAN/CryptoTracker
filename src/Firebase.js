import { firebaseConfig } from "./pages/config/firebaseConfig";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {initializeApp} from "firebase/app"



const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebaseConfig)
const store = getFirestore(firebaseConfig)

export {auth,store}