using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleverLily.Views
{
    class Display
    {
        public int Age { get; set; }

        public double WasherPrice { get; set; }

        public int ToyPrice { get; set; }

        public string CanBuyText { get; set; }

        public Display()
        {
            Age = 0;
            WasherPrice = 0;
            ToyPrice = 0;
            CanBuyText = "";
            GetValues();
        }

        public void GetValues()
        {
            Console.Write("Въведи възрастта: ");
            Age = int.Parse(Console.ReadLine());
            Console.Write("Въведи цената на пералнята: ");
            WasherPrice = double.Parse(Console.ReadLine());
            Console.Write("Въведи цената на играчката: ");
            ToyPrice = int.Parse(Console.ReadLine());
        }

        public void Print()
        {
            Console.WriteLine(CanBuyText);
        }
    }
}
