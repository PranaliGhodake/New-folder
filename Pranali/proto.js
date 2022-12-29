/*let a = {
    name: "harry",
    language: "java"
}
console.log(a)
let p = {
    run: () => {
        alert("run")
    }
}

a.__proto__ = p
a.run()*/


class RailwayForm {
    submit() {
        alert(this.name + ":your form is submitted")
    }
    cancel() {
        alert(this.name + ":this form is cancelled")
    }
    fill(givenname) {
        this.name = givenname
    }
}

let harryForm = new RailwayForm()
harryForm.fill("harry")

let rohanForm = new RailwayForm()
rohanForm.fill("rohan")
//hiii
//hello

rohanForm.submit()
harryForm.submit()
rohanForm.cancel()