import diag1 from "../public/DCHM_diag_1.png";
import diag2 from "../public/DCHM_diag_2.png";

export default function Slide10(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <div class="multiline font-mono font-normal text-2xl mt-2">
                4. К информационным символам приписываем четыре проверочных
                символа, получающихся в результате умножения информационного
                вектора-строки(a1a2a3) на матрицу-дополнение
                <br />
                (произведение есть вектор-строка(а4а5аба7)):
                <br />
                (a1a2a3) * P = (a4a5a6a7)
            </div>
            <div class="multiline font-mono font-normal text-2xl mt-2">
                Очевидно, для заданной матрицы P:
                <ul>
                    <li>a4 = a2 (+) a3;</li>
                    <li>a5 = a1 (+) a3;</li>
                    <li>a6 = a1 (+) a2;</li>
                    <li>a7 = a1 (+) a2 (+) a3;</li>
                </ul>
                (умножаем информационный вектор на столбцы матрицы-дополнения).
                <br />
                <br></br>
                Знак (+) означаает суммирование по модулю 2, т. е.
                <ul>
                    <li>0 (+) 0 = 0</li>
                    <li>1 (+) 0 = 1</li>
                    <li>0 (+) 1 = 1</li>
                    <li>1 (+) 1 = 0</li>
                </ul>
            </div>
        </div>
    );
}
