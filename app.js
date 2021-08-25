
	let canvas = document.getElementById('backdrop');

	let context = canvas.getContext('2d');

	context.fillStyle = "black";

	context.fillRect(0,0,500,500);



	let data = [16, 68,20, 30, 54];

	const drawBars=() =>	{

		context.fillStyle = 'green';

		for(let i = 0 ;i < data.length;i++) {

			let dp = data[i];

			context.fillRect(30 + i * 100, 30, 50 , dp * 5 );


		}
		
	}


	drawBars();




	
