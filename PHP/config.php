<?php 
    $connect = mysqli_connect("localhost","root",'',"real_time_chat_app");
    if($connect){
        echo"Database connected". mysqli_connect_error();
    }else{
        echo "Error";    
    }
?>