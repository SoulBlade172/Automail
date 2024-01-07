// SPDX-FileCopyrightText: 2021 Reina
// SPDX-License-Identifier: MIT
/*
Copyright (c) 2021 Reina

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
//updated code here: https://github.com/Reinachan/AniList-High-Contrast-Dark-Theme
exportModule({
	id: "nonJumpScroll",
	description: "$nonJumpScroll_description",
	isDefault: true,
	importance: 1,
	categories: ["Feeds"],
	visible: true,
	css: `
/* Scrollbar */
* {
	scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0.2);
	scrollbar-width: thin;
}
::-webkit-scrollbar {
	width: 4px;
	height: 8px;
}
::-webkit-scrollbar-button {
	display: none;
}
::-webkit-scrollbar-track {
	background-color: #1110;
	width: 0px;
}
::-webkit-scrollbar-track-piece {
	display: none;
}
::-webkit-scrollbar-thumb {
	background-color: rgb(var(--color-blue));
}
.activity-markdown .markdown {
	overflow-y: scroll !important;
	scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
}
.activity-markdown .markdown:hover {
	scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0);
}
.activity-markdown .markdown::-webkit-scrollbar-thumb,
.activity-markdown .markdown .about .content-wrap::-webkit-scrollbar-thumb {
	background-color: rgba(0, 0, 0, 0);
}
.activity-markdown .markdown:hover::-webkit-scrollbar-thumb,
.activity-markdown .markdown .about .content-wrap:hover::-webkit-scrollbar-thumb {
	background-color: rgb(var(--color-blue));
}
::-webkit-scrollbar-corner {
	display: none;
}
/*::-webkit-resizer {
	display: none;
}*/
.about .content-wrap {
	overflow-y: scroll !important;
	scrollbar-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
}
.about .content-wrap .markdown {
	overflow: hidden !important;
}
.about .content-wrap:hover {
	overflow-y: scroll !important;
	scrollbar-color: rgb(var(--color-blue)) rgba(0, 0, 0, 0);
}
.about .content-wrap .markdown::after {
	content: '';
	display: block;
	height: 10px;
	width: 10px;
}
.list-editor .custom-lists {
	overflow-y: auto;
}
.list-editor .custom-lists:hover {
	margin-right: 0;
}
`
})
