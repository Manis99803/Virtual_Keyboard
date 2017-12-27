var count=0
			var cap=0
			var i=0
			var a=document.querySelector("text")
			function add(value)
			{
				if(cap==1)
				{	value=value.toUpperCase();
					document.getElementById("text").value+=value;
				}
				else if(count==1)
					{
						value=value.toUpperCase();
						document.getElementById("text").value+=value;
						count=0;
					}
				else 
				{
						
						document.getElementById("text").value+=value;
				}
			}
			function counter()
			{
			 count++;
			}
			function caps()
			{
				cap=1;
				i++
				if(i%2==0)
					cap=0
			}
			function back()
			{
				var a=document.getElementById("text").value
				
			}
			function ctrl()
			{
			 alert("Control Button is pressed")
			}
			function space()
			{
				
			 var a=document.getElementById("text").value+=String.fromCharCode(32)
			 }
			 function enter()
			 {
			  document.getElementById("text").value+='\n'
			 }
			 function tab()
			 {
			 	document.getElementById("text").value+=String.fromCharCode(32)
			 	document.getElementById("text").value+=String.fromCharCode(32)
			 	document.getElementById("text").value+=String.fromCharCode(32)
			 	document.getElementById("text").value+=String.fromCharCode(32)
			}