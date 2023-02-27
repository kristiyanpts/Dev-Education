using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BakeryExam
{
    class Cake
    {
        public string name;
        public double price;
        public string Name { get { return name; } set { name = value; } }
        public double Price { get { return price; } set { price = value; } }

        public Cake(string name, double price)
        {
            Name = name;
            Price = price;
        }

        public void Print()
        {
            Console.WriteLine("Торта: {0} | Цена: {1:F2} лв.", name, price);
        }
    }
}
