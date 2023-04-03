function syaHello(){
	return new Promise((resolve)=>{
	setTimeout(()=>{
		resolve("Hello, world!");
	},1000)	
	})
}
const output=document.getElementById("output");
syaHello().then((result)=>{
	output.textContent=result;
})