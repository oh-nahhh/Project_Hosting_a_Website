async function getAPI() 
{
    return new Promise(async (resolve, reject) => 
    {
        let response = {}, result = '';
        try 
        {
            response = await fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json');
            result = await response.json();
        } 
        catch(e) 
        {
        }
        response.status === 200 ? resolve(result) : reject(result);
    });
}

function main() 
{
    getAPI().then(function(response) 
    {        
    copyright();    
    let paramsnow = response.timeSeries[0].parameters;
    getElementsnow(paramsnow);

        let paramstomorrow = response.timeSeries[24].parameters;
        getElementstomorrw(paramstomorrow);
        
        document.getElementById("date").innerHTML = document.getElementById("date").innerHTML + getTime(0);
        document.getElementById("date2").innerHTML = document.getElementById("date2").innerHTML +  getTime(0);    
    
    if (getHour(0) + 3 <23) 
    {
        let paramstomorrow2 = response.timeSeries[24 +3].parameters;
        document.getElementById("date3").innerHTML = document.getElementById("date3").innerHTML +  getTime(3); 
        getElementstomorrw2(paramstomorrow2);
    }   
    else 
    {
        let timme = (24 - getHour(0));  
        if (timme == 1)  
        {
            document.getElementById("date3").innerHTML = document.getElementById("date3").innerHTML + 'Ny prognos väntas om ' + timme + ' timme';  
        }
        else
        {
            document.getElementById("date3").innerHTML = document.getElementById("date3").innerHTML + 'Ny prognos väntas om ' + timme + ' timmar'; 
        }
                      
    }
    if (getHour(0) + 6 <23) 
    {
        let paramstomorrow3 = response.timeSeries[24 + 6].parameters;
        document.getElementById("date4").innerHTML = document.getElementById("date4").innerHTML +  getTime(6); 
        getElementstomorrw3(paramstomorrow3);
    }
    else 
    {        
        let timme = (24 - getHour(0));  
        if (timme == 1)  
        {
            document.getElementById("date3").innerHTML = document.getElementById("date3").innerHTML + 'Ny prognos väntas om ' + timme + ' timme';  
        }
        else
        {
            document.getElementById("date4").innerHTML = document.getElementById("date4").innerHTML + 'Ny prognos väntas om ' + timme + ' timmar';      
        }   
    }        
    })
}

function getElementsnow(params)
{    
    for (let i = 0; i < params.length; i++) 
    {
        if (params[i].name == 'pmean') 
        {
            document.getElementById('pmean').innerHTML = document.getElementById('pmean').innerHTML + (params[i].values[0] +  " mm");
        }
        if (params[i].name == 't') 
        {
            document.getElementById('temp').innerHTML = document.getElementById('temp').innerHTML + (params[i].values +  "&deg;C");
        }
        if(params[i].name== 'ws')
        {
            document.getElementById('wind').innerHTML = document.getElementById('wind').innerHTML + (params[i].values +  " m/s");
        }
        if (params[i].name == 'Wsymb2') 
        {
            document.getElementById('weatherSymbol').innerHTML = document.getElementById('weatherSymbol').innerHTML + (icons[params[i].values[0]]);
        }                         
        if (params[i].name == 'wd') 
        {
            document.getElementsByClassName('windDirection')[0].style.transform = "rotate(" + params[i].values + "deg)";              
            console.log(params[i].values);
        }       
    }   
}

function getElementstomorrw(params)
{    
    for (let i = 0; i < params.length; i++) 
    {
        if (params[i].name == 'pmean') 
        {
            document.getElementById('pmean2').innerHTML = document.getElementById('pmean2').innerHTML + (params[i].values[0] +  " mm");
        }
        if (params[i].name == 't') 
        {
            document.getElementById('temp2').innerHTML = document.getElementById('temp2').innerHTML + (params[i].values +  "&deg;C");
        }
        if(params[i].name== 'ws')
        {
            document.getElementById('wind2').innerHTML = document.getElementById('wind2').innerHTML + (params[i].values +  " m/s");
        }
        if (params[i].name == 'Wsymb2') 
        {
            document.getElementById('weatherSymbol2').innerHTML = document.getElementById('weatherSymbol2').innerHTML + (icons[params[i].values[0]]);
        }                         
        if (params[i].name == 'wd') 
        {
            document.getElementsByClassName('windDirection2')[0].style.transform = "rotate(" + params[i].values + "deg)";              
            console.log(params[i].values);
        }       
    }   
}

