args = process.argv.slice(2);


function diceRoller(args)
{
	
	var numArray =[];

	for (var i = 0; i < args; i++ )
	{
		var random = Math.random() * 5 + 1;
		numArray.push(parseInt(random, 10));
	} 

return "Rolled " + args + " dice: " + numArray.toString().replace(/\,/g, ", ");

}

console.log(diceRoller(args));