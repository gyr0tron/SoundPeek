
// jQuery(document).ready(function($) {
//     $(".clickable").click(function() {
//         window.location = $(this).data("href");
//     });
// });

// var table2 = document.querySelectorAll('.clickable')[0];
// var table3 = table2;
// console.log(table2);
// console.log(table3);

// var classesNodeList = document.querySelectorAll(".clickable");
// var classes = Array.prototype.map.call(classesNodeList, function(element) {
//     console.log(element.value);
// });
// for (var i in elements) {
//     var element = elements[i];
//     console.log(element.className);
    // element.addEventListener('click', function(){ 
    //     var href = this.dataset.href;
    //     if (href) {
    //         window.location.assign(href);
    //         console.log(href);
    //     }
    // });
//}
function clickity(num) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        process(this, num);
      }
    };
    xmlhttp.open("GET", "data.xml", true);
    xmlhttp.send();
  }

function process(xml, i) {
    var htm_bod = document.getElementById('demo');
    htm_bod.innerHTML = '';
    //https://musicbrainz.org/ws/2/artist/20244d07-534f-4eff-b4d4-930878889970
    // songs: https://musicbrainz.org/ws/2/release?artist=20244d07-534f-4eff-b4d4-930878889970
    var xmlDoc = xml.responseXML;
    var x_temp = xmlDoc.getElementsByTagName("artist");
    //check var double deep
    function var_chk(cntry) {
      if( cntry == null ){
         return "-";
      } 
      else {
        if (cntry.length == 1 ) {
          return cntry[0].childNodes[0].childNodes[0].nodeValue;
        }
        else {
         return "-";
        }
      }
    }
    //check gender single
    function gen_var_chk(cntry) {
      if( cntry == null ){
         return "-";
      } 
      else {
        if (cntry.length == 1 ) {
          return cntry[0].childNodes[0].nodeValue;
        }
        else {
         return "-";
        }
      }
    }
    // check area
    function area_var_chk(cntry) {
      if( cntry == null ){
         return "-";
      } 
      else {
        if (cntry.length == 1 ) {
          return cntry[0].childNodes[0].childNodes[0].nodeValue;
        }
        else {
         return "-";
        }
      }
    }
    // check born
    function born_var_chk(cntry) {
      if( cntry[0].childElementCount == 1 ){
         return "-";
      } 
      else {
        if (cntry[0].childElementCount == 2 ) {
          return cntry[0].childNodes[0].childNodes[0].nodeValue;
        }
        else {
         return "-";
        }
      }
    }
    //tags assembler
    function tags_assemble(htoj) {     
      var text ="";
      var len = htoj[0].childElementCount;
      for (var iter = 0; iter<=len-1; iter++) { 
        text = text + htoj[0].childNodes[iter].childNodes[0].innerHTML + ", ";
      }
      text = text.substring(0, text.length-2);
      return text;
    }
    var x = x_temp[i];
    var artid = x.id;
    console.log (x);
    var sngurl = "https://musicbrainz.org/ws/2/release?artist=" + artid + "&fmt=json";
    
    
    // function getFBName(sngurl, callback) {
    //   $.getJSON(sngurl, function (d) {
    //       callback(d);
    //   });
    // }

    var y;
    var table="<tr><th>Query</th><th>Details</th></tr>";
    table += "<tr><td>" + "Name:" + "<td>" +
    x.getElementsByTagName("name")[0].childNodes[0].nodeValue + //name
    "</td></tr>" +
    "<tr><td>" + "Legal Name:" + "<td>" +
    var_chk(x.getElementsByTagName("alias-list")) + //name
    "</td></tr>" +
    "<tr><td>" + "Gender:" + "<td>" +
    gen_var_chk(x.getElementsByTagName("gender")) + //name
    "</td></tr>" +
    "<tr><td>" + "Country:" + "<td>" +
    area_var_chk(x.getElementsByTagName("area")) + "(" +
    gen_var_chk(x.getElementsByTagName("country")) + ")" + //name
    "</td></tr>" +
    "<tr><td>" + "Area:" + "<td>" +
    var_chk(x.getElementsByTagName("begin-area")) + //name
    "</td></tr>" +
    "<tr><td>" + "Born:" + "<td>" +
    born_var_chk(x.getElementsByTagName("life-span")) + //name
    "</td></tr>" +
    "<tr><td>" + "Tags:" + "<td>" +
    tags_assemble(x.getElementsByTagName("tag-list")) + //name
    "</td></tr>";
    $.getJSON(sngurl, sngsjsnfunc);
    function sngsjsnfunc(data)
    {
      for (var i = 0; i <data.releases.length; i++) {
        var sng = data.releases[i].title;
        console.log (sng);
        table += "<tr><td>" + "Song Name:" + "<td>" +
        sng + //name
        "</td></tr>";
      }
    }
    document.getElementById("demo").innerHTML = table;
}