<?php
namespace App\Tests\Controller;

use App\Controller\CardController;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class CardControllerTest extends WebTestCase
{
  public function testCardsApi(){
    $client=static::createClient();
    $client->request('GET', '/card/api');

    $this->assertEquals(200, $client->getResponse()->getStatusCode());
  }



}

?>
