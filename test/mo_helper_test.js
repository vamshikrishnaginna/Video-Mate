const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/videomate", {useNewUrlParser: true});

//connection() is a promise
mongoose.connection
    .once("open", () => console.log('connected') )
    .on("error", error => {
        console.log("your error is: ", error);
    }
    );