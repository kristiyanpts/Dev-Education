using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using taskaBiblioteki.Models;
using taskaBiblioteki.Views;

namespace taskaBiblioteki.Controllers
{
    class MainController
    {
        public Library Library;
        public Display Display;

        public MainController()
        {
            Display = new Display();
            Library = new Library(Display.Name, Display.Tax, Display.Age);
            Display.TotalTax = Library.TotalTax(Library.TaxDiscount());
            Display.Print();
        }
    }
}
