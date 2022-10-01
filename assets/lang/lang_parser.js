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
        document.getElementById('about').innerHTML = arr.about;
        document.getElementById('title_1').innerHTML = arr.title_1;
        document.getElementById('title_1h').innerHTML = arr.title_1;
        document.getElementById('title_2').innerHTML = arr.title_2;
        document.getElementById('title_2h').innerHTML = arr.title_2;
        document.getElementById('title_3').innerHTML = arr.title_3;
        document.getElementById('title_3h').innerHTML = arr.title_3;
        document.getElementById('title_4').innerHTML = arr.title_4;
        document.getElementById('title_4h').innerHTML = arr.title_4;
        document.getElementById('pengalaman_kerja_judul').innerHTML = arr.pengalaman_kerja_judul;
        document.getElementById('pengalaman_kerja_tanggal').innerHTML = arr.pengalaman_kerja_tanggal;
        document.getElementById('pengalaman_kerja_text').innerHTML = arr.pengalaman_kerja_text;
        document.getElementById('sarjana_judul').innerHTML = arr.sarjana_judul;
        document.getElementById('sarjana_tanggal').innerHTML = arr.sarjana_tanggal;
        document.getElementById('sarjana_text').innerHTML = arr.sarjana_text;
        document.getElementById('timeline_1').setAttribute("data-year", arr.timeline_year_1);
        document.getElementById('timeline_2').setAttribute("data-year", arr.timeline_year_2);
        document.getElementById('timeline_3').setAttribute("data-year", arr.timeline_year_3);
        document.getElementById('timeline_4').setAttribute("data-year", arr.timeline_year_4);
        document.getElementById('timeline_5').setAttribute("data-year", arr.timeline_year_5);
        document.getElementById('timeline_1').setAttribute("data-text", arr.timeline_info_1);
        document.getElementById('timeline_2').setAttribute("data-text", arr.timeline_info_2);
        document.getElementById('timeline_3').setAttribute("data-text", arr.timeline_info_3);
        document.getElementById('timeline_4').setAttribute("data-text", arr.timeline_info_4);
        document.getElementById('timeline_5').setAttribute("data-text", arr.timeline_info_5);
        document.getElementById('good_1_title').innerHTML = arr.good_1_title;
        document.getElementById('good_2_title').innerHTML = arr.good_2_title;
        document.getElementById('good_3_title').innerHTML = arr.good_3_title;
        document.getElementById('good_4_title').innerHTML = arr.good_4_title;
        document.getElementById('good_1_text').innerHTML = arr.good_1_text;
        document.getElementById('good_4_text').innerHTML = arr.good_4_text;
        document.getElementById('contact_me').innerHTML = arr.contact_me;
        document.getElementById('form-submit').innerHTML = arr.btn_send;
        document.getElementById('project_1_text').setAttribute("data-title", arr.project_1_text);
        document.getElementById('project_2_text').setAttribute("data-title", arr.project_2_text);
        document.getElementById('project_3_text').setAttribute("data-title", arr.project_3_text);
        document.getElementById('name').setAttribute("placeholder", arr.input_name_placeholder);
        document.getElementById('email').setAttribute("placeholder", arr.input_email_placeholder);
        document.getElementById('subject').setAttribute("placeholder", arr.input_subject_placeholder);
        document.getElementById('message').setAttribute("placeholder", arr.input_message_placeholder);
    }
}

setLang("en")