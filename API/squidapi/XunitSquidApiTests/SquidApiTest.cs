using MovieSystemTests;
using Newtonsoft.Json;
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

        // Test to get weather data from a city
        [Fact]
        public async Task SquidApi_WeatherData_ExpectedLocationStockholm()
        {
            var expectedStatusCode = HttpStatusCode.OK;

            var expectedCityName = "Stockholm";

            //var expectedContent =
            //    new CityModel(1,
            //    "Stockholm",
            //    "Stockholms Lan",
            //    "Sweden",
            //    "2023-06-05 14:21",
            //    "2023-06-05 14:15",
            //    23.0,
            //    73.4,
            //    "Sunny",
            //    "//cdn.weatherapi.com/weather/64x64/day/113.png",
            //    12.5,
            //    20.2,
            //    260,
            //    "W",
            //    29,
            //    0,
            //    24.2,
            //    75.5
            //    );

            var client = new HttpClient();
            var stopwatch = Stopwatch.StartNew();

            var response = await client.GetAsync("http://localhost:5096/weather");

            await TestHelpers.AssertResponseWithContentAsync(stopwatch, response, expectedStatusCode, expectedCityName);
        }
    }
}