## Workflow

### Structure

Using Bootstrap so have a copy of the bootstrap source. Keeping that in a separate folder and importing the files that I need.

So the basic folder structure looks a bit like this:

	public
		css
		font
		js
		index.html
	src
		bootstrap

src/bootstrap contains the bootstrap .less files.

In the css folder I have a main.less file that imports the bootstrap.less file.

I also have a cover.less file that is a custom version of the [bootstrap cover](http://getbootstrap.com/examples/cover/) template. I may import this into the main.less file to save on files to be downloaded.

### JS

The bootstrap.min.js is attached and used for scrollspy (though I'm not sure it's absolutely necessary).

Smooth scrolling controlled by a little bit of javascript cribbed from [codepen](http://codepen.io/mattsince87/pen/exByn). Fragment (#) Links with class="scroll" will scroll smoothly to that position.

