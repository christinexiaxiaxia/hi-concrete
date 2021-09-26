// CURSOR TEXT

$(document).mousemove(function(e){
	$('.hi-concrete').css({'top': e.clientY + 5, 'left': e.clientX + 5})
})

$(document).mousemove(function(e){
	$('.view-live-site').css({'top': e.clientY + 5, 'left': e.clientX + 5})
})

$('.outside').hover(
	function(){
		$('.hi-concrete').css({'display':'none'})
		$('.view-live-site').css({'display':'block'})
	}, function(){
		$('.hi-concrete').css({'display':'block'})
		$('.view-live-site').css({'display':'none'})
	}
)




// SCROLL making footer navi disappear

$(document).ready(function(){
	$(window).scroll(function(){
		alert('hi')
		$('.footer').removeClass('footer-appear')
	})
})





// HOVER IMAGE following mouse

$(document).mousemove(function(e){
	$('.hoverimg').css({'top': e.clientY + 16, 'left': e.clientX - 0})
})

///////////

$('.header.more.intro.defunkt1').hover(
	function(){
		$('.hoverimg.defunkt1').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt1').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.defunkt2').hover(
	function(){
		$('.hoverimg.defunkt2').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt2').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.defunkt3').hover(
	function(){
		$('.hoverimg.defunkt3').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt3').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.defunkt4').hover(
	function(){
		$('.hoverimg.defunkt4').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt4').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.defunkt5').hover(
	function(){
		$('.hoverimg.defunkt5').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt5').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.defunkt6').hover(
	function(){
		$('.hoverimg.defunkt6').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt6').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.rave1').hover(
	function(){
		$('.hoverimg.rave1').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.rave1').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.rave2').hover(
	function(){
		$('.hoverimg.rave2').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.rave2').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.rave3').hover(
	function(){
		$('.hoverimg.rave3').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.rave3').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.seminars1').hover(
	function(){
		$('.hoverimg.seminars1').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.seminars1').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.seminars2').hover(
	function(){
		$('.hoverimg.seminars2').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.seminars2').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.seminars3').hover(
	function(){
		$('.hoverimg.seminars3').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.seminars3').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl1').hover(
	function(){
		$('.hoverimg.lpl1').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl1').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl2').hover(
	function(){
		$('.hoverimg.lpl2').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl2').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl3').hover(
	function(){
		$('.hoverimg.lpl3').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl3').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl4').hover(
	function(){
		$('.hoverimg.lpl4').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl4').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl5').hover(
	function(){
		$('.hoverimg.lpl5').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl5').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl6').hover(
	function(){
		$('.hoverimg.lpl6').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl6').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl7').hover(
	function(){
		$('.hoverimg.lpl7').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl7').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl8').hover(
	function(){
		$('.hoverimg.lpl8').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl8').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl9').hover(
	function(){
		$('.hoverimg.lpl9').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl9').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl10').hover(
	function(){
		$('.hoverimg.lpl10').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl10').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)

$('.header.more.intro.lpl11').hover(
	function(){
		$('.hoverimg.lpl11').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.lpl11').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)





// FOOTER

$('.in-page.chapter').hover(function(){
	$('.in-page.arrow').toggleClass('arrow-appear')
})


/////// opacity of chapters depending on the chapter you're current on

$('.in-page.chapter.a').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.a').removeClass('dim')
		$('.fixed.chapter.a').addClass('bright')
})

$('.in-page.chapter.b').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.b').removeClass('dim')
		$('.fixed.chapter.b').addClass('bright')
})

$('.in-page.chapter.c').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.c').removeClass('dim')
		$('.fixed.chapter.c').addClass('bright')
})

$('.in-page.chapter.d').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.d').removeClass('dim')
		$('.fixed.chapter.d').addClass('bright')
})

$('.in-page.chapter.e').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.e').removeClass('dim')
		$('.fixed.chapter.e').addClass('bright')
})

$('.in-page.chapter.f').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.f').removeClass('dim')
		$('.fixed.chapter.f').addClass('bright')
})

$('.in-page.chapter.g').click(
	function(){
		$('.footer').toggleClass('footer-appear')
		$('.fixed.chapter').addClass('dim')
		$(this).toggleClass('dim')
		$('.in-page.arrow').toggleClass('dim')

		$('.fixed.chapter.g').removeClass('dim')
		$('.fixed.chapter.g').addClass('bright')
})

$('.fixed.chapter').hover(
	function(){
		$(this).removeClass('dim')
		$(this).addClass('bright')
	}, function(){
		$(this).removeClass('bright')
		$(this).addClass('dim')
	}
)


/////// chapter links

$('.fixed.chapter.a').click(function(){
	$('div.page.landing').removeClass('up')
	$('div.page.landing').addClass('down')
})

$('.fixed.chapter.b').click(function(){
	$('div.page.page1').removeClass('up')
	$('div.page.page1').addClass('down')
})

$('.fixed.chapter.c').click(function(){
	$('div.page.page2').removeClass('up')
	$('div.page.page2').addClass('down')
})

$('.fixed.chapter.d').click(function(){
	$('div.page.page3').removeClass('up')
	$('div.page.page3').addClass('down')
})

$('.fixed.chapter.e').click(function(){
	$('div.page.page4').removeClass('up')
	$('div.page.page4').addClass('down')
})

$('.fixed.chapter.f').click(function(){
	$('div.page.page5').removeClass('up')
	$('div.page.page5').addClass('down')
})

$('.fixed.chapter.gb').click(function(){
	$('div.page.page6').removeClass('up')
	$('div.page.page6').addClass('down')
})




// CLICK TO NEXT PAGE

$('.next.landing').click(function(){
	$('div.page.landing').removeClass('down')
	$('div.page.landing').addClass('up')
	$('.bg-img-wrapper.landing').removeClass('down')
	$('.bg-img-wrapper.landing').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page1').click(function(){
	$('div.page.page1').removeClass('down')
	$('div.page.page1').addClass('up')
	$('.bg-img-wrapper.page1').removeClass('down')
	$('.bg-img-wrapper.page1').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page2').click(function(){
	$('div.page.page2').removeClass('down')
	$('div.page.page2').addClass('up')
	$('.bg-img-wrapper.page2').removeClass('down')
	$('.bg-img-wrapper.page2').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page3').click(function(){
	$('div.page.page3').removeClass('down')
	$('div.page.page3').addClass('up')
	$('.bg-img-wrapper.page3').removeClass('down')
	$('.bg-img-wrapper.page3').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page4').click(function(){
	$('div.page.page4').removeClass('down')
	$('div.page.page4').addClass('up')
	$('.bg-img-wrapper.page4').removeClass('down')
	$('.bg-img-wrapper.page4').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page5').click(function(){
	$('div.page.page5').removeClass('down')
	$('div.page.page5').addClass('up')
	$('.bg-img-wrapper.page5').removeClass('down')
	$('.bg-img-wrapper.page5').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page6').click(function(){
	$('div.page.page6').removeClass('down')
	$('div.page.page6').addClass('up')
	$('.bg-img-wrapper.page6').removeClass('down')
	$('.bg-img-wrapper.page6').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page7').click(function(){
	$('div.page.page7').removeClass('down')
	$('div.page.page7').addClass('up')
	$('.bg-img-wrapper.page7').removeClass('down')
	$('.bg-img-wrapper.page7').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.next.page8').click(function(){
	$('div.page.page8').removeClass('down')
	$('div.page.page8').addClass('up')
	$('.bg-img-wrapper.page8').removeClass('down')
	$('.bg-img-wrapper.page8').addClass('up')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})


// CLICK BACK

$('.back.page1').click(function(){
	$('div.page.landing').removeClass('up')
	$('div.page.landing').addClass('down')
	$('.bg-img-wrapper.landing').removeClass('up')
	$('.bg-img-wrapper.landing').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page2').click(function(){
	$('div.page.page1').removeClass('up')
	$('div.page.page1').addClass('down')
	$('.bg-img-wrapper.page1').removeClass('up')
	$('.bg-img-wrapper.page1').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page3').click(function(){
	$('div.page.page2').removeClass('up')
	$('div.page.page2').addClass('down')
	$('.bg-img-wrapper.page2').removeClass('up')
	$('.bg-img-wrapper.page2').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page4').click(function(){
	$('div.page.page3').removeClass('up')
	$('div.page.page3').addClass('down')
	$('.bg-img-wrapper.page3').removeClass('up')
	$('.bg-img-wrapper.page3').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page5').click(function(){
	$('div.page.page4').removeClass('up')
	$('div.page.page4').addClass('down')
	$('.bg-img-wrapper.page4').removeClass('up')
	$('.bg-img-wrapper.page4').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page6').click(function(){
	$('div.page.page5').removeClass('up')
	$('div.page.page5').addClass('down')
	$('.bg-img-wrapper.page5').removeClass('up')
	$('.bg-img-wrapper.page5').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page7').click(function(){
	$('div.page.page6').removeClass('up')
	$('div.page.page6').addClass('down')
	$('.bg-img-wrapper.page6').removeClass('up')
	$('.bg-img-wrapper.page6').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})

$('.back.page8').click(function(){
	$('div.page.page7').removeClass('up')
	$('div.page.page7').addClass('down')
	$('.bg-img-wrapper.page7').removeClass('up')
	$('.bg-img-wrapper.page7').addClass('down')

	$('.footer').removeClass('footer-appear')
	$('.in-page.arrow').removeClass('arrow-appear')
})











// LANDING PAGE IMAGE HOVER


// $('span.landing.cat').hover(
// 	function(){
// 		$(this).addClass('italic');
// 		$(this).addClass('cat-hovering');
// 		$(this).css({'cursor':'crosshair','letter-spacing':'-0.1rem'});
// 	}, function(){
// 		$(this).removeClass('italic');
// 		$(this).removeClass('cat-hovering');
// 		$(this).css({'cursor':'default','letter-spacing':'0rem'});
// 	}
// )

$('span.header.more.intro.me1').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.me1').css({'display':'block'})
	}, function(){
		$('img.bg-img.me1').css({'display':'none'})
	}
)

$('span.header.more.intro.me2').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.me2').css({'display':'block'})
	}, function(){
		$('img.bg-img.me2').css({'display':'none'})
	}
)

$('span.header.more.intro.me3').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.me3').css({'display':'block'})
	}, function(){
		$('img.bg-img.me3').css({'display':'none'})
	}
)

$('span.header.more.intro.degree').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.degree').css({'display':'block'})
	}, function(){
		$('img.bg-img.degree').css({'display':'none'})
	}
)

$('span.header.more.intro.piss').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.piss').css({'display':'block'})
	}, function(){
		$('img.bg-img.piss').css({'display':'none'})
	}
)

$('span.header.more.intro.desperate-binding').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.desperate-binding').css({'display':'block'})
	}, function(){
		$('img.bg-img.desperate-binding').css({'display':'none'})
	}
)

$('span.header.more.intro.cheesegrater').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.cheesegrater').css({'display':'block'})
	}, function(){
		$('img.bg-img.cheesegrater').css({'display':'none'})
	}
)

