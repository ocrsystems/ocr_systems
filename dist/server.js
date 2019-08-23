!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/",t(t.s=14)}([
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("path")},
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("express")},
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("body-parser")},
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("fs")},
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("http-errors")},
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("cookie-parser")},
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("webpack")},
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("morgan")},
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("webpack-dev-middleware")},
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r,t){const n=t(/*! path */0),o=t(/*! webpack-node-externals */13);e.exports={entry:{server:"./server.js"},output:{path:n.join(__dirname,"dist"),publicPath:"/",filename:"[name].js",pathinfo:!0},watch:!0,mode:process.env.STAGE||"development",target:"node",node:{__dirname:!1,__filename:!1},externals:[o()],module:{rules:[{test:/\.js$/,exclude:/node_modules/,use:{loader:"babel-loader"}},{test:/\.html$/,use:[{loader:"html-loader"}]}]},stats:{errors:!0,warnings:!0,moduleTrace:!0,errorDetails:!0}}},
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("uuid/v1")},
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/*! exports used: spawn */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("child_process")},
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("multer")},
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,r){e.exports=require("webpack-node-externals")},
/*!*******************************!*\
  !*** ./server.js + 3 modules ***!
  \*******************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ./webpack.config.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "body-parser" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "child_process" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "cookie-parser" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "express" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "fs" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "http-errors" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "morgan" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "multer" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "path" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "uuid/v1" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "webpack" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "webpack-dev-middleware" (<- Module is not an ECMAScript module) */function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n),s=t(1),i=t.n(s),a=t(2),u=t.n(a),c=t(4),l=t.n(c),d=t(5),p=t.n(d),f=t(6),m=t.n(f),g=t(7),b=t.n(g),v=t(8),x=t.n(v),y=t(9),w=t.n(y);const _=i.a.Router();_.get("/",function(e,r){r.render("index",{title:"OCR Systems"})});var j=_,h=t(3),q=t.n(h),O=t(10),S=t.n(O),P=t(11),E=t(12);var T=t.n(E)()({limits:{fileSize:4194304}});const k=i.a.Router();k.post("/",T.single("image"),async(e,r)=>{try{const t=o.a.join(__dirname,"./../public/images"),n="".concat(S()(),".png"),s=o.a.resolve("".concat(t,"/").concat(n));if(console.log("req.body.file",typeof e.body.language),!e.body.file)throw new Error("Please provide an image");const i=Buffer.from(e.body.file.buffer.replace(/^data:image\/\w+;base64,/,""),"base64");q.a.writeFile(s,i,"binary",e=>{if(e)throw new Error("Error in image uploading");return console.log("The file was saved!"),!0}),Object(P.spawn)("tesseract",["".concat(t,"/").concat(n),"".concat(t,"/").concat(n)]).on("close",e=>{console.log("code",e),q.a.readFile("".concat(t,"/").concat(n,".txt"),(e,t)=>{if(e)throw new Error("File not find");return console.log("data",t.toString()),r.status(200).send(t.toString())})})}catch(e){console.log("Error in Image uploading",e),r.status(e.statu||502).json({error:e.message})}});var M=k;const R=i()();R.set("views",o.a.join(__dirname,"views")),R.set("view engine","ejs"),R.use(b()("dev")),R.use(u.a.urlencoded({limit:"50mb",extended:!0})),R.use(u.a.json({limit:"50mb",extended:!0})),R.use(p()()),R.use(x()(m()(w.a))),R.use(i.a.static(o.a.join(__dirname,"public"))),R.use("/",j),R.use("/upload",M),R.use((e,r,t)=>t(l()(404))),R.use((e,r,t)=>{t.locals.message=e.message,t.locals.error="development"===r.app.get("env")?e:{},t.status(e.status||500),t.render("error")});const C=process.env.PORT||3e3;R.listen(C,()=>{console.log("App listening to ".concat(C,"....")),console.log("Press Ctrl+C to quit.")})}]);