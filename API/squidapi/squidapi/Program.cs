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
    /* We expect to get the following data:
    
    location.name
    location.region
    location.country
    current.last_updated
    current.temp_c
    current.temp.f
    current.condition.text
    current.condition.icon
    current.wind_mph
    current.wind_kph
    current.wind_degree
    current.wind_dir
    current.humidity
    current.cloud
    current.feelslike_c
    current.feelslike_f

    */
    return "weatherdata";
});

app.Run();
