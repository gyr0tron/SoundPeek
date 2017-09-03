
<?php 
	$var_html=NULL;
	$option = $_POST['tos'];
	$query = $_POST['s_query'];
	$url = 'https://musicbrainz.org/Sws/2/';
	if ($option==1) {
	 	$var_html="artist";
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
	echo $var_html, " ", $query, "<br/>";

	$urid = 'https://musicbrainz.org/ws/2/artist/?query=artist:taylor%20swift';
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

	$sXML = download_page('https://musicbrainz.org/ws/2/artist/?query=artist:taylor%20swift');
	
	$temp = simplexml_load_file('data.xml');
	print_r ($temp);
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
