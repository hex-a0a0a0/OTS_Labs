import signal1 from '../public/test_signal.png';
import signal2 from '../public/noise_signal.png';
import signal3 from '../public/decoded_signal.png';

export default function Slide5(props) {
  const imgStyle = "width: 568px; height: 126px; object-fit: cover;"
  return (
    <div class="flex flex-col items-start w-2/3 mb-4">
      <div class="font-mono font-normal text-2xl mt-2">
        {`На рисунке показаны передаваемый сигнал U(t), сигнал в сумме с шумом
        на входе приемника z(t), отсчеты принятого процесса в тактовые моменты
        времени z(kT+T/2), принятые значения сигнала на выходе порогового
        устройства. Пороговое напряжение V показано красной линией.
        Правило работы порогового устройства:
        если z(kT+T/2) > V, то на выходе '1'.
        если z(kT+T/2) < V, то на выходе '0'.`}
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style={imgStyle} src={signal1}></img>
        <p>Передаваемый сигнал</p>
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style={imgStyle} src={signal2}></img>
        <p>Шум + сигнал на входе приемника</p>
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style={imgStyle} src={signal3}></img>
        <p>Отсчеты и принятый сигнал</p>
      </div>
      <div class="font-mono font-normal text-2xl mt-2">
        На рисунках видно, что некоторые импульсы приняты неверно. Третий импульс
        был '1', а приняли '0', эта ошибка называется 'пропуск сигнала'. Пятый
        импульс был '0', а приняли '1'. Эта ошибка называется 'ложная тревога'.
        Вероятности этих ошибок обозначим p(0|1) и p(1|0)
      </div>
    </div>
  )
}
