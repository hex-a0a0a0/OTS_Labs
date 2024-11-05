import MultiFieldForm from "../MultiFieldForm.jsx";

let options = [
    ["ДАМ", "0.707"],
    ["ДЧМ", "1"],
    ["ДФМ", "1.414"],
];

export default function Quest12(props) {
    return (
        <div class="container flex flex-col items-center w-2/3">
            <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
            <h2 class="font-mono text-2xl font-normal mb-2">
                Запишите выражение для коэффициента а при:
            </h2>
            <MultiFieldForm options={options}></MultiFieldForm>
        </div>
    );
}
