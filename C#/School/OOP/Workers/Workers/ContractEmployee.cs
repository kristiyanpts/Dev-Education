using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workers
{
    class ContractEmployee : BaseEmployee
    {
        private string task;
        private string department;

        public string Task { get { return task; } set { task = value; } }
        public string Department { get { return department; } set { department = value; } }

        public ContractEmployee(string id, string name, string address, string task, string department) : base(id, name, address)
        {
            this.task = task;
            this.department = department;
        }

        public void Show()
        {
            base.Show();
            Console.WriteLine("- Задача: {0}\n- Отдел: {1}", task, department);
        }

        public override double CalculateSalary(int workingHours)
        {
            return 250 + workingHours * 20;
        }

        public override string GetDepartment()
        {
            return department;
        }
    }
}
