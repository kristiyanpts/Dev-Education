using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace taskaBiblioteki.Models
{
    class Library
    {
        public string name;
        public double tax;
        public int age;

        public string Name { get { return name; } set { name = value; } }

        public double Tax { get { return tax; } set { tax = value; } }

        public int Age { get { return age; } set { age = value; } }

        public Library(string name, double tax, int age)
        {
            Name = name;
            Tax = tax;
            Age = age;
        }

        public double TaxDiscount()
        {
            double disc = 0;
            if (age <= 12)
            {
                disc = tax * 0.5;
            } else if (age > 12 && age <= 19)
            {
                disc = tax * 0.3;
            } else if (age > 19 && age <= 60)
            {
                disc = 0;
            } else if (age > 60)
            {
                disc = tax * 0.5;
            }
            return disc;
        }

        public double TotalTax(double disc)
        {
            double totalTax = tax - disc;
            return totalTax;
        }
    }
}
