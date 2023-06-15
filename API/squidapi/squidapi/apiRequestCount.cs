namespace squidapi
{
    public class apiRequestCount
    {
        private int count;

        public int Count => count;

        public apiRequestCount()
        {
            count = 0;
        }

        public int GetCount()
        {
            return count;
        }

        public void IncrementCount()
        {
            Interlocked.Increment(ref count);
        }
    }
}