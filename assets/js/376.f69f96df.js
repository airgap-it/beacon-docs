"use strict";
exports.id = 376;
exports.ids = [376];
exports.modules = {

/***/ 75937:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72453);
/* harmony import */ var _color_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74886);
/* IMPORT */


/* MAIN */
const channel = (color, channel) => {
    return _utils_index_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.lang.round(_color_index_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.parse(color)[channel]);
};
/* EXPORT */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (channel);


/***/ }),

/***/ 36151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getDiagramElement),
/* harmony export */   P: () => (/* binding */ setupViewPortForSVG)
/* harmony export */ });
/* harmony import */ var _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64994);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20007);


// src/rendering-util/insertElementsForSize.js

var getDiagramElement = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)((id, securityLevel) => {
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)(sandboxElement.nodes()[0].contentDocument.body) : (0,d3__WEBPACK_IMPORTED_MODULE_1__/* .select */ .Ltv)("body");
  const svg = root.select(`[id="${id}"]`);
  return svg;
}, "getDiagramElement");

// src/rendering-util/setupViewPortForSVG.ts
var setupViewPortForSVG = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)((svg, padding, cssDiagram, useMaxWidth) => {
  svg.attr("class", cssDiagram);
  const { width, height, x, y } = calculateDimensionsWithPadding(svg, padding);
  (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .configureSvgSize */ .a$)(svg, height, width, useMaxWidth);
  const viewBox = createViewBox(x, y, width, height, padding);
  svg.attr("viewBox", viewBox);
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .log */ .Rm.debug(`viewBox configured: ${viewBox} with padding: ${padding}`);
}, "setupViewPortForSVG");
var calculateDimensionsWithPadding = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)((svg, padding) => {
  const bounds = svg.node()?.getBBox() || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: bounds.width + padding * 2,
    height: bounds.height + padding * 2,
    x: bounds.x,
    y: bounds.y
  };
}, "calculateDimensionsWithPadding");
var createViewBox = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_0__/* .__name */ .K2)((x, y, width, height, padding) => {
  return `${x - padding} ${y - padding} ${width} ${height}`;
}, "createViewBox");




/***/ }),

/***/ 46578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DA: () => (/* binding */ createLabel_default),
/* harmony export */   IU: () => (/* binding */ clear),
/* harmony export */   U7: () => (/* binding */ setNodeElem),
/* harmony export */   U_: () => (/* binding */ positionNode),
/* harmony export */   lC: () => (/* binding */ updateNodeBounds),
/* harmony export */   nM: () => (/* binding */ intersect_rect_default),
/* harmony export */   on: () => (/* binding */ insertNode)
/* harmony export */ });
/* harmony import */ var _chunk_OERGPBFJ_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67895);
/* harmony import */ var _chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57323);
/* harmony import */ var _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64994);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20007);




// src/dagre-wrapper/createLabel.js

function applyStyle(dom, styleFn) {
  if (styleFn) {
    dom.attr("style", styleFn);
  }
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(applyStyle, "applyStyle");
function addHtmlLabel(node) {
  const fo = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject"));
  const div = fo.append("xhtml:div");
  const label = node.label;
  const labelClass = node.isNode ? "nodeLabel" : "edgeLabel";
  const span = div.append("span");
  span.html(label);
  applyStyle(span, node.labelStyle);
  span.attr("class", labelClass);
  applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");
  return fo.node();
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(addHtmlLabel, "addHtmlLabel");
var createLabel = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((_vertexText, style, isTitle, isNode) => {
  let vertexText = _vertexText || "";
  if (typeof vertexText === "object") {
    vertexText = vertexText[0];
  }
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
    vertexText = vertexText.replace(/\\n|\n/g, "<br />");
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("vertexText" + vertexText);
    const node = {
      isNode,
      label: (0,_chunk_OERGPBFJ_mjs__WEBPACK_IMPORTED_MODULE_0__/* .replaceIconSubstring */ .hE)((0,_chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_1__/* .decodeEntities */ .Sm)(vertexText)),
      labelStyle: style.replace("fill:", "color:")
    };
    let vertexNode = addHtmlLabel(node);
    return vertexNode;
  } else {
    const svgLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    svgLabel.setAttribute("style", style.replace("color:", "fill:"));
    let rows = [];
    if (typeof vertexText === "string") {
      rows = vertexText.split(/\\n|\n|<br\s*\/?>/gi);
    } else if (Array.isArray(vertexText)) {
      rows = vertexText;
    } else {
      rows = [];
    }
    for (const row of rows) {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
      tspan.setAttribute("dy", "1em");
      tspan.setAttribute("x", "0");
      if (isTitle) {
        tspan.setAttribute("class", "title-row");
      } else {
        tspan.setAttribute("class", "row");
      }
      tspan.textContent = row.trim();
      svgLabel.appendChild(tspan);
    }
    return svgLabel;
  }
}, "createLabel");
var createLabel_default = createLabel;

// src/dagre-wrapper/shapes/util.js

var labelHelper = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node, _classes, isNode) => {
  const config = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)();
  let classes;
  const useHtmlLabels = node.useHtmlLabels || (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)(config.flowchart.htmlLabels);
  if (!_classes) {
    classes = "node default";
  } else {
    classes = _classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const label = shapeSvg.insert("g").attr("class", "label").attr("style", node.labelStyle);
  let labelText;
  if (node.labelText === void 0) {
    labelText = "";
  } else {
    labelText = typeof node.labelText === "string" ? node.labelText : node.labelText[0];
  }
  const textNode = label.node();
  let text;
  if (node.labelType === "markdown") {
    text = (0,_chunk_OERGPBFJ_mjs__WEBPACK_IMPORTED_MODULE_0__/* .createText */ .GZ)(
      label,
      (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sanitizeText */ .jZ)((0,_chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_1__/* .decodeEntities */ .Sm)(labelText), config),
      {
        useHtmlLabels,
        width: node.width || config.flowchart.wrappingWidth,
        classes: "markdown-node-label"
      },
      config
    );
  } else {
    text = textNode.appendChild(
      createLabel_default((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .sanitizeText */ .jZ)((0,_chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_1__/* .decodeEntities */ .Sm)(labelText), config), node.labelStyle, false, isNode)
    );
  }
  let bbox = text.getBBox();
  const halfPadding = node.padding / 2;
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)(config.flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(text);
    const images = div.getElementsByTagName("img");
    if (images) {
      const noImgText = labelText.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...images].map(
          (img) => new Promise((res) => {
            function setupImage() {
              img.style.display = "flex";
              img.style.flexDirection = "column";
              if (noImgText) {
                const bodyFontSize = config.fontSize ? config.fontSize : window.getComputedStyle(document.body).fontSize;
                const enlargingFactor = 5;
                const width = parseInt(bodyFontSize, 10) * enlargingFactor + "px";
                img.style.minWidth = width;
                img.style.maxWidth = width;
              } else {
                img.style.width = "100%";
              }
              res(img);
            }
            (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(setupImage, "setupImage");
            setTimeout(() => {
              if (img.complete) {
                setupImage();
              }
            });
            img.addEventListener("error", setupImage);
            img.addEventListener("load", setupImage);
          })
        )
      );
    }
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  if (useHtmlLabels) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  } else {
    label.attr("transform", "translate(0, " + -bbox.height / 2 + ")");
  }
  if (node.centerLabel) {
    label.attr("transform", "translate(" + -bbox.width / 2 + ", " + -bbox.height / 2 + ")");
  }
  label.insert("rect", ":first-child");
  return { shapeSvg, bbox, halfPadding, label };
}, "labelHelper");
var updateNodeBounds = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((node, element) => {
  const bbox = element.node().getBBox();
  node.width = bbox.width;
  node.height = bbox.height;
}, "updateNodeBounds");
function insertPolygonShape(parent, w, h, points) {
  return parent.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -w / 2 + "," + h / 2 + ")");
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(insertPolygonShape, "insertPolygonShape");

// src/dagre-wrapper/nodes.js


// src/dagre-wrapper/blockArrowHelper.ts
var expandAndDeduplicateDirections = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((directions) => {
  const uniqueDirections = /* @__PURE__ */ new Set();
  for (const direction of directions) {
    switch (direction) {
      case "x":
        uniqueDirections.add("right");
        uniqueDirections.add("left");
        break;
      case "y":
        uniqueDirections.add("up");
        uniqueDirections.add("down");
        break;
      default:
        uniqueDirections.add(direction);
        break;
    }
  }
  return uniqueDirections;
}, "expandAndDeduplicateDirections");
var getArrowPoints = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((duplicatedDirections, bbox, node) => {
  const directions = expandAndDeduplicateDirections(duplicatedDirections);
  const f = 2;
  const height = bbox.height + 2 * node.padding;
  const midpoint = height / f;
  const width = bbox.width + 2 * midpoint + node.padding;
  const padding = node.padding / 2;
  if (directions.has("right") && directions.has("left") && directions.has("up") && directions.has("down")) {
    return [
      // Bottom
      { x: 0, y: 0 },
      { x: midpoint, y: 0 },
      { x: width / 2, y: 2 * padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: 0 },
      // Right
      { x: width, y: -height / 3 },
      { x: width + 2 * padding, y: -height / 2 },
      { x: width, y: -2 * height / 3 },
      { x: width, y: -height },
      // Top
      { x: width - midpoint, y: -height },
      { x: width / 2, y: -height - 2 * padding },
      { x: midpoint, y: -height },
      // Left
      { x: 0, y: -height },
      { x: 0, y: -2 * height / 3 },
      { x: -2 * padding, y: -height / 2 },
      { x: 0, y: -height / 3 }
    ];
  }
  if (directions.has("right") && directions.has("left") && directions.has("up")) {
    return [
      { x: midpoint, y: 0 },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("right") && directions.has("left") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: midpoint, y: -height },
      { x: width - midpoint, y: -height },
      { x: width, y: 0 }
    ];
  }
  if (directions.has("right") && directions.has("up") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: -midpoint },
      { x: width, y: -height + midpoint },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("up") && directions.has("down")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: -midpoint },
      { x: 0, y: -height + midpoint },
      { x: width, y: -height }
    ];
  }
  if (directions.has("right") && directions.has("left")) {
    return [
      { x: midpoint, y: 0 },
      { x: midpoint, y: -padding },
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: width - midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("up") && directions.has("down")) {
    return [
      // Bottom center
      { x: width / 2, y: 0 },
      // Left pont of bottom arrow
      { x: 0, y: -padding },
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: 0, y: -height + padding },
      // Top of arrow
      { x: width / 2, y: -height },
      { x: width, y: -height + padding },
      // Top of right vertical bar
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding },
      { x: width, y: -padding }
    ];
  }
  if (directions.has("right") && directions.has("up")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: -midpoint },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("right") && directions.has("down")) {
    return [
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: 0, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("up")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: -midpoint },
      { x: width, y: -height }
    ];
  }
  if (directions.has("left") && directions.has("down")) {
    return [
      { x: width, y: 0 },
      { x: 0, y: 0 },
      { x: width, y: -height }
    ];
  }
  if (directions.has("right")) {
    return [
      { x: midpoint, y: -padding },
      { x: midpoint, y: -padding },
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: 0 },
      { x: width, y: -height / 2 },
      { x: width - midpoint, y: -height },
      { x: width - midpoint, y: -height + padding },
      // top left corner of arrow
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding }
    ];
  }
  if (directions.has("left")) {
    return [
      { x: midpoint, y: 0 },
      { x: midpoint, y: -padding },
      // Two points, the right corners
      { x: width - midpoint, y: -padding },
      { x: width - midpoint, y: -height + padding },
      { x: midpoint, y: -height + padding },
      { x: midpoint, y: -height },
      { x: 0, y: -height / 2 }
    ];
  }
  if (directions.has("up")) {
    return [
      // Bottom center
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: 0, y: -height + padding },
      // Top of arrow
      { x: width / 2, y: -height },
      { x: width, y: -height + padding },
      // Top of right vertical bar
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding }
    ];
  }
  if (directions.has("down")) {
    return [
      // Bottom center
      { x: width / 2, y: 0 },
      // Left pont of bottom arrow
      { x: 0, y: -padding },
      { x: midpoint, y: -padding },
      // Left top over vertical section
      { x: midpoint, y: -height + padding },
      { x: width - midpoint, y: -height + padding },
      { x: width - midpoint, y: -padding },
      { x: width, y: -padding }
    ];
  }
  return [{ x: 0, y: 0 }];
}, "getArrowPoints");

