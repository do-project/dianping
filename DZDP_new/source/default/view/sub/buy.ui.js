var app = sm("do_App");
var do_Button_1 = ui("do_Button_1");
var do_Button_2 = ui("do_Button_2");

do_Button_1.on("touch",function(data, e){
	app.openPage("source://view/sub/firstfile/barcode.ui","a");
});

do_Button_2.on("touch",function(data, e){
	app.openPage("source://view/sub/firstfile/subfind.ui","a");
});
