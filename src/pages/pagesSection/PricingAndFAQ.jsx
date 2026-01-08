import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Calculator,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Percent,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

function PricingAndFAQ() {
  const navigate = useNavigate();
  const [head, setHead] = useState(1);
  const [billing, setBilling] = useState("monthly");
  const [isMobile, setIsMobile] = useState(false);
  
  // ROI Calculator State
  const [beds, setBeds] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [occupancyRate, setOccupancyRate] = useState("");

  const plans = useMemo(() => [
    { id: 1, name: "Starter Plan", monthly: 999, yearly: 999 * 12 * 0.8, features: ["Up to 50 Beds", "Basic Features", "Mobile App Access", "Email Support", "Standard Reports"], cta: "Buy Now" },
    { id: 2, name: "Professional Plan", monthly: 2499, yearly: 2499 * 12 * 0.8, features: ["Up to 200 Beds", "All Basic Features", "Advanced Analytics", "Priority Support", "Custom Branding", "Multiple Locations"], popular: true, cta: "Buy Now" },
    { id: 3, name: "Enterprise Plan", monthly: "Custom", yearly: "Custom", features: ["Unlimited Beds", "All Features Included", "Dedicated Account Manager", "Custom Integrations", "White-label Options", "API Access"], cta: "Contact Sales" },
  ], []);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      {/* Pricing Section */}
      <div className="pt-12 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto w-[92vw] px-4 md:px-0 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-3 md:mb-4">
            Simple Pricing
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Choose a plan that fits your hostel today—you can upgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-white border md:border-2 border-slate-300 rounded-full p-0.5 md:p-1 mt-4 md:mt-6 shadow-md md:shadow-lg">
            <button 
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${billing === "monthly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow' : 'text-slate-700'}`} 
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button 
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${billing === "yearly" ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow' : 'text-slate-700'}`} 
              onClick={() => setBilling("yearly")}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Mobile Pricing Cards */}
        {isMobile ? (
          <div className="px-4">
            <div className="relative max-w-sm mx-auto">
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mb-6">
                <button 
                  onClick={() => setHead(prev => prev === 0 ? plans.length - 1 : prev - 1)}
                  className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center shadow-md"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-700" />
                </button>
                
                <div className="text-sm font-medium text-slate-700">
                  {head + 1} of {plans.length}
                </div>
                
                <button 
                  onClick={() => setHead(prev => (prev + 1) % plans.length)}
                  className="w-10 h-10 rounded-full bg-white border border-slate-300 flex items-center justify-center shadow-md"
                >
                  <ChevronRight className="w-5 h-5 text-slate-700" />
                </button>
              </div>

              {/* Mobile Plan Card */}
              <div className="w-full bg-white rounded-2xl border-2 border-blue-500 shadow-xl p-6">
                {plans[head].popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow">
                    Most Popular
                  </div>
                )}

                <div className="pt-2">
                  <h3 className="text-xl font-black text-slate-900 text-center mb-1">
                    {plans[head].name}
                  </h3>
                  {plans[head].popular && (
                    <p className="text-slate-600 text-center text-xs mb-3">
                      Best for growing hostels
                    </p>
                  )}
                  
                  <div className="text-3xl font-black text-blue-600 text-center mb-4">
                    {typeof plans[head].monthly === "string" 
                      ? plans[head].monthly 
                      : billing === "monthly" 
                        ? `₹${plans[head].monthly.toLocaleString()}/mo`
                        : `₹${Math.round(plans[head].yearly).toLocaleString()}/yr`
                    }
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plans[head].features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="w-4 h-4 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {plans[head].cta === "Contact Sales" ? (
                    <Link 
                      to="/contact" 
                      className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 rounded-xl font-bold shadow hover:shadow-md transition-all duration-300 text-base"
                    >
                      Contact Sales
                    </Link>
                  ) : (
                    <button 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold shadow hover:shadow-md transition-all duration-300 text-base"
                      onClick={() => navigate("/checkout", { state: { plan: plans[head].name, billing } })}
                    >
                      Buy Now
                    </button>
                  )}
                </div>
              </div>

              {/* Plan Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {plans.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setHead(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === head ? 'bg-blue-600 w-4' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Carousel */
          <div className="relative h-[34rem] max-w-6xl mx-auto hidden md:block">
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
                <div 
                  key={plan.id} 
                  className={`absolute top-0 left-1/2 w-80 bg-white rounded-3xl border-2 transition-all duration-500 cursor-pointer ${isActive ? 'border-blue-500 shadow-2xl' : 'border-slate-200 shadow-lg'}`} 
                  style={{ transform, opacity, zIndex }} 
                  onClick={() => setHead(index)}
                >
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
        )}
      </div>

      {/* ROI Calculator Section */}
      <div className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto w-[92vw] px-4 md:px-0">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              <Calculator className="w-3 h-3 md:w-4 md:h-4" />
              ROI CALCULATOR
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
              Calculate Your <span className="text-emerald-600">Potential Savings</span>
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              See how much you can save with automated hostel management
            </p>
          </div>
          
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-200 shadow">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                Enter Your Details
              </h4>
              
              <div className="space-y-4 md:space-y-6">
                {/* Beds Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                    Total Number of Beds
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={beds}
                      onChange={(e) => setBeds(e.target.value)}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-2.5 md:py-3 border border-slate-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-base"
                    />
                    <div className="absolute right-4 top-2.5 md:top-3 text-slate-400">
                      <Users className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>

                {/* Monthly Rent Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
                    Average Monthly Rent (₹)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(e.target.value)}
                      placeholder="e.g., 5000"
                      className="w-full px-4 py-2.5 md:py-3 border border-slate-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-base"
                    />
                    <div className="absolute right-4 top-2.5 md:top-3 text-slate-400">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>

                {/* Occupancy Rate Input */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 md:mb-2">
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
                      className="w-full px-4 py-2.5 md:py-3 border border-slate-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-base"
                    />
                    <div className="absolute right-4 top-2.5 md:top-3 text-slate-400">
                      <Percent className="w-4 h-4 md:w-5 md:h-5" />
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
                  className="w-full py-2.5 md:py-3 border-2 border-slate-300 text-slate-700 rounded-lg md:rounded-xl font-medium hover:bg-slate-50 transition-all duration-200 text-base"
                >
                  Reset Calculator
                </button>
              </div>

              {/* Quick Tips */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-200">
                <h5 className="text-xs md:text-sm font-semibold text-blue-700 mb-1 md:mb-2">Quick Reference:</h5>
                <div className="grid grid-cols-2 gap-1 md:gap-2 text-xs text-blue-600">
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Small: 20-50 beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Medium: 50-200 beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Large: 200+ beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs">Avg Rent: ₹3K-10K</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-emerald-100 shadow">
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                Your Savings Estimate
              </h4>
              
              <div className="space-y-4 md:space-y-6">
                {/* ROI Result */}
                <div className="text-center p-4 md:p-6 bg-white rounded-lg md:rounded-xl border border-emerald-200">
                  {roi.hasData ? (
                    <>
                      <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-1 md:mb-2">{roi.annualROI}%</div>
                      <div className="text-sm text-slate-600">Annual Return on Investment</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xl md:text-2xl font-bold text-slate-400 mb-1 md:mb-2">Enter Your Details</div>
                      <div className="text-xs md:text-sm text-slate-500">Fill in the form to see your potential savings</div>
                    </>
                  )}
                </div>

                {/* Monthly Breakdown */}
                {roi.hasData && (
                  <>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="bg-white p-3 md:p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                          <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-emerald-500" />
                          <div className="text-xs md:text-sm font-medium text-slate-700">Monthly Savings</div>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-slate-900">₹{roi.monthlySavings.toLocaleString()}</div>
                      </div>
                      
                      <div className="bg-white p-3 md:p-4 rounded-lg border border-slate-200">
                        <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                          <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-blue-500" />
                          <div className="text-xs md:text-sm font-medium text-slate-700">Monthly Cost</div>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-slate-900">₹{roi.monthlyCost.toLocaleString()}</div>
                      </div>
                    </div>

                    {/* Net Gain */}
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 md:p-5 rounded-lg md:rounded-xl border border-emerald-200">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                        <div>
                          <div className="text-xs md:text-sm font-medium text-emerald-700">Monthly Net Gain</div>
                          <div className="text-xl md:text-2xl font-bold text-emerald-600">₹{roi.monthlyNetGain.toLocaleString()}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                          <div className="text-right">
                            <div className="text-xs text-emerald-600 font-medium">Payback in</div>
                            <div className="text-base md:text-lg font-bold text-emerald-700">{roi.paybackMonths} month{roi.paybackMonths !== 1 ? 's' : ''}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Revenue & Occupancy */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg md:rounded-xl p-3 md:p-4">
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <div>
                          <div className="text-xs md:text-sm font-medium text-blue-700">Monthly Revenue</div>
                          <div className="text-lg md:text-xl font-bold text-blue-600">₹{roi.monthlyRevenue.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs md:text-sm font-medium text-blue-700">Occupancy</div>
                          <div className="text-lg md:text-xl font-bold text-blue-600">{roi.occupancyNum}%</div>
                        </div>
                      </div>
                      <div className="text-xs text-blue-600 mt-1 md:mt-2">
                        Based on {beds} beds @ ₹{parseInt(monthlyRent).toLocaleString()}/bed
                      </div>
                    </div>
                  </>
                )}

                {/* Savings Breakdown */}
                {roi.hasData && (
                  <div className="text-xs md:text-sm text-slate-600 bg-slate-50 p-3 md:p-4 rounded-lg">
                    <p className="font-medium mb-1 md:mb-2 text-slate-700">Where savings come from:</p>
                    <ul className="space-y-1 md:space-y-2 text-xs text-slate-600">
                      <li className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full"></div>
                        <span>Reduced admin time and staff costs</span>
                      </li>
                      <li className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full"></div>
                        <span>Lower vacancy rates (target: 95%)</span>
                      </li>
                      <li className="flex items-center gap-1 md:gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-400 rounded-full"></div>
                        <span>Faster payment collections</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 md:mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold shadow hover:shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 md:hover:-translate-y-1 text-base md:text-base"
            >
              Get a Free Demo
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingAndFAQ;