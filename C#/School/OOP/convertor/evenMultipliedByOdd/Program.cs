using System;

namespace evenMultipliedByOdd
{
    class Program
    {
        static void Main(string[] args)
        {
            int num = int.Parse(Console.ReadLine());
            Console.WriteLine(Multiply(EvenSum(num), OddSum(num)));
        }

        static int EvenSum(int num) 
        {
            int sum = 0;

            while (num > 0) 
            {
                if (num % 2 == 0) 
                {
                    sum += num % 10;
                }
                num = num / 10;
            }

            return sum;
        }

        static int OddSum(int num)
        {
            int sum = 0;

            while (num > 0)
            {
                if (num % 2 != 0)
                {
                    sum += num % 10;
                }
                num = num / 10;
            }

            return sum;
        }

        static int Multiply(int a, int b) 
        {
            return a * b;
        }
    }
}
