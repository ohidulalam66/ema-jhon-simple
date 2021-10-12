import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializationAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuthentication;


/*
steps for authentication
---------------------------
step 1: Initial Setup
1. firebase: create projects set-up
2. Create web app
3. get configuration
4. initialize firebase
5. Enable auth method
---------------------------
step-2: setup component
1. create login component
2. create register component
3. create route for login and register.
---------------------------
step-3: set auth system
1. step up sign in method
2. step up sign out in method
3. user state
4. special observer using useEffect
5. return necessary methods and states from useFirebase
---------------------------
step-4: create auth context hook (useAuth)
1. create a auth context
2. create context provider
3. set context provider context value
4. use auth provider
5. create useAuth hook
---------------------------
step 5: create private route
1. create private route
2. set private route

*/