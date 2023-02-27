using System;

namespace convertor
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи температурата: ");
            double tempToConv = double.Parse(Console.ReadLine());

            Console.WriteLine("{0:F2}", convertTemp(tempToConv));
        }

        static double convertTemp(double frTemp) 
        {
            return (frTemp - 32) * 5 / 9;
        }
    }
}
