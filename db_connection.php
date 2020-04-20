<?php
$vid_dokument = $_POST['vid_dokument'];

$host = "db4free.net";
$dbusername = "otivam";
$dbpassword = "920711864248Aa!";
$dbname = "orders_archive";

$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);


if (mysqli_connect_error()){
  die('Connect Error ('. mysqli_connect_errno() .') '
  . mysqli_connect_error());
}
else{
  $sql = "INSERT INTO orders (vid_dokument)
  values ('$vid_dokument')";
  if ($conn->query($sql)){
    echo "New record is inserted sucessfully";
  }
  else{
    echo "Error: ". $sql ."
    ". $conn->error;
  }
$conn->close();
}



?>
