<?php

//include_once 'collections/nodes.php';
//include_once 'collections/paths.php';
include_once 'models/dataset.php';
include_once 'models/scenario.php';

// include_once 'functions.php';

class App {

  public function __construct() {

    //$this->nodes = new Nodes();
    //$this->paths = new Paths();

    //$this->scenario = new Scenario();

  }


  public function init () {

    // load necesary models

    $this->dataset = new DataSet();
    $this->scenario = new Scenario();

  }


  public function listen () {

    $model = isset( $_REQUEST['model'] ) ?  $_REQUEST['model'] : '';
    $action = isset( $_REQUEST['action'] ) ?  $_REQUEST['action'] : '';
    $id = isset($_REQUEST['id']) ? $_REQUEST['id'] : 1;


    if ( !$model ) {
      // TODO
    }



    switch ($model) {

      case 'dataset':
        $dataset = new Dataset();
        $dataset->{$action}($id);
        break;

      case 'scenario':
        $scenario = new Scenario();
        $scenario->{$action}($id);
        break;

    }



    if ($action) {

      switch ($action) {
        
        case 'save_nodes':
          //$this->nodes->save();
          break;

        case 'save_paths':
          //$this->paths->save();
          break;

        case 'scenario':
          //$this->scenario->get($id);
          break;

      }

    }

  }

}

?>
