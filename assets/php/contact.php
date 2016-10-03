<?php
    if(isset($_POST)){
     
        //form validation vars
        $formok = true;         // Boolean value for validation
        $errors = array();      // Array to store error messages
        
        $to = 'barnabas@elite-education.org';

        //sumbission data
        $ipaddress = $_SERVER['REMOTE_ADDR'];   // I.P to act as first spam filter
        $date = date('d/m/Y');
        $time = date('H:i:s');
        
        //form data
        $name = $_POST['name'];    
        $email = $_POST['email'];
        $message = $_POST['message'];
        
        //form validation to go here...

        //validate name is not empty
        if(empty($name)){
            $formok = false;
            $errors[] = "You have not entered a name";
        }
        if(empty($email)){
            $formok = false;
            $errors[] = "You have not entered an email address";
        //validate email address is valid
        }elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $formok = false;
            $errors[] = "You have not entered a valid email address";
        }
        //validate message is not empty
        if(empty($message)){
            $formok = false;
            $errors[] = "You have not entered a message";
        }
        




        if($formok){
            $headers = "From: $email" . "\r\n" . 'Reply-To: $email' . "\r\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
            
            $emailbody = "<p>You have recieved a new message from the enquiries form on your website.</p>
                        <p><strong>Name: </strong> {$name} </p>
                        <p><strong>Email Address: </strong> {$email} </p>
                        <p><strong>Message: </strong> {$message} </p>
                        <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";
            
            mail($to,"New Enquiry",$emailbody,$headers);       
        }
    }
?>