// $$('.pie').forEach(pie => {
// 	let p = parseFloat(pie.textContent);
// 	let NS = 'http://www.w3.org/2000/svg';
// 	let svg = document.createElementNS(NS, 'svg');
// 	let circle = document.createElementNS(NS, 'circle');
// 	let title = document.createElementNS(NS, 'title');
// 	circle.setAttribute('r', 16);
// 	circle.setAttribute('cx', 16);
// 	circle.setAttribute('cy', 16);
// 	circle.setAttribute('stroke-dasharray', p + ' 100');
// 	svg.setAttribute('viewbox', '0 0 32 32');
// 	title.textContent = pie.textContent;
// 	pie.textContent = '';
// 	svg.appendChild(title);
// 	svg.appendChild(circle);
// 	pie.appendChild(svg);
// });

let allpie = document.getElementsByClassName('pie');
console.log(allpie);

for (let i = 0; i < allpie.length; ++i) {
	console.log(allpie[0].textContent);
	let p = parseFloat(allpie[i].textContent);
	console.log(p);
	let NS = 'http://www.w3.org/2000/svg';
	let svg = document.createElementNS(NS, 'svg');
	let circle = document.createElementNS(NS, 'circle');
	let title = document.createElementNS(NS, 'title');
	circle.setAttribute('r', 50);
	circle.setAttribute('cx', 50);
	circle.setAttribute('cy', 50);
	circle.setAttribute('stroke-dasharray', Math.floor(p*Math.PI) + ' ' + Math.floor(circle.getAttribute('r')*2*Math.PI));
	circle.style.strokeWidth = circle.getAttribute('r')*2;
	svg.setAttribute('viewbox', '0 0 32 32');
	title.textContent = allpie[i].textContent;
	allpie[i].textContent = '';
	svg.appendChild(title);
	svg.appendChild(circle);
	allpie[i].appendChild(svg);
}