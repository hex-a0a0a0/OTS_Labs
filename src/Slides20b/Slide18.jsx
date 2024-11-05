import diag1 from "../public/DFM_diag.png";

export default function Slide18(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <div class="multiline font-mono font-normal text-2xl mt-2">
                Пусть передавали некоторую комбинацию; приняли комбинацию
                (1110011) - это запрещенная комбинация.
                <br />
                Ее синдром: C1=0; C2=0; C3=1; C4=0, т.е. (0010).
                <br />
                Из таблицы находим вектор ошибки (0000010), т.е. ошибка
                произошла в шестом символе a6.
                <br />
                Следовательно, исправив шестой символ (1 на 0), получим
                правильную комбинацию: 1110001.
            </div>
            /
        </div>
    );
}
