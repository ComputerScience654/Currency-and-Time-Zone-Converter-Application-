// ระบบแปลงสกุลเงิน
document.getElementById('convert-currency').addEventListener('click', async () => {
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const amount = document.getElementById('amount').value;

    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = (amount * rate).toFixed(2);

        document.getElementById('currency-result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        document.getElementById('exchange-rate').textContent = `1 ${fromCurrency} = ${rate} ${toCurrency}`;
    } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลอัตราแลกเปลี่ยน:', error);
    }
});

// ระบบแปลงเวลา
document.getElementById('convert-time').addEventListener('click', () => {
    const fromTimezone = document.getElementById('from-timezone').value;
    const toTimezone = document.getElementById('to-timezone').value;

    const fromTime = new Date().toLocaleString('th-TH', { timeZone: fromTimezone });
    const toTime = new Date().toLocaleString('th-TH', { timeZone: toTimezone });

    document.getElementById('time-result').textContent = `${fromTime} (${fromTimezone}) = ${toTime} (${toTimezone})`;
});

// ระบบเปรียบเทียบเวลา
document.getElementById('compare-time').addEventListener('click', () => {
    const timezone1 = document.getElementById('timezone1').value;
    const timezone2 = document.getElementById('timezone2').value;

    const time1 = new Date().toLocaleString('th-TH', { timeZone: timezone1 });
    const time2 = new Date().toLocaleString('th-TH', { timeZone: timezone2 });

    document.getElementById('time1-result').textContent = time1;
    document.getElementById('time2-result').textContent = time2;
});