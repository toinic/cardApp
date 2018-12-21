<?php
namespace App\Tests\Util;

use App\Util\Calculator;
use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
  public function testAdd(){
    $calculator=new Calculator();
    $result=$calculator->add(10,32);

    $this->assertEquals(42, $result);
  }

  public function testMultiply(){
    $calculator=new Calculator();
    $result=$calculator->multiply(10,32);

    $this->assertEquals(320, $result);
  }



}

?>
