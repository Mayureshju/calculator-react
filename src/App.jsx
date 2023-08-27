import { useState } from "react";
import { useOnlineStatus } from "./utils/helper";
function App() {
  const [result, setResult] = useState("");
  const onlineStatus = useOnlineStatus();

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1)); //
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
    
      <div className="container mx-auto p-4 w-6/12 mt-10 border border-slate-200 rounded-lg">
      <h1 className="text-3xl font-bold text-blue-200 flex justify-center mb-2">Calculator</h1>
        <form className="mb-4">
          <div className="flex items-center justify-center">
            {onlineStatus ? "🟢" : "🔴"}

            <input
              type="text"
              placeholder="0"
              className="ml-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              value={result}
            />
          </div>
        </form>
        <div className="keypad grid grid-cols-3 gap-2">
          <button
            className="calculator-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            onClick={clear}
            id="clear"
          >
            Clear
          </button>
          <button
            className="calculator-btn bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            onClick={backspace}
            id="backspace"
          >
            C
          </button>
          <button className="calculator-btn" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button className="calculator-btn" name="7" onClick={handleClick}>
            7
          </button>
          <button className="calculator-btn" name="8" onClick={handleClick}>
            8
          </button>
          <button className="calculator-btn" name="9" onClick={handleClick}>
            9
          </button>
          <button className="calculator-btn" name="*" onClick={handleClick}>
            &times;
          </button>
          <button className="calculator-btn" name="4" onClick={handleClick}>
            4
          </button>
          <button className="calculator-btn" name="5" onClick={handleClick}>
            5
          </button>
          <button className="calculator-btn" name="6" onClick={handleClick}>
            6
          </button>
          <button className="calculator-btn" name="-" onClick={handleClick}>
            &ndash;
          </button>
          <button className="calculator-btn" name="1" onClick={handleClick}>
            1
          </button>
          <button className="calculator-btn" name="2" onClick={handleClick}>
            2
          </button>
          <button className="calculator-btn" name="3" onClick={handleClick}>
            3
          </button>
          <button className="calculator-btn" name="+" onClick={handleClick}>
            +
          </button>
          <button className="calculator-btn" name="0" onClick={handleClick}>
            0
          </button>
          <button className="calculator-btn" name="." onClick={handleClick}>
            .
          </button>
          <button
            className="calculator-btn bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
            onClick={calculate}
            id="result"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
