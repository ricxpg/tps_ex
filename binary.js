<!DOCTYPE html>

<body>
<input type="text" id="ST" /> 
<input type="button" value="ok" onClick="main()"> <br>
<div id="OT" />
<script>
ST.value='';ST.focus();
function main(){
var i,st = ST.value;
//converto la stringa in un vettore di caratteri
var S=st.split('');
var valida=1;
//controllo se la stringa è valida
for(i=0;i<st.length;i++)
	if(S[i]!='0' && S[i]!='1')valida=0;

if(valida==1){
	var T = new Array();
//converto il vettore di caratteri in vettore di interi
	for(i=0;i<st.length;i++)T.push(parseInt(S[i]));
	T.reverse();//inversione del vettore di interi
	var sum=0;
	//moltiplico ciascuna cifra binaria per il proprio peso
	for(i=0;i<st.length;i++)sum+=Math.pow(2,i)*T[i];
	OT.innerHTML=sum+'<BR>';
}else OT.innerHTML='stringa non valida';
ST.value='';ST.focus();
}//_______________________fine main
</script>

</body>
</html>

