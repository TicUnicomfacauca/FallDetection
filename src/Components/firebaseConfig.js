import firebase from "firebase";

export const inicializarFirebase = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyAax_PjjRdIB0QHHa47XD3gUptwxO_iFNY",
        authDomain: "falldetection-bc102.firebaseapp.com",
        databaseURL: "https://falldetection-bc102.firebaseio.com",
        projectId: "falldetection-bc102",
        storageBucket: "falldetection-bc102.appspot.com",
        messagingSenderId: "1059060983316",
        appId: "1:1059060983316:web:6746cfb18bb5e441ea6901",
        measurementId: "G-7F5K96Q89N"
      });
};

export const preguntarPermisos = async () => {
    try {
        const messaging = firebase.messaging();

        //await messaging.requestPermission();
        await Notification.requestPermission().then(async permission => {
            if (permission === "denied" ) {
                console.log("Permission wasn't granted. Allow a retry.");
                return;
            } else if (permission === "default") {
                console.log("The permission request was dismissed.");
                return;
            }
            const token = await messaging.getToken();
            console.log("user token: ", token);

            return token;
        });
    } catch (error) {
        console.error(error);
    }
};

export const getFallDetection=(setFallStatus)=>{
    firebase.database().ref('/falldetection').on('value',(snapshot)=>{
        setFallStatus(snapshot.val())
    });
}