exportModule({
	id: "additionalTranslation",
	description: "$additionalTranslation_description",
	extendedDescription: `Use "Automail language" to translate some native parts of the site too`,
	isDefault: true,//logic: if translation is turned on, it should be comprehensive. Turning *off* parts of it should be the active opt
	importance: 0,
	categories: ["Script","Newly Added"],
	visible: true,
	urlMatch: function(url,oldUrl){
		return useScripts.partialLocalisationLanguage !== "English"
	},
	code: function(){
		let times = [100,200,400,1000,2000,3000,5000,7000,10000,15000];
		let caller = function(url,element,counter){
			if(!document.URL.match(url)){
				return
			}
			if(element.multiple){
				let place = document.querySelectorAll(element.lookup);
				if(place){
					Array.from(place).forEach(elem => {
						element.multiple.forEach(possible => {
							if(elem.childNodes[0].textContent.trim() === possible.ofText){
								elem.childNodes[0].textContent = translate(possible.replacement)
								possible.translated = true
							}
						})
					})
					if(counter < times.length && !element.multiple.every(possible => possible.translated)){
						setTimeout(function(){
							caller(url,element,counter + 1)
						},times[counter])
					}
				}
				else if(counter < times.length){
					setTimeout(function(){
						caller(url,element,counter + 1)
					},times[counter])
				}
			}
			else{
				let place = document.querySelector(element.lookup);
				if(place){
					if(element.textType === "placeholder"){
						place.placeholder = translate(element.replacement)
					}
					else{
						place.childNodes[element.selectIndex || 0].textContent = translate(element.replacement)
					}
				}
				else if(counter < times.length){
					setTimeout(function(){
						caller(url,element,counter + 1)
					},times[counter])
				}
			}
		};
		[
			{
				regex: /./,
				elements: [
					{
						lookup: ".theme-selector > h2",
						replacement: "$footer_siteTheme"
					}
				]
			},
			{
				regex: /\/user\/([^\/]+)\/?$/,
				elements: [
					{
						lookup: ".activity-edit .el-textarea__inner",
						textType: "placeholder",
						replacement: "$placeholder_status"
					},
					{
						lookup: ".activity-feed-wrap h2.section-header",
						replacement: "$feed_header"
					},
					{
						lookup: ".activity-feed-wrap .load-more",
						replacement: "$load_more"
					},
					{
						lookup: ".activity-feed-wrap ul li:nth-child(1)",
						selectIndex: 1,
						replacement: "$feedSelect_all"
					},
					{
						lookup: ".activity-feed-wrap ul li:nth-child(2)",
						selectIndex: 1,
						replacement: "$feedSelect_status"
					},
					{
						lookup: ".activity-feed-wrap ul li:nth-child(3)",
						selectIndex: 1,
						replacement: "$feedSelect_message"
					},
					{
						lookup: ".activity-feed-wrap ul li:nth-child(4)",
						selectIndex: 1,
						replacement: "$feedSelect_list"
					}
				]
			},
			{
				regex: /\/user\/([^\/]+)\/(animelist|mangalist)\/?/,
				elements: [
					{
						lookup: ".filters-wrap [placeholder='Filter']",
						textType: "placeholder",
						replacement: "$mediaStaff_filter"
					},
					{
						lookup: ".filters-wrap [placeholder='Genres']",
						textType: "placeholder",
						replacement: "$stats_genre"
					},
					{
						lookup: ".filters .filter-group .group-header",
						multiple: [
							{
								ofText: "Lists",
								replacement: "$filters_lists"
							},
							{
								ofText: "Filters",
								replacement: "$filters"
							},
							{
								ofText: "Year",
								replacement: "$filters_year"
							},
							{
								ofText: "Sort",
								replacement: "$staff_sort"
							}
						]
					}
				]
			},
			{
				regex: /\/home\/?$/,
				elements: [
					{
						lookup: ".activity-edit .el-textarea__inner",
						textType: "placeholder",
						replacement: "$placeholder_status"
					},
					{
						lookup: ".activity-feed-wrap h2.section-header",
						replacement: "$feed_header"
					},
					{
						lookup: ".activity-feed-wrap .load-more",
						replacement: "$load_more"
					},
					{
						lookup: ".feed-select ul li:nth-child(1)",
						selectIndex: 1,
						replacement: " " + translate("$feedSelect_all") + " "
					},
					{
						lookup: ".feed-select ul li:nth-child(2)",
						selectIndex: 1,
						replacement: " " + translate("$feedSelect_text") + " "
					},
					{
						lookup: ".feed-select ul li:nth-child(3)",
						selectIndex: 1,
						replacement: " " + translate("$feedSelect_list") + " "
					},
					{
						lookup: ".feed-select .feed-type-toggle div:nth-child(1)",
						replacement: "$filter_following"
					},
					{
						lookup: ".feed-select .feed-type-toggle div:nth-child(2)",
						replacement: "$terms_option_global"
					},
					{
						lookup: ".list-preview-wrap .section-header h2",
						multiple: [
							{
								ofText: "Manga in Progress",
								replacement: "$preview_mangaSection_title"
							},
							{
								ofText: "Anime in Progress",
								replacement: "$preview_animeSection_title"
							}
						]
					}
					//see also: middleClickLinkFixer.js
				]
			},
			{
				regex: /\/reviews\/?$/,
				elements: [
					{
						lookup: ".load-more",
						replacement: "$load_more"
					}
				]
			},
			{
				regex: /\/forum\/(overview|recent)\/?$/,
				elements: [
					{
						lookup: ".overview-header[href='/forum/recent']",
						replacement: "$forumHeading_recentlyActive"
					},
					{
						lookup: ".overview-header[href='/forum/recent?category=5']",
						replacement: "$forumHeading_releaseDiscussion"
					},
					{
						lookup: ".overview-header[href='/forum/new']",
						replacement: "$forumHeading_newThreads"
					}
				]
			},
		].forEach(matchset => {
			if(document.URL.match(matchset.regex)){
				matchset.elements.forEach(element => {
					caller(matchset.regex,element,0)
				})
			}
		})
	}
})
