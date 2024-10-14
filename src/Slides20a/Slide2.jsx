import prob from '../public/signal_and_noise.png';

export default function Slide2(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
      1. Укрупнение алфавита источника сообщений. Например, будем кодировать не отдельные буквы, а целые слова, так как корреляционные связи между словами гораздо меньше, чем между буквами.
      При этом увеличивается основание кода (усложняется кодек) и снижается помехоустойчивость.
      </div>

      <div class="font-mono text-2xl text-center">
      Энтропия: <br/>Н = [(-p(S1) × lg p(S1) - ... - p(Sm) × lg p(Sm)) / lg 2]/n,
      <br/>где p(Si) - вероятность i-го слова;
      <br/>м - общее количество слов (основание кода); 
      <br/>n - количество букв в слове;
      <br/>lg - десятичный логарифм.
      </div>
    </div>
  )
}
