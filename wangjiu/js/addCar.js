$(function(){
	$('.flash').mouseenter(function(){
		$(this).find($('.addCar')).stop().animate({
			'bottom': 0
		},200)
	})
	$('.flash').mouseleave(function(){
		$(this).find($('.addCar')).stop().animate({
			'bottom': -50
		},200)
	})
	$('.img').parent().hover(function(){
		$(this).find($('.addCar')).stop().animate({
			'bottom': 0
		},200)
	},function(){
		$(this).find($('.addCar')).stop().animate({
			'bottom': -50
		},200)
	})
})
