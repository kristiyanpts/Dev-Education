using System;

namespace _2
{
    class Program
    {
        static void Main(string[] args)
        {
            double n = double.Parse(Console.ReadLine());
            double power = double.Parse(Console.ReadLine());

            Console.WriteLine(raisePower(n, power));
        }

        static double raisePower(double n, double power) 
        {
            return Math.Pow(n, power);
        }
    }
}
