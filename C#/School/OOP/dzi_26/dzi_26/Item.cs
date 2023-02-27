using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace dzi_26
{
    public class Item : IComparable
    {
        private string description;
        private double price;

        public string Description { get { return description; } }
        public double Price { get { return price; } }

        public Item(string description, double price)
        {
            try
            {
                this.description = description;
                this.price = price;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public int CompareTo(object b)
        {
            Item B = b as Item;
            if (this.description == B.description)
            {
                return this.price.CompareTo(B.price);
            }
            return this.description.Length.CompareTo(B.description.Length);
        }

        public override string ToString()
        {
            return description + "(" + price + ")";
        }
    }
}
