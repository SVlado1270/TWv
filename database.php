<?php
    $host = "localhost";
    $dbName = "twdb";
    $username = "root";
    $password = "student";
    $conn;
  
    $conn = new mysqli($host, $username, $password, $dbName);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }

      $criterion = "IASI";
      //$sqlQuery = "SELECT `numar total someri` FROM rata_mai WHERE JUDET = '" . $criterion . "'";
      $sqlQuery = "SELECT judet FROM rata_mai";
      $output = array();
      $result = $conn->query($sqlQuery);
      
      if ($result->num_rows > 0) {
        foreach($result as $row) {
          //echo "Judetul este: " . $row["JUDET"]. "<br>";
          $output[] = $row;
        }
      } else {
        //echo "No match found for your query!";
        die("Issue with your connection found". mysqli_error($connection));
      }
      $conn->close();
      echo json_encode($output);
?>