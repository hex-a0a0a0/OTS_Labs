export default function Slide8(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <h1 class="font-mono text-4xl font-extrabold">
                АЛГОРИТМ КОДИРОВАНИЯ
            </h1>

            <div class="multiline font-mono font-normal text-2xl mt-2">
                <ol class="list-decimal">
                    <li class="mb-4">
                        Присваиваем каждому символу кода номер.
                        <br />
                        Например: a1, a2, a3, a4, a5, a6, a7.
                        <br />
                        Первые три символа (a1, a2, a3) являются
                        информационными.
                        <br />
                        Последние четыре символа - корректирующие(проверочные):
                        a4, a5, a6, a7.
                    </li>
                    <li>Составляем порождающую матрицу G:</li>
                </ol>
            </div>
        </div>
    );
}
