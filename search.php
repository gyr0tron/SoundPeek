
<?php 
	$var_html=NULL;
	$option = $_POST['tos'];
	$querytemp = $_POST['s_query'];
	$query = rawurlencode ($querytemp);
	$url = 'https://musicbrainz.org/Sws/2/';
	if ($option==1) {
	 	$var_html="artist";
	 	$urid = "https://musicbrainz.org/ws/2/$var_html/?query=$var_html:$query";
	}
	if ($option==2) {
	 	$var_html="sngnm";
	}
	if ($option==3) {
		$var_html="albm";
	}
	if ($option==4) {
	 	$var_html="genre";
	}

		function download_page($path){
	    $ch = curl_init($path);
	    $fp = fopen ('./data.xml', 'w+');
	    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36');
	    curl_setopt($ch, CURLOPT_URL,$path);
		curl_setopt($ch, CURLOPT_FILE, $fp);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	    //curl_setopt($ch, CURLOPT_HEADER, 1 );
	    //curl_setopt($ch, CURLOPT_FAILONERROR,1);
	    //curl_setopt($ch, CURLOPT_FOLLOWLOCATION,1);
	    //curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
	    //curl_setopt($ch, CURLOPT_TIMEOUT, 15);
	    $retValue = curl_exec($ch);
	    curl_close($ch);
		fclose($fp);
	    return $retValue;
	}

	download_page($urid);

	//$temp = simplexml_load_file('data.xml');
	//print_r ($temp);
	//$items = simplexml_load_file('https://musicbrainz.org/ws/2/artist/?query=artist:taylor%20swift');
	//echo $items;
	//echo $sXML;
	//$ssXML = simplexml_load_string($sXML);
	//echo $ssXML;
	//$oXML = new SimpleXMLElement($sXML,null,false);
	//echo $oXML;

	//foreach($oXML->entry as $oEntry){
	//    echo $oEntry->title . "<br/>";
	//}
?>
<!--/*https://musicbrainz.org/ws/2/artist/?query=artist:taylor%20swift*-->

<!--HTML-->

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Search Result</title>
	<style>
		table, th, td {
		  border: 1px solid black;
		  border-collapse:collapse;
		}
		th, td {
		  padding: 5px;
		}
	</style>
</head>
<body onload="loadXMLDoc()">
	<table id="demo"></table>

	<script>
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
	  console.log (x);
	  for (i = 0; i <x.length; i++) { 
	  	var score_attr = x[i].getAttribute("ext:score");
	    table += "<tr><td>" +
	    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + //name
	    "</td><td>" +
	    score_attr + //score
	    "</td><td>"+
	    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + //country err
	    "</td><td>" +
	    x[i].type + //type err
	    "</td><td>" +
	    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + //gender err
	    "</td><td>" +
	    x[i].getElementsByTagName("ended")[0].childNodes[0].nodeValue + //died?
	    "</td><td>" +
	    x[i].id + //id
	    "</td></tr>";
	  }
	  document.getElementById("demo").innerHTML = table;
	}
	</script>
</body>
</html>
