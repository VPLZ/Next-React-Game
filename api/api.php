<?php
require_once './config/api_config.php';
header('Access-Control-Allow-Origin: *');
$sql_query = "SELECT * FROM stats";
$stats_Rq = $connect->prepare($sql_query);
$stats_Rq->execute();
while($row = $stats_Rq->fetch(mode: PDO::FETCH_ASSOC)){
  echo $row['caracteristics'];
}
