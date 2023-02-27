using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CleverLily.Models;
using CleverLily.Views;

namespace CleverLily.Controllers
{
    class MainController
    {
        public Display Display;
        public Lily Lily;

        public MainController()
        {
            Display = new Display();
            Lily = new Lily(Display.Age, Display.WasherPrice, Display.ToyPrice);
            Display.CanBuyText = Lily.CanLilyBuyWasher();
            Display.Print();
        }
    }
}
