(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{P5F7:function(e,t,r){"use strict";r.r(t);r("IzEo");var a,o,n,s=r("bx4M"),d=(r("g9YV"),r("wCAj")),c=(r("14J3"),r("BMrR")),l=(r("jCWc"),r("kPKH")),i=(r("+L6B"),r("2/Rp")),u=(r("2qtc"),r("kLXV")),p=r("2Taf"),m=r.n(p),h=r("vZ4D"),f=r.n(h),g=r("l4Ni"),b=r.n(g),y=r("ujKo"),O=r.n(y),M=r("rlhR"),j=r.n(M),w=r("MhPg"),v=r.n(w),q=(r("5NDa"),r("5rEg")),x=r("q1tI"),k=r.n(x),C=r("MuoO"),E=r("LLXN"),I=r("wd/R"),R=r.n(I),S=q["a"].Search,K=(a=Object(C["connect"])(function(e){var t=e.shop,r=e.loading;return{shop:t,loading:r.effects["shop/queryOrder"]}}),a((n=function(e){function t(){var e,r;m()(this,t);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return r=b()(this,(e=O()(t)).call.apply(e,[this].concat(o))),r.state={selectedRowKeys:[]},r.query={id:null,size:null,page:null,sort:null},r.list={remove:function(e){return function(){var t=r.props.dispatch;t({type:"shop/deleteOrder",payload:{params:{id:e}},addon:r.query})}}},r.table={remove:function(e){return function(){var t="all"===e?Object(E["formatMessage"])({id:"shop.delete.order.tips.all"}):Object(E["formatMessage"])({id:"shop.delete.order.tips.batch"});u["a"].confirm({title:Object(E["formatMessage"])({id:"shop.delete.order"}),content:t,okText:Object(E["formatMessage"])({id:"common.confirm"}),cancelText:Object(E["formatMessage"])({id:"common.cancel"}),onOk:function(){r.deleteBatch(e),r.setState({selectedRowKeys:[]})}})}}},r.deleteBatch=function(e){var t=r.props.dispatch,a=r.state.selectedRowKeys;t({type:"shop/deleteOrderBatch",payload:{data:{type:e,list:a}},addon:r.query})},r.onSearchOrder=function(e){r.query.id=e,r.queryOrder()},r.onChangeTable=function(e,t,a){var o=e.current,n=e.pageSize,s=null;if(a.order){var d="descend"===a.order?"-":"",c=a.field;s="".concat(d).concat(c)}r.query={size:n,page:o,sort:s},r.queryOrder()},r.queryOrder=function(){var e=j()(r),t=e.query,a=r.props.dispatch;a({type:"shop/queryOrder",payload:{query:t}})},r}return v()(t,e),f()(t,[{key:"componentDidMount",value:function(){this.queryOrder()}},{key:"render",value:function(){var e=this,t=this.state.selectedRowKeys,r=this.props,a=r.shop.order,o=a.list,n=a.total,u=r.loading,p=[{title:Object(E["formatMessage"])({id:"shop.order"}),dataIndex:"_id",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.title"}),dataIndex:"shop.title",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.price"}),dataIndex:"shop.price",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.introduce"}),dataIndex:"shop.introduce",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.user.name"}),dataIndex:"user.name",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.user.email"}),dataIndex:"user.email",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.user.level"}),dataIndex:"user.level",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.order.user.expired"}),dataIndex:"user.expired",sorter:!0},{title:Object(E["formatMessage"])({id:"shop.createdAt"}),dataIndex:"createdAt",sorter:!0,render:function(e){return R()(e).format("YYYY-MM-DD HH:mm:ss")}},{title:Object(E["formatMessage"])({id:"shop.option"}),key:"action",dataIndex:"_id",width:150,render:function(t){return k.a.createElement("a",{onClick:e.list.remove(t)},Object(E["formatMessage"])({id:"common.delete"}))}}],m={selectedRowKeys:t,onChange:function(t){e.setState({selectedRowKeys:t})}},h={showSizeChanger:!0,showQuickJumper:!0,total:n,showTotal:function(e){return"".concat(Object(E["formatMessage"])({id:"common.all.total"})," ").concat(e," ").concat(Object(E["formatMessage"])({id:"common.all.item"}))}};return k.a.createElement(s["a"],{className:"tableList",bordered:!1},k.a.createElement(c["a"],{className:"head"},k.a.createElement(l["a"],{span:16},k.a.createElement(i["a"],{type:"danger",onClick:this.table.remove("all"),style:{backgroundColor:"#f5222d",borderColor:"#f5222d",color:"white"}},Object(E["formatMessage"])({id:"common.delete.all"})),t.length>0&&k.a.createElement(i["a"],{onClick:this.table.remove("batch")},Object(E["formatMessage"])({id:"common.delete.batch"}))),k.a.createElement(l["a"],{span:8},k.a.createElement(S,{placeholder:Object(E["formatMessage"])({id:"shop.search.order"}),onSearch:this.onSearchOrder,enterButton:!0}))),k.a.createElement(c["a"],null,k.a.createElement(d["a"],{className:"longTable",loading:u,rowKey:"_id",rowSelection:m,columns:p,onChange:this.onChangeTable,dataSource:o,pagination:h})))}}]),t}(x["Component"]),o=n))||o);t["default"]=K}}]);