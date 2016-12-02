$(function(){
	var Banner = {
		img: $('.sld-ad-img'),
		arrow: $('.arrow a'),
		circle: $('.circle'),
		timer: null,
		now: 0,
		next: 0,
		
		init: function(){
			this.circle();
			this.arrowClick();
			this.mouseEnter();
			this.circleMouse();
			
		},
		circle: function(){
			var content = '';
			this.img.each(function(i){
				content += '<span class="circle-item" data-item="'+i+'"></span>'
			});
			$('.circle').html(content);
			$('.circle-item').eq(0).addClass('active');
		},
		arrowClick: function(){
			var that = this;
			this.arrow.eq(1).click(function(){
				that.next++
				that.next %= that.img.length;
				that.move();
				console.log(1);
			})
			this.arrow.eq(0).click(function(){
				if(that.next == 0){
					that.next = that.img.length - 1;
				}else{
					that.next--;
				}
				that.move();
			})
			this.autoMove()
		},
		autoMove: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++
				that.next %= that.img.length;
				that.move();
			},3000)
		},
		mouseEnter: function(){
			var that = this;
			$('#banner').hover(function(){
				clearInterval(that.timer);
			},function(){
				that.autoMove();
			})
		},
		move: function(){
				$('.circle-item').eq(this.now).removeClass('active');
				$('.circle-item').eq(this.next).addClass('active');
				this.img.eq(this.now).fadeOut();
				this.img.eq(this.next).fadeIn();
				this.now = this.next;
		},
		circleMouse: function(){
			var that = this;
			$('.circle').on('mouseenter','span',function(ev){
				var target = ev.target;
				if(target.tagName == 'SPAN'){
					that.next = $(target).attr('data-item');
					that.move();
				}
			})
		}
	}
	Banner.init();
	$('.edge').click(function(){
		$('.edge').animate({
			right: 0
		})
	})
	$(".edge").siblings().click(function(){
		$('.edge').animate({
			right: -300
		})
	})
})