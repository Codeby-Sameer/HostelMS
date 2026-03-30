import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function ROICalculator() {
  const [beds, setBeds] = useState(50);
  const [monthlyRent, setMonthlyRent] = useState(5000);
  const [occupancyRate, setOccupancyRate] = useState(80);
  const occupancy = occupancyRate / 100;
  const monthlyRevenue = beds * monthlyRent * occupancy;
  const monthlyCost = 2499;
  const monthlySavings = Math.floor(monthlyRevenue * 0.15);
  const monthlyNetGain = monthlySavings - monthlyCost;
  const annualROI = Math.max(
    0,
    Math.floor((monthlyNetGain * 12) / (monthlyCost * 12) * 100)
  );

  const roi = {
    monthlyRevenue,
    monthlySavings,
    monthlyCost,
    monthlyNetGain,
    annualROI,
    occupancyNum: occupancyRate,
  };
  const useCountUp = (value) => {
    const [display, setDisplay] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 400;
      const step = value / (duration / 16);

      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setDisplay(value);
          clearInterval(interval);
        } else {
          setDisplay(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(interval);
    }, [value]);

    return display;
  };

  const animatedSavings = useCountUp(roi.monthlySavings);
  const animatedROI = useCountUp(roi.annualROI);
  const animatedNet = useCountUp(roi.monthlyNetGain);
  const animatedRevenue = useCountUp(roi.monthlyRevenue);

  return (
    <section className="bg-gradient-to-br from-[#e7f0ed] via-[#deece9] to-[#edf3ee] px-5 pt-16 pb-8 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">

        
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e6f4f3] text-[#0d5c63] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Calculator className="w-4 h-4" />
            ROI CALCULATOR
          </div>

          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
              Potential Savings
            </span>
          </h3>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how much you can save with automated hostel management
          </p>
        </div>

        <div className="grid max-w-6xl gap-8 lg:grid-cols-2 mx-auto">

          
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Calculator className="w-6 h-6 text-[#0d5c63]" />
              Enter Your Details
            </h4>

            <div className="space-y-6">

              
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Beds: <span className="text-[#0d5c63] font-bold">{beds}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full accent-[#0d5c63]"
                />
              </div>

              
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Rent/Bed: ₹
                  <span className="text-[#0d5c63] font-bold">
                    {monthlyRent}
                  </span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={monthlyRent}
                  onChange={(e) => setMonthlyRent(Number(e.target.value))}
                  className="w-full accent-[#0d5c63]"
                />
              </div>

              
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Occupancy:{" "}
                  <span className="text-[#0d5c63] font-bold">
                    {occupancyRate}%
                  </span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={occupancyRate}
                  onChange={(e) => setOccupancyRate(Number(e.target.value))}
                  className="w-full accent-[#0d5c63]"
                />
              </div>

            </div>
          </div>

          
          <div className="bg-gradient-to-br from-[#e6f4f3] to-[#f8fefe] rounded-2xl p-6 border border-[#bfe1de] shadow-[0_10px_30px_rgba(13,92,99,0.08)]">
            <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#0d5c63]" />
              Your Savings Estimate
            </h4>

            <div className="space-y-6">

              
              <div className="text-center p-6 bg-white rounded-xl border border-[#bfe1de] shadow-sm">
                <div className="text-4xl font-bold text-[#0d5c63]">
                  {animatedROI}%
                </div>
                <div className="text-sm text-slate-600">
                  Annual Return on Investment
                </div>

                
                <div className="mt-4 h-2 bg-[#e6f4f3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e]"
                    style={{ width: `${Math.min(animatedROI, 100)}%` }}
                  />
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-[#1b7f8e]" />
                    <span className="text-sm text-slate-700">Monthly Savings</span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    ₹{animatedSavings.toLocaleString()}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-[#7fcac3]" />
                    <span className="text-sm text-slate-700">Monthly Cost</span>
                  </div>
                  <div className="text-xl font-bold text-slate-900">
                    ₹{roi.monthlyCost}
                  </div>
                </div>
              </div>

              
              <div className="bg-[#e6f4f3] p-5 rounded-xl border border-[#bfe1de]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#0d5c63]">Monthly Net Gain</div>
                    <div className="text-2xl font-bold text-[#0d5c63]">
                      ₹{animatedNet.toLocaleString()}
                    </div>
                  </div>
                  <Clock className="text-[#0d5c63]" />
                </div>
              </div>

              
              <div className="bg-[#edf9f8] border border-[#bfe1de] rounded-xl p-4">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="text-sm text-[#0d5c63]">Monthly Revenue</div>
                    <div className="text-xl font-bold text-[#0d5c63]">
                      ₹{animatedRevenue.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#0d5c63]">Occupancy</div>
                    <div className="text-xl font-bold text-[#0d5c63]">
                      {roi.occupancyNum}%
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className="text-center mt-8 pb-4">
          <Link
            to="/request-demo"
            className="inline-flex items-center bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] text-white px-8 py-4 rounded-xl font-semibold shadow hover:shadow-lg transition hover:-translate-y-1"
          >
            Get a Free Demo
          </Link>
        </div>

      </div>
    </section>
  );
}

export default ROICalculator;
