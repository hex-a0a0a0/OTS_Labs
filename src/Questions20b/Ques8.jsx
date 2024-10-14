import MultiFieldForm from '../MultiFieldForm.jsx'

import diagram from '../public/OPKot_unsign.png';

let options = [["Генератор U0(t)","4"], ["Первый перемножитель","2"], ["Второй перемножитель","3"], ["Первый интегратор","5"], ["Второй интегратор","6"], ["Решающее устройство","7"], ["Генератор U1(t)","1"]];

export default function Quest8(props) {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
      <h2 class="font-mono text-2xl font-normal">Введите номера устройств, в порядке их следования в структурной схеме ОП Котельникова (для повторяющихся элементов, порядок следования - сверху вниз)</h2>
      <img src={diagram}></img>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
