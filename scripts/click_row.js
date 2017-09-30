
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

    var xmlDoc = xml.responseXML;
    var x_temp = xmlDoc.getElementsByTagName("artist");
    var x = x_temp[i];
    console.log (x);
}