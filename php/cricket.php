<?php
$count=0;
$num=array();
for ($i=1;$i<=50;$i++)
{    
	$rem=$i%6;
	$pos=$i%2;
	for($x=1;$x<=6;$x++)
	{
	 if($x==$rem)
		{
		if($pos==0)
                 { $num[$x]=6;
             	}		
		else {
 			$num[$x]=4;
        	       }
		}	


	else	{ 
  		if($pos==0)
              	{ 
		$num[$x]=2;
      		}
		else{
		$num[$x]=1;
		}

		}		
	
       
	}
   if($rem==0)
{$num[6]=6;
}
       foreach ($num as $value) {
          echo "$value ";
                }
$count=$count+array_sum($num);
echo "<br/>";		

}	
echo "total score is ".$count;
?>
