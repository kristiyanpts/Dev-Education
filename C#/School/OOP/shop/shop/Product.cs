using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace shop
{
    class Product
    {
        static public List<Product> MainList = new List<Product>();
        public string productName;
        public string productBarcode;
        public double productPrice;
        public double productQuantity;

        public string ProductName { get { return productName; } set { productName = value; } }
        public string ProductBarcode { get { return productBarcode; } set { productBarcode = value; } }
        public double ProductPrice { get { return productPrice; } set { productPrice = value; } }
        public double ProductQuantity { get { return productQuantity; } set { productQuantity = value; } }

        public Product(string productName, string productBarcode, double productPrice, double productQuantity)
        {
            this.productName = productName;
            this.productBarcode = productBarcode;
            this.productPrice = productPrice;
            this.productQuantity = productQuantity;
        }
    }

    public static class ProductInformation
    {
        static public void Sell(string barcode, double amountSold)
        {
            bool containsElement = false;
            for (int i = 0; i < Product.MainList.Count; i++)
            {
                if (Product.MainList.ElementAt(i).ProductBarcode == barcode)
                {
                    if (Product.MainList.ElementAt(i).ProductQuantity >= amountSold)
                    {
                        Product.MainList.ElementAt(i).ProductQuantity -= amountSold;
                        containsElement = true;
                        Console.WriteLine("От продукт {0} беше продадено количество {1}.", Product.MainList.ElementAt(i).ProductName, amountSold);
                    }
                    else
                    {
                        Console.WriteLine("Not enough quantity");
                    }
                }
            }

            if (!containsElement)
            {
                Console.WriteLine("Product doesn't exist");
            }
        }

        static public void Add(string name, string barcode, double price, double amount)
        {
            Product NewProduct = new Product(name, barcode, price, amount);
            Product.MainList.Add(NewProduct);
        }

        static public void Update(string barcode, double amount)
        {
            bool containsElement = false;
            for (int i = 0; i < Product.MainList.Count; i++)
            {
                if (Product.MainList.ElementAt(i).ProductBarcode == barcode)
                {
                    Product.MainList.ElementAt(i).ProductQuantity += amount;
                    containsElement = true;
                }
            }

            if (!containsElement)
            {
                Console.WriteLine("Please add your product first!");
            }
        }

        static public void PrintA()
        {
            Console.WriteLine("Налични продукти: ");
            List<Product> SortedList = Product.MainList.OrderBy(o => o.ProductName).ToList();
            for (int i = 0; i < SortedList.Count; i++)
            {
                Product tempProduct = SortedList.ElementAt(i);
                if (tempProduct.ProductQuantity > 0)
                {
                    Console.WriteLine("{0} -> Баркод: {1}, Цена: {2:F2} лв., Количество: {3}", tempProduct.ProductName, tempProduct.ProductBarcode, tempProduct.ProductPrice, tempProduct.ProductQuantity);
                }
            }
        }

        static public void PrintU()
        {
            Console.WriteLine("Неналични продукти: ");
            List<Product> SortedList = Product.MainList.OrderBy(o => o.ProductName).ToList();
            for (int i = 0; i < SortedList.Count; i++)
            {
                Product tempProduct = SortedList.ElementAt(i);
                if (tempProduct.ProductQuantity <= 0)
                {
                    Console.WriteLine("{0} -> Баркод: {1}, Цена: {2:F2} лв., Количество: {3}", tempProduct.ProductName, tempProduct.ProductBarcode, tempProduct.ProductPrice, tempProduct.ProductQuantity);
                }
            }
        }

        static public void PrintD()
        {
            Console.WriteLine("Налини продукти в намаляващ ред според количеството: ");
            List<Product> SortedList = Product.MainList.OrderByDescending(o => o.ProductQuantity).ToList();
            for (int i = 0; i < SortedList.Count; i++)
            {
                Product tempProduct = SortedList.ElementAt(i);
                if (tempProduct.ProductQuantity > 0)
                {
                    Console.WriteLine("{0} -> Баркод: {1}, Цена: {2:F2} лв., Количество: {3}", tempProduct.ProductName, tempProduct.ProductBarcode, tempProduct.ProductPrice, tempProduct.ProductQuantity);
                }
            }
        }

        static public void Calculate()
        {
            double sum = 0;
            for (int i = 0; i < Product.MainList.Count; i++)
            {
                Product tempProduct = Product.MainList.ElementAt(i);
                if (tempProduct.ProductQuantity > 0)
                {
                    sum += tempProduct.ProductQuantity * tempProduct.ProductPrice;
                }
            }
            Console.WriteLine("Обща сума: {0:F2} лв.", sum);
        }
    }
}
