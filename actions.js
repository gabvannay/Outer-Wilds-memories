
// Options selection
const baseGameCheckBox = document.getElementById("use-basegame");
const dlcCheckBox = document.getElementById("use-dlc");
const lostReelsCheckBox = document.getElementById("use-lostreels");

// YouTube IDs source
const baseGameOST = ['SPa8bPqQfmo','Xpkc-NU1KA0','RmouAm4pXLE','W9p-yVwF71o','lSo4f1hBI0w','bcEoHjGdbbY','vfCxLVQaSis','HkslC6TrCIM','b8cggVGj--I','t5vG4Be1Ci8','zB5lEhUxwDU','7Y3xbA4gsis','0ddvyyyCCD4','yHNf6vQ0HFs','7Kem5iuzW54','KQrcRTA6_5M','6zlSUvWU6z8','VtQ2gOoIUiU','MdWU7Qsc0kY','z34enKCqRGk','tlmUSX5Jsmc','XOrygf_iLhw','VcmPOvy4hHA','DxG574HUn3c','5MIYydxcJkU','9N-5fCFEcs0','u_SEqF9bygQ','Ht4HxSpUN60'];
const dlcOST = ['L5bAoy1_bBI','LS-TwLP5v8k','AurKIOVHXhY','XuzBaA1VTRI','U9dbrpPeaVA','Vi-rrJ9QgHg','eu5fXqoyxuw','_BYPUjemlOA','JAfRDEaZP4E','NAOPDX6PVvk','Du93kOC34W4','uRoc0mfYXf8','oErtMEZi_6E','cnHyxCzwNPs','IJ1oeMCpoKs','q0BOyTFvCDk','LmJ-SxTTJWM','KArlFv2t4rs','H_WrhBeFikw','QTk-wXay7NI','VkmG4ozEh1s','vh-YYy5CupY','e-65sqbw_kw'];
const lostReelsOST = ['haI3kOyVsQ8','mas1uebykv0','GqaTdggRPE8','4OTq-91qUKc','ROCdkNO6150','4Cs1EJhuahM'];

// Options change
let pool = [...baseGameOST, ...dlcOST]

function updatePool()
{
	pool = [];

	if (baseGameCheckBox.checked) pool.push(...baseGameOST);
	if (dlcCheckBox.checked) pool.push(...dlcOST);
	if (lostReelsCheckBox.checked) pool.push(...lostReelsOST);
}

// Events listeners
baseGameCheckBox.addEventListener('change', updatePool);
dlcCheckBox.addEventListener('change', updatePool);
lostReelsCheckBox.addEventListener('change', updatePool);

// URL actions
const copyButton = document.getElementById("copy-button");
const newTabButton = document.getElementById("new-tab-button")

copyButton.addEventListener('click', () => {
	navigator.clipboard.writeText(urlInput.value);
});
newTabButton.addEventListener('click', () => {
	window.open(watchURL, '_blank').focus();
});