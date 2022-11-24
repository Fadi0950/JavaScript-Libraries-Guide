<?php

$host = "localhost";
$db = "analytics";
$user = "root";
$password = "";
try{
    $conn = new PDO("mysql:host=$host;dbname=$db",$user,$password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Database connected Successfully";
}
catch(PDOException $e)
{
    echo "connection failed".$e->getMessage();
//    die("db error");
}
$data = $conn->query("select * from  members");
// while($row = $data->fetch()){
//     echo "<br>".$row['First'] . "<br>".$row['Last']."<br>".$row['Role'];
// }
//
// foreach($data as $rows) {
//     echo $rows['Role'] . "<br>";
// } 
// 

// $one = $data->fetchColumn();
// echo $one;


// $all = $data->fetchAll(PDO::FETCH_ASSOC);
// echo $all;
echo "<pre>";
print_r($all);
echo "<pre>";
?>