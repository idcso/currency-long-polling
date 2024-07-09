import { CurrencyRates, StateSchema } from '../../../types/types';
import './TableRow.css';

interface TableProps {
  data: StateSchema;
  currencyRate: CurrencyRates;
}

const TableRow = ({ data, currencyRate }: TableProps) => {
  const currentRate: number[] = [];

  Object.values(data).forEach((currency) => {
    currentRate.push(currency[currencyRate]);
  });

  const minValue = Math.min(...currentRate);

  return (
    <tr>
      <th>{currencyRate}</th>
      {currentRate.map((rate) => (
        <td className={rate === minValue ? 'minRate' : ''} key={rate}>
          {Number(rate.toFixed(2))}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
