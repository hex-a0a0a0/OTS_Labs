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
                Составьте структурную схему кодера из блоков, приведенных ниже.
            </h2>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
