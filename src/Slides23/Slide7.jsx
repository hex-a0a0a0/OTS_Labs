export default function Slide7(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center mb-4">
        Вероятность ошибки при оптимальном приеме двоичных сигналов равна: <br />
        Pош = 1 - F(a*h0), h0^2 = Um^2*T/(4*G0) <br />
        где Um - амплитуда сигнала;
        G0 - спектральная плотность белого шума; <br />
        а = 0.707 для ДАМ; <br />
        a = 1 для ДЧМ; <br />
        a = 1.414 для ДАМ; <br />
        F(x) - функция Лапласа; <br />
        Т.о. ДФМ выигрывает 2 раза по мощности передатчика по сравнению с ДЧМ и в 4 раза по сравнению с ДАМ.
        
      </div>
    </div>
  )
}
