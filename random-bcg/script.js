var colors = ['green','red','blu','purple']

const changeColor = () => {
    var randomColors = Math.floor(Math.random()*colors.length)
    $('body').css({"background-color": colors[randomColors]});
}
$('#btn').on('click',changeColor);

