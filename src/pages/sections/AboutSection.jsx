import { CalendarDays, Fingerprint, BarChart3, Sparkles, Settings, CreditCard, Smartphone, Wrench, Utensils } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#e8f0ee] via-[#e1efec] to-[#edf5f3] px-5 py-16 sm:px-6 lg:px-8 xl:px-10">
      <div className="mx-auto max-w-7xl">

        
        
<div className="mb-16 text-center flex flex-col items-center">
  <h2 className="text-[2.8rem] font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-[3.5rem] lg:text-[4.2rem]">
    Architected for{" "}
    <span className="bg-gradient-to-r from-[#0d5c63] to-[#1b7f8e] bg-clip-text text-transparent">
      Efficiency
    </span>
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
    Every module is precision-engineered to eliminate friction in the modern
    hostel management lifecycle.
  </p>
</div>

        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          
          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 md:col-span-2 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              
              <div className="min-w-0 flex-1">
                <CalendarDays className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
                <h3 className="text-xl font-bold text-slate-900">
                  Day-wise Room Booking
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                  Granular control over availability. Manage check-ins and check-outs with a visual timeline that mirrors your hostel's physical layout.
                </p>

                <button className="mt-5 text-sm font-semibold text-[#0d5c63]">
                  Explore Visual Timeline →
                </button>
              </div>

              
              <img
                src="/img/Booking.jpeg"
                alt=""
                className="h-48 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 lg:h-40 lg:w-60 xl:w-72"
              />
            </div>
          </div>

          
          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[280px]">
            <Fingerprint className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
            <h3 className="text-lg font-bold text-slate-900">Digital KYC On boarding</h3>
            <p className="mt-3 text-sm text-slate-600">
              Paperless resident verification. Securely collect documents and verify identities in seconds and make seamless the onboarding process.
            </p>
          </div>

          
<div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 md:col-span-2 hover:-translate-y-2 hover:shadow-xl">
  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
    
    
    <div className="min-w-0 flex-1">
      <BarChart3 className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />

      <h3 className="text-xl font-bold text-slate-900">
        Advanced Analytics & Reports
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
        Real-time dashboards for occupancy, revenue, and performance. Unlock
        data-driven insights with predictive modeling for occupancy trends and
        revenue forecasting.
      </p>

      
      <div className="mt-6 flex flex-wrap gap-4">
        <div className="rounded-xl bg-slate-100 px-4 py-3 transition-colors duration-300 group-hover:bg-[#dcebea]">
          <p className="text-xs text-slate-500">OCCUPANCY GROWTH</p>
          <p className="text-lg font-bold text-slate-900">+24%</p>
        </div>

        <div className="rounded-xl bg-slate-100 px-4 py-3 transition-colors duration-300 group-hover:bg-[#dcebea]">
          <p className="text-xs text-slate-500">REVENUE FORECAST</p>
          <p className="text-lg font-bold text-slate-900">$12.4k</p>
        </div>
      </div>
    </div>

    
    <div className="flex-shrink-0">
      <img
        src="/img/Analytical.jpeg"
        alt="Analytics"
        className="h-48 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56 lg:h-40 lg:w-64 xl:w-72"
      />
    </div>
  </div>
</div>

          
          <div className="group rounded-2xl bg-[#0d5c63] p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-[#09454a] md:min-h-[280px]">
            <Sparkles className="mb-3 h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
            <h3 className="text-lg font-bold">Intelligent Room Allocation</h3>
            <p className="mt-3 text-sm opacity-80">
              Smart allocation based on availability, gender, and preferences.
              The platform automatically assigns rooms based on multiple parameters: gender compatibility, tenant preferences, special requirements, duration of stay, and payment status. Real-time vacancy tracking prevents overbooking while optimization algorithms maximize space utilization.
              
            </p>
          </div>

          
          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[280px]">
            <Settings className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
            <h3 className="font-bold text-slate-900">Mobile Apps for Admins</h3>
            <p className="mt-2 text-sm text-slate-600">
              Manage everything on the go with powerful mobile apps.Take your hostel management mobile with our feature-rich Android and iOS apps
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[280px]">
            <CreditCard className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
            <h3 className="font-bold text-slate-900">Automated Payments</h3>
            <p className="mt-2 text-sm text-slate-600">
              Streamline your financial operations with our comprehensive payment and billing system. Automate rent collection through UPI, credit/debit cards, net banking, and wallets.
             
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[280px]">
            <Smartphone className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
            <h3 className="font-bold text-slate-900">Tenant Mobile App</h3>
            <p className="mt-2 text-sm text-slate-600">
              Tenants enjoy seamless experience: book rooms, pay rent, raise complaints, check announcements, and access digital agreements. Both apps work offline with sync capabilities, support multiple languages, and offer biometric login for enhanced security.",
            </p>
          </div>

          <div className="group rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:min-h-[280px]">
            <Wrench className="mb-3 h-6 w-6 text-slate-500 transition-colors duration-300 group-hover:text-[#0d5c63]" />
            <h3 className="font-bold text-slate-900">Maintenance</h3>
            <p className="mt-2 text-sm text-slate-600">
            Transform your maintenance operations with our comprehensive ticketing system. Residents can raise complaints with photos/videos, categorize by priority (emergency, high, medium, low), and track resolution in real-time. The system automatically assigns tickets to appropriate staff, sets SLAs based on priority, and sends updates to residents.
            </p>
           
          </div>

          
<div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 md:col-span-2 hover:-translate-y-2 hover:shadow-xl">
  <div className="grid lg:grid-cols-2">

    
    <div className="p-8 flex flex-col justify-center">
      
      <div className="mb-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-slate-200/70 flex items-center justify-center">
          <Utensils className="h-5 w-5 text-slate-600 transition-colors duration-300 group-hover:text-[#0d5c63]" />
        </div>
        <span className="text-lg font-semibold text-[#0d5c63]">
          Mess Management
        </span>
      </div>

      
      <h3 className="text-2xl font-extrabold text-slate-900 leading-tight sm:text-3xl">
        Seamless Mess <br /> Management
      </h3>

      
      <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
        Manage daily menus, meal counts, and food planning efficiently.
      </p>

      
      <div className="mt-6 flex flex-col gap-3">
        <div className="w-full rounded-xl bg-slate-100 px-4 py-3 sm:w-fit">
          <span className="text-[#0d5c63] font-medium">
            Create weekly/monthly menus with nutritional information
          </span>
         
        </div>

        <div className="w-full rounded-xl bg-slate-100 px-4 py-3 sm:w-fit">
          <span className="text-[#0d5c63] font-medium">
            Automatically manage inventory and handle special dietary requirements.
          </span>
          
        </div>
      </div>
    </div>

    
    <div className="h-full w-full">
      <img
        src="/img/Mess.jpeg"
        alt="Mess Management"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
