(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(29),c=a.n(s),i=(a(39),a(31)),r=a(6),o=a(7),m=a(8),u=a(11),d=a(9),p=a(10);a(40);var v=function(e){return l.a.createElement("div",{className:"content-block"},l.a.createElement("h1",null,e.heading),l.a.createElement("p",null,e.paragraph))};a(41);var h=function(){return l.a.createElement("div",{className:"bd-example"},l.a.createElement("div",{id:"carouselExampleCaptions",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#carouselExampleCaptions","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item max-height active"},l.a.createElement("img",{src:"planner.jpg",className:"d-block w-100",alt:"..."}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",{className:"car-1"},"Share your lists"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement("div",{className:"carousel-item max-height"},l.a.createElement("img",{src:"indoors-3203076_1280.jpg",className:"d-block w-100",alt:"..."}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",{className:"car-1"},"Share your schedules"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement("div",{className:"carousel-item max-height"},l.a.createElement("img",{src:"todo.jpg",className:"d-block w-100",alt:"..."}),l.a.createElement("div",{className:"carousel-caption d-none d-md-block"},l.a.createElement("h5",{className:"car-1"},"Share your important information"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.")))),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleCaptions",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleCaptions",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next"))))};var E=function(){return l.a.createElement("footer",{className:"d-flex justify-content-center"},"- Footer | Credits -")},N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={activePageTitle:"Home"},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(h,null))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(v,{heading:"Manage Your Family",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis odio mi"})))),l.a.createElement(E,null))}}]),t}(n.Component),f=a(30),g=a(14);a(42),a(43);var b=function(e){return l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{type:"checkbox",className:"form-check-input",id:e.id}),l.a.createElement("label",{className:"form-check-label",htmlFor:e.id},e.item))};var y=function(e){var t=e.testLists[e.activeListId];return l.a.createElement("div",{id:"content-panel"},l.a.createElement("h3",null,t.title),t.items.map(function(e,t){return l.a.createElement("div",{key:t},l.a.createElement(b,{id:e,item:e}))}))};a(44),a(45);var L=function(e){return l.a.createElement("button",{value:e.value,name:e.name,onClick:e.onClick,className:"btn"},e.name)};var k=function(e){return l.a.createElement("nav",{className:"nav flex-column"},e.testLists.map(function(t,a){return l.a.createElement(L,{key:a,value:a,name:t.title,onClick:e.handleListClick})}))};a(46);var I=function(e){return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4"},e.pageName))},C=a(15),j=a.n(C),x={getShopItems:function(){return j.a.get("/api/shopItems")},getShopItem:function(e){return j.a.get("/api/shopItems/"+e)},deleteShopItem:function(e){return j.a.delete("/api/shopItems/"+e)},saveShopItem:function(e){return j.a.post("/api/shopItems",e)}};a(64);var w=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};a(65);function S(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function O(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={activeListId:0,testLists:[{title:"HyVee",items:["Apples","Bananas","Blueberries","Pineapples","Kiwi","Plums"]},{title:"Costco",items:["Tissues","Cereal","Dog Food","Toothpaste","Vitamins"]},{title:"Another List",items:["Hey","Hey","hey"]}],activePageTitle:"Lists",shopItems:[],shoppingList:"",itemName:"",category:"",quantity:"",quantityUnits:""},a.handleListClick=function(e){console.log("CLICKY"),e.preventDefault(),a.setState({activeListId:e.target.value})},a.loadShopItems=function(){console.log("loading shop items"),x.getShopItems().then(function(e){return a.setState({shopItems:e.data,shoppingList:"",itemName:"",category:"",quantity:"",quantityUnits:""})}).catch(function(e){return console.log(e)})},a.deleteShopItem=function(e){x.deleteShopItem(e).then(function(e){return a.loadShopItems()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(f.a)({},n,l))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.shoppingList&&a.state.itemName&&a.state.quantity&&a.state.quantityUnits&&x.saveShopItem({shoppingList:a.state.shoppingList,category:a.state.category,itemName:a.state.itemName,quantity:a.state.quantity,quantityUnits:a.state.quantityUnits}).then(function(e){return a.loadShopItems()}).catch(function(e){return console.log(e)})},a.handleListClick=a.handleListClick.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadShopItems()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"content"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm"},l.a.createElement(I,{pageName:this.state.activePageTitle}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 my-3"},l.a.createElement(k,{activeListId:this.state.activeListId,handleListClick:this.handleListClick,testLists:this.state.testLists})),l.a.createElement("div",{className:"col-sm-9 my-3"},l.a.createElement(S,null,this.state.shopItems.map(function(t){return l.a.createElement(O,{key:t._id},l.a.createElement("strong",null,t.itemName,", ",t.quantity," ",t.quantityUnits),l.a.createElement(w,{onClick:function(){return e.deleteShopItem(t._id)}}))})))),l.a.createElement("p",null,"(Original test area below - remove before go-live)"),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 my-3"},l.a.createElement(k,{activeListId:this.state.activeListId,handleListClick:this.handleListClick,testLists:this.state.testLists})),l.a.createElement("div",{className:"col-sm-9 my-3"},l.a.createElement(y,{activeListId:this.state.activeListId,testLists:this.state.testLists}))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 my-3"},l.a.createElement(E,null)))))}}]),t}(n.Component),D=(a(66),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top py-4"},l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"App Name"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/",value:"Home"}," Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/lists",value:"Shopping"},"Shopping")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/lists",value:"Calendar"},"Calendar")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/lists",value:"Family Info"},"Family Info")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/lists",value:"Register"},"Register/Login"))))))}}]),t}(n.Component));a(67);var F=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/",component:N}),l.a.createElement(r.a,{exact:!0,path:"/lists",component:q}))))};c.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.db8a735a.chunk.js.map