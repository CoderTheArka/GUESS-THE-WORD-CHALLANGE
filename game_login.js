function Ready(){
    Player_1 = document.getElementById('abcd').value;
    Player_2 = document.getElementById('abcde').value;

    localStorage.setItem('Player 1 Name ',Player_1);
    localStorage.setItem('Player 2 Name ',Player_2);
    window.location="game_page.html";
}
