
		<script>

			//comments
			/*theres
				more and 
					more comments*/
			{document.write("<h1>dude</h1>");}
			{document.write("<p>dudical</p>")}

			//variables my dude

			var myDude;
			// assign a value
			myDude = 100;
			var myDude = 100;

			// these are numbers 
			num1 = 123;
			num2 = 345;

			// these are strings
			str1 = "what does your tattoo say"
			str2 = "dude"

			//boolean chicken or beef?
			bool1 = true;
			bool2 = 1;
			bool3 = false;
			bool4 = 0;

			//arrays my dude
			var movies = ["big lebowski" , " baker boys "];
			document.getElementById("forArray").innerHTML = movies[1];

			//arrayception
			var actors = ["chris rock", "the rock", "rock hudson"];
			var films = ["purple rain", "flashdance", "fame"];
			var af = [["chris rock", "the rock", "rock hudson"],["purple rain", "flashdance", "fame"]]
			console.log(af[0][2]); 

			//combo
			var actors = ["chris rock", "the rock", "rock hudson"];
			var films = ["purple rain", "flashdance", "fame"];
			var combo = [["chris rock", "the rock", "rock hudson"],["purple rain", "flashdance", "fame"]]
			console.log(combo[1][2]); 


			//outputs
			
			console.log(50 + 50);
			console.log("dude"+" "+"wheres"+" "+"my"+" "+"car");
			console.log("forty40"+"40");
			console.log(80 * 80);

			alert("duuuude");
			alert(5 + 6);

			document.write("<p> what does my mine say?</p><br>")
			document.write(11+7+"and then");
			//suhwweet pi - chers
			document.write("<img src='http://billypenn.com/wp-content/uploads/2015/04/Dude-wheres-my-car.gif' style='height:25%;width:25%'>");
			document.getElementById("bro").innerHTML = 60/2 + "is";
			document.getElementById("bro2").innerHTML = 60 + " " + "divided" + " " + 2
			
			//comparisons testing examples
			console.log(5 === 2);
			document.write(5 !== 4);
			alert(10 > 40);
			console.log(10 < 100 );
			document.write(61 >= 74);
			alert(20 <= 21);

			//if statements Conditionals
			/* if (condition)
			{
			execute if condition is true
			} */

			var t;
			var t = 10;
			if (5 < t)
			{
			 console.log("hey man");
			}

			/* if (condition)
			{execute if condition is true}
			else
			{execute if condition is false}
			*/

			var bob;
			var bob = 20;
			if (3 > 20)
			{
				document.write("somehow 3 is bigger than 20")
			}
			else
			{
				document.write("man you know 3 is less than 20.")
			}

			/*if (condition)
			{execute if condition is true}
			else if
			{execute if condition is true}
			else
			{execute if condition is false}
			*/

			var chester;
			var chester = 1;
			if (chester<=0)
			{
				alert("maybe it's a negative");
			}
			else if (chester>=0)
			{
				alert("whoa");
			}
			else
			{
				document.write("nah brah");
			}
			
			/*functions
			function (whatever u wanna call it)funcname(var1,...)
			{
				code
			} */

			var x = 250
			var tax = .08375
			function addit(x,tax)
			{
				return(x * tax + x);
			}
			console.log (addit(x,tax));
			alert("yah been taxed!")

		</script>
	