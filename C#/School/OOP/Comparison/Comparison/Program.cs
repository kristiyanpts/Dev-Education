using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace Comparison
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи вида, първата и втората стойност разделени с разстояние: ");
            string input = Console.ReadLine();
            string[] mainInput = input.Split(" ").ToArray();
            switch (mainInput[0])
            {
                case "int":
                    Console.WriteLine(GetMax(int.Parse(mainInput[1]), int.Parse(mainInput[2])));
                    break;
                case "char":
                    Console.WriteLine(GetMax(char.Parse(mainInput[1]), char.Parse(mainInput[2])));
                    break;
                case "string":
                    Console.WriteLine(GetMax(mainInput[1], mainInput[2]));
                    break;
                default:
                    break;
            }
        }

        static int GetMax(int a, int b)
        {
            if (a > b)
            {
                return a;
            }
            else {
                return b;
            }
        }

        static char GetMax(char a, char b)
        {
            if (a.CompareTo(b) < 0)
            {
                return b;
            }
            else 
            {
                return a;
            }
        }

        static string GetMax(string a, string b)
        {
            if (a.Length > b.Length)
            {
                return a;
            }
            else 
            {
                return b;
            }
        }
    }
}
