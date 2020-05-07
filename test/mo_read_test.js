const Student = require('../app/student');
const assert = require('assert');

describe("Read Tests", ()=> {
    let reader;
    beforeEach((done)=>{
        reader = new Student({name: "Reader"})
        reader.save().then(()=> {
            done();
        })
    })
    
    it("Read a user: Reader", ()=> {
        Student.find({name: "Reader"})
        .then((student)=>{
            assert(reader._id.toString() === student[0]._id.toString());
            done();


            
        })
    })
})