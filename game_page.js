var player_1 = localStorage.getItem('Player 1 Name ');
var player_2 = localStorage.getItem('Player 2 Name ');
player_1_score = 0;
player_2_score = 0;
document.getElementById('player_1').innerHTML = player_1+" : ";
document.getElementById('player_2').innerHTML = player_2+" : ";

document.getElementById('player_1_score').innerHTML = player_1_score;
document.getElementById('player_2_score').innerHTML = player_2_score;

document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;

function send(){
    get_word = document.getElementById('word').value;
    word = get_word.toUpperCase();
    console.log(word + 'word is in upper case');

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_subtract_1 = word.length - 1;
    charAt3 = word.charAt(length_subtract_1);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1,'_');
    remove_charAt2 = remove_charAt1.replace(charAt2,'_');
    remove_charAt3 = remove_charAt2.replace(charAt3,'_');
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'>Q."+remove_charAt3+"</h4>";
    input_box = "<br>ANSWER: <input type='text' id='check'>";
    check_button ="<br><br><button class='btn-btn-info' onclick='check()'>CHECK</button>";
    row = question_word + input_box + check_button;
    document.getElementById('output').innerHTML = row;
    document.getElementById('word').value = "";



}
function check(){
    get_input_box = document.getElementById('check').value;
    CAP_ANSWER = get_input_box.toUpperCase();
    if(document.getElementById('player_question').innerHTML ==" Question Turn : "+ player_1 ){
        if(CAP_ANSWER == word ){
            
            player_1_score = player_1_score + 1;
    
            document.getElementById('player_1_score').innerHTML = player_1_score;
    
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_2;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_1;
        }else{
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_2;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_1;  
            player_1_score = player_1_score - 1;
            document.getElementById('player_1_score').innerHTML = player_1_score;

        }


       
    }
    else if(document.getElementById('player_question').innerHTML ==" Question Turn : "+ player_2 ){
        
        if(CAP_ANSWER == word ){
            
            player_2_score = player_2_score + 1;
    
            document.getElementById('player_2_score').innerHTML = player_2_score;
    
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;
        }else{
            document.getElementById('player_question').innerHTML =" Question Turn : "+ player_1;
            document.getElementById('player_answer').innerHTML = " Answer Turn : "+player_2;
            player_2_score = player_2_score - 1;
            document.getElementById('player_2_score').innerHTML = player_2_score;
        }
        
    }
    document.getElementById('output').innerHTML = "";


}