$('span.header.more.intro.peels').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.peels').css({'display':'block'})
	}, function(){
		$('img.bg-img.peels').css({'display':'none'})
	}
)

$('span.header.more.intro.cake').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.cake').css({'display':'block'})
	}, function(){
		$('img.bg-img.cake').css({'display':'none'})
	}
)

$('span.header.more.intro.sans').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.sans').css({'display':'block'})
	}, function(){
		$('img.bg-img.sans').css({'display':'none'})
	}
)





$('span.header.more.intro.plusplus').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.plusplus').css({'display':'block'})
	}, function(){
		$('img.bg-img.plusplus').css({'display':'none'})
	}
)

$('span.header.more.intro.nameframe').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.nameframe').css({'display':'block'})
	}, function(){
		$('img.bg-img.nameframe').css({'display':'none'})
	}
)

$('span.header.more.intro.davinci').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.davinci').css({'display':'block'})
	}, function(){
		$('img.bg-img.davinci').css({'display':'none'})
	}
)

$('span.header.more.intro.perfectone').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.perfectone').css({'display':'block'})
	}, function(){
		$('img.bg-img.perfectone').css({'display':'none'})
	}
)

$('span.header.more.intro.chalet').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.chalet').css({'display':'block'})
	}, function(){
		$('img.bg-img.chalet').css({'display':'none'})
	}
)

