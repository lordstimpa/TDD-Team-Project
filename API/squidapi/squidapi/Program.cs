using squidapi;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var configuration = new ConfigurationBuilder()
    .SetBasePath(builder.Environment.ContentRootPath)
    .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
    .AddEnvironmentVariables()
    .Build();

// Add services to the container.
builder.Services.AddAuthorization();
builder.Services.AddSingleton<apiRequestCount>(); // Use AddSingleton to create a shared instance

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

// app.UseHttpsRedirection();

app.UseCors("corsapp");

app.UseRouting();

app.UseAuthorization();

// Retrieve the apiRequestCount service
var serviceProvider = app.Services;
var counter = app.Services.GetRequiredService<apiRequestCount>();


app.MapGet("/counter", () =>
{
    var count = counter.GetCount();
    var result = new { Count = count };
    return Results.Json(result, contentType: "application/json");
});

app.MapGet("/healthcheck", () =>
{
    counter.IncrementCount();
    return "OK";
});

app.MapGet("/weather", () =>
{
    var client = new HttpClient();

    var apiKey = configuration["WeatherAPIKey"];

    if (string.IsNullOrEmpty(apiKey))
    {
        apiKey = "c3609eda226444d59d8151422230606";
    }

    var baseURL = "http://api.weatherapi.com/v1/current.json?key=";

    var response = client.GetAsync($"{baseURL}{apiKey}&q=stockholm").Result;
    var content = response.Content.ReadAsStringAsync().Result;

    counter.IncrementCount();

    return Results.Content(content, contentType: "application/json");
});

app.MapGet("/weather/{city}", (string city) =>
{
    var client = new HttpClient();

    var apiKey = configuration["WeatherAPIKey"];

    if (string.IsNullOrEmpty(apiKey))
    {
        apiKey = "c3609eda226444d59d8151422230606";
    }

    var baseURL = "http://api.weatherapi.com/v1/current.json?key=";

    var response = client.GetAsync($"{baseURL}{apiKey}&q={city}").Result;
    var content = response.Content.ReadAsStringAsync().Result;

    counter.IncrementCount();

    return Results.Content(content, contentType: "application/json");
});

app.Run();