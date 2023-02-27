using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CleverLily.Models
{
    class Lily
    {
        public int age;
        public double washerPrice;
        public int toyPrice;
        public int Age { get { return age; } set { age = value; } }
        public double WasherPrice { get { return washerPrice; } set { washerPrice = value; } }
        public int ToyPrice { get { return toyPrice; } set { toyPrice = value; } }

        public Lily(int age, double washerPrice, int toyPrice)
        {
            this.age = age;
            this.washerPrice = washerPrice;
            this.toyPrice = toyPrice;
        }

        public string CanLilyBuyWasher()
        {
            double totalMoney = 0;
            int moneyForBday = 10;
            int amountOfToys = 0;

            for (int i = 1; i <= age; i++)
            {
                if (i % 2 == 0)
                {
                    totalMoney += moneyForBday;
                    moneyForBday += 10;
                } else
                {
                    amountOfToys++;
                }
            }

            totalMoney += amountOfToys * toyPrice;
            totalMoney -= (age / 2);

            if (totalMoney >= washerPrice)
            {
                return "Yes! " + (totalMoney - washerPrice).ToString("0.00");
            } else
            {
                return "No! " + (washerPrice - totalMoney).ToString("0.00");
            }
        }
    }
}
