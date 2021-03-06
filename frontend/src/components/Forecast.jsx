import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Tooltip from "@material-ui/core/Tooltip"
import CardContent from "@material-ui/core/CardContent";

const Forecast = (props) => {
  const forecast = props.weatherData.daily.slice(1, 6);
  return (
    <>
      {forecast.map((day, index) => {
        return (
          <Grid item key={index} xs={12} md={2}>
            <Card style={{border: "groove 1px", marginBottom:"2vh"}}>
              <CardContent style={{paddingBottom:".5vh", paddingTop:"0.5vh"}}>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  alignItems="stretch"
                  style={{textAlign:"center"}}
                >
                  <Grid item xs={12} className="forecastText">
                    {new Date(day.dt * 1000).toLocaleString().substr(0, 5)}
                  </Grid>
                  <Grid item xs={12}>
                    <Tooltip className="conditions" title={day.weather[0].description} placement="top">

                    <img
                      src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                      className="forecast-icon"
                      aria-label={day.weather[0].description}
                      />
                      </Tooltip>
                  </Grid>
                  <Grid item xs={12} className="forecastText">
                    {day.temp.min} &deg; / {day.temp.max} &deg;
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

export default Forecast;
