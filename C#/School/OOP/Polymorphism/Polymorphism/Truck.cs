using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class Truck
    {
        private double fuelAmount, fuelUsagePerKm, fuelCapacity;

        public double FuelAmount { get { return fuelAmount; } set { fuelAmount = value; } }
        public double FuelUsagePerKm { get { return fuelUsagePerKm; } set { fuelUsagePerKm = value; } }

        public double FuelCapacity { get { return fuelCapacity; } set { fuelCapacity = value; } }

        public Truck(double fuelAmount, double fuelUsagePerKm, double fuelCapacity)
        {
            this.fuelAmount = fuelAmount;
            this.fuelUsagePerKm = fuelUsagePerKm + 1.6;
            this.fuelCapacity = fuelCapacity;
        }

        public void Drive(int distance)
        {
            double fuelNeeded = distance * fuelUsagePerKm;

            if (fuelAmount >= fuelNeeded)
            {
                fuelAmount -= fuelNeeded;
                Console.WriteLine("Truck travelled {0} km", distance);
            }
            else
            {
                Console.WriteLine("Truck needs refueling");
            }
            CheckFuel();
        }

        public void Refuel(double liters)
        {
            double fuelAfterLeakage = liters * 0.95;
            fuelAmount += fuelAfterLeakage;
            CheckFuel();
        }

        public void CheckFuel()
        {
            if (fuelAmount < 0)
            {
                Console.WriteLine("Fuel must be a positive number");
            }
        }

        public void Print()
        {
            Console.WriteLine("Truck: {0:f2}", fuelAmount);
        }
    }
}
