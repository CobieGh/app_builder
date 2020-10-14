var firebaseConfig = {
    "apiKey": process.env.REACT_APP_apiKey||"AIzaSyBXYkXhoxPkPps-JxlX0Oh3jOS0ZTj_M6s",
    "authDomain": process.env.REACT_APP_projectId?process.env.REACT_APP_projectId+".firebaseapp.com":"reactappbuilder-24822.firebaseapp.com",
    "databaseURL": process.env.REACT_APP_projectId?"https://"+process.env.REACT_APP_projectId+".firebaseio.com":"https://reactappbuilder-24822.firebaseio.com",
    "projectId": process.env.REACT_APP_projectId?process.env.REACT_APP_projectId:"reactappbuilder-24822",
    "storageBucket": process.env.REACT_APP_projectId?process.env.REACT_APP_projectId+".appspot.com":"reactappbuilder-24822.appspot.com",
    "messagingSenderId": "564559257131",
    "appId": process.env.REACT_APP_appId||"1:564559257131:web:a3086e8e82e62a18d4146e"
}; 
exports.config = firebaseConfig;