function setLang(lang) {
    var xmlhttp = new XMLHttpRequest();
    var obj;
    var url = lang == "en" ? "./assets/lang/en.json" : "./assets/lang/id.json";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            getLang(myArr)
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function getLang(arr) {
        obj = arr;
        console.log(obj.about);
    }
}

setLang("en")