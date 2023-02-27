using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace histogramMVC.Views
{
    class Display
    {
        public int AmountOfNumbers { get; set; }

        static public List<double> Numbers { get; set; }

        public string[] Percentages { get; set; }

        public Display()
        {
            AmountOfNumbers = 0;
            Numbers = new List<double>();
            Percentages = new string[5];
            GetValues();
        }

        public void GetValues()
        { 
            Console.Write("Въведи броя на числата: ");
            AmountOfNumbers = int.Parse(Console.ReadLine());
            Console.Write("Въведи числата разделени с интервал: ");
            var nums = Console.ReadLine().Split(" ").Select(double.Parse).ToArray();
            for (int i = 0; i < nums.Length; i++)
            {
                Numbers.Add(nums[i]);
            }
        }

        public void Print()
        {
            Console.WriteLine(String.Join("\n", Percentages));
        }
    }
}
