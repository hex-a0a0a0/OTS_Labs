/*
        Вычислите среднюю длину кодовой комбинации Nср
        Nср = ?
        Nср = 1.900
*/

import FullQuiz from "../FullQuiz.jsx";

let questions = ["p(1/Z)>p(0/Z)", "p(1/Z)<p(0/Z)", "p(0/Z)>p(0/Z)"];
let initialAnswer = 1;
let text =
    "Каково условие для принятия ОП решения «1» через условные вероятности (на входе приемника - процесс Z, передаются либо 1, либо 0)";

export default function Quest6(props) {
    return (
        <div class="container flex flex-col items-center w-2/3">
            <FullQuiz
                questions={questions}
                initialAnswer={initialAnswer}
                text={text}
            ></FullQuiz>
        </div>
    );
}
