var app = sm("do_App");
var sv_silder0 = ui("sv_silder0"); 
var listdata = mm("do_ListData");
var page = sm("do_Page");
var do_ImageView_1 = ui("do_ImageView_1");
var do_ImageView_2 = ui("do_ImageView_2");
var do_ImageView_3 = ui("do_ImageView_3");
var timer = mm("do_Timer");
var hourLabel = ui("hourLabel");
var minuteLabel = ui("minuteLabel");
var secondLabel = ui("secondLabel");

var hour = 2,minute = 0,second = 0;
timer.delay = 0;
timer.interval = 1000;
timer.start({});
timer.on("tick", function(){
	hourLabel.text = hour;
	minuteLabel.text = minute;
	secondLabel.text = second;
	second--;
	if(second < 0)
	{
		second = 59;
		minute--;
	}
	if(minute < 0)
	{
		minute = 59;
		hour--;
	}
});

page.on("result", function(d) {
	if(d != "")
		do_Button_1.text = d+"﹀";
});

sv_silder0.bindItems(listdata);
listdata.addData([
    {template : 0},
    {template : 1},
    {template : 2}
]);

sv_silder0.refreshItems();
sv_silder0.on("indexChanged",function(index){

	if(index == 0)
	{
		do_ImageView_1.source = "source://image/first/oo.png";
		do_ImageView_2.source = "source://image/first/o.png";
		do_ImageView_3.source = "source://image/first/o.png";
	}
	else if(index == 1)
	{
		do_ImageView_1.source = "source://image/first/o.png";
		do_ImageView_2.source = "source://image/first/oo.png";
		do_ImageView_3.source = "source://image/first/o.png";
	}
	else
	{
		do_ImageView_1.source = "source://image/first/o.png";
		do_ImageView_2.source = "source://image/first/o.png";
		do_ImageView_3.source = "source://image/first/oo.png";
	}
});


