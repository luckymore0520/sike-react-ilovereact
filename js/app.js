window.onload = function() {
	animationLogo();
	animateRobot();
	updateSliderControl();
	addSmoothScrolling();
	addIntroBackgroundScrollMagic();
	addiPhoneScrollMagic();
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

function updateSliderControl() {
  // get all the slider links
  var links = document.querySelectorAll("#slider-control a")
  var sections = ["#intro-section","#native","#touch","#android"];
  for(var i = 0; i < links.length; i++) {
    var link = links[i];
    var section = document.querySelector(sections[i]);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetHeight + sectionTop;
    if(window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}

function scrollToElement(element) {
  var topOfElement = document.querySelector(element).offsetTop;
  console.log("scrollTo"+topOfElement);
  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },
    ease: Power2.easeInOut,
  });
}


function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a")
  for(var i = 0; i < links.length; i++) {
	    var link = links[i];
	    link.addEventListener("click",function(event) {
		    var href = this.getAttribute("target");
		    scrollToElement(href);
	    });
  }
}

// ScrollMagic
var controller = new ScrollMagic.Controller();
function addIntroBackgroundScrollMagic() {
	var introSection = document.querySelector("#intro-section");
	console.log(introSection.offsetHeight);
	var backgroundScrollMagic = new ScrollMagic.Scene({
		duration:introSection.offsetHeight
	}).setTween("#animateBackground",{opacity:1.0})
	.addTo(controller);
}

function addiPhoneScrollMagic() {
	var introSection = document.querySelector("#intro-section");
	console.log(introSection.offsetHeight);
	var iphoneScrollMagic = new ScrollMagic.Scene({
		duration:introSection.offsetHeight
	}).setTween("#iphone-overlay",{width:"50%",y:0})
	.addTo(controller);

	var iphonePinScrollMagic = new ScrollMagic.Scene({
		triggerElement:"#native",
		triggerHook:"onLeave",
		duration:"100%"
	}).addTo(controller).setPin("#iphone-overlay");
}

window.onscroll = function() {
  updateSliderControl();
}
