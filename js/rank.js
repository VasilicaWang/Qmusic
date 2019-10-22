window.addEventListener('load', function() {
    var mask = this.document.querySelector('.mask');
    var maskBtn = mask.querySelector('.mask_in .btn-group');
    console.log(maskBtn)
    console.log(maskBtn.children)
    var mainRank = document.querySelectorAll('.main_rank');
    for(var i = 0; i < mainRank.length; i++) {
        mainRank[i].addEventListener('click', function() {
            mask.style.display = 'block';
            maskBtn.children[0].addEventListener('click', function() {
                mask.style.display = 'none';

            })
        })
    }
})