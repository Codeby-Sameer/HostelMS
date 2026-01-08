import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  CheckCircle,
  Users,
  Percent
} from "lucide-react";

function PricingAndFAQ() {
  const navigate = useNavigate();
  const [head, setHead] = useState(1);
  const [billing, setBilling] = useState("monthly");
  
  // ROI Calculator State
  const [beds, setBeds] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [occupancyRate, setOccupancyRate] = useState("");

  const plans = useMemo(() => [
    { id: 1, name: "Starter Plan", monthly: 999, yearly: 999 * 12 * 0.8, features: ["Up to 50 Beds", "Basic Features", "Mobile App Access", "Email Support", "Standard Reports"], cta: "Buy Now" },
    { id: 2, name: "Professional Plan", monthly: 2499, yearly: 2499 * 12 * 0.8, features: ["Up to 200 Beds", "All Basic Features", "Advanced Analytics", "Priority Support", "Custom Branding", "Multiple Locations"], popular: true, cta: "Buy Now" },
    { id: 3, name: "Enterprise Plan", monthly: "Custom", yearly: "Custom", features: ["Unlimited Beds", "All Features Included", "Dedicated Account Manager", "Custom Integrations", "White-label Options", "API Access"], cta: "Contact Sales" },
  ], []);

  // Calculate ROI
  const calculateROI = () => {
    const bedsNum = parseInt(beds) || 0;
    const rentNum = parseInt(monthlyRent) || 0;
    const occupancyNum = parseInt(occupancyRate) || 85; // Default 85%

    if (bedsNum === 0 || rentNum === 0) {
      return {
        monthlyRevenue: 0,
        monthlySavings: 0,
        monthlyCost: plans[1].monthly,
        monthlyNetGain: 0,
        annualROI: 0,
        paybackMonths: 0,
        hasData: false
      };
    }

    // Base calculations
    const monthlyRevenue = bedsNum * rentNum;
    const currentRevenue = monthlyRevenue * (occupancyNum / 100);
    const potentialRevenue = monthlyRevenue * 0.95; // 95% occupancy target
    
    // Efficiency gains
    const timeSaved = Math.max(bedsNum / 15, 1) * 20 * 150; // Staff time savings
    const vacancyReduction = (potentialRevenue - currentRevenue) * 0.7; // 70% of vacancy gap
    const latePaymentsReduction = currentRevenue * 0.03; // 3% reduction in late payments
    
    const monthlySavings = timeSaved + vacancyReduction + latePaymentsReduction;
    const monthlyCost = bedsNum <= 50 ? plans[0].monthly : plans[1].monthly;
    const monthlyNetGain = monthlySavings - monthlyCost;
    const annualROI = monthlyNetGain > 0 ? ((monthlySavings - monthlyCost) * 12 / monthlyCost) * 100 : 0;
    
    return {
      monthlyRevenue: Math.round(currentRevenue),
      monthlySavings: Math.round(monthlySavings),
      monthlyCost: Math.round(monthlyCost),
      monthlyNetGain: Math.round(monthlyNetGain),
      annualROI: Math.round(annualROI),
      paybackMonths: monthlyNetGain > 0 ? Math.round(monthlyCost / monthlyNetGain) : 0,
      hasData: true,
      occupancyNum
    };
  };

  const roi = calculateROI();

  return (
    <section className="overflow-hidden">
      {/* Pricing Section - EXACTLY AS YOU HAD IT */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto w-[92vw] text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose a plan that fits your hostel today—you can upgrade anytime.</p>

          <div className="inline-flex bg-white border-2 border-slate-300 rounded-full p-1 mt-6 shadow-lg">
            <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "monthly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("monthly")}>
              Monthly
            </button>
            <button className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${billing === "yearly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' : 'text-slate-700'}`} onClick={() => setBilling("yearly")}>
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        <div className="relative h-[34rem] max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const offset = (index - head + plans.length) % plans.length;
            const isActive = offset === 0;
            const isRight = offset === 1;
            const isLeft = offset === 2;

            const transform = isActive ? "translateX(-50%) scale(105%)" : isRight ? "translateX(calc(-50% + 280px)) scale(95%)" : "translateX(calc(-50% - 280px)) scale(95%)";
            const opacity = isActive ? 1 : 0.7;
            const zIndex = isActive ? 30 : isRight ? 20 : 10;

            const price = typeof plan.monthly === "string" ? plan.monthly : billing === "monthly" ? `₹${plan.monthly.toLocaleString()}/mo` : `₹${Math.round(plan.yearly).toLocaleString()}/yr`;

            return (
              <div key={plan.id} className={`absolute top-0 left-1/2 w-80 bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer ${isActive ? 'border-blue-500 shadow-2xl' : 'border-slate-200 shadow-lg'}`} style={{ transform, opacity, zIndex }} onClick={() => setHead(index)}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-black text-slate-900 text-center mb-2">{plan.name}</h3>
                  {plan.popular && <p className="text-slate-600 text-center text-sm mb-4">Best for growing hostels</p>}
                  <div className="text-4xl font-black text-blue-600 text-center mb-6">{price}</div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="w-5 h-5 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plan.cta === "Contact Sales" ? (
                    <Link to="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      Contact Sales
                    </Link>
                  ) : (
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={(e) => { e.stopPropagation(); navigate("/checkout", { state: { plan: plan.name, billing } }); }}>
                      Buy Now
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ROI Calculator Section - Fixed cards that don't expand */}
      <div className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto w-[92vw]">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calculator className="w-4 h-4" />
              ROI CALCULATOR
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Calculate Your <span className="text-emerald-600">Potential Savings</span>
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how much you can save with automated hostel management
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Calculator Inputs - Fixed height */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                Enter Your Details
              </h4>
              
              <div className="space-y-6">
                {/* Beds Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Total Number of Beds
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      style={{ MozAppearance: 'textfield' }}
                    />
                    <div className="absolute right-4 top-3 text-slate-400">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Monthly Rent Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Average Monthly Rent (₹)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      placeholder="e.g., 5000"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      style={{ MozAppearance: 'textfield' }}
                    />
                    <div className="absolute right-4 top-3 text-slate-400">
                      <DollarSign className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Occupancy Rate Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Current Occupancy Rate (%)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={occupancyRate}
                      onChange={(e) => setOccupancyRate(e.target.value)}
                      placeholder="e.g., 85"
                      min="1"
                      max="100"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
                      style={{ MozAppearance: 'textfield' }}
                    />
                    <div className="absolute right-4 top-3 text-slate-400">
                      <Percent className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">Leave blank for default 85%</p>
                </div>

                {/* Reset Button */}
                <button
                  onClick={() => {
                    setBeds("");
                    setMonthlyRent("");
                    setOccupancyRate("");
                  }}
                  className="w-full py-3 border-2 border-slate-300 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all duration-200"
                >
                  Reset Calculator
                </button>
              </div>

              {/* Quick Tips */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <h5 className="text-sm font-semibold text-blue-700 mb-2">Quick Reference:</h5>
                <div className="grid grid-cols-2 gap-2 text-xs text-blue-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Small: 20-50 beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Medium: 50-200 beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Large: 200+ beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Avg Rent: ₹3K-10K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card - Fixed height */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100 shadow-lg">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
                Your Savings Estimate
              </h4>
              
              <div className="space-y-6">
                {/* ROI Result */}
                <div className="text-center p-6 bg-white rounded-xl border border-emerald-200">
                  {roi.hasData ? (
                    <>
                      <div className="text-4xl font-bold text-emerald-600 mb-2">{roi.annualROI}%</div>
                      <div className="text-sm text-slate-600">Annual Return on Investment</div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-slate-400 mb-2">Enter Your Details</div>
                      <div className="text-sm text-slate-500">Fill in the form to see your potential savings</div>
                    </>
                  )}
                </div>

                {/* Monthly Breakdown - Only show when data exists */}
                {roi.hasData && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <div className="text-sm font-medium text-slate-700">Monthly Savings</div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">₹{roi.monthlySavings.toLocaleString()}</div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-blue-500" />
                          <div className="text-sm font-medium text-slate-700">Monthly Cost</div>
                        </div>
                        <div className="text-2xl font-bold text-slate-900">₹{roi.monthlyCost.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Net Gain */}
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-xl border border-emerald-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-emerald-700">Monthly Net Gain</div>
                          <div className="text-2xl font-bold text-emerald-600">₹{roi.monthlyNetGain.toLocaleString()}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-6 h-6 text-emerald-500" />
                          <div className="text-right">
                            <div className="text-xs text-emerald-600 font-medium">Payback in</div>
                            <div className="text-lg font-bold text-emerald-700">{roi.paybackMonths} month{roi.paybackMonths !== 1 ? 's' : ''}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Revenue & Occupancy */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-blue-700">Monthly Revenue</div>
                          <div className="text-xl font-bold text-blue-600">₹{roi.monthlyRevenue.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-blue-700">Occupancy</div>
                          <div className="text-xl font-bold text-blue-600">{roi.occupancyNum}%</div>
                        </div>
                      </div>
                      <div className="text-xs text-blue-600 mt-2">
                        Based on {beds} beds @ ₹{parseInt(monthlyRent).toLocaleString()}/bed
                      </div>
                    </div>
                  </>
                )}

                {/* Savings Breakdown */}
                {roi.hasData && (
                  <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg">
                    <p className="font-medium mb-2 text-slate-700">Where savings come from:</p>
                    <ul className="space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span>Reduced admin time and staff costs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span>Lower vacancy rates (target: 95%)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span>Faster payment collections</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/demo" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Get Personalized ROI Analysis
            </Link>
            <p className="text-sm text-slate-500 mt-3">
              Based on data from 150+ hostels using our platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingAndFAQ;