var circle={
    r:3,
    area:function(){
        return 3.14*this.r*this.r;
    }
}
console.log("circle.r=%d",circle.r);
console.log("circle.area()=%d",circle.area());

/*this:表示「這個物件」，在此檔案this表示circle*/