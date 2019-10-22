window.addEventListener('load', function () {
    var mask = this.document.querySelector('.mask');
    var maskBtn = mask.querySelector('.mask_in .btn-group');
    var mainRank = document.querySelectorAll('.main_rank');
    

    var mainSingle = document.querySelectorAll('.main_rank');
    mainSingle.forEach(function (ele) {
        ele.addEventListener('click', function () {
            mask.style.display = 'block';
            maskBtn.children[0].addEventListener('click', function () {
                mask.style.display = 'none';
                location.href = './single.html';
            })
        })
    })
})