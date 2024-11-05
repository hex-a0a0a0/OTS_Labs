import diag1 from "../public/DFM_diag.png";

export default function Slide12(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <h1 class="font-mono text-2xl font-extrabold">
                Составим таблицу кодовых расстояний:
            </h1>
            <div class="container flex flex-col items-center font-mono font-normal text-2xl mt-2">
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-nrix">
                                Номер
                                <br />
                                Комбинации
                            </th>
                            <th class="tg-nrix">1</th>
                            <th class="tg-nrix">2</th>
                            <th class="tg-nrix">3</th>
                            <th class="tg-nrix">4</th>
                            <th class="tg-nrix">5</th>
                            <th class="tg-nrix">6</th>
                            <th class="tg-nrix">7</th>
                            <th class="tg-nrix">8</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tg-nrix">1</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">2</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">3</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">5</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">6</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">7</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                            <td class="tg-nrix">4</td>
                        </tr>
                        <tr>
                            <td class="tg-nrix">8</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">4</td>
                            <td class="tg-nrix">0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
