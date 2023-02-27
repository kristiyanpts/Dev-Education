using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pool
{
    class DoubleWalledCylinder : BuildPool
    {
        private double rOut;

        public double ROut { get { return rOut; } set { rOut = value; } }

        public DoubleWalledCylinder(double radius, double height, double rOut) : base (radius, height)
        {
            this.rOut = rOut;
        }

        public double DoubleWalledVolume()
        {
            return Math.PI * Height * Math.Abs((Math.Pow(rOut, 2) - Math.Pow(Radius, 2)));
        }

        public double DoubleWalledWaterPrice(double pricePerLiter, double tax)
        {
            return DoubleWalledVolume() * pricePerLiter * (1 + tax / 100);
        }

        public void DoubleWalledPrint()
        {
            Print();
            Console.WriteLine("-- Външен радиус: {0} м.", rOut);
        }
    }
}
