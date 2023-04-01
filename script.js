var promise=new Promise(function(reslove){
	setTimeOut(function(){
		reslove("data")
	},1000)
})


promise.then(data).catch(err);