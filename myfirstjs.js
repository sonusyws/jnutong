
<html>
<body>
<script>
function changeImage()
{
	element=docunment.getElementById('myimage')
	if(element.src.match("bulon"))
	{
		element.src="/i/eg_bulboff.gif";
	}
	else 
	{
		element.src="i/eg_bulbon.gif";
	}
}
</script>
<img id="myimage" onclick="changeImage()"
src="/i/eg_bulboff.gif">

</body>
</html>