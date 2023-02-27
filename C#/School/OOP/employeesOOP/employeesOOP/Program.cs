using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace employeesOOP
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Employee> MainEmployees = new List<Employee>();
            Console.Write("Въведете броя на служителите: ");
            int employeesCount = int.Parse(Console.ReadLine());

            for (int i = 0; i < employeesCount; i++)
            {
                Console.Write("Въведи име: ");
                string name = Console.ReadLine();
                Console.Write("Въведи адрес: ");
                string address = Console.ReadLine();
                Console.Write("Въведи длъжност: ");
                string position = Console.ReadLine();
                Console.Write("Въведи заплата: ");
                double salary = double.Parse(Console.ReadLine());
                Console.Write("Въведи година на раждане: ");
                int dob = int.Parse(Console.ReadLine());
                Employee TempEmployee = new Employee(name, address, position, salary, dob);
                MainEmployees.Add(TempEmployee);
            }
            Console.Write("Въведи длъжност за справка: ");
            string positionToCheck = Console.ReadLine();
            Console.Write("Въведи име на служител, който да се търси: ");
            string nameToSearch = Console.ReadLine();

            Console.WriteLine("Информация за всички служители:");
            for (int i = 0; i < MainEmployees.Count; i++)
            {
                MainEmployees.ElementAt(i).Print();
            }
            HighestSalary(MainEmployees);
            OldestEmployee(MainEmployees);
            FindPosition(MainEmployees, positionToCheck);
            FindEmployee(MainEmployees, nameToSearch);
        }

        static void HighestSalary(List<Employee> Employees)
        {
            Employee highestSalary = Employees.ElementAt(0);
            for (int i = 0; i < Employees.Count; i++)
            {
                if (Employees.ElementAt(i).Salary > highestSalary.Salary)
                {
                    highestSalary = Employees.ElementAt(i);
                }
            }
            Console.WriteLine("Служителят с най-висока заплата:");
            highestSalary.Print();
        }

        static void OldestEmployee(List<Employee> Employees)
        {
            Employee oldestEmployee = Employees.ElementAt(0);
            for (int i = 0; i < Employees.Count; i++)
            {
                if (Employees.ElementAt(i).Age() > oldestEmployee.Age())
                {
                    oldestEmployee = Employees.ElementAt(i);
                }
            }
            Console.WriteLine("Най-вързрастният служител:");
            oldestEmployee.Print();
        }

        static void FindPosition(List<Employee> Employees, string searchedPosition)
        {
            Console.WriteLine("Служители с позиция '{0}'", searchedPosition);
            for (int i = 0; i < Employees.Count; i++)
            {
                if (Employees.ElementAt(i).Position == searchedPosition)
                {
                    Employees.ElementAt(i).Print();
                }
            }
        }

        static void FindEmployee(List<Employee> Employees, string searchedName)
        {
            Console.WriteLine("Служители с име '{0}'", searchedName);
            for (int i = 0; i < Employees.Count; i++)
            {
                if (Employees.ElementAt(i).Name == searchedName)
                {
                    Employees.ElementAt(i).Print();
                }
            }
        }
    }
}
