#!/bin/node

const text = require('./text.json');


// console.log(text[4]);
// console.log(text[text.length - 1]);
let front_matter_section_num = 0;


text.forEach((section) => {
	let chapter_number, section_number;

	chapter_number = Number(section.slug.slice(4, -2));
	section_number = Number(section.slug.slice(-2));

	if (isNaN(chapter_number)) chapter_number = 0;
	if (isNaN(section_number)) section_number = front_matter_section_num++;

	chapter_slug = section.chapter ? section.chapter.toLowerCase().split(' ').join('-') : 'front';

	new_section = {
		// content: section.output,
		title: section.title,
		slug: section.slug,
		chapter_title: section.ctitle,
		chapter_number,
		section_number,
		chapter_slug
	}

	console.log(new_section)
})