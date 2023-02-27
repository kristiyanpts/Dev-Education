using System;

namespace areaOfATriangle
{
    class Program
    {
        static void Main(string[] args)
        {
            double a = double.Parse(Console.ReadLine());
            double b = double.Parse(Console.ReadLine());

            Console.WriteLine(findArea(a, b));
        }

        static double findArea(double a, double b) 
        {
            return (a * b) / 2;
        }
    }
}
