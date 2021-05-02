class NorgesApi {
    url = 'https://data.norges-bank.no/api/data/EXR/B.EUR.NOK?startPeriod=2021-01&format=sdmx-json';
    availCurrUrl = 'https://data.norges-bank.no/api/data/EXR/B..NOK.SP?lastNObservations=1&format=sdmx-json';

	getAvailCurrencies() {
		return fetch(this.availCurrUrl)
			.then(res => {
				if (!res.ok) {
					throw new Error('Error while fetching data');
				}
				return res.json();
			})
			.then(data => {
				return data.data.structure.dimensions.series[1].values;
			})
			.catch(err => console.error(err));
	}

	getCurrencyRates(currency) {
		return fetch(
			`https://data.norges-bank.no/api/data/EXR/B.${currency}.NOK?startPeriod=2021-01&format=sdmx-json`
		)
			.then(res => {
				if (!res.ok) {
					throw new Error('Error while fetching data');
				}
				return res.json();
			})
			.then(data => {
                console.log(
					'🚀 ~ getCurrencyRates ~ data',
					data.data.dataSets[0].series['0:0:0:0'].observations
				);
				return data.data.dataSets[0].series['0:0:0:0'].observations;
			})
			.catch(err => console.error(err));
	}
}

const api = new NorgesApi;

export default api;
