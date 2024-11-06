/*
В качестве итога ниже приводятся временные диаграммы сообщений и сигналов для рассмотренного в теоретической части примера. 
Постройте в отчете временные диаграммы, аналогичные приводимым ниже, но для Ваших исходных данных.

Исходные сообщения (слова) состояли из двух букв (символов) каждое. 
Т.о. 100 среднестатистических сообщений (слов) состоят из 200 символов, 
т.е. для передачи 100 сообщений требовалось передать 200 символов. 
Если длительность одного символа Т сек., то 100 сообщений передаются за (200*T) секунд.
*/

import MultiFieldForm from "../MultiFieldForm.jsx";

let options = [
    ["ДАМ U1(t)", "Um*cos(w0*t)"],
    ["ДАМ U0(t)", "0"],
    ["ДЧМ U1(t)", "Um*cos(w1*t)"],
    ["ДЧМ U0(t)", "Um*cos(w0*t)"],
    ["ДФМ U1(t)", "Um*cos(w0*t)"],
    ["ДФМ U0(t)", "-Um*cos(w0*t)"],
];

export default function Quest9(props) {
    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
            <h2 class="font-mono text-2xl font-normal mb-2">
                Запишите выражения определяющие форму сигналов, передаваемых в
                линию, соответствующие ‘1’ и ‘0’ при следующих видах модуляции:
            </h2>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
