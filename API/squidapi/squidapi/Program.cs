using System.Text.Json.Serialization;
using Newtonsoft.Json;
using squidapi;

var builder = WebApplication.CreateBuilder(args);

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

app.MapGet("/weather/{city}", () =>
{
    var client = new HttpClient();

    var response = client.GetAsync("http://api.weatherapi.com/v1/current.json?key=a218d0e3b00847bdbf9211654233005&q=Stockholm").Result;
    var content = response.Content.ReadAsStringAsync().Result;

    return Results.Content(content, contentType: "application/json");
});

app.Run();
