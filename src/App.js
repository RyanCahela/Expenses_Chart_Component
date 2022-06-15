import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="flex justify-center items-center bg-cream h-screen">
      {/* Card */}
      <section className="w-[343px] sm:w-[540px] bg-transparent flex flex-col gap-4 font-DM-Sans">
        {/* My Balance Section */}
        <div className="bg-red text-white flex justify-between px-5 py-5 sm:px-8 sm:py-6 rounded-[10px] sm:rounded-[20px]">
          <div>
            <h2 className="text-sm sm:text-lg">My Balance</h2>
            <div className="text-card-white text-2xl sm:text-3xl font-bold">
              $921.48
            </div>
          </div>
          <div className="self-center">
            <svg
              width="72"
              height="48"
              viewBox="0 0 72 48"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#382314" cx="48" cy="24" r="24" />
                <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
              </g>
            </svg>
          </div>
        </div>
        {/* Spending Section */}
        <div className="text-medium-brown bg-white rounded-[10px] sm:rounded-[20px] px-5 py-6">
          <div className="border-b-2 border-b-cream pb-6">
            <h3 className="text-dark-brown font-bold text-2xl sm:text-3xl">
              Spending - Last 7 days
            </h3>
            {/* Bar Chart */}
            <BarChart />
          </div>
          {/* Spending Footer */}
          <div className="pt-6 flex justify-between">
            <div>
              <h4 className="text-base sm:text-lg">Total this month</h4>
              <span className="text-dark-brown font-bold text-3xl sm:text-5xl">
                $478.33
              </span>
            </div>
            <div className="flex flex-col items-end justify-end">
              <div className="text-dark-brown font-bold text-base sm:text-lg">
                +2.4%
              </div>
              <div className="text-base sm:text-lg">from last month</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
