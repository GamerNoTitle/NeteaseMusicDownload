function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
    context = r[2];
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}
if (GetQueryString("id") == ''){
    undefined
}
else{
    window.open('https://music.163.com/song/media/outer/url?id='+GetQueryString("id")+'.mp3','_blank');
}
