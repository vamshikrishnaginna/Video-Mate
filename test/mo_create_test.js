const Student = require('../app/student');
const assert = require('assert');

describe('Create records', () => {
    it('create a user in DB', () =>{
        //assert(true);
        const naga = new Student({name: "naga"});
        naga.save()
        .then( ()=>{
            assert(!naga.isNew)
        }

        )
        .catch(()=>{
            console.log("error!")
        })
    })
}  )


//All read tests

