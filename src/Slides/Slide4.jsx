import sin_signal from '../public/sin_signal.png';

export default function Slide4(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ИМПУЛЬСНО-КОДОВАЯ МОДУЛЯЦИЯ (ИКМ)</h1>
      <img style="width: 559px; height: 168px; object-fit: cover;" src={sin_signal}></img>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Непрерывные (аналоговые) сигналы могут принимать в любой момент времени сколь
        угодно близкие друг другу значения. Пример непрерывного сигнала - гармоническое
        колебание. На рисунке отмечен уровень 0.7 вольт. Но данный сигнал принимает
        значения и 0.69 вольт, и 0.699 вольт, т.е сколь угодно близкие значения.
      </div>
    </div>
  )
}
