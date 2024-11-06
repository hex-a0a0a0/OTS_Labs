/*
QUESTION:
        P(A) и P(M) - безусловные вероятности букв А и М. Условная вероятность
        того, что второй буквой будет А, если первая была буква М, обозначена
        P(A/M). Остальные условные вероятности обозначены аналогично. P(A) =
        0,50 P(M) = 0,50 P(A/A) = 0,60 P(M/A) = 0,40 P(A/M) = 0,80 P(M/M) = 0,20
        ЗАПИШИТЕ ЭТИ ВЕРОЯТНОСТИ: Вычислите вероятность каждого слова из двух
        букв (известно, что P(МА) = P(М) * P(А/М) и т.д.)."
ANSWER:
        P(MA) = P(M) * P(A/M) = 0,50 * 0,80 = 0,40
        P(MM) = P(M) * P(M/M) = 0,50 * 0,20 = 0,10
        P(AM) = P(A) * P(M/A) = 0,50 * 0,40 = 0,20
        P(AA) = P(A) * P(A/A) = 0,50 * 0,60 = 0,30
*/
import MultiFieldForm from "../MultiFieldForm.jsx";

export default function Quest1(props) {
    let options = [
        ["P(MA) = ?", "4"],
        ["P(MM) = ?", "3"],
        ["P(AM) = ?", "4"],
        ["P(AA) = ?", "3"],
    ];

    const Um = Math.floor(Math.random() * 10);
    const Limit = Math.floor(Math.random() * 9) + 1;
    const M2 = Limit * Limit;
    const Result = Limit * 3;

    options[0][1] = (-Result + Um).toString();
    options[1][1] = (Result + Um).toString();

    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
            <p class="font-mono text-2xl font-normal text-start mb-2">
                На вход отсчетного устройства поступает Z(t) - сигнал в сумме с
                нормальным шумом. <br />
                Амплитуда импульса Um, дисперсия шума M2. <br />В каких пределах
                с вероятностью 0.997% заключены мгновенные значения Z(t) при
                передаче 1 (Единицы)?
            </p>
            <p class="font-mono text-2xl font-bold mb-2">
                Um = {Um}
                <br /> M2 = {M2}
            </p>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
