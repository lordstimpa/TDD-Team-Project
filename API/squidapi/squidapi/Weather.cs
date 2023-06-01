namespace squidapi
{
    public class Weather
    {

        public async Task<object> GetWeatherData(string city)
        {
            string url = "http://api.weatherapi.com/v1/current.json?key=a218d0e3b00847bdbf9211654233005&q=" + city;
            HttpClient client = new HttpClient();
            HttpResponseMessage response = await client.GetAsync(url);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            return responseBody;
        }

    }
}