typing('h1');
typing('p');

function typing(tagName) {
	let ele = document.getElementsByTagName(tagName)[0];
	let ele_length = ele.textContent.length;
	let ele_style = ele.style;
	ele_style.width = ele_length + 'ch';
	ele_style.marginTop = ele_style.marginLeft = '16px';
	ele_style.animationDuration = `${ele_length / 6}s, 1s`;
	ele_style.animationTimingFunction = `steps(${ele_length}), steps(1)`;
	ele_style.animationDelay = `0s, ${ele_length / 6}s`;
}