<?php

include_once './framework/model.php';
include_once './models/dataset.php';

class Scenario extends Model
{

  private $dir;
  private $name;
  private $schema;
  private $response = ['status' => false, 'message' => ''];

  public function __construct () 
  {
    parent::__construct();
    $this->dir = './scenarios/';
  }

  public function init()
  {

  }


  public function getAll () {

    $responseData = [];
    $temp_files = scandir( $this->dir );

    foreach ($temp_files as $file) 
    {
      if ($file != "." && $file != ".." && $file != "Thumbs.db" && $file != basename(__FILE__)) 
      {

        $info = pathinfo($file);
        $filename = basename($file, '.' . $info['extension']);

        if ($info['extension'] == 'json') {

          $data = $this->get( $info['filename'] );
          
          $responseData[] = $data;
          // var_dump($info['filename']);

        }
        
      }
    }

    $this->response['data'] = $responseData;
    $this->respond();

  }


  public function get ( $id = null ) {

    if ($id) {

      $filename = $this->dir . $id . '.json';

      if (file_exists($filename)) {
        $file = file_get_contents($filename, true);

        if ($file) {
          $data = json_decode($file);

          if ($data) {
            
            for ( $i=0; $i<count($data->series); $i++ ) {
              $dataset = (new Dataset())->get($data->series[$i]);

              if ($dataset) {
                $data->series[$i] = $dataset;
              }
            }

          }

          $this->response['data'] = $data;
          $this->respond();

          return $data;
        }
      } else {

        $this->response['message'] = 'Scenario does not exist!';
        $this->respond();

      }

    }

    return false;

  }


  public function save ( $id = null ) {

    if (!$id) {

      // save new dataset
      echo json_encode( ['message' => 'saved new'] );

    } 

    else {

      // save existing dataset
      $data = $this->get($id);

      $requestData = isset( $_REQUEST['data'] ) ?  $_REQUEST['data'] : '';

      // file data does not exist
      //if (!$data) {

        $filename = $this->dir . $id . '.json';

        if (file_put_contents($filename, json_encode($requestData))) {
          $this->response['message'] = 'saved existing';
          $this->response['data'] = $requestData;
        }

      //}

    }

    $this->respond();

  }



  public function respond () {

    echo json_encode( $this->response );
    exit;

  }


}