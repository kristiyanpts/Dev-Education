using System;
using System.Linq;

namespace shop
{
    class Program
    {
        static void Main(string[] args)
        {
            var commandInfo = Console.ReadLine().Split(" ").ToArray();

            while (commandInfo[0] != "Close")
            {
                switch (commandInfo[0])
                {
                    case "Sell":
                        string barcode = commandInfo[1];
                        double amount = double.Parse(commandInfo[2]);
                        ProductInformation.Sell(barcode, amount);
                        break;
                    case "Add":
                        string newBarcode = commandInfo[1];
                        string newName = commandInfo[2];
                        double newPrice = double.Parse(commandInfo[3]);
                        double newAmount = double.Parse(commandInfo[4]);
                        ProductInformation.Add(newName, newBarcode, newPrice, newAmount);
                        break;
                    case "Update":
                        string updateBarcode = commandInfo[1];
                        double updateAmount = double.Parse(commandInfo[2]);
                        ProductInformation.Update(updateBarcode, updateAmount);
                        break;
                    case "PrintA":
                        ProductInformation.PrintA();
                        break;
                    case "PrintU":
                        ProductInformation.PrintU();
                        break;
                    case "PrintD":
                        ProductInformation.PrintD();
                        break;
                    case "Calculate":
                        ProductInformation.Calculate();
                        break;
                    default:
                        break;
                }

                commandInfo = Console.ReadLine().Split(" ").ToArray();
            }
        }
    }
}
