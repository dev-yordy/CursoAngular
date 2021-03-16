interface user {
    name:string;
    age:number;
}

var listuser:Array<user> = [
    {
     name: "Andrea",
     age:19      
    },
    {
     name: "Yordy",
     age:22
    }
]

for(let us of listuser){
    console.log("Name: "+us.name + "  "+"Age: " + us.age);
}