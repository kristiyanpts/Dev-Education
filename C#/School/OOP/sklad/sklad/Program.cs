using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace sklad
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] Products = Console.ReadLine().Split(" ");
            var Quantities = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();
            var Prices = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();

            string Info = Console.ReadLine();

            while (Info.Split(" ")[0] != "done") 
            {
                int index = Array.IndexOf(Products, Info.Split(" ")[0]);
                int tempQuantity = int.Parse(Info.Split(" ")[1]);

                if (tempQuantity <= Quantities[index]) 
                {
                    Quantities[index] = Quantities[index] - tempQuantity;
                    Console.WriteLine("{0} x {1} costs {2:F2}", Info.Split(" ")[0], Info.Split(" ")[1], tempQuantity * Prices[index]);
                } else 
                {
                    Console.WriteLine("We do not have enough {0}", Info.Split(" ")[0]);
                }

                Info = Console.ReadLine();  
            }
        }
    }
}
