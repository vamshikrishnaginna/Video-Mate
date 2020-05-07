const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/videomate", {useNewUrlParser: true});

//Opening the connection
//connection() is a promise
before((done)=>{
    mongoose.connection
    .once("open", () =>{
    // console.log('connected') 
    done();
    })
    .on("error", error => {
        console.log("your error is: ", error);
    }
    );
});
