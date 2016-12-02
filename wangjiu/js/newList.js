$(function(){
	var newR = $('.newR');
	var index = 0;
	setInterval(function(){
		index ++
		if(index >= 3){
			newR.css({
				'marginTop': 0
			})
			index = 1
		}
		
		newR.animate({
			'marginTop': -1*index*20
		},1500)
	},2000)
})
