using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace travelMVC.Views
{
    class Display
    {
        public double Budget { get; set; }

        public string Season { get; set; }

        public string Destination { get; set; }

        public string TravelType { get; set; }

        public double MoneySpent { get; set; }

        public Display()
        {
            Budget = 0;
            Season = "";
            Destination = "";
            TravelType = "";
            MoneySpent = 0;
            GetValues();
        }

        public void GetValues()
        {
            Console.Write("Въведи бюджета: ");
            Budget = double.Parse(Console.ReadLine());
            Console.Write("Въведи сезона: ");
            Season = Console.ReadLine();
        }

        public void Print()
        {
            Console.WriteLine("Somewhete in {0}", Destination);
            Console.WriteLine("{0} - {1:F2}", TravelType, MoneySpent);
        }
    }
}
