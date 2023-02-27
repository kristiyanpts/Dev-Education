using System;

namespace Income
{
    class Program
    {
        static void Main(string[] args)
        {
            
        }

        static double TotalIncome(double firstSalary, double secondSalary, double socialIncome, double scholarship, double rent) 
        {
            return firstSalary + secondSalary + socialIncome + scholarship + rent;
        }
    }
}
