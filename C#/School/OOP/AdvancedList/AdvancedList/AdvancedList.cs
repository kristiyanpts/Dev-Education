using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AdvancedList
{
    class AdvancedList<T>
    {
        List<T> MainAdvancedList = new List<T>();

        public void Add(T elementToAdd)
        {
            MainAdvancedList.Add(elementToAdd);
        }

        public T Remove(int index)
        {
            T tempElement = MainAdvancedList.ElementAt(index);
            MainAdvancedList.RemoveAt(index);
            return tempElement;
        }

        public bool Contains(T elementToSearch)
        {
            return MainAdvancedList.Contains(elementToSearch);
        }

        public void Swap(int fIndex, int sIndex)
        {
            T fElement = MainAdvancedList.ElementAt(fIndex);
            T sElement = MainAdvancedList.ElementAt(sIndex);
            MainAdvancedList.Remove(fElement);
            MainAdvancedList.Remove(sElement);
            MainAdvancedList.Insert(fIndex, sElement);
            MainAdvancedList.Insert(sIndex, fElement);
        }

        public int Greater(T minElement)
        {
            int amount = 0;
            for (int i = 0; i < MainAdvancedList.Count; i++)
            {
                if (Comparer<T>.Default.Compare(MainAdvancedList.ElementAt(i), minElement) > 0)
                {
                    amount++;
                }
            }

            return amount;
        }

        public T Min()
        {
            T minElement = MainAdvancedList.ElementAt(0);
            for (int i = 0; i < MainAdvancedList.Count; i++)
            {
                if (Comparer<T>.Default.Compare(MainAdvancedList.ElementAt(i), minElement) < 0)
                {
                    minElement = MainAdvancedList.ElementAt(i);
                }
            }

            return minElement;
        }

        public T Max()
        {
            T maxElement = MainAdvancedList.ElementAt(0);
            for (int i = 0; i < MainAdvancedList.Count; i++)
            {
                if (Comparer<T>.Default.Compare(MainAdvancedList.ElementAt(i), maxElement) >= 0)
                {
                    maxElement = MainAdvancedList.ElementAt(i);
                }
            }

            return maxElement;
        }

        public void Print()
        {
            for (int i = 0; i < MainAdvancedList.Count; i++)
            {
                Console.WriteLine(MainAdvancedList.ElementAt(i));
            }
        }
    }
}
