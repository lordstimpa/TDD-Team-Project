using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using squidapi;
using System.Diagnostics;
using System.Net;
using System.Net.Http;
using System.Runtime.InteropServices;

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
            var expectedStatusCode = HttpStatusCode.OK;  // Expected status code OK (200)
            var client = new HttpClient();  // Create a new HttpClient instance

            var response = await client.GetAsync("http://localhost:5096/healthcheck");  // Make a GET request to healthcheck endpoint

            Assert.Equal(expectedStatusCode, response.StatusCode);   // Assert that the status code is 200
        }

        // Test to check the body content of GET healthcheck
        [Fact]
        public async Task SquidApi_Healthcheck_ExpectedOk()
        {
            string expectedStatusCode = "OK";
            var client = new HttpClient();

            var response = await client.GetAsync("http://localhost:5096/healthcheck");
            string actual = await response.Content.ReadAsStringAsync();

            Assert.Equal(expectedStatusCode, actual);
        }

        // Test to get weather data from Stockholm/default
        [Fact]
        public async Task SquidApi_WeatherData_ExpectedLocationStockholm()
        {
            var client = new HttpClient();
            var expectedCityName = "Stockholm";

            var response = await client.GetAsync("http://localhost:5096/weather");
            var content = await response.Content.ReadAsStringAsync();

            var responseObject = JObject.Parse(content);

            var locationObject = responseObject["location"];
            var cityName = locationObject?["name"]?.ToString();

            Assert.Equal(expectedCityName, cityName);
        }

        // Test to get weather data from London
        [Fact]
        public async Task SquidApi_WeatherData_ExpectedLocationLondon()
        {
            var client = new HttpClient();
            var expectedCityName = "london";

            var response = await client.GetAsync("http://localhost:5096/weather/london");
            var content = await response.Content.ReadAsStringAsync();

            var responseObject = JObject.Parse(content);

            var locationObject = responseObject["location"];
            var cityName = locationObject?["name"]?.ToString();

            Assert.Equal(expectedCityName, cityName);
        }
    }
}