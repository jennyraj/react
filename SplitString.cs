using System.Linq;

namespace ConsoleApp2
{
    public class StringTest
    {
        // Function to calculate // the number of ways to split
        public int SplitString(string s)
        {
            var n = s.Length;

            //total number of a's
            var count = s.Count(x => x == 'a');

            //trivial cases
            if (count % 3 != 0) //not a multiple of 3
                return 0;

            if (count == 0) //a not found, can be split anyway we want
                return (n - 1) * (n - 2) / 2;

            //General case-------------
            //string is cut in two places to make 3 parts.

            var charCount = count / 3;
            var cut1 = 0;
            var cut2 = 0;

            var numA = 0; //number of A's
            for (var i = 0; i < n; i++)
            {
                if (s[i] == 'a')
                    numA++;

                if (numA == charCount)
                    cut1++;

                if (numA == 2 * charCount)
                    cut2++;
            }

            return cut1 * cut2;
        }
    }
}