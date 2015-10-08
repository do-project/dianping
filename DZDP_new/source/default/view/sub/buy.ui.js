var app = sm("do_App");
var sv_silder0 = ui("sv_silder0"); 
var listdata = mm("do_ListData");
var do_ImageView_1 = ui("do_ImageView_1");
var do_ImageView_2 = ui("do_ImageView_2");
var do_ImageView_3 = ui("do_ImageView_3");

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
		do_ImageView_1.source = "source://image/buy/oo.png";
		do_ImageView_2.source = "source://image/buy/o.png";
		do_ImageView_3.source = "source://image/buy/o.png";
	}
	else if(index == 1)
	{
		do_ImageView_1.source = "source://image/buy/o.png";
		do_ImageView_2.source = "source://image/buy/oo.png";
		do_ImageView_3.source = "source://image/buy/o.png";
	}
	else
	{
		do_ImageView_1.source = "source://image/buy/o.png";
		do_ImageView_2.source = "source://image/buy/o.png";
		do_ImageView_3.source = "source://image/buy/oo.png";
	}
});