import FullQuiz from "../FullQuiz.jsx";

let questions = [
    "Введите комбинацию №1",
    "Введите комбинацию №2",
    "Введите комбинацию №3",
    "Введите комбинацию №4",
    "Введите комбинацию №5",
    "Введите комбинацию №6",
    "Введите комбинацию №7",
    "Введите комбинацию №8",
];
let initialAnswer = 2;
let text =
    "Допишите к трем информационным символам четрые проверочных символа, умножив информационный вектор-строку на матрицу дополенение.";

export default function Quest2() {
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
