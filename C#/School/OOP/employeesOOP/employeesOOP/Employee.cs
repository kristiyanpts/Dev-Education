using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace employeesOOP
{
    class Employee
    {
        public string name;
        public string address;
        public string position;
        public double salary;
        public int dob;

        public string Name { get { return name; } set { name = value; } }
        public string Address { get { return address; } set { address = value; } }
        public string Position { get { return position; } set { position = value; } }
        public double Salary { get { return salary; } set { salary = value; } }
        public int DOB { get { return dob; } set { dob = value; } }

        public Employee(string name, string address, string position, double salary, int dob)
        {
            Name = name;
            Address = address;
            Position = position;
            Salary = salary;
            DOB = dob;
        }

        public void Print()
        {
            Console.WriteLine("Име: {0}\nАдрес: {1}\nДлъжност: {2}\nЗаплата: {3}\nГодина на раждане: {4}\nГодини: {5}", name, address, position, salary, dob, Age());
        }

        public int Age()
        {
            return DateTime.Now.Year - dob;
        }
    }
}
