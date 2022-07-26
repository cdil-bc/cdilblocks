// [Vanilla JS – change/add class based on scroll position. · GitHub](https://gist.github.com/ohiosveryown/93015ccc1f43437db6169dbfb18196fa)

let scrollpos = window.scrollY
//const header = document.querySelector("header")
const header = document.querySelector(".sticky-header");
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("scrolled")
const remove_class_on_scroll = () => header.classList.remove("scrolled")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) { add_class_on_scroll() }
  else { remove_class_on_scroll() }

  console.log(scrollpos)
})  