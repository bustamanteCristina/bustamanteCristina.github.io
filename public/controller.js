var client;
var topic = "cristina/device/status";

client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();

var time = d.getFullYear() + '/' +
  (month < 10 ? '0' : '') + month + '/' +
  (day < 10 ? '0' : '') + day;
// var time = moment().format('MMMM Do YYYY, h:mm:ss a');
var payload = "turned on : " + time;
var payloadOff = "turned off : " + time;
$("#on").click(function () {
  $("h2").text("The device is now turned on...");
  client.publish(topic, payload);
});
$("#off").click(function () {
  $("h2").text("The device is now turned off...");
  client.publish(topic, payloadOff);
});