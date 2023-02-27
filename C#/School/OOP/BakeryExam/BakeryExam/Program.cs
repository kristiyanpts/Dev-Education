using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;

namespace BakeryExam
{
    class Program
    {
        static List<Cake> Cakes = new List<Cake>();
        static void Main(string[] args)
        {
            Console.Write("Въведи броя на торите: ");
            int amtOfCakes = int.Parse(Console.ReadLine());
            for (int i = 0; i < amtOfCakes; i++)
            {
                Console.Write("Име на торта: ");
                string tempName = Console.ReadLine();
                Console.Write("Цена на торта: ");
                double tempPrice = double.Parse(Console.ReadLine());
                Cake tempCake = new Cake(tempName, tempPrice);
                Cakes.Add(tempCake);
            }
            MostExpensiveCake(Cakes);
            LeastExpensiveCake(Cakes);
            Console.Write("Въведи тортата, която търсиш: ");
            string cakeNameSearchingFor = Console.ReadLine();
            FindCake(cakeNameSearchingFor, Cakes);
        }

        static void MostExpensiveCake(List<Cake> Cakes)
        {
            Cake mostExpensive = Cakes.ElementAt(0);
            for (int i = 0; i < Cakes.Count; i++)
            {
                Cake tempCake = Cakes.ElementAt(i);
                if (tempCake.Price > mostExpensive.Price)
                {
                    mostExpensive = tempCake;
                }
            }
            Console.Write("Най-скъпата торта е: ");
            mostExpensive.Print();
        }

        static void LeastExpensiveCake(List<Cake> Cakes)
        {
            Cake leastExpensive = Cakes.ElementAt(0);
            for (int i = 0; i < Cakes.Count; i++)
            {
                Cake tempCake = Cakes.ElementAt(i);
                if (tempCake.Price < leastExpensive.Price)
                {
                    leastExpensive = tempCake;
                }
            }
            Console.Write("Най-евтината торта е: ");
            leastExpensive.Print();
        }

        static void FindCake(string cakeNameSearchingFor, List<Cake> Cakes)
        {
            Cake cakeSearchingFor = Cakes.ElementAt(0);
            bool foundCake = false;
            for (int i = 0; i < Cakes.Count; i++)
            {
                Cake tempCake = Cakes.ElementAt(i);
                if (tempCake.Name == cakeNameSearchingFor)
                {
                    cakeSearchingFor = tempCake;
                    foundCake = true;
                }
            }
            if (foundCake)
            {
                Console.Write("Намерената торта е: ");
                cakeSearchingFor.Print();
            } else
            {
                Console.WriteLine("Не беше намерена торта с това име!");
            }
        }
    }
}
