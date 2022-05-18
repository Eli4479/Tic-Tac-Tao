const reset = document.querySelector('#reset');
const square = document.querySelectorAll(".square");
const player_x = document.querySelector(".player_x")
const player_o = document.querySelector(".player_o")
const winner_declare = document.querySelector("#winner_declare");
const cotainer = document.querySelector('.container');
const title = document.querySelector('.sub_title');
const x_time = document.querySelector('#x_time');
const o_time = document.querySelector('#o_time');


reset.addEventListener('click', () => {
    location.reload();
})
const divsArr = Array.from(square);

var timer = setInterval(() => {
    if (player_o.classList.contains('current_player') && parseInt(o_time.textContent) > 0) {

        var time_o = parseInt(o_time.textContent);
        time_o--;
        o_time.textContent = time_o;
    }
    if (player_x.classList.contains('current_player') && parseInt(x_time.textContent) > 0) {

        var time_x = parseInt(x_time.textContent);
        time_x--;
        x_time.textContent = time_x;
    }
    if (parseInt(o_time.textContent) === 0) {
        winner_declare.textContent = 'X WIN,now reset the game';
        cotainer.classList.add('pointer_event');
        clearInterval(timer);
    }
    if (parseInt(x_time.textContent) === 0) {
        winner_declare.textContent = 'O WIN,now reset the game';
        cotainer.classList.add('pointer_event');
        clearInterval(timer);
    }

}, 1000);




divsArr.forEach(div => {
    div.addEventListener('click', () => {
        if (player_o.classList.contains('current_player')) {
            div.textContent = 'o';
            player_o.classList.toggle('current_player');
            player_x.classList.toggle('current_player');
            div.classList.add('pointer_event')
            div.classList.add('o_cell')
            check_win()
        } else {
            div.textContent = 'x';
            player_o.classList.toggle('current_player');
            player_x.classList.toggle('current_player');
            div.classList.add('pointer_event')
            div.classList.add('x_cell')
            check_win()
        }
    })
    function check_win() {

        if (divsArr[0].classList.contains('x_cell') && divsArr[1].classList.contains('x_cell') && divsArr[2].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }
        if (divsArr[3].classList.contains('x_cell') && divsArr[4].classList.contains('x_cell') && divsArr[5].classList.contains('x_cell')) {

            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }
        if (divsArr[6].classList.contains('x_cell') && divsArr[7].classList.contains('x_cell') && divsArr[8].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }



        if (divsArr[0].classList.contains('x_cell') && divsArr[3].classList.contains('x_cell') && divsArr[6].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }
        if (divsArr[1].classList.contains('x_cell') && divsArr[4].classList.contains('x_cell') && divsArr[7].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }
        if (divsArr[2].classList.contains('x_cell') && divsArr[5].classList.contains('x_cell') && divsArr[8].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }



        if (divsArr[0].classList.contains('x_cell') && divsArr[4].classList.contains('x_cell') && divsArr[8].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }
        if (divsArr[2].classList.contains('x_cell') && divsArr[4].classList.contains('x_cell') && divsArr[6].classList.contains('x_cell')) {
            winner_declare.textContent = 'X WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }



        if (divsArr[0].classList.contains('o_cell') && divsArr[1].classList.contains('o_cell') && divsArr[2].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }
        if (divsArr[3].classList.contains('o_cell') && divsArr[4].classList.contains('o_cell') && divsArr[5].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);

        }
        if (divsArr[6].classList.contains('o_cell') && divsArr[7].classList.contains('o_cell') && divsArr[8].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }

        if (divsArr[0].classList.contains('o_cell') && divsArr[3].classList.contains('o_cell') && divsArr[6].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }
        if (divsArr[1].classList.contains('o_cell') && divsArr[4].classList.contains('o_cell') && divsArr[7].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            console.log('o win');
        }
        if (divsArr[2].classList.contains('o_cell') && divsArr[5].classList.contains('o_cell') && divsArr[8].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }

        if (divsArr[0].classList.contains('o_cell') && divsArr[4].classList.contains('o_cell') && divsArr[8].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }
        if (divsArr[2].classList.contains('o_cell') && divsArr[4].classList.contains('o_cell') && divsArr[6].classList.contains('o_cell')) {
            winner_declare.textContent = 'O WIN,now reset the game';
            cotainer.classList.add('pointer_event');
            clearInterval(timer);
        }
    }
});