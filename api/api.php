<?php
require_once './config/api_config.php';
header('Access-Control-Allow-Origin: *');
function respond($statusHTTP, $message, $json_data = []){
  http_response_code($statusHTTP);
  echo json_encode([
    "status" => $statusHTTP,
    "message" => $message,
    "data" => $json_data,
  ]);
  exit;
}

$HTTP_method = $_SERVER['REQUEST_METHOD'];
$request_path = explode("/",trim($_SERVER['PATH_INFO'], '/'));
switch($request_path[0]){
  case "users":
    if($HTTP_method == 'GET'){
      if(isset($request_path[1])){
        getUser($request_path[1], $connect);
      }else{
        getAllInfos($connect);
      }
    }else if($HTTP_method == 'POST'){

    }else{
      respond(405, "What the tabarnak");
    }
    break;
}

function postUser(int $id, String $caract_data, $connect){
  $request = executeQuery("INSERT INTO `users_cards` (`id`, `caracteristics`) VALUES ('2', '{\r\n\"Name\" : \"MiMi\"\r\n}');", $connect);
}
function getUser(int $id, $connect){
  $request = executeQuery("SELECT * FROM users_cards where id = {$id}", $connect);
  $row = $request->fetch(mode: PDO::FETCH_ASSOC);
  echo $row['caracteristics'];
}

function getAllInfos($connect){
  $request = executeQuery("SELECT * FROM users_cards", $connect);
  while($row = $request->fetch(mode: PDO::FETCH_ASSOC)){
    echo $row['caracteristics'];
  }
}

function executeQuery($query, $connect){
  $request_query = $query;
  $request = $connect->prepare($request_query);
  $request->execute();
  return $request;
}