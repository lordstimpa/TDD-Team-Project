using Microsoft.VisualStudio.TestPlatform.TestHost;
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
        private readonly HttpClient _client;

        public SquidApiTest()
        {
            // Initialize HttpClient
            _client = new HttpClient();
        }

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

            var response = await _client.GetAsync("http://localhost:20500/healthcheck");  // Make a GET request to healthcheck endpoint

            Assert.Equal(expectedStatusCode, response.StatusCode);   // Assert that the status code is 200
        }

        // Test to check the body content of GET healthcheck
        [Fact]
        public async Task SquidApi_Healthcheck_ExpectedOk()
        {
            string expectedStatusCode = "OK";

            var response = await _client.GetAsync("http://localhost:20500/healthcheck");
            string actual = await response.Content.ReadAsStringAsync();

            Assert.Equal(expectedStatusCode, actual);
        }

        // Test to get weather data from Stockholm/default
        [Fact]
        public async Task SquidApi_WeatherData_ExpectedLocationStockholm()
        {
            var expectedCityName = "Stockholm";

            var response = await _client.GetAsync("http://localhost:20500/weather");
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
            var expectedCityName = "London";

            var response = await _client.GetAsync("http://localhost:20500/weather/london");
            var content = await response.Content.ReadAsStringAsync();

            var responseObject = JObject.Parse(content);

            var locationObject = responseObject["location"];
            var cityName = locationObject?["name"]?.ToString();

            Assert.Equal(expectedCityName, cityName);
        }

        [Fact]
        public async Task IncrementalCounter_IncreaseOnApiCall()
        {
            // Arrange
            var initialCount = await GetApiCounter();

            // Act
            await MakeApiCall();

            // Assert
            var newCount = await GetApiCounter();
            Assert.Equal(initialCount + 1, newCount);
        }

        private async Task<int> GetApiCounter()
        {
            
            var response = await _client.GetAsync("http://localhost:20500/counter");
            response.EnsureSuccessStatusCode(); // method to ensure response from api call has successful status code. Otherwise throws an exception

            // Extract the count value from the response
            var count = await response.Content.ReadAsStringAsync();
            return int.Parse(count);
        }
        private async Task MakeApiCall()
        {
            var response = await _client.GetAsync("http://localhost:20500/weather/london");
            response.EnsureSuccessStatusCode();
        }
    }
}