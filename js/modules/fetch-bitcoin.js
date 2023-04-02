export default function initFetchBitcoin() {
    const URL = 'https://blockchain.info/ticker';
    const valueBoxes = document.querySelectorAll('[data-bitcoin]');

    async function fetchBitcoinValue(url) {
        const bitcoinJSON = await (await fetch(url)).json();

        return bitcoinJSON.BRL.sell;
    }

    async function addBitcoinValue() {
        try {
            const bitcoinValue = await fetchBitcoinValue(URL);

            valueBoxes.forEach(valueBox => {
                valueBox.innerText = (1000 / bitcoinValue).toFixed(4);
            });
        } catch (error) {
            console.log(Error(error));
        }
    }

    addBitcoinValue();
}
