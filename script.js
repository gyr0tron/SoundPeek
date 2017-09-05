function loadXMLDoc() {
	  var xmlhttp = new XMLHttpRequest();
	  xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      myFunction(this);
	    }
	  };
	  xmlhttp.open("GET", "data.xml", true);
	  xmlhttp.send();
	}
	function myFunction(xml) {
	  var i;
	  var xmlDoc = xml.responseXML;
	  console.log (xmlDoc);
	  var table="<tr><th>Artist</th><th>%Match</th><th>Country</th><th>type</th><th>Gender</th><th>Died?</th><th>ID</th></tr>";
	  var x = xmlDoc.getElementsByTagName("artist");
	  var y = xmlDoc.getElementsByTagName("area");
	  console.log (y);
	  for (i = 0; i <x.length; i++) { 
	  	var score_attr = x[i].getAttribute("ext:score");
	  	function var_chk(cntry) {
	  		if( cntry == null )
				{
					return "-";
				} else {
					if (cntry.length == 1 ) {
					return cntry[0].childNodes[0].nodeValue;
					} else {
						return "-";
					}
				}
	  	}
	  	function type_chk (typchkvar) {
	  		if (typchkvar == null) {
	  			return "-";
	  		} else {
	  			return typchkvar;
	  		}
	  	}
	    table += "<tr><td>" +
	    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + //name
	    "</td><td>" +
	    score_attr + //%score
	    "</td><td>"+
	    var_chk(x[i].getElementsByTagName("country")) + //country err
	    "</td><td>" +
	    type_chk(x[i].getAttribute("type")) + //type err
	    "</td><td>" +
	    var_chk(x[i].getElementsByTagName("gender")) + //gender err
	    "</td><td>" +
	    x[i].getElementsByTagName("ended")[0].childNodes[0].nodeValue + //died?
	    "</td><td>" +
	    x[i].id + //id
	    "</td></tr>";
	  }
	  document.getElementById("demo").innerHTML = table;
	}