var People={
    name:"Toshire",
    age:23,
    print:function(){
        console.log("name=",this.name,"age=",this.age);
    }
}

People.print();

/*this:表示「這個物件」，在此檔案this表示people*/