using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using delenieBezOstatuk.Views;
using delenieBezOstatuk.Models;

namespace delenieBezOstatuk.Controllers
{
    class MainController
    {
        public Dividing Dividing;
        public Display Display;

        public MainController()
        {
            Display = new Display();
            Dividing = new Dividing(Display.NumbersAmount, Display.Numbers);
            Display.Percentages = Dividing.GetPercentages();
            Display.Print();
        }
    }
}
