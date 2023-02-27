using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace travelMVC.Models
{
    class Travel
    {
        public double budget;
        public string season;

        public double Budget { get { return budget; } set { budget = value; } }

        public string Season { get { return season; } set { season = value; } }

        public Travel(double budget, string season)
        {
            Budget = budget;
            Season = season;
        }

        public string GetTravelDestination()
        {
            string destination = "";
            if (budget <= 100)
            {
                destination = "Bulgaria";
            }
            else if (budget > 100 && budget <= 1000)
            {
                destination =  "Balkans";
            }
            else if (budget > 1000)
            {
                destination =  "Europe";
            }
            return destination;
        }

        public string GetTravelType()
        {
            if (GetTravelDestination() == "Europe")
            {
                return "Hotel";
            } 
            else
            {
                if (season == "summer")
                {
                    return "Camp";
                } 
                else
                {
                    return "Hotel";
                }
            }
        }

        public double MoneySpent()
        {
            string destination = GetTravelDestination();
            double moneySpent = 0;
            switch (destination)
            {
                case "Bulgaria":
                    if (season == "summer")
                    {
                        moneySpent = budget * 0.3;
                    } else
                    {
                        moneySpent = budget * 0.7;
                    }
                    break;
                case "Balkans":
                    if (season == "summer")
                    {
                        moneySpent = budget * 0.4;
                    }
                    else
                    {
                        moneySpent = budget * 0.8;
                    }
                    break;
                case "Europe":
                    moneySpent = budget * 0.9;
                    break;
                default:
                    break;
            }

            return moneySpent;
        }
    }
}
