import { useCallback, useEffect, useState } from 'react';
import Table from './components/CurrencyTable/Table/Table';
import { URL } from './constants';
import { getMarketRates } from './services/getMarketRates';
import { CurrencyRatesData, StateSchema } from './types/types';

const App = () => {
  const [data, setData] = useState<StateSchema | null>(null);

  const subscribe = useCallback(async () => {
    try {
      const [firstMarket, secondMarket, thirdMarket] =
        await Promise.all<CurrencyRatesData>([
          getMarketRates(URL.first),
          getMarketRates(URL.second),
          getMarketRates(URL.third),
        ]);

      setData({
        firstMarket,
        secondMarket,
        thirdMarket,
      });

      await subscribe();
    } catch (error) {
      setTimeout(subscribe, 0);
    }
  }, []);

  useEffect(() => {
    subscribe();
  }, [subscribe]);

  return (
    <div className="app">
      {data ? <Table data={data} /> : <div>loading...</div>}
    </div>
  );
};

export default App;
