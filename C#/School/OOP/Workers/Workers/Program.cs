using System;

namespace Workers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Въведи броя работници: ");
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Console.Write("Въведи ID на работника: ");
                string id = Console.ReadLine();
                Console.Write("Въведи име на работника: ");
                string name = Console.ReadLine();
                Console.Write("Въведи адрес на работника: ");
                string address = Console.ReadLine();
                WorkType:
                Console.Write("Въведи вида на работа [F - Full Time | C - Contract]: ");
                char type = char.Parse(Console.ReadLine());
                if (type == 'F' || type == 'f')
                {
                    Console.Write("Въведи позиция на работника: ");
                    string position = Console.ReadLine();
                    Console.Write("Въведи отдел на работника: ");
                    string department = Console.ReadLine();

                    FullTimeEmployee Employee = new FullTimeEmployee(id, name, address, position, department);

                    Console.Write("Въведи часовете на работа на работника: ");
                    int workingHours = int.Parse(Console.ReadLine());
                    Employee.Show();
                    Console.WriteLine("- Заплата: {0}\n- Отдел: {1}", Employee.CalculateSalary(workingHours), Employee.GetDepartment());

                } 
                else if (type == 'C' || type == 'c')
                {
                    Console.Write("Въведи задачата на работника: ");
                    string task = Console.ReadLine();
                    Console.Write("Въведи отдел на работника: ");
                    string department = Console.ReadLine();

                    ContractEmployee Employee = new ContractEmployee(id, name, address, task, department);

                    Console.Write("Въведи часовете на работа на работника: ");
                    int workingHours = int.Parse(Console.ReadLine());
                    Employee.Show();
                    Console.WriteLine("- Заплата: {0}\n- Отдел: {1}", Employee.CalculateSalary(workingHours), Employee.GetDepartment());
                }
                else
                {
                    Console.WriteLine("Невалиден вид на работа!");
                    goto WorkType;
                }
            }
        }
    }
}
