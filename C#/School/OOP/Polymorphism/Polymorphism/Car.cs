using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polymorphism
{
    class Car
    {
        private double fuelAmount, fuelUsagePerKm, fuelCapacity;

        public double FuelAmount { get { return fuelAmount; } set { fuelAmount = value; } }
        public double FuelUsagePerKm { get { return fuelUsagePerKm; } set { fuelUsagePerKm = value; } }
        public double FuelCapacity { get { return fuelCapacity; } set { fuelCapacity = value; } }

        public Car(double fuelAmount, double fuelUsagePerKm, double fuelCapacity)
        {
            this.fuelAmount = fuelAmount;
            this.fuelUsagePerKm = fuelUsagePerKm + 0.9;
            this.fuelCapacity = fuelCapacity;
        }

        public void Drive(int distance)
        {
            double fuelNeeded = distance * fuelUsagePerKm;

            if (fuelAmount >= fuelNeeded)
            {
                fuelAmount -= fuelNeeded;
                Console.WriteLine("Car travelled {0} km", distance);
            }
            else
            {
                Console.WriteLine("Car needs refueling");
            }
            CheckFuel();
        }

        public void Refuel(double liters)
        {
                if (fuelAmount + liters <= fuelCapacity)
                {
                    fuelAmount += liters;
                }
                else
                {
                    Console.WriteLine("Cannot fit fuel in tank");
                }
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
            Console.WriteLine("Car: {0:f2}", fuelAmount);
        }
    }
}
