const apiKey = "eyJ4NXQiOiJOak16WWpreVlUZGlZVGM0TUdSalpEaGtaV1psWWpjME5UTXhORFV4TlRZM1ptRTRZV1JrWWc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJvZzM1MTUxM0BjYWxseXdpdGguYWMudWtAY2FyYm9uLnN1cGVyIiwiYXBwbGljYXRpb24iOnsib3duZXIiOiJvZzM1MTUxM0BjYWxseXdpdGguYWMudWsiLCJ0aWVyUXVvdGFUeXBlIjpudWxsLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6InNpdGVfc3BlY2lmaWMtMTdhYWI2MjMtOThmOS00MjNmLWEyNGQtYzE0MjQ0NzAzMmJmIiwiaWQiOjUwNTYsInV1aWQiOiI5NTlhNTVjNy1jYTI1LTQ1YWItYjlhMi1iMGQzZDgyOTUzZWMifSwiaXNzIjoiaHR0cHM6XC9cL2FwaS1tYW5hZ2VyLmFwaS1tYW5hZ2VtZW50Lm1ldG9mZmljZS5jbG91ZDo0NDNcL29hdXRoMlwvdG9rZW4iLCJ0aWVySW5mbyI6eyJ3ZGhfc2l0ZV9zcGVjaWZpY19mcmVlIjp7InRpZXJRdW90YVR5cGUiOiJyZXF1ZXN0Q291bnQiLCJncmFwaFFMTWF4Q29tcGxleGl0eSI6MCwiZ3JhcGhRTE1heERlcHRoIjowLCJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOiJzZWMifX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2l0ZVNwZWNpZmljRm9yZWNhc3QiLCJjb250ZXh0IjoiXC9zaXRlc3BlY2lmaWNcL3YwIiwicHVibGlzaGVyIjoiSmFndWFyX0NJIiwidmVyc2lvbiI6InYwIiwic3Vic2NyaXB0aW9uVGllciI6IndkaF9zaXRlX3NwZWNpZmljX2ZyZWUifV0sInRva2VuX3R5cGUiOiJhcGlLZXkiLCJpYXQiOjE3MTk4MjUxOTAsImp0aSI6IjgwYzhlYTUzLWMyNDctNGQxMC1iYjJiLWVmZWYzZDA3MDg1YSJ9.HWsR_NoKRdPLRBLK0qhmfaBq6-91JxP6fLOfryojGhoyG2Vg-qg4THezcKGvrUllIAaIVsNcSqJLsX2a-7-asPp75o4g1Xo3-Sp5k5FN3BKdf-__mihoLyChlkU7b8BRp2i1AHpvCDisY85rVkVZRlLNLtTzKt3TERK_TUI3YK5ItWLlCDXbpMjUna4VrKfaHXRlGLsSUpMw2ArD57lQ6bTaCnmVI898mZfoqFXD1HtrM3fLRSe92pi_FKK2uRFH6Gxw7lFliv8SqCeN9EZgX-1La0lFt3rZZ_qrPVNdx_zTi2tiDSJpqf_pRXyjH8zAY7gxlk2m4ymn7na-rmGdSA==";
const apiURL = "https://data.hub.api.metoffice.gov.uk/sitespecific/v0/point/hourly?latitude=50.371389&longitude=-4.142222";

fetch(apiURL, {headers: {apikey: apiKey}})
.then(response => response.json())
.then(data => {
    console.log(data.features[0].properties.timeSeries[0]);
  
    let temperature = data.features[0].properties.timeSeries[0].screenTemperature;
    let humidity = data.features[0].properties.timeSeries[0].screenRelativeHumidity;
    let uv = data.features[0].properties.timeSeries[0].uvIndex;
    let rain = data.features[0].properties.timeSeries[0].probOfPrecipitation;

    document.getElementById("temp").innerText = `${temperature} °C`;
    document.getElementById("humidity").innerText = `${humidity}%`;
    document.getElementById("uv").innerText = `${uv}`;
    document.getElementById("rain").innerText = `${rain}%`;
  }
);