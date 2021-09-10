const API_KEY = "4e9a01204bcd1719e0cf638f81a7154f"

$(function(){
  $('#btn').on('click', function(){
    $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather?q="+$('#cityname').val()+"&units=metric&appid="+API_KEY,
      dataType:'jsonp',
    }).done(function(data){
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src", "http://openweathermap.org/img/w/"+data.weather[0].icon+".png");
      $('img').attr("alt", data.weather[0].main);
    }).fail(function(data){
      alert('通信に失敗しました');
    });
  });
});