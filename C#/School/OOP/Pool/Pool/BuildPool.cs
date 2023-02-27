using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pool
{
    class BuildPool
    {
        private double radius;
        private double height;

        public double Radius { get { return radius; } set { radius = value; } }
        public double Height { get { return height; } set { height = value; } }

        public BuildPool(double radius, double height)
        {
            this.radius = radius;
            this.height = height;
        }

        public double Volume()
        {
            return Math.PI * radius * height;
        }   

        public double WaterPrice(double pricePerLiter, double tax)
        {
            return Volume() * pricePerLiter * (1 + tax / 100);
        }

        public void Print()
        {
            Console.WriteLine("\nИнформация за басейн: \n-- Радиус: {0} м.\n-- Височина: {1} м.", radius, height);
        }
    }
}
