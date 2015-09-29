var indexListview = ui("indexListView");
var nf = sm("do_Notification");
var hd = mm("do_HashData"); 
var page = sm("do_Page");
var app = sm("do_App");
var global = sm("do_Global");

page.on("back", function(){ app.closePage();});

hd.addData({"A":[{"template":0,"titleText":"A"},{"template":1,"text":"鞍山"},{"template":1,"text":"安庆"},{"template":1,"text":"安阳"},{"template":1,"text":"安顺"},{"template":1,"text":"阿里"},{"template":1,"text":"安县"},{"template":1,"text":"安庆"}]});
hd.addData({"B":[{"template":0,"titleText":"B"},{"template":1,"text":"北京"},{"template":1,"text":"保定"},{"template":1,"text":"包头"},{"template":1,"text":"本溪"},{"template":1,"text":"白城"},{"template":1,"text":"白山"},{"template":1,"text":"滨州"}]});
hd.addData({"C":[{"template":0,"titleText":"C"},{"template":1,"text":"成都"},{"template":1,"text":"重庆"},{"template":1,"text":"承德"},{"template":1,"text":"沧州"},{"template":1,"text":"朝阳"}]});
hd.addData({"D":[{"template":0,"titleText":"D"},{"template":1,"text":"大连"},{"template":1,"text":"大同"},{"template":1,"text":"德州"},{"template":1,"text":"东营"},{"template":1,"text":"达州"},{"template":1,"text":"德阳"}]});
hd.addData({"E":[{"template":0,"titleText":"E"},{"template":1,"text":"恩施"},{"template":1,"text":"鄂州"}]});
hd.addData({"F":[{"template":0,"titleText":"F"},{"template":1,"text":"福州"},{"template":1,"text":"抚顺"},{"template":1,"text":"佛山"},{"template":1,"text":"奉化"},{"template":1,"text":"富阳"}]});
hd.addData({"G":[{"template":0,"titleText":"G"},{"template":1,"text":"广州"},{"template":1,"text":"桂林"},{"template":1,"text":"广安"}]});
hd.addData({"H":[{"template":0,"titleText":"H"},{"template":1,"text":"杭州"},{"template":1,"text":"海口"},{"template":1,"text":"衡水"}]});
hd.addData({"I":[{"template":0,"titleText":"I"}]});
hd.addData({"J":[{"template":0,"titleText":"J"},{"template":1,"text":"济南"},{"template":1,"text":"晋城"},{"template":1,"text":"锦州"}]});
hd.addData({"K":[{"template":0,"titleText":"K"},{"template":1,"text":"开封"},{"template":1,"text":"昆明"},{"template":1,"text":"昆山"}]});
hd.addData({"L":[{"template":0,"titleText":"L"},{"template":1,"text":"廊坊"},{"template":1,"text":"丽水"},{"template":1,"text":"龙岩"}]});
hd.addData({"M":[{"template":0,"titleText":"M"},{"template":1,"text":"梅州"},{"template":1,"text":"绵阳"},{"template":1,"text":"梅县"}]});
hd.addData({"N":[{"template":0,"titleText":"N"},{"template":1,"text":"南京"},{"template":1,"text":"宁波"},{"template":1,"text":"南昌"}]});
hd.addData({"O":[{"template":0,"titleText":"O"}]});
hd.addData({"P":[{"template":0,"titleText":"P"},{"template":1,"text":"盘锦"},{"template":1,"text":"莆田"},{"template":1,"text":"濮阳"}]});
hd.addData({"Q":[{"template":0,"titleText":"Q"},{"template":1,"text":"青岛"},{"template":1,"text":"泉州"},{"template":1,"text":"清远"}]});
hd.addData({"R":[{"template":0,"titleText":"R"},{"template":1,"text":"日照"},{"template":1,"text":"任县"},{"template":1,"text":"瑞安"}]});
hd.addData({"S":[{"template":0,"titleText":"S"},{"template":1,"text":"上海"},{"template":1,"text":"苏州"},{"template":1,"text":"松原"}]});
hd.addData({"T":[{"template":0,"titleText":"T"},{"template":1,"text":"天津"},{"template":1,"text":"唐山"},{"template":1,"text":"台州"}]});
hd.addData({"U":[{"template":0,"titleText":"U"}]});
hd.addData({"V":[{"template":0,"titleText":"V"}]});
hd.addData({"W":[{"template":0,"titleText":"W"},{"template":1,"text":"无锡"},{"template":1,"text":"武汉"},{"template":1,"text":"梧州"}]});
hd.addData({"X":[{"template":0,"titleText":"X"},{"template":1,"text":"厦门"},{"template":1,"text":"西安"},{"template":1,"text":"徐州"}]});
hd.addData({"Y":[{"template":0,"titleText":"Y"},{"template":1,"text":"兖州"},{"template":1,"text":"扬州"},{"template":1,"text":"烟台"}]});
hd.addData({"Z":[{"template":0,"titleText":"Z"},{"template":1,"text":"镇江"},{"template":1,"text":"周口"},{"template":1,"text":"枣庄"}]});


indexListview.bindItems(hd,["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
indexListview.refreshItems();

indexListview.on("touch",function(data, e){
    var cell = hd.getOne(data.groupID);
    var childData = cell[data.index];
    app.closePage(childData.text);
});


