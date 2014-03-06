(function(global){

	var l2k = {

		elements: [],
		map		: {},
		css		: [],
		key		: {
			'13' : 0
		},

		options : {
			prefix : 'l2k-editor-'
		},

		init : function(selector) {
			if(!selector || typeof selector !== 'string') {
				return false;
			}

			this.elements = document.querySelectorAll(selector);

			this
				.setParams()
				.loadCSS('http://localhost:8080/editor/css/style.css');

		},

		setMap : function(key, index) {
			this.map[key] = index;

			return this;
		},

		setParams : function() {
			if(this.elements.length) {
				for(var i = 0; i < this.elements.length; i++) {
					var id = this.options.prefix + i;

					this.elements[i].id = id;

					this
						.setMap(id, i)
						.initMenu(id)
						.initEditor(id);
				}
			}

			return this;
		},

		initMenu : function(id) {
			if(this.elements[this.map[id]]) {
				var element = this.elements[this.map[id]],
					menu	= document.createElement('ul');

				menu.id = [id, 'menu'].join('-');

				element.appendChild(menu);
			}

			return this;
		},

		initEditor : function(id) {
			if(this.elements[this.map[id]]) {
				var element = this.elements[this.map[id]],
					input	= document.createElement('div');

				input.id = [id, 'input'].join('-');
				input.contentEditable = true;

				this.initEvents(input, id);

				element.appendChild(input);
			}

			return this;
		},

		initEvents : function(element, id) {
			element.onkeypress = function(e) {
				if(e.which === 13) {
					console.log(element);
					element.childNodes['text'];

					console.log(element, this.getText(id).split('\n'));
					console.dir(element);
					this.key['13']++;
				}
			}.bind(this)
		},

		setHtml : function() {

		},
		getText : function(id) {
			if(this.elements[this.map[id]]) {
				return this.elements[this.map[id]].children[[id, 'input'].join('-')].innerText;
			} else {
				return false;
			}
		},

		loadCSS : function(href) {
			if(this.css.indexOf(href) == -1) {
				var css	= document.createElement('link');
				css.rel = 'stylesheet';
				css.href= href;

				this.css.push(href);
				document.getElementsByTagName('head')[0].appendChild(css);
			}

			return this;
		}

	};

	if(!global.l2k) {
		global.l2k = {};
	}

	global.l2k.editor = l2k;

}(this))