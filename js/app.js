window.onload = function() {
	animationLogo();
	animateRobot();
};

function animationLogo() {
	TweenMax.fromTo("#react-logo",2, {
	    // from
	    css: {
	      y: "-20px",
	    }
	  },{
	    // to
	    css: {
	      y: "20px",
	    },

	    // 永久重复动画的选项
	    repeat: -1,

	    // 反转、重新运行动画的选项
	    yoyo: true,

	    ease: Power2.easeInOut
	  });
}

function animateRobot() {
	var t = new TimelineMax({yoyo:true,repeat:-1});
	t.to("#android-robot",0.5,{rotation: "-50deg"})
  	.to("#android-robot",0.5,{rotation: "-40deg"});

}