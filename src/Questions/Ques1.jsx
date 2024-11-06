import MultiFieldForm from "../MultiFieldForm.jsx";

import { createSignal, onMount, For } from "solid-js";

export default function Quest1(props) {
    const [processTag, setProcessTag] = createSignal(false);
    let options = [
        ["x1", "4"],
        ["x2", "3"],
        ["x3", "2"],
        ["x4", "4"],
        ["x5", "3"],
    ];

    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random() * 6 * 100) / 100);
    }

    const option = (
        <For each={arr}>
            {(element, i) => (
                <p>{"x" + (i() + 1) + " = " + element.toString()}</p>
            )}
        </For>
    );

    for (let i = 0; i < 5; i++) {
        options[i][1] = Math.round(arr[i]).toString();
    }

    // from 2nd question
    let options2 = [
        ["4", "100"],
        ["3", "011"],
        ["2", "010"],
        ["4", "100"],
        ["3", "011"],
    ];

    for (let i = 0; i < 5; i++) {
        const num = Math.round(arr[i]); //Math.floor(Math.random()*7);
        options2[i][0] = num;
        let bin = num.toString(2);
        bin = "0".repeat(3 - bin.length) + bin;
        options2[i][1] = bin;
    }

    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
            <p class="font-mono text-2xl font-normal text-start">
                Заданы отсчеты непрерывного информационного сигнала, который
                необходимо передать с помощью ИКМ. <br />
                Амплитуды 5-ти импульсов-отсчетов равны:
            </p>
            <p class="font-mono text-xl font-bold text-center">{option}</p>
            <p class="font-mono text-2xl font-normal text-start">
                Выполните операцию квантования заданных импульсов-отсчетов x1,
                x2, x3, x4, x5. <br />
                Уровни квантования: 0, 1, 2, 3, 4, 5, 6, 7.
            </p>
            <MultiFieldForm
                options={options}
                processTag={setProcessTag}
            ></MultiFieldForm>

            <Show when={processTag()}>
                <div class="multiline font-mono text-2xl font-normal mb-2">
                    Выполните операцию кодирования квантованных
                    импульсов-отсчетов. Кодовые комбинации - двоичные, из 3
                    импульсов.
                </div>
                <MultiFieldForm options={options2}></MultiFieldForm>
            </Show>
        </div>
    );
}
