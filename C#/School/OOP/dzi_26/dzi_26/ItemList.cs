using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dzi_26
{
    class ItemList
    {
        List<Item> MainList = new List<Item>();

        public int size()
        {
            return MainList.Count;
        }

        public Item get(int index) 
        {
            try
            {
                return MainList.ElementAt(index);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void add(Item newItem) 
        {
            if (MainList.Contains(newItem))
            {
                throw new ArgumentException("Item is already in the list.");
            }
            MainList.Add(newItem);
            SortList();
        }

        public void SortList()
        {
            MainList.Sort(delegate (Item a, Item b)
            {
                return a.Description.CompareTo(b.Description);
            });
        }
    }
}
