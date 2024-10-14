import prob from '../public/signal_and_noise.png';

export default function Slide2(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
        Правило работы оптимального приемника может быть только СТАТИСТИЧЕСКИМ.
        Поясним этот вывод. На рисунке показан процесс Z(t) на входе приемника, т.е. сигнал плюс шум:
      </div>
      <img style="height: 550px;" src={prob}></img>
      <div class="font-mono text-2xl text-center">
        Даже, если на входе приемника '1', мы не можем точно сказать, что передавалось. Может быть:
        - передавали '1' и помеха оказалась равной '0';
        - передавали '0' и помеха оказалась равной '1'.
        Можно только указать вероятность, с которой процесс Z(t) получился или из '1', или из '0'.
      </div>
    </div>
  )
}
