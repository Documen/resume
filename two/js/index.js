$(function() {
	//背景轮播
	var i = 0;
	var j = 0;
	var k = 0;
	var m = 0;
	var s = 0;
	$('.kuai').bind('click', function() {
		$('.header-1 ul').slideToggle();
	});
	setInterval(function() {
		$('.shadow-1>img').eq(i).animate({
			'opacity': '0.1'
		}, 500);
		i++;
		if(i == 3) {
			i = 0;
		}
		$('.shadow-1>img').eq(i).animate({
			'opacity': '1'
		}, 500);
	}, 3000);
	//小卡片
	var lis = document.getElementById('box-2a').getElementsByTagName('li');
	$('.box-2a>ul>li').bind('click', function() {
		if(lis[0].style.transform == 'rotate(0deg)') {
			$('.box-2a>ul>li').css('transformOrigin', '25% 100%');
			setTimeout(function(){
				$('.box-2a>ul>li').eq(0).css('transform', 'rotate(-45deg)');
				$('.box-2a>ul>li').eq(1).css('transform', 'rotate(-32.1429deg)');
				$('.box-2a>ul>li').eq(2).css('transform', 'rotate(-19.2857deg)');
				$('.box-2a>ul>li').eq(3).css('transform', 'rotate(-6.42857deg)');
				$('.box-2a>ul>li').eq(4).css('transform', 'rotate(6.42857deg)');
				$('.box-2a>ul>li').eq(5).css('transform', 'rotate(19.2857deg)');
				$('.box-2a>ul>li').eq(6).css('transform', 'rotate(32.1429deg)');
				$('.box-2a>ul>li').eq(7).css('transform', 'rotate(45deg)');
			},300);
		} else {
			if($(this).index() == 7) {
				$('.box-2a>ul>li').css({'transform': 'rotate(0deg)'});
				setTimeout(function(){
					$('.box-2a>ul>li').css({
						'transform': 'rotate(0deg)',
						'transformOrigin': '50% 200%'
					});
				},300);
			} else {
				console.log($(this));
				var n = $(this).index();
				$(this).css({
					'opacity': '0'
				});
				$('.box-2a>ul>li').css({
					'transform': 'rotate(0deg)',
					'transformOrigin': '50% 200%'
				});
				setTimeout(function() {
					$('.box-2a>ul>li').eq(n).css({
						'transform': 'translateZ(1000px) rotate(20deg)'
					});
					$('.box-2a>ul>li').eq(n).appendTo($('.box-2a>ul'));
					$('.box-2a>ul>li').last().css({
						'opacity': '1',
						'transform': 'translateZ(0px) rotate(0deg)'
					});
					$('.box-2a>ul>li').css('transformOrigin', '50% 200%');
				}, 300);
			}
			/*$(this).appendTo($('.box-2a>ul'));*/
		}

	});

	$('.small').bind('click', function() {
		$('.box-2a>ul>li').css('transform', 'rotate(0deg)');
	});
	$('.big').bind('click', function() {
		if(lis[0].style.transform == 'rotate(0deg)') {
			$('.box-2a>ul>li').eq(0).css('transform', 'rotate(-50deg)');
			$('.box-2a>ul>li').eq(1).css('transform', 'rotate(-35.7143deg)');
			$('.box-2a>ul>li').eq(2).css('transform', 'rotate(-21.4286deg)');
			$('.box-2a>ul>li').eq(3).css('transform', 'rotate(-7.14286deg)');
			$('.box-2a>ul>li').eq(4).css('transform', 'rotate(7.14286deg)');
			$('.box-2a>ul>li').eq(5).css('transform', 'rotate(21.4286deg)');
			$('.box-2a>ul>li').eq(6).css('transform', 'rotate(35.7143deg)');
			$('.box-2a>ul>li').eq(7).css('transform', 'rotate(50deg)');
		} else {
			$('.box-2a>ul>li').css('transform', 'rotate(0deg)');
			setTimeout(function() {
				$('.box-2a>ul>li').eq(0).css('transform', 'rotate(-50deg)');
				$('.box-2a>ul>li').eq(1).css('transform', 'rotate(-35.7143deg)');
				$('.box-2a>ul>li').eq(2).css('transform', 'rotate(-21.4286deg)');
				$('.box-2a>ul>li').eq(3).css('transform', 'rotate(-7.14286deg)');
				$('.box-2a>ul>li').eq(4).css('transform', 'rotate(7.14286deg)');
				$('.box-2a>ul>li').eq(5).css('transform', 'rotate(21.4286deg)');
				$('.box-2a>ul>li').eq(6).css('transform', 'rotate(35.7143deg)');
				$('.box-2a>ul>li').eq(7).css('transform', 'rotate(50deg)');
			}, 300);
		}
	});
	$('.next').bind('click', function() {
		if(lis[0].style.transform == 'rotate(0deg)') {
			$('.box-2a>ul>li').last().css({
				'left': '85%',
				'transform': 'rotate(5deg)'
			});
			setTimeout(function() {
				$('.box-2a>ul>li').last().prependTo($('.box-2a>ul'));
				$('.box-2a>ul>li').first().css({
					'left': '85%',
					'transform': 'rotate(5deg)'
				});
				setTimeout(function() {
					$('.box-2a>ul>li').first().css({
						'left': '0px',
						'transform': 'rotate(0deg)'
					});
				}, 100);
			}, 300);
		} else {
			$('.box-2a>ul>li').css({
				'transform': 'rotate(0deg)',
				'transition': 'all 0.3s ease'
			});
			setTimeout(function() {
				$('.box-2a>ul>li').last().css({
					'left': '85%',
					'transform': 'rotate(5deg)'
				});
				setTimeout(function() {
					$('.box-2a>ul>li').last().prependTo($('.box-2a>ul'));
					$('.box-2a>ul>li').first().css({
						'left': '85%',
						'transform': 'rotate(5deg)'
					});
					setTimeout(function() {
						$('.box-2a>ul>li').first().css({
							'left': '0px',
							'transform': 'rotate(0deg)'
						});
					}, 100);
				}, 300);
			}, 300);
		}

	});
	$('.prev').bind('click', function() {
		if(lis[0].style.transform == 'rotate(0deg)') {
			console.log(1);
			$('.box-2a>ul>li').first().css({
				'left': '-85%',
				'transform': 'rotate(-5deg)'
			});
			setTimeout(function() {
				$('.box-2a>ul>li').first().appendTo($('.box-2a>ul'));
				$('.box-2a>ul>li').last().css({
					'left': '-85%',
					'transform': 'rotate(-5deg)'
				});
				setTimeout(function() {
					$('.box-2a>ul>li').last().css({
						'left': '0px',
						'transform': 'rotate(0deg)'
					});
				}, 10);
			}, 300);
		} else {

			$('.box-2a>ul>li').css({
				'transform': 'rotate(0deg)',
				'transition': 'all 0.3s ease'
			});
			setTimeout(function() {
				$('.box-2a>ul>li').first().css({
					'left': '-85%',
					'transform': 'rotate(-5deg)'
				});
				setTimeout(function() {
					$('.box-2a>ul>li').first().appendTo($('.box-2a>ul'));
					$('.box-2a>ul>li').last().css({
						'left': '-85%',
						'transform': 'rotate(-5deg)'
					});
					setTimeout(function() {
						console.log(1);
						$('.box-2a>ul>li').last().css({
							'left': '0px',
							'transform': 'rotate(0deg)'
						});
					}, 100);
				}, 300);
			}, 300);
		}

	});

	//文字
	$(window).scroll(function() {
		if($('body').scrollTop() >= 800 && $('body').scrollTop() <= 1400) {
			s += 1;
			if(s == 1) {

				$('.box-2a>ul>li').eq(0).css('transform', 'rotate(-50deg)');
				$('.box-2a>ul>li').eq(1).css('transform', 'rotate(-35.7143deg)');
				$('.box-2a>ul>li').eq(2).css('transform', 'rotate(-21.4286deg)');
				$('.box-2a>ul>li').eq(3).css('transform', 'rotate(-7.14286deg)');
				$('.box-2a>ul>li').eq(4).css('transform', 'rotate(7.14286deg)');
				$('.box-2a>ul>li').eq(5).css('transform', 'rotate(21.4286deg)');
				$('.box-2a>ul>li').eq(6).css('transform', 'rotate(35.7143deg)');
				$('.box-2a>ul>li').eq(7).css('transform', 'rotate(50deg)');
			}
		}
		if($('body').scrollTop() >= 1400 && $('body').scrollTop() <= 1700) {
			$('.box-33a').css({
				'left': '0px',
				'top': '0px',
				'opacity': '1'
			});
			$('.box-33b').css({
				'left': '0px',
				'top': '0px',
				'opacity': '1'
			});
		}
		if($('body').scrollTop() >= 1600 && $('body').scrollTop() <= 1800) {
			$('.box-33d').css({
				'left': '0px',
				'top': '0px',
				'opacity': '1'
			});
			$('.box-33c').css({
				'left': '0px',
				'top': '0px',
				'opacity': '1'
			});
		}
		if($('body').scrollTop() >= 2200 && $('body').scrollTop() <= 2700) {
			j += 1;
			if(j == 1) {
				$('.box-4aaone').animate({
					'left': '0px',
					'opacity': '1'
				}, 1000, function() {
					$('.box-4aaone').animate({
						'left': '-30px'
					}, 200, function() {
						$('.box-4aaone').animate({
							'left': '0px'
						}, 200);
					});
				});
			}
		}
		if($('body').scrollTop() >= 2800 && $('body').scrollTop() <= 3200) {
			k += 1;
			if(k == 1) {
				$('.box-4aatwo').animate({
					'left': '0px',
					'opacity': '1'
				}, 1000, function() {
					$('.box-4aatwo').animate({
						'left': '30px'
					}, 200, function() {
						$('.box-4aatwo').animate({
							'left': '0px'
						}, 200);
					});
				});
			}
		}
		if($('body').scrollTop() >= 3200 && $('body').scrollTop() <= 3700) {
			$('.box-6>h3').animate({
				'left': '50%',
				'opacity': '1'
			}, 500);
		}
		if($('body').scrollTop() >= 3800 && $('body').scrollTop() <= 5100) {
			$('.box-7sp').animate({
				'top': '0px',
				'opacity': '1'
			}, 500);
		}
		if($('body').scrollTop() >= 4900 && $('body').scrollTop() <= 5400) {
			$('.box-8sp').css({
				'left': '0%',
				'top': '0%',
				'transform': 'rotate(0deg)',
				'opacity': '1'
			});
		}
		if($('body').scrollTop() >= 5400 && $('body').scrollTop() <= 6400) {
			$('.box-9k').css({
				'left': '0%',
				'transform': 'rotateY(3600deg)'
			});
		}
		if($('body').scrollTop() >= 7300 && $('body').scrollTop() <= 8300) {
			m += 1;
			if(m == 1) {
				$('.box-12sp').css({
					'left': '0px',
					'transform': 'rotateY(40deg) '
				});
				setTimeout(function() {
					$('.box-12sp').css({
						'transform': 'rotateY(-30deg) '
					});
					setTimeout(function() {
						$('.box-12sp').css({
							'transform': 'rotateY(30deg) '
						});
						setTimeout(function() {
							$('.box-12sp').css({
								'transform': 'rotateY(0deg) '
							});
						}, 600);
					}, 600);
				}, 600);
			}
		}
	});
	//图片
	$('.box-7w').hover(function() {
		$(this).find('h4').stop().animate({
			'opacity': '1'
		}, 1000).next().stop().animate({
			'opacity': '1',
			'right': '0px',
			'bottom': '0px'
		}, 1000);
		$(this).find('.hei').stop().animate({
			'opacity': '0.5'
		}, 1000);
		$(this).find('img').css('transform', 'scale(1.2,1.2)');
	}, function() {
		$(this).find('h4').stop().animate({
			'opacity': '0'
		}, 1000).next().stop().animate({
			'opacity': '0',
			'right': '-21%',
			'bottom': '-28%'
		}, 1000);
		$(this).find('.hei').stop().animate({
			'opacity': '0'
		}, 1000);
		$(this).find('img').css('transform', 'scale(1,1)');
	});
	console.log($('body').scrollTop());
	//选项卡
	$('.box-8img>div').bind('click', function() {
		var i = $(this).index();
		$('.box-8wenzi>div').eq(0).css('left', '' + -i * 100 + '%');
		$('.box-8wenzi>div').eq(1).css('left', '' + (-i * 100 + 100) + '%');
		$('.box-8wenzi>div').eq(2).css('left', '' + (-i * 100 + 200) + '%');
		$('.box-8img>div').find('img').removeClass('cur');
		$(this).find('img').addClass('cur');
	});
});