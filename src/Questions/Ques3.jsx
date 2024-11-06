import MultiFieldForm from "../MultiFieldForm.jsx";

export default function Quest3(props) {
    let options = [
        ["Нижний предел", "4"],
        ["Верхний предел", "3"],
    ];

    const Um = Math.floor(Math.random() * 10);
    const Limit = Math.floor(Math.random() * 9) + 1;
    const M2 = Limit * Limit;
    const Result = Limit * 3;

    options[0][1] = (-Result).toString();
    options[1][1] = Result.toString();

    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
            <p class="font-mono text-2xl font-normal text-start mb-2">
                На вход отсчетного устройства поступает Z(t) - сигнал в сумме с
                нормальным шумом. Амплитуда импульса Um, дисперсия шума M2. В
                каких пределах с вероятностью 0.997% заключены мгновенные
                значения Z(t) при передаче 0 (Нуля) ?
            </p>
            <p class="font-mono text-2xl font-bold mb-2">
                Um = {Um}
                <br /> M2 = {M2}
            </p>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
