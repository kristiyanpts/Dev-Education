using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace delenieBezOstatuk.Views
{
    class Display
    {
        public int NumbersAmount { get; set; }

        public List<int> Numbers { get; set; }

        public double[] Percentages { get; set; }

        public Display()
        {
            NumbersAmount = 0;
            Numbers = new List<int>();
            GetValues();
        }

        public void GetValues()
        {
            Console.Write("Въведи броя на числата: ");
            NumbersAmount = int.Parse(Console.ReadLine());
            Console.Write("Въведи числата на един ред разделени с интервал: ");
            var tempNumbers = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
            for (int i = 0; i < tempNumbers.Length; i++)
            {
                Numbers.Add(tempNumbers[i]);
            }
        }

        public void Print()
        {
            for (int i = 0; i < Percentages.Length; i++)
            {
                Console.WriteLine("{0:F2}%", Percentages[i]);
            }
        }
    }
}
