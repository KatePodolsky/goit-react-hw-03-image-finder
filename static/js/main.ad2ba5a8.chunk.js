(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__gHpcL",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2ZT6j"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__V5-BG",Modal:"Modal_Modal__Lk0gt"}},22:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1ogLY"}},23:function(e,t,a){e.exports={Button:"Button_Button__3iPaE"}},26:function(e,t,a){e.exports={Loader:"Loader_Loader__SeVoR"}},70:function(e,t,a){e.exports={App:"App_App__1X4Fy"}},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=a(13),i=a(4),l=a(5),u=a(7),h=a(6),m=a(11),d=a.n(m),g=a(0),p=function(e){var t=e.image,a=t.webformatURL,n=t.largeImageURL,r=t.tags,o=e.openModal;return Object(g.jsx)("li",{className:d.a.ImageGalleryItem,onClick:o,children:Object(g.jsx)("img",{src:a,"data-source":n,alt:r,className:d.a.ImageGalleryItemImage})})},b=a.p+"static/media/Default_image.e1ce751e.jpg",j=a(22),y=a.n(j),f=function(e){var t=e.images,a=e.openModal;return Object(g.jsx)("ul",{className:y.a.ImageGallery,children:t.map((function(e){return Object(g.jsx)(p,{image:e,openModal:a},e.id)}))})};f.defaultProps={webformatUR:b,largeImageURL:b,tags:"No image available"};var O=f,v=a(8),_=a.n(v),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(g.jsx)("header",{className:_.a.Searchbar,children:Object(g.jsxs)("form",{className:_.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:_.a.SearchFormButton,children:Object(g.jsx)("span",{className:_.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:_.a.SearchFormInput,value:e,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),I=a(23),x=a.n(I),w=function(e){var t=e.fetchImages;return Object(g.jsx)("button",{type:"button",className:x.a.Button,onClick:t,children:"Load more"})},L=a(24),C=a.n(L),M=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.currentPage,r=void 0===n?1:n,o=e.perPage,c=void 0===o?12:o;return C.a.get("".concat("https://pixabay.com/api/","?q=").concat(a,"&page=").concat(r,"&key=").concat("21314636-5423c4bd79d6decc1761e090e","&image_type=photo&orientation=horizontal&per_page=").concat(c,"\n  ")).then((function(e){return e.data.hits}))},k=a(25),F=a.n(k),B=a(26),G=a.n(B),N=function(){return Object(g.jsx)(F.a,{type:"ThreeDots",color:"tomato",height:100,width:100,timeout:3e3,className:G.a.Loader})},P=a(12),Q=a.n(P),q=document.querySelector("#modal-root"),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:Q.a.Overlay,onClick:this.handleOverlayClick,children:Object(g.jsx)("div",{className:Q.a.Modal,children:this.props.children})}),q)}}]),a}(n.Component),T=(a(70),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,selectedImage:""},e.onOpenModal=function(t){e.setState({selectedImage:t.target.dataset.source,showModal:!0})},e.onCloseModal=function(t){e.setState({selectedImage:"",showModal:!1})},e.onChangeQuery=function(t){e.setState({searchQuery:t,images:[],currentPage:1,isLoading:!1,error:null})},e.fetchImages=function(){var t=e.state,a=t.currentPage,n={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),M(n).then((function(t){e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})})),setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),500)},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.showModal,r=e.selectedImage,o=e.error,c=t.length>0&&!a;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{onSubmit:this.onChangeQuery}),o&&Object(g.jsx)("p",{children:"There was a problem with your request! Please, try again"}),Object(g.jsx)(O,{images:t,openModal:this.onOpenModal}),a&&Object(g.jsx)(N,{}),c&&Object(g.jsx)(w,{fetchImages:this.fetchImages}),n&&Object(g.jsx)(D,{onClose:this.onCloseModal,children:Object(g.jsx)("img",{src:r,alt:""})})]})}}]),a}(n.Component));a(71),a(72);c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2g8Z7",SearchForm:"Searchbar_SearchForm__-9GBY",SearchFormButton:"Searchbar_SearchFormButton__1mx7v",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1dCB4",SearchFormInput:"Searchbar_SearchFormInput__YKT1J"}}},[[73,1,2]]]);
//# sourceMappingURL=main.ad2ba5a8.chunk.js.map