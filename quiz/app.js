const quiz = [
    {
        question: 'ポケモンのリメイク作品は次のうちどれですか？',
        selection: [
            'RS', 'DP', 'HGSS', 'ORAS'
        ],
        answer: 'ORAS'
    },
    {
        question: 'ポケモン最新作は次のうちどれですか？',
        selection: [
            'RSE', 'BDSP', 'SV', 'ORAS'
        ],
        answer: 'SV'
    },
    {
        question: 'ポケモン三鳥でないのは？',
        selection: [
            'ファイヤー', 'フリーザー', 'サンダー', 'ルギア'
        ],
        answer: 'ルギア'
    }
]

let quizIndex = 0;
const $button = document.getElementsByTagName('button');

// 正解数
let numCorrect = 0;

const makeQuiz = (Index) => {
    document.getElementById('js-question').textContent = quiz[Index]['question'];
    let count = 0;
    while(count < $button.length){
        $button[count].textContent = quiz[Index]['selection'][count];
        count ++;
    }
};


const confirmQuiz = (Index, e) => {
    // イベントの実行 していいのボタンを押すと命令が実行される
    if(quiz[Index]['answer'] == e.target.textContent){
        window.alert('正解です');
        numCorrect ++;
    }else{
        window.alert('不正解です');
    }
    quizIndex ++;
    if (quizIndex < quiz.length){
        makeQuiz(quizIndex);
    }else{
        console.log('終了です');
        window.alert('正解数：'+numCorrect);
    }
};


makeQuiz(quizIndex);
let count = 0;
while(count < $button.length){
    $button[count].addEventListener('click', (e) => {
        confirmQuiz(quizIndex, e);
    });
    count ++;
}