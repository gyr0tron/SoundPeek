
<?php 
	$var_html=NULL;
	$option = $_POST['tos'];
	$query = $_POST['s_query'];
	$url = 'https://musicbrainz.org/ws/2/';
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
	 echo $var_html, " ", $query;
?>
<!--/*https://musicbrainz.org/ws/2/artist/?query=artist:taylor%20swift*-->
