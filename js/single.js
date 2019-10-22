window.addEventListener('load', function() {
    var mask = document.querySelector('.mask');
    mask.style.display = 'block';
    var maskBtn = mask.querySelector('.mask_in .btn-group');
    maskBtn.children[0].addEventListener('click', function() {
        mask.style.display = 'none';
    })
})