import prob from "../public/signal_and_noise.png";

export default function Slide2(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold">
        УКРУПНЕНИЕ АЛФАВИТА ИСТОЧНИКА СООБЩЕНИЙ
      </h1>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Например, будем кодировать не отдельные буквы, а целые слова, так как
        корреляционные связи между словами гораздо меньше, чем между буквами.
        При этом увеличивается основание кода (усложняется кодек) и снижается
        помехоустойчивость.
      </div>

      <div class="multiline font-mono font-normal text-2xl mt-4">
        Энтропия: <br />
        <span class="text-xl font-extrabold">
          Н = [(-p(S1) × lg p(S1) - ... - p(Sm) × lg p(Sm)) / lg 2]/n
        </span>
        ,
        <br />
        где p(Si) - вероятность i-го слова;
        <br />м - общее количество слов (основание кода);
        <br />n - количество букв в слове;
        <br />
        lg - десятичный логарифм.
      </div>
    </div>
  );
}
