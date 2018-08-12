<?php

class Model
{

  private $name;
  private $schema;
  private $response = ['status' => false, 'message' => ''];

  public function __construct () 
  {
    
  }

  public function init()
  {
    
  }


  public function respond () {

    echo json_encode( $this->response );
    exit;

  }


}