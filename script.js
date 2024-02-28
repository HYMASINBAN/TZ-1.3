var click = 1;
let btn = document.getElementById('btn')

btn.addEventListener('click', function (e) {
    e.target.innerHTML = click;
    click ++;
})