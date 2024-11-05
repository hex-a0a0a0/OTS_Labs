import diag from "../public/DAM_diag.png";

export default function Slide9(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <h1 class="font-mono text-2xl font-extrabold">
                Матрица-дополнение Р имеет вид:
            </h1>
            <div class="multiline font-mono font-normal text-2xl mt-2"></div>
            <div class="multiline font-mono font-normal text-2xl mt-2">
                3. Формируем кодовые комбинации. Для этого, сначала, записываем
                все возможные информационные комбинации из трех посыпок (всего
                восемь комбинаций): 000, 001, 010, 011, 100, 101, 110, 111.
            </div>
        </div>
    );
}
