<?php

namespace Drupal\practice\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class WelcomeController.
 */
class WelcomeController extends ControllerBase {

  /**
   * Hello.
   *
   * @return string
   *   Return Hello string.
   */
  public function hello() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('hi welcome to infanion have aa nice day')
    ];
  }

}
