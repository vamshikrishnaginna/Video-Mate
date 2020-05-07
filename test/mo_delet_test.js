const Student = require('../app/student');
const assert = require('assert');

describe("Delete Test", ()=>{
let deleter;

beforeEach(() => {
    deleter = new Student({name:"Deleter"});
    deleter.save()
    .then(() => done());
});

it("A delete test for deleter", () => {
    Student.findByIdAndDelete(deleter._id)
    .then(() => Student.findOne({name: "Deleter"}))
    .then((student) => {
        assert(student === null);
        done();
        
    });
})



})