using System;

namespace Vehicles
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Въведи автомобила: ");
            string brand = Console.ReadLine();
            Console.Write("Въведи година на производство: ");
            int yearOfProduction = int.Parse(Console.ReadLine());
            Console.Write("Въведи цена на ден: ");
            decimal dailyPrice = decimal.Parse(Console.ReadLine());
            Console.Write("Въведи мощността на автомобила: ");
            int horsePower = int.Parse(Console.ReadLine());
            Console.Write("Има ли климатик (True/False): ");
            bool hasAirConditioner = bool.Parse(Console.ReadLine());
            Console.Write("Има ли автостъкла (True/False): ");
            bool hasAutoGlass = bool.Parse(Console.ReadLine());
            Console.Write("Има ли ABS (True/False): ");
            bool hasAbs = bool.Parse(Console.ReadLine());
            Console.Write("За колко дни ще наемете автомобила: ");
            int days = int.Parse(Console.ReadLine());

            VehicleExtras Vehicle = new VehicleExtras(brand, yearOfProduction, dailyPrice, horsePower, hasAirConditioner, hasAutoGlass, hasAbs);

            Console.WriteLine("Години: {0}", Vehicle.YearsSinceProduction());
            Console.WriteLine("Цена за {0} дни: {1} лв.", days, Vehicle.RentPrice(days));
            Console.WriteLine("Цена за {0} дни (с екстри): {1} лв.", days, Vehicle.FinalRentPrice(days));
            Vehicle.PrintExtras();
        }
    }
}
