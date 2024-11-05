import diag1 from "../public/DFM_diag.png";

export default function Slide16(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <div class="multiline font-mono font-normal text-2xl mt-2">
                3. Формируем вектор ошибки V, т.е. кодовую комбинацию, которая
                содержит единицу на той позиции, где произошла ошибка.
                <br></br>
                Формирование синдрома и вектора ошибки можно произвести заранее,
                искжая последовательно символы в комбинации.
                <br />
                Например, приняли: 0 0 0 0 0 0 0;
                <br />
                C1 = C2 = C3 = C4 = 0 0 0 0;
                <br />
                (V) = (0 0 0 0 0 0 0) - ошибок нет;
                <br></br>
                или приняли: 0 0 0 0 0 0 1 0 - это запрещенная комбинация:
                <br />
                C1 = 0; C2 = 0; C3 = 0; C4 = 1; V = (0 0 0 0 0 0 1)
            </div>
        </div>
    );
}
