using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace labyrinth
{
    class Program
    {
        static List<char> Paths = new List<char>();
        static int[] dimension = Console.ReadLine().Split(" ").Select(int.Parse).ToArray();
        static string[,] LabyrinthPaths = new string[dimension[0], dimension[1]];

        static void Main(string[] args)
        {
            for (int i = 0; i < dimension[0]; i++)
            {
                var tempInput = Console.ReadLine().Split(" ");

                for (int k = 0; k < dimension[1]; k++)
                {
                    LabyrinthPaths[i, k] = tempInput[k];
                }
            }

            FindPaths(0, 0, 'S');
        }

        static void FindPaths(int row, int col, char direction)
        {
            if (IsOutOfBounds(row, col))
            {
                return;
            }

            Paths.Add(direction);

            if (LabyrinthPaths[row, col] == "e")
            {
                Console.WriteLine(String.Join("", Paths));
            } 
            else if (LabyrinthPaths[row, col] != "*" && IsNextNotStena(row, col, direction))
            {
                ChangeInfo(row, col, true);
                FindPaths(row, col + 1, 'R');
                FindPaths(row + 1, col, 'D');
                FindPaths(row, col - 1, 'L');
                FindPaths(row - 1, col, 'U');
                ChangeInfo(row, col, false);
            }

            Paths.RemoveAt(Paths.Count - 1);
        }

        static bool IsNextNotStena(int row, int col, char direction)
        {
            switch (direction)
            {
                case 'U':
                    if (!IsOutOfBounds(row - 1, col) && LabyrinthPaths[row - 1, col] != "*") { return true; } else { return false; }
                    break;
                case 'R':
                    if (!IsOutOfBounds(row, col + 1) && LabyrinthPaths[row, col + 1] != "*") { return true; } else { return false; }
                    break;
                case 'D':
                    if (!IsOutOfBounds(row + 1, col) && LabyrinthPaths[row + 1, col] != "*") { return true; } else { return false; }
                    break;
                case 'L':
                    if (!IsOutOfBounds(row, col - 1) && LabyrinthPaths[row, col - 1] != "*") { return true; } else { return false; }
                    break;
            }

            return true;
        }

        static bool IsOutOfBounds(int row, int col) 
        {
            if (row < 0 || col >= LabyrinthPaths.GetLength(1) || col < 0 || row >= LabyrinthPaths.GetLength(0)) { return true; } else { return false; }
        }

        static void ChangeInfo(int row, int col, bool mark)
        {
            if (mark)
            {
                LabyrinthPaths[row, col] = "*";
            } 
            else
            {
                LabyrinthPaths[row, col] = "-";
            }
        }
    }
}
