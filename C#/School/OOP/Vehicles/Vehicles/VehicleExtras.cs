using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vehicles
{
    class VehicleExtras : VehicleRent
    {
        private bool airConditioner;
        private bool autoGlass;
        private bool abs;

        public bool AirConditioner { get { return airConditioner; } set { airConditioner = value; } }

        public bool AutoGlass { get { return autoGlass; } set { autoGlass = value; } }

        public bool ABS { get { return abs; } set { abs = value; } }

        public VehicleExtras(string brand, int yearOfProduction, decimal dailyPrice, int horsePower, bool airConditioner, bool autoGlass, bool abs) : base (brand, yearOfProduction, dailyPrice, horsePower)
        {
            AirConditioner = airConditioner;
            AutoGlass = autoGlass;
            ABS = abs;
        }

        public decimal FinalRentPrice(int days)
        {
            if (airConditioner || autoGlass || abs)
            {
                DailyPrice += 25;
                return RentPrice(days);
            }
            else
            {
                return RentPrice(days);
            }
        }

        public void PrintExtras()
        {
            if (airConditioner || autoGlass || abs)
            {
                Print();
                Console.WriteLine("-- Vehicle has extras!");
            } 
            else
            {
                Print();
                Console.WriteLine("-- Vehicle has no extras!");
            }
        }
    }
}
