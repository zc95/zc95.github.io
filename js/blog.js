$.BLOG = {
	init: function() {
		this.basic();
		this.menu();
		this.toc().scroll(0);
		this.toc().go();
		this.scroll();
		this.resize();
		this.goTop().active();
		this.share();
		this.header();
		this.search().init();
		this.reward();
		this.waves();
		this.mask();
		this.waterfall();
		this.tabBar();
	},
	basic: function() {
		$.page().loaded();
	},
	menu: function() {
   		$.toggleMenu().init();
	},
	header: function(top) {
		if (!top) {
			var top = $(window).scrollTop();
		}
		$.fixedHeader(top);
	},
	toc: function() {
		var toc = $('#post-toc');
		return {
			scroll: function(top) {
				if (!toc.length) return;
				$.toc().fixed(top);
				$.toc().actived(top);
			},
			go: function() {
				if (!toc.length) {
					$('.post-article').css("width", "100%");
					return;
				};
				$.toc().go();
			}
		}
	},
	goTop: function() {
		return {
			active: function() {
				$.toggleGoTop().active();
			},
			scroll: function(top) {
				$.toggleGoTop().scroll(top);
			}
		}
	},
	share: function() {
		$.share();
	},
	search: function() {
		return {
			init: function() {
				$.search().init();
				$.search().zoom();
			},
			zoom: function() {
				$.search().zoom();
			},
		}
	},
	waves: function(){
		$.waves();
	},
	reward: function() {
		$.reward();
	},
	mask: function() {
		$.mask();
	},
	waterfall: function() {
		$.waterfall();
	},
	tabBar: function() {
		$.tabBar();
	},
	scroll: function() {
		$(window).scroll(function() {
			var top = $(window).scrollTop();
			$.BLOG.toc().scroll(top);
			$.BLOG.header(top);
			$.BLOG.goTop().scroll(top);
			$.BLOG.waterfall();
		});
	},
	resize: function() {
		$(window).resize(function() {
			var top = $(window).scrollTop();
			$.BLOG.toc().scroll(top);
			$.BLOG.search().zoom();
		});
	}
};

$.BLOG.init();