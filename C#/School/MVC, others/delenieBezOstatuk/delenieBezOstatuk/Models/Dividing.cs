using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace delenieBezOstatuk.Models
{
    class Dividing
    {
        public int numbersAmount;
        public List<int> numbers;

        public int NumbersAmount { get { return numbersAmount; } set { numbersAmount = value; } }

        public List<int> Numbers { get { return numbers; } set { numbers = value; } }

        public Dividing(int numbersAmount, List<int> numbers)
        {
            NumbersAmount = numbersAmount;
            Numbers = numbers;
        }

        public double[] GetPercentages()
        {
            double[] percentagesAmount = { 0, 0, 0 };
            for (int i = 0; i < numbers.Count; i++)
            {
                int tempNum = numbers.ElementAt(i);
                if (tempNum % 2 == 0)
                {
                    percentagesAmount[0]++;
                } 
                if (tempNum % 3 == 0)
                {
                    percentagesAmount[1]++;
                } 
                if (tempNum % 4 == 0)
                {
                    percentagesAmount[2]++;
                }
            }

            for (int i = 0; i < percentagesAmount.Length; i++)
            {
                percentagesAmount[i] = (double)((percentagesAmount[i] / numbers.Count) * 100);
            }

            return percentagesAmount;
        }
    }
}
