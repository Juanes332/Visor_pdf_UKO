(this["webpackJsonpmatx-react"]=this["webpackJsonpmatx-react"]||[]).push([[26],{1023:function(e,t,a){"use strict";a.r(t);var r=a(7),i=a(5),n=a(287),l=a(81),o=a(9),s=a(37),u=a(53),c=a(13),b=a(1021),y=a(507),d=a(492),h=a(802),p=a.n(h),j=a(1),f=a.n(j),O=a(2),m=Object(i.a)(b.a)((function(){return{width:300}}));function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){return setTimeout(t,e)}))}function x(){var e=f.a.useState(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=f.a.useState([]),n=Object(c.a)(i,2),l=n[0],b=n[1],h=a&&0===l.length;return f.a.useEffect((function(){var e=!0;if(h)return Object(u.a)(Object(s.a)().mark((function t(){var a,r;return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p()("https://country.register.gov.uk/records.json?page-size=5000");case 2:return a=t.sent,t.next=5,g(3e3);case 5:return t.next=7,a.json();case 7:r=t.sent,e&&b(Object.keys(r).map((function(e){return r[e].item[0]})));case 9:case"end":return t.stop()}}),t)})))(),function(){e=!1}}),[h]),f.a.useEffect((function(){a||b([])}),[a]),Object(O.jsx)(m,{open:a,options:l,loading:h,id:"asynchronous-demo",onOpen:function(){return r(!0)},onClose:function(){return r(!1)},getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{fullWidth:!0,variant:"outlined",label:"Asynchronous",InputProps:Object(o.a)(Object(o.a)({},e.InputProps),{},{endAdornment:Object(O.jsxs)(f.a.Fragment,{children:[h?Object(O.jsx)(d.a,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})})}))}})}var v=a(993),T=Object(i.a)(b.a)((function(){return{width:300,marginBottom:"16px"}})),A=[{label:"Afghanistan"},{label:"Aland Islands"},{label:"Albania"},{label:"Algeria"},{label:"American Samoa"},{label:"Andorra"},{label:"Angola"},{label:"Anguilla"},{label:"Antarctica"},{label:"Antigua and Barbuda"},{label:"Argentina"},{label:"Armenia"},{label:"Aruba"},{label:"Australia"},{label:"Austria"},{label:"Azerbaijan"},{label:"Bahamas"},{label:"Bahrain"},{label:"Bangladesh"},{label:"Barbados"},{label:"Belarus"},{label:"Belgium"},{label:"Belize"},{label:"Benin"},{label:"Bermuda"},{label:"Bhutan"},{label:"Bolivia, Plurinational State of"},{label:"Bonaire, Sint Eustatius and Saba"},{label:"Bosnia and Herzegovina"},{label:"Botswana"},{label:"Bouvet Island"},{label:"Brazil"},{label:"British Indian Ocean Territory"},{label:"Brunei Darussalam"}],S=Object(v.a)(),B=function(){var e=f.a.useState(null),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(O.jsxs)(j.Fragment,{children:[Object(O.jsx)(T,{options:A,getOptionLabel:function(e){return e.label},renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{label:"Combo box",variant:"outlined",fullWidth:!0}))}}),Object(O.jsx)(T,{value:a,options:A,onChange:function(e,t){t&&t.inputValue?r({label:t.inputValue}):r(t)},filterOptions:function(e,t){var a=S(e,t);return""!==t.inputValue&&a.push({inputValue:t.inputValue,label:'Add "'.concat(t.inputValue,'"')}),a},getOptionLabel:function(e){return"string"===typeof e?e:e.inputValue?e.inputValue:e.label},renderOption:function(e){return e.label},style:{width:300},freeSolo:!0,renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{label:"Free solo with text demo",variant:"outlined",fullWidth:!0}))}}),Object(O.jsx)(T,{options:A,getOptionLabel:function(e){return e.label},getOptionDisabled:function(e){return e===A[0]||e===A[2]},renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{label:"Disabled option",variant:"outlined",fullWidth:!0}))}})]})},w=a(909),I=a(74),L=a(289),k=function(){var e=Object(I.a)();return Object(O.jsxs)(L.a,{sx:{width:500,"& > * + *":{marginTop:e.spacing(3)}},children:[Object(O.jsx)(b.a,{multiple:!0,id:"tags-standard",options:P,getOptionLabel:function(e){return e.title},defaultValue:[P[13]],renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{variant:"standard",label:"Multiple values",placeholder:"Favorites",fullWidth:!0}))}}),Object(O.jsx)(b.a,{multiple:!0,id:"tags-outlined",options:P,getOptionLabel:function(e){return e.title},defaultValue:[P[13]],filterSelectedOptions:!0,renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{variant:"outlined",label:"filterSelectedOptions",placeholder:"Favorites",fullWidth:!0}))}}),Object(O.jsx)(b.a,{multiple:!0,id:"tags-filled",options:P.map((function(e){return e.title})),defaultValue:[P[13].title],freeSolo:!0,renderTags:function(e,t){return e.map((function(e,a){return Object(O.jsx)(w.a,Object(o.a)({variant:"outlined",label:e},t({index:a})))}))},renderInput:function(e){return Object(O.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{variant:"filled",label:"freeSolo",placeholder:"Favorites",fullWidth:!0}))}})]})},P=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}],W=Object(i.a)("div")((function(e){var t,a=e.theme;return t={margin:"30px"},Object(r.a)(t,a.breakpoints.down("sm"),{margin:"16px"}),Object(r.a)(t,"& .breadcrumb",Object(r.a)({marginBottom:"30px"},a.breakpoints.down("sm"),{marginBottom:"16px"})),t}));t.default=function(){return Object(O.jsxs)(W,{children:[Object(O.jsx)(n.a,{className:"breadcrumb",children:Object(O.jsx)(l.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Autocomplete"}]})}),Object(O.jsx)(l.i,{title:"autocomplete combo",children:Object(O.jsx)(B,{})}),Object(O.jsx)(n.a,{py:"12px"}),Object(O.jsx)(l.i,{title:"Asyncronous Autocomplete",children:Object(O.jsx)(x,{})}),Object(O.jsx)(n.a,{py:"12px"}),Object(O.jsx)(l.i,{title:"Asyncronous Autocomplete",children:Object(O.jsx)(k,{})})]})}}}]);
//# sourceMappingURL=26.9e07eabf.chunk.js.map