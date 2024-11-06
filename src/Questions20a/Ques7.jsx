/*
QUESTION:
        Двоичные сигналы передаются с помощью ДОМ, т.е. символы 0 и 1 передаются колебаниями с фазами k*180, где k = 0 и k = 1.

        Введите выражение для синусоидального колебания
        (амплитуду, равную единице, и знаки умножения не набирать), соответствующее передаче 0 (частота w; время t).
        Выражение набирайте строчными буквами, без пробелов, в двойных кавычках.
ANSWERS:
        Введите выражение для синусоидального колебания при передаче 1: sin(wt+180)
*/
import FullQuiz from "../FullQuiz.jsx";

let questions = [
    "Z(t)*U1(t)*dt > Z(t)*U0(t)*dt",
    "Z(t)*U0(t)*dt > Z(t)*U1(t)*dt",
    "Z(t)*U1(t)*dt > U0(t)*dt",
];
let initialAnswer = 1;
let text =
    "Каков алгоритм принятия ОП решения ‘1’, если на входе Z(t), т.е. сигнал U1(t） или U0(t) в сумме с АБГШ. Каковы выражения, стоящие под знаком первого и второго интеграла?";

export default function Quest7(props) {
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
