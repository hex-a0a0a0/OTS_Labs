import MultiFieldForm from "../MultiFieldForm.jsx";

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

export default function Quest2(props) {
    let options = [
        ["4", "100"],
        ["3", "011"],
        ["2", "010"],
        ["4", "100"],
        ["3", "011"],
    ];

    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    arr = shuffleArray(arr);

    for (let i = 0; i < 5; i++) {
        const num = arr[i]; //Math.floor(Math.random()*7);
        options[i][0] = num;
        let bin = num.toString(2);
        bin = "0".repeat(3 - bin.length) + bin;
        options[i][1] = bin;
    }

    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
            <div class="multiline font-mono text-2xl font-normal mb-2">
                Выполните операцию кодирования квантованных импульсов-отсчетов.
                Кодовые комбинации - двоичные, из 3 импульсов.
            </div>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
