$(() => {
    // $.ajax({
    //     type: "get",
    //     url: "./api/meum.php",
    //     data: "data",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(response);
    //         let meum = new Meum(data);
    //         meum.init();
    //     }
    // });
    $.getJSON("./api/meum.json", function (data, textStatus, jqXHR) {
        let meum = new Meum(data);
        meum.init();
    });
    $.getJSON("./api/Tab.json",function (data, textStatus, jqXHR) {
        let tab = new Tab(data);
        tab.init();
    });
    $.getJSON("./api/slideshow.json",function (data, textStatus, jqXHR) {
        let manager=new Manager(data);
        manager.init();
    });
    new Promise(function(resolve,reject){
        $.getJSON("./api/content.json",function (data, textStatus, jqXHR) {
            let content=new Content(data);
            content.init();
            resolve(); 
         });
    }).then(function(){
        $.getJSON("./api/Floor.json",function (data, textStatus, jqXHR) {
            let floor=new Floor(data);
            floor.init();
        });
    })
    
    
})