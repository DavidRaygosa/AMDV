import { Component, OnInit } from '@angular/core';
import simpleParallax from 'simple-parallax-js';
import ScrollReveal from 'scrollreveal'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor() 
	{ 

	}

	ngOnInit(): void 
	{
		let image = document.getElementsByClassName('thumbnail');
		new simpleParallax(image,{
			orientation: 'down',
			scale: 1.8
		});
		setTimeout(()=>
		{
			ScrollReveal().reveal('.header-text',{
					delay: 100
			});
			ScrollReveal().reveal('.ScrollReveal-section',{
					delay: 300
			});
			ScrollReveal().reveal('.ScrollReveal-card',{
					delay: 300
			});
			ScrollReveal().reveal('.ScrollReveal-who',{
					delay: 300
			});
		},100);
	}

}