// src/dagre-wrapper/intersect/intersect-node.js
function intersectNode(node, point) {
  return node.intersect(point);
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(intersectNode, "intersectNode");
var intersect_node_default = intersectNode;

// src/dagre-wrapper/intersect/intersect-ellipse.js
function intersectEllipse(node, rx, ry, point) {
  var cx = node.x;
  var cy = node.y;
  var px = cx - point.x;
  var py = cy - point.y;
  var det = Math.sqrt(rx * rx * py * py + ry * ry * px * px);
  var dx = Math.abs(rx * ry * px / det);
  if (point.x < cx) {
    dx = -dx;
  }
  var dy = Math.abs(rx * ry * py / det);
  if (point.y < cy) {
    dy = -dy;
  }
  return { x: cx + dx, y: cy + dy };
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(intersectEllipse, "intersectEllipse");
var intersect_ellipse_default = intersectEllipse;

// src/dagre-wrapper/intersect/intersect-circle.js
function intersectCircle(node, rx, point) {
  return intersect_ellipse_default(node, rx, rx, point);
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(intersectCircle, "intersectCircle");
var intersect_circle_default = intersectCircle;

// src/dagre-wrapper/intersect/intersect-line.js
function intersectLine(p1, p2, q1, q2) {
  var a1, a2, b1, b2, c1, c2;
  var r1, r2, r3, r4;
  var denom, offset, num;
  var x, y;
  a1 = p2.y - p1.y;
  b1 = p1.x - p2.x;
  c1 = p2.x * p1.y - p1.x * p2.y;
  r3 = a1 * q1.x + b1 * q1.y + c1;
  r4 = a1 * q2.x + b1 * q2.y + c1;
  if (r3 !== 0 && r4 !== 0 && sameSign(r3, r4)) {
    return;
  }
  a2 = q2.y - q1.y;
  b2 = q1.x - q2.x;
  c2 = q2.x * q1.y - q1.x * q2.y;
  r1 = a2 * p1.x + b2 * p1.y + c2;
  r2 = a2 * p2.x + b2 * p2.y + c2;
  if (r1 !== 0 && r2 !== 0 && sameSign(r1, r2)) {
    return;
  }
  denom = a1 * b2 - a2 * b1;
  if (denom === 0) {
    return;
  }
  offset = Math.abs(denom / 2);
  num = b1 * c2 - b2 * c1;
  x = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  num = a2 * c1 - a1 * c2;
  y = num < 0 ? (num - offset) / denom : (num + offset) / denom;
  return { x, y };
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(intersectLine, "intersectLine");
function sameSign(r1, r2) {
  return r1 * r2 > 0;
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(sameSign, "sameSign");
var intersect_line_default = intersectLine;

// src/dagre-wrapper/intersect/intersect-polygon.js
var intersect_polygon_default = intersectPolygon;
function intersectPolygon(node, polyPoints, point) {
  var x1 = node.x;
  var y1 = node.y;
  var intersections = [];
  var minX = Number.POSITIVE_INFINITY;
  var minY = Number.POSITIVE_INFINITY;
  if (typeof polyPoints.forEach === "function") {
    polyPoints.forEach(function(entry) {
      minX = Math.min(minX, entry.x);
      minY = Math.min(minY, entry.y);
    });
  } else {
    minX = Math.min(minX, polyPoints.x);
    minY = Math.min(minY, polyPoints.y);
  }
  var left = x1 - node.width / 2 - minX;
  var top = y1 - node.height / 2 - minY;
  for (var i = 0; i < polyPoints.length; i++) {
    var p1 = polyPoints[i];
    var p2 = polyPoints[i < polyPoints.length - 1 ? i + 1 : 0];
    var intersect = intersect_line_default(
      node,
      point,
      { x: left + p1.x, y: top + p1.y },
      { x: left + p2.x, y: top + p2.y }
    );
    if (intersect) {
      intersections.push(intersect);
    }
  }
  if (!intersections.length) {
    return node;
  }
  if (intersections.length > 1) {
    intersections.sort(function(p, q) {
      var pdx = p.x - point.x;
      var pdy = p.y - point.y;
      var distp = Math.sqrt(pdx * pdx + pdy * pdy);
      var qdx = q.x - point.x;
      var qdy = q.y - point.y;
      var distq = Math.sqrt(qdx * qdx + qdy * qdy);
      return distp < distq ? -1 : distp === distq ? 0 : 1;
    });
  }
  return intersections[0];
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(intersectPolygon, "intersectPolygon");

// src/dagre-wrapper/intersect/intersect-rect.js
var intersectRect = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((node, point) => {
  var x = node.x;
  var y = node.y;
  var dx = point.x - x;
  var dy = point.y - y;
  var w = node.width / 2;
  var h = node.height / 2;
  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    if (dy < 0) {
      h = -h;
    }
    sx = dy === 0 ? 0 : h * dx / dy;
    sy = h;
  } else {
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = dx === 0 ? 0 : w * dy / dx;
  }
  return { x: x + sx, y: y + sy };
}, "intersectRect");
var intersect_rect_default = intersectRect;

// src/dagre-wrapper/intersect/index.js
var intersect_default = {
  node: intersect_node_default,
  circle: intersect_circle_default,
  ellipse: intersect_ellipse_default,
  polygon: intersect_polygon_default,
  rect: intersect_rect_default
};

// src/dagre-wrapper/shapes/note.js
var note = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const useHtmlLabels = node.useHtmlLabels || (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels;
  if (!useHtmlLabels) {
    node.centerLabel = true;
  }
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes,
    true
  );
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Classes = ", node.classes);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  rect2.attr("rx", node.rx).attr("ry", node.ry).attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "note");
var note_default = note;

// src/dagre-wrapper/nodes.js
var formatClass = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((str) => {
  if (str) {
    return " " + str;
  }
  return "";
}, "formatClass");
var getClassesFromNode = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((node, otherClasses) => {
  return `${otherClasses ? otherClasses : "node default"}${formatClass(node.classes)} ${formatClass(
    node.class
  )}`;
}, "getClassesFromNode");
var question = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const s = w + h;
  const points = [
    { x: s / 2, y: 0 },
    { x: s, y: -s / 2 },
    { x: s / 2, y: -s },
    { x: 0, y: -s / 2 }
  ];
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Question main (Circle)");
  const questionElem = insertPolygonShape(shapeSvg, s, s, points);
  questionElem.attr("style", node.style);
  updateNodeBounds(node, questionElem);
  node.intersect = function(point) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.warn("Intersect called");
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "question");
var choice = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const s = 28;
  const points = [
    { x: 0, y: s / 2 },
    { x: s / 2, y: 0 },
    { x: 0, y: -s / 2 },
    { x: -s / 2, y: 0 }
  ];
  const choice2 = shapeSvg.insert("polygon", ":first-child").attr(
    "points",
    points.map(function(d) {
      return d.x + "," + d.y;
    }).join(" ")
  );
  choice2.attr("class", "state-start").attr("r", 7).attr("width", 28).attr("height", 28);
  node.width = 28;
  node.height = 28;
  node.intersect = function(point) {
    return intersect_default.circle(node, 14, point);
  };
  return shapeSvg;
}, "choice");
var hexagon = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const f = 4;
  const h = bbox.height + node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = [
    { x: m, y: 0 },
    { x: w - m, y: 0 },
    { x: w, y: -h / 2 },
    { x: w - m, y: -h },
    { x: m, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const hex = insertPolygonShape(shapeSvg, w, h, points);
  hex.attr("style", node.style);
  updateNodeBounds(node, hex);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "hexagon");
var block_arrow = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(parent, node, void 0, true);
  const f = 2;
  const h = bbox.height + 2 * node.padding;
  const m = h / f;
  const w = bbox.width + 2 * m + node.padding;
  const points = getArrowPoints(node.directions, bbox, node);
  const blockArrow = insertPolygonShape(shapeSvg, w, h, points);
  blockArrow.attr("style", node.style);
  updateNodeBounds(node, blockArrow);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "block_arrow");
var rect_left_inv_arrow = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -h / 2, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: -h / 2, y: -h },
    { x: 0, y: -h / 2 }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  node.width = w + h;
  node.height = h;
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "rect_left_inv_arrow");
var lean_right = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(parent, node, getClassesFromNode(node), true);
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "lean_right");
var lean_left = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 2 * h / 6, y: 0 },
    { x: w + h / 6, y: 0 },
    { x: w - 2 * h / 6, y: -h },
    { x: -h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "lean_left");
var trapezoid = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: -2 * h / 6, y: 0 },
    { x: w + 2 * h / 6, y: 0 },
    { x: w - h / 6, y: -h },
    { x: h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "trapezoid");
var inv_trapezoid = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: h / 6, y: 0 },
    { x: w - h / 6, y: 0 },
    { x: w + 2 * h / 6, y: -h },
    { x: -2 * h / 6, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "inv_trapezoid");
var rect_right_inv_arrow = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 0, y: 0 },
    { x: w + h / 2, y: 0 },
    { x: w, y: -h / 2 },
    { x: w + h / 2, y: -h },
    { x: 0, y: -h }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "rect_right_inv_arrow");
