window.addEventListener('scroll', function() {
	let element = document.getElementById('to-top');
    let wrap = document.getElementById('wrapper');
	element.style["display"] = "inline";
    wrap.style["margin-top"] = "-60px";
});

if(window.innerWidth >= 768 && window.innerWidth <= 1200)
{
    document.getElementById('link-text-1').innerHTML = "VĒLIES PALĪDZĒT KĀDĀM PIEPILDĪT SAPNI?";
    document.getElementById('link-text-2').innerHTML = "VĒLIES PIEPILDĪT SAVU SAPNI?";
}