import FullQuiz from "../FullQuiz.jsx";

let questions = [
    "Распределению на выходе интегратора при передаче U1 (t) с ДАМ:",
    "Распределению на выходе интегратора при передаче UO(t) с ДАМ:",
];
let initialAnswer = 4;
let text =
    "На рисунке внизу изображены графики 3 нормальных распределений и их номера. Введите номер распределения, соответствующего:";

export default function Quest10() {
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
