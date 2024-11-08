export default function Slide7(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold multiline">
        Энтропия нового двоичного кода рассчитывается таким образом.
      </h1>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Пусть слова исходного источника S1, S2, S3, S4 имеют вероятности: P1 =
        0,49; P2 = 0,02; P3 = 0,06; P4 = 0,25.
        <br></br>
        <br />
        Они закодированы так: S1 - 0; S2 - 111; S3 - 110; S4 - 10. Из 100
        среднестатистических сообщений будем иметь S1 - 49 штук; S2 - 2 штуки;
        S3 - 6 штук; S4 - 25 штук.
        <br></br>
        <br />В соответствии с новым кодом имеем: 49 сообщений S1, т. е. 49
        символов 0; 2 сообщения S2, т. е. 6 символов 1; 6 сообщений S3, т. е. 12
        символов 1 и 6 символов 0; 25 сообщений S4, т. е. 25 символов 1 и 25
        символов 0.
        <br></br>
        <br />
        Таким образом, 100 среднестатистических сообщений содержат: символ 0:
        491 + 61 + 251 = 80 шт.
        <br />
        символ 1: 23 + 62 + 251 = 97 шт.
        <br></br>
        <br />
        Т. о. вероятность появления 0 равна: Р0 = 80/177 = 0,452;
        <br />
        вероятность появления 1 равна: Р1 = 97/177 = 0,548.
        <br />
        Энтропия нового двоичного кода равна:
        <br />
        Н = (-0,452lg 0,452 - 0,548lg 0,548)/lg 2 = 0,811 дв. ед./символ.
        <br />
      </div>
    </div>
  );
}
