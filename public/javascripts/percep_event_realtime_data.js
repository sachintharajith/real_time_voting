/**
 * @author Sachintha
 */
var source = new EventSource('/stats');
source.onopen = function () {
  console.log('open')
};

source.onerror = function () {
  console.log('error');
};

//Event listners for page stats
source.addEventListener('graph', updateChart, false);
source.addEventListener('update', showUpdate, false);
//source.addEventListener('requests', updateRequests, false);
//source.addEventListener('uptime', updateUptime, false);

//handler method for incoming messages with event field chart
function updateChart(event){
	var data = JSON.parse(event.data);
	console.log("ID: "+data.id);
	console.log("date: "+data.timeStamp);
	console.log("value: "+data.value);
}

function showUpdate(event){
	//var data = JSON.parse(event.data);
	//console.log("ID: "+data.id);
	//console.log("date: "+data.timeStamp);
	console.log("update received!");
}

