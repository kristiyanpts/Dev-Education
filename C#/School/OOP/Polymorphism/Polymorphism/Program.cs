using System;
using System.Linq;

namespace Polymorphism
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи информация за колата: ");
            var carInfo = Console.ReadLine().Split(" ").ToArray();
            Console.Write("Въведи информация за камиона: ");
            var truckInfo = Console.ReadLine().Split(" ").ToArray();
            Console.Write("Въведи информация за буса: ");
            var busInfo = Console.ReadLine().Split(" ").ToArray();
            Console.Write("Въведи броя на командите: ");
            int n = int.Parse(Console.ReadLine());

            Car Car = new Car(double.Parse(carInfo[1]), double.Parse(carInfo[2]), double.Parse(carInfo[3]));
            Truck Truck = new Truck(double.Parse(truckInfo[1]), double.Parse(truckInfo[2]), double.Parse(truckInfo[3]));
            Bus Bus = new Bus(double.Parse(busInfo[1]), double.Parse(busInfo[2]), double.Parse(busInfo[3]));

            for (int i = 0; i < n; i++)
            {
                var command = Console.ReadLine().Split(" ").ToArray();

                switch (command[0])
                {
                    case "Drive":
                        if (command[1] == "Car")
                        {
                            Car.Drive(int.Parse(command[2]));
                        } 
                        else if (command[1] == "Truck")
                        {
                            Truck.Drive(int.Parse(command[2]));
                        }
                        else if (command[1] == "Bus")
                        {
                            Bus.Drive(int.Parse(command[2]));
                        }
                        break;
                    case "Refuel":
                        if (command[1] == "Car")
                        {
                            Car.Refuel(double.Parse(command[2]));
                        }
                        else if (command[1] == "Truck")
                        {
                            Truck.Refuel(double.Parse(command[2]));
                        }
                        else if (command[1] == "Bus")
                        {
                            Bus.Refuel(int.Parse(command[2]));
                        }
                        break;
                    case "DriveEmpty":
                        Bus.FuelUsagePerKm += 1.4;
                        Bus.Drive(int.Parse(command[2]));
                        Bus.FuelUsagePerKm = double.Parse(busInfo[3]);
                        break;
                    default:
                        break;
                }
            }

            Car.Print();
            Truck.Print();
            Bus.Print();
        }
    }
}
