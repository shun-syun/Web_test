buttonName = [
    'ポケモン',
    'ピクミン',
    'マリオ',
    'ゼルダ'
];

$button = document.getElementsByTagName('button');

let count = 0;
while (count < $button.length) {
    $button[count].textContent = buttonName[count];
    $button[count].addEventListener('click', (e) => {
        document.getElementById("js-question").textContent = e.target.textContent;
    });
    count ++;
}