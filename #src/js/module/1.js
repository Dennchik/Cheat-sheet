!function (e) {
	var t = {};
	function a(i) {
		if (t[i])
			return t[i].exports;
		var n = t[i] = {
			i: i,
			l: !1,
			exports: {}
		};
		return e[i].call(n.exports, n, n.exports, a),
			n.l = !0,
			n.exports;
	}
	a.m = e,
		a.c = t,
		a.d = function (e, t, i) {
			a.o(e, t) || Object.defineProperty(e, t, {
				enumerable: !0,
				get: i
			});
		}
		,
		a.r = function (e) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
		}
		,
		a.t = function (e, t) {
			if (1 & t && (e = a(e)),
				8 & t)
				return e;
			if (4 & t && "object" == typeof e && e && e.__esModule)
				return e;
			var i = Object.create(null);
			if (a.r(i),
				Object.defineProperty(i, "default", {
					enumerable: !0,
					value: e
				}),
				2 & t && "string" != typeof e)
				for (var n in e)
					a.d(i, n, function (t) {
						return e[t];
					}
						.bind(null, n));
			return i;
		}
		,
		a.n = function (e) {
			var t = e && e.__esModule ? function () {
				return e.default;
			}
				: function () {
					return e;
				}
				;
			return a.d(t, "a", t),
				t;
		}
		,
		a.o = function (e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}
		,
		a.p = "/grid-cheatsheet/",
		a(a.s = 1);
}([function (e, t, a) { }
	, function (e, t, a) {
		"use strict";
		a.r(t);
		const i = {
			declaring: {
				title: "Establishing grid containers",
				hideTitle: !0,
				items: [{
					name: "display",
					link: "https://www.w3.org/TR/css-grid-1/#grid-containers",
					initValue: "",
					appliesTo: "all elements",
					desc: '<p>A <dfn id="grid-container">grid container</dfn> establishes a new <dfn id="grid-formatting-context">grid formatting context</dfn> for its contents.\nThis is the same as establishing a block formatting context,\nexcept that grid layout is used instead of block layout:\nfloats do not intrude into the grid container,\nand the grid container’s margins do not collapse with the margins of its contents.\nThe contents of a <a href="#grid-container">grid container</a> are laid out into a <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>,\nwith <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> forming the boundaries of each <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a>’ containing block.\nThe <a href="https://www.w3.org/TR/css-overflow-3/#overflow">overflow</a> property applies to <a href="#grid-container">grid containers</a>.</p>\n\n<p>Grid containers are not block containers,\nand so some properties that were designed with the assumption of block layout\ndon’t apply in the context of grid layout.\nIn particular:</p>\n\n<ul>\n  <li>\n    <a href="https://www.w3.org/TR/CSS22/visuren.html#float">float</a> and <a href="https://www.w3.org/TR/CSS22/visuren.html#clear">clear</a> have no effect on a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>.\nHowever, the <a href="https://www.w3.org/TR/CSS22/visuren.html#float">float</a> property still affects the computed value of <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> on children of a grid container,\nas this occurs <em>before</em> <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> are determined.\n  </li>\n  <li>\n    <a href="https://www.w3.org/TR/css-inline-3/#vertical-align">vertical-align</a> has no effect on a grid item.\n  </li>\n  <li>\n    the <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-line">::first-line</a> and <a href="https://www.w3.org/TR/css-pseudo-4/#selectordef-first-letter">::first-letter</a> pseudo-elements do not apply to <a href="#grid-container">grid containers</a>,\nand <a href="#grid-container">grid containers</a> do not contribute a first formatted line or first letter to their ancestors.\n  </li>\n</ul>\n\n<p>If an element’s specified <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> is <a href="#valdef-display-inline-grid">inline-grid</a> and the element is floated or absolutely positioned,\nthe computed value of <a href="https://www.w3.org/TR/css-ruby-1/#display">display</a> is <a href="#valdef-display-grid">grid</a>.\nThe table in <a href="https://www.w3.org/TR/CSS2/visuren.html#dis-pos-flo">CSS 2.1 Chapter 9.7</a> is thus amended\nto contain an additional row,\nwith <a href="#valdef-display-inline-grid">inline-grid</a> in the "Specified Value" column\nand <a href="#valdef-display-grid">grid</a> in the "Computed Value" column.</p>',
					values: [{
						name: "grid",
						alias: "valdef-display-grid",
						desc: 'This value causes an element to generate a block-level <a href="#grid-container">grid container</a> box.',
						current: !0
					}, {
						name: "inline-grid",
						alias: "valdef-display-inline-grid",
						desc: 'This value causes an element to generate an inline-level <a href="#grid-container">grid container</a> box.'
					}],
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid"
						}
					}],
					demoBefore: "Some text"
				}]
			},
			defining: {
				title: "Defining the grid",
				link: "https://www.w3.org/TR/css-grid-1/#grid-definition",
				desc: '<h3>Explicit grid</h3>\n\n  <p>The three properties <a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a> together define the <dfn id="explicit-grid">explicit grid</dfn> of a <a href="#grid-container">grid container</a>.\nThe final grid may end up larger due to <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> placed outside the <a href="#explicit-grid">explicit grid</a>;\nin this case implicit tracks will be created,\nthese implicit tracks will be sized by the <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties.</p>\n\n<p>The size of the <a href="#explicit-grid">explicit grid</a> is determined by the larger of\nthe number of rows/columns defined by <a href="#section-grid-template-areas">grid-template-areas</a> and the number of rows/columns sized by <a href="#section-grid-template-rows">grid-template-rows</a>/<a href="#section-grid-template-columns">grid-template-columns</a>.\nAny rows/columns defined by <a href="#section-grid-template-areas">grid-template-areas</a> but not sized by <a href="#section-grid-template-rows">grid-template-rows</a>/<a href="#section-grid-template-columns">grid-template-columns</a> take their size from the <a href="#section-grid-auto-rows">grid-auto-rows</a>/<a href="#section-grid-auto-columns">grid-auto-columns</a> properties.\nIf these properties don’t define <em>any</em> <a href="#explicit-grid">explicit</a> tracks\nthe <a href="#explicit-grid">explicit grid</a> still contains one <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid line</a> in each axis.</p>\n\n<p>Numeric indexes in the <a href="#grid-placement-property">grid-placement properties</a> count from the edges of the <a href="#explicit-grid">explicit grid</a>.\nPositive indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a> side\n(starting from 1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#start">start</a>-most <a href="#explicit-grid">explicit</a> line),\nwhile negative indexes count from the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a> side\n(starting from -1 for the <a href="https://www.w3.org/TR/css-writing-modes-3/#end">end</a>-most <a href="#explicit-grid">explicit</a> line).</p>\n\n<p>The <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> and <a href="#section-grid-template">grid-template</a> properties are a <a href="https://www.w3.org/TR/css-cascade-4/#shorthand-property">shorthands</a> that can be used to set all three <dfn id="explicit-grid-properties">explicit grid properties</dfn> (<a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a>)\nat the same time.\nThe <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> shorthand also resets properties controlling the <a href="#implicit-grid">implicit grid</a>,\nwhereas the <a href="#section-grid-template">grid-template</a> property leaves them unchanged.</p>\n\n<h3>Implicit grid</h3>\n\n<p>The <a href="#section-grid-template-rows">grid-template-rows</a>, <a href="#section-grid-template-columns">grid-template-columns</a>, and <a href="#section-grid-template-areas">grid-template-areas</a> properties define a fixed number\nof tracks that form the <a href="#explicit-grid">explicit grid</a>.\nWhen <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> are positioned outside of these bounds,\nthe <a href="#grid-container">grid container</a> generates <dfn id="implicit-grid-track">implicit grid tracks</dfn> by adding <dfn id="implicit-grid-lines">implicit grid lines</dfn> to the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>.\nThese lines together with the <a href="#explicit-grid">explicit grid</a> form the <dfn id="implicit-grid">implicit grid</dfn>.\nThe <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties size these <a href="#implicit-grid-track">implicit grid tracks</a>.</p>\n\n<p>The <a href="#section-grid-auto-flow">grid-auto-flow</a> property controls auto-placement of <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> without an explicit position.\nOnce the <a href="#explicit-grid">explicit grid</a> is filled\n(or if there is no <a href="#explicit-grid">explicit grid</a>)\nauto-placement will also cause the generation of <a href="#implicit-grid-track">implicit grid tracks</a>.</p>\n\n<p>The <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> <a href="https://www.w3.org/TR/css-cascade-4/#shorthand-property">shorthand</a> property can set the <dfn id="implicit-grid-properties">implicit grid properties</dfn> (<a href="#section-grid-auto-flow">grid-auto-flow</a>, <a href="#section-grid-auto-rows">grid-auto-rows</a>, and <a href="#section-grid-auto-columns">grid-auto-columns</a>)\ntogether with the <a href="#explicit-grid-properties">explicit grid properties</a> in a single declaration.</p>',
				items: [{
					name: "grid-template-columns, grid-template-rows",
					alias: "track-sizing",
					link: "https://www.w3.org/TR/css-grid-1/#track-sizing",
					initValue: "none",
					appliesTo: '<a href="#grid-container">grid containers</a>',
					desc: '<p>These properties specify,\nas a space-separated <dfn id="track-list">track list</dfn>,\nthe line names and <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>.\nThe <a href="#section-grid-template-columns">grid-template-columns</a> property specifies the <a href="#track-list">track list</a> for the grid’s columns,\nwhile <a href="#section-grid-template-rows">grid-template-rows</a> specifies the <a href="#track-list">track list</a> for the grid’s rows.</p>\n\n<p class="note" role="note"><span>Note:</span> The size of the grid is not purely the sum of the track sizes,\nas <a href="https://www.w3.org/TR/css3-align/#row-gap">row-gap</a>, <a href="https://www.w3.org/TR/css3-align/#column-gap">column-gap</a> and <a href="#section-justify-content">justify-content</a>, <a href="#section-align-content">align-content</a> can add additional space between tracks.</p>',
					values: [{
						name: "none",
						desc: 'Indicates that no <a href="#explicit-grid">explicit</a> grid tracks are created by this property\n(though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#section-grid-template-areas">grid-template-areas</a>).\n     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="https://www.w3.org/TR/css-grid-1/#implicit-grids">implicitly generated</a>,\nand their size will be determined by the <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties.</p>'
					}, {
						name: '<a href="#section-track-list-values">&lt;track-list></a> | <a href="#section-auto-tracks">&lt;auto-track-list></a>',
						alias: "track-listing",
						desc: 'Specifies the <a href="#track-list">track list</a> as a series of <a href="#grid-template-rows-track-sizing-function">track sizing functions</a> and line names.\nEach <dfn id="grid-template-rows-track-sizing-function">track sizing function</dfn> can be specified as a length,\na percentage of the <a href="#grid-container">grid container</a>’s size,\na measurement of the contents occupying the column or row,\nor a fraction of the free space in the grid.\nIt can also be specified as a range using the <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,\nwhich can combine any of the previously mentioned mechanisms\nto specify separate <a href="https://www.w3.org/TR/css-grid-1/#min-track-sizing-function">min</a> and <a href="https://www.w3.org/TR/css-grid-1/#max-track-sizing-function">max track sizing functions</a> for the column or row.'
					}],
					children: [{
						name: "Track list values",
						alias: "track-list-values",
						propDemoName: "grid-template-columns",
						link: "https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-length-percentage",
						desc: '<p>The syntax of a <a href="#track-list">track list</a> is:</p>\n\n<pre>\n<code><dfn id="typedef-track-list">&lt;track-list></dfn>          = [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-track-size">&lt;track-size></a> | <a href="#typedef-track-repeat">&lt;track-repeat></a> ] ] + <a href="#typedef-line-names">&lt;line-names></a> ?\n<dfn id="typedef-auto-track-list">&lt;auto-track-list></dfn>     = [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-fixed-size">&lt;fixed-size></a> | <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a> ] ] * <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-auto-repeat">&lt;auto-repeat></a>\n                        [ <a href="#typedef-line-names">&lt;line-names></a> ? [ <a href="#typedef-fixed-size">&lt;fixed-size></a> | <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a> ] ] * <a href="#typedef-line-names">&lt;line-names></a> ?\n<dfn id="typedef-explicit-track-list">&lt;explicit-track-list></dfn> = [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-track-size">&lt;track-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ?\n\n<dfn id="typedef-track-size">&lt;track-size></dfn>          = <a href="#typedef-track-breadth">&lt;track-breadth></a> | minmax( <a href="#typedef-inflexible-breadth">&lt;inflexible-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-track-breadth">&lt;track-breadth></a> ) | fit-content( <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> )\n<dfn id="typedef-fixed-size">&lt;fixed-size></dfn>          = <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> | minmax( <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-track-breadth">&lt;track-breadth></a> ) | minmax( <a href="#typedef-inflexible-breadth">&lt;inflexible-breadth></a> <a href="https://www.w3.org/TR/css3-values/#comb-comma">,</a> <a href="#typedef-fixed-breadth">&lt;fixed-breadth></a> )\n<dfn id="typedef-track-breadth">&lt;track-breadth></dfn>       = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> | <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> | min-content | max-content | auto\n<dfn id="typedef-inflexible-breadth">&lt;inflexible-breadth></dfn>  = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a> | min-content | max-content | auto\n<dfn id="typedef-fixed-breadth">&lt;fixed-breadth></dfn>       = <a href="https://www.w3.org/TR/css3-values/#typedef-length-percentage">&lt;length-percentage></a>\n<dfn id="typedef-line-names">&lt;line-names></dfn>          = \'[\' <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident></a> * \']\'\n</code></pre>',
						values: [{
							name: "&lt;length-percentage>",
							alias: "length-percentage",
							desc: 'A non-negative length or percentage, as defined by CSS3 Values. <a href="https://www.w3.org/TR/css-grid-1/#biblio-css3val">[CSS3VAL]</a>\n     <p><a href="https://www.w3.org/TR/css3-values/#percentage-value">&lt;percentage></a> values are relative to the <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-size">inline size</a> of the <a href="#grid-container">grid container</a> in column <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a>,\nand the <a href="https://www.w3.org/TR/css-writing-modes-3/#block-size">block size</a> of the <a href="#grid-container">grid container</a> in row <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a>.\nIf the size of the <a href="#grid-container">grid container</a> depends on the size of its tracks,\nthen the <a href="https://www.w3.org/TR/css3-values/#percentage-value">&lt;percentage></a> must be treated as <a href="#track-list-values-auto">auto</a>,\nfor the purpose of calculating the intrinsic sizes of the <a href="#grid-container">grid container</a> and then resolve against that resulting <a href="#grid-container">grid container</a> size\nfor the purpose of laying out the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> and its items.</p>'
						}, {
							name: "&lt;flex>",
							alias: "flex-fr",
							desc: 'A non-negative dimension with the unit <a href="https://www.w3.org/TR/css-grid-1/#valdef-flex-fr">fr</a> specifying the track’s <dfn id="grid-template-columns-flex-factor">flex factor</dfn>.\nEach <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a>-sized track takes a share of the remaining space in proportion to its <a href="#grid-template-columns-flex-factor">flex factor</a>.\nSee <a href="https://www.w3.org/TR/css-grid-1/#fr-unit">Flexible Lengths</a> for more details.\n     <p>When appearing outside a <a href="#valdef-grid-template-columns-minmax">minmax()</a> notation,\nimplies an automatic minimum (i.e. \'minmax(auto, <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a>)\').</p>'
						}, {
							name: "max-content",
							alias: "valdef-grid-template-columns-max-content",
							desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#max-content-contribution">max-content contribution</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.'
						}, {
							name: "min-content",
							alias: "valdef-grid-template-columns-min-content",
							desc: 'Represents the largest <a href="https://www.w3.org/TR/css-sizing-3/#min-content-contribution">min-content contribution</a> of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.'
						}, {
							name: "minmax(min, max)",
							alias: "valdef-grid-template-columns-minmax",
							desc: 'Defines a size range\ngreater than or equal to <var>min</var> and less than or equal to <var>max</var>.\nIf <var>max</var> &lt; <var>min</var>,\nthen <var>max</var> is ignored and <code>minmax(min,max)</code> is treated as <var>min</var>.\nAs a maximum, a <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> value sets the track’s <a href="#grid-template-columns-flex-factor">flex factor</a>;\nit is invalid as a minimum.\n     <p class="note" role="note"><span>Note:</span> A future level of this spec may allow <a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" title="Expands to: fr">&lt;flex></a> minimums,\nand will update the <a href="https://www.w3.org/TR/css-grid-1/#track-sizing-algorithm">track sizing algorithm</a> to account for this correctly</p>'
						}, {
							name: "auto",
							desc: 'As a maximum, identical to <a href="#valdef-grid-template-columns-max-content">max-content</a>.\nAs a minimum, represents the largest minimum size (as specified by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>)\nof the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> occupying the <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a>.\n     <p class="note" role="note"><span>Note:</span> <a href="#track-list-values-auto">auto</a> track sizes (and only <a href="#track-list-values-auto">auto</a> track sizes)\ncan be stretched by the <a href="#section-align-content">align-content</a> and <a href="#section-justify-content">justify-content</a> properties.</p>'
						}, {
							name: "fit-content(&lt;length-percentage>)",
							alias: "fit-content",
							desc: 'Represents the formula <code>min(<a href="#valdef-grid-template-columns-max-content">max-content</a>, max(<a href="#track-list-values-auto">auto</a>, <var>argument</var>))</code>,\nwhich is calculated like <code>minmax(auto, max-content)</code>,\nexcept that the track size is clamped at <var>argument</var> if it is greater than the <a href="#track-list-values-auto">auto</a> minimum.'
						}],
						customValues: [{
							name: "100px 40%",
							current: !0
						}, {
							name: "10% 30% 50% 10%"
						}, {
							name: "1fr 3fr"
						}, {
							name: "1fr auto"
						}, {
							name: "repeat(7, 1fr)"
						}, {
							name: "repeat(3, 1fr auto)"
						}, {
							name: "1fr minmax(min-content, 3fr)"
						}, {
							name: "2fr max-content"
						}, {
							name: "min-content min-content"
						}, {
							name: "max-content max-content"
						}, {
							name: "fit-content(10%) fit-content(50%)"
						}],
						htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child">Ut enim ad minim veniam</div>\n    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>\n    <div class="child">Duis aute irure dolor</div>\n    <div class="child">Excepteur</div>\n    <div class="child">Commodo consequat</div>\n    <div class="child">Fugiat nulla pariatur</div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "20px"
							}
						}]
					}, {
						name: "Named lines",
						alias: "named-lines",
						propDemoName: "grid-template-columns",
						link: "https://www.w3.org/TR/css-grid-1/#named-lines",
						desc: '<p>While <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> can always be referred to by their numerical index, <dfn id="named-line">named lines</dfn> can make the <a href="#grid-placement-property">grid-placement properties</a> easier to understand and maintain.\nLines can be explicitly named in the <a href="#section-grid-template-rows">grid-template-rows</a> and <a href="#section-grid-template-columns">grid-template-columns</a> properties,\nor <a href="https://www.w3.org/TR/css-grid-1/#implicit-named-lines">implicitly named</a> by creating <a href="#named-grid-area">named grid areas</a> with the <a href="#section-grid-template-areas">grid-template-areas</a> property.</p>\n\n<p>A line name cannot be <code>span</code>,\ni.e. the <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a> in the <a href="#typedef-line-names">&lt;line-names&gt;</a> production\nexcludes the keyword <code>span</code>.</p>',
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						customValues: [{
							name: "[first nav-start] 150px\n             [main-start] 1fr [last]",
							current: !0
						}, {
							name: "[first nav-start] 150px\n             [main-start] 3fr\n             [main-end aside-start] 1fr\n             [last]"
						}],
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "[first nav-start] 150px\n                                  [main-start] 1fr [last]",
								"grid-template-rows": "[first header-start] 50px\n                              [main-start] 1fr\n                              [footer-start] 50px [last]"
							}
						}, {
							selector: ".child:nth-child(1)",
							props: {
								"grid-column": "first / last"
							}
						}, {
							selector: ".child:nth-child(2)",
							props: {
								"grid-row": "main-start / last"
							}
						}]
					}, {
						name: "repeat()",
						alias: "repeat",
						propDemoName: "grid-template-columns",
						link: "https://www.w3.org/TR/css-grid-1/#repeat-notation",
						desc: '<p>The <dfn id="funcdef-repeat">repeat()</dfn> notation represents a repeated fragment of the <a href="#track-list">track list</a>,\nallowing a large number of columns or rows that exhibit a recurring pattern\nto be written in a more compact form.</p>\n\n<p>The generic form of the <a href="#funcdef-repeat">repeat()</a> syntax is, approximately,</p>\n\n<pre>\n<code>repeat( [ <a href="">&lt;positive-integer></a> | auto-fill | auto-fit ], <a href="#typedef-track-list">&lt;track-list></a> )\n</code></pre>\n\n<p>The first argument specifies the number of repetitions.\nThe second argument is a <a href="#track-list">track list</a>,\nwhich is repeated that number of times.\nHowever, there are some restrictions:</p>\n\n<ul>\n    <li>\n     <p>The <a href="#funcdef-repeat">repeat()</a> notation can’t be nested.</p>\n  </li><li>\n     <p>Automatic repetitions (<a href="#valdef-repeat-auto-fill">auto-fill</a> or <a href="#valdef-repeat-auto-fit">auto-fit</a>)\ncannot be combined with <a href="https://www.w3.org/TR/css-grid-1/#intrinsic-sizing-function">intrinsic</a> or <a href="https://www.w3.org/TR/css-grid-1/#flexible-sizing-function">flexible</a> sizes.</p>\n  </li>\n</ul>\n\n<p>Thus the precise syntax of the <a href="#funcdef-repeat">repeat()</a> notation\nhas several forms:</p>\n\n<pre>\n<code><dfn id="typedef-track-repeat"><a href="#typedef-track-repeat">&lt;track-repeat></a></dfn> = repeat( [ <a href="">&lt;positive-integer></a> ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-track-size">&lt;track-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )\n<dfn id="typedef-auto-repeat"><a href="#typedef-auto-repeat">&lt;auto-repeat></a></dfn>  = repeat( [ auto-fill | auto-fit ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-fixed-size">&lt;fixed-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )\n<dfn id="typedef-fixed-repeat"><a href="#typedef-fixed-repeat">&lt;fixed-repeat></a></dfn> = repeat( [ <a href="">&lt;positive-integer></a> ], [ <a href="#typedef-line-names">&lt;line-names></a> ? <a href="#typedef-fixed-size">&lt;fixed-size></a> ] + <a href="#typedef-line-names">&lt;line-names></a> ? )\n</code></pre>\n\n<ul>\n  <li>\n    <p class="">The <a href="#typedef-track-repeat">&lt;track-repeat></a> variant can represent the repetition of any <a href="#typedef-track-size">&lt;track-size></a>,\nbut is limited to a fixed number of repetitions.</p>\n  </li>\n  <li>\n    <p>The <a href="#typedef-auto-repeat">&lt;auto-repeat></a> variant can repeat automatically to fill a space,\nbut requires <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> track sizes so that the number of repetitions can be calculated.\nIt can only appear once in the <a href="#track-list">track list</a>,\nbut the same <a href="#track-list">track list</a> can also contain <a href="#typedef-fixed-repeat">&lt;fixed-repeat></a>s.</p>\n  </li>\n</ul>\n\n<p>If the <a href="#funcdef-repeat">repeat()</a> function ends up placing two <a href="#typedef-line-names">&lt;line-names></a> adjacent to each other,\nthe name lists are merged.\nFor example, <code>repeat(2, [a] 1fr [b])</code> is equivalent to <code>[a] 1fr [b a] 1fr [b]</code>.</p>\n\n<p>When <dfn id="valdef-repeat-auto-fill">auto-fill</dfn> is given as the repetition number,\nif the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> size or max size in the relevant axis,\nthen the number of repetitions is the largest possible positive integer\nthat does not cause the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> to overflow its <a href="#grid-container">grid container</a> (treating each track as its <a href="https://www.w3.org/TR/css-grid-1/#max-track-sizing-function">max track sizing function</a> if that is <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> or as its minimum track sizing function otherwise,\nand taking <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> into account);\nif any number of repetitions would overflow,\nthen 1 repetition.\nOtherwise, if the <a href="#grid-container">grid container</a> has a <a href="https://www.w3.org/TR/css-sizing-3/#definite">definite</a> min size in the relevant axis,\nthe number of repetitions is the smallest possible positive integer that fulfills that minimum requirement.\nOtherwise, the specified <a href="#track-list">track list</a> repeats only once.</p>\n\n<p>The <dfn id="valdef-repeat-auto-fit">auto-fit</dfn> keyword behaves the same as <a href="#valdef-repeat-auto-fill">auto-fill</a>,\nexcept that after <a href="https://www.w3.org/TR/css-grid-1/#auto-placement-algo">grid item placement</a> any empty repeated tracks are <a href="#collapsed-track">collapsed</a>.\nAn empty track is one with no in-flow grid items placed into or spanning across it.\n(This can result in <em>all</em> tracks being <a href="#collapsed-track">collapsed</a>,\nif they’re all empty.)</p>\n\n<p>A <dfn id="collapsed-track">collapsed track</dfn> is treated as having\na fixed <a href="#grid-template-rows-track-sizing-function">track sizing function</a> of <code>0px</code>,\nand the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> on either side of it—<wbr>including any space allotted through <a href="https://www.w3.org/TR/css3-align/#distributed-alignment">distributed alignment</a>—<wbr><a href="#collapsed-gutter">collapse</a>.</p>\n\n<p>For the purpose of finding the number of auto-repeated tracks,\nthe UA must floor the track size to a UA-specified value\nto avoid division by zero.\nIt is suggested that this floor be <code>1px</code>.</p>',
						customValues: [{
							name: "repeat(5, 1fr)",
							current: !0
						}, {
							name: "repeat(auto-fill, minmax(75px, 1fr))"
						}, {
							name: "repeat(auto-fit, minmax(75px, 1fr))"
						}],
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "repeat(4, 1fr)"
							}
						}]
					}],
					demos: [{
						name: "grid-template-rows",
						customValues: [{
							name: "1fr 1fr",
							current: !0
						}, {
							name: "1fr 150px"
						}, {
							name: "repeat(2, 2fr  1fr)"
						}, {
							id: "rows-named-lines",
							name: "[header-start] 1fr [header-end content-start] min-content [content-end footer-start] 1fr [footer-end]"
						}, {
							name: "none"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "repeat(3, 1fr)",
								"grid-template-rows": "1fr auto"
							}
						}, {
							selector: ".child:nth-child(1)",
							props: {
								"grid-row": "header-start / footer-end"
							},
							valueId: "rows-named-lines"
						}, {
							selector: ".child:nth-child(2)",
							props: {
								"grid-row": "header-start / content-end"
							},
							valueId: "rows-named-lines"
						}]
					}, {
						name: "grid-template-columns",
						customValues: [{
							name: "1fr 1fr",
							current: !0
						}, {
							name: "1fr 2fr"
						}, {
							name: "50px 100px 1fr"
						}, {
							name: "repeat(2, 1fr auto)"
						}, {
							id: "columns-named-lines",
							name: "[aside-start] 1fr [aside-end content-start] 3fr [content-end]"
						}, {
							name: "none"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "1fr auto"
							}
						}, {
							selector: ".child:nth-child(1)",
							props: {
								"grid-column": "aside-start / content-end"
							},
							valueId: "columns-named-lines"
						}, {
							selector: ".child:nth-child(2)",
							props: {
								"grid-column": "content"
							},
							valueId: "columns-named-lines"
						}]
					}]
				}, {
					name: "grid-auto-columns, grid-auto-rows",
					alias: "auto-tracks",
					link: "https://www.w3.org/TR/css-grid-1/#auto-tracks",
					initValue: "auto",
					appliesTo: '<a href="#grid-container">grid containers</a>',
					desc: '<p>If a grid item is positioned into a row or column that is not explicitly sized\nby <a href="#section-grid-template-rows">grid-template-rows</a> or <a href="#section-grid-template-columns">grid-template-columns</a>, <a href="#implicit-grid-track">implicit grid tracks</a> are created to hold it.\nThis can happen either by explicitly positioning into a row or column that is out of range,\nor by the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> creating additional rows or columns.\nThe <a href="#section-grid-auto-columns">grid-auto-columns</a> and <a href="#section-grid-auto-rows">grid-auto-rows</a> properties specify the size of such implicitly-created tracks.</p>\n\n<p>If multiple track sizes are given, the pattern is repeated as necessary\nto find the size of the implicit tracks.\nThe first <a href="#implicit-grid-track">implicit grid track</a> after the <a href="#explicit-grid">explicit grid</a> receives the first specified size, and so on forwards;\nand the last <a href="#implicit-grid-track">implicit grid track</a> before the <a href="#explicit-grid">explicit grid</a> receives the last specified size, and so on backwards.</p>',
					values: [{
						name: '<a href="#typedef-track-size">&lt;track-size></a>+',
						alias: "autotracks-track-size",
						desc: ""
					}],
					customValues: [{
						name: "100px",
						current: !0
					}, {
						name: "150px"
					}, {
						name: "1fr"
					}],
					htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template-rows": "50px",
							"grid-auto-rows": "100px"
						}
					}],
					demos: [{
						name: "grid-auto-rows",
						customValues: [{
							name: "100px",
							current: !0
						}, {
							name: "150px"
						}, {
							name: "1fr"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-rows": "50px",
								"grid-auto-rows": "100px"
							}
						}]
					}, {
						name: "grid-auto-columns",
						customValues: [{
							name: "75px",
							current: !0
						}, {
							name: "150px"
						}, {
							name: "1fr"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "50px",
								"grid-auto-columns": "75px",
								"grid-auto-flow": "column"
							}
						}]
					}]
				}, {
					name: "grid-auto-flow",
					link: "https://www.w3.org/TR/css-grid-1/#grid-auto-flow-property",
					initValue: "row",
					appliesTo: '<a href="#grid-container">grid containers</a>',
					desc: '<p><a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> that aren’t explicitly placed are automatically placed\ninto an unoccupied space in the <a href="#grid-container">grid container</a> by the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a>. <a href="#section-grid-auto-flow">grid-auto-flow</a> controls how the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> works,\nspecifying exactly how auto-placed items get flowed into the grid.\nSee <a href="https://www.w3.org/TR/css-grid-1/#auto-placement-algo">§8.5 Grid Item Placement Algorithm</a> for details on precisely how the auto-placement algorithm works.</p>',
					values: [{
						name: "row",
						desc: 'The <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> places items by filling each row in turn, adding new rows as necessary. If neither <a href="#grid-auto-flow-row">row</a> nor <a href="#grid-auto-flow-column">column</a> is provided, <a href="#grid-auto-flow-row">row</a> is assumed.'
					}, {
						name: "column",
						desc: 'The <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> places items by filling each column in turn, adding new columns as necessary.'
					}, {
						name: "dense",
						desc: 'If specified, the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-placement-algorithm">auto-placement algorithm</a> uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later. This may cause items to appear out-of-order, when doing so would fill in holes left by larger items.\n\n      <p>If omitted, a “sparse” algorithm is used, where the placement algorithm only ever moves “forward” in the grid when placing items, never backtracking to fill holes. This ensures that all of the auto-placed items appear “in order”, even if this leaves holes that could have been filled by later items.</p>'
					}],
					customValues: [{
						name: "row",
						current: !0
					}, {
						name: "row dense"
					}, {
						name: "column"
					}, {
						name: "column dense"
					}],
					htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template-columns": "repeat(4, 1fr)",
							"grid-template-rows": "repeat(4, 1fr)",
							"grid-auto-flow": "row"
						}
					}, {
						selector: ".child--featured",
						props: {
							"grid-column": "span 3",
							"grid-row": "span 3"
						}
					}]
				}, {
					name: "grid-template-areas",
					link: "https://www.w3.org/TR/css-grid-1/#grid-template-areas-property",
					initValue: "none",
					appliesTo: '<a href="#grid-container">grid containers</a>',
					desc: '<p>This property specifies <dfn id="named-grid-area">named grid areas</dfn>,\nwhich are not associated with any particular <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>,\nbut can be referenced from the <a href="#grid-placement-property">grid-placement properties</a>.\nThe syntax of the <a href="#section-grid-template-areas">grid-template-areas</a> property also provides a visualization\nof the structure of the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>,\nmaking the overall layout of the <a href="#grid-container">grid container</a> easier to understand.</p>',
					values: [{
						name: "none",
						alias: "valdef-grid-template-areas-none",
						desc: 'Indicates that no <a href="#named-grid-area">named grid areas</a>,\nand likewise no <a href="#explicit-grid">explicit grid</a> tracks,\nare defined by this property\n(though <a href="#explicit-grid">explicit grid</a> tracks could still be created by <a href="#section-grid-template-columns">grid-template-columns</a> or <a href="#section-grid-template-rows">grid-template-rows</a>).\n     <p class="note" role="note"><span>Note:</span> In the absence of an <a href="#explicit-grid">explicit grid</a> any rows/columns will be <a href="https://www.w3.org/TR/css-grid-1/#implicit-grids">implicitly generated</a>,\nand their size will be determined by the <a href="#section-grid-auto-rows">grid-auto-rows</a> and <a href="#section-grid-auto-columns">grid-auto-columns</a> properties.</p>'
					}, {
						name: "&lt;string&gt;+",
						alias: "valdef-grid-template-areas-string",
						desc: 'A row is created for every separate string listed for the <a href="#section-grid-template-areas">grid-template-areas</a> property,\nand a column is created for each cell in the string,\nwhen parsed as follows:\n     <p>Tokenize the string into a list of the following tokens,\nusing longest-match semantics:</p>\n    <ul>\n      <li>\n        A sequence of <a href="https://www.w3.org/TR/css-syntax-3/#name-code-point">name code points</a>,\n    representing a <dfn id="grid-template-areas-named-cell-token">named cell token</dfn> with a name consisting of its code points.\n      </li>\n      <li>\n        A sequence of one or more "." (U+002E FULL STOP),\n    representing a <dfn id="grid-template-areas-null-cell-token">null cell token</dfn>.\n      </li>\n      <li>\n        A sequence of <a href="https://www.w3.org/TR/css-syntax-3/#whitespace">whitespace</a>,\n    representing nothing\n    (do not produce a token).\n      </li>\n      <li>\n        A sequence of any other characters,\n    representing a <dfn id="grid-template-areas-trash-token">trash token</dfn>.\n      </li>\n    </ul>\n        <p class="note" role="note"><span>Note:</span> These rules can produce cell names that do not match the <a href="https://www.w3.org/TR/css3-values/#typedef-ident">&lt;ident&gt;</a> syntax,\n    such as "1st 2nd 3rd",\n    which requires escaping when referencing those areas by name in other properties,\n    like <a href="#section-grid-row">grid-row: 1st;</a> to reference the area named <code>1st</code>.</p>\n        <ul>\n      <li>\n        A <a href="#grid-template-areas-null-cell-token">null cell token</a> represents an unnamed area in the <a href="#grid-container">grid container</a>.\n      </li>\n      <li>\n        A <a href="#grid-template-areas-named-cell-token">named cell token</a> creates a <a href="#named-grid-area">named grid area</a> with the same name.\n    Multiple <a href="#grid-template-areas-named-cell-token">named cell tokens</a> within and between rows\n    create a single <a href="#named-grid-area">named grid area</a> that spans the corresponding <a href="https://www.w3.org/TR/css-grid-1/#grid-cell">grid cells</a>.\n      </li>\n      <li>\n        A <a href="#grid-template-areas-trash-token">trash token</a> is a syntax error,\n    and makes the declaration invalid.\n      </li>\n    </ul>\n\n     <p>All strings must have the same number of columns,\nor else the declaration is invalid.\nIf a <a href="#named-grid-area">named grid area</a> spans multiple <a href="https://www.w3.org/TR/css-grid-1/#grid-cell">grid cells</a>,\nbut those cells do not form a single filled-in rectangle,\nthe declaration is invalid.</p>\n     <p class="note" role="note"><span>Note:</span> Non-rectangular or disconnected regions may be permitted in a future version of this module.</p>'
					}],
					customValues: [{
						name: '"head head"\n            "aside main"\n            "foot foot"',
						current: !0
					}, {
						name: '"head aside"\n             "main main"\n             "foot foot"'
					}, {
						name: '"head aside"\n             "main aside"\n             "foot aside"'
					}, {
						name: '"head"\n             "main"\n             "aside"\n             "foot"'
					}, {
						name: "none"
					}],
					htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child header">Header</div>\n    <div class="child main">Main</div>\n    <div class="child aside">Aside</div>\n    <div class="child footer">Footer</div>\n  </div>',
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template-areas": '"head head"\n                                "aside main"\n                                "foot foot"'
						}
					}, {
						selector: ".header",
						props: {
							"grid-area": "head"
						}
					}, {
						selector: ".aside",
						props: {
							"grid-area": "aside"
						}
					}, {
						selector: ".main",
						props: {
							"grid-area": "main"
						}
					}, {
						selector: ".footer",
						props: {
							"grid-area": "foot"
						}
					}]
				}, {
					name: "grid-template",
					group: "alignment",
					link: "https://www.w3.org/TR/css-grid-1/#explicit-grid-shorthand",
					initValue: "see individual properties",
					appliesTo: '<a href="#grid-container">grid containers</a>',
					desc: "<p>The <i>grid-template</i> property is a <a href='https://www.w3.org/TR/css-cascade-4/#shorthand-property' >shorthand</a> for setting <i>grid-template-columns</i>,\n  <i>grid-template-rows</i>, and <i>grid-template-areas</i> in a single declaration. It has several distinct syntax forms:</p>\n    <p role='note'><span>Note:</span> The <i>grid</i> shorthand accepts the same syntax, but also resets the implicit grid properties to their initial values. Unless authors want those to cascade in separately, it is therefore recommended to use <i>grid</i> instead of <i>grid-template</i>.</p>",
					values: [{
						name: "none",
						alias: "valdef-grid-template-none",
						desc: 'Sets all three properties to their initial values (<a href="#track-sizing-none">none</a>).'
					}, {
						name: "&lt;grid-template-rows&gt; / &lt;grid-template-columns&gt;",
						alias: "grid-template-rowcol",
						desc: 'Sets <a href="#section-grid-template-rows">grid-template-rows</a> and <a href="#section-grid-template-columns">grid-template-columns</a> to the specified values, respectively,\nand sets <a href="#section-grid-template-areas">grid-template-areas</a> to <a href="#valdef-grid-template-areas-none">none</a>.'
					}, {
						name: '[ <a href="#typedef-line-names">&lt;line-names></a> ? &lt;string&gt; <a href="#typedef-track-size">&lt;track-size></a> ? <a href="#typedef-line-names">&lt;line-names></a>? ] + [ / <a href="#typedef-explicit-track-list">&lt;explicit-track-list></a> ] ?',
						alias: "grid-template-ascii",
						desc: '<ul>\n      <li>\n       <p>Sets <a href="#section-grid-template-areas">grid-template-areas</a> to the strings listed.</p>\n  </li><li>\n       <p>Sets <a href="#section-grid-template-rows">grid-template-rows</a> to the <a href="#typedef-track-size">&lt;track-size></a>s following each string\n(filling in <a href="#track-list-values-auto">auto</a> for any missing sizes),\nand splicing in the named lines defined before/after each size.</p>\n  </li><li>\n       <p>Sets <a href="#section-grid-template-columns">grid-template-columns</a> to the track listing specified after the slash\n(or <a href="#track-sizing-none">none</a>, if not specified).</p>\n  </li>\n</ul>\n     <p>This syntax allows the author to align track names and sizes inline with their respective grid areas.</p>\n\n     <p class="note" role="note"><span>Note:</span> Note that the <a href="#funcdef-repeat">repeat()</a> function isn’t allowed in these track listings,\nas the tracks are intended to visually line up one-to-one with the rows/columns in the “ASCII art”.</p>'
					}],
					customValues: [{
						id: "autofr",
						name: "auto 1fr / auto 1fr",
						current: !0
					}, {
						id: "named-areas-template",
						name: "[header-top] 'a a a' [header-bottom]\n  [main-top] 'b b b' 1fr [main-bottom]\n  / auto 1fr auto"
					}],
					htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template": "auto 1fr / auto 1fr"
						}
					}, {
						selector: ".child:nth-child(1)",
						props: {
							"grid-row": "header-top / main-bottom"
						},
						valueId: "named-areas-template"
					}, {
						selector: ".child:nth-child(3)",
						props: {
							"grid-row": "a-start / b-end",
							"grid-column": 3
						},
						valueId: "named-areas-template"
					}]
				}]
			},
			placing: {
				title: "Placing Grid Items",
				link: "https://www.w3.org/TR/css-grid-1/#placement",
				desc: '<p>Every <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> is associated with a <a href="#section-grid-area">grid area</a>,\na rectangular set of adjacent <a href="https://www.w3.org/TR/css-grid-1/#grid-cell">grid cells</a> that the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> occupies.\nThis <a href="#section-grid-area">grid area</a> defines the <a href="https://www.w3.org/TR/css-display-3/#containing-block">containing block</a> for the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> within which the self-alignment properties (<a href="#section-justify-self">justify-self</a> and <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a>) determine their actual position.\nThe cells that a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> occupies also influence the sizing of the grid’s rows and columns,\ndefined in <a href="https://www.w3.org/TR/css-grid-1/#layout-algorithm">§11 Grid Sizing</a>.</p>\n\n<p>The location of a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item’s</a> <a href="#section-grid-area">grid area</a> within the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> is defined by its <dfn id="grid-placement">placement</dfn>,\nwhich consists of a <a href="#grid-position">grid position</a> and a <a href="#grid-span">grid span</a>:</p>\n\n<dl>\n  <dt>\n    <dfn id="grid-position">grid position</dfn>\n  </dt>\n  <dd>\n    The <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s location in the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> in each axis.\nA <a href="#grid-position">grid position</a> can be either <dfn id="definite-grid-position">definite</dfn> (explicitly specified)\nor <dfn id="automatic-grid-position">automatic</dfn> (determined by <a href="#section-grid-auto-flow">auto-placement</a>).\n  </dd>\n  <dt>\n    <dfn id="grid-span">grid span</dfn>\n  </dt>\n  <dd>\n    How many <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a> the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> occupies in each axis.\nA <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-span">grid span</a> is always <dfn id="definite-grid-span">definite</dfn>,\ndefaulting to 1 in each axis if it can’t be otherwise determined for that axis.\n  </dd>\n</dl>\n\n<p>The <dfn id="grid-placement-property">grid-placement properties</dfn>—<wbr>the longhands <a href="#section-grid-row-start">grid-row-start</a>, <a href="#section-grid-row-end">grid-row-end</a>, <a href="#section-grid-column-start">grid-column-start</a>, <a href="#section-grid-column-end">grid-column-end</a>, and their shorthands <a href="#section-grid-row">grid-row</a>, <a href="#section-grid-column">grid-column</a>, and <a href="#section-grid-area">grid-area</a>—<wbr>allow the author to specify a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a> by providing any (or none) of the following six pieces of information:</p>\n\n<table class="table-data">\n  <thead>\n    <tr>\n    <td>\n    </td><th>Row\n    </th><th>Column\n  </th></tr></thead><tbody>\n    <tr>\n    <th><var>Start</var>\n    </th><td>row-start line\n    </td><td>column-start line\n    </td></tr><tr>\n    <th><var>End</var>\n    </th><td>row-end line\n    </td><td>column-end line\n    </td></tr><tr>\n    <th><var>Span</var>\n    </th><td>row span\n    </td><td>column span\n  </td></tr></tbody>\n</table>\n\n<p>A definite value for any two of <var>Start</var>, <var>End</var>, and <var>Span</var> in a given dimension implies a definite value for the third.</p>\n\n<p>The following table summarizes the conditions under which a grid position or span is <i data-lt="">definite</i> or <i data-lt="">automatic</i>:</p>\n\n<table class="table-data">\n  <thead>\n    <tr>\n    <td>\n    </td><th>Position\n    </th><th>Span\n  </th></tr></thead><tbody>\n    <tr>\n    <th>Definite\n    </th><td>At least one specified line\n    </td><td>Explicit, implicit, or defaulted span.\n    </td></tr><tr>\n    <th>Automatic\n    </th><td>No lines explicitly specified\n    </td><td>N/A\n  </td></tr></tbody>\n</table>\n\n<p>The <a href="#grid-placement-property">grid-placement property</a> longhands are organized into three shorthands:</p>\n\n<table class="table-data table-data--centered" id="grid-property-breakdown">\n  <tbody>\n    <tr>\n    <td colspan="4"><a href="#section-grid-area">grid-area</a>\n    </td></tr><tr>\n    <td colspan="2"><a href="#section-grid-column">grid-column</a>\n    </td><td colspan="2"><a href="#section-grid-row">grid-row</a>\n    </td></tr><tr>\n    <td><a href="#section-grid-column-start">grid-column-start</a>\n    </td><td><a href="#section-grid-column-end">grid-column-end</a>\n    </td><td><a href="#section-grid-row-start">grid-row-start</a>\n    </td><td><a href="#section-grid-row-end">grid-row-end</a>\n  </td></tr></tbody>\n</table>\n   ',
				items: [{
					name: "grid-row-start, grid-column-start, grid-row-end, grid-column-end",
					alias: "line-placement",
					link: "https://www.w3.org/TR/css-grid-1/#line-placement",
					initValue: "auto",
					appliesTo: '<a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',
					desc: '<p>The <a href="#section-grid-row-start">grid-row-start</a>, <a href="#section-grid-column-start">grid-column-start</a>, <a href="#section-grid-row-end">grid-row-end</a>, and <a href="#section-grid-column-end">grid-column-end</a> properties\ndetermine a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s size and location within the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> by contributing a line, a span, or nothing (automatic)\nto its <a href="#grid-placement">grid placement</a>,\nthereby specifying the <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-start">inline-start</a>, <a href="https://www.w3.org/TR/css-writing-modes-3/#block-start">block-start</a>, <a href="https://www.w3.org/TR/css-writing-modes-3/#inline-end">inline-end</a>, and <a href="https://www.w3.org/TR/css-writing-modes-3/#block-end">block-end</a> edges of its <a href="#section-grid-area">grid area</a>.</p>',
					values: [{
						name: '<a href="#section-grid-line-values">&lt;grid-line&gt;</a>',
						alias: "grid-line-value",
						desc: ""
					}],
					demos: [{
						name: "grid-row-start",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "1",
							current: !0
						}, {
							name: "2"
						}, {
							name: "3"
						}, {
							name: "span 2"
						}, {
							name: "a-start"
						}, {
							name: "b-start"
						}, {
							name: "c-start"
						}, {
							name: "header-top"
						}, {
							name: "main-top"
						}, {
							name: "footer-top"
						}, {
							name: "auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-rows": "[header-top] 1fr [header-bottom main-top] 1fr [main-bottom footer-top] 1fr [footer-bottom]",
								"grid-template-columns": "repeat(3, 1fr)",
								"grid-template-areas": '"a a a" \n "b b b" \n "c c c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-row-start": "1"
							}
						}]
					}, {
						name: "grid-row-end",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "2",
							current: !0
						}, {
							name: "3"
						}, {
							name: "4"
						}, {
							name: "span 2"
						}, {
							name: "a-end"
						}, {
							name: "b-end"
						}, {
							name: "c-end"
						}, {
							name: "header-bottom"
						}, {
							name: "main-bottom"
						}, {
							name: "footer-bottom"
						}, {
							name: "auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-rows": "[header-top] 1fr [header-bottom main-top] 1fr [main-bottom footer-top] 1fr [footer-bottom]",
								"grid-template-columns": "repeat(3, 1fr)",
								"grid-template-areas": '"a a a" \n "b b b" \n "c c c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-row-end": "1"
							}
						}]
					}, {
						name: "grid-row-start + grid-row-end",
						alias: "grid-row-start-end",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "1/2",
							current: !0
						}, {
							name: "1/4"
						}, {
							name: "2/4"
						}, {
							name: "-1/-3"
						}, {
							name: "span 2/-1"
						}, {
							name: "1/span 2"
						}, {
							name: "a-start/b-end"
						}, {
							name: "a-start/c-end"
						}, {
							name: "b-start/c-end"
						}, {
							name: "header-top/main-bottom"
						}, {
							name: "header-top/footer-bottom"
						}, {
							name: "main-top/footer-bottom"
						}, {
							name: "auto/auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-rows": "[header-top] 1fr [header-bottom main-top] 1fr [main-bottom footer-top] 1fr [footer-bottom]",
								"grid-template-columns": "repeat(3, 1fr)",
								"grid-template-areas": '"a a a" \n "b b b" \n "c c c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-row-start": "1",
								"grid-row-end": "-1"
							}
						}]
					}, {
						name: "grid-column-start",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "1",
							current: !0
						}, {
							name: "2"
						}, {
							name: "3"
						}, {
							name: "span 2"
						}, {
							name: "a-start"
						}, {
							name: "b-start"
						}, {
							name: "c-start"
						}, {
							name: "aside-begin"
						}, {
							name: "main-begin"
						}, {
							name: "aside2-begin"
						}, {
							name: "auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]",
								"grid-template-rows": "repeat(3, 1fr)",
								"grid-template-areas": '"a b c" \n "a b c" \n "a b c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-column-start": "1"
							}
						}]
					}, {
						name: "grid-column-end",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "2",
							current: !0
						}, {
							name: "3"
						}, {
							name: "4"
						}, {
							name: "span 2"
						}, {
							name: "a-end"
						}, {
							name: "b-end"
						}, {
							name: "c-end"
						}, {
							name: "aside-end"
						}, {
							name: "main-end"
						}, {
							name: "aside2-end"
						}, {
							name: "auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]",
								"grid-template-rows": "repeat(3, 1fr)",
								"grid-template-areas": '"a b c" \n "a b c" \n "a b c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-column-end": "1"
							}
						}]
					}, {
						name: "grid-column-start + grid-column-end",
						alias: "grid-column-start-end",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "1/2",
							current: !0
						}, {
							name: "1/4"
						}, {
							name: "2/4"
						}, {
							name: "-1/-3"
						}, {
							name: "span 2/-1"
						}, {
							name: "1/span 2"
						}, {
							name: "a-start/b-end"
						}, {
							name: "a-start/c-end"
						}, {
							name: "b-start/c-end"
						}, {
							name: "aside-begin/main-end"
						}, {
							name: "aside-begin/aside2-end"
						}, {
							name: "main-begin/aside2-end"
						}, {
							name: "auto/auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]",
								"grid-template-rows": "repeat(3, 1fr)",
								"grid-template-areas": '"a b c" \n "a b c" \n "a b c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-column-start": "1",
								"grid-column-end": "-1"
							}
						}]
					}],
					children: [{
						name: "Grid line values",
						alias: "grid-line-values",
						link: "https://www.w3.org/TR/css-grid-1/#typedef-grid-row-start-grid-line",
						values: [{
							name: "&lt;custom-ident&gt;",
							alias: "grid-placement-slot",
							desc: 'First attempt to match the <a href="#section-grid-area">grid area</a>’s edge to a <a href="#named-grid-area">named grid area</a>:\nif there is a <a href="#named-line">named line</a> with the name \'<a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>-start<span class="css"> (for grid-*-start) / </span><a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>-end\' (for grid-*-end),\ncontributes the first such line to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>.\n     <p class="note" role="note"><span>Note:</span> <a href="#named-grid-area">Named grid areas</a> automatically generate <a href="https://www.w3.org/TR/css-grid-1/#implicit-named-line">implicit named lines</a> of this form,\nso specifying <a href="#section-grid-row-start">grid-row-start: foo</a> will choose the start edge of that <a href="#named-grid-area">named grid area</a> (unless another line named <code>foo-start</code> was explicitly specified before it).</p>\n     <p>Otherwise,\ntreat this as if the integer <code>1</code> had been specified along with the <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>.</p>'
						}, {
							name: "&lt;integer&gt; &amp;&amp; &lt;custom-ident&gt;?",
							alias: "grid-placement-int",
							desc: 'Contributes the <var>N</var>th <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid line</a> to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>.\nIf a negative integer is given,\nit instead counts in reverse,\nstarting from the end edge of the <a href="#explicit-grid">explicit grid</a>.\n     <p>If a name is given as a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,\nonly lines with that name are counted.\nIf not enough lines with that name exist,\nall <a href="#implicit-grid-lines">implicit grid lines</a> are assumed to have that name for the purpose of finding this position.</p>\n     <p>An <a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer&gt;</a> value of zero makes the declaration invalid.</p>'
						}, {
							name: "span &amp;&amp; [ &lt;integer&gt; || &lt;custom-ident&gt; ]",
							alias: "grid-placement-span-int",
							desc: 'Contributes a <a href="#grid-span">grid span</a> to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a> such that the corresponding edge of the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#section-grid-area">grid area</a> is <var>N</var> lines from its opposite edge\nin the corresponding direction.\nFor example, <a href="#section-grid-column-end">grid-column-end: span 2</a> indicates the second grid line in the endward direction\nfrom the <a href="#section-grid-column-start">grid-column-start</a> line.\n     <p>If a name is given as a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,\nonly lines with that name are counted.\nIf not enough lines with that name exist,\nall <a href="#implicit-grid-lines">implicit grid lines</a> on the side of the <a href="#explicit-grid">explicit grid</a> corresponding to the search direction\nare assumed to have that name for the purpose of counting this span.</p>\n\n     <p>If the <a href="https://www.w3.org/TR/css3-values/#integer-value">&lt;integer&gt;</a> is omitted, it defaults to <code>1</code>.\nNegative integers or zero are invalid.</p>'
						}, {
							name: "auto",
							alias: "grid-placement-auto",
							desc: 'The property contributes nothing to the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a>’s <a href="#grid-placement">placement</a>,\nindicating <a href="#section-grid-auto-flow">auto-placement</a> or a default span of one.\n(See <a href="#section-placing">§8 Placing Grid Items</a>, above.)'
						}]
					}]
				}, {
					name: "grid-row, grid-column",
					alias: "grid-row-column",
					link: "https://www.w3.org/TR/css-grid-1/#placement-shorthands",
					initValue: "see individual properties",
					appliesTo: '<a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',
					desc: '<p>The <a href="#section-grid-row">grid-row</a> and <a href="#section-grid-column">grid-column</a> properties are shorthands for <a href="#section-grid-row-start">grid-row-start</a>/<a href="#section-grid-row-end">grid-row-end</a> and <a href="#section-grid-column-start">grid-column-start</a>/<a href="#section-grid-column-end">grid-column-end</a>, respectively.</p>\n\n<p>If two <a href="#section-grid-line-values" title="Expands to: <custom-ident> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?">&lt;grid-line&gt;</a> values are specified,\nthe <a href="#section-grid-row-start">grid-row-start</a>/<a href="#section-grid-column-start">grid-column-start</a> longhand is set to the value before the slash,\nand the <a href="#section-grid-row-end">grid-row-end</a>/<a href="#section-grid-column-end">grid-column-end</a> longhand is set to the value after the slash.</p>\n\n<p>When the second value is omitted,\nif the first value is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,\nthe <a href="#section-grid-row-end">grid-row-end</a>/<a href="#section-grid-column-end">grid-column-end</a> longhand is also set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;\notherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>',
					values: [{
						name: '<a href="#section-grid-line-values">&lt;grid-line&gt;</a> [ / <a href="#section-grid-line-values">&lt;grid-line&gt;</a> ] ?',
						alias: "grid-row-column-value",
						desc: ""
					}],
					customValues: [{
						name: "center",
						current: !0
					}, {
						name: "stretch"
					}],
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template-columns": "1fr 1fr",
							"justify-items": "auto"
						}
					}],
					demos: [{
						name: "grid-row",
						alias: "grid-row",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "2",
							current: !0
						}, {
							name: "1/2"
						}, {
							name: "1/4"
						}, {
							name: "2/4"
						}, {
							name: "-1/-3"
						}, {
							name: "span 2/-1"
						}, {
							name: "1/span 2"
						}, {
							name: "b-start"
						}, {
							name: "a-start/b-end"
						}, {
							name: "a-start/c-end"
						}, {
							name: "b-start/c-end"
						}, {
							name: "main-top"
						}, {
							name: "header-top/main-bottom"
						}, {
							name: "header-top/footer-bottom"
						}, {
							name: "main-top/footer-bottom"
						}, {
							name: "auto/auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-rows": "[header-top] 1fr [header-bottom main-top] 1fr [main-bottom footer-top] 1fr [footer-bottom]",
								"grid-template-columns": "repeat(3, 1fr)",
								"grid-template-areas": '"a a a" \n "b b b" \n "c c c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-row": "1"
							}
						}]
					}, {
						name: "grid-column",
						alias: "grid-column",
						isFeaturedHighlighted: !0,
						customValues: [{
							name: "1",
							current: !0
						}, {
							name: "2"
						}, {
							name: "1/4"
						}, {
							name: "2/4"
						}, {
							name: "-1/-3"
						}, {
							name: "span 2/-1"
						}, {
							name: "1/span 2"
						}, {
							name: "a-start/b-end"
						}, {
							name: "a-start/c-end"
						}, {
							name: "b-start/c-end"
						}, {
							name: "aside-begin/main-end"
						}, {
							name: "aside-begin/aside2-end"
						}, {
							name: "main-begin/aside2-end"
						}, {
							name: "auto/auto"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]",
								"grid-template-rows": "repeat(3, 1fr)",
								"grid-template-areas": '"a b c" \n "a b c" \n "a b c"'
							}
						}, {
							selector: ".child--featured",
							props: {
								"grid-column": "1"
							}
						}]
					}]
				}, {
					name: "grid-area",
					alias: "grid-area",
					link: "https://www.w3.org/TR/css-grid-1/#propdef-grid-area",
					initValue: "see individual properties",
					appliesTo: '<a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> and absolutely-positioned boxes whose containing block is a <a href="#grid-container">grid container</a>',
					desc: '<p>If four <a href="#section-grid-line-values" title="Expands to: <custom-ident> | auto | span &amp;&amp; [ <integer> || <custom-ident> ] | <integer> &amp;&amp; <custom-ident>?">&lt;grid-line&gt;</a> values are specified, <a href="#section-grid-row-start">grid-row-start</a> is set to the first value, <a href="#section-grid-column-start">grid-column-start</a> is set to the second value, <a href="#section-grid-row-end">grid-row-end</a> is set to the third value,\nand <a href="#section-grid-column-end">grid-column-end</a> is set to the fourth value.</p>\n\n<p>When <a href="#section-grid-column-end">grid-column-end</a> is omitted,\nif <a href="#section-grid-column-start">grid-column-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>, <a href="#section-grid-column-end">grid-column-end</a> is set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;\notherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>\n\n<p>When <a href="#section-grid-row-end">grid-row-end</a> is omitted,\nif <a href="#section-grid-row-start">grid-row-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>, <a href="#section-grid-row-end">grid-row-end</a> is set to that <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>;\notherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>\n\n<p>When <a href="#section-grid-column-start">grid-column-start</a> is omitted,\nif <a href="#section-grid-row-start">grid-row-start</a> is a <a href="https://www.w3.org/TR/css3-values/#identifier-value">&lt;custom-ident&gt;</a>,\nall four longhands are set to that value.\nOtherwise, it is set to <a href="#grid-placement-auto">auto</a>.</p>\n\n<p class="note" role="note"><span>Note:</span> The resolution order for this shorthand is row-start/column-start/row-end/column-end,\nwhich goes CCW for LTR pages,\nthe opposite direction of the related 4-edge properties using physical directions, like <a href="https://www.w3.org/TR/CSS21/box.html#margin">margin</a>.</p>',
					isFeaturedHighlighted: !0,
					values: [{
						name: '<a href="#section-grid-line-values">&lt;grid-line&gt;</a> [ / <a href="#section-grid-line-values">&lt;grid-line&gt;</a> ]{0,3}',
						alias: "grid-line-grid-line",
						desc: ""
					}],
					customValues: [{
						name: "1",
						current: !0
					}, {
						name: "2/2"
					}, {
						name: "1/2/3/4"
					}, {
						name: "a"
					}, {
						name: "b"
					}, {
						name: "c"
					}, {
						name: "d"
					}, {
						name: "b-start"
					}, {
						name: "b-start/main-begin"
					}, {
						name: "b-start/main-begin/c-end"
					}, {
						name: "b-start/main-begin/c-end/d-end"
					}],
					htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child child--featured"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template-columns": "[aside-begin] 1fr [aside-end main-begin] 1fr [main-end aside2-begin] 1fr [aside2-end]",
							"grid-template-rows": "repeat(3, 1fr)",
							"grid-template-areas": '"a a d" \n "b b d" \n "c c d"'
						}
					}, {
						selector: ".child--featured",
						props: {
							"grid-area": "1"
						}
					}]
				}]
			},
			alignment: {
				title: "Alignment",
				link: "https://www.w3.org/TR/css-grid-1/#alignment",
				desc: '<p>After a <a href="#grid-container">grid container</a>’s <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a> have been sized,\nand the dimensions of all <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> are finalized, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> can be aligned within their <a href="#section-grid-area">grid areas</a>.</p>\n\n<p>The <a href="https://www.w3.org/TR/CSS21/box.html#margin">margin</a> properties can be used to align items in a manner similar to\nwhat margins can do in block layout. <a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> also respect the <a href="https://www.w3.org/TR/css3-align/#box-alignment-properties">box alignment properties</a> from the <a href="https://www.w3.org/TR/css-align/">CSS Box Alignment Module</a> <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-align-3">[CSS-ALIGN-3]</a>,\nwhich allow easy keyword-based alignment of items in both the <a href="https://www.w3.org/TR/css-grid-1/#row-axis">row axis</a> and <a href="https://www.w3.org/TR/css-grid-1/#column-axis">column axis</a>.</p>\n\n<p>By default, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> stretch to fill their <a href="#section-grid-area">grid area</a>.\nHowever, if <a href="#section-justify-self">justify-self</a> or <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a> compute to a value other than <a href="https://www.w3.org/TR/css3-align/#valdef-justify-self-stretch">stretch</a> or margins are auto, <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid items</a> will auto-size to fit their contents.</p>',
				items: [{
					name: "Row-axis: justify-self, justify-items",
					alias: "row-align",
					link: "https://www.w3.org/TR/css-grid-1/#row-align",
					desc: '<p><a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> can be aligned in the inline dimension\nby using the <a href="#section-justify-self">justify-self</a> property on the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> or <a href="#section-justify-items">justify-items</a> property on the <a href="#grid-container">grid container</a>,\nas defined in <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-align-3">[CSS-ALIGN-3]</a>.</p>\n\n<p>If <a href="https://www.w3.org/TR/css3-align/#baseline-alignment">baseline alignment</a> is specified on a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> whose size in that axis depends on the size of an intrinsically-sized track\n(whose size is therefore dependent on both the item’s size and baseline alignment,\ncreating a cyclic dependency),\nthat item does not participate in baseline alignment,\nand instead uses its <a href="https://www.w3.org/TR/css3-align/#fallback-alignment">fallback alignment</a>.</p>',
					demos: [{
						name: "justify-self",
						link: "https://www.w3.org/TR/css-align-3/#justify-self-property",
						initValue: "auto",
						isFeaturedHighlighted: !0,
						appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',
						desc: '<p>Justifies the box (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a>)\nwithin its containing block (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>)\nalong the inline/row/main axis of the alignment container:\nthe box’s outer edges are aligned within its alignment container <a href="https://www.w3.org/TR/css-align-3/#alignment-values">as described by its alignment value</a>.</p>\n\n<p class="note" role="note"><span>Note:</span> <code>auto</code> margins,\nbecause they effectively adjust the size of the margin area,\ntake precedence over <a href="#section-justify-self">justify-self</a>.</p>',
						values: [{
							name: '<a href="#justify-self-auto">auto</a> | <a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#overflow-position">&lt;overflow-position></a> ? [ <a href="#self-position">&lt;self-position></a> | left | right ]',
							alias: "justify-self-value",
							desc: ""
						}],
						customValues: [{
							name: "auto",
							current: !0
						}, {
							name: "normal"
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "safe center"
						}, {
							name: "unsafe center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "self-start"
						}, {
							name: "self-end"
						}, {
							name: "left"
						}, {
							name: "right"
						}, {
							name: "baseline"
						}, {
							name: "first baseline"
						}, {
							name: "last baseline"
						}],
						htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child">Ut enim ad minim veniam</div>\n    <div class="child child--featured child--rtl"><code>direction: rtl</code></div>\n    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>\n    <div class="child child--featured">Duisauteiruredolorenimminimveniam</div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "1fr 1fr"
							}
						}, {
							selector: ".child--featured",
							props: {
								"justify-self": "auto"
							}
						}]
					}, {
						name: "justify-items",
						link: "https://www.w3.org/TR/css-align-3/#justify-items-property",
						initValue: "legacy",
						appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',
						desc: '<p>This property specifies the default <a href="#section-justify-self">justify-self</a> for all of the child boxes (including anonymous boxes) participating in this box’s formatting context.</p>',
						values: [{
							name: '<a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#overflow-position">&lt;overflow-position></a> ? [ <a href="#self-position">&lt;self-position></a> | left | right ] | <a href="#justify-items-legacy">legacy</a> | <a href="#justify-items-legacy">legacy</a> && [ left | right | center ]',
							alias: "justify-items-value",
							desc: ""
						}],
						customValues: [{
							name: "legacy",
							current: !0
						}, {
							name: "normal"
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "safe center"
						}, {
							name: "unsafe center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "self-start"
						}, {
							name: "self-end"
						}, {
							name: "left"
						}, {
							name: "right"
						}, {
							name: "baseline"
						}, {
							name: "first baseline"
						}, {
							name: "last baseline"
						}],
						htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child">Ut enim ad minim veniam</div>\n    <div class="child child--rtl"><code>direction: rtl</code></div>\n    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>\n    <div class="child child--featured">Duisauteiruredolorenimminimveniam</div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template-columns": "1fr 1fr",
								"justify-items": "auto"
							}
						}]
					}],
					children: [{
						name: "Align values",
						alias: "align-values",
						link: "https://www.w3.org/TR/css-align-3/#valdef-justify-self-auto",
						values: [{
							name: "auto",
							alias: "justify-self-auto",
							desc: '<p>Behaves as <a href="#justify-self-normal">normal</a> if the box has no parent,\nor when determining the actual position of an absolutely positioned box.\nIt behaves as the computed <a href="#section-justify-items">justify-items</a> value of the parent box\n(minus any <a href="#justify-items-legacy">legacy</a> keywords)\notherwise\n(including when determining the <em>static</em> position\nof an absolutely positioned box).</p>'
						}, {
							name: "normal",
							alias: "justify-self-normal",
							desc: "<p>Represents the “default” alignment for the layout mode.\nIts behavior depends on the layout mode, as described below.</p>"
						}, {
							name: "stretch",
							alias: "justify-self-stretch",
							desc: '<p>When the box’s <a href="https://www.w3.org/TR/css-cascade-4/#computed-value">computed</a> <a href="https://www.w3.org/TR/CSS21/visudet.html#width">width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#height">height</a> (as appropriate to the axis)\nis <a href="https://www.w3.org/TR/css-sizing-3/#width-auto">auto</a> and neither of its margins (in the appropriate axis) are <code>auto</code>,\nsets the box’s used size to the length necessary to make its outer size\nas close to filling the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a> as possible\nwhile still respecting the constraints imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#min-height">min-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#min-width">min-width</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-height">max-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-width">max-width</a>.</p>\n     <p>Unless otherwise specified, this value falls back to <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-flex-start">flex-start</a> generally,\nand to <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-self-start">self-start</a> or <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-self-end">self-end</a> if the box has also specified <a href="https://www.w3.org/TR/css-align-3/#first-baseline-set">first baseline</a> or <a href="https://www.w3.org/TR/css-align-3/#last-baseline-set">last baseline</a> <a href="https://www.w3.org/TR/css-align-3/#baseline-content-alignment">baseline content-alignment</a> (respectively)\nin the same axis.</p>\n     <p class="note" role="note"><span>Note:</span> The <a href="#justify-self-stretch">stretch</a> keyword can cause elements to shrink,\nto fit their container.</p>'
						}, {
							name: "&lt;baseline-position&gt;",
							alias: "baseline-position",
							desc: '<p><dfn id="baseline-alignment">Baseline alignment</dfn> is a form of positional alignment\nthat aligns multiple <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> within a <a href="https://www.w3.org/TR/css-align-3/#shared-alignment-context">shared alignment context</a> (such as cells within a row)\nby matching up their <a href="https://www.w3.org/TR/css-align-3/#alignment-baseline">alignment baselines</a>.\nIf the position of the alignment subjects within a <a href="https://www.w3.org/TR/css-align-3/#baseline-sharing-group">baseline-sharing group</a> is not fully constrained by <a href="#baseline-alignment">baseline alignment</a> (i.e., they could be shifted within their respective <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment containers</a> while maintaining baseline-alignment),\nthey are <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback-aligned</a> insofar as possible while preserving their baseline alignment.</p>\n\n<p>The baseline alignment keywords are represented with the <a href="#typedef-baseline-position" title="Expands to: last | baseline | first">&lt;baseline-position&gt;</a> grammar term:</p>\n\n<pre id="typedef-baseline-position">\n  <code>&lt;baseline-position&gt; = [ first | last ] ? baseline</code>\n</pre>\n\n      <p>The <a href="#justify-self-first-baseline">first</a> and <a href="#justify-self-last-baseline">last</a> values give a box a <dfn id="baseline-alignment-preference">baseline alignment preference</dfn>:\neither “first” or “last”, respectively,\ndefaulting to “first”.</p>\n\n<p>Values have the following meanings:</p>\n\n<dl>\n  <dt>\n    <dfn id="justify-self-baseline">baseline</dfn>\n  </dt>\n\n  <dd>\n    Computes to <a href="#justify-self-first-baseline">first baseline</a>, defined below.\n  </dd>\n\n  <dt>\n    <dfn id="justify-self-first-baseline">first baseline</dfn>\n  </dt>\n  <dd>\n    Specifies participation in <dfn id="first-baseline-alignment">first-baseline alignment</dfn>:\naligns the <a href="https://www.w3.org/TR/css-align-3/#alignment-baseline">alignment baseline</a> of the box’s <a href="https://www.w3.org/TR/css-align-3/#first-baseline-set">first baseline set</a> with the corresponding baseline\nof its <a href="https://www.w3.org/TR/css-align-3/#baseline-sharing-group">baseline-sharing group</a>.\nSee <a href="https://www.w3.org/TR/css-align-3/#align-by-baseline">§ 9.3 Aligning Boxes by Baseline</a> for more details.\n     <p>The <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for <a href="#justify-self-first-baseline">first baseline</a> is <code>safe self-start</code> (for <a href="https://www.w3.org/TR/css-align-3/#self-align">self-alignment</a>)\nor <code>safe start</code> (for <a href="https://www.w3.org/TR/css-align-3/#content-distribute">content-distribution</a>).</p>\n  </dd>\n\n  <dt>\n    <dfn id="justify-self-last-baseline">last baseline</dfn>\n  </dt>\n  <dd>\n    Specifies participation in <dfn id="last-baseline-alignment">last-baseline alignment</dfn>:\naligns the <a href="https://www.w3.org/TR/css-align-3/#alignment-baseline">alignment baseline</a> of the box’s <a href="https://www.w3.org/TR/css-align-3/#last-baseline-set">last baseline set</a> with the corresponding baseline\nof its <a href="https://www.w3.org/TR/css-align-3/#baseline-sharing-group">baseline-sharing group</a>.̣\nSee <a href="https://www.w3.org/TR/css-align-3/#align-by-baseline">§ 9.3 Aligning Boxes by Baseline</a> for more details.\n     <p>The <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for <a href="#justify-self-last-baseline">last baseline</a> is <code>safe self-end</code> (for <a href="https://www.w3.org/TR/css-align-3/#self-align">self-alignment</a>)\nor <code>safe end</code> (for <a href="https://www.w3.org/TR/css-align-3/#content-distribute">content-distribution</a>).</p>\n  </dd>\n</dl>\n\n<p>When specified for <a href="#section-align-content">align-content</a>,\nthese values trigger <a href="https://www.w3.org/TR/css-align-3/#baseline-content-alignment">baseline content-alignment</a>,\nshifting the content of the box within its content box,\nand may also affect the sizing of the box itself.\nSee <a href="https://www.w3.org/TR/css-align-3/#baseline-align-content">§ 5.4 Baseline Content-Alignment</a>.</p>\n\n<p>When specified for <a href="#section-align-self">align-self</a>/<a href="#section-justify-self">justify-self</a>,\nthese values trigger <a href="https://www.w3.org/TR/css-align-3/#baseline-self-alignment">baseline self-alignment</a>,\nshifting the entire box within its container,\nwhich may affect the sizing of its container.\nSee <a href="https://www.w3.org/TR/css-align-3/#baseline-align-self">§ 6.4 Baseline Self-Alignment</a>.</p>\n\n<p>If both <a href="https://www.w3.org/TR/css-align-3/#baseline-content-alignment">baseline content-alignment</a> <em>and</em> <a href="https://www.w3.org/TR/css-align-3/#baseline-self-alignment">baseline self-alignment</a> are specified in the same axis on the same box,\nonly baseline self-alignment is honored in that axis;\nthe content-alignment in that axis must be treated as <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-start">start</a>.</p>\n\n<p>If a box does not belong to a <a href="https://www.w3.org/TR/css-align-3/#shared-alignment-context">shared alignment context</a>,\nthen the <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> is used.\nFor example, <a href="#section-align-content">align-content: baseline</a> on a block box\nfalls back to <code>start</code> alignment.\nThe fallback alignment is also used to align the <a href="https://www.w3.org/TR/css-align-3/#baseline-sharing-group">baseline-sharing group</a> within its <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>.</p>'
						}, {
							name: "&lt;overflow-position>",
							alias: "overflow-position",
							desc: '<pre>\n  <code>&lt;overflow-position></dfn> = unsafe | safe</code>\n</pre>\n\n<dl>\n  <dt>\n    <dfn id="overflow-position-safe">safe</dfn>\n  </dt>\n  <dd>\n    If the size of the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a> overflows the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nthe alignment subject is instead aligned as if the alignment mode were <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-start">start</a>.\n  </dd>\n\n  <dt>\n    <dfn id="overflow-position-unsafe">unsafe</dfn>\n  </dt>\n  <dd>\n    Regardless of the relative sizes of the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a> and <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nthe given alignment value is honored.\n  </dd>\n\n  <dt>\n    <i>(no value specified)</i>\n  </dt>\n  <dd>\n    If the <a href="https://www.w3.org/TR/css-align-3/#overflow-alignment">overflow alignment</a> isn’t explicitly specified,\nthe default overflow alignment is a blend of “safe” and “unsafe”\nin that an overflowing <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a> is allowed to overflow its <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nbut if this would cause it to also overflow\nthe <a href="https://www.w3.org/TR/css-overflow-3/#scrollable-overflow-region">scrollable overflow region</a> of its nearest ancestor <a href="https://www.w3.org/TR/css-overflow-3/#scroll-container">scroll container</a> (thus extending into the “unscrollable” region),\nthen its overflow in that direction is limited\nby biasing any remaining overflow to the opposite side.\n  </dd>\n</dl>'
						}, {
							name: "&lt;self-position>",
							alias: "self-position",
							desc: 'This set is used by <a href="#section-justify-self">justify-self</a> and <a href="#section-align-self">align-self</a> to align the box within its <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nand also by <a href="#section-justify-items">justify-items</a> and <a href="#section-align-items">align-items</a> (to specify default values for <code>justify-self</code> and <code>align-self</code>).\n\n<pre>\n  <code><dfn>&lt;self-position></dfn> = center | start | end | self-start | self-end | flex-start | flex-end</code>\n</pre>'
						}, {
							name: "&lt;content-distribution&gt;",
							alias: "content-distribution",
							desc: '<p>The <dfn id="distributed-alignment">distributed alignment</dfn> values are used by <a href="#section-justify-content">justify-content</a> and <a href="#section-align-content">align-content</a> to disperse a container’s extra space among its <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a>.</p>\n\n<p>When space cannot be distributed in this way,\nthese values behave as their <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a>.\nEach distribution value has an associated default fallback alignment.\n(A future level of this module may allow the fallback alignment to be specified explicitly.)</p>\n\n<dl>\n  <dt>\n    <dfn id="valdef-align-content-space-between">space-between</dfn>\n  </dt>\n  <dd>\n    The <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>.\nThe first alignment subject is placed flush with the start edge of the alignment container,\nthe last alignment subject is placed flush with the end edge of the alignment container,\nand the remaining alignment subjects are distributed so that the spacing between any two adjacent alignment subjects is the same.\n     <p>The default <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for this value is <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-flex-start">flex-start</a>. </p>\n\n     <p class="note">(For layout modes other than flex layout, <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-flex-start">flex-start</a> is identical to <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-start">start</a>.)</p>\n  </dd>\n\n  <dt>\n    <dfn id="valdef-align-content-space-around">space-around</dfn>\n  </dt>\n  <dd>\n    The <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nwith a half-size space on either end.\nThe alignment subjects are distributed so that the spacing between any two adjacent alignment subjects is the same,\nand the spacing before the first and after the last alignment subject is half the size of the other spacing.\n     <p>The default <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for this value is <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-center">center</a>.</p>\n  </dd>\n\n  <dt>\n    <dfn id="valdef-align-content-space-evenly">space-evenly</dfn>\n  </dt>\n  <dd>\n    The <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> are evenly distributed in the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nwith a full-size space on either end.\nThe alignment subjects are distributed so that the spacing between any two adjacent alignment subjects,\nbefore the first alignment subject,\nand after the last alignment subject is the same.\n     <p>The default <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for this value is <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-center">center</a>.</p>\n  </dd>\n\n  <dt>\n    <dfn id="valdef-align-content-stretch">stretch</dfn>\n  </dt>\n  <dd>\n    If the combined size of the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subjects</a> is less than the size of the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>,\nany <code>auto</code>-sized alignment subjects have their size increased equally (not proportionally),\nwhile still respecting the constraints imposed by <a href="https://www.w3.org/TR/CSS21/visudet.html#max-height">max-height</a>/<a href="https://www.w3.org/TR/CSS21/visudet.html#max-width">max-width</a> (or equivalent functionality),\nso that the combined size exactly fills the alignment container.\n     <p>The default <a href="https://www.w3.org/TR/css-align-3/#fallback-alignment">fallback alignment</a> for this value is <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-flex-start">flex-start</a>. </p>\n\n     <p class="note">(For layout modes other than flex layout, <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-flex-start">flex-start</a> is identical to <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-start">start</a>.)</p>\n  </dd>\n</dl>\n\n<p>These values are represented with the <a href="#typedef-content-distribution" title="Expands to: stretch | space-between | space-around | space-evenly">&lt;content-distribution&gt;</a> grammar term:</p>\n\n<pre>\n  <code><dfn id="typedef-content-distribution">&lt;content-distribution&gt;</dfn> = space-between | space-around | space-evenly | stretch</code>\n</pre>'
						}, {
							name: "&lt;content-position>",
							alias: "content-position",
							desc: '<p>This set is used by <a href="#section-justify-content">justify-content</a> and <a href="#section-align-content">align-content</a> to align the box’s contents within itself.</p>\n\n<pre>\n  <code><dfn id="typedef-content-position">&lt;content-position&gt;</dfn> = center | start | end | flex-start | flex-end</code>\n</pre>'
						}, {
							name: "legacy",
							alias: "justify-items-legacy",
							desc: 'This keyword causes the value to effectively inherit into descendants.\n     <p>If the <a href="#justify-items-legacy">legacy</a> keyword appears on its own\n(without an accompanying <a href="https://www.w3.org/TR/css-align-3/#valdef-justify-content-left">left</a>, <a href="https://www.w3.org/TR/css-align-3/#valdef-justify-content-right">right</a>, or <a href="https://www.w3.org/TR/css-align-3/#valdef-self-position-center">center</a> keyword):\nif the <a href="https://www.w3.org/TR/css-cascade-4/#inherited-value">inherited value</a> of <code>justify-items</code> includes the <code>legacy</code> keyword,\nthis value computes to the inherited value;\notherwise it computes to <code>normal</code>.</p>\n     <p>When <code>justify-self:auto</code> references the value of <a href="#section-justify-items">justify-items</a>,\nonly the alignment keyword, not the <a href="#justify-items-legacy">legacy</a> keyword, is referenced by it.\nIt exists to implement the legacy alignment behavior of HTML’s <code>&lt;center&gt;</code> element and <code>align</code> attribute.</p>'
						}]
					}]
				}, {
					name: "Column-axis: align-self, align-items",
					alias: "column-align",
					link: "https://www.w3.org/TR/css-grid-1/#column-align",
					desc: '<p><a href="https://www.w3.org/TR/css-grid-1/#grid-item">Grid items</a> can also be aligned in the block dimension\n(perpendicular to the inline dimension)\nby using the <a href="https://www.w3.org/TR/css3-align/#align-self">align-self</a> property on the <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> or <a href="https://www.w3.org/TR/css3-align/#align-items">align-items</a> property on the <a href="#grid-container">grid container</a>,\nas defined in <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-align-3">[CSS-ALIGN-3]</a>.</p>\n\n<p>If <a href="https://www.w3.org/TR/css3-align/#baseline-alignment">baseline alignment</a> is specified on a <a href="https://www.w3.org/TR/css-grid-1/#grid-item">grid item</a> whose size in that axis depends on the size of an intrinsically-sized track\n(whose size is therefore dependent on both the item’s size and baseline alignment,\ncreating a cyclic dependency),\nthat item does not participate in baseline alignment,\nand instead uses its <a href="https://www.w3.org/TR/css3-align/#fallback-alignment">fallback alignment</a>.</p>',
					demos: [{
						name: "align-self",
						link: "https://www.w3.org/TR/css-align-3/#align-self-property",
						initValue: "auto",
						isFeaturedHighlighted: !0,
						appliesTo: "flex items, grid items, and absolutely-positioned boxes",
						desc: '<p>Aligns the box (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-subject">alignment subject</a>)\nwithin its containing block (as the <a href="https://www.w3.org/TR/css-align-3/#alignment-container">alignment container</a>)\nalong the block/column/cross axis of the alignment container:\nthe box’s outer edges are aligned within its alignment container <a href="https://www.w3.org/TR/css-align-3/#alignment-values">as described by its alignment value</a></p>\n\n<p class="note" role="note"><span>Note:</span> <code>auto</code> margins,\nbecause they effectively adjust the size of the margin area,\ntake precedence over <a href="#section-align-self">align-self</a>.</p>',
						values: [{
							name: '<a href="#justify-self-auto">auto</a> | <a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#overflow-position">&lt;overflow-position></a> ? <a href="#self-position">&lt;self-position></a>',
							alias: "align-self-value",
							desc: ""
						}],
						customValues: [{
							name: "auto",
							current: !0
						}, {
							name: "normal"
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "self-start"
						}, {
							name: "self-end"
						}, {
							name: "baseline"
						}, {
							name: "first baseline"
						}, {
							name: "last baseline"
						}],
						htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child">Ut enim ad minim veniam commodo consequat exercitation</div>\n    <div class="child child--featured">Duis aute irure dolor</div>\n    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut</div>\n    <div class="child">Excepteur</div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "150px 150px / 120px 120px"
							}
						}, {
							selector: ".child--featured",
							props: {
								"align-self": "auto"
							}
						}]
					}, {
						name: "align-items",
						link: "https://www.w3.org/TR/css-align-3/#align-items-property",
						initValue: "normal",
						appliesTo: "all elements",
						desc: '<p>This property specifies the default <a href="#section-align-self">align-self</a> for all of the child boxes (including anonymous boxes) participating in this box’s formatting context.</p>\n\n<p>Values have no special handling and are merely referenced by <a href="#section-align-self">align-self</a>.</p>',
						values: [{
							name: '<a href="#justify-self-normal">normal</a> | <a href="#justify-self-stretch">stretch</a> | <a href="#baseline-position">&lt;baseline-position></a> | [ <a href="#overflow-position">&lt;overflow-position></a> ? <a href="#self-position">&lt;self-position></a> ]',
							alias: "align-items-value",
							desc: ""
						}],
						customValues: [{
							name: "normal",
							current: !0
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "self-start"
						}, {
							name: "self-end"
						}, {
							name: "baseline"
						}, {
							name: "first baseline"
						}, {
							name: "last baseline"
						}],
						htmlMarkup: '<div class="parent parent--fade-children">\n    <div class="child">Ut enim ad minim veniam commodo consequat exercitation</div>\n    <div class="child">Duis aute irure dolor</div>\n    <div class="child">Quis nostrud exercitation ullamco laboris nisi ut</div>\n    <div class="child">Excepteur</div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "150px 150px / 120px 120px",
								"align-items": "auto"
							}
						}]
					}]
				}, {
					name: "Aligning the grid: justify-content, align-content",
					alias: "grid-align",
					link: "https://www.w3.org/TR/css-grid-1/#grid-align",
					desc: '<p>If the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a>’s outer edges do not correspond to the <a href="#grid-container">grid container</a>’s content edges\n(for example, if no columns are flex-sized),\nthe <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a> are aligned within the content box according to the <a href="#section-justify-content">justify-content</a> and <a href="#section-align-content">align-content</a> properties on the <a href="#grid-container">grid container</a>.</p>\n\n<p>If there are no <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid tracks</a> (the <a href="#explicit-grid">explicit grid</a> is empty, and no tracks were created in the <a href="#implicit-grid">implicit grid</a>),\nthe sole <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid line</a> in each axis is aligned with the start edge of the <a href="#grid-container">grid container</a>.</p>\n\n<p>Note that certain values of <a href="#section-justify-content">justify-content</a> and <a href="#section-align-content">align-content</a> can cause the tracks to be spaced apart\n(<a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-around">space-around</a>, <a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-between">space-between</a>, <a href="https://www.w3.org/TR/css3-align/#valdef-align-content-space-evenly">space-evenly</a>)\nor to be resized (<a href="https://www.w3.org/TR/css3-align/#valdef-align-content-stretch">stretch</a>).\nIf the <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> is <a href="https://www.w3.org/TR/css3-break/#fragment">fragmented</a> between tracks,\nany such additional spacing between those tracks must be suppressed.</p>',
					demos: [{
						name: "justify-content",
						link: "https://www.w3.org/TR/css-align-3/#propdef-justify-content",
						initValue: "normal",
						appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, and <a href="#grid-container">grid containers</a>',
						desc: "",
						values: [{
							name: '<a href="#justify-self-normal">normal</a> | <a href="#content-distribution">&lt;content-distribution></a> | <a href="#overflow-position">&lt;overflow-position></a> ? [ <a href="#content-position">&lt;content-position></a> | left | right ]',
							alias: "justify-content-value",
							desc: ""
						}],
						customValues: [{
							name: "normal",
							current: !0
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "left"
						}, {
							name: "right"
						}, {
							name: "space-around"
						}, {
							name: "space-between"
						}, {
							name: "space-evenly"
						}, {
							name: "safe center"
						}, {
							name: "unsafe center"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "100px 100px / 100px 100px",
								"justify-content": "auto"
							}
						}]
					}, {
						name: "align-content",
						link: "https://www.w3.org/TR/css-align-3/#propdef-align-content",
						initValue: "normal",
						appliesTo: '<a href="https://www.w3.org/TR/css-display-3/#block-container">block containers</a>, <a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, and <a href="#grid-container">grid containers</a>',
						desc: "",
						values: [{
							name: '<a href="#justify-self-normal">normal</a> | <a href="#baseline-position">&lt;baseline-position></a> | <a href="#content-distribution">&lt;content-distribution></a> | <a href="#overflow-position">&lt;overflow-position></a> ? <a href="#content-position">&lt;content-position></a>',
							alias: "align-content-value",
							desc: ""
						}],
						customValues: [{
							name: "normal",
							current: !0
						}, {
							name: "stretch"
						}, {
							name: "center"
						}, {
							name: "start"
						}, {
							name: "end"
						}, {
							name: "space-around"
						}, {
							name: "space-between"
						}, {
							name: "space-evenly"
						}, {
							name: "safe center"
						}, {
							name: "unsafe center"
						}],
						htmlMarkup: '<div class="parent">\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n    <div class="child"></div>\n  </div>',
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "100px 100px / 100px 100px",
								height: "250px",
								"align-content": "auto"
							}
						}]
					}]
				}]
			},
			spacing: {
				title: "Spacing",
				link: "https://www.w3.org/TR/css-grid-1/#gutters",
				desc: '<p>The <a href="https://www.w3.org/TR/css3-align/#row-gap">row-gap</a> and <a href="https://www.w3.org/TR/css3-align/#column-gap">column-gap</a> properties\n(and their <a href="https://www.w3.org/TR/css3-align/#gap">gap</a> shorthand),\nwhen specified on a <a href="#grid-container">grid container</a>,\ndefine the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> between <a href="#section-grid-row">grid rows</a> and <a href="#section-grid-column">grid columns</a>.\nTheir syntax is defined in <a href="https://www.w3.org/TR/css3-align/#gaps">CSS Box Alignment 3 §8 Gaps Between Boxes</a>.</p>\n\n<p>The effect of these properties\nis as though the affected <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> acquired thickness:\nthe <a href="https://www.w3.org/TR/css-grid-1/#grid-track">grid track</a> between two <a href="https://www.w3.org/TR/css-grid-1/#grid-line">grid lines</a> is the space between the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a> that represent them.\nFor the purpose of <a href="https://www.w3.org/TR/css-grid-1/#algo-track-sizing">track sizing</a>,\neach <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> is treated as an extra, empty track of the specified size.</p>\n\n<p class="note" role="note"><span>Note:</span> Additional spacing may be added between tracks\ndue to <a href="#section-justify-content">justify-content</a>/<a href="#section-align-content">align-content</a>.\nSee <a href="https://www.w3.org/TR/css-grid-1/#algo-overview">§11.1 Grid Sizing Algorithm</a>.\nThis space effectively increases the size of the <a href="https://www.w3.org/TR/css3-align/#gutter">gutters</a>.</p>\n\n<p>If a <a href="https://www.w3.org/TR/css-grid-1/#grid">grid</a> is <a href="https://www.w3.org/TR/css3-break/#fragment">fragmented</a> between tracks,\nthe <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> spacing between those tracks must be suppressed.</p>\n\n<p class="note">Note that gutters are suppressed even after forced breaks, <a href="https://www.w3.org/TR/css-break-3/#break-margins">unlike margins</a>.</p>\n\n<p><a href="https://www.w3.org/TR/css3-align/#gutter">Gutters</a> only appear <em>between</em> tracks of the <a href="#implicit-grid">implicit grid</a>;\nthere is no gutter before the first track or after the last track.\n(In particular, there is no <a href="https://www.w3.org/TR/css3-align/#gutter">gutter</a> between the first/last track of the <a href="#implicit-grid">implicit grid</a> and the “auto” lines in the <a href="https://www.w3.org/TR/css-grid-1/#augmented-grid">augmented grid</a>.)</p>\n\n<p>When a <a href="#collapsed-track">collapsed track</a>’s gutters <dfn id="collapsed-gutter">collapse</dfn>,\nthey coincide exactly—<wbr>the two gutters overlap so that their start and end edges coincide.\nIf one side of a <a href="#collapsed-track">collapsed</a> track does not have a gutter\n(e.g. if it is the first or last track of the <a href="#implicit-grid">implicit grid</a>),\nthen collapsing its gutters results in no gutter\non either “side” of the <a href="#collapsed-track">collapsed track</a>.</p>',
				items: [{
					name: "row-gap, column-gap",
					alias: "row-column-gap",
					link: "https://www.w3.org/TR/css-align-3/#column-row-gap",
					initValue: "normal",
					appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',
					desc: '<p>These properties specify fixed-length <dfn id="gutter">gutters</dfn> between items in the container,\nadding space between them—<wbr>in a manner to the <a href="#valdef-align-content-space-between">space-between</a> keyword\nof the <a href="https://www.w3.org/TR/css-align-3/#content-distribution-properties">content-distribution properties</a>,\nbut of a fixed size instead of as a fraction of remaining space.\nThe <a href="#section-column-gap">column-gap</a> property specifies spacing between “columns”,\nseparating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#inline-axis">inline axis</a> similar to inline-axis margin;\nwhile <a href="#section-row-gap">row-gap</a> indicates spacing between “rows”,\nseparating boxes in the container’s <a href="https://www.w3.org/TR/css-writing-modes-4/#block-axis">block axis</a>.</p>\n\n<p>Gutters effect a minimum spacing between items:\nadditional spacing may be added by <a href="#section-justify-content">justify-content</a>/<a href="#section-align-content">align-content</a>.\nSuch additional space effectively increases the size of these <a href="#gutter">gutters</a>.</p>\n  ',
					values: [{
						name: "&lt;length-percentage>",
						alias: "typedef-length-percentage",
						desc: '<p class="">Specifies a gap between “rows” or “columns”,\nas defined by the layout modes to which it applies;\nsee subsections below for details.</p>\n     <p>Negative values are invalid. <a href="https://www.w3.org/TR/css-sizing-3/#percentage-sizing">As in the min size properties and margins/paddings</a> <a href="https://www.w3.org/TR/css-grid-1/#biblio-css-sizing-3">[CSS-SIZING-3]</a>,\npercentages resolve against zero\nfor determining intrinsic size contributions,\nbut resolve against the box’s content box\nwhen laying out the box’s contents.</p>'
					}, {
						name: "normal",
						alias: "valdef-row-gap-normal",
						desc: '<p>The <a href="#valdef-row-gap-normal">normal</a> represents\na used value of <code>1em</code> on <a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>,\nand a used value of <code>0px</code> in all other contexts.</p>'
					}],
					demos: [{
						name: "row-gap",
						link: "https://www.w3.org/TR/css-align-3/#propdef-row-gap",
						customValues: [{
							name: "50px",
							current: !0
						}, {
							name: "10%"
						}, {
							name: "normal"
						}],
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "1fr 1fr/ 1fr 1fr",
								"row-gap": "20px"
							}
						}]
					}, {
						name: "column-gap",
						link: "https://www.w3.org/TR/css-align-3/#propdef-column-gap",
						customValues: [{
							name: "100px",
							current: !0
						}, {
							name: "50%"
						}, {
							name: "normal"
						}],
						cssRules: [{
							selector: ".parent",
							props: {
								display: "grid",
								"grid-template": "1fr 1fr/ 1fr 1fr",
								"column-gap": "20px"
							}
						}]
					}]
				}, {
					name: "gap",
					link: "https://www.w3.org/TR/css-align-3/#propdef-gap",
					initValue: "see individual properties",
					appliesTo: '<a href="https://www.w3.org/TR/css3-multicol/#multi-column-container">multi-column containers</a>, <a href="https://www.w3.org/TR/css-flexbox-1/#flex-container">flex containers</a>, <a href="#grid-container">grid containers</a>',
					desc: '<p>This property is a shorthand that sets row-gap and column-gap in one declaration. If &lt;column-gap> is omitted, it’s set to the same value as &lt;row-gap>.</p>\n\n  <p class="note">\n  Note: The gap property is only one component of the visible “gutter” or “alley” created between boxes. Margins, padding, or the use of distributed alignment may increase the visible separation between boxes beyond what is specified in gap.\n  </p>\n  ',
					customValues: [{
						name: "20px",
						current: !0
					}, {
						name: "150px 20px"
					}, {
						name: "10%"
					}, {
						name: "normal"
					}],
					cssRules: [{
						selector: ".parent",
						props: {
							display: "grid",
							"grid-template": "1fr 1fr/ 1fr 1fr",
							gap: "20px"
						}
					}]
				}]
			}
		}
			, n = "content" in document.createElement("template")
			, s = e => {
				if (n) {
					const t = document.createElement("template");
					return t.innerHTML = e,
						t.content.firstElementChild;
				}
				const t = document.createElement("div");
				return t.innerHTML = e,
					t.firstElementChild;
			}
			;
		function r(e) {
			const t = e.getBoundingClientRect()
				, a = document.documentElement.clientHeight
				, i = t.top > 0 && t.top < a / 2
				, n = t.bottom < a && t.bottom > 0
				, s = t.top <= 0 && t.bottom >= a;
			return i || n || s;
		}
		const o = e => (e = (e = e.replace(/\[[^[]{0,}\]/g, "")).replace(/0px/g, "")).split(" ").filter(e => e.trim()).length;
		const l = ["sunny", "seagreen", "winter", "warm", "brown", "gray"];
		class d {
			constructor(e) {
				this._data = e,
					this._sectionId = "section-" + this._data.id;
				const t = s('<div class="group__intro container"></div>');
				[this._getTitleElement(), this._getLinkElement(), this._getDescElement()].forEach(e => t.append(e)),
					this.element = this._getElement(),
					this.element.append(t);
			}
			_getElement() {
				const { hideTitle: e } = this._data;
				let t = "group";
				return e && (t += " group--hidden-title"),
					s(`<section class="${t}" id="${this._sectionId}"></section>`);
			}
			_getTitleElement() {
				const { title: e, hideTitle: t } = this._data;
				if (!e)
					return "";
				let a = "group__title";
				return t && (a += " visually-hidden"),
					s(`<h2 class="${a}">\n      ${e}\n      <a class="self-link" href="#${this._sectionId}"></a>\n    </h2>`);
			}
			_getDescElement() {
				const { desc: e } = this._data;
				return e ? s(`<div class="group__desc">${e}</div>`) : "";
			}
			_getLinkElement() {
				const { link: e } = this._data;
				if (!e)
					return "";
				var t = e.replace("http://www.", "");
				return s(`<a class="group__link" href="${e}">${t}</a>`);
			}
		}
		class c {
			constructor({ data: e, current: t, codesElement: a, classList: i }) {
				this._data = e,
					this._current = t,
					this._classList = i,
					this._stylesElement = this._getStylesElement(),
					this._codesElement = a,
					this._propNames = this._current.propNames,
					this._setStyles();
			}
			updateStyles(e) {
				this._current = e,
					this._setStyles();
			}
			_getStylesElement() {
				const e = this._data.alias || this._data.name
					, t = s(`<style id="style-${e}"></style>`);
				return document.head.append(t),
					t;
			}
			_getStyles() {
				const e = this._data.cssRules
					, t = "." + this._classList.join(" ");
				let a = ""
					, i = "";
				if (!e)
					return {};
				for (const { selector: n, props: s, valueId: r } of e) {
					const e = [];
					let o = [];
					const l = [t, n].join(" ");
					if (!r || r === this._current.id) {
						for (let [t, a] of Object.entries(s)) {
							const i = this._current.valuesByKey[t];
							if (i && (a = i),
								"string" == typeof a && a.includes("\n")) {
								const e = "  ";
								a = a.replace(/\s{2,}/g, "\n" + e),
									a = `\n${e}${a}`;
							}
							let n = `${t}: ${a};\n`;
							e.push(n),
								this._propNames.includes(t) && (n = `<mark>${n}</mark>`),
								o.push(n);
						}
						o = o.map(e => `<div class="demo__code-prop">${e}</div>`),
							i += `${l} {\n${e.join("")}}\n`,
							a += `${n} {${o.join("")}}<br><br>`;
					}
				}
				return {
					visibleStyles: a,
					hiddenStyles: i
				};
			}
			_setStyles() {
				this.styles = this._getStyles(),
					this._stylesElement.innerHTML = this.styles.hiddenStyles,
					this._codesElement.innerHTML = this.styles.visibleStyles;
			}
		}
		const h = document.querySelector("#demo-tmpl").content.firstElementChild;
		class p {
			constructor(e) {
				this._data = e,
					this._id = this._data.alias || this._data.name,
					this._propNames = this._getPropNames(),
					this._values = this._getValuesList(),
					this._baseClass = "demo__content--prop-" + this._id,
					this._current = this._getCurrent(),
					this._cellsQuantity = 0,
					this._parentElement = null,
					this._parentCopy = null,
					this._parentElementMarkup = "",
					this.element = this._getElement();
				const t = this.element.querySelector(".demo__code");
				this._stylesController = new c({
					data: e,
					current: this._current,
					codesElement: t,
					classList: [this._baseClass]
				}),
					this._controlsClickHandler = this._controlsClickHandler.bind(this),
					this._hightlightGrid = this._hightlightGrid.bind(this),
					this._addControls(),
					document.addEventListener("pageFilled", this._hightlightGrid);
			}
			_getElement() {
				const e = h.cloneNode(!0);
				e.querySelector(".demo__content").classList.add(...this._getClassList());
				const t = e.querySelector(".demo__view");
				return this._data.htmlMarkup && (t.innerHTML = this._data.htmlMarkup),
					this._data.demoBefore && t.insertAdjacentHTML("afterbegin", this._data.demoBefore),
					this._parentElement = t.querySelector(".parent"),
					this._parentElementMarkup = this._parentElement.outerHTML,
					e;
			}
			_getValuesList() {
				return (this._data.customValues || this._data.values).map((e, t) => ({
					...e,
					id: e.id || `${this._id}-control-${t}`
				}));
			}
			_getClassList() {
				const e = ["demo__content--prop-" + this._id];
				return this._data.isFeaturedHighlighted && e.push("demo__content--highlight-featured"),
					e;
			}
			_addControls() {
				const e = this._getControlsMarkup()
					, t = s(`<div class="demo__controls">${e}</div>`);
				t.addEventListener("click", this._controlsClickHandler),
					this.element.prepend(t),
					this._current.control = t.querySelector(".demo__control--current");
			}
			_getControlsMarkup() {
				const e = [];
				if (this._values) {
					for (const { id: t, name: a, current: i } of this._values) {
						const n = ["demo__control"];
						(i || a === this._currentValueId) && n.push("demo__control--current"),
							e.push(`<button\n        type="button"\n        class="${n.join(" ")}"\n        id="${t}">${a}</button>`);
					}
					return e.join(" ");
				}
			}
			_getPropNames() {
				const e = this._data.propDemoName || this._data.name;
				return e.includes("+") ? e.split("+").map(e => e.trim()) : [e];
			}
			_getCurrent() {
				if (!this._values)
					return;
				let e, t;
				for (const { id: a, name: i, current: n } of this._values)
					n && (t = a,
						e = i);
				return t || (t = this._values[0].id,
					e = this._values[0].name),
				{
					id: t,
					propNames: this._propNames,
					valuesByKey: this._getValuesByKey(e)
				};
			}
			_getValuesByKey(e) {
				let t = {
					[this._propNames[0]]: e
				};
				if (e.includes("/")) {
					const a = e.split("/");
					a.length === this._propNames.length && (t = this._propNames.reduce((e, t, i) => (e[t] = a[i],
						e), {}));
				}
				return t;
			}
			_controlsClickHandler(e) {
				const t = e.target.closest(".demo__control");
				t && (this._current.control.classList.remove("demo__control--current"),
					t.classList.add("demo__control--current"),
					this._current.control = t,
					this._current.id = t.id,
					this._current.valuesByKey = this._getValuesByKey(t.innerHTML),
					this._stylesController.updateStyles(this._current),
					this._hightlightGrid());
			}
			_getHightlightedGridItemsMarkup(e) {
				let t = "";
				for (let a = 0; a < e; a++)
					t += '<div class="child"></div>';
				return t;
			}
			_hightlightGrid() {
				const e = getComputedStyle(this._parentElement)
					, t = this._cellsQuantity;
				if (this._cellsQuantity = (e => {
					const t = e.gridTemplateRows
						, a = e.gridTemplateColumns;
					return o(t) * o(a);
				}
				)(e),
					t === this._cellsQuantity)
					return;
				const a = this._parentCopy;
				this._parentCopy = s(this._parentElementMarkup),
					this._parentCopy.classList.add("parent--grid-view");
				const i = this._cellsQuantity - this._parentCopy.children.length
					, n = this._getHightlightedGridItemsMarkup(i);
				this._parentCopy.insertAdjacentHTML("beforeEnd", n),
					a ? a.replaceWith(this._parentCopy) : this._parentElement.append(this._parentCopy);
			}
		}
		class g {
			constructor(e, t = {}) {
				this._data = e,
					this.id = e.alias || e.name,
					this._sectionId = "section-" + this.id,
					this.parentId = t.parentId,
					this._isChild = !!this.parentId;
				const { children: a, demos: i, cssRules: n } = this._data;
				this._hasChildren = a && a.length > 0,
					this._hasDemos = i && i.length > 0,
					this._hasCSS = !!n;
				const s = [this._getTitleElement(), this._getLinkElement(), this._getDemoElement(), this._getDescElement(), this._getTargetElement(), this._getInitialValueElement(), this._getValuesElement()];
				this.element = this._getSectionElement(),
					s.forEach(e => this.element.append(e));
			}
			_getSectionElement() {
				let e = "prop";
				return this._isChild && (e += " prop--child"),
					(this._hasDemos || this._hasChildren) && (e += " prop--has-children"),
					s(`<section\n      id="${this._sectionId}"\n      class="${e} container"></section>`);
			}
			_getDemoElement() {
				if (this._hasDemos || this._hasChildren || !this._hasCSS)
					return "";
				return new p(this._data).element;
			}
			_getTitleElement() {
				return s(`<h3 class="prop__title  notranslate">\n      ${this._data.name}\n      <a class="self-link" href="#${this._sectionId}"></a>\n    </h3>`);
			}
			_getLinkElement() {
				const e = this._data.link;
				if (!e)
					return "";
				var t = e.replace("http://www.", "");
				return s(`<a class="prop__link" href="${e}">${t}</a>`);
			}
			_getDescElement() {
				return this._data.desc ? s(`<div\n      class="prop__desc">${this._data.desc}</div>`) : "";
			}
			_getTargetElement() {
				return this._data.appliesTo ? s(`<p class="prop__initial-value"><b>Applies to</b>: ${this._data.appliesTo}.</p>`) : "";
			}
			_getInitialValueElement() {
				return this._data.initValue ? s(`<p class="prop__initial-value"><b>Initial</b>: ${this._data.initValue}.</p>`) : "";
			}
			_getValuesElement() {
				const { values: e, desc: t } = this._data;
				if (!e)
					return "";
				let a = "";
				const i = (n = e.length,
					r = ["Value", "Values"],
					1 === n ? r[0] : r[1]);
				var n, r;
				const o = !t;
				for (const { name: t, alias: i, desc: n } of e) {
					const e = i || `${this.id}-${t}`;
					a += `<dt\n        id="${e}"\n        class="prop-values__term notranslate">\n        ${t}\n        <a class="self-link" href="#${e}"></a>\n      </dt>\n        <dd class="prop-values__desc">${n}</dd>`;
				}
				return s(`<div\n      class="\n        prop-values\n        ${o ? "prop-values--title-hidden" : ""}\n      ">\n      <h4 class="\n        prop-values__title\n        notranslate\n        ${o ? "visually-hidden" : ""}\n      ">${i}</h4>\n      <dl class="prop-values__list">${a}</dl>\n    </div>\n    `);
			}
		}
		a.p,
			a(0);
		const f = document.querySelector(".page-main");
		(new class {
			constructor() {
				this._lsKey = "gdchTheme",
					this._counter = 0,
					this._theme = this._getTheme(),
					this._control = document.querySelector(".theme-control"),
					this._controlOnClickHandler = this._controlOnClickHandler.bind(this),
					this._control.addEventListener("click", this._controlOnClickHandler);
			}
			setTheme() {
				document.body.dataset.theme = this._theme,
					localStorage.setItem(this._lsKey, this._theme);
			}
			_controlOnClickHandler() {
				this._counter++,
					this._counter > l.length - 1 && (this._counter = 0),
					this._theme = l[this._counter],
					this.setTheme();
			}
			_getTheme() {
				let e = localStorage.getItem(this._lsKey);
				return e = e || "seagreen",
					this._counter = l.indexOf(e),
					e;
			}
		}
		).setTheme();
		const m = new class {
			constructor({ container: e, groups: t }) {
				this._container = e,
					this._groups = t,
					this._sectionsComponents = [],
					this._fillContent();
			}
			getSectionsComponents() {
				return this._sectionsComponents;
			}
			_fillContent() {
				for (const [e, t] of Object.entries(this._groups)) {
					const a = new d({
						id: e,
						...t
					})
						, i = a.element;
					this._sectionsComponents.push(a);
					for (const e of t.items) {
						const t = new g(e);
						this._sectionsComponents.push(t),
							i.append(t.element),
							this._addChildren(a, t, e.demos),
							this._addChildren(a, t, e.children);
					}
					this._container.append(i);
				}
				document.dispatchEvent(new Event("pageFilled"));
			}
			_addChildren(e, t, a) {
				if (a && 0 !== a.length)
					for (const i of a) {
						const a = new g(i, {
							parentId: t.id
						});
						this._sectionsComponents.push(a),
							e.element.append(a.element);
					}
			}
		}
			({
				container: f,
				groups: i
			})
			, w = document.querySelector(".page-aside")
			, u = document.querySelector(".page-aside__content")
			, v = document.querySelector(".page-aside__toggler")
			, b = new class {
				constructor({ groups: e, sectionsComponents: t }) {
					this._groups = e,
						this._sectionsComponents = t.reverse(),
						this._current = null,
						this._isWindowScrolling = !1,
						this._scrollTimeOut = null,
						this.element = this._getNavElement(),
						this._markerElement = s('<span class="nav__marker"></span>'),
						this.element.prepend(this._markerElement),
						this._navItemsBySectionId = this._getItemsBySectionId(),
						this._navClickHandler = this._navClickHandler.bind(this),
						this.moveMarker = this.moveMarker.bind(this),
						this._windowScrollHandler = this._windowScrollHandler.bind(this),
						this.element.addEventListener("click", this._navClickHandler),
						window.addEventListener("scroll", this._windowScrollHandler);
				}
				setCurrentItem(e) {
					e !== this._currentElement && (this._currentElement && this._currentElement.classList.remove("nav__item--current"),
						this._markerElement.style.top = e.offsetTop + "px",
						e.classList.add("nav__item--current"),
						this._currentElement = e,
						this._isWindowScrolling = !0);
				}
				_getItemsBySectionId() {
					const e = Array.from(this.element.querySelectorAll(".nav__item, .nav__subheader")).reduce((e, t) => (e[t.dataset.name] = t,
						e), {});
					return this._sectionsComponents.reduce((t, a) => {
						const i = "section-" + a.id;
						let n = e[i];
						return n || (n = e["section-" + a.parentId]),
							t[i] = n,
							t;
					}
						, {});
				}
				_getNavElement() {
					const e = this._getNavContentMarkup();
					return s(`<nav class="nav page-aside__container">\n      <h2 class="visually-hidden">Navigation</h2>\n      ${e}\n    </nav>`);
				}
				_getNavContentMarkup() {
					return Object.entries(this._groups).map(([e, { title: t, items: a }]) => {
						let i = "";
						const n = "section-" + e;
						return t && (i += `<h3\n            class="nav__subheader"\n            data-name="${n}"\n          >\n            <a\n              class="nav__subheader-link"\n              href="#${n}"\n              >${t}</a>\n          </h3>`),
							i += this._getListMarkup(e, a),
							i;
					}
					).join("");
				}
				_getListMarkup(e, t, a = "") {
					return `<ul class="nav__list notranslate ${a}">${t.map(({ alias: t, name: a, children: i }) => {
						letn = "";
						const s = t || a
							, r = "section-" + s;
						return i && (n = this._getListMarkup(s, i, "nav__list--inner")),
							`<li\n          class="nav__item"\n          data-name="${r}"\n          data-parent-name="section-${e}"\n        ><a\n            href="#${r}"\n            class="nav__link"\n          >${a}</a>${n}</li>`;
					}
					).join("")}</ul>`;
				}
				_navClickHandler(e) {
					const t = e.target.closest(".nav__item, .nav__subheader");
					t && this.setCurrentItem(t);
				}
				moveMarker() {
					for (const e of this._sectionsComponents) {
						const t = this._navItemsBySectionId["section-" + e.id];
						if (r(e.element) && t) {
							this.setCurrentItem(t);
							break;
						}
					}
				}
				_windowScrollHandler() {
					clearTimeout(this._scrollTimeOut),
						this._scrollTimeOut = setTimeout(() => {
							this._isWindowScrolling = !1;
						}
							, 100),
						this._isWindowScrolling || function (e, t, a) {
							let i;
							return function () {
								const n = this
									, s = arguments
									, r = function () {
										i = null,
											a || e.apply(n, s);
									}
									, o = a && !i;
								clearTimeout(i),
									i = setTimeout(r, t),
									o && e.apply(n, s);
							};
						}(this.moveMarker, 500)();
				}
			}
				({
					groups: i,
					sectionsComponents: m.getSectionsComponents()
				});
		u.prepend(b.element),
			b.moveMarker(),
			v.addEventListener("click", () => {
				w.classList.toggle("page-aside--collapsed");
			}
			),
			window.location.search.includes("debug") && function () {
				const e = Array.from(document.querySelectorAll("[id]")).reduce((e, t) => (e[t.id] = t,
					e), {})
					, t = document.querySelectorAll('a[href*="#"]');
				let a = 0;
				t.forEach(t => {
					const i = t.getAttribute("href")
						, n = i.includes("http")
						, s = t.getAttribute("href").split("#")[1];
					n ? e[s] && (i.includes("css3-grid-layout") || i.includes("css-grid-1")) && (console.log("external, id exist in doc: ", s),
						t.classList.add("marked-link")) : e[s] ? i || (t.classList.add("marked-link"),
							a++) : (console.log("id not exist " + s),
								t.classList.add("marked-link"),
								a++);
				}
				),
					console.log("Wrong links total: " + a);
			}();
	}
]);
