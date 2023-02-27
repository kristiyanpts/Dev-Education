using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Workers
{
    class FullTimeEmployee : BaseEmployee
    {
        private string position;
        private string department;

        public string Position { get { return position; } set { position = value; } }
        public string Department { get { return department; } set { department = value; } }

        public FullTimeEmployee(string id, string name, string address, string position, string department) : base(id, name, address)
        {
            this.position = position;
            this.department = department;
        }

        public void Show()
        {
            base.Show();
            Console.WriteLine("- Позиция: {0}\n- Отдел: {1}", position, department);
        }

        public override double CalculateSalary(int workingHours)
        {
            return 250 + workingHours * 10.8;
        }

        public override string GetDepartment()
        {
            return department;
        }
    }
}
