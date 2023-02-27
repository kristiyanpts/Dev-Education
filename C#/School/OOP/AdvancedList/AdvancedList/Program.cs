using System;
using System.Linq;

namespace AdvancedList
{
    class Program
    {
        static void Main(string[] args)
        {
            string type = Console.ReadLine();
            switch (type)
            {
                case "string":
                    AdvancedList<string> List = new AdvancedList<string>();
                    var commandInfo = Console.ReadLine().Split(' ').ToArray();
                    while (commandInfo[0] != "END")
                    {
                        switch (commandInfo[0])
                        {
                            case "Add":
                                string elementToAdd = commandInfo[1];
                                List.Add(elementToAdd);
                                break;
                            case "Remove":
                                int index = int.Parse(commandInfo[1]);
                                List.Remove(index);
                                break;
                            case "Contains":
                                string elementSearchingFor = commandInfo[1];
                                Console.WriteLine(List.Contains(elementSearchingFor));
                                break;
                            case "Swap":
                                int fElement = int.Parse(commandInfo[1]);
                                int sElement = int.Parse(commandInfo[2]);
                                List.Swap(fElement, sElement);
                                break;
                            case "Greater":
                                string minElement = commandInfo[1];
                                Console.WriteLine(List.Greater(minElement));
                                break;
                            case "Max":
                                Console.WriteLine(List.Max());
                                break;
                            case "Min":
                                Console.WriteLine(List.Min());
                                break;
                            case "Print":
                                List.Print();
                                break;
                            default:
                                break;
                        }

                        commandInfo = Console.ReadLine().Split(' ').ToArray();
                    }
                    break;
                default:
                    break;
            }
        }
    }
}
