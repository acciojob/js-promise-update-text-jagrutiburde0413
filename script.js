var promise=new Promise(function(reslove){
	setTimeOut(function(){
		if(isValid()){
			resolve("correct")
		}else{
			reject("invalid User")
		}
	},1000)
})

function isValid(){
	return true;
}