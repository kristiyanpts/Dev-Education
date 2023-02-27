using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonEmployee
{
    class Employee : Person
    {
        private string organisation;
        List<BankAccount> bankAccounts = new List<BankAccount>();

        public string Organisation { get { return organisation; } set { organisation = value; } }

        public List<BankAccount> BankAccounts { get { return bankAccounts; } set { bankAccounts = value; } }

        public Employee(string name, int age, string organisation) : base (name, age)
        {
            this.organisation = organisation;
        }

        public void Work()
        {
            Console.WriteLine("{0} is working at {1}", Name, organisation);
        }

        public decimal GetBalance()
        {
            return bankAccounts.Sum(element => element.Balance);
        }

        public void Intoduce()
        {
            Console.WriteLine("\n==========================================\n");
            Console.WriteLine("Име: {0} | Работно място: {1} | Баланс: {2}", Name, organisation, GetBalance());
            Console.WriteLine("\n==========================================\n");
        }
    }
}
