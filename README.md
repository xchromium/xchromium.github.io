## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/xchromium/xchromium.github.io/edit/main/README.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<title>K3logics.com</title>
	<script>
		var mouseX = 0;
		var mouseY = 0;
		var popupCounter = 0;

		document.addEventListener("mousemove", function(e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
			document.getElementById("coordinates").innerHTML = "<br />X: " + e.clientX + "px<br />Y: " + e.clientY + "px";
		});

		$(document).mouseleave(function () {
			if (mouseY < 100) {
				if (popupCounter < 1) {
					alert("Please do not close the tab!");
				}
				popupCounter ++;
			}
		});

	</script>
```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/xchromium/xchromium.github.io/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
