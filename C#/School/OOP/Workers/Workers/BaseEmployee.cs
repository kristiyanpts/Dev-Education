using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workers
{
    abstract class BaseEmployee
    {
        private string id;
        private string name;
        private string address;

        public string ID { get { return id; } set { id = value; } }
        public string Name { get { return name; } set { name = value; } }
        public string Address { get { return address; } set { address = value; } }

        public BaseEmployee(string id, string name, string address)
        {
            this.id = id;
            this.name = name;
            this.address = address;
        }

        public void Show()
        {
            Console.WriteLine("Информация за работник - {0}: \n- ID: {1}\n- Адрес: {2}", name, id, address);
        }

        abstract public double CalculateSalary(int workingHours);
        abstract public string GetDepartment();
    }
}
