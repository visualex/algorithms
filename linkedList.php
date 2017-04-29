<?php
class Node
{
    public $prev = null;
    public $next = null;
    public $value = null;
    public function __construct($value) {
        $this->value = $value;
    }
}

class LinkedList
{
    public $first = null;
    public $last = null;
    public $count = 0;

    public function addToEnd($data)
    {
        $node = new Node($data);
        if ($this->last !== null) {
            $node->prev = $this->last;
        }
        $this->count++;
        return $this->last = &$node;
    }

    public function getLastN($elementN)
    {
        $node = $this->last;
        for ($i = 1; $i < $elementN; $i++) {
            $node = $node->prev;
            if ($node === null) {
                return 'NIL';
            }
        }
        return $node->value;
    }
}

// test case, getting an element n from the end
$task = explode("\n", file_get_contents("php://stdin", "r"));
$ll = new LinkedList;
$numbers = explode(' ', $task[1]);
foreach($numbers as $number) {
  $ll->addToEnd((int) $number);
}
echo $ll->getLastN((int) $task[0]), "\n";
