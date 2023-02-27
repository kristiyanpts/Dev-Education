using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PersonEmployee
{
    class Person
    {
        private string name;
        private int age;

        public string Name { get { return name; } set { name = value; } }

        public int Age { get { return age; } set { age = value; } }

        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }

        public void Sleep()
        {
            Console.WriteLine("{0} is sleeping {1} years.", name, age);
        }
    }
}
