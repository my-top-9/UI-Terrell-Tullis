console.log('LITTTT')
class Member{
    constructor(domElement){
    this.domElement = domElement
    console.log(this.domElement)
    }
    //methods
}

let members = document.querySelectorAll('.member')
console.log(members)
members.forEach(member => new Member(member))