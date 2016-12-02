$(function(){
	function countDown(time){
		var futureTime = Date.parse(time);
		showTime();
		setInterval(showTime,500);
		
		function addZero(num){
			if(num < 10){
				num = '0' + num;
			}
			return num;
		};
		
		function showTime(){
			var nowTime = Date.now();
			var diff = futureTime - nowTime;
			
			var hours = parseInt( diff/1000/60/60);
			var minutes = parseInt( diff/1000/60%60);
			var seconds = parseInt(diff/1000%60);
			seconds = addZero(seconds);
			minutes = addZero(minutes);
			hours = addZero(hours);
			var time = hours + ":" + minutes + ':' + seconds;
			$('.time .count').html(time);
		}
		
	};
	countDown('2017/12/02 12:00:00');
})
