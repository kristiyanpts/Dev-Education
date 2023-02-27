using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Vehicles
{
    class VehicleRent
    {
        private string brand;
        private int yearOfProduction;
        private decimal dailyPrice;
        private int horsePower;

        public string Brand { get { return brand; } set { brand = value; } }

        public int YearOfProduction { get { return yearOfProduction; } set { yearOfProduction = value; } }

        public decimal DailyPrice { get { return dailyPrice; } set { dailyPrice = value; } }

        public int HorsePower { get { return horsePower; } set { horsePower = value; } }

        public VehicleRent(string brand, int yearOfProduction, decimal dailyPrice, int horsePower)
        {
            Brand = brand;
            YearOfProduction = yearOfProduction;
            DailyPrice = dailyPrice;
            HorsePower = horsePower;
        }

        public int YearsSinceProduction()
        {
            return DateTime.Now.Year - yearOfProduction;
        }

        public decimal RentPrice(int days)
        {
            return dailyPrice * days;
        }

        public void Print()
        {
            Console.WriteLine("Автомобил {0}: \n-- Година на производство: {1}г. \n-- Цена на ден: {2:f2} лв. \n-- Мощност: {3} к.с.", brand, yearOfProduction, dailyPrice, horsePower);
        } 
    }
}
