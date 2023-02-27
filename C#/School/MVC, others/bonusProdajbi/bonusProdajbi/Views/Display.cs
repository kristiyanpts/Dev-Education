using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskaBiblioteki.Views
{
    class Display
    {
        public string Name { get; set; }

        public double Tax { get; set; }

        public int Age { get; set; }

        public double TotalTax { get; set; }

        public Display()
        {
            Name = "";
            Tax = 0;
            Age = 0;
            TotalTax = 0;
            GetValues();
        }

        public void GetValues()
        {
            Console.Write("Въведи име: ");
            Name = Console.ReadLine();
            Console.Write("Въведи първоначална такса: ");
            Tax = double.Parse(Console.ReadLine());
            Console.Write("Въведи години: ");
            Age = int.Parse(Console.ReadLine());
        }

        public void Print()
        {
            Console.WriteLine("Таксата след намалението е: {0:f2}", TotalTax);
        }
    }
}
