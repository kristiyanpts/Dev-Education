using System;

namespace Pool
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи радиуса: ");
            double radius = double.Parse(Console.ReadLine());
            Console.Write("Въведи височината: ");
            double height = double.Parse(Console.ReadLine());
            BuildPool Pool = new BuildPool(radius, height);

            Console.Write("Въведи радиуса: ");
            radius = double.Parse(Console.ReadLine());
            Console.Write("Въведи височината: ");
            height = double.Parse(Console.ReadLine());
            Console.Write("Въведи външния радиус: ");
            double rOut = double.Parse(Console.ReadLine());
            DoubleWalledCylinder DoubleWalledPool = new DoubleWalledCylinder(radius, height, rOut);

            Console.Write("Въведи цена на литър: ");
            double pricePerLiter = double.Parse(Console.ReadLine());
            Console.Write("Въведи ДДС: ");
            double tax = double.Parse(Console.ReadLine());

            Pool.Print();
            Console.WriteLine("-- Обем: {0:F2} куб.м.\n-- Цена за вода: {1:F2} лв.", Pool.Volume(), Pool.WaterPrice(pricePerLiter, tax));
            DoubleWalledPool.Print();
            Console.WriteLine("-- Обем: {0:F2} куб.м.\n-- Цена за вода: {1:F2} лв.", DoubleWalledPool.DoubleWalledVolume(), DoubleWalledPool.DoubleWalledWaterPrice(pricePerLiter, tax));
        }
    }
}
