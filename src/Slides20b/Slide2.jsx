import prob from "../public/signal_and_noise.png";

export default function Slide2(props) {
  return (
    <div class="container flex flex-col items-center w-2/3 mb-4">
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Отличие одной кодовой комбинации от другой характеризуется кодовым
        расстоянием. Кодовое расстояние — это количество позиций, в которых одна
        кодовая комбинация отличается от другой. Например:
      </div>

      <div class="multiline font-mono font-normal text-2xl mt-2">
        Для обнаружения одиночных ошибок минимальное кодовое расстояние между
        комбинациями должно равняться r(min) = 2. Например, для двоичного кода
        (с основанием кода m=2) длиной n=3 возможный набор разрешеных комбинаций
        с r(min)=2 имеет вид:
      </div>
    </div>
  );
}
