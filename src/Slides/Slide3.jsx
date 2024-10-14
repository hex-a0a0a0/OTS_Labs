import signal1 from '../public/test_signal.png';
import signal2 from '../public/test_neg_signal.png';

export default function Slide3(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono font-normal text-2xl mt-2">
        Дискретные сигналы принимают в определенные (тактовые) моменты
        времени определенные значения, отличающиеся одно от другого на
        конкретную величину. Пример дискретного сигнала - двоичный (бинарный)
        сигнал. Он принимает только два значения 0 и 1
      </div>
      <img style="width: 476px; height: 121px; object-fit: cover;" src={signal1}></img>
      <div class="font-mono font-normal text-2xl mt-2">
        В общем случае дискретный сигнал может принимать m значений.
        На следующем рисунке приведена временная диаграмма троичного сигнала.
      </div>
      <img style="width: 505px; height: 199px; object-fit: cover;" src={signal2}></img>
    </div>
  )
}
