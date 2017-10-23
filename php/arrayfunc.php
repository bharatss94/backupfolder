<?php
$persons1 = array("21a"=>"bharat","31b"=> "samba","41c"=> "siddhu");
print_r($persons1);
echo "<hr/> using current position<br/>";
echo current($persons1);
echo "<br/>next position<br/>";
echo next($persons1);
echo "<br/>previous  position<br/>";
echo prev($persons1);
echo "<br/>end  position<br/>";
echo end($persons1);
echo "<br/>each  position<br/>";
print_r(($persons1));
echo "<br/>";
echo "The key from the current position is: " . key($persons1)."<br/>";
echo reset($people);
echo current($persons1);


foreach($persons1 as $x=>$y)
{echo "<br/>Key=" . $x . ", Value=" . $y;
}

echo "<hr/>keys changing to upper case<br/>";
print_r(array_change_key_case($persons1,CASE_UPPER));

//print_r(array_change_value_case($persons1,CASE_UPPER));
//echo current($persons1);


?>

<?php
echo "<br/>";
$persons2=array("21"=>"Bharat","31"=>"samba","42"=>"siddhu","51"=>"snigdha");
$persons3=array("21"=>"Bharat","31"=>"samba","41"=>"siddhu","51"=>"snigdha","61"=>"madhavi");
echo "<hr/>chunk example<br/>";
print_r(array_chunk($persons2,2,true));
echo "<br/>";
print_r(array_chunk($persons2,2,false));
$names = array(
  array(
       'first_name' => 'bharat',
    'last_name' => 'shirahatti',
  ),
  array(
       'first_name' => 'samba',
    'last_name' => 'reddy',
  ),
  array(
       'first_name' => 'siddhu',
    'last_name' => 'nagesh',
  )
);
echo "<br/>";
$last_names = array_column($names, 'last_name');
echo "<hr/> array column example<br/>";
print_r($last_names);
echo "<br/>";
echo "<hr/> array count values<br/>";

print_r(array_count_values($persons1));
echo "<br/>";
echo "<hr/>array difference <br/>";
print_r(array_diff($persons3,$persons2));
echo "<br/>";
echo "<hr/> array differnce on associates<br/>";
print_r(array_diff_assoc($persons3,$persons2));


echo "<br/>";
echo " <hr/>array difference key<br/>";
print_r(array_diff_key($persons3,$persons2));
echo "<br/>";
echo "<hr/>array fill example<br/>";
$arr1=array_fill(4,3,"bharat");
$arr2=array_fill(0,2,"infanion");
print_r($arr1);
echo "<br/>";
print_r($arr2);
echo "<br/>";
$keys=array("a","b","c","d");
echo "<hr/>array fill keys<br/>";
$a1=array_fill_keys($keys,"bharat");
print_r($a1);
echo "<br/>";
echo "<hr/>flip interchanges the key abd values<br/>";
print_r(array_flip($persons1));
echo "<br/>";
echo "<hr/>array intersect<br/>";
$res=array_intersect($persons3,$persons2);
print_r($res);
echo "<br/>";
echo "<hr/> array intersect on keys<br/>";
$res=array_intersect_key($persons3,$persons2);
print_r($res);
echo "<br/>";
echo "<hr/> array intersect on associate key<br/>";
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("z"=>"red","b"=>"green","c"=>"blue");

$result=array_intersect_assoc($a1,$a2);
print_r($result);
echo "<br/>";
if(array_key_exists("31",$persons2))
{
echo "key exists in persons2 array<br/>";
}
else 
{ echo "key does not exists<br/>";
}
echo "<hr/>printing keys<br/>";
print_r(array_keys($persons2));
echo "<hr/> printing values<br/>";
print_r(array_values($persons2));
echo "<br/";
function mul($num)
{
return($num*$num);
}

$a=array(1,2,3,4,5);
echo "<hr/>mapping<br/>";
print_r(array_map("mul",$a));
echo "<br/>";
echo "<hr/>merging<br/>";
print_r(array_merge($a,$a1));

echo "<br/>";
echo "<hr/>popping of array<br/>";
array_pop($a);
echo "<br/>";
print_r($a);
echo "<br/>";
echo "<hr/>pushing of array<br/>";
array_push($a,8,9);
print_r($a);
echo "<br/>";
echo "<hr/>random keys generations<br/>";
$random_keys=array_rand($persons2,3);
echo $persons2[$random_keys[0]]."<br>";
echo $persons2[$random_keys[1]]."<br>";
echo $persons2[$random_keys[2]];
echo "<br/>";
echo "<hr/>array sum<br/>";
echo array_sum($a);
echo "<hr/> removing array duplicates<br/>";
print_r(array_unique($a1));
echo "<hr/>using range example<br/>";

$number = range(0,5,5);
print_r ($number);
echo "<br/>";
$items=array("bike","car","home");
echo "<hr/>using of list<br/>";
list($a, $b, $c) = $items;
echo "I have ,$a,  $b and  $c.";
echo "<hr/>array seaching based on value and return keys<br/>";
echo array_search("siddhu",$persons1);
echo"<hr/> shifting of array and display which value is removed<br/>";
$b=array("a"=>"red","b"=>"green","c"=>"blue");
echo array_shift($b)."<br>";
print_r ($b);
echo "<hr/> unshifting adding one or more elements at the beginning<br/>";
array_unshift($b,"white");
print_r($b);


echo "<hr/> merge recursive combines two array in single array<br/>";
$a1=array("a"=>"red","b"=>"green");
$a2=array("c"=>"blue","b"=>"yellow");
print_r(array_merge_recursive($a1,$a2));
echo "<hr/> array products<br/>";
$a=array(5,5);
echo(array_product($a));
echo "<br/>";
$a=array(5,5,3,56);
echo(array_product($a));
echo "<hr/> multisort sort based on values<br/>";
array_multisort($persons1);
print_r($persons1);
echo "<hr/> pad insert the values till specified range<br/>";
$a=array("red","green");
print_r(array_pad($a,5,"blue"));
echo "<hr/> slicing the elements <br/>";
$a=array("red","green","blue","yellow","brown");
print_r($a);echo "<br/>";
print_r(array_slice($a,2));
echo "<hr/> splice removes the specified element and replaces with new elements<br/>";
$a1=array("a"=>"red","b"=>"green","c"=>"blue","d"=>"yellow");
$a2=array("a"=>"purple","b"=>"orange");
print_r($a1);
array_splice($a1,0,2,$a2);echo "<br/>";
print_r($a1);
echo "<hr/> array_walk runs array element is user defined function<br/>";
function func($value,$key)
{
echo "The key $key has the value $value<br>";
}
$a=array("a"=>"red","b"=>"green","c"=>"blue");
array_walk($a,"func");
echo "<hr/> array_walk_recursive run on every array element<br/>";
function func2($value,$key)
{
echo "The key $key has the value $value<br>";
}
$a1=array("a"=>"red","b"=>"green");
$a2=array($a1,"1"=>"blue","2"=>"yellow");
array_walk_recursive($a2,"func2");
echo "<hr/> Send the values in an array to a user-defined function and return a string<br/>";
function func3($v1,$v2)
{
return $v1 . "-" . $v2;
}
$a=array("Dog","Cat","Horse");
print_r(array_reduce($a,"func3"));
echo "<hr/> shuffling an array you have to refresh the page<br/>";
print_r($a);
echo "<br/>";
shuffle($a);
print_r($a);
?>