function getElementstomorrw2(params)
{    
    for (let i = 0; i < params.length; i++) 
    {
        if (params[i].name == 'pmean') 
        {
            document.getElementById('pmean3').innerHTML = document.getElementById('pmean3').innerHTML + (params[i].values[0] +  " mm");
        }
        if (params[i].name == 't') 
        {
            document.getElementById('temp3').innerHTML = document.getElementById('temp3').innerHTML + (params[i].values +  "&deg;C");
        }
        if(params[i].name== 'ws')
        {
            document.getElementById('wind3').innerHTML = document.getElementById('wind3').innerHTML + (params[i].values +  " m/s");
        }
        if (params[i].name == 'Wsymb2') 
        {
            document.getElementById('weatherSymbol3').innerHTML = document.getElementById('weatherSymbol3').innerHTML + (icons[params[i].values[0]]);
        }                         
        if (params[i].name == 'wd') 
        {
            document.getElementsByClassName('windDirection3')[0].style.transform = "rotate(" + params[i].values + "deg)";              
            console.log(params[i].values);
        }       
    }   
}

function getElementstomorrw3(params)
{    
    for (let i = 0; i < params.length; i++) 
    {
        if (params[i].name == 'pmean') 
        {
            document.getElementById('pmean4').innerHTML = document.getElementById('pmean4').innerHTML + (params[i].values[0] +  " mm");
        }
        if (params[i].name == 't') 
        {
            document.getElementById('temp4').innerHTML = document.getElementById('temp4').innerHTML + (params[i].values +  "&deg;C");
        }
        if(params[i].name== 'ws')
        {
            document.getElementById('wind4').innerHTML = document.getElementById('wind4').innerHTML + (params[i].values +  " m/s");
        }
        if (params[i].name == 'Wsymb2') 
        {
            document.getElementById('weatherSymbol4').innerHTML = document.getElementById('weatherSymbol4').innerHTML + (icons[params[i].values[0]]);
        }                         
        if (params[i].name == 'wd') 
        {
            document.getElementsByClassName('windDirection4')[0].style.transform = "rotate(" + params[i].values + "deg)";              
            console.log(params[i].values);
        }       
    }   
}


const icons = [
    '',
    "☼",//'Clear sky',
    "⛅",//'Nearly clear sky',
    "🌤",//'Variable cloudiness',
    "🌥",//'Halfclear sky',
    "☁",//'Cloudy sky',
    "☁",//'Overcast',
    "🌫",//'Fog',
    "🌦",//'Light rain showers',
    "🌧",//'Moderate rain showers',
    "🌧",//'Heavy rain showers',
    "⛈", //'Thunderstorm',
    "🌦",//'Light sleet showers',
    "🌧",//'Moderate sleet showers',
    "🌧" , //'Heavy sleet showers',
    "🌨", //'Light snow showers',
    "🌨", //'Moderate snow showers',
    "🌨️", //'Heavy snow showers',
    "🌦", //'Light rain',
    "🌧", //'Moderate rain',
    "🌧", //'Heavy rain',
    "🌩️", //'Thunder',
    "🌨", //'Light sleet',
    "🌨", //'Moderate sleet',
    "🌨", //'Heavy sleet',
    "🌨", //'Light snowfall',
    "🌨", //'Moderate snowfall',
    "🌨" //'Heavy snowfall' 
];


function copyright() 
{
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
}

function getTime(hr) 
{
    var now     = new Date();
    var hour    = now.getHours();
    var minute  = now.getMinutes();

    hour = hour + hr;
    if(hour.toString().length == 1) 
    {
        hour = '0'+(hour) ;
    }
    if(minute.toString().length == 1) 
    {
        minute = '0'+minute;
    }
    var dateTime = hour +':'+minute;
        return dateTime;
}

function getHour(hr) 
{
    var now     = new Date();
    var hour    = now.getHours();

    hour = hour + hr;
        return hour;
}

(function() 
{
main();
})();