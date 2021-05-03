using System;
using System.Runtime.CompilerServices;
using System.Windows.Markup;

namespace ConsoleApp2
{
       public class Coins
    {
        public int minReplacement(int[] A)
        {
            //Two possible choices
            //A first element is 1 or first element is 0

            var x1 = CountFlips(A, 1);
            var x2 = CountFlips(A, 0);
            return Math.Min(x1, x2);
        }

        private static int CountFlips(int[] A, int expected)
        {
            var flips = 0;
            int notExpected = expected == 1 ? 0 : 1;
            for (int i = 0; i < A.Length; i++)
            {
                // If there is expected at even index positions
                // OR If there is notExpected at odd index positions
                if ((i % 2 == 0 && A[i] == expected) ||
                    (i % 2 == 1 && A[i] == notExpected)
                )
                {
                    flips++;
                }
            }

            return flips;
        }
    }
}