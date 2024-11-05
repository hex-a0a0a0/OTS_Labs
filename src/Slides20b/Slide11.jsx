import diag1 from "../public/DFM_diag.png";

export default function Slide11(props) {
    return (
        <div class="container flex flex-col items-center w-2/3 mb-4">
            <h1 class="font-mono text-2xl font-extrabold">
                5. Составим кодовую таблицу разрешенных кодовых комбинаций:
            </h1>
            <div class="container flex flex-col items-center font-mono font-normal text-2xl mt-2">
                <table class="tg">
                    <thead>
                        <tr>
                            <th class="tg-0lax" rowspan="2">
                                № <br />
                                Кодовой <br />
                                комбинации
                            </th>
                            <th class="tg-0lax" colspan="7">
                                Значения символов
                            </th>
                        </tr>
                        <tr>
                            <th class="tg-0lax">a1</th>
                            <th class="tg-0lax">a2</th>
                            <th class="tg-0lax">a3</th>
                            <th class="tg-0lax">a4</th>
                            <th class="tg-0lax">a5</th>
                            <th class="tg-0lax">a6</th>
                            <th class="tg-0lax">a7</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="tg-baqh">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">2</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">3</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">4</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">5</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">6</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">7</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                        </tr>
                        <tr>
                            <td class="tg-baqh">8</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">1</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">0</td>
                            <td class="tg-0lax">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
