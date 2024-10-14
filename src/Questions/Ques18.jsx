import MultiFieldForm from '../MultiFieldForm.jsx'

let options = [["Vopt","3.85"]];

export default function Quest18(props) {
  const Um = Math.round(Math.random() * 10 + 1);
  const M2 = Math.round(Math.random() * 15 + 1);
  const p1 = Math.round((Math.random()*0.85 + 0.1) * 10) / 10;
  const p0 = 1 - p1;
  const V_opt = Math.round((Um/2 - M2/Um*Math.log(p1/p0)) * 100) / 100;

  options[0][1] = V_opt.toString();
  
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
      <p class="font-mono text-2xl font-normal mb-2">Рассчитайте Vopt (ответ округлите до сотых), если заданы:</p>
      <p class="font-mono text-xl font-bold mb-2 text-left">
        Um = {Um}
        <br />M2 = {M2}
        <br />p(1) = {p1}</p>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