$('span.header.more.intro.nicki').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.nicki').css({'display':'block'})
	}, function(){
		$('img.bg-img.nicki').css({'display':'none'})
	}
)

$('span.header.more.intro.papercups').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.papercups').css({'display':'block'})
	}, function(){
		$('img.bg-img.papercups').css({'display':'none'})
	}
)

$('span.header.more.intro.ryu2').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ryu2').css({'display':'block'})
	}, function(){
		$('img.bg-img.ryu2').css({'display':'none'})
	}
)

$('span.header.more.intro.ryu4').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ryu4').css({'display':'block'})
	}, function(){
		$('img.bg-img.ryu4').css({'display':'none'})
	}
)

$('span.header.more.intro.ryu7').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ryu7').css({'display':'block'})
	}, function(){
		$('img.bg-img.ryu7').css({'display':'none'})
	}
)

$('span.header.more.intro.ryu9').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ryu9').css({'display':'block'})
	}, function(){
		$('img.bg-img.ryu9').css({'display':'none'})
	}
)

$('span.header.more.intro.ryu12').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ryu12').css({'display':'block'})
	}, function(){
		$('img.bg-img.ryu12').css({'display':'none'})
	}
)

$('span.header.more.intro.subway').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.subway').css({'display':'block'})
	}, function(){
		$('img.bg-img.subway').css({'display':'none'})
	}
)

$('span.header.more.intro.ounf').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.ounf').css({'display':'block'})
	}, function(){
		$('img.bg-img.ounf').css({'display':'none'})
	}
)

$('span.header.more.intro.animalhospital').hover(
	function(){
		$('img.bg-img').css({'display':'none'})
		$('img.bg-img.animalhospital').css({'display':'block'})
	}, function(){
		$('img.bg-img.animalhospital').css({'display':'none'})
	}
)











