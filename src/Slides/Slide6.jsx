import prob from '../public/probability_dis_1.png';

export default function Slide6(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
        Пороговое напряжение, при котором средняя вероятность ошибки
        минимальна, называется оптимальным пороговым напряжением Vopt.
      </div>
      <img style="height: 550px;" src={prob}></img>
    </div>
  )
}
