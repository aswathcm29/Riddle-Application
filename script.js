const answer = document.getElementById('answer')
const result = document.getElementById('result')

function check(){
    console.log(answer.value)
    if(answer.value=='keyboard'){
        result.innerHTML = `<b style="color:green">Correct Answer</b>`;
    }else{
        result.innerHTML = `<b style="color:red">Wrong Answer</b>`;
    }
}