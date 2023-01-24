import { FormEvent, useState } from 'react';

function DataTable({ data }: any) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">##</th>
          <th scope="col">buySellRatio</th>
          <th scope="col">buyVol</th>
          <th scope="col">sellVol</th>
          <th scope="col">timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ buySellRatio, buyVol, sellVol, timestamp }: any, index: number) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{buySellRatio}</td>
            <td>{buyVol}</td>
            <td>{sellVol}</td>
            <td>{`${new Date(timestamp).toLocaleTimeString()}, ${new Date(timestamp).toLocaleDateString()}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<string>('BTCUSDT');
  const [period, setPeriod] = useState<string>('5m');
  const [data, setData] = useState([]);

  const onSymbolChange = (event: FormEvent<HTMLInputElement>) => {
    setSymbol(event.currentTarget.value)
  }

  const onPeriodChange = (event: FormEvent<HTMLSelectElement>) => {
    setPeriod(event.currentTarget.value)
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=${symbol}&period=${period}&limit=30`, {
        headers: {
          'X-MBX-APIKEY': '1sqj86AlSZsVw19qzAcda7iJ3qbBDX8sZsgob8SEWFBVhFxwK5NcLPDXeZwXryEp'
        }
      });
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  }

  return (
    <>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <strong>statsb</strong>
        </h5>
      </div>

      <div className="container">
        <div className="card mb-5" style={{ 'maxWidth': '25rem' }}>
          <div className="card-body">
            <h5 className="card-title">Taker Buy/Sell Volume</h5>
            <h6 className="card-subtitle mb-4 text-muted">
              <code>GET /futures/data/takerlongshortRatio</code>
            </h6>

            <form onSubmit={onSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="symbol">Symbol</label>
                <input value={symbol} onChange={onSymbolChange} type="text" className="form-control" id="symbol" aria-describedby="symbolHelp" placeholder="symbol e.g. BTCUSDT" />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="period">Period</label>
                <select value={period} onChange={onPeriodChange} className="form-control" id="period">
                  <option>5m</option>
                  <option>15m</option>
                  <option>30m</option>
                  <option>1h</option>
                  <option>2h</option>
                  <option>4h</option>
                  <option>6h</option>
                  <option>12h</option>
                  <option>1d</option>
                </select>
              </div>

              <button disabled={loading} type="submit" className="btn btn-warning mb-2">Submit</button>
            </form>
          </div>
        </div>

        {loading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        )}
        {!!data.length && <DataTable data={data} />}
      </div>
    </>
  )
}
