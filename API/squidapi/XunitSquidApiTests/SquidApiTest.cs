using squidapi;
using System.Net;

namespace XunitSquidApiTests
{
    public class SquidApiTest
    {
        [Fact]
        public void DependencyTestExpectedTrue()
        {
            var dependencyTest = new DependencyTest();
            Assert.True(dependencyTest.DependencyTestExpectedTrue());
        }

        // Test to check the status code of GET healthcheck
        [Fact]
        public async Task SquidApi_Healthcheck_ExpectedStatusCode200()
        {
            var expected = HttpStatusCode.OK;  // Expected status code OK (200)
            var client = new HttpClient();  // Create a new HttpClient instance

            var response = await client.GetAsync("http://localhost:5096/healthcheck");  // Make a GET request to healthcheck endpoint

            Assert.Equal(expected, response.StatusCode);   // Assert that the status code is 200
        }

        // Test to check the body content of GET healthcheck
        [Fact]
        public async Task SquidApi_Healthcheck_ExpectedOk()
        {
            string expected = "OK";
            var client = new HttpClient();

            var response = await client.GetAsync("http://localhost:5096/healthcheck");
            string actual = await response.Content.ReadAsStringAsync();

            Assert.Equal(expected, actual);
        }

        // Test to get weather data from a city
        [Fact]
        public async Task SquidApi_WeatherData_ExpectedLocationStockholm()
        {

        }
    }
}