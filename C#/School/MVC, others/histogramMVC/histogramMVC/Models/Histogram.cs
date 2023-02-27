using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace histogramMVC.Models
{
    class Histogram
    {
        public int amountOfNumbers;
        public List<double> numbers;

        public int AmountOfNumbers { get { return amountOfNumbers; } set { amountOfNumbers = value; } }

        public List<double> Numbers { get { return numbers; } set { numbers = value; } }

        public Histogram(int amountOfNumbers, List<double> numbers)
        {
            AmountOfNumbers = amountOfNumbers;
            Numbers = numbers;
        }

        public string[] GetPercentage()
        {
            int[] numbersPerPercentage = { 0, 0, 0, 0, 0 };

            for (int i = 0; i < numbers.Count; i++)
            {
                double tempNum = numbers.ElementAt(i);

                if (tempNum < 200)
                {
                    numbersPerPercentage[0] = numbersPerPercentage[0] + 1;
                } 
                else if (tempNum >= 200 && tempNum < 400)
                {
                    numbersPerPercentage[1] += 1;
                }
                else if (tempNum >= 400 && tempNum < 600)
                {
                    numbersPerPercentage[2] += 1;
                }
                else if (tempNum >= 600 && tempNum < 800)
                {
                    numbersPerPercentage[3] += 1;
                }
                else if (tempNum >= 800)
                {
                    numbersPerPercentage[4] += 1;
                }
            }

            string[] percentages = new string[5];

            for (int i = 0; i < numbersPerPercentage.Length; i++)
            {
                percentages[i] = (((double)numbersPerPercentage[i] / amountOfNumbers) * 100).ToString("0.00") + "%";
            }

            return percentages;
        }
    }
}
