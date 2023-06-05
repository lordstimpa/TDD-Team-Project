namespace squidapi
{
    public class CityModel
    {
        private int id;
        private string name;
        private string region;
        private string country;
        private string local_time;
        private string last_update;
        private double temp_c;
        private double temp_f;
        private string text;
        private string icon;
        private double wind_mph;
        private double wind_kph;
        private int wind_degree;
        private string wind_dir;
        private int humidity;
        private int cloud;
        private double feelslike_c;
        private double feelslike_f;

        public CityModel(string name)
        {
            this.name = name;
        }
    }
}