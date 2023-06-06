using System.Text.Json.Serialization;
using Newtonsoft.Json;
using squidapi;

var builder = WebApplication.CreateBuilder(args);

var configuration = new ConfigurationBuilder()
    .SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .Build();

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("/healthcheck", () =>
{
    return "OK";
});

app.MapGet("/weather", () =>
{
    var client = new HttpClient();

    var apiKey = configuration["WeatherAPIKey"];
    var baseURL = "http://api.weatherapi.com/v1/current.json?key=";

    var response = client.GetAsync($"{baseURL}{apiKey}&q=stockholm").Result;
    var content = response.Content.ReadAsStringAsync().Result;
    
    return Results.Content(content, contentType: "application/json");
});

app.MapGet("/weather/{city}", (string city) =>
{
    var client = new HttpClient();

    var apiKey = configuration["WeatherAPIKey"];
    var baseURL = "http://api.weatherapi.com/v1/current.json?key=";

    var response = client.GetAsync($"{baseURL}{apiKey}&q={city}").Result;
    var content = response.Content.ReadAsStringAsync().Result;

    return Results.Content(content, contentType: "application/json");
});

app.Run();
