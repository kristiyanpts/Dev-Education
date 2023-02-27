using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using travelMVC.Models;
using travelMVC.Views;

namespace travelMVC.Controllers
{
    class MainController
    {
        public Travel Travel;
        public Display Display;

        public MainController()
        {
            Display = new Display();
            Travel = new Travel(Display.Budget, Display.Season);
            Display.MoneySpent = Travel.MoneySpent();
            Display.Destination = Travel.GetTravelDestination();
            Display.TravelType = Travel.GetTravelType();
            Display.Print();
        }
    }
}
