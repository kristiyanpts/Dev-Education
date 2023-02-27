using System;
using System.Collections.Generic;

namespace obrabotkaNaMasiv
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи елементите на масива: ");
            string[] arr = Console.ReadLine().Split(" ");
            Console.Write("Въведи броя на командите: ");
            int commandCount = int.Parse(Console.ReadLine());
            for (int i = 0; i < commandCount; i++)
            {
                Console.Write("Въведи команда: ");
                string command = Console.ReadLine();
                int position = 0;
                string txtReplace = "";
                if (command.Split(" ")[0] == "Replace") 
                {
                    position = int.Parse(command.Split(" ")[1]);
                    txtReplace = command.Split(" ")[2];
                }
                switch (command.Split(" ")[0])
                {
                    case "Reverse":
                        Array.Reverse(arr);
                        break;
                    case "Distinct":
                        List<string> uniqueElems = new List<string>();
                        for (int k = 0; k < arr.Length; k++)
                        {
                            if (!uniqueElems.Contains(arr[k])) 
                            {
                                uniqueElems.Add(arr[k]);
                            }
                        }
                        arr = uniqueElems.ToArray();
                        break;
                    case "Replace":
                        arr[position] = txtReplace;
                        break;
                    default:
                        break;  
                }
            }
            Console.WriteLine("Изход: " + String.Join(", ", arr));
        }
    }
}