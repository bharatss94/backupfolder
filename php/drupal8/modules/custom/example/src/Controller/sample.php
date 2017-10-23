<?php

namespace Drupal\example\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class sample.
 */
class sample extends ControllerBase {

  /**
   * Hello.
   *
   * @return string
   *   Return Hello string.
   */
  public function hello() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Hi welcome to infanion')
    ];
  }

}
