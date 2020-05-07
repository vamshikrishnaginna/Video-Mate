const Student = require('../app/student');
const assert = require('assert');


describe("update tests", ()=>{
let updater;
beforeEach(() =>{
    updater = new Student({name : "updater"});
    updater.save()
    .then(()=> {done()})
});

it("set and save test", () =>{
updater.set('name', "UpUpdater");
updater.save()
.then(()=> Student.find({}))
.then((student)=>{
    assert(student[0].name !== "Updater");
});

});

});