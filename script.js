var promise=new Promise(function(reslove){
	setTimeOut(function(){
		reslove("data")
	},1000)
})

function isValid(){
	return true;
}
promise.then(data).catch(err);