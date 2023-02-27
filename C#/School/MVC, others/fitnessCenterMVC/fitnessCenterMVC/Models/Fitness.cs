using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace fitnessCenterMVC.Models
{
    class Fitness
    {
        public int visitors;
        public List<string> activities;

        public int Visitors { get { return visitors; } set { visitors = value; } }

        public List<string> Activities { get { return activities; } set { activities = value; } }

        public Fitness(int visitors, List<string> activities)
        {
            this.visitors = visitors;
            this.activities = activities;
        }

        public double[] GetActivities()
        {
            double[] answer = { 0, 0, 0, 0, 0, 0, 0, 0 };
            for (int i = 0; i < activities.Count; i++)
            {
                string element = activities.ElementAt(i);
                switch (element)
                {
                    case "back":
                        answer[0]++;
                        break;
                    case "chest":
                        answer[1]++;
                        break;
                    case "legs":
                        answer[2]++;
                        break;
                    case "abs":
                        answer[3]++;
                        break;
                    case "protein shake":
                        answer[4]++;
                        break;
                    case "protei bar":
                        answer[5]++;
                        break;
                    default:
                        break;
                }
            }

            double total = 0;
            double training = 0;
            double protein = 0;
            for (int i = 0; i < answer.Length - 2; i++)
            {
                total += answer[i];
                if (i == 4 || i == 5)
                {
                    protein += answer[i];
                } else
                {
                    training += answer[i];
                }
            }
            answer[6] = training / total * 100;
            answer[7] = protein / total * 100;

            return answer;
        }
    }
}
