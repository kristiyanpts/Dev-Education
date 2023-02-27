using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using histogramMVC.Models;
using histogramMVC.Views;

namespace histogramMVC.Controllers
{
    class MainController
    {
        public Histogram Histogram;
        public Display Display;

        public MainController()
        {
            Display = new Display();
            Histogram = new Histogram(Display.AmountOfNumbers, Display.Numbers);
            Display.Percentages = Histogram.GetPercentage();
            Display.Print();
        }
    }
}
