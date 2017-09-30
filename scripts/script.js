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
		//checks
		var dat_chk_temp = xmlDoc.getElementsByTagName("artist-list");		
		if (dat_chk_temp[0].firstChild) {
			var table="<tr><th>Artist</th><th>%Match</th><th>Country</th><th>type</th><th>Gender</th><th>Died?</th><th>ID</th></tr>";
			var x = xmlDoc.getElementsByTagName("artist");
			var y = xmlDoc.getElementsByTagName("area");
			//iterates
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
				table += "<tr class = \"clickable\"><td onclick = \"clickity("+i+")\">" +
				x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + //name
				"</td><td onclick = \"clickity("+i+")\">" +
				score_attr + //%score
				"</td><td onclick = \"clickity("+i+")\">"+
				var_chk(x[i].getElementsByTagName("country")) + //country err
				"</td><td onclick = \"clickity("+i+")\">" +
				type_chk(x[i].getAttribute("type")) + //type err
				"</td><td onclick = \"clickity("+i+")\">" +
				var_chk(x[i].getElementsByTagName("gender")) + //gender err
				"</td><td onclick = \"clickity("+i+")\">" +
				x[i].getElementsByTagName("ended")[0].childNodes[0].nodeValue + //died?
				"</td><td onclick = \"clickity("+i+")\">" +
				x[i].id + //id
				"</td></tr>";
				}
			document.getElementById("demo").innerHTML = table;
		} else {
			document.getElementById("hdr").innerHTML = "No Data Found!";
			var element = document.getElementById("demo");
			return element.parentNode.removeChild(element);
		}
		
	}

	