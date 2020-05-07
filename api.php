<?php
if (!session_id()) {
	session_start();
}

$allowedOrigins = array(
	'https?:\/\/localhost.*',
	'https?:\/\/.*.github.io.*'
);
//partea de cross origin si allowed origins
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] != '') {

	foreach ($allowedOrigins as $allowedOrigin) {
		$current = file_get_contents($file);
		$current .= $allowedOrigin . "\n";
		file_put_contents($file, $current);
		if (preg_match('#' . $allowedOrigin . '#', $_SERVER['HTTP_ORIGIN'])) {
			header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
			header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
			header('Access-Control-Max-Age: 1000');
			header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
			header('Access-Control-Allow-Credentials: true');

			break;
		}
	}
}

require_once("./database.php");

function echoUrl()
{
	$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

	$file = 'urls.txt';
	$current = file_get_contents($file);
	$current .= $actual_link . "\n";
	file_put_contents($file, $current);
}
/* //1st ATTEMPT
//get and post methods - SCHELET + ne luam dupa varianta in js
function callAPI($method, $url, $data){
    $curl = curl_init();
    switch ($method){
       case "POST":
          curl_setopt($curl, CURLOPT_POST, 1); //ce vrem in post -> modificam
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
          break;
       case "GET":
          curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET"); //ce vrem in get -> modificam
          if ($data)
             curl_setopt($curl, CURLOPT_POSTFIELDS, $data);			 					
          break;
       default:
          if ($data)
             $url = sprintf("%s?%s", $url, http_build_query($data));
    }
}
$get_data = callAPI('GET', 'url ul nostru'.$user['twdb']['judet'], false);
$response = json_decode($get_data, true);
$errors = $response['response']['errors'];
$data = $response['response']['data'][0];
$data_array =  array(
    "judet"        => $user['User']['customer_id'],
    "somaj"         => array(
          "numar total someri"         => $this->request->data['numar total someri'],
        //etc trb completat cu ce vrem
    ),
);
$make_call = callAPI('POST', 'https://api.example.com/post_url/', json_encode($data_array));
$response = json_decode($make_call, true);
$errors   = $response['response']['errors'];
$data     = $response['response']['data'][0];
*/

/*//2ND ATTEMPT
if($_POST){
    include_once './database.php';
 
    $database = new Database();
    $db = $database->getConnection();
     
    //stabilim ce id/valoare dam pt a folosi post ul -> ce vrem sa adaugam ca dataset/ca valoare
    $dataset->judet = $_POST['object_judet'];
     
    // delete the product
    if($dataset->post()){
        echo "Object posted";
    }
    else{
        echo "Unable to post object.";
    }
}
else
    if($_GET){
        include_once './database.php'; //ce avem de inclus + alte clase din care folosim obiecte sau ce avem nevoie
 
        $database = new Database();
        $db = $database->getConnection();
         
        //stabilim ce id/valoare dam pt a folosi post ul -> ce vrem sa adaugam ca dataset/ca valoare
        $dataset->judet = $_GET['object_judet'];
         
        // delete the product
        if($dataset->get()){
            echo "GET used";
        }
        else{
            echo "Unable to complet the GET method";
        }
    }

function post(){ //ce select vrem sa facem de ex
$sqlquert = "SELECT FROM" . $this-> table_name . "WHERE judet = ?";
$statement = $this -> conn -> prepare($query);
$statement -> bindParam(1, $this -> id);

if($result = $statement -> execute()) {
    return true;
}
else { return false; }
//la fel pt get
}

function get(){
    //ce vrem sa facem cu eax   
}*/

//third attempt si cea mai okay/easy/straightforward, in functii facem ce avem nevoie
/*
$requestMethod = $_SERVER["REQUEST_METHOD"];
include('../class/Rest.php');
$api = new Rest();
switch($requestMethod) {
	case 'POST':	
		$api->insertData($_POST);
        break;
    case 'GET':
        $api -> getData($_GET);
	default:
	header("HTTP/1.0 405");
	break;
}*/
?>