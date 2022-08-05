// Xu ly xau
    var x = "Dien thoa iphone, android, nokia";
    // ham tim kiem
        console.log("Xu ly xau");
        console.log("ham indexOf")
        var vitri = x.indexOf("iphone"); // tra ve vi tri cua tu do trong xau "x"
        // neu k co tra ve -1;
        console.log(vitri);

        //tuong tu voi ham search, ham indexOf vs search giong nhau
        var vitri = x.search("iphone");
        console.log(vitri);
    
    // ham tim kiem thay the
        var y = x.replace('iphone','bphone');
        console.log(y);
    
    // ham split tach xau thanh mang
        var arrX = x.split(',');
        console.log(arrX);

// Xu ly so
    var x = 10;
    var y = 7;
    console.log(x + y);
    // Ham bien so thanh chu
        y = y.toString();
        console.log(x + y);

    // ham bien chu than thanh so
        y = Number(y);
        console.log(x + y);

    // ham bien chu thanh so nguyen(int)
        var z = "10.9";
        z = parseInt(z);
        console.log(z);
