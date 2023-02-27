using System;

namespace PersonEmployee
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведе броя на служителите: ");
            int employeeAmt = int.Parse(Console.ReadLine());

            for (int i = 0; i < employeeAmt; i++)
            {
                Console.Write("Въведи името на служителя: ");
                string empName = Console.ReadLine();
                Console.Write("Въведи годините на служителя: ");
                int age = int.Parse(Console.ReadLine());
                Console.Write("Въведи работното място на служителя: ");
                string org = Console.ReadLine();
                Console.Write("Въведи броя на банковите акаунти на служителя: ");
                int bankAccAmt = int.Parse(Console.ReadLine());

                Employee person = new Employee(empName, age, org);

                for (int k = 0; k < bankAccAmt; k++)
                {
                    Console.Write("Банков акаунт --- Въведи ID на акаунта: ");
                    int accId = int.Parse(Console.ReadLine());
                    Console.Write("Банков акаунт --- Въведи начален баланс на акаунта: ");
                    decimal startBalance = decimal.Parse(Console.ReadLine());

                    BankAccount tempAccount = new BankAccount();
                    tempAccount.ID = accId;
                    tempAccount.Balance = startBalance;

                    Console.WriteLine("\n==========================================\n");
                    Console.WriteLine("ЗАПОЧВАНЕ НА ОПЕРАЦИИ СВЪРЗАНИ С АКАУНТ {0}", accId);
                    Console.WriteLine("Видове операции: Deposit (Deposit 20), Withdraw (Withdraw 55.10) | END - За прекратяване");
                    Console.WriteLine("\n==========================================\n");

                    var command = Console.ReadLine().Split(" ");
                    while (command[0] != "END")
                    {
                        switch (command[0])
                        {
                            case "Deposit":
                                tempAccount.Deposit(decimal.Parse(command[1]));
                                break;
                            case "Withdraw":
                                tempAccount.Withdraw(decimal.Parse(command[1]));
                                break;
                            default:
                                Console.WriteLine("Невалидна команда!");
                                break;
                        }

                        command = Console.ReadLine().Split(" ");
                    }

                    person.BankAccounts.Add(tempAccount);
                }

                person.Intoduce();
            }
        }
    }
}
