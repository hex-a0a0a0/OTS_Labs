import MultiFieldForm from '../MultiFieldForm.jsx'

export default function Quest15(props) {
  let options = [["","1"]];
  
  const p01 = Math.round(Math.random() * 10) / 10;
  const p10 = Math.round(Math.random() * 10) / 10;
  const p1 = Math.round(Math.random() * 10) / 10;
  const p0 = 1 - p1;
  const p_err = Math.round((p1 * p01 + p0 * p10) * 100) / 100;

  options[0][1] = p_err.toString();
  
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
      <p class="font-mono text-2xl font-normal mb-2">Рассчитайте среднюю вероятность ошибки (ответ округлите до сотых), если заданы:</p> 
        <p class="font-mono text-xl font-bold mb-2">p(1) = {p1}
        <br />p(0|1) = {p01}
        <br />p(1|0) = {p10}
      </p>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
