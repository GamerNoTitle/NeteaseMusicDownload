function openNew(){
    var link = document.getElementById("link").value;
    const NeteaseReg = new RegExp('music.163.com/song/(\\d+)')
    const schemeReg = new RegExp('^https?://')
    if(NeteaseReg.test(link) && schemeReg.test(link)) {
    var ToOpen = link.replace("music.163.com", "music.ninym.top").replace("/#/","/");  //防止解析暴毙
    window.open(ToOpen);
    }
    else{
        alert('请输入正确的网易云链接！\n例如 https://music.163.com/song?id=467787951&userid=252340012')
    }
}
