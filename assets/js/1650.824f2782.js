"use strict";(self.webpackChunkbeacon_docs=self.webpackChunkbeacon_docs||[]).push([[1650],{71650:(t,e,a)=>{a.d(e,{diagram:()=>b});var r=a(82207),i=a(57323),n=a(64994),d=a(20007),o=a(62334),s=a(697),l=0,p=(0,n.K2)((function(t,e,a,r,o){const s=(0,n.K2)((function(t){switch(t){case o.db.relationType.AGGREGATION:return"aggregation";case o.db.relationType.EXTENSION:return"extension";case o.db.relationType.COMPOSITION:return"composition";case o.db.relationType.DEPENDENCY:return"dependency";case o.db.relationType.LOLLIPOP:return"lollipop"}}),"getRelationType");e.points=e.points.filter((t=>!Number.isNaN(t.y)));const p=e.points,c=(0,d.n8j)().x((function(t){return t.x})).y((function(t){return t.y})).curve(d.qrM),g=t.append("path").attr("d",c(p)).attr("id","edge"+l).attr("class","relation");let h,f,x="";r.arrowMarkerAbsolute&&(x=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,x=x.replace(/\(/g,"\\("),x=x.replace(/\)/g,"\\)")),1==a.relation.lineType&&g.attr("class","relation dashed-line"),10==a.relation.lineType&&g.attr("class","relation dotted-line"),"none"!==a.relation.type1&&g.attr("marker-start","url("+x+"#"+s(a.relation.type1)+"Start)"),"none"!==a.relation.type2&&g.attr("marker-end","url("+x+"#"+s(a.relation.type2)+"End)");const y=e.points.length;let u,m,w,b,k=i._K.calcLabelPosition(e.points);if(h=k.x,f=k.y,y%2!=0&&y>1){let t=i._K.calcCardinalityPosition("none"!==a.relation.type1,e.points,e.points[0]),r=i._K.calcCardinalityPosition("none"!==a.relation.type2,e.points,e.points[y-1]);n.Rm.debug("cardinality_1_point "+JSON.stringify(t)),n.Rm.debug("cardinality_2_point "+JSON.stringify(r)),u=t.x,m=t.y,w=r.x,b=r.y}if(void 0!==a.title){const e=t.append("g").attr("class","classLabel"),i=e.append("text").attr("class","label").attr("x",h).attr("y",f).attr("fill","red").attr("text-anchor","middle").text(a.title);window.label=i;const n=i.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-r.padding/2).attr("y",n.y-r.padding/2).attr("width",n.width+r.padding).attr("height",n.height+r.padding)}if(n.Rm.info("Rendering relation "+JSON.stringify(a)),void 0!==a.relationTitle1&&"none"!==a.relationTitle1){t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",u).attr("y",m).attr("fill","black").attr("font-size","6").text(a.relationTitle1)}if(void 0!==a.relationTitle2&&"none"!==a.relationTitle2){t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",w).attr("y",b).attr("fill","black").attr("font-size","6").text(a.relationTitle2)}l++}),"drawEdge"),c=(0,n.K2)((function(t,e,a,r){n.Rm.debug("Rendering class ",e,a);const i=e.id,d={id:i,label:e.id,width:0,height:0},o=t.append("g").attr("id",r.db.lookUpDomId(i)).attr("class","classGroup");let s;s=e.link?o.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",a.textHeight+a.padding).attr("x",0):o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);let l=!0;e.annotations.forEach((function(t){const e=s.append("tspan").text("\xab"+t+"\xbb");l||e.attr("dy",a.textHeight),l=!1}));let p=g(e);const c=s.append("tspan").text(p).attr("class","title");l||c.attr("dy",a.textHeight);const h=s.node().getBBox().height;let x,y,u;if(e.members.length>0){x=o.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin/2).attr("y2",a.padding+h+a.dividerMargin/2);const t=o.append("text").attr("x",a.padding).attr("y",h+a.dividerMargin+a.textHeight).attr("fill","white").attr("class","classText");l=!0,e.members.forEach((function(e){f(t,e,l,a),l=!1})),y=t.node().getBBox()}if(e.methods.length>0){u=o.append("line").attr("x1",0).attr("y1",a.padding+h+a.dividerMargin+y.height).attr("y2",a.padding+h+a.dividerMargin+y.height);const t=o.append("text").attr("x",a.padding).attr("y",h+2*a.dividerMargin+y.height+a.textHeight).attr("fill","white").attr("class","classText");l=!0,e.methods.forEach((function(e){f(t,e,l,a),l=!1}))}const m=o.node().getBBox();var w=" ";e.cssClasses.length>0&&(w+=e.cssClasses.join(" "));const b=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*a.padding).attr("height",m.height+a.padding+.5*a.dividerMargin).attr("class",w).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(b-t.getBBox().width)/2)})),e.tooltip&&s.insert("title").text(e.tooltip),x&&x.attr("x2",b),u&&u.attr("x2",b),d.width=b,d.height=m.height+a.padding+.5*a.dividerMargin,d}),"drawClass"),g=(0,n.K2)((function(t){let e=t.id;return t.type&&(e+="<"+(0,n.QO)(t.type)+">"),e}),"getClassTitleString"),h=(0,n.K2)((function(t,e,a,r){n.Rm.debug("Rendering note ",e,a);const i=e.id,d={id:i,text:e.text,width:0,height:0},o=t.append("g").attr("id",i).attr("class","classGroup");let s=o.append("text").attr("y",a.textHeight+a.padding).attr("x",0);const l=JSON.parse(`"${e.text}"`).split("\n");l.forEach((function(t){n.Rm.debug(`Adding line: ${t}`),s.append("tspan").text(t).attr("class","title").attr("dy",a.textHeight)}));const p=o.node().getBBox(),c=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",p.width+2*a.padding).attr("height",p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin).node().getBBox().width;return s.node().childNodes.forEach((function(t){t.setAttribute("x",(c-t.getBBox().width)/2)})),d.width=c,d.height=p.height+l.length*a.textHeight+a.padding+.5*a.dividerMargin,d}),"drawNote"),f=(0,n.K2)((function(t,e,a,r){const{displayText:i,cssStyle:n}=e.getDisplayDetails(),d=t.append("tspan").attr("x",r.padding).text(i);""!==n&&d.attr("style",e.cssStyle),a||d.attr("dy",r.textHeight)}),"addTspan"),x={getClassTitleString:g,drawClass:c,drawEdge:p,drawNote:h},y={},u=(0,n.K2)((function(t){const e=Object.entries(y).find((e=>e[1].label===t));if(e)return e[0]}),"getGraphId"),m=(0,n.K2)((function(t){t.append("defs").append("marker").attr("id","extensionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id","extensionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z"),t.append("defs").append("marker").attr("id","compositionStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","compositionEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","aggregationEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyStart").attr("class","extension").attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")}),"insertMarkers"),w={draw:(0,n.K2)((function(t,e,a,r){const i=(0,n.D7)().class;y={},n.Rm.info("Rendering diagram "+t);const l=(0,n.D7)().securityLevel;let p;"sandbox"===l&&(p=(0,d.Ltv)("#i"+e));const c="sandbox"===l?(0,d.Ltv)(p.nodes()[0].contentDocument.body):(0,d.Ltv)("body"),g=c.select(`[id='${e}']`);m(g);const h=new s.T({multigraph:!0});h.setGraph({isMultiGraph:!0}),h.setDefaultEdgeLabel((function(){return{}}));const f=r.db.getClasses(),w=[...f.keys()];for(const d of w){const t=f.get(d),e=x.drawClass(g,t,i,r);y[e.id]=e,h.setNode(e.id,e),n.Rm.info("Org height: "+e.height)}r.db.getRelations().forEach((function(t){n.Rm.info("tjoho"+u(t.id1)+u(t.id2)+JSON.stringify(t)),h.setEdge(u(t.id1),u(t.id2),{relation:t},t.title||"DEFAULT")}));r.db.getNotes().forEach((function(t){n.Rm.debug(`Adding note: ${JSON.stringify(t)}`);const e=x.drawNote(g,t,i,r);y[e.id]=e,h.setNode(e.id,e),t.class&&f.has(t.class)&&h.setEdge(t.id,u(t.class),{relation:{id1:t.id,id2:t.class,relation:{type1:"none",type2:"none",lineType:10}}},"DEFAULT")})),(0,o.Zp)(h),h.nodes().forEach((function(t){void 0!==t&&void 0!==h.node(t)&&(n.Rm.debug("Node "+t+": "+JSON.stringify(h.node(t))),c.select("#"+(r.db.lookUpDomId(t)||t)).attr("transform","translate("+(h.node(t).x-h.node(t).width/2)+","+(h.node(t).y-h.node(t).height/2)+" )"))})),h.edges().forEach((function(t){void 0!==t&&void 0!==h.edge(t)&&(n.Rm.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(h.edge(t))),x.drawEdge(g,h.edge(t),h.edge(t).relation,i,r))}));const b=g.node().getBBox(),k=b.width+40,L=b.height+40;(0,n.a$)(g,L,k,i.useMaxWidth);const E=`${b.x-20} ${b.y-20} ${k} ${L}`;n.Rm.debug(`viewBox ${E}`),g.attr("viewBox",E)}),"draw")},b={parser:r._$,db:r.z2,renderer:w,styles:r.tM,init:(0,n.K2)((t=>{t.class||(t.class={}),t.class.arrowMarkerAbsolute=t.arrowMarkerAbsolute,r.z2.clear()}),"init")}}}]);