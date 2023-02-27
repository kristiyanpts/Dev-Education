using System;

namespace dzi_26
{
    class Program
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            ItemList Products = new ItemList();

            for (int i = 0; i < n; i++)
            {
                string description = Console.ReadLine();
                double price = double.Parse(Console.ReadLine());
                Item Product = new Item(description, price);
                Products.add(Product);
            }

            for (int i = 0; i < Products.size(); i++)
            {
                Console.WriteLine(Products.get(i));
            }
        }
    }
}
