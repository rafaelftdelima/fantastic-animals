export default async function fetchBitcoin(url, target) {
    try {
        const bitcoin = await fetch(url);
        const bitcoinJSON = await bitcoin.json();

        const bitcoinBox = document.querySelector(target);
        const priceBRL = (1000 / bitcoinJSON.BRL.sell).toFixed(4);

        bitcoinBox.innerText = priceBRL;
    } catch (error) {
        console.log(error);
    }
}
