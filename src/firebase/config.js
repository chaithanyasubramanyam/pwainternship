import firebase from 'firebase';



firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;
