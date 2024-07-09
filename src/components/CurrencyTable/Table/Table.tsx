import { currencyRates } from '../../../constants';
import { StateSchema } from '../../../types/types';
import TableRow from '../TableRow/TableRow';
import './Table.css';

interface TableProps {
  data: StateSchema;
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Pair name/market</th>
          <th>First</th>
          <th>Second</th>
          <th>Third</th>
        </tr>
      </thead>
      <tbody>
        {currencyRates.map((currencyRate) => (
          <TableRow
            data={data}
            currencyRate={currencyRate}
            key={currencyRate}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
