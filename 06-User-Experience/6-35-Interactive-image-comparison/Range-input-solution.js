let allSlider = document.getElementsByClassName('image-slider');
let arrSlider = [];

for (let i = 0; i < allSlider.length; ++i) {
	arrSlider.push(allSlider[i]);
}

arrSlider.forEach(slider => {
	// create the extra div and 创建附加的div元素，
	// wrap it around the first image 并用它包住第一个图片元素
	let div = document.createElement('div');
	let img = slider.querySelector('img');
	slider.insertBefore(div, img);
	div.appendChild(img);

	// create the slider 创建滑块
	let range = document.createElement('input');
	range.type = 'range';
	range.oninput = function() {
		div.style.width = this.value + '%';
	};
	slider.appendChild(range);
});