var cylinder = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const rx = w / 2;
  const ry = rx / (2.5 + w / 50);
  const h = bbox.height + ry + node.padding;
  const shape = "M 0," + ry + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 a " + rx + "," + ry + " 0,0,0 " + -w + " 0 l 0," + h + " a " + rx + "," + ry + " 0,0,0 " + w + " 0 l 0," + -h;
  const el = shapeSvg.attr("label-offset-y", ry).insert("path", ":first-child").attr("style", node.style).attr("d", shape).attr("transform", "translate(" + -w / 2 + "," + -(h / 2 + ry) + ")");
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    const pos = intersect_default.rect(node, point);
    const x = pos.x - node.x;
    if (rx != 0 && (Math.abs(x) < node.width / 2 || Math.abs(x) == node.width / 2 && Math.abs(pos.y - node.y) > node.height / 2 - ry)) {
      let y = ry * ry * (1 - x * x / (rx * rx));
      if (y != 0) {
        y = Math.sqrt(y);
      }
      y = ry - y;
      if (point.y - node.y > 0) {
        y = -y;
      }
      pos.y += y;
    }
    return pos;
  };
  return shapeSvg;
}, "cylinder");
var rect = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes + " " + node.class,
    true
  );
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
  const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
  const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
  const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
  rect2.attr("class", "basic label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "rect");
var composite = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    "node " + node.classes,
    true
  );
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = node.positioned ? node.width : bbox.width + node.padding;
  const totalHeight = node.positioned ? node.height : bbox.height + node.padding;
  const x = node.positioned ? -totalWidth / 2 : -bbox.width / 2 - halfPadding;
  const y = node.positioned ? -totalHeight / 2 : -bbox.height / 2 - halfPadding;
  rect2.attr("class", "basic cluster composite label-container").attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("x", x).attr("y", y).attr("width", totalWidth).attr("height", totalHeight);
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "composite");
var labelRect = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg } = await labelHelper(parent, node, "label", true);
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.trace("Classes = ", node.class);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const totalWidth = 0;
  const totalHeight = 0;
  rect2.attr("width", totalWidth).attr("height", totalHeight);
  shapeSvg.attr("class", "label edgeLabel");
  if (node.props) {
    const propKeys = new Set(Object.keys(node.props));
    if (node.props.borders) {
      applyNodePropertyBorders(rect2, node.props.borders, totalWidth, totalHeight);
      propKeys.delete("borders");
    }
    propKeys.forEach((propKey) => {
      _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.warn(`Unknown node property ${propKey}`);
    });
  }
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "labelRect");
function applyNodePropertyBorders(rect2, borders, totalWidth, totalHeight) {
  const strokeDashArray = [];
  const addBorder = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((length) => {
    strokeDashArray.push(length, 0);
  }, "addBorder");
  const skipBorder = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((length) => {
    strokeDashArray.push(0, length);
  }, "skipBorder");
  if (borders.includes("t")) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("add top border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("r")) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("add right border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  if (borders.includes("b")) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("add bottom border");
    addBorder(totalWidth);
  } else {
    skipBorder(totalWidth);
  }
  if (borders.includes("l")) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.debug("add left border");
    addBorder(totalHeight);
  } else {
    skipBorder(totalHeight);
  }
  rect2.attr("stroke-dasharray", strokeDashArray.join(" "));
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(applyNodePropertyBorders, "applyNodePropertyBorders");
var rectWithTitle = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node) => {
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const innerLine = shapeSvg.insert("line");
  const label = shapeSvg.insert("g").attr("class", "label");
  const text2 = node.labelText.flat ? node.labelText.flat() : node.labelText;
  let title = "";
  if (typeof text2 === "object") {
    title = text2[0];
  } else {
    title = text2;
  }
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Label text abc79", title, text2, typeof text2 === "object");
  const text = label.node().appendChild(createLabel_default(title, node.labelStyle, true, true));
  let bbox = { width: 0, height: 0 };
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
    const div = text.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(text);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Text 2", text2);
  const textRows = text2.slice(1, text2.length);
  let titleBox = text.getBBox();
  const descr = label.node().appendChild(
    createLabel_default(textRows.join ? textRows.join("<br/>") : textRows, node.labelStyle, true, true)
  );
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
    const div = descr.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(descr);
    bbox = div.getBoundingClientRect();
    dv.attr("width", bbox.width);
    dv.attr("height", bbox.height);
  }
  const halfPadding = node.padding / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(descr).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width > titleBox.width ? 0 : (titleBox.width - bbox.width) / 2) + ", " + (titleBox.height + halfPadding + 5) + ")"
  );
  (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(text).attr(
    "transform",
    "translate( " + // (titleBox.width - bbox.width) / 2 +
    (bbox.width < titleBox.width ? 0 : -(titleBox.width - bbox.width) / 2) + ", 0)"
  );
  bbox = label.node().getBBox();
  label.attr(
    "transform",
    "translate(" + -bbox.width / 2 + ", " + (-bbox.height / 2 - halfPadding + 3) + ")"
  );
  rect2.attr("class", "outer title-state").attr("x", -bbox.width / 2 - halfPadding).attr("y", -bbox.height / 2 - halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  innerLine.attr("class", "divider").attr("x1", -bbox.width / 2 - halfPadding).attr("x2", bbox.width / 2 + halfPadding).attr("y1", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding).attr("y2", -bbox.height / 2 - halfPadding + titleBox.height + halfPadding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "rectWithTitle");
var stadium = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const h = bbox.height + node.padding;
  const w = bbox.width + h / 4 + node.padding;
  const rect2 = shapeSvg.insert("rect", ":first-child").attr("style", node.style).attr("rx", h / 2).attr("ry", h / 2).attr("x", -w / 2).attr("y", -h / 2).attr("width", w).attr("height", h);
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "stadium");
var circle = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Circle main");
  updateNodeBounds(node, circle2);
  node.intersect = function(point) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("Circle intersect", node, bbox.width / 2 + halfPadding, point);
    return intersect_default.circle(node, bbox.width / 2 + halfPadding, point);
  };
  return shapeSvg;
}, "circle");
var doublecircle = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox, halfPadding } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const gap = 5;
  const circleGroup = shapeSvg.insert("g", ":first-child");
  const outerCircle = circleGroup.insert("circle");
  const innerCircle = circleGroup.insert("circle");
  circleGroup.attr("class", node.class);
  outerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding + gap).attr("width", bbox.width + node.padding + gap * 2).attr("height", bbox.height + node.padding + gap * 2);
  innerCircle.attr("style", node.style).attr("rx", node.rx).attr("ry", node.ry).attr("r", bbox.width / 2 + halfPadding).attr("width", bbox.width + node.padding).attr("height", bbox.height + node.padding);
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("DoubleCircle main");
  updateNodeBounds(node, outerCircle);
  node.intersect = function(point) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.info("DoubleCircle intersect", node, bbox.width / 2 + halfPadding + gap, point);
    return intersect_default.circle(node, bbox.width / 2 + halfPadding + gap, point);
  };
  return shapeSvg;
}, "doublecircle");
var subroutine = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (parent, node) => {
  const { shapeSvg, bbox } = await labelHelper(
    parent,
    node,
    getClassesFromNode(node, void 0),
    true
  );
  const w = bbox.width + node.padding;
  const h = bbox.height + node.padding;
  const points = [
    { x: 0, y: 0 },
    { x: w, y: 0 },
    { x: w, y: -h },
    { x: 0, y: -h },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: w + 8, y: 0 },
    { x: w + 8, y: -h },
    { x: -8, y: -h },
    { x: -8, y: 0 }
  ];
  const el = insertPolygonShape(shapeSvg, w, h, points);
  el.attr("style", node.style);
  updateNodeBounds(node, el);
  node.intersect = function(point) {
    return intersect_default.polygon(node, points, point);
  };
  return shapeSvg;
}, "subroutine");
var start = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  updateNodeBounds(node, circle2);
  node.intersect = function(point) {
    return intersect_default.circle(node, 7, point);
  };
  return shapeSvg;
}, "start");
var forkJoin = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node, dir) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  let width = 70;
  let height = 10;
  if (dir === "LR") {
    width = 10;
    height = 70;
  }
  const shape = shapeSvg.append("rect").attr("x", -1 * width / 2).attr("y", -1 * height / 2).attr("width", width).attr("height", height).attr("class", "fork-join");
  updateNodeBounds(node, shape);
  node.height = node.height + node.padding / 2;
  node.width = node.width + node.padding / 2;
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "forkJoin");
var end = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node) => {
  const shapeSvg = parent.insert("g").attr("class", "node default").attr("id", node.domId || node.id);
  const innerCircle = shapeSvg.insert("circle", ":first-child");
  const circle2 = shapeSvg.insert("circle", ":first-child");
  circle2.attr("class", "state-start").attr("r", 7).attr("width", 14).attr("height", 14);
  innerCircle.attr("class", "state-end").attr("r", 5).attr("width", 10).attr("height", 10);
  updateNodeBounds(node, circle2);
  node.intersect = function(point) {
    return intersect_default.circle(node, 7, point);
  };
  return shapeSvg;
}, "end");
var class_box = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((parent, node) => {
  const halfPadding = node.padding / 2;
  const rowPadding = 4;
  const lineHeight = 8;
  let classes;
  if (!node.classes) {
    classes = "node default";
  } else {
    classes = "node " + node.classes;
  }
  const shapeSvg = parent.insert("g").attr("class", classes).attr("id", node.domId || node.id);
  const rect2 = shapeSvg.insert("rect", ":first-child");
  const topLine = shapeSvg.insert("line");
  const bottomLine = shapeSvg.insert("line");
  let maxWidth = 0;
  let maxHeight = rowPadding;
  const labelContainer = shapeSvg.insert("g").attr("class", "label");
  let verticalPos = 0;
  const hasInterface = node.classData.annotations?.[0];
  const interfaceLabelText = node.classData.annotations[0] ? "\xAB" + node.classData.annotations[0] + "\xBB" : "";
  const interfaceLabel = labelContainer.node().appendChild(createLabel_default(interfaceLabelText, node.labelStyle, true, true));
  let interfaceBBox = interfaceLabel.getBBox();
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
    const div = interfaceLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(interfaceLabel);
    interfaceBBox = div.getBoundingClientRect();
    dv.attr("width", interfaceBBox.width);
    dv.attr("height", interfaceBBox.height);
  }
  if (node.classData.annotations[0]) {
    maxHeight += interfaceBBox.height + rowPadding;
    maxWidth += interfaceBBox.width;
  }
  let classTitleString = node.classData.label;
  if (node.classData.type !== void 0 && node.classData.type !== "") {
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels) {
      classTitleString += "&lt;" + node.classData.type + "&gt;";
    } else {
      classTitleString += "<" + node.classData.type + ">";
    }
  }
  const classTitleLabel = labelContainer.node().appendChild(createLabel_default(classTitleString, node.labelStyle, true, true));
  (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(classTitleLabel).attr("class", "classTitle");
  let classTitleBBox = classTitleLabel.getBBox();
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
    const div = classTitleLabel.children[0];
    const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(classTitleLabel);
    classTitleBBox = div.getBoundingClientRect();
    dv.attr("width", classTitleBBox.width);
    dv.attr("height", classTitleBBox.height);
  }
  maxHeight += classTitleBBox.height + rowPadding;
  if (classTitleBBox.width > maxWidth) {
    maxWidth = classTitleBBox.width;
  }
  const classAttributes = [];
  node.classData.members.forEach((member) => {
    const parsedInfo = member.getDisplayDetails();
    let parsedText = parsedInfo.displayText;
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels) {
      parsedText = parsedText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel_default(
        parsedText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classAttributes.push(lbl);
  });
  maxHeight += lineHeight;
  const classMethods = [];
  node.classData.methods.forEach((member) => {
    const parsedInfo = member.getDisplayDetails();
    let displayText = parsedInfo.displayText;
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels) {
      displayText = displayText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    const lbl = labelContainer.node().appendChild(
      createLabel_default(
        displayText,
        parsedInfo.cssStyle ? parsedInfo.cssStyle : node.labelStyle,
        true,
        true
      )
    );
    let bbox = lbl.getBBox();
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .evaluate */ ._3)((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().flowchart.htmlLabels)) {
      const div = lbl.children[0];
      const dv = (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(lbl);
      bbox = div.getBoundingClientRect();
      dv.attr("width", bbox.width);
      dv.attr("height", bbox.height);
    }
    if (bbox.width > maxWidth) {
      maxWidth = bbox.width;
    }
    maxHeight += bbox.height + rowPadding;
    classMethods.push(lbl);
  });
  maxHeight += lineHeight;
  if (hasInterface) {
    let diffX2 = (maxWidth - interfaceBBox.width) / 2;
    (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(interfaceLabel).attr(
      "transform",
      "translate( " + (-1 * maxWidth / 2 + diffX2) + ", " + -1 * maxHeight / 2 + ")"
    );
    verticalPos = interfaceBBox.height + rowPadding;
  }
  let diffX = (maxWidth - classTitleBBox.width) / 2;
  (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(classTitleLabel).attr(
    "transform",
    "translate( " + (-1 * maxWidth / 2 + diffX) + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
  );
  verticalPos += classTitleBBox.height + rowPadding;
  topLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classAttributes.forEach((lbl) => {
    (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos + lineHeight / 2) + ")"
    );
    const memberBBox = lbl?.getBBox();
    verticalPos += (memberBBox?.height ?? 0) + rowPadding;
  });
  verticalPos += lineHeight;
  bottomLine.attr("class", "divider").attr("x1", -maxWidth / 2 - halfPadding).attr("x2", maxWidth / 2 + halfPadding).attr("y1", -maxHeight / 2 - halfPadding + lineHeight + verticalPos).attr("y2", -maxHeight / 2 - halfPadding + lineHeight + verticalPos);
  verticalPos += lineHeight;
  classMethods.forEach((lbl) => {
    (0,d3__WEBPACK_IMPORTED_MODULE_3__/* .select */ .Ltv)(lbl).attr(
      "transform",
      "translate( " + -maxWidth / 2 + ", " + (-1 * maxHeight / 2 + verticalPos) + ")"
    );
    const memberBBox = lbl?.getBBox();
    verticalPos += (memberBBox?.height ?? 0) + rowPadding;
  });
  rect2.attr("style", node.style).attr("class", "outer title-state").attr("x", -maxWidth / 2 - halfPadding).attr("y", -(maxHeight / 2) - halfPadding).attr("width", maxWidth + node.padding).attr("height", maxHeight + node.padding);
  updateNodeBounds(node, rect2);
  node.intersect = function(point) {
    return intersect_default.rect(node, point);
  };
  return shapeSvg;
}, "class_box");
var shapes = {
  rhombus: question,
  composite,
  question,
  rect,
  labelRect,
  rectWithTitle,
  choice,
  circle,
  doublecircle,
  stadium,
  hexagon,
  block_arrow,
  rect_left_inv_arrow,
  lean_right,
  lean_left,
  trapezoid,
  inv_trapezoid,
  rect_right_inv_arrow,
  cylinder,
  start,
  end,
  note: note_default,
  subroutine,
  fork: forkJoin,
  join: forkJoin,
  class_box
};
var nodeElems = {};
var insertNode = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(async (elem, node, dir) => {
  let newEl;
  let el;
  if (node.link) {
    let target;
    if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getConfig2 */ .D7)().securityLevel === "sandbox") {
      target = "_top";
    } else if (node.linkTarget) {
      target = node.linkTarget || "_blank";
    }
    newEl = elem.insert("svg:a").attr("xlink:href", node.link).attr("target", target);
    el = await shapes[node.shape](newEl, node, dir);
  } else {
    el = await shapes[node.shape](elem, node, dir);
    newEl = el;
  }
  if (node.tooltip) {
    el.attr("title", node.tooltip);
  }
  if (node.class) {
    el.attr("class", "node default " + node.class);
  }
  nodeElems[node.id] = newEl;
  if (node.haveCallback) {
    nodeElems[node.id].attr("class", nodeElems[node.id].attr("class") + " clickable");
  }
  return newEl;
}, "insertNode");
var setNodeElem = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((elem, node) => {
  nodeElems[node.id] = elem;
}, "setNodeElem");
var clear = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)(() => {
  nodeElems = {};
}, "clear");
var positionNode = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .__name */ .K2)((node) => {
  const el = nodeElems[node.id];
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_2__/* .log */ .Rm.trace(
    "Transforming node",
    node.diff,
    node,
    "translate(" + (node.x - node.width / 2 - 5) + ", " + node.width / 2 + ")"
  );
  const padding = 8;
  const diff = node.diff || 0;
  if (node.clusterNode) {
    el.attr(
      "transform",
      "translate(" + (node.x + diff - node.width / 2) + ", " + (node.y - node.height / 2 - padding) + ")"
    );
  } else {
    el.attr("transform", "translate(" + node.x + ", " + node.y + ")");
  }
  return diff;
}, "positionNode");




/***/ }),

/***/ 30376:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _chunk_FUIDI54P_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36151);
/* harmony import */ var _chunk_Z2VRG6XP_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46578);
/* harmony import */ var _chunk_T3KDJ7CM_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62602);
/* harmony import */ var _chunk_5CZSE4TR_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49139);
/* harmony import */ var _chunk_TINLTEC2_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48496);
/* harmony import */ var _chunk_OERGPBFJ_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67895);
/* harmony import */ var _chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57323);
/* harmony import */ var _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64994);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20007);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75937);
/* harmony import */ var khroma__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(25582);









// src/diagrams/flowchart/flowDb.ts

