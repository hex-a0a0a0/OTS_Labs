import diag1 from "../public/DFM_diag.png";

export default function Slide15(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <div class="multiline font-mono font-normal text-2xl mt-2">
                2. Вычисляем синдром принятой кодовой комбинации, т.е. кодовую
                комбинацию, равную произведени принятого вектора-строки на
                транспонированную проверочную матрицу:
            </div>
            <div class="multiline font-mono font-normal text-2xl mt-2">
                где a1,...,a7 - принятый кодовый символ, возможно искаженный
                помехой.
            </div>
        </div>
    );
}
