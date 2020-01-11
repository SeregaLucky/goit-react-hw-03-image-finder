(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={overlay:"Modal_overlay__2cbcp",modal:"Modal_modal__24kfI"}},2:function(e,t,a){e.exports={photoCard:"PhotoCard_photoCard__2EWFL",stats:"PhotoCard_stats__1AeCi",statsItem:"PhotoCard_statsItem__1tp1I",fullscreenButton:"PhotoCard_fullscreenButton__2IU53"}},21:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1LEKF"}},22:function(e,t,a){e.exports={gallery:"Gallery_gallery__1rjjF"}},24:function(e,t,a){e.exports=a(47)},29:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=(a(29),a(11)),l=a(3),s=a(4),u=a(6),m=a(5),d=a(7),p=a(9),h=a.n(p),f=a(21),b=a.n(f),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={query:""},a.handleChange=function(e){return a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onWriteFindWord(a.state.query),a.setState({query:""})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.query;return o.a.createElement("form",{className:b.a.searchForm,onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",name:"search",value:e,onChange:this.handleChange}))}}]),t}(n.Component),v=a(22),y=a.n(v),_=a(2),E=a.n(_),k=function(e){var t=e.item,a=e.onOpenModal,n=t.id,r=t.webformatURL,c=t.likes,i=t.views,l=t.comments,s=t.downloads;return o.a.createElement("div",{className:E.a.photoCard},o.a.createElement("img",{src:r,alt:""}),o.a.createElement("div",{className:E.a.stats},o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"thumb_up"),c),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"visibility"),i),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"comment"),l),o.a.createElement("p",{className:E.a.statsItem},o.a.createElement("i",{className:"material-icons"},"cloud_download"),s)),o.a.createElement("button",{type:"button",className:E.a.fullscreenButton,onClick:function(){return a(n)}},o.a.createElement("i",{className:"material-icons"},"zoom_out_map")))},C=function(e){var t=e.items,a=e.onOpenModal,n=t.map((function(e){return o.a.createElement(k,{key:e.id,item:e,onOpenModal:a})}));return o.a.createElement("ul",{className:y.a.gallery},n)},O=a(10),N=a.n(O),j=document.querySelector("#modal-root"),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),c=0;c<o;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).backdropRef=Object(n.createRef)(),a.clickCode=function(e){"Escape"===e.code&&a.props.onCloseModal()},a.handleBackdropClick=function(e){a.backdropRef.current&&e.target!==a.backdropRef.current||a.props.onCloseModal()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.clickCode)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.clickCode)}},{key:"render",value:function(){var e=this.props.url;return Object(r.createPortal)(o.a.createElement("div",{className:N.a.overlay,ref:this.backdropRef,onClick:this.handleBackdropClick,role:"presentation"},o.a.createElement("div",{className:N.a.modal},o.a.createElement("img",{src:e,alt:""}))),j)}}]),t}(n.Component),M=a(23),S=a.n(M).a.create({baseURL:"https://pixabay.com/api/"}),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=12935223-ebb6e80bcfb15004a250fd4eb");return S.get(a).then((function(e){return e.data.hits})).catch((function(e){return Error(e)}))},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={items:[],findWord:"",pageNumber:1,isModalOpen:!1,idClickPhoto:"",isLoading:!1,error:null},a.fetchGetPhotos=function(){a.setState({isLoading:!0}),W(a.state.findWord,a.state.pageNumber).then((function(e){return a.setState((function(t){return{items:[].concat(Object(i.a)(t.items),Object(i.a)(e)),pageNumber:t.pageNumber+1}}))})).catch((function(e){return a.setState({error:e})})).finally((function(){return a.setState({isLoading:!1})}))},a.resetOldStateAndWriteNewData=function(e){e!==a.state.findWord&&a.setState({items:[],pageNumber:1,findWord:e})},a.openModal=function(e){a.setState({isModalOpen:!0,idClickPhoto:e})},a.closeModal=function(){a.setState({isModalOpen:!1,idClickPhoto:""})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.items,o=a.findWord;t.items.length!==n.length&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),t.findWord!==o&&this.fetchGetPhotos()}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.isModalOpen,n=e.idClickPhoto,r=e.isLoading,c=e.error,i=t.filter((function(e){return e.id===n}));return o.a.createElement("div",{className:h.a.app},o.a.createElement(g,{onWriteFindWord:this.resetOldStateAndWriteNewData}),o.a.createElement(C,{items:t,onOpenModal:this.openModal}),a&&o.a.createElement(w,{url:i[0].largeImageURL,onCloseModal:this.closeModal}),c&&o.a.createElement("psan",null,"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430."),t.length>0&&o.a.createElement("button",{type:"button",onClick:this.fetchGetPhotos,className:h.a.button,disabled:r},"Load more"))}}]),t}(n.Component);c.a.render(o.a.createElement(L,null),document.getElementById("root"))},9:function(e,t,a){e.exports={app:"App_app__3BcX8",button:"App_button__32Xf9"}}},[[24,1,2]]]);
//# sourceMappingURL=main.eb5416e2.chunk.js.map