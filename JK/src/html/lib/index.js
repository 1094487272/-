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
    }
    );
    $.getJSON("./api/Tab.json",function (data, textStatus, jqXHR) {
        let tab = new Tab(data);
        tab.init();
        }
    );
})