var MERMAID_DOM_ID_PREFIX = "flowchart-";
var vertexCounter = 0;
var config = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)();
var vertices = /* @__PURE__ */ new Map();
var edges = [];
var classes = /* @__PURE__ */ new Map();
var subGraphs = [];
var subGraphLookup = /* @__PURE__ */ new Map();
var tooltips = /* @__PURE__ */ new Map();
var subCount = 0;
var firstGraphFlag = true;
var direction;
var version;
var funs = [];
var sanitizeText = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((txt) => _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .common_default */ .Y2.sanitizeText(txt, config), "sanitizeText");
var lookUpDomId = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id) {
  for (const vertex of vertices.values()) {
    if (vertex.id === id) {
      return vertex.domId;
    }
  }
  return id;
}, "lookUpDomId");
var addVertex = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id, textObj, type, style, classes2, dir, props = {}) {
  if (!id || id.trim().length === 0) {
    return;
  }
  let txt;
  let vertex = vertices.get(id);
  if (vertex === void 0) {
    vertex = {
      id,
      labelType: "text",
      domId: MERMAID_DOM_ID_PREFIX + id + "-" + vertexCounter,
      styles: [],
      classes: []
    };
    vertices.set(id, vertex);
  }
  vertexCounter++;
  if (textObj !== void 0) {
    config = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)();
    txt = sanitizeText(textObj.text.trim());
    vertex.labelType = textObj.type;
    if (txt.startsWith('"') && txt.endsWith('"')) {
      txt = txt.substring(1, txt.length - 1);
    }
    vertex.text = txt;
  } else {
    if (vertex.text === void 0) {
      vertex.text = id;
    }
  }
  if (type !== void 0) {
    vertex.type = type;
  }
  if (style !== void 0 && style !== null) {
    style.forEach(function(s) {
      vertex.styles.push(s);
    });
  }
  if (classes2 !== void 0 && classes2 !== null) {
    classes2.forEach(function(s) {
      vertex.classes.push(s);
    });
  }
  if (dir !== void 0) {
    vertex.dir = dir;
  }
  if (vertex.props === void 0) {
    vertex.props = props;
  } else if (props !== void 0) {
    Object.assign(vertex.props, props);
  }
}, "addVertex");
var addSingleLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(_start, _end, type) {
  const start = _start;
  const end = _end;
  const edge = { start, end, type: void 0, text: "", labelType: "text" };
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("abc78 Got edge...", edge);
  const linkTextObj = type.text;
  if (linkTextObj !== void 0) {
    edge.text = sanitizeText(linkTextObj.text.trim());
    if (edge.text.startsWith('"') && edge.text.endsWith('"')) {
      edge.text = edge.text.substring(1, edge.text.length - 1);
    }
    edge.labelType = linkTextObj.type;
  }
  if (type !== void 0) {
    edge.type = type.type;
    edge.stroke = type.stroke;
    edge.length = type.length > 10 ? 10 : type.length;
  }
  if (edges.length < (config.maxEdges ?? 500)) {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("Pushing edge...");
    edges.push(edge);
  } else {
    throw new Error(
      `Edge limit exceeded. ${edges.length} edges found, but the limit is ${config.maxEdges}.

Initialize mermaid with maxEdges set to a higher number to allow more edges.
You cannot set this config via configuration inside the diagram as it is a secure config.
You have to call mermaid.initialize.`
    );
  }
}, "addSingleLink");
var addLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(_start, _end, type) {
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("addLink", _start, _end, type);
  for (const start of _start) {
    for (const end of _end) {
      addSingleLink(start, end, type);
    }
  }
}, "addLink");
var updateLinkInterpolate = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(positions, interpolate) {
  positions.forEach(function(pos) {
    if (pos === "default") {
      edges.defaultInterpolate = interpolate;
    } else {
      edges[pos].interpolate = interpolate;
    }
  });
}, "updateLinkInterpolate");
var updateLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(positions, style) {
  positions.forEach(function(pos) {
    if (typeof pos === "number" && pos >= edges.length) {
      throw new Error(
        `The index ${pos} for linkStyle is out of bounds. Valid indices for linkStyle are between 0 and ${edges.length - 1}. (Help: Ensure that the index is within the range of existing edges.)`
      );
    }
    if (pos === "default") {
      edges.defaultStyle = style;
    } else {
      edges[pos].style = style;
      if ((edges[pos]?.style?.length ?? 0) > 0 && !edges[pos]?.style?.some((s) => s?.startsWith("fill"))) {
        edges[pos]?.style?.push("fill:none");
      }
    }
  });
}, "updateLink");
var addClass = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ids, style) {
  ids.split(",").forEach(function(id) {
    let classNode = classes.get(id);
    if (classNode === void 0) {
      classNode = { id, styles: [], textStyles: [] };
      classes.set(id, classNode);
    }
    if (style !== void 0 && style !== null) {
      style.forEach(function(s) {
        if (/color/.exec(s)) {
          const newStyle = s.replace("fill", "bgFill");
          classNode.textStyles.push(newStyle);
        }
        classNode.styles.push(s);
      });
    }
  });
}, "addClass");
var setDirection = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(dir) {
  direction = dir;
  if (/.*</.exec(direction)) {
    direction = "RL";
  }
  if (/.*\^/.exec(direction)) {
    direction = "BT";
  }
  if (/.*>/.exec(direction)) {
    direction = "LR";
  }
  if (/.*v/.exec(direction)) {
    direction = "TB";
  }
  if (direction === "TD") {
    direction = "TB";
  }
}, "setDirection");
var setClass = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ids, className) {
  for (const id of ids.split(",")) {
    const vertex = vertices.get(id);
    if (vertex) {
      vertex.classes.push(className);
    }
    const subGraph = subGraphLookup.get(id);
    if (subGraph) {
      subGraph.classes.push(className);
    }
  }
}, "setClass");
var setTooltip = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ids, tooltip) {
  if (tooltip === void 0) {
    return;
  }
  tooltip = sanitizeText(tooltip);
  for (const id of ids.split(",")) {
    tooltips.set(version === "gen-1" ? lookUpDomId(id) : id, tooltip);
  }
}, "setTooltip");
var setClickFun = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id, functionName, functionArgs) {
  const domId = lookUpDomId(id);
  if ((0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)().securityLevel !== "loose") {
    return;
  }
  if (functionName === void 0) {
    return;
  }
  let argList = [];
  if (typeof functionArgs === "string") {
    argList = functionArgs.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let i = 0; i < argList.length; i++) {
      let item = argList[i].trim();
      if (item.startsWith('"') && item.endsWith('"')) {
        item = item.substr(1, item.length - 2);
      }
      argList[i] = item;
    }
  }
  if (argList.length === 0) {
    argList.push(id);
  }
  const vertex = vertices.get(id);
  if (vertex) {
    vertex.haveCallback = true;
    funs.push(function() {
      const elem = document.querySelector(`[id="${domId}"]`);
      if (elem !== null) {
        elem.addEventListener(
          "click",
          function() {
            _chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_6__/* .utils_default */ ._K.runFunc(functionName, ...argList);
          },
          false
        );
      }
    });
  }
}, "setClickFun");
var setLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ids, linkStr, target) {
  ids.split(",").forEach(function(id) {
    const vertex = vertices.get(id);
    if (vertex !== void 0) {
      vertex.link = _chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_6__/* .utils_default */ ._K.formatUrl(linkStr, config);
      vertex.linkTarget = target;
    }
  });
  setClass(ids, "clickable");
}, "setLink");
var getTooltip = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id) {
  return tooltips.get(id);
}, "getTooltip");
var setClickEvent = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ids, functionName, functionArgs) {
  ids.split(",").forEach(function(id) {
    setClickFun(id, functionName, functionArgs);
  });
  setClass(ids, "clickable");
}, "setClickEvent");
var bindFunctions = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(element) {
  funs.forEach(function(fun) {
    fun(element);
  });
}, "bindFunctions");
var getDirection = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return direction.trim();
}, "getDirection");
var getVertices = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return vertices;
}, "getVertices");
var getEdges = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return edges;
}, "getEdges");
var getClasses = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return classes;
}, "getClasses");
var setupToolTips = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(element) {
  let tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)(".mermaidTooltip");
  if ((tooltipElem._groups || tooltipElem)[0][0] === null) {
    tooltipElem = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0);
  }
  const svg = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)(element).select("svg");
  const nodes = svg.selectAll("g.node");
  nodes.on("mouseover", function() {
    const el = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)(this);
    const title = el.attr("title");
    if (title === null) {
      return;
    }
    const rect = this?.getBoundingClientRect();
    tooltipElem.transition().duration(200).style("opacity", ".9");
    tooltipElem.text(el.attr("title")).style("left", window.scrollX + rect.left + (rect.right - rect.left) / 2 + "px").style("top", window.scrollY + rect.bottom + "px");
    tooltipElem.html(tooltipElem.html().replace(/&lt;br\/&gt;/g, "<br/>"));
    el.classed("hover", true);
  }).on("mouseout", function() {
    tooltipElem.transition().duration(500).style("opacity", 0);
    const el = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)(this);
    el.classed("hover", false);
  });
}, "setupToolTips");
funs.push(setupToolTips);
var clear2 = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ver = "gen-1") {
  vertices = /* @__PURE__ */ new Map();
  classes = /* @__PURE__ */ new Map();
  edges = [];
  funs = [setupToolTips];
  subGraphs = [];
  subGraphLookup = /* @__PURE__ */ new Map();
  subCount = 0;
  tooltips = /* @__PURE__ */ new Map();
  firstGraphFlag = true;
  version = ver;
  config = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)();
  (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .clear */ .IU)();
}, "clear");
var setGen = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((ver) => {
  version = ver || "gen-2";
}, "setGen");
var defaultStyle = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return "fill:#ffa;stroke: #f66; stroke-width: 3px; stroke-dasharray: 5, 5;fill:#ffa;stroke: #666;";
}, "defaultStyle");
var addSubGraph = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(_id, list, _title) {
  let id = _id.text.trim();
  let title = _title.text;
  if (_id === _title && /\s/.exec(_title.text)) {
    id = void 0;
  }
  function uniq(a) {
    const prims = { boolean: {}, number: {}, string: {} };
    const objs = [];
    let dir2;
    const nodeList2 = a.filter(function(item) {
      const type = typeof item;
      if (item.stmt && item.stmt === "dir") {
        dir2 = item.value;
        return false;
      }
      if (item.trim() === "") {
        return false;
      }
      if (type in prims) {
        return prims[type].hasOwnProperty(item) ? false : prims[type][item] = true;
      } else {
        return objs.includes(item) ? false : objs.push(item);
      }
    });
    return { nodeList: nodeList2, dir: dir2 };
  }
  (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(uniq, "uniq");
  const { nodeList, dir } = uniq(list.flat());
  if (version === "gen-1") {
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i] = lookUpDomId(nodeList[i]);
    }
  }
  id = id ?? "subGraph" + subCount;
  title = title || "";
  title = sanitizeText(title);
  subCount = subCount + 1;
  const subGraph = {
    id,
    nodes: nodeList,
    title: title.trim(),
    classes: [],
    dir,
    labelType: _title.type
  };
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("Adding", subGraph.id, subGraph.nodes, subGraph.dir);
  subGraph.nodes = makeUniq(subGraph, subGraphs).nodes;
  subGraphs.push(subGraph);
  subGraphLookup.set(id, subGraph);
  return id;
}, "addSubGraph");
var getPosForId = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id) {
  for (const [i, subGraph] of subGraphs.entries()) {
    if (subGraph.id === id) {
      return i;
    }
  }
  return -1;
}, "getPosForId");
var secCount = -1;
var posCrossRef = [];
var indexNodes2 = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(id, pos) {
  const nodes = subGraphs[pos].nodes;
  secCount = secCount + 1;
  if (secCount > 2e3) {
    return {
      result: false,
      count: 0
    };
  }
  posCrossRef[secCount] = pos;
  if (subGraphs[pos].id === id) {
    return {
      result: true,
      count: 0
    };
  }
  let count = 0;
  let posCount = 1;
  while (count < nodes.length) {
    const childPos = getPosForId(nodes[count]);
    if (childPos >= 0) {
      const res = indexNodes2(id, childPos);
      if (res.result) {
        return {
          result: true,
          count: posCount + res.count
        };
      } else {
        posCount = posCount + res.count;
      }
    }
    count = count + 1;
  }
  return {
    result: false,
    count: posCount
  };
}, "indexNodes2");
var getDepthFirstPos = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(pos) {
  return posCrossRef[pos];
}, "getDepthFirstPos");
var indexNodes = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  secCount = -1;
  if (subGraphs.length > 0) {
    indexNodes2("none", subGraphs.length - 1);
  }
}, "indexNodes");
var getSubGraphs = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
  return subGraphs;
}, "getSubGraphs");
var firstGraph = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(() => {
  if (firstGraphFlag) {
    firstGraphFlag = false;
    return true;
  }
  return false;
}, "firstGraph");
var destructStartLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((_str) => {
  let str = _str.trim();
  let type = "arrow_open";
  switch (str[0]) {
    case "<":
      type = "arrow_point";
      str = str.slice(1);
      break;
    case "x":
      type = "arrow_cross";
      str = str.slice(1);
      break;
    case "o":
      type = "arrow_circle";
      str = str.slice(1);
      break;
  }
  let stroke = "normal";
  if (str.includes("=")) {
    stroke = "thick";
  }
  if (str.includes(".")) {
    stroke = "dotted";
  }
  return { type, stroke };
}, "destructStartLink");
var countChar = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((char, str) => {
  const length = str.length;
  let count = 0;
  for (let i = 0; i < length; ++i) {
    if (str[i] === char) {
      ++count;
    }
  }
  return count;
}, "countChar");
var destructEndLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((_str) => {
  const str = _str.trim();
  let line = str.slice(0, -1);
  let type = "arrow_open";
  switch (str.slice(-1)) {
    case "x":
      type = "arrow_cross";
      if (str.startsWith("x")) {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
    case ">":
      type = "arrow_point";
      if (str.startsWith("<")) {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
    case "o":
      type = "arrow_circle";
      if (str.startsWith("o")) {
        type = "double_" + type;
        line = line.slice(1);
      }
      break;
  }
  let stroke = "normal";
  let length = line.length - 1;
  if (line.startsWith("=")) {
    stroke = "thick";
  }
  if (line.startsWith("~")) {
    stroke = "invisible";
  }
  const dots = countChar(".", line);
  if (dots) {
    stroke = "dotted";
    length = dots;
  }
  return { type, stroke, length };
}, "destructEndLink");
var destructLink = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((_str, _startStr) => {
  const info = destructEndLink(_str);
  let startInfo;
  if (_startStr) {
    startInfo = destructStartLink(_startStr);
    if (startInfo.stroke !== info.stroke) {
      return { type: "INVALID", stroke: "INVALID" };
    }
    if (startInfo.type === "arrow_open") {
      startInfo.type = info.type;
    } else {
      if (startInfo.type !== info.type) {
        return { type: "INVALID", stroke: "INVALID" };
      }
      startInfo.type = "double_" + startInfo.type;
    }
    if (startInfo.type === "double_arrow") {
      startInfo.type = "double_arrow_point";
    }
    startInfo.length = info.length;
    return startInfo;
  }
  return info;
}, "destructLink");
var exists = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((allSgs, _id) => {
  for (const sg of allSgs) {
    if (sg.nodes.includes(_id)) {
      return true;
    }
  }
  return false;
}, "exists");
var makeUniq = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((sg, allSubgraphs) => {
  const res = [];
  sg.nodes.forEach((_id, pos) => {
    if (!exists(allSubgraphs, _id)) {
      res.push(sg.nodes[pos]);
    }
  });
  return { nodes: res };
}, "makeUniq");
var lex = {
  firstGraph
};
var getTypeFromVertex = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((vertex) => {
  if (vertex.type === "square") {
    return "squareRect";
  }
  if (vertex.type === "round") {
    return "roundedRect";
  }
  return vertex.type ?? "squareRect";
}, "getTypeFromVertex");
var findNode = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((nodes, id) => nodes.find((node) => node.id === id), "findNode");
var destructEdgeType = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((type) => {
  let arrowTypeStart = "none";
  let arrowTypeEnd = "arrow_point";
  switch (type) {
    case "arrow_point":
    case "arrow_circle":
    case "arrow_cross":
      arrowTypeEnd = type;
      break;
    case "double_arrow_point":
    case "double_arrow_circle":
    case "double_arrow_cross":
      arrowTypeStart = type.replace("double_", "");
      arrowTypeEnd = arrowTypeStart;
      break;
  }
  return { arrowTypeStart, arrowTypeEnd };
}, "destructEdgeType");
var addNodeFromVertex = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((vertex, nodes, parentDB, subGraphDB, config2, look) => {
  const parentId = parentDB.get(vertex.id);
  const isGroup = subGraphDB.get(vertex.id) ?? false;
  const node = findNode(nodes, vertex.id);
  if (node) {
    node.cssStyles = vertex.styles;
    node.cssCompiledStyles = getCompiledStyles(vertex.classes);
    node.cssClasses = vertex.classes.join(" ");
  } else {
    nodes.push({
      id: vertex.id,
      label: vertex.text,
      labelStyle: "",
      parentId,
      padding: config2.flowchart?.padding || 8,
      cssStyles: vertex.styles,
      cssCompiledStyles: getCompiledStyles(["default", "node", ...vertex.classes]),
      cssClasses: "default " + vertex.classes.join(" "),
      shape: getTypeFromVertex(vertex),
      dir: vertex.dir,
      domId: vertex.domId,
      isGroup,
      look,
      link: vertex.link,
      linkTarget: vertex.linkTarget,
      tooltip: getTooltip(vertex.id)
    });
  }
}, "addNodeFromVertex");
function getCompiledStyles(classDefs) {
  let compiledStyles = [];
  for (const customClass of classDefs) {
    const cssClass = classes.get(customClass);
    if (cssClass?.styles) {
      compiledStyles = [...compiledStyles, ...cssClass.styles ?? []].map((s) => s.trim());
    }
    if (cssClass?.textStyles) {
      compiledStyles = [...compiledStyles, ...cssClass.textStyles ?? []].map((s) => s.trim());
    }
  }
  return compiledStyles;
}
(0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(getCompiledStyles, "getCompiledStyles");
var getData = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(() => {
  const config2 = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)();
  const nodes = [];
  const edges2 = [];
  const subGraphs2 = getSubGraphs();
  const parentDB = /* @__PURE__ */ new Map();
  const subGraphDB = /* @__PURE__ */ new Map();
  for (let i = subGraphs2.length - 1; i >= 0; i--) {
    const subGraph = subGraphs2[i];
    if (subGraph.nodes.length > 0) {
      subGraphDB.set(subGraph.id, true);
    }
    for (const id of subGraph.nodes) {
      parentDB.set(id, subGraph.id);
    }
  }
  for (let i = subGraphs2.length - 1; i >= 0; i--) {
    const subGraph = subGraphs2[i];
    nodes.push({
      id: subGraph.id,
      label: subGraph.title,
      labelStyle: "",
      parentId: parentDB.get(subGraph.id),
      padding: 8,
      cssCompiledStyles: getCompiledStyles(subGraph.classes),
      cssClasses: subGraph.classes.join(" "),
      shape: "rect",
      dir: subGraph.dir,
      isGroup: true,
      look: config2.look
    });
  }
  const n = getVertices();
  n.forEach((vertex) => {
    addNodeFromVertex(vertex, nodes, parentDB, subGraphDB, config2, config2.look || "classic");
  });
  const e = getEdges();
  e.forEach((rawEdge, index) => {
    const { arrowTypeStart, arrowTypeEnd } = destructEdgeType(rawEdge.type);
    const styles = [...e.defaultStyle ?? []];
    if (rawEdge.style) {
      styles.push(...rawEdge.style);
    }
    const edge = {
      id: (0,_chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_6__/* .getEdgeId */ .rY)(rawEdge.start, rawEdge.end, { counter: index, prefix: "L" }),
      start: rawEdge.start,
      end: rawEdge.end,
      type: rawEdge.type ?? "normal",
      label: rawEdge.text,
      labelpos: "c",
      thickness: rawEdge.stroke,
      minlen: rawEdge.length,
      classes: rawEdge?.stroke === "invisible" ? "" : "edge-thickness-normal edge-pattern-solid flowchart-link",
      arrowTypeStart: rawEdge?.stroke === "invisible" ? "none" : arrowTypeStart,
      arrowTypeEnd: rawEdge?.stroke === "invisible" ? "none" : arrowTypeEnd,
      arrowheadStyle: "fill: #333",
      labelStyle: styles,
      style: styles,
      pattern: rawEdge.stroke,
      look: config2.look
    };
    edges2.push(edge);
  });
  return { nodes, edges: edges2, other: {}, config: config2 };
}, "getData");
var flowDb_default = {
  defaultConfig: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(() => _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .defaultConfig2 */ .ME.flowchart, "defaultConfig"),
  setAccTitle: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .setAccTitle */ .SV,
  getAccTitle: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getAccTitle */ .iN,
  getAccDescription: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getAccDescription */ .m7,
  getData,
  setAccDescription: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .setAccDescription */ .EI,
  addVertex,
  lookUpDomId,
  addLink,
  updateLinkInterpolate,
  updateLink,
  addClass,
  setDirection,
  setClass,
  setTooltip,
  getTooltip,
  setClickEvent,
  setLink,
  bindFunctions,
  getDirection,
  getVertices,
  getEdges,
  getClasses,
  clear: clear2,
  setGen,
  defaultStyle,
  addSubGraph,
  getDepthFirstPos,
  indexNodes,
  getSubGraphs,
  destructLink,
  lex,
  exists,
  makeUniq,
  setDiagramTitle: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .setDiagramTitle */ .ke,
  getDiagramTitle: _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getDiagramTitle */ .ab
};

// src/diagrams/flowchart/flowRenderer-v3-unified.ts

var getClasses2 = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(text, diagramObj) {
  return diagramObj.db.getClasses();
}, "getClasses");
var draw = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(async function(text, id, _version, diag) {
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("REF0:");
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.info("Drawing state diagram (v2)", id);
  const { securityLevel, flowchart: conf, layout } = (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .getConfig2 */ .D7)();
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)("#i" + id);
  }
  const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.debug("Before getData: ");
  const data4Layout = diag.db.getData();
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.debug("Data: ", data4Layout);
  const svg = (0,_chunk_FUIDI54P_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getDiagramElement */ .A)(id, securityLevel);
  const direction2 = getDirection();
  data4Layout.type = diag.type;
  data4Layout.layoutAlgorithm = (0,_chunk_T3KDJ7CM_mjs__WEBPACK_IMPORTED_MODULE_2__/* .getRegisteredLayoutAlgorithm */ .q7)(layout);
  if (data4Layout.layoutAlgorithm === "dagre" && layout === "elk") {
    _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.warn(
      "flowchart-elk was moved to an external package in Mermaid v11. Please refer [release notes](https://github.com/mermaid-js/mermaid/releases/tag/v11.0.0) for more details. This diagram will be rendered using `dagre` layout as a fallback."
    );
  }
  data4Layout.direction = direction2;
  data4Layout.nodeSpacing = conf?.nodeSpacing || 50;
  data4Layout.rankSpacing = conf?.rankSpacing || 50;
  data4Layout.markers = ["point", "circle", "cross"];
  data4Layout.diagramId = id;
  _chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .log */ .Rm.debug("REF1:", data4Layout);
  await (0,_chunk_T3KDJ7CM_mjs__WEBPACK_IMPORTED_MODULE_2__/* .render */ .XX)(data4Layout, svg);
  const padding = data4Layout.config.flowchart?.diagramPadding ?? 8;
  _chunk_VKXSJROQ_mjs__WEBPACK_IMPORTED_MODULE_6__/* .utils_default */ ._K.insertTitle(
    svg,
    "flowchartTitleText",
    conf?.titleTopMargin || 0,
    diag.db.getDiagramTitle()
  );
  (0,_chunk_FUIDI54P_mjs__WEBPACK_IMPORTED_MODULE_0__/* .setupViewPortForSVG */ .P)(svg, padding, "flowchart", conf?.useMaxWidth || false);
  for (const vertex of data4Layout.nodes) {
    const node = (0,d3__WEBPACK_IMPORTED_MODULE_8__/* .select */ .Ltv)(`#${id} [id="${vertex.id}"]`);
    if (!node || !vertex.link) {
      continue;
    }
    const link = doc.createElementNS("http://www.w3.org/2000/svg", "a");
    link.setAttributeNS("http://www.w3.org/2000/svg", "class", vertex.cssClasses);
    link.setAttributeNS("http://www.w3.org/2000/svg", "rel", "noopener");
    if (securityLevel === "sandbox") {
      link.setAttributeNS("http://www.w3.org/2000/svg", "target", "_top");
    } else if (vertex.linkTarget) {
      link.setAttributeNS("http://www.w3.org/2000/svg", "target", vertex.linkTarget);
    }
    const linkNode = node.insert(function() {
      return link;
    }, ":first-child");
    const shape = node.select(".label-container");
    if (shape) {
      linkNode.append(function() {
        return shape.node();
      });
    }
    const label = node.select(".label");
    if (label) {
      linkNode.append(function() {
        return label.node();
      });
    }
  }
}, "draw");
var flowRenderer_v3_unified_default = {
  getClasses: getClasses2,
  draw
};

// src/diagrams/flowchart/parser/flow.jison
var parser = function() {
  var o = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(k, v, o2, l) {
    for (o2 = o2 || {}, l = k.length; l--; o2[k[l]] = v) ;
    return o2;
  }, "o"), $V0 = [1, 4], $V1 = [1, 3], $V2 = [1, 5], $V3 = [1, 8, 9, 10, 11, 27, 34, 36, 38, 42, 58, 81, 82, 83, 84, 85, 86, 99, 102, 103, 106, 108, 111, 112, 113, 118, 119, 120, 121], $V4 = [2, 2], $V5 = [1, 13], $V6 = [1, 14], $V7 = [1, 15], $V8 = [1, 16], $V9 = [1, 23], $Va = [1, 25], $Vb = [1, 26], $Vc = [1, 27], $Vd = [1, 49], $Ve = [1, 48], $Vf = [1, 29], $Vg = [1, 30], $Vh = [1, 31], $Vi = [1, 32], $Vj = [1, 33], $Vk = [1, 44], $Vl = [1, 46], $Vm = [1, 42], $Vn = [1, 47], $Vo = [1, 43], $Vp = [1, 50], $Vq = [1, 45], $Vr = [1, 51], $Vs = [1, 52], $Vt = [1, 34], $Vu = [1, 35], $Vv = [1, 36], $Vw = [1, 37], $Vx = [1, 57], $Vy = [1, 8, 9, 10, 11, 27, 32, 34, 36, 38, 42, 58, 81, 82, 83, 84, 85, 86, 99, 102, 103, 106, 108, 111, 112, 113, 118, 119, 120, 121], $Vz = [1, 61], $VA = [1, 60], $VB = [1, 62], $VC = [8, 9, 11, 73, 75], $VD = [1, 88], $VE = [1, 93], $VF = [1, 92], $VG = [1, 89], $VH = [1, 85], $VI = [1, 91], $VJ = [1, 87], $VK = [1, 94], $VL = [1, 90], $VM = [1, 95], $VN = [1, 86], $VO = [8, 9, 10, 11, 73, 75], $VP = [8, 9, 10, 11, 44, 73, 75], $VQ = [8, 9, 10, 11, 29, 42, 44, 46, 48, 50, 52, 54, 56, 58, 61, 63, 65, 66, 68, 73, 75, 86, 99, 102, 103, 106, 108, 111, 112, 113], $VR = [8, 9, 11, 42, 58, 73, 75, 86, 99, 102, 103, 106, 108, 111, 112, 113], $VS = [42, 58, 86, 99, 102, 103, 106, 108, 111, 112, 113], $VT = [1, 121], $VU = [1, 120], $VV = [1, 128], $VW = [1, 142], $VX = [1, 143], $VY = [1, 144], $VZ = [1, 145], $V_ = [1, 130], $V$ = [1, 132], $V01 = [1, 136], $V11 = [1, 137], $V21 = [1, 138], $V31 = [1, 139], $V41 = [1, 140], $V51 = [1, 141], $V61 = [1, 146], $V71 = [1, 147], $V81 = [1, 126], $V91 = [1, 127], $Va1 = [1, 134], $Vb1 = [1, 129], $Vc1 = [1, 133], $Vd1 = [1, 131], $Ve1 = [8, 9, 10, 11, 27, 32, 34, 36, 38, 42, 58, 81, 82, 83, 84, 85, 86, 99, 102, 103, 106, 108, 111, 112, 113, 118, 119, 120, 121], $Vf1 = [1, 149], $Vg1 = [8, 9, 11], $Vh1 = [8, 9, 10, 11, 14, 42, 58, 86, 102, 103, 106, 108, 111, 112, 113], $Vi1 = [1, 169], $Vj1 = [1, 165], $Vk1 = [1, 166], $Vl1 = [1, 170], $Vm1 = [1, 167], $Vn1 = [1, 168], $Vo1 = [75, 113, 116], $Vp1 = [8, 9, 10, 11, 12, 14, 27, 29, 32, 42, 58, 73, 81, 82, 83, 84, 85, 86, 87, 102, 106, 108, 111, 112, 113], $Vq1 = [10, 103], $Vr1 = [31, 47, 49, 51, 53, 55, 60, 62, 64, 65, 67, 69, 113, 114, 115], $Vs1 = [1, 235], $Vt1 = [1, 233], $Vu1 = [1, 237], $Vv1 = [1, 231], $Vw1 = [1, 232], $Vx1 = [1, 234], $Vy1 = [1, 236], $Vz1 = [1, 238], $VA1 = [1, 255], $VB1 = [8, 9, 11, 103], $VC1 = [8, 9, 10, 11, 58, 81, 102, 103, 106, 107, 108, 109];
  var parser2 = {
    trace: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function trace() {
    }, "trace"),
    yy: {},
    symbols_: { "error": 2, "start": 3, "graphConfig": 4, "document": 5, "line": 6, "statement": 7, "SEMI": 8, "NEWLINE": 9, "SPACE": 10, "EOF": 11, "GRAPH": 12, "NODIR": 13, "DIR": 14, "FirstStmtSeparator": 15, "ending": 16, "endToken": 17, "spaceList": 18, "spaceListNewline": 19, "vertexStatement": 20, "separator": 21, "styleStatement": 22, "linkStyleStatement": 23, "classDefStatement": 24, "classStatement": 25, "clickStatement": 26, "subgraph": 27, "textNoTags": 28, "SQS": 29, "text": 30, "SQE": 31, "end": 32, "direction": 33, "acc_title": 34, "acc_title_value": 35, "acc_descr": 36, "acc_descr_value": 37, "acc_descr_multiline_value": 38, "link": 39, "node": 40, "styledVertex": 41, "AMP": 42, "vertex": 43, "STYLE_SEPARATOR": 44, "idString": 45, "DOUBLECIRCLESTART": 46, "DOUBLECIRCLEEND": 47, "PS": 48, "PE": 49, "(-": 50, "-)": 51, "STADIUMSTART": 52, "STADIUMEND": 53, "SUBROUTINESTART": 54, "SUBROUTINEEND": 55, "VERTEX_WITH_PROPS_START": 56, "NODE_STRING[field]": 57, "COLON": 58, "NODE_STRING[value]": 59, "PIPE": 60, "CYLINDERSTART": 61, "CYLINDEREND": 62, "DIAMOND_START": 63, "DIAMOND_STOP": 64, "TAGEND": 65, "TRAPSTART": 66, "TRAPEND": 67, "INVTRAPSTART": 68, "INVTRAPEND": 69, "linkStatement": 70, "arrowText": 71, "TESTSTR": 72, "START_LINK": 73, "edgeText": 74, "LINK": 75, "edgeTextToken": 76, "STR": 77, "MD_STR": 78, "textToken": 79, "keywords": 80, "STYLE": 81, "LINKSTYLE": 82, "CLASSDEF": 83, "CLASS": 84, "CLICK": 85, "DOWN": 86, "UP": 87, "textNoTagsToken": 88, "stylesOpt": 89, "idString[vertex]": 90, "idString[class]": 91, "CALLBACKNAME": 92, "CALLBACKARGS": 93, "HREF": 94, "LINK_TARGET": 95, "STR[link]": 96, "STR[tooltip]": 97, "alphaNum": 98, "DEFAULT": 99, "numList": 100, "INTERPOLATE": 101, "NUM": 102, "COMMA": 103, "style": 104, "styleComponent": 105, "NODE_STRING": 106, "UNIT": 107, "BRKT": 108, "PCT": 109, "idStringToken": 110, "MINUS": 111, "MULT": 112, "UNICODE_TEXT": 113, "TEXT": 114, "TAGSTART": 115, "EDGE_TEXT": 116, "alphaNumToken": 117, "direction_tb": 118, "direction_bt": 119, "direction_rl": 120, "direction_lr": 121, "$accept": 0, "$end": 1 },
    terminals_: { 2: "error", 8: "SEMI", 9: "NEWLINE", 10: "SPACE", 11: "EOF", 12: "GRAPH", 13: "NODIR", 14: "DIR", 27: "subgraph", 29: "SQS", 31: "SQE", 32: "end", 34: "acc_title", 35: "acc_title_value", 36: "acc_descr", 37: "acc_descr_value", 38: "acc_descr_multiline_value", 42: "AMP", 44: "STYLE_SEPARATOR", 46: "DOUBLECIRCLESTART", 47: "DOUBLECIRCLEEND", 48: "PS", 49: "PE", 50: "(-", 51: "-)", 52: "STADIUMSTART", 53: "STADIUMEND", 54: "SUBROUTINESTART", 55: "SUBROUTINEEND", 56: "VERTEX_WITH_PROPS_START", 57: "NODE_STRING[field]", 58: "COLON", 59: "NODE_STRING[value]", 60: "PIPE", 61: "CYLINDERSTART", 62: "CYLINDEREND", 63: "DIAMOND_START", 64: "DIAMOND_STOP", 65: "TAGEND", 66: "TRAPSTART", 67: "TRAPEND", 68: "INVTRAPSTART", 69: "INVTRAPEND", 72: "TESTSTR", 73: "START_LINK", 75: "LINK", 77: "STR", 78: "MD_STR", 81: "STYLE", 82: "LINKSTYLE", 83: "CLASSDEF", 84: "CLASS", 85: "CLICK", 86: "DOWN", 87: "UP", 90: "idString[vertex]", 91: "idString[class]", 92: "CALLBACKNAME", 93: "CALLBACKARGS", 94: "HREF", 95: "LINK_TARGET", 96: "STR[link]", 97: "STR[tooltip]", 99: "DEFAULT", 101: "INTERPOLATE", 102: "NUM", 103: "COMMA", 106: "NODE_STRING", 107: "UNIT", 108: "BRKT", 109: "PCT", 111: "MINUS", 112: "MULT", 113: "UNICODE_TEXT", 114: "TEXT", 115: "TAGSTART", 116: "EDGE_TEXT", 118: "direction_tb", 119: "direction_bt", 120: "direction_rl", 121: "direction_lr" },
    productions_: [0, [3, 2], [5, 0], [5, 2], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [4, 2], [4, 2], [4, 2], [4, 3], [16, 2], [16, 1], [17, 1], [17, 1], [17, 1], [15, 1], [15, 1], [15, 2], [19, 2], [19, 2], [19, 1], [19, 1], [18, 2], [18, 1], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 2], [7, 9], [7, 6], [7, 4], [7, 1], [7, 2], [7, 2], [7, 1], [21, 1], [21, 1], [21, 1], [20, 3], [20, 4], [20, 2], [20, 1], [40, 1], [40, 5], [41, 1], [41, 3], [43, 4], [43, 4], [43, 6], [43, 4], [43, 4], [43, 4], [43, 8], [43, 4], [43, 4], [43, 4], [43, 6], [43, 4], [43, 4], [43, 4], [43, 4], [43, 4], [43, 1], [39, 2], [39, 3], [39, 3], [39, 1], [39, 3], [74, 1], [74, 2], [74, 1], [74, 1], [70, 1], [71, 3], [30, 1], [30, 2], [30, 1], [30, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [80, 1], [28, 1], [28, 2], [28, 1], [28, 1], [24, 5], [25, 5], [26, 2], [26, 4], [26, 3], [26, 5], [26, 3], [26, 5], [26, 5], [26, 7], [26, 2], [26, 4], [26, 2], [26, 4], [26, 4], [26, 6], [22, 5], [23, 5], [23, 5], [23, 9], [23, 9], [23, 7], [23, 7], [100, 1], [100, 3], [89, 1], [89, 3], [104, 1], [104, 2], [105, 1], [105, 1], [105, 1], [105, 1], [105, 1], [105, 1], [105, 1], [105, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [110, 1], [79, 1], [79, 1], [79, 1], [79, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [88, 1], [76, 1], [76, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [117, 1], [45, 1], [45, 2], [98, 1], [98, 2], [33, 1], [33, 1], [33, 1], [33, 1]],
    performAction: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
      var $0 = $$.length - 1;
      switch (yystate) {
        case 2:
          this.$ = [];
          break;
        case 3:
          if (!Array.isArray($$[$0]) || $$[$0].length > 0) {
            $$[$0 - 1].push($$[$0]);
          }
          this.$ = $$[$0 - 1];
          break;
        case 4:
        case 176:
          this.$ = $$[$0];
          break;
        case 11:
          yy.setDirection("TB");
          this.$ = "TB";
          break;
        case 12:
          yy.setDirection($$[$0 - 1]);
          this.$ = $$[$0 - 1];
          break;
        case 27:
          this.$ = $$[$0 - 1].nodes;
          break;
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
          this.$ = [];
          break;
        case 33:
          this.$ = yy.addSubGraph($$[$0 - 6], $$[$0 - 1], $$[$0 - 4]);
          break;
        case 34:
          this.$ = yy.addSubGraph($$[$0 - 3], $$[$0 - 1], $$[$0 - 3]);
          break;
        case 35:
          this.$ = yy.addSubGraph(void 0, $$[$0 - 1], void 0);
          break;
        case 37:
          this.$ = $$[$0].trim();
          yy.setAccTitle(this.$);
          break;
        case 38:
        case 39:
          this.$ = $$[$0].trim();
          yy.setAccDescription(this.$);
          break;
        case 43:
          yy.addLink($$[$0 - 2].stmt, $$[$0], $$[$0 - 1]);
          this.$ = { stmt: $$[$0], nodes: $$[$0].concat($$[$0 - 2].nodes) };
          break;
        case 44:
          yy.addLink($$[$0 - 3].stmt, $$[$0 - 1], $$[$0 - 2]);
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1].concat($$[$0 - 3].nodes) };
          break;
        case 45:
          this.$ = { stmt: $$[$0 - 1], nodes: $$[$0 - 1] };
          break;
        case 46:
          this.$ = { stmt: $$[$0], nodes: $$[$0] };
          break;
        case 47:
          this.$ = [$$[$0]];
          break;
        case 48:
          this.$ = $$[$0 - 4].concat($$[$0]);
          break;
        case 49:
          this.$ = $$[$0];
          break;
        case 50:
          this.$ = $$[$0 - 2];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 51:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "square");
          break;
        case 52:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "doublecircle");
          break;
        case 53:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "circle");
          break;
        case 54:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "ellipse");
          break;
        case 55:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "stadium");
          break;
        case 56:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "subroutine");
          break;
        case 57:
          this.$ = $$[$0 - 7];
          yy.addVertex($$[$0 - 7], $$[$0 - 1], "rect", void 0, void 0, void 0, Object.fromEntries([[$$[$0 - 5], $$[$0 - 3]]]));
          break;
        case 58:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "cylinder");
          break;
        case 59:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "round");
          break;
        case 60:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "diamond");
          break;
        case 61:
          this.$ = $$[$0 - 5];
          yy.addVertex($$[$0 - 5], $$[$0 - 2], "hexagon");
          break;
        case 62:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "odd");
          break;
        case 63:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "trapezoid");
          break;
        case 64:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "inv_trapezoid");
          break;
        case 65:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_right");
          break;
        case 66:
          this.$ = $$[$0 - 3];
          yy.addVertex($$[$0 - 3], $$[$0 - 1], "lean_left");
          break;
        case 67:
          this.$ = $$[$0];
          yy.addVertex($$[$0]);
          break;
        case 68:
          $$[$0 - 1].text = $$[$0];
          this.$ = $$[$0 - 1];
          break;
        case 69:
        case 70:
          $$[$0 - 2].text = $$[$0 - 1];
          this.$ = $$[$0 - 2];
          break;
        case 71:
          this.$ = $$[$0];
          break;
        case 72:
          var inf = yy.destructLink($$[$0], $$[$0 - 2]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length, "text": $$[$0 - 1] };
          break;
        case 73:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 74:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 75:
          this.$ = { text: $$[$0], type: "string" };
          break;
        case 76:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 77:
          var inf = yy.destructLink($$[$0]);
          this.$ = { "type": inf.type, "stroke": inf.stroke, "length": inf.length };
          break;
        case 78:
          this.$ = $$[$0 - 1];
          break;
        case 79:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 80:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 81:
          this.$ = { text: $$[$0], type: "string" };
          break;
        case 82:
        case 97:
          this.$ = { text: $$[$0], type: "markdown" };
          break;
        case 94:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 95:
          this.$ = { text: $$[$0 - 1].text + "" + $$[$0], type: $$[$0 - 1].type };
          break;
        case 96:
          this.$ = { text: $$[$0], type: "text" };
          break;
        case 98:
          this.$ = $$[$0 - 4];
          yy.addClass($$[$0 - 2], $$[$0]);
          break;
        case 99:
          this.$ = $$[$0 - 4];
          yy.setClass($$[$0 - 2], $$[$0]);
          break;
        case 100:
        case 108:
          this.$ = $$[$0 - 1];
          yy.setClickEvent($$[$0 - 1], $$[$0]);
          break;
        case 101:
        case 109:
          this.$ = $$[$0 - 3];
          yy.setClickEvent($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 102:
          this.$ = $$[$0 - 2];
          yy.setClickEvent($$[$0 - 2], $$[$0 - 1], $$[$0]);
          break;
        case 103:
          this.$ = $$[$0 - 4];
          yy.setClickEvent($$[$0 - 4], $$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 4], $$[$0]);
          break;
        case 104:
          this.$ = $$[$0 - 2];
          yy.setLink($$[$0 - 2], $$[$0]);
          break;
        case 105:
          this.$ = $$[$0 - 4];
          yy.setLink($$[$0 - 4], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 4], $$[$0]);
          break;
        case 106:
          this.$ = $$[$0 - 4];
          yy.setLink($$[$0 - 4], $$[$0 - 2], $$[$0]);
          break;
        case 107:
          this.$ = $$[$0 - 6];
          yy.setLink($$[$0 - 6], $$[$0 - 4], $$[$0]);
          yy.setTooltip($$[$0 - 6], $$[$0 - 2]);
          break;
        case 110:
          this.$ = $$[$0 - 1];
          yy.setLink($$[$0 - 1], $$[$0]);
          break;
        case 111:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2]);
          yy.setTooltip($$[$0 - 3], $$[$0]);
          break;
        case 112:
          this.$ = $$[$0 - 3];
          yy.setLink($$[$0 - 3], $$[$0 - 2], $$[$0]);
          break;
        case 113:
          this.$ = $$[$0 - 5];
          yy.setLink($$[$0 - 5], $$[$0 - 4], $$[$0]);
          yy.setTooltip($$[$0 - 5], $$[$0 - 2]);
          break;
        case 114:
          this.$ = $$[$0 - 4];
          yy.addVertex($$[$0 - 2], void 0, void 0, $$[$0]);
          break;
        case 115:
          this.$ = $$[$0 - 4];
          yy.updateLink([$$[$0 - 2]], $$[$0]);
          break;
        case 116:
          this.$ = $$[$0 - 4];
          yy.updateLink($$[$0 - 2], $$[$0]);
          break;
        case 117:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate([$$[$0 - 6]], $$[$0 - 2]);
          yy.updateLink([$$[$0 - 6]], $$[$0]);
          break;
        case 118:
          this.$ = $$[$0 - 8];
          yy.updateLinkInterpolate($$[$0 - 6], $$[$0 - 2]);
          yy.updateLink($$[$0 - 6], $$[$0]);
          break;
        case 119:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate([$$[$0 - 4]], $$[$0]);
          break;
        case 120:
          this.$ = $$[$0 - 6];
          yy.updateLinkInterpolate($$[$0 - 4], $$[$0]);
          break;
        case 121:
        case 123:
          this.$ = [$$[$0]];
          break;
        case 122:
        case 124:
          $$[$0 - 2].push($$[$0]);
          this.$ = $$[$0 - 2];
          break;
        case 126:
          this.$ = $$[$0 - 1] + $$[$0];
          break;
        case 174:
          this.$ = $$[$0];
          break;
        case 175:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 177:
          this.$ = $$[$0 - 1] + "" + $$[$0];
          break;
        case 178:
          this.$ = { stmt: "dir", value: "TB" };
          break;
        case 179:
          this.$ = { stmt: "dir", value: "BT" };
          break;
        case 180:
          this.$ = { stmt: "dir", value: "RL" };
          break;
        case 181:
          this.$ = { stmt: "dir", value: "LR" };
          break;
      }
    }, "anonymous"),
    table: [{ 3: 1, 4: 2, 9: $V0, 10: $V1, 12: $V2 }, { 1: [3] }, o($V3, $V4, { 5: 6 }), { 4: 7, 9: $V0, 10: $V1, 12: $V2 }, { 4: 8, 9: $V0, 10: $V1, 12: $V2 }, { 13: [1, 9], 14: [1, 10] }, { 1: [2, 1], 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 40: 28, 41: 38, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 81: $Vf, 82: $Vg, 83: $Vh, 84: $Vi, 85: $Vj, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw }, o($V3, [2, 9]), o($V3, [2, 10]), o($V3, [2, 11]), { 8: [1, 54], 9: [1, 55], 10: $Vx, 15: 53, 18: 56 }, o($Vy, [2, 3]), o($Vy, [2, 4]), o($Vy, [2, 5]), o($Vy, [2, 6]), o($Vy, [2, 7]), o($Vy, [2, 8]), { 8: $Vz, 9: $VA, 11: $VB, 21: 58, 39: 59, 70: 63, 73: [1, 64], 75: [1, 65] }, { 8: $Vz, 9: $VA, 11: $VB, 21: 66 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 67 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 68 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 69 }, { 8: $Vz, 9: $VA, 11: $VB, 21: 70 }, { 8: $Vz, 9: $VA, 10: [1, 71], 11: $VB, 21: 72 }, o($Vy, [2, 36]), { 35: [1, 73] }, { 37: [1, 74] }, o($Vy, [2, 39]), o($VC, [2, 46], { 18: 75, 10: $Vx }), { 10: [1, 76] }, { 10: [1, 77] }, { 10: [1, 78] }, { 10: [1, 79] }, { 14: $VD, 42: $VE, 58: $VF, 77: [1, 83], 86: $VG, 92: [1, 80], 94: [1, 81], 98: 82, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN, 117: 84 }, o($Vy, [2, 178]), o($Vy, [2, 179]), o($Vy, [2, 180]), o($Vy, [2, 181]), o($VO, [2, 47]), o($VO, [2, 49], { 44: [1, 96] }), o($VP, [2, 67], { 110: 109, 29: [1, 97], 42: $Vd, 46: [1, 98], 48: [1, 99], 50: [1, 100], 52: [1, 101], 54: [1, 102], 56: [1, 103], 58: $Ve, 61: [1, 104], 63: [1, 105], 65: [1, 106], 66: [1, 107], 68: [1, 108], 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 111: $Vq, 112: $Vr, 113: $Vs }), o($VQ, [2, 174]), o($VQ, [2, 135]), o($VQ, [2, 136]), o($VQ, [2, 137]), o($VQ, [2, 138]), o($VQ, [2, 139]), o($VQ, [2, 140]), o($VQ, [2, 141]), o($VQ, [2, 142]), o($VQ, [2, 143]), o($VQ, [2, 144]), o($VQ, [2, 145]), o($V3, [2, 12]), o($V3, [2, 18]), o($V3, [2, 19]), { 9: [1, 110] }, o($VR, [2, 26], { 18: 111, 10: $Vx }), o($Vy, [2, 27]), { 40: 112, 41: 38, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, o($Vy, [2, 40]), o($Vy, [2, 41]), o($Vy, [2, 42]), o($VS, [2, 71], { 71: 113, 60: [1, 115], 72: [1, 114] }), { 74: 116, 76: 117, 77: [1, 118], 78: [1, 119], 113: $VT, 116: $VU }, o([42, 58, 60, 72, 86, 99, 102, 103, 106, 108, 111, 112, 113], [2, 77]), o($Vy, [2, 28]), o($Vy, [2, 29]), o($Vy, [2, 30]), o($Vy, [2, 31]), o($Vy, [2, 32]), { 10: $VV, 12: $VW, 14: $VX, 27: $VY, 28: 122, 32: $VZ, 42: $V_, 58: $V$, 73: $V01, 77: [1, 124], 78: [1, 125], 80: 135, 81: $V11, 82: $V21, 83: $V31, 84: $V41, 85: $V51, 86: $V61, 87: $V71, 88: 123, 102: $V81, 106: $V91, 108: $Va1, 111: $Vb1, 112: $Vc1, 113: $Vd1 }, o($Ve1, $V4, { 5: 148 }), o($Vy, [2, 37]), o($Vy, [2, 38]), o($VC, [2, 45], { 42: $Vf1 }), { 42: $Vd, 45: 150, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, { 99: [1, 151], 100: 152, 102: [1, 153] }, { 42: $Vd, 45: 154, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, { 42: $Vd, 45: 155, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, o($Vg1, [2, 100], { 10: [1, 156], 93: [1, 157] }), { 77: [1, 158] }, o($Vg1, [2, 108], { 117: 160, 10: [1, 159], 14: $VD, 42: $VE, 58: $VF, 86: $VG, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN }), o($Vg1, [2, 110], { 10: [1, 161] }), o($Vh1, [2, 176]), o($Vh1, [2, 163]), o($Vh1, [2, 164]), o($Vh1, [2, 165]), o($Vh1, [2, 166]), o($Vh1, [2, 167]), o($Vh1, [2, 168]), o($Vh1, [2, 169]), o($Vh1, [2, 170]), o($Vh1, [2, 171]), o($Vh1, [2, 172]), o($Vh1, [2, 173]), { 42: $Vd, 45: 162, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, { 30: 163, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 171, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 173, 48: [1, 172], 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 174, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 175, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 176, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 106: [1, 177] }, { 30: 178, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 179, 63: [1, 180], 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 181, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 182, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 183, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VQ, [2, 175]), o($V3, [2, 20]), o($VR, [2, 25]), o($VC, [2, 43], { 18: 184, 10: $Vx }), o($VS, [2, 68], { 10: [1, 185] }), { 10: [1, 186] }, { 30: 187, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 75: [1, 188], 76: 189, 113: $VT, 116: $VU }, o($Vo1, [2, 73]), o($Vo1, [2, 75]), o($Vo1, [2, 76]), o($Vo1, [2, 161]), o($Vo1, [2, 162]), { 8: $Vz, 9: $VA, 10: $VV, 11: $VB, 12: $VW, 14: $VX, 21: 191, 27: $VY, 29: [1, 190], 32: $VZ, 42: $V_, 58: $V$, 73: $V01, 80: 135, 81: $V11, 82: $V21, 83: $V31, 84: $V41, 85: $V51, 86: $V61, 87: $V71, 88: 192, 102: $V81, 106: $V91, 108: $Va1, 111: $Vb1, 112: $Vc1, 113: $Vd1 }, o($Vp1, [2, 94]), o($Vp1, [2, 96]), o($Vp1, [2, 97]), o($Vp1, [2, 150]), o($Vp1, [2, 151]), o($Vp1, [2, 152]), o($Vp1, [2, 153]), o($Vp1, [2, 154]), o($Vp1, [2, 155]), o($Vp1, [2, 156]), o($Vp1, [2, 157]), o($Vp1, [2, 158]), o($Vp1, [2, 159]), o($Vp1, [2, 160]), o($Vp1, [2, 83]), o($Vp1, [2, 84]), o($Vp1, [2, 85]), o($Vp1, [2, 86]), o($Vp1, [2, 87]), o($Vp1, [2, 88]), o($Vp1, [2, 89]), o($Vp1, [2, 90]), o($Vp1, [2, 91]), o($Vp1, [2, 92]), o($Vp1, [2, 93]), { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 193], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 40: 28, 41: 38, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 81: $Vf, 82: $Vg, 83: $Vh, 84: $Vi, 85: $Vj, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw }, { 10: $Vx, 18: 194 }, { 10: [1, 195], 42: $Vd, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 109, 111: $Vq, 112: $Vr, 113: $Vs }, { 10: [1, 196] }, { 10: [1, 197], 103: [1, 198] }, o($Vq1, [2, 121]), { 10: [1, 199], 42: $Vd, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 109, 111: $Vq, 112: $Vr, 113: $Vs }, { 10: [1, 200], 42: $Vd, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 109, 111: $Vq, 112: $Vr, 113: $Vs }, { 77: [1, 201] }, o($Vg1, [2, 102], { 10: [1, 202] }), o($Vg1, [2, 104], { 10: [1, 203] }), { 77: [1, 204] }, o($Vh1, [2, 177]), { 77: [1, 205], 95: [1, 206] }, o($VO, [2, 50], { 110: 109, 42: $Vd, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 111: $Vq, 112: $Vr, 113: $Vs }), { 31: [1, 207], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($Vr1, [2, 79]), o($Vr1, [2, 81]), o($Vr1, [2, 82]), o($Vr1, [2, 146]), o($Vr1, [2, 147]), o($Vr1, [2, 148]), o($Vr1, [2, 149]), { 47: [1, 209], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 210, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 49: [1, 211], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 51: [1, 212], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 53: [1, 213], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 55: [1, 214], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 58: [1, 215] }, { 62: [1, 216], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 64: [1, 217], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 30: 218, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 31: [1, 219], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 65: $Vi1, 67: [1, 220], 69: [1, 221], 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 65: $Vi1, 67: [1, 223], 69: [1, 222], 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VC, [2, 44], { 42: $Vf1 }), o($VS, [2, 70]), o($VS, [2, 69]), { 60: [1, 224], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VS, [2, 72]), o($Vo1, [2, 74]), { 30: 225, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($Ve1, $V4, { 5: 226 }), o($Vp1, [2, 95]), o($Vy, [2, 35]), { 41: 227, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 228, 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 239, 101: [1, 240], 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 241, 101: [1, 242], 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, { 102: [1, 243] }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 244, 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, { 42: $Vd, 45: 245, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs }, o($Vg1, [2, 101]), { 77: [1, 246] }, { 77: [1, 247], 95: [1, 248] }, o($Vg1, [2, 109]), o($Vg1, [2, 111], { 10: [1, 249] }), o($Vg1, [2, 112]), o($VP, [2, 51]), o($Vr1, [2, 80]), o($VP, [2, 52]), { 49: [1, 250], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VP, [2, 59]), o($VP, [2, 54]), o($VP, [2, 55]), o($VP, [2, 56]), { 106: [1, 251] }, o($VP, [2, 58]), o($VP, [2, 60]), { 64: [1, 252], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VP, [2, 62]), o($VP, [2, 63]), o($VP, [2, 65]), o($VP, [2, 64]), o($VP, [2, 66]), o([10, 42, 58, 86, 99, 102, 103, 106, 108, 111, 112, 113], [2, 78]), { 31: [1, 253], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 254], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 40: 28, 41: 38, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 81: $Vf, 82: $Vg, 83: $Vh, 84: $Vi, 85: $Vj, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw }, o($VO, [2, 48]), o($Vg1, [2, 114], { 103: $VA1 }), o($VB1, [2, 123], { 105: 256, 10: $Vs1, 58: $Vt1, 81: $Vu1, 102: $Vv1, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }), o($VC1, [2, 125]), o($VC1, [2, 127]), o($VC1, [2, 128]), o($VC1, [2, 129]), o($VC1, [2, 130]), o($VC1, [2, 131]), o($VC1, [2, 132]), o($VC1, [2, 133]), o($VC1, [2, 134]), o($Vg1, [2, 115], { 103: $VA1 }), { 10: [1, 257] }, o($Vg1, [2, 116], { 103: $VA1 }), { 10: [1, 258] }, o($Vq1, [2, 122]), o($Vg1, [2, 98], { 103: $VA1 }), o($Vg1, [2, 99], { 110: 109, 42: $Vd, 58: $Ve, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 111: $Vq, 112: $Vr, 113: $Vs }), o($Vg1, [2, 103]), o($Vg1, [2, 105], { 10: [1, 259] }), o($Vg1, [2, 106]), { 95: [1, 260] }, { 49: [1, 261] }, { 60: [1, 262] }, { 64: [1, 263] }, { 8: $Vz, 9: $VA, 11: $VB, 21: 264 }, o($Vy, [2, 34]), { 10: $Vs1, 58: $Vt1, 81: $Vu1, 102: $Vv1, 104: 265, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, o($VC1, [2, 126]), { 14: $VD, 42: $VE, 58: $VF, 86: $VG, 98: 266, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN, 117: 84 }, { 14: $VD, 42: $VE, 58: $VF, 86: $VG, 98: 267, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN, 117: 84 }, { 95: [1, 268] }, o($Vg1, [2, 113]), o($VP, [2, 53]), { 30: 269, 65: $Vi1, 77: $Vj1, 78: $Vk1, 79: 164, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, o($VP, [2, 61]), o($Ve1, $V4, { 5: 270 }), o($VB1, [2, 124], { 105: 256, 10: $Vs1, 58: $Vt1, 81: $Vu1, 102: $Vv1, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }), o($Vg1, [2, 119], { 117: 160, 10: [1, 271], 14: $VD, 42: $VE, 58: $VF, 86: $VG, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN }), o($Vg1, [2, 120], { 117: 160, 10: [1, 272], 14: $VD, 42: $VE, 58: $VF, 86: $VG, 102: $VH, 103: $VI, 106: $VJ, 108: $VK, 111: $VL, 112: $VM, 113: $VN }), o($Vg1, [2, 107]), { 31: [1, 273], 65: $Vi1, 79: 208, 113: $Vl1, 114: $Vm1, 115: $Vn1 }, { 6: 11, 7: 12, 8: $V5, 9: $V6, 10: $V7, 11: $V8, 20: 17, 22: 18, 23: 19, 24: 20, 25: 21, 26: 22, 27: $V9, 32: [1, 274], 33: 24, 34: $Va, 36: $Vb, 38: $Vc, 40: 28, 41: 38, 42: $Vd, 43: 39, 45: 40, 58: $Ve, 81: $Vf, 82: $Vg, 83: $Vh, 84: $Vi, 85: $Vj, 86: $Vk, 99: $Vl, 102: $Vm, 103: $Vn, 106: $Vo, 108: $Vp, 110: 41, 111: $Vq, 112: $Vr, 113: $Vs, 118: $Vt, 119: $Vu, 120: $Vv, 121: $Vw }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 275, 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, { 10: $Vs1, 58: $Vt1, 81: $Vu1, 89: 276, 102: $Vv1, 104: 229, 105: 230, 106: $Vw1, 107: $Vx1, 108: $Vy1, 109: $Vz1 }, o($VP, [2, 57]), o($Vy, [2, 33]), o($Vg1, [2, 117], { 103: $VA1 }), o($Vg1, [2, 118], { 103: $VA1 })],
    defaultActions: {},
    parseError: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str);
      } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
      }
    }, "parseError"),
    parse: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function parse(input) {
      var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      var args = lstack.slice.call(arguments, 1);
      var lexer2 = Object.create(this.lexer);
      var sharedState = { yy: {} };
      for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k];
        }
      }
      lexer2.setInput(input, sharedState.yy);
      sharedState.yy.lexer = lexer2;
      sharedState.yy.parser = this;
      if (typeof lexer2.yylloc == "undefined") {
        lexer2.yylloc = {};
      }
      var yyloc = lexer2.yylloc;
      lstack.push(yyloc);
      var ranges = lexer2.options && lexer2.options.ranges;
      if (typeof sharedState.yy.parseError === "function") {
        this.parseError = sharedState.yy.parseError;
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
      }
      function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
      }
      (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(popStack, "popStack");
      function lex2() {
        var token;
        token = tstack.pop() || lexer2.lex() || EOF;
        if (typeof token !== "number") {
          if (token instanceof Array) {
            tstack = token;
            token = tstack.pop();
          }
          token = self.symbols_[token] || token;
        }
        return token;
      }
      (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(lex2, "lex");
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
          action = this.defaultActions[state];
        } else {
          if (symbol === null || typeof symbol == "undefined") {
            symbol = lex2();
          }
          action = table[state] && table[state][symbol];
        }
        if (typeof action === "undefined" || !action.length || !action[0]) {
          var errStr = "";
          expected = [];
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push("'" + this.terminals_[p] + "'");
            }
          }
          if (lexer2.showPosition) {
            errStr = "Parse error on line " + (yylineno + 1) + ":\n" + lexer2.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
          } else {
            errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == EOF ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
          }
          this.parseError(errStr, {
            text: lexer2.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer2.yylineno,
            loc: yyloc,
            expected
          });
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol);
            vstack.push(lexer2.yytext);
            lstack.push(lexer2.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
              yyleng = lexer2.yyleng;
              yytext = lexer2.yytext;
              yylineno = lexer2.yylineno;
              yyloc = lexer2.yylloc;
              if (recovering > 0) {
                recovering--;
              }
            } else {
              symbol = preErrorSymbol;
              preErrorSymbol = null;
            }
            break;
          case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
              yyval._$.range = [
                lstack[lstack.length - (len || 1)].range[0],
                lstack[lstack.length - 1].range[1]
              ];
            }
            r = this.performAction.apply(yyval, [
              yytext,
              yyleng,
              yylineno,
              sharedState.yy,
              action[1],
              vstack,
              lstack
            ].concat(args));
            if (typeof r !== "undefined") {
              return r;
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2);
              vstack = vstack.slice(0, -1 * len);
              lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }, "parse")
  };
  var lexer = /* @__PURE__ */ function() {
    var lexer2 = {
      EOF: 1,
      parseError: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash);
        } else {
          throw new Error(str);
        }
      }, "parseError"),
      // resets the lexer, sets new input
      setInput: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = "";
        this.conditionStack = ["INITIAL"];
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        };
        if (this.options.ranges) {
          this.yylloc.range = [0, 0];
        }
        this.offset = 0;
        return this;
      }, "setInput"),
      // consumes and returns one char from the input
      input: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno++;
          this.yylloc.last_line++;
        } else {
          this.yylloc.last_column++;
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++;
        }
        this._input = this._input.slice(1);
        return ch;
      }, "input"),
      // unshifts one char (or a string) into the input
      unput: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);
        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);
        if (lines.length - 1) {
          this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;
        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
        };
        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
      }, "unput"),
      // When called from action, caches matched text and appends it on next action
      more: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        this._more = true;
        return this;
      }, "more"),
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
        return this;
      }, "reject"),
      // retain first n characters of the match
      less: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(n) {
        this.unput(this.match.slice(n));
      }, "less"),
      // displays already matched input, i.e. for error messages
      pastInput: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
      }, "pastInput"),
      // displays upcoming input, i.e. for error messages
      upcomingInput: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        var next = this.match;
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length);
        }
        return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, "upcomingInput"),
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
      }, "showPosition"),
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function(match, indexed_rule) {
        var token, lines, backup;
        if (this.options.backtrack_lexer) {
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done
          };
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0);
          }
        }
        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
          this.yylineno += lines.length;
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
          this.done = false;
        }
        if (token) {
          return token;
        } else if (this._backtrack) {
          for (var k in backup) {
            this[k] = backup[k];
          }
          return false;
        }
        return false;
      }, "test_match"),
      // return next match in input
      next: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function() {
        if (this.done) {
          return this.EOF;
        }
        if (!this._input) {
          this.done = true;
        }
        var token, match, tempMatch, index;
        if (!this._more) {
          this.yytext = "";
          this.match = "";
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]]);
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch;
            index = i;
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i]);
              if (token !== false) {
                return token;
              } else if (this._backtrack) {
                match = false;
                continue;
              } else {
                return false;
              }
            } else if (!this.options.flex) {
              break;
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index]);
          if (token !== false) {
            return token;
          }
          return false;
        }
        if (this._input === "") {
          return this.EOF;
        } else {
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        }
      }, "next"),
      // return next match that has a token
      lex: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function lex2() {
        var r = this.next();
        if (r) {
          return r;
        } else {
          return this.lex();
        }
      }, "lex"),
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function begin(condition) {
        this.conditionStack.push(condition);
      }, "begin"),
      // pop the previously active lexer condition state off the condition stack
      popState: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
          return this.conditionStack.pop();
        } else {
          return this.conditionStack[0];
        }
      }, "popState"),
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
          return this.conditions["INITIAL"].rules;
        }
      }, "_currentRules"),
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
          return this.conditionStack[n];
        } else {
          return "INITIAL";
        }
      }, "topState"),
      // alias for begin(condition)
      pushState: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function pushState(condition) {
        this.begin(condition);
      }, "pushState"),
      // return the number of states currently on the stack
      stateStackSize: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function stateStackSize() {
        return this.conditionStack.length;
      }, "stateStackSize"),
      options: {},
      performAction: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        var YYSTATE = YY_START;
        switch ($avoiding_name_collisions) {
          case 0:
            this.begin("acc_title");
            return 34;
            break;
          case 1:
            this.popState();
            return "acc_title_value";
            break;
          case 2:
            this.begin("acc_descr");
            return 36;
            break;
          case 3:
            this.popState();
            return "acc_descr_value";
            break;
          case 4:
            this.begin("acc_descr_multiline");
            break;
          case 5:
            this.popState();
            break;
          case 6:
            return "acc_descr_multiline_value";
            break;
          case 7:
            this.begin("callbackname");
            break;
          case 8:
            this.popState();
            break;
          case 9:
            this.popState();
            this.begin("callbackargs");
            break;
          case 10:
            return 92;
            break;
          case 11:
            this.popState();
            break;
          case 12:
            return 93;
            break;
          case 13:
            return "MD_STR";
            break;
          case 14:
            this.popState();
            break;
          case 15:
            this.begin("md_string");
            break;
          case 16:
            return "STR";
            break;
          case 17:
            this.popState();
            break;
          case 18:
            this.pushState("string");
            break;
          case 19:
            return 81;
            break;
          case 20:
            return 99;
            break;
          case 21:
            return 82;
            break;
          case 22:
            return 101;
            break;
          case 23:
            return 83;
            break;
          case 24:
            return 84;
            break;
          case 25:
            return 94;
            break;
          case 26:
            this.begin("click");
            break;
          case 27:
            this.popState();
            break;
          case 28:
            return 85;
            break;
          case 29:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 30:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 31:
            if (yy.lex.firstGraph()) {
              this.begin("dir");
            }
            return 12;
            break;
          case 32:
            return 27;
            break;
          case 33:
            return 32;
            break;
          case 34:
            return 95;
            break;
          case 35:
            return 95;
            break;
          case 36:
            return 95;
            break;
          case 37:
            return 95;
            break;
          case 38:
            this.popState();
            return 13;
            break;
          case 39:
            this.popState();
            return 14;
            break;
          case 40:
            this.popState();
            return 14;
            break;
          case 41:
            this.popState();
            return 14;
            break;
          case 42:
            this.popState();
            return 14;
            break;
          case 43:
            this.popState();
            return 14;
            break;
          case 44:
            this.popState();
            return 14;
            break;
          case 45:
            this.popState();
            return 14;
            break;
          case 46:
            this.popState();
            return 14;
            break;
          case 47:
            this.popState();
            return 14;
            break;
          case 48:
            this.popState();
            return 14;
            break;
          case 49:
            return 118;
            break;
          case 50:
            return 119;
            break;
          case 51:
            return 120;
            break;
          case 52:
            return 121;
            break;
          case 53:
            return 102;
            break;
          case 54:
            return 108;
            break;
          case 55:
            return 44;
            break;
          case 56:
            return 58;
            break;
          case 57:
            return 42;
            break;
          case 58:
            return 8;
            break;
          case 59:
            return 103;
            break;
          case 60:
            return 112;
            break;
          case 61:
            this.popState();
            return 75;
            break;
          case 62:
            this.pushState("edgeText");
            return 73;
            break;
          case 63:
            return 116;
            break;
          case 64:
            this.popState();
            return 75;
            break;
          case 65:
            this.pushState("thickEdgeText");
            return 73;
            break;
          case 66:
            return 116;
            break;
          case 67:
            this.popState();
            return 75;
            break;
          case 68:
            this.pushState("dottedEdgeText");
            return 73;
            break;
          case 69:
            return 116;
            break;
          case 70:
            return 75;
            break;
          case 71:
            this.popState();
            return 51;
            break;
          case 72:
            return "TEXT";
            break;
          case 73:
            this.pushState("ellipseText");
            return 50;
            break;
          case 74:
            this.popState();
            return 53;
            break;
          case 75:
            this.pushState("text");
            return 52;
            break;
          case 76:
            this.popState();
            return 55;
            break;
          case 77:
            this.pushState("text");
            return 54;
            break;
          case 78:
            return 56;
            break;
          case 79:
            this.pushState("text");
            return 65;
            break;
          case 80:
            this.popState();
            return 62;
            break;
          case 81:
            this.pushState("text");
            return 61;
            break;
          case 82:
            this.popState();
            return 47;
            break;
          case 83:
            this.pushState("text");
            return 46;
            break;
          case 84:
            this.popState();
            return 67;
            break;
          case 85:
            this.popState();
            return 69;
            break;
          case 86:
            return 114;
            break;
          case 87:
            this.pushState("trapText");
            return 66;
            break;
          case 88:
            this.pushState("trapText");
            return 68;
            break;
          case 89:
            return 115;
            break;
          case 90:
            return 65;
            break;
          case 91:
            return 87;
            break;
          case 92:
            return "SEP";
            break;
          case 93:
            return 86;
            break;
          case 94:
            return 112;
            break;
          case 95:
            return 108;
            break;
          case 96:
            return 42;
            break;
          case 97:
            return 106;
            break;
          case 98:
            return 111;
            break;
          case 99:
            return 113;
            break;
          case 100:
            this.popState();
            return 60;
            break;
          case 101:
            this.pushState("text");
            return 60;
            break;
          case 102:
            this.popState();
            return 49;
            break;
          case 103:
            this.pushState("text");
            return 48;
            break;
          case 104:
            this.popState();
            return 31;
            break;
          case 105:
            this.pushState("text");
            return 29;
            break;
          case 106:
            this.popState();
            return 64;
            break;
          case 107:
            this.pushState("text");
            return 63;
            break;
          case 108:
            return "TEXT";
            break;
          case 109:
            return "QUOTE";
            break;
          case 110:
            return 9;
            break;
          case 111:
            return 10;
            break;
          case 112:
            return 11;
            break;
        }
      }, "anonymous"),
      rules: [/^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:[^`"]+)/, /^(?:[`]["])/, /^(?:["][`])/, /^(?:[^"]+)/, /^(?:["])/, /^(?:["])/, /^(?:style\b)/, /^(?:default\b)/, /^(?:linkStyle\b)/, /^(?:interpolate\b)/, /^(?:classDef\b)/, /^(?:class\b)/, /^(?:href[\s])/, /^(?:click[\s]+)/, /^(?:[\s\n])/, /^(?:[^\s\n]*)/, /^(?:flowchart-elk\b)/, /^(?:graph\b)/, /^(?:flowchart\b)/, /^(?:subgraph\b)/, /^(?:end\b\s*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:(\r?\n)*\s*\n)/, /^(?:\s*LR\b)/, /^(?:\s*RL\b)/, /^(?:\s*TB\b)/, /^(?:\s*BT\b)/, /^(?:\s*TD\b)/, /^(?:\s*BR\b)/, /^(?:\s*<)/, /^(?:\s*>)/, /^(?:\s*\^)/, /^(?:\s*v\b)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:[0-9]+)/, /^(?:#)/, /^(?::::)/, /^(?::)/, /^(?:&)/, /^(?:;)/, /^(?:,)/, /^(?:\*)/, /^(?:\s*[xo<]?--+[-xo>]\s*)/, /^(?:\s*[xo<]?--\s*)/, /^(?:[^-]|-(?!-)+)/, /^(?:\s*[xo<]?==+[=xo>]\s*)/, /^(?:\s*[xo<]?==\s*)/, /^(?:[^=]|=(?!))/, /^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/, /^(?:\s*[xo<]?-\.\s*)/, /^(?:[^\.]|\.(?!))/, /^(?:\s*~~[\~]+\s*)/, /^(?:[-/\)][\)])/, /^(?:[^\(\)\[\]\{\}]|!\)+)/, /^(?:\(-)/, /^(?:\]\))/, /^(?:\(\[)/, /^(?:\]\])/, /^(?:\[\[)/, /^(?:\[\|)/, /^(?:>)/, /^(?:\)\])/, /^(?:\[\()/, /^(?:\)\)\))/, /^(?:\(\(\()/, /^(?:[\\(?=\])][\]])/, /^(?:\/(?=\])\])/, /^(?:\/(?!\])|\\(?!\])|[^\\\[\]\(\)\{\}\/]+)/, /^(?:\[\/)/, /^(?:\[\\)/, /^(?:<)/, /^(?:>)/, /^(?:\^)/, /^(?:\\\|)/, /^(?:v\b)/, /^(?:\*)/, /^(?:#)/, /^(?:&)/, /^(?:([A-Za-z0-9!"\#$%&'*+\.`?\\_\/]|-(?=[^\>\-\.])|(?!))+)/, /^(?:-)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\|)/, /^(?:\|)/, /^(?:\))/, /^(?:\()/, /^(?:\])/, /^(?:\[)/, /^(?:(\}))/, /^(?:\{)/, /^(?:[^\[\]\(\)\{\}\|\"]+)/, /^(?:")/, /^(?:(\r?\n)+)/, /^(?:\s)/, /^(?:$)/],
      conditions: { "callbackargs": { "rules": [11, 12, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "callbackname": { "rules": [8, 9, 10, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "href": { "rules": [15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "click": { "rules": [15, 18, 27, 28, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "dottedEdgeText": { "rules": [15, 18, 67, 69, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "thickEdgeText": { "rules": [15, 18, 64, 66, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "edgeText": { "rules": [15, 18, 61, 63, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "trapText": { "rules": [15, 18, 70, 73, 75, 77, 81, 83, 84, 85, 86, 87, 88, 101, 103, 105, 107], "inclusive": false }, "ellipseText": { "rules": [15, 18, 70, 71, 72, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "text": { "rules": [15, 18, 70, 73, 74, 75, 76, 77, 80, 81, 82, 83, 87, 88, 100, 101, 102, 103, 104, 105, 106, 107, 108], "inclusive": false }, "vertex": { "rules": [15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "dir": { "rules": [15, 18, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "acc_descr_multiline": { "rules": [5, 6, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "acc_descr": { "rules": [3, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "acc_title": { "rules": [1, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "md_string": { "rules": [13, 14, 15, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "string": { "rules": [15, 16, 17, 18, 70, 73, 75, 77, 81, 83, 87, 88, 101, 103, 105, 107], "inclusive": false }, "INITIAL": { "rules": [0, 2, 4, 7, 15, 18, 19, 20, 21, 22, 23, 24, 25, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 67, 68, 70, 73, 75, 77, 78, 79, 81, 83, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 103, 105, 107, 109, 110, 111, 112], "inclusive": true } }
    };
    return lexer2;
  }();
  parser2.lexer = lexer;
  function Parser() {
    this.yy = {};
  }
  (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)(Parser, "Parser");
  Parser.prototype = parser2;
  parser2.Parser = Parser;
  return new Parser();
}();
parser.parser = parser;
var flow_default = parser;

// src/diagrams/flowchart/styles.ts

var fade = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((color, opacity) => {
  const channel2 = khroma__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A;
  const r = channel2(color, "r");
  const g = channel2(color, "g");
  const b = channel2(color, "b");
  return khroma__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A(r, g, b, opacity);
}, "fade");
var getStyles = /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((options) => `.label {
    font-family: ${options.fontFamily};
    color: ${options.nodeTextColor || options.textColor};
  }
  .cluster-label text {
    fill: ${options.titleColor};
  }
  .cluster-label span {
    color: ${options.titleColor};
  }
  .cluster-label span p {
    background-color: transparent;
  }

  .label text,span {
    fill: ${options.nodeTextColor || options.textColor};
    color: ${options.nodeTextColor || options.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${options.mainBkg};
    stroke: ${options.nodeBorder};
    stroke-width: 1px;
  }
  .rough-node .label text , .node .label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${options.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${options.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${options.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${options.edgeLabelBackground};
    p {
      background-color: ${options.edgeLabelBackground};
    }
    rect {
      opacity: 0.5;
      background-color: ${options.edgeLabelBackground};
      fill: ${options.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${fade(options.edgeLabelBackground, 0.5)};
    // background-color:
  }

  .cluster rect {
    fill: ${options.clusterBkg};
    stroke: ${options.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${options.titleColor};
  }

  .cluster span {
    color: ${options.titleColor};
  }
  /* .cluster div {
    color: ${options.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${options.fontFamily};
    font-size: 12px;
    background: ${options.tertiaryColor};
    border: 1px solid ${options.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${options.textColor};
  }
`, "getStyles");
var styles_default = getStyles;

// src/diagrams/flowchart/flowDiagram.ts
var diagram = {
  parser: flow_default,
  db: flowDb_default,
  renderer: flowRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .__name */ .K2)((cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    if (cnf.layout) {
      (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .setConfig2 */ .XV)({ layout: cnf.layout });
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    (0,_chunk_O2AGWWWV_mjs__WEBPACK_IMPORTED_MODULE_7__/* .setConfig2 */ .XV)({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowDb_default.clear();
    flowDb_default.setGen("gen-2");
  }, "init")
};



/***/ })

};
;