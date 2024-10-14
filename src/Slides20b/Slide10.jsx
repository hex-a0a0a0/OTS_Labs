import diag1 from '../public/DCHM_diag_1.png';
import diag2 from '../public/DCHM_diag_2.png';

export default function Slide9(props) {
  return (
    <div class="flex flex-col items-left w-2/3 mb-4">
      <img style="width: 800px; object-fit: cover;" src={diag1}></img>
      <img style="width: 715px; object-fit: cover;" src={diag2}></img>
    </div>
  )
}
