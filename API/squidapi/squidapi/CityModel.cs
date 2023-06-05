using Newtonsoft.Json;

namespace squidapi
{
    public class LocationModel
    {
        public CityModel location { get; set; }
    }

    public class CityModel
    {
        public string name { get; set; }
        public string region { get; set; }
        public string country { get; set; }
        public string localtime { get; set; }
    }
}