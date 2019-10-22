window.addEventListener('load', function () {
	var mask = document.querySelector('.mask');
	mask.style.display = 'block';
	var closeBtn = mask.querySelector('a.close');
	closeBtn.addEventListener('click', function() {
		mask.style.display = 'none';
	})

    var nav = document.querySelectorAll('nav a');
    var main = document.querySelectorAll('main>div');
    for(var i = 0; i < nav.length; i++) {
    	nav[i].setAttribute('data-index', i);
    	nav[i].addEventListener('click', function() {
    		document.querySelector('nav .current').classList.remove('current');
    		this.classList.add('current');
    		for(var j = 0; j < main.length; j++) {
    			main[j].classList.add('hide');
    		}
    		main[this.getAttribute('data-index')].classList.remove('hide');
    	})
	};
	
	var rankList = this.document.querySelectorAll('.rank_list');
	rankList.forEach(function(ele) {
		ele.addEventListener('click', function() {
			location.href = './rank.html';
		})
	})
})