using squidapi;

namespace squidapitest
{
    [TestClass]
    public class UnitTest1
    {

        /* 
            Dependency setup established.        
            Dependency setup has been tested and returned true.
         */

        /* 
            GET Weather data from a city: http://api.weatherapi.com/v1/current.json?key=a218d0e3b00847bdbf9211654233005&q=stockholm
            GET Health status of API:  
            GET the amount of API calls per session:

            Important: Every API call must call a counter function. 
         */

        [TestMethod]
        public void DependencyTest()
        {
            DependencyTest dependencytest = new();

            bool expected = true;
            bool actual = dependencytest.DependencyTestExpectedTrue();

            Assert.AreEqual(expected, actual);
        }
    }
}