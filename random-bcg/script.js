const hexNum = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


const randomColor = () => {
    var hexArr = '#';
    while (hexArr.length < 7 ) {
        var random = Math.floor(Math.random() * hexNum.length);
        hexArr += hexNum[random];
    }
    $('body').css('background-color',hexArr);
    $('.hexCode').text(hexArr);
};

$('#btn').on('click',randomColor);