import React, { useState } from 'react';
import './App.css';
import InputBox from './components/inputbox';
import getcurrency from './hooks/currency';
function App() {
  const [amount, changeamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [result, setresult] = useState(0);
    const currencyinfo=getcurrency(from);
    console.log(currencyinfo);
    const curr = currencyinfo ? Object.keys(currencyinfo) : [];
    console.log(curr)

    const swap = () => {
        setto(from);
        setfrom(to);
        changeamount(result);
        setresult(amount)
    };

    const final = () => setresult(amount * currencyinfo[to]);

    return (
        <>
                <div className="w-full">
                    <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                final();
                            }}
                        >
                            <div className="w-full mb-1">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    onamountchange={(e) => changeamount(Number(e))}
                                    oncurrencychange={(currency) => setfrom(currency)}
                                    selectcurrency={from}
                                    currencyoption={curr}
                                />
                            </div>
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                    onClick={swap}
                                >
                                    Swap
                                </button>
                            </div>
                            <div className="w-full mt-1 mb-4">
                                <InputBox
                                    label="To"
                                    amount={result}
                                    onamountchange={(e) => setresult(Number(e))}
                                    oncurrencychange={(currency) => setto(currency)}
                                    selectcurrency={to}
                                    currencyoption={curr}
                                />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                                Convert
                            </button>
                        </form>
                    </div>
                </div>
        </>
    );
}

export default App;
