(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const Q of C)if(Q.type==="childList")for(const E of Q.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&g(E)}).observe(document,{childList:!0,subtree:!0});function I(C){const Q={};return C.integrity&&(Q.integrity=C.integrity),C.referrerPolicy&&(Q.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?Q.credentials="include":C.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function g(C){if(C.ep)return;C.ep=!0;const Q=I(C);fetch(C.href,Q)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ni="171",oe=0,Eo=1,De=2,YD=1,te=2,Jg=3,Vg=0,bI=1,Rg=2,Yg=0,LC=1,SE=2,io=3,oo=4,ee=5,DC=100,ae=101,se=102,he=103,Se=104,ne=200,we=201,re=202,ce=203,nE=204,wE=205,Ge=206,ke=207,le=208,ye=209,Ue=210,Me=211,Ne=212,Ke=213,Je=214,rE=0,cE=1,GE=2,uC=3,kE=4,lE=5,yE=6,UE=7,dD=0,Fe=1,Re=2,Pg=0,pe=1,qe=2,Ye=3,de=4,Le=5,fe=6,He=7,LD=300,mC=301,TC=302,ME=303,NE=304,wQ=306,KE=1e3,eC=1001,JE=1002,sg=1003,ue=1004,pB=1005,cg=1006,LQ=1007,aC=1008,fg=1009,fD=1010,HD=1011,eB=1012,wi=1013,hC=1014,pg=1015,dg=1016,ri=1017,ci=1018,xC=1020,uD=35902,mD=1021,TD=1022,ag=1023,xD=1024,OD=1025,fC=1026,OC=1027,bD=1028,Gi=1029,ZD=1030,ki=1031,li=1033,AQ=33776,IQ=33777,gQ=33778,CQ=33779,FE=35840,RE=35841,pE=35842,qE=35843,YE=36196,dE=37492,LE=37496,fE=37808,HE=37809,uE=37810,mE=37811,TE=37812,xE=37813,OE=37814,bE=37815,ZE=37816,_E=37817,vE=37818,WE=37819,PE=37820,VE=37821,BQ=36492,jE=36494,XE=36495,_D=36283,zE=36284,$E=36285,Ai=36286,me=3200,Te=3201,vD=0,xe=1,Wg="",gg="srgb",bC="srgb-linear",EQ="linear",QI="srgb",rC=7680,Do=519,Oe=512,be=513,Ze=514,WD=515,_e=516,ve=517,We=518,Pe=519,to=35044,eo="300 es",qg=2e3,iQ=2001;class PC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const Q=C.indexOf(I);Q!==-1&&C.splice(Q,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let Q=0,E=C.length;Q<E;Q++)C[Q].call(this,A);A.target=null}}}const LI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fQ=Math.PI/180,Ii=180/Math.PI;function cB(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(LI[B&255]+LI[B>>8&255]+LI[B>>16&255]+LI[B>>24&255]+"-"+LI[A&255]+LI[A>>8&255]+"-"+LI[A>>16&15|64]+LI[A>>24&255]+"-"+LI[I&63|128]+LI[I>>8&255]+"-"+LI[I>>16&255]+LI[I>>24&255]+LI[g&255]+LI[g>>8&255]+LI[g>>16&255]+LI[g>>24&255]).toLowerCase()}function _A(B,A,I){return Math.max(A,Math.min(I,B))}function Ve(B,A){return(B%A+A)%A}function HQ(B,A,I){return(1-I)*B+I*A}function zC(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function xI(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}class pA{constructor(A=0,I=0){pA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=_A(this.x,A.x,I.x),this.y=_A(this.y,A.y,I.y),this}clampScalar(A,I){return this.x=_A(this.x,A,I),this.y=_A(this.y,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(_A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(_A(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class HA{constructor(A,I,g,C,Q,E,i,o,D){HA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,D)}set(A,I,g,C,Q,E,i,o,D){const e=this.elements;return e[0]=A,e[1]=C,e[2]=i,e[3]=I,e[4]=Q,e[5]=o,e[6]=g,e[7]=E,e[8]=D,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],D=g[1],e=g[4],a=g[7],s=g[2],S=g[5],r=g[8],k=C[0],n=C[3],h=C[6],N=C[1],U=C[4],y=C[7],f=C[2],J=C[5],F=C[8];return Q[0]=E*k+i*N+o*f,Q[3]=E*n+i*U+o*J,Q[6]=E*h+i*y+o*F,Q[1]=D*k+e*N+a*f,Q[4]=D*n+e*U+a*J,Q[7]=D*h+e*y+a*F,Q[2]=s*k+S*N+r*f,Q[5]=s*n+S*U+r*J,Q[8]=s*h+S*y+r*F,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],D=A[7],e=A[8];return I*E*e-I*i*D-g*Q*e+g*i*o+C*Q*D-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],D=A[7],e=A[8],a=e*E-i*D,s=i*o-e*Q,S=D*Q-E*o,r=I*a+g*s+C*S;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const k=1/r;return A[0]=a*k,A[1]=(C*D-e*g)*k,A[2]=(i*g-C*E)*k,A[3]=s*k,A[4]=(e*I-C*o)*k,A[5]=(C*Q-i*I)*k,A[6]=S*k,A[7]=(g*o-D*I)*k,A[8]=(E*I-g*Q)*k,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),D=Math.sin(Q);return this.set(g*o,g*D,-g*(o*E+D*i)+E+A,-C*D,C*o,-C*(-D*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(uQ.makeScale(A,I)),this}rotate(A){return this.premultiply(uQ.makeRotation(-A)),this}translate(A,I){return this.premultiply(uQ.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const uQ=new HA;function PD(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function oQ(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function je(){const B=oQ("canvas");return B.style.display="block",B}const ao={};function YC(B){B in ao||(ao[B]=!0,console.warn(B))}function Xe(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}function ze(B){const A=B.elements;A[2]=.5*A[2]+.5*A[3],A[6]=.5*A[6]+.5*A[7],A[10]=.5*A[10]+.5*A[11],A[14]=.5*A[14]+.5*A[15]}function $e(B){const A=B.elements;A[11]===-1?(A[10]=-A[10]-1,A[14]=-A[14]):(A[10]=-A[10],A[14]=-A[14]+1)}const so=new HA().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ho=new HA().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Aa(){const B={enabled:!0,workingColorSpace:bC,spaces:{},convert:function(C,Q,E){return this.enabled===!1||Q===E||!Q||!E||(this.spaces[Q].transfer===QI&&(C.r=Lg(C.r),C.g=Lg(C.g),C.b=Lg(C.b)),this.spaces[Q].primaries!==this.spaces[E].primaries&&(C.applyMatrix3(this.spaces[Q].toXYZ),C.applyMatrix3(this.spaces[E].fromXYZ)),this.spaces[E].transfer===QI&&(C.r=HC(C.r),C.g=HC(C.g),C.b=HC(C.b))),C},fromWorkingColorSpace:function(C,Q){return this.convert(C,this.workingColorSpace,Q)},toWorkingColorSpace:function(C,Q){return this.convert(C,Q,this.workingColorSpace)},getPrimaries:function(C){return this.spaces[C].primaries},getTransfer:function(C){return C===Wg?EQ:this.spaces[C].transfer},getLuminanceCoefficients:function(C,Q=this.workingColorSpace){return C.fromArray(this.spaces[Q].luminanceCoefficients)},define:function(C){Object.assign(this.spaces,C)},_getMatrix:function(C,Q,E){return C.copy(this.spaces[Q].toXYZ).multiply(this.spaces[E].fromXYZ)},_getDrawingBufferColorSpace:function(C){return this.spaces[C].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(C=this.workingColorSpace){return this.spaces[C].workingColorSpaceConfig.unpackColorSpace}},A=[.64,.33,.3,.6,.15,.06],I=[.2126,.7152,.0722],g=[.3127,.329];return B.define({[bC]:{primaries:A,whitePoint:g,transfer:EQ,toXYZ:so,fromXYZ:ho,luminanceCoefficients:I,workingColorSpaceConfig:{unpackColorSpace:gg},outputColorSpaceConfig:{drawingBufferColorSpace:gg}},[gg]:{primaries:A,whitePoint:g,transfer:QI,toXYZ:so,fromXYZ:ho,luminanceCoefficients:I,outputColorSpaceConfig:{drawingBufferColorSpace:gg}}}),B}const AI=Aa();function Lg(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function HC(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let cC;class Ia{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{cC===void 0&&(cC=oQ("canvas")),cC.width=A.width,cC.height=A.height;const g=cC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=cC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=oQ("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=Lg(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(Lg(I[g]/255)*255):I[g]=Lg(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let ga=0;class VD{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ga++}),this.uuid=cB(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(mQ(C[E].image)):Q.push(mQ(C[E]))}else Q=mQ(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function mQ(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?Ia.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ca=0;class ZI extends PC{constructor(A=ZI.DEFAULT_IMAGE,I=ZI.DEFAULT_MAPPING,g=eC,C=eC,Q=cg,E=aC,i=ag,o=fg,D=ZI.DEFAULT_ANISOTROPY,e=Wg){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ca++}),this.uuid=cB(),this.name="",this.source=new VD(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=D,this.format=i,this.internalFormat=null,this.type=o,this.offset=new pA(0,0),this.repeat=new pA(1,1),this.center=new pA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new HA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==LD)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case KE:A.x=A.x-Math.floor(A.x);break;case eC:A.x=A.x<0?0:1;break;case JE:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case KE:A.y=A.y-Math.floor(A.y);break;case eC:A.y=A.y<0?0:1;break;case JE:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}ZI.DEFAULT_IMAGE=null;ZI.DEFAULT_MAPPING=LD;ZI.DEFAULT_ANISOTROPY=1;class EI{constructor(A=0,I=0,g=0,C=1){EI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this.w/=A.w,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const o=A.elements,D=o[0],e=o[4],a=o[8],s=o[1],S=o[5],r=o[9],k=o[2],n=o[6],h=o[10];if(Math.abs(e-s)<.01&&Math.abs(a-k)<.01&&Math.abs(r-n)<.01){if(Math.abs(e+s)<.1&&Math.abs(a+k)<.1&&Math.abs(r+n)<.1&&Math.abs(D+S+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const U=(D+1)/2,y=(S+1)/2,f=(h+1)/2,J=(e+s)/4,F=(a+k)/4,L=(r+n)/4;return U>y&&U>f?U<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(U),C=J/g,Q=F/g):y>f?y<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(y),g=J/C,Q=L/C):f<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(f),g=F/Q,C=L/Q),this.set(g,C,Q,I),this}let N=Math.sqrt((n-r)*(n-r)+(a-k)*(a-k)+(s-e)*(s-e));return Math.abs(N)<.001&&(N=1),this.x=(n-r)/N,this.y=(a-k)/N,this.z=(s-e)/N,this.w=Math.acos((D+S+h-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=_A(this.x,A.x,I.x),this.y=_A(this.y,A.y,I.y),this.z=_A(this.z,A.z,I.z),this.w=_A(this.w,A.w,I.w),this}clampScalar(A,I){return this.x=_A(this.x,A,I),this.y=_A(this.y,A,I),this.z=_A(this.z,A,I),this.w=_A(this.w,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(_A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ba extends PC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new EI(0,0,A,I),this.scissorTest=!1,this.viewport=new EI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cg,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new ZI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new VD(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hg extends Ba{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class jD extends ZI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=sg,this.minFilter=sg,this.wrapR=eC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qa extends ZI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=sg,this.minFilter=sg,this.wrapR=eC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class GB{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],D=g[C+1],e=g[C+2],a=g[C+3];const s=Q[E+0],S=Q[E+1],r=Q[E+2],k=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=D,A[I+2]=e,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=S,A[I+2]=r,A[I+3]=k;return}if(a!==k||o!==s||D!==S||e!==r){let n=1-i;const h=o*s+D*S+e*r+a*k,N=h>=0?1:-1,U=1-h*h;if(U>Number.EPSILON){const f=Math.sqrt(U),J=Math.atan2(f,h*N);n=Math.sin(n*J)/f,i=Math.sin(i*J)/f}const y=i*N;if(o=o*n+s*y,D=D*n+S*y,e=e*n+r*y,a=a*n+k*y,n===1-i){const f=1/Math.sqrt(o*o+D*D+e*e+a*a);o*=f,D*=f,e*=f,a*=f}}A[I]=o,A[I+1]=D,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],D=g[C+2],e=g[C+3],a=Q[E],s=Q[E+1],S=Q[E+2],r=Q[E+3];return A[I]=i*r+e*a+o*S-D*s,A[I+1]=o*r+e*s+D*a-i*S,A[I+2]=D*r+e*S+i*s-o*a,A[I+3]=e*r-i*a-o*s-D*S,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,D=i(g/2),e=i(C/2),a=i(Q/2),s=o(g/2),S=o(C/2),r=o(Q/2);switch(E){case"XYZ":this._x=s*e*a+D*S*r,this._y=D*S*a-s*e*r,this._z=D*e*r+s*S*a,this._w=D*e*a-s*S*r;break;case"YXZ":this._x=s*e*a+D*S*r,this._y=D*S*a-s*e*r,this._z=D*e*r-s*S*a,this._w=D*e*a+s*S*r;break;case"ZXY":this._x=s*e*a-D*S*r,this._y=D*S*a+s*e*r,this._z=D*e*r+s*S*a,this._w=D*e*a-s*S*r;break;case"ZYX":this._x=s*e*a-D*S*r,this._y=D*S*a+s*e*r,this._z=D*e*r-s*S*a,this._w=D*e*a+s*S*r;break;case"YZX":this._x=s*e*a+D*S*r,this._y=D*S*a+s*e*r,this._z=D*e*r-s*S*a,this._w=D*e*a-s*S*r;break;case"XZY":this._x=s*e*a-D*S*r,this._y=D*S*a-s*e*r,this._z=D*e*r+s*S*a,this._w=D*e*a+s*S*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],D=I[2],e=I[6],a=I[10],s=g+i+a;if(s>0){const S=.5/Math.sqrt(s+1);this._w=.25/S,this._x=(e-o)*S,this._y=(Q-D)*S,this._z=(E-C)*S}else if(g>i&&g>a){const S=2*Math.sqrt(1+g-i-a);this._w=(e-o)/S,this._x=.25*S,this._y=(C+E)/S,this._z=(Q+D)/S}else if(i>a){const S=2*Math.sqrt(1+i-g-a);this._w=(Q-D)/S,this._x=(C+E)/S,this._y=.25*S,this._z=(o+e)/S}else{const S=2*Math.sqrt(1+a-g-i);this._w=(E-C)/S,this._x=(Q+D)/S,this._y=(o+e)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(_A(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,D=I._z,e=I._w;return this._x=g*e+E*i+C*D-Q*o,this._y=C*e+E*o+Q*i-g*D,this._z=Q*e+E*D+g*o-C*i,this._w=E*e-g*i-C*o-Q*D,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const S=1-I;return this._w=S*E+I*this._w,this._x=S*g+I*this._x,this._y=S*C+I*this._y,this._z=S*Q+I*this._z,this.normalize(),this}const D=Math.sqrt(o),e=Math.atan2(D,i),a=Math.sin((1-I)*e)/D,s=Math.sin(I*e)/D;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class m{constructor(A=0,I=0,g=0){m.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(So.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(So.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,D=2*(E*C-i*g),e=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*D+E*a-i*e,this.y=g+o*e+i*D-Q*a,this.z=C+o*a+Q*e-E*D,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=_A(this.x,A.x,I.x),this.y=_A(this.y,A.y,I.y),this.z=_A(this.z,A.z,I.z),this}clampScalar(A,I){return this.x=_A(this.x,A,I),this.y=_A(this.y,A,I),this.z=_A(this.z,A,I),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(_A(g,A,I))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return TQ.copy(this).projectOnVector(A),this.sub(TQ)}reflect(A){return this.sub(TQ.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(_A(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const TQ=new m,So=new GB;class kB{constructor(A=new m(1/0,1/0,1/0),I=new m(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(Eg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(Eg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=Eg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,Eg):Eg.fromBufferAttribute(Q,E),Eg.applyMatrix4(A.matrixWorld),this.expandByPoint(Eg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),qB.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),qB.copy(g.boundingBox)),qB.applyMatrix4(A.matrixWorld),this.union(qB)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,Eg),Eg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter($C),YB.subVectors(this.max,$C),GC.subVectors(A.a,$C),kC.subVectors(A.b,$C),lC.subVectors(A.c,$C),xg.subVectors(kC,GC),Og.subVectors(lC,kC),AC.subVectors(GC,lC);let I=[0,-xg.z,xg.y,0,-Og.z,Og.y,0,-AC.z,AC.y,xg.z,0,-xg.x,Og.z,0,-Og.x,AC.z,0,-AC.x,-xg.y,xg.x,0,-Og.y,Og.x,0,-AC.y,AC.x,0];return!xQ(I,GC,kC,lC,YB)||(I=[1,0,0,0,1,0,0,0,1],!xQ(I,GC,kC,lC,YB))?!1:(dB.crossVectors(xg,Og),I=[dB.x,dB.y,dB.z],xQ(I,GC,kC,lC,YB))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,Eg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(Eg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(yg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),yg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),yg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),yg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),yg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),yg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),yg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),yg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(yg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const yg=[new m,new m,new m,new m,new m,new m,new m,new m],Eg=new m,qB=new kB,GC=new m,kC=new m,lC=new m,xg=new m,Og=new m,AC=new m,$C=new m,YB=new m,dB=new m,IC=new m;function xQ(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){IC.fromArray(B,Q);const i=C.x*Math.abs(IC.x)+C.y*Math.abs(IC.y)+C.z*Math.abs(IC.z),o=A.dot(IC),D=I.dot(IC),e=g.dot(IC);if(Math.max(-Math.max(o,D,e),Math.min(o,D,e))>i)return!1}return!0}const Ea=new kB,AB=new m,OQ=new m;class yi{constructor(A=new m,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Ea.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;AB.subVectors(A,this.center);const I=AB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(AB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(OQ.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(AB.copy(A.center).add(OQ)),this.expandByPoint(AB.copy(A.center).sub(OQ))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ug=new m,bQ=new m,LB=new m,bg=new m,ZQ=new m,fB=new m,_Q=new m;class ia{constructor(A=new m,I=new m(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,Ug)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=Ug.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(Ug.copy(this.origin).addScaledVector(this.direction,I),Ug.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){bQ.copy(A).add(I).multiplyScalar(.5),LB.copy(I).sub(A).normalize(),bg.copy(this.origin).sub(bQ);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(LB),i=bg.dot(this.direction),o=-bg.dot(LB),D=bg.lengthSq(),e=Math.abs(1-E*E);let a,s,S,r;if(e>0)if(a=E*o-i,s=E*i-o,r=Q*e,a>=0)if(s>=-r)if(s<=r){const k=1/e;a*=k,s*=k,S=a*(a+E*s+2*i)+s*(E*a+s+2*o)+D}else s=Q,a=Math.max(0,-(E*s+i)),S=-a*a+s*(s+2*o)+D;else s=-Q,a=Math.max(0,-(E*s+i)),S=-a*a+s*(s+2*o)+D;else s<=-r?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),S=-a*a+s*(s+2*o)+D):s<=r?(a=0,s=Math.min(Math.max(-Q,-o),Q),S=s*(s+2*o)+D):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),S=-a*a+s*(s+2*o)+D);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),S=-a*a+s*(s+2*o)+D;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(bQ).addScaledVector(LB,s),S}intersectSphere(A,I){Ug.subVectors(A.center,this.origin);const g=Ug.dot(this.direction),C=Ug.dot(Ug)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const D=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,s=this.origin;return D>=0?(g=(A.min.x-s.x)*D,C=(A.max.x-s.x)*D):(g=(A.max.x-s.x)*D,C=(A.min.x-s.x)*D),e>=0?(Q=(A.min.y-s.y)*e,E=(A.max.y-s.y)*e):(Q=(A.max.y-s.y)*e,E=(A.min.y-s.y)*e),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,Ug)!==null}intersectTriangle(A,I,g,C,Q){ZQ.subVectors(I,A),fB.subVectors(g,A),_Q.crossVectors(ZQ,fB);let E=this.direction.dot(_Q),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;bg.subVectors(this.origin,A);const o=i*this.direction.dot(fB.crossVectors(bg,fB));if(o<0)return null;const D=i*this.direction.dot(ZQ.cross(bg));if(D<0||o+D>E)return null;const e=-i*bg.dot(_Q);return e<0?null:this.at(e/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nI{constructor(A,I,g,C,Q,E,i,o,D,e,a,s,S,r,k,n){nI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,D,e,a,s,S,r,k,n)}set(A,I,g,C,Q,E,i,o,D,e,a,s,S,r,k,n){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=C,h[1]=Q,h[5]=E,h[9]=i,h[13]=o,h[2]=D,h[6]=e,h[10]=a,h[14]=s,h[3]=S,h[7]=r,h[11]=k,h[15]=n,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/yC.setFromMatrixColumn(A,0).length(),Q=1/yC.setFromMatrixColumn(A,1).length(),E=1/yC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),D=Math.sin(C),e=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*e,S=E*a,r=i*e,k=i*a;I[0]=o*e,I[4]=-o*a,I[8]=D,I[1]=S+r*D,I[5]=s-k*D,I[9]=-i*o,I[2]=k-s*D,I[6]=r+S*D,I[10]=E*o}else if(A.order==="YXZ"){const s=o*e,S=o*a,r=D*e,k=D*a;I[0]=s+k*i,I[4]=r*i-S,I[8]=E*D,I[1]=E*a,I[5]=E*e,I[9]=-i,I[2]=S*i-r,I[6]=k+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*e,S=o*a,r=D*e,k=D*a;I[0]=s-k*i,I[4]=-E*a,I[8]=r+S*i,I[1]=S+r*i,I[5]=E*e,I[9]=k-s*i,I[2]=-E*D,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*e,S=E*a,r=i*e,k=i*a;I[0]=o*e,I[4]=r*D-S,I[8]=s*D+k,I[1]=o*a,I[5]=k*D+s,I[9]=S*D-r,I[2]=-D,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,S=E*D,r=i*o,k=i*D;I[0]=o*e,I[4]=k-s*a,I[8]=r*a+S,I[1]=a,I[5]=E*e,I[9]=-i*e,I[2]=-D*e,I[6]=S*a+r,I[10]=s-k*a}else if(A.order==="XZY"){const s=E*o,S=E*D,r=i*o,k=i*D;I[0]=o*e,I[4]=-a,I[8]=D*e,I[1]=s*a+k,I[5]=E*e,I[9]=S*a-r,I[2]=r*a-S,I[6]=i*e,I[10]=k*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(oa,A,Da)}lookAt(A,I,g){const C=this.elements;return vI.subVectors(A,I),vI.lengthSq()===0&&(vI.z=1),vI.normalize(),Zg.crossVectors(g,vI),Zg.lengthSq()===0&&(Math.abs(g.z)===1?vI.x+=1e-4:vI.z+=1e-4,vI.normalize(),Zg.crossVectors(g,vI)),Zg.normalize(),HB.crossVectors(vI,Zg),C[0]=Zg.x,C[4]=HB.x,C[8]=vI.x,C[1]=Zg.y,C[5]=HB.y,C[9]=vI.y,C[2]=Zg.z,C[6]=HB.z,C[10]=vI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],D=g[12],e=g[1],a=g[5],s=g[9],S=g[13],r=g[2],k=g[6],n=g[10],h=g[14],N=g[3],U=g[7],y=g[11],f=g[15],J=C[0],F=C[4],L=C[8],l=C[12],G=C[1],p=C[5],v=C[9],b=C[13],V=C[2],AA=C[6],W=C[10],CA=C[14],_=C[3],oA=C[7],hA=C[11],lA=C[15];return Q[0]=E*J+i*G+o*V+D*_,Q[4]=E*F+i*p+o*AA+D*oA,Q[8]=E*L+i*v+o*W+D*hA,Q[12]=E*l+i*b+o*CA+D*lA,Q[1]=e*J+a*G+s*V+S*_,Q[5]=e*F+a*p+s*AA+S*oA,Q[9]=e*L+a*v+s*W+S*hA,Q[13]=e*l+a*b+s*CA+S*lA,Q[2]=r*J+k*G+n*V+h*_,Q[6]=r*F+k*p+n*AA+h*oA,Q[10]=r*L+k*v+n*W+h*hA,Q[14]=r*l+k*b+n*CA+h*lA,Q[3]=N*J+U*G+y*V+f*_,Q[7]=N*F+U*p+y*AA+f*oA,Q[11]=N*L+U*v+y*W+f*hA,Q[15]=N*l+U*b+y*CA+f*lA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],D=A[13],e=A[2],a=A[6],s=A[10],S=A[14],r=A[3],k=A[7],n=A[11],h=A[15];return r*(+Q*o*a-C*D*a-Q*i*s+g*D*s+C*i*S-g*o*S)+k*(+I*o*S-I*D*s+Q*E*s-C*E*S+C*D*e-Q*o*e)+n*(+I*D*a-I*i*S-Q*E*a+g*E*S+Q*i*e-g*D*e)+h*(-C*i*e-I*o*a+I*i*s+C*E*a-g*E*s+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],D=A[7],e=A[8],a=A[9],s=A[10],S=A[11],r=A[12],k=A[13],n=A[14],h=A[15],N=a*n*D-k*s*D+k*o*S-i*n*S-a*o*h+i*s*h,U=r*s*D-e*n*D-r*o*S+E*n*S+e*o*h-E*s*h,y=e*k*D-r*a*D+r*i*S-E*k*S-e*i*h+E*a*h,f=r*a*o-e*k*o-r*i*s+E*k*s+e*i*n-E*a*n,J=I*N+g*U+C*y+Q*f;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/J;return A[0]=N*F,A[1]=(k*s*Q-a*n*Q-k*C*S+g*n*S+a*C*h-g*s*h)*F,A[2]=(i*n*Q-k*o*Q+k*C*D-g*n*D-i*C*h+g*o*h)*F,A[3]=(a*o*Q-i*s*Q-a*C*D+g*s*D+i*C*S-g*o*S)*F,A[4]=U*F,A[5]=(e*n*Q-r*s*Q+r*C*S-I*n*S-e*C*h+I*s*h)*F,A[6]=(r*o*Q-E*n*Q-r*C*D+I*n*D+E*C*h-I*o*h)*F,A[7]=(E*s*Q-e*o*Q+e*C*D-I*s*D-E*C*S+I*o*S)*F,A[8]=y*F,A[9]=(r*a*Q-e*k*Q-r*g*S+I*k*S+e*g*h-I*a*h)*F,A[10]=(E*k*Q-r*i*Q+r*g*D-I*k*D-E*g*h+I*i*h)*F,A[11]=(e*i*Q-E*a*Q-e*g*D+I*a*D+E*g*S-I*i*S)*F,A[12]=f*F,A[13]=(e*k*C-r*a*C+r*g*s-I*k*s-e*g*n+I*a*n)*F,A[14]=(r*i*C-E*k*C-r*g*o+I*k*o+E*g*n-I*i*n)*F,A[15]=(E*a*C-e*i*C+e*g*o-I*a*o-E*g*s+I*i*s)*F,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,D=Q*E,e=Q*i;return this.set(D*E+g,D*i-C*o,D*o+C*i,0,D*i+C*o,e*i+g,e*o-C*E,0,D*o-C*i,e*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,D=Q+Q,e=E+E,a=i+i,s=Q*D,S=Q*e,r=Q*a,k=E*e,n=E*a,h=i*a,N=o*D,U=o*e,y=o*a,f=g.x,J=g.y,F=g.z;return C[0]=(1-(k+h))*f,C[1]=(S+y)*f,C[2]=(r-U)*f,C[3]=0,C[4]=(S-y)*J,C[5]=(1-(s+h))*J,C[6]=(n+N)*J,C[7]=0,C[8]=(r+U)*F,C[9]=(n-N)*F,C[10]=(1-(s+k))*F,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=yC.set(C[0],C[1],C[2]).length();const E=yC.set(C[4],C[5],C[6]).length(),i=yC.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],ig.copy(this);const D=1/Q,e=1/E,a=1/i;return ig.elements[0]*=D,ig.elements[1]*=D,ig.elements[2]*=D,ig.elements[4]*=e,ig.elements[5]*=e,ig.elements[6]*=e,ig.elements[8]*=a,ig.elements[9]*=a,ig.elements[10]*=a,I.setFromRotationMatrix(ig),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=qg){const o=this.elements,D=2*Q/(I-A),e=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let S,r;if(i===qg)S=-(E+Q)/(E-Q),r=-2*E*Q/(E-Q);else if(i===iQ)S=-E/(E-Q),r=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=D,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=e,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=S,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=qg){const o=this.elements,D=1/(I-A),e=1/(g-C),a=1/(E-Q),s=(I+A)*D,S=(g+C)*e;let r,k;if(i===qg)r=(E+Q)*a,k=-2*a;else if(i===iQ)r=Q*a,k=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*D,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*e,o[9]=0,o[13]=-S,o[2]=0,o[6]=0,o[10]=k,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const yC=new m,ig=new nI,oa=new m(0,0,0),Da=new m(1,1,1),Zg=new m,HB=new m,vI=new m,no=new nI,wo=new GB;class kg{constructor(A=0,I=0,g=0,C=kg.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],D=C[5],e=C[9],a=C[2],s=C[6],S=C[10];switch(I){case"XYZ":this._y=Math.asin(_A(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-e,S),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,D),this._z=0);break;case"YXZ":this._x=Math.asin(-_A(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(i,S),this._z=Math.atan2(o,D)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(_A(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,S),this._z=Math.atan2(-E,D)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-_A(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,S),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,D));break;case"YZX":this._z=Math.asin(_A(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,D),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,S));break;case"XZY":this._z=Math.asin(-_A(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,D),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-e,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return no.makeRotationFromQuaternion(A),this.setFromRotationMatrix(no,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return wo.setFromEuler(this),this.setFromQuaternion(wo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kg.DEFAULT_ORDER="XYZ";class XD{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let ta=0;const ro=new m,UC=new GB,Mg=new nI,uB=new m,IB=new m,ea=new m,aa=new GB,co=new m(1,0,0),Go=new m(0,1,0),ko=new m(0,0,1),lo={type:"added"},sa={type:"removed"},MC={type:"childadded",child:null},vQ={type:"childremoved",child:null};class mI extends PC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ta++}),this.uuid=cB(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mI.DEFAULT_UP.clone();const A=new m,I=new kg,g=new GB,C=new m(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new nI},normalMatrix:{value:new HA}}),this.matrix=new nI,this.matrixWorld=new nI,this.matrixAutoUpdate=mI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new XD,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return UC.setFromAxisAngle(A,I),this.quaternion.multiply(UC),this}rotateOnWorldAxis(A,I){return UC.setFromAxisAngle(A,I),this.quaternion.premultiply(UC),this}rotateX(A){return this.rotateOnAxis(co,A)}rotateY(A){return this.rotateOnAxis(Go,A)}rotateZ(A){return this.rotateOnAxis(ko,A)}translateOnAxis(A,I){return ro.copy(A).applyQuaternion(this.quaternion),this.position.add(ro.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(co,A)}translateY(A){return this.translateOnAxis(Go,A)}translateZ(A){return this.translateOnAxis(ko,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Mg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?uB.copy(A):uB.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),IB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mg.lookAt(IB,uB,this.up):Mg.lookAt(uB,IB,this.up),this.quaternion.setFromRotationMatrix(Mg),C&&(Mg.extractRotation(C.matrixWorld),UC.setFromRotationMatrix(Mg),this.quaternion.premultiply(UC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(lo),MC.child=A,this.dispatchEvent(MC),MC.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(sa),vQ.child=A,this.dispatchEvent(vQ),vQ.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Mg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Mg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Mg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(lo),MC.child=A,this.dispatchEvent(MC),MC.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const E=this.children[g].getObjectByProperty(A,I);if(E!==void 0)return E}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(IB,A,ea),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(IB,aa,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let D=0,e=o.length;D<e;D++){const a=o[D];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,D=this.material.length;o<D;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),D=E(A.textures),e=E(A.images),a=E(A.shapes),s=E(A.skeletons),S=E(A.animations),r=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),D.length>0&&(g.textures=D),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),S.length>0&&(g.animations=S),r.length>0&&(g.nodes=r)}return g.object=C,g;function E(i){const o=[];for(const D in i){const e=i[D];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}mI.DEFAULT_UP=new m(0,1,0);mI.DEFAULT_MATRIX_AUTO_UPDATE=!0;mI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const og=new m,Ng=new m,WQ=new m,Kg=new m,NC=new m,KC=new m,yo=new m,PQ=new m,VQ=new m,jQ=new m,XQ=new EI,zQ=new EI,$Q=new EI;class eg{constructor(A=new m,I=new m,g=new m){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),og.subVectors(A,I),C.cross(og);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){og.subVectors(C,I),Ng.subVectors(g,I),WQ.subVectors(A,I);const E=og.dot(og),i=og.dot(Ng),o=og.dot(WQ),D=Ng.dot(Ng),e=Ng.dot(WQ),a=E*D-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,S=(D*o-i*e)*s,r=(E*e-i*o)*s;return Q.set(1-S-r,r,S)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Kg)===null?!1:Kg.x>=0&&Kg.y>=0&&Kg.x+Kg.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,Kg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,Kg.x),o.addScaledVector(E,Kg.y),o.addScaledVector(i,Kg.z),o)}static getInterpolatedAttribute(A,I,g,C,Q,E){return XQ.setScalar(0),zQ.setScalar(0),$Q.setScalar(0),XQ.fromBufferAttribute(A,I),zQ.fromBufferAttribute(A,g),$Q.fromBufferAttribute(A,C),E.setScalar(0),E.addScaledVector(XQ,Q.x),E.addScaledVector(zQ,Q.y),E.addScaledVector($Q,Q.z),E}static isFrontFacing(A,I,g,C){return og.subVectors(g,I),Ng.subVectors(A,I),og.cross(Ng).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return og.subVectors(this.c,this.b),Ng.subVectors(this.a,this.b),og.cross(Ng).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return eg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return eg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return eg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return eg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return eg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;NC.subVectors(C,g),KC.subVectors(Q,g),PQ.subVectors(A,g);const o=NC.dot(PQ),D=KC.dot(PQ);if(o<=0&&D<=0)return I.copy(g);VQ.subVectors(A,C);const e=NC.dot(VQ),a=KC.dot(VQ);if(e>=0&&a<=e)return I.copy(C);const s=o*a-e*D;if(s<=0&&o>=0&&e<=0)return E=o/(o-e),I.copy(g).addScaledVector(NC,E);jQ.subVectors(A,Q);const S=NC.dot(jQ),r=KC.dot(jQ);if(r>=0&&S<=r)return I.copy(Q);const k=S*D-o*r;if(k<=0&&D>=0&&r<=0)return i=D/(D-r),I.copy(g).addScaledVector(KC,i);const n=e*r-S*a;if(n<=0&&a-e>=0&&S-r>=0)return yo.subVectors(Q,C),i=(a-e)/(a-e+(S-r)),I.copy(C).addScaledVector(yo,i);const h=1/(n+k+s);return E=k*h,i=s*h,I.copy(g).addScaledVector(NC,E).addScaledVector(KC,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const zD={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_g={h:0,s:0,l:0},mB={h:0,s:0,l:0};function AE(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class ZA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=gg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,AI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=AI.workingColorSpace){return this.r=A,this.g=I,this.b=g,AI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=AI.workingColorSpace){if(A=Ve(A,1),I=_A(I,0,1),g=_A(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=AE(E,Q,A+1/3),this.g=AE(E,Q,A),this.b=AE(E,Q,A-1/3)}return AI.toWorkingColorSpace(this,C),this}setStyle(A,I=gg){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=gg){const g=zD[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=Lg(A.r),this.g=Lg(A.g),this.b=Lg(A.b),this}copyLinearToSRGB(A){return this.r=HC(A.r),this.g=HC(A.g),this.b=HC(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=gg){return AI.fromWorkingColorSpace(fI.copy(this),A),Math.round(_A(fI.r*255,0,255))*65536+Math.round(_A(fI.g*255,0,255))*256+Math.round(_A(fI.b*255,0,255))}getHexString(A=gg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=AI.workingColorSpace){AI.fromWorkingColorSpace(fI.copy(this),I);const g=fI.r,C=fI.g,Q=fI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,D;const e=(i+E)/2;if(i===E)o=0,D=0;else{const a=E-i;switch(D=e<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=D,A.l=e,A}getRGB(A,I=AI.workingColorSpace){return AI.fromWorkingColorSpace(fI.copy(this),I),A.r=fI.r,A.g=fI.g,A.b=fI.b,A}getStyle(A=gg){AI.fromWorkingColorSpace(fI.copy(this),A);const I=fI.r,g=fI.g,C=fI.b;return A!==gg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(_g),this.setHSL(_g.h+A,_g.s+I,_g.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(_g),A.getHSL(mB);const g=HQ(_g.h,mB.h,I),C=HQ(_g.s,mB.s,I),Q=HQ(_g.l,mB.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fI=new ZA;ZA.NAMES=zD;let ha=0;class lB extends PC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ha++}),this.uuid=cB(),this.name="",this.type="Material",this.blending=LC,this.side=Vg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nE,this.blendDst=wE,this.blendEquation=DC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ZA(0,0,0),this.blendAlpha=0,this.depthFunc=uC,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rC,this.stencilZFail=rC,this.stencilZPass=rC,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==LC&&(g.blending=this.blending),this.side!==Vg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==nE&&(g.blendSrc=this.blendSrc),this.blendDst!==wE&&(g.blendDst=this.blendDst),this.blendEquation!==DC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==uC&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rC&&(g.stencilFail=this.stencilFail),this.stencilZFail!==rC&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==rC&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rQ extends lB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ZA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kg,this.combine=dD,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const lI=new m,TB=new pA;class Gg{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=to,this.updateRanges=[],this.gpuType=pg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)TB.fromBufferAttribute(this,I),TB.applyMatrix3(A),this.setXY(I,TB.x,TB.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix3(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyMatrix4(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.applyNormalMatrix(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)lI.fromBufferAttribute(this,I),lI.transformDirection(A),this.setXYZ(I,lI.x,lI.y,lI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=zC(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=xI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=zC(I,this.array)),I}setX(A,I){return this.normalized&&(I=xI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=zC(I,this.array)),I}setY(A,I){return this.normalized&&(I=xI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=zC(I,this.array)),I}setZ(A,I){return this.normalized&&(I=xI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=zC(I,this.array)),I}setW(A,I){return this.normalized&&(I=xI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=xI(I,this.array),g=xI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=xI(I,this.array),g=xI(g,this.array),C=xI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=xI(I,this.array),g=xI(g,this.array),C=xI(C,this.array),Q=xI(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==to&&(A.usage=this.usage),A}}class $D extends Gg{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class At extends Gg{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class Cg extends Gg{constructor(A,I,g){super(new Float32Array(A),I,g)}}let Sa=0;const Ag=new nI,IE=new mI,JC=new m,WI=new kB,gB=new kB,FI=new m;class Tg extends PC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sa++}),this.uuid=cB(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(PD(A)?At:$D)(A,1):this.index=A,this}setIndirect(A){return this.indirect=A,this}getIndirect(){return this.indirect}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new HA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return Ag.makeRotationFromQuaternion(A),this.applyMatrix4(Ag),this}rotateX(A){return Ag.makeRotationX(A),this.applyMatrix4(Ag),this}rotateY(A){return Ag.makeRotationY(A),this.applyMatrix4(Ag),this}rotateZ(A){return Ag.makeRotationZ(A),this.applyMatrix4(Ag),this}translate(A,I,g){return Ag.makeTranslation(A,I,g),this.applyMatrix4(Ag),this}scale(A,I,g){return Ag.makeScale(A,I,g),this.applyMatrix4(Ag),this}lookAt(A){return IE.lookAt(A),IE.updateMatrix(),this.applyMatrix4(IE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(JC).negate(),this.translate(JC.x,JC.y,JC.z),this}setFromPoints(A){const I=this.getAttribute("position");if(I===void 0){const g=[];for(let C=0,Q=A.length;C<Q;C++){const E=A[C];g.push(E.x,E.y,E.z||0)}this.setAttribute("position",new Cg(g,3))}else{const g=Math.min(A.length,I.count);for(let C=0;C<g;C++){const Q=A[C];I.setXYZ(C,Q.x,Q.y,Q.z||0)}A.length>I.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),I.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new m(-1/0,-1/0,-1/0),new m(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];WI.setFromBufferAttribute(Q),this.morphTargetsRelative?(FI.addVectors(this.boundingBox.min,WI.min),this.boundingBox.expandByPoint(FI),FI.addVectors(this.boundingBox.max,WI.max),this.boundingBox.expandByPoint(FI)):(this.boundingBox.expandByPoint(WI.min),this.boundingBox.expandByPoint(WI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new m,1/0);return}if(A){const g=this.boundingSphere.center;if(WI.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];gB.setFromBufferAttribute(i),this.morphTargetsRelative?(FI.addVectors(WI.min,gB.min),WI.expandByPoint(FI),FI.addVectors(WI.max,gB.max),WI.expandByPoint(FI)):(WI.expandByPoint(gB.min),WI.expandByPoint(gB.max))}WI.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)FI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(FI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let D=0,e=i.count;D<e;D++)FI.fromBufferAttribute(i,D),o&&(JC.fromBufferAttribute(A,D),FI.add(JC)),C=Math.max(C,g.distanceToSquared(FI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gg(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let L=0;L<g.count;L++)i[L]=new m,o[L]=new m;const D=new m,e=new m,a=new m,s=new pA,S=new pA,r=new pA,k=new m,n=new m;function h(L,l,G){D.fromBufferAttribute(g,L),e.fromBufferAttribute(g,l),a.fromBufferAttribute(g,G),s.fromBufferAttribute(Q,L),S.fromBufferAttribute(Q,l),r.fromBufferAttribute(Q,G),e.sub(D),a.sub(D),S.sub(s),r.sub(s);const p=1/(S.x*r.y-r.x*S.y);isFinite(p)&&(k.copy(e).multiplyScalar(r.y).addScaledVector(a,-S.y).multiplyScalar(p),n.copy(a).multiplyScalar(S.x).addScaledVector(e,-r.x).multiplyScalar(p),i[L].add(k),i[l].add(k),i[G].add(k),o[L].add(n),o[l].add(n),o[G].add(n))}let N=this.groups;N.length===0&&(N=[{start:0,count:A.count}]);for(let L=0,l=N.length;L<l;++L){const G=N[L],p=G.start,v=G.count;for(let b=p,V=p+v;b<V;b+=3)h(A.getX(b+0),A.getX(b+1),A.getX(b+2))}const U=new m,y=new m,f=new m,J=new m;function F(L){f.fromBufferAttribute(C,L),J.copy(f);const l=i[L];U.copy(l),U.sub(f.multiplyScalar(f.dot(l))).normalize(),y.crossVectors(J,l);const p=y.dot(o[L])<0?-1:1;E.setXYZW(L,U.x,U.y,U.z,p)}for(let L=0,l=N.length;L<l;++L){const G=N[L],p=G.start,v=G.count;for(let b=p,V=p+v;b<V;b+=3)F(A.getX(b+0)),F(A.getX(b+1)),F(A.getX(b+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new Gg(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,S=g.count;s<S;s++)g.setXYZ(s,0,0,0);const C=new m,Q=new m,E=new m,i=new m,o=new m,D=new m,e=new m,a=new m;if(A)for(let s=0,S=A.count;s<S;s+=3){const r=A.getX(s+0),k=A.getX(s+1),n=A.getX(s+2);C.fromBufferAttribute(I,r),Q.fromBufferAttribute(I,k),E.fromBufferAttribute(I,n),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),i.fromBufferAttribute(g,r),o.fromBufferAttribute(g,k),D.fromBufferAttribute(g,n),i.add(e),o.add(e),D.add(e),g.setXYZ(r,i.x,i.y,i.z),g.setXYZ(k,o.x,o.y,o.z),g.setXYZ(n,D.x,D.y,D.z)}else for(let s=0,S=I.count;s<S;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),e.subVectors(E,Q),a.subVectors(C,Q),e.cross(a),g.setXYZ(s+0,e.x,e.y,e.z),g.setXYZ(s+1,e.x,e.y,e.z),g.setXYZ(s+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)FI.fromBufferAttribute(A,I),FI.normalize(),A.setXYZ(I,FI.x,FI.y,FI.z)}toNonIndexed(){function A(i,o){const D=i.array,e=i.itemSize,a=i.normalized,s=new D.constructor(o.length*e);let S=0,r=0;for(let k=0,n=o.length;k<n;k++){i.isInterleavedBufferAttribute?S=o[k]*i.data.stride+i.offset:S=o[k]*e;for(let h=0;h<e;h++)s[r++]=D[S++]}return new Gg(s,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new Tg,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],D=A(o,g);I.setAttribute(i,D)}const Q=this.morphAttributes;for(const i in Q){const o=[],D=Q[i];for(let e=0,a=D.length;e<a;e++){const s=D[e],S=A(s,g);o.push(S)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const D=E[i];I.addGroup(D.start,D.count,D.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const D in o)o[D]!==void 0&&(A[D]=o[D]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const D=g[o];A.data.attributes[o]=D.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const D=this.morphAttributes[o],e=[];for(let a=0,s=D.length;a<s;a++){const S=D[a];e.push(S.toJSON(A.data))}e.length>0&&(C[o]=e,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const D in C){const e=C[D];this.setAttribute(D,e.clone(I))}const Q=A.morphAttributes;for(const D in Q){const e=[],a=Q[D];for(let s=0,S=a.length;s<S;s++)e.push(a[s].clone(I));this.morphAttributes[D]=e}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let D=0,e=E.length;D<e;D++){const a=E[D];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uo=new nI,gC=new ia,xB=new yi,Mo=new m,OB=new m,bB=new m,ZB=new m,gE=new m,_B=new m,No=new m,vB=new m;class jI extends mI{constructor(A=new Tg,I=new rQ){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Q=0,E=C.length;Q<E;Q++){const i=C[Q].name||String(Q);this.morphTargetInfluences.push(0),this.morphTargetDictionary[i]=Q}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){_B.set(0,0,0);for(let o=0,D=Q.length;o<D;o++){const e=i[o],a=Q[o];e!==0&&(gE.fromBufferAttribute(a,A),E?_B.addScaledVector(gE,e):_B.addScaledVector(gE.sub(I),e))}I.add(_B)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),xB.copy(g.boundingSphere),xB.applyMatrix4(Q),gC.copy(A.ray).recast(A.near),!(xB.containsPoint(gC.origin)===!1&&(gC.intersectSphere(xB,Mo)===null||gC.origin.distanceToSquared(Mo)>(A.far-A.near)**2))&&(Uo.copy(Q).invert(),gC.copy(A.ray).applyMatrix4(Uo),!(g.boundingBox!==null&&gC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,gC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,D=Q.attributes.uv,e=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,S=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let r=0,k=s.length;r<k;r++){const n=s[r],h=E[n.materialIndex],N=Math.max(n.start,S.start),U=Math.min(i.count,Math.min(n.start+n.count,S.start+S.count));for(let y=N,f=U;y<f;y+=3){const J=i.getX(y),F=i.getX(y+1),L=i.getX(y+2);C=WB(this,h,A,g,D,e,a,J,F,L),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const r=Math.max(0,S.start),k=Math.min(i.count,S.start+S.count);for(let n=r,h=k;n<h;n+=3){const N=i.getX(n),U=i.getX(n+1),y=i.getX(n+2);C=WB(this,E,A,g,D,e,a,N,U,y),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let r=0,k=s.length;r<k;r++){const n=s[r],h=E[n.materialIndex],N=Math.max(n.start,S.start),U=Math.min(o.count,Math.min(n.start+n.count,S.start+S.count));for(let y=N,f=U;y<f;y+=3){const J=y,F=y+1,L=y+2;C=WB(this,h,A,g,D,e,a,J,F,L),C&&(C.faceIndex=Math.floor(y/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const r=Math.max(0,S.start),k=Math.min(o.count,S.start+S.count);for(let n=r,h=k;n<h;n+=3){const N=n,U=n+1,y=n+2;C=WB(this,E,A,g,D,e,a,N,U,y),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}}}function na(B,A,I,g,C,Q,E,i){let o;if(A.side===bI?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===Vg,i),o===null)return null;vB.copy(i),vB.applyMatrix4(B.matrixWorld);const D=I.ray.origin.distanceTo(vB);return D<I.near||D>I.far?null:{distance:D,point:vB.clone(),object:B}}function WB(B,A,I,g,C,Q,E,i,o,D){B.getVertexPosition(i,OB),B.getVertexPosition(o,bB),B.getVertexPosition(D,ZB);const e=na(B,A,I,g,OB,bB,ZB,No);if(e){const a=new m;eg.getBarycoord(No,OB,bB,ZB,a),C&&(e.uv=eg.getInterpolatedAttribute(C,i,o,D,a,new pA)),Q&&(e.uv1=eg.getInterpolatedAttribute(Q,i,o,D,a,new pA)),E&&(e.normal=eg.getInterpolatedAttribute(E,i,o,D,a,new m),e.normal.dot(g.direction)>0&&e.normal.multiplyScalar(-1));const s={a:i,b:o,c:D,normal:new m,materialIndex:0};eg.getNormal(OB,bB,ZB,s.normal),e.face=s,e.barycoord=a}return e}class yB extends Tg{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],D=[],e=[],a=[];let s=0,S=0;r("z","y","x",-1,-1,g,I,A,E,Q,0),r("z","y","x",1,-1,g,I,-A,E,Q,1),r("x","z","y",1,1,A,g,I,C,E,2),r("x","z","y",1,-1,A,g,-I,C,E,3),r("x","y","z",1,-1,A,I,g,C,Q,4),r("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new Cg(D,3)),this.setAttribute("normal",new Cg(e,3)),this.setAttribute("uv",new Cg(a,2));function r(k,n,h,N,U,y,f,J,F,L,l){const G=y/F,p=f/L,v=y/2,b=f/2,V=J/2,AA=F+1,W=L+1;let CA=0,_=0;const oA=new m;for(let hA=0;hA<W;hA++){const lA=hA*p-b;for(let xA=0;xA<AA;xA++){const iI=xA*G-v;oA[k]=iI*N,oA[n]=lA*U,oA[h]=V,D.push(oA.x,oA.y,oA.z),oA[k]=0,oA[n]=0,oA[h]=J>0?1:-1,e.push(oA.x,oA.y,oA.z),a.push(xA/F),a.push(1-hA/L),CA+=1}}for(let hA=0;hA<L;hA++)for(let lA=0;lA<F;lA++){const xA=s+lA+AA*hA,iI=s+lA+AA*(hA+1),j=s+(lA+1)+AA*(hA+1),BA=s+(lA+1)+AA*hA;o.push(xA,iI,BA),o.push(iI,j,BA),_+=6}i.addGroup(S,_,l),S+=_,s+=CA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new yB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function ZC(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function uI(B){const A={};for(let I=0;I<B.length;I++){const g=ZC(B[I]);for(const C in g)A[C]=g[C]}return A}function wa(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function It(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:AI.workingColorSpace}const DQ={clone:ZC,merge:uI};var ra=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ca=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class OI extends lB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ra,this.fragmentShader=ca,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=ZC(A.uniforms),this.uniformsGroups=wa(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const E=this.uniforms[C].value;E&&E.isTexture?I.uniforms[C]={type:"t",value:E.toJSON(A).uuid}:E&&E.isColor?I.uniforms[C]={type:"c",value:E.getHex()}:E&&E.isVector2?I.uniforms[C]={type:"v2",value:E.toArray()}:E&&E.isVector3?I.uniforms[C]={type:"v3",value:E.toArray()}:E&&E.isVector4?I.uniforms[C]={type:"v4",value:E.toArray()}:E&&E.isMatrix3?I.uniforms[C]={type:"m3",value:E.toArray()}:E&&E.isMatrix4?I.uniforms[C]={type:"m4",value:E.toArray()}:I.uniforms[C]={value:E}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class gt extends mI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nI,this.projectionMatrix=new nI,this.projectionMatrixInverse=new nI,this.coordinateSystem=qg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vg=new m,Ko=new pA,Jo=new pA;class VI extends gt{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=Ii*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(fQ*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return Ii*2*Math.atan(Math.tan(fQ*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){vg.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(vg.x,vg.y).multiplyScalar(-A/vg.z),vg.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(vg.x,vg.y).multiplyScalar(-A/vg.z)}getViewSize(A,I){return this.getViewBounds(A,Ko,Jo),I.subVectors(Jo,Ko)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(fQ*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,D=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/D,C*=E.width/o,g*=E.height/D}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const FC=-90,RC=1;class Ga extends mI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new VI(FC,RC,A,I);C.layers=this.layers,this.add(C);const Q=new VI(FC,RC,A,I);Q.layers=this.layers,this.add(Q);const E=new VI(FC,RC,A,I);E.layers=this.layers,this.add(E);const i=new VI(FC,RC,A,I);i.layers=this.layers,this.add(i);const o=new VI(FC,RC,A,I);o.layers=this.layers,this.add(o);const D=new VI(FC,RC,A,I);D.layers=this.layers,this.add(D)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const D of I)this.remove(D);if(A===qg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===iQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const D of I)this.add(D),D.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,D,e]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),S=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const k=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,D),g.texture.generateMipmaps=k,A.setRenderTarget(g,5,C),A.render(I,e),A.setRenderTarget(a,s,S),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class Ct extends ZI{constructor(A,I,g,C,Q,E,i,o,D,e){A=A!==void 0?A:[],I=I!==void 0?I:mC,super(A,I,g,C,Q,E,i,o,D,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class ka extends hg{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new Ct(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:cg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new yB(5,5,5),Q=new OI({name:"CubemapFromEquirect",uniforms:ZC(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:bI,blending:Yg});Q.uniforms.tEquirect.value=I;const E=new jI(C,Q),i=I.minFilter;return I.minFilter===aC&&(I.minFilter=cg),new Ga(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}class la extends mI{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kg,this.environmentIntensity=1,this.environmentRotation=new kg,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(A,I){return super.copy(A,I),A.background!==null&&(this.background=A.background.clone()),A.environment!==null&&(this.environment=A.environment.clone()),A.fog!==null&&(this.fog=A.fog.clone()),this.backgroundBlurriness=A.backgroundBlurriness,this.backgroundIntensity=A.backgroundIntensity,this.backgroundRotation.copy(A.backgroundRotation),this.environmentIntensity=A.environmentIntensity,this.environmentRotation.copy(A.environmentRotation),A.overrideMaterial!==null&&(this.overrideMaterial=A.overrideMaterial.clone()),this.matrixAutoUpdate=A.matrixAutoUpdate,this}toJSON(A){const I=super.toJSON(A);return this.fog!==null&&(I.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(I.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(I.object.backgroundIntensity=this.backgroundIntensity),I.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(I.object.environmentIntensity=this.environmentIntensity),I.object.environmentRotation=this.environmentRotation.toArray(),I}}const CE=new m,ya=new m,Ua=new HA;class iC{constructor(A=new m(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=CE.subVectors(g,I).cross(ya.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(CE),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Ua.getNormalMatrix(A),C=this.coplanarPoint(CE).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const CC=new yi,PB=new m;class Ui{constructor(A=new iC,I=new iC,g=new iC,C=new iC,Q=new iC,E=new iC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=qg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],D=C[4],e=C[5],a=C[6],s=C[7],S=C[8],r=C[9],k=C[10],n=C[11],h=C[12],N=C[13],U=C[14],y=C[15];if(g[0].setComponents(o-Q,s-D,n-S,y-h).normalize(),g[1].setComponents(o+Q,s+D,n+S,y+h).normalize(),g[2].setComponents(o+E,s+e,n+r,y+N).normalize(),g[3].setComponents(o-E,s-e,n-r,y-N).normalize(),g[4].setComponents(o-i,s-a,n-k,y-U).normalize(),I===qg)g[5].setComponents(o+i,s+a,n+k,y+U).normalize();else if(I===iQ)g[5].setComponents(i,a,k,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),CC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),CC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(CC)}intersectsSprite(A){return CC.center.set(0,0,0),CC.radius=.7071067811865476,CC.applyMatrix4(A.matrixWorld),this.intersectsSphere(CC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(PB.x=C.normal.x>0?A.max.x:A.min.x,PB.y=C.normal.y>0?A.max.y:A.min.y,PB.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(PB)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class VB extends mI{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Bt extends ZI{constructor(A,I,g,C,Q,E,i,o,D,e=fC){if(e!==fC&&e!==OC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&e===fC&&(g=hC),g===void 0&&e===OC&&(g=xC),super(null,C,Q,E,i,o,e,g,D),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:sg,this.minFilter=o!==void 0?o:sg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}class Mi extends Tg{constructor(A=[],I=[],g=1,C=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:A,indices:I,radius:g,detail:C};const Q=[],E=[];i(C),D(g),e(),this.setAttribute("position",new Cg(Q,3)),this.setAttribute("normal",new Cg(Q.slice(),3)),this.setAttribute("uv",new Cg(E,2)),C===0?this.computeVertexNormals():this.normalizeNormals();function i(N){const U=new m,y=new m,f=new m;for(let J=0;J<I.length;J+=3)S(I[J+0],U),S(I[J+1],y),S(I[J+2],f),o(U,y,f,N)}function o(N,U,y,f){const J=f+1,F=[];for(let L=0;L<=J;L++){F[L]=[];const l=N.clone().lerp(y,L/J),G=U.clone().lerp(y,L/J),p=J-L;for(let v=0;v<=p;v++)v===0&&L===J?F[L][v]=l:F[L][v]=l.clone().lerp(G,v/p)}for(let L=0;L<J;L++)for(let l=0;l<2*(J-L)-1;l++){const G=Math.floor(l/2);l%2===0?(s(F[L][G+1]),s(F[L+1][G]),s(F[L][G])):(s(F[L][G+1]),s(F[L+1][G+1]),s(F[L+1][G]))}}function D(N){const U=new m;for(let y=0;y<Q.length;y+=3)U.x=Q[y+0],U.y=Q[y+1],U.z=Q[y+2],U.normalize().multiplyScalar(N),Q[y+0]=U.x,Q[y+1]=U.y,Q[y+2]=U.z}function e(){const N=new m;for(let U=0;U<Q.length;U+=3){N.x=Q[U+0],N.y=Q[U+1],N.z=Q[U+2];const y=n(N)/2/Math.PI+.5,f=h(N)/Math.PI+.5;E.push(y,1-f)}r(),a()}function a(){for(let N=0;N<E.length;N+=6){const U=E[N+0],y=E[N+2],f=E[N+4],J=Math.max(U,y,f),F=Math.min(U,y,f);J>.9&&F<.1&&(U<.2&&(E[N+0]+=1),y<.2&&(E[N+2]+=1),f<.2&&(E[N+4]+=1))}}function s(N){Q.push(N.x,N.y,N.z)}function S(N,U){const y=N*3;U.x=A[y+0],U.y=A[y+1],U.z=A[y+2]}function r(){const N=new m,U=new m,y=new m,f=new m,J=new pA,F=new pA,L=new pA;for(let l=0,G=0;l<Q.length;l+=9,G+=6){N.set(Q[l+0],Q[l+1],Q[l+2]),U.set(Q[l+3],Q[l+4],Q[l+5]),y.set(Q[l+6],Q[l+7],Q[l+8]),J.set(E[G+0],E[G+1]),F.set(E[G+2],E[G+3]),L.set(E[G+4],E[G+5]),f.copy(N).add(U).add(y).divideScalar(3);const p=n(f);k(J,G+0,N,p),k(F,G+2,U,p),k(L,G+4,y,p)}}function k(N,U,y,f){f<0&&N.x===1&&(E[U]=N.x-1),y.x===0&&y.z===0&&(E[U]=f/2/Math.PI+.5)}function n(N){return Math.atan2(N.z,-N.x)}function h(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new Mi(A.vertices,A.indices,A.radius,A.details)}}class cQ extends Mi{constructor(A=1,I=0){const g=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],C=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(g,C,A,I),this.type="OctahedronGeometry",this.parameters={radius:A,detail:I}}static fromJSON(A){return new cQ(A.radius,A.detail)}}class GQ extends Tg{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),D=i+1,e=o+1,a=A/i,s=I/o,S=[],r=[],k=[],n=[];for(let h=0;h<e;h++){const N=h*s-E;for(let U=0;U<D;U++){const y=U*a-Q;r.push(y,-N,0),k.push(0,0,1),n.push(U/i),n.push(1-h/o)}}for(let h=0;h<o;h++)for(let N=0;N<i;N++){const U=N+D*h,y=N+D*(h+1),f=N+1+D*(h+1),J=N+1+D*h;S.push(U,y,J),S.push(y,f,J)}this.setIndex(S),this.setAttribute("position",new Cg(r,3)),this.setAttribute("normal",new Cg(k,3)),this.setAttribute("uv",new Cg(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new GQ(A.width,A.height,A.widthSegments,A.heightSegments)}}class Qt extends lB{constructor(A){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ZA(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ZA(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vD,this.normalScale=new pA(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kg,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.defines={STANDARD:""},this.color.copy(A.color),this.roughness=A.roughness,this.metalness=A.metalness,this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.emissive.copy(A.emissive),this.emissiveMap=A.emissiveMap,this.emissiveIntensity=A.emissiveIntensity,this.bumpMap=A.bumpMap,this.bumpScale=A.bumpScale,this.normalMap=A.normalMap,this.normalMapType=A.normalMapType,this.normalScale.copy(A.normalScale),this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.roughnessMap=A.roughnessMap,this.metalnessMap=A.metalnessMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.envMapIntensity=A.envMapIntensity,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.flatShading=A.flatShading,this.fog=A.fog,this}}class Ma extends lB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=me,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Na extends lB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}class Et extends mI{constructor(A,I=1){super(),this.isLight=!0,this.type="Light",this.color=new ZA(A),this.intensity=I}dispose(){}copy(A,I){return super.copy(A,I),this.color.copy(A.color),this.intensity=A.intensity,this}toJSON(A){const I=super.toJSON(A);return I.object.color=this.color.getHex(),I.object.intensity=this.intensity,this.groundColor!==void 0&&(I.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(I.object.distance=this.distance),this.angle!==void 0&&(I.object.angle=this.angle),this.decay!==void 0&&(I.object.decay=this.decay),this.penumbra!==void 0&&(I.object.penumbra=this.penumbra),this.shadow!==void 0&&(I.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(I.object.target=this.target.uuid),I}}class Ka extends Et{constructor(A,I,g){super(A,g),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mI.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ZA(I)}copy(A,I){return super.copy(A,I),this.groundColor.copy(A.groundColor),this}}const BE=new nI,Fo=new m,Ro=new m;class Ja{constructor(A){this.camera=A,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pA(512,512),this.map=null,this.mapPass=null,this.matrix=new nI,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ui,this._frameExtents=new pA(1,1),this._viewportCount=1,this._viewports=[new EI(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(A){const I=this.camera,g=this.matrix;Fo.setFromMatrixPosition(A.matrixWorld),I.position.copy(Fo),Ro.setFromMatrixPosition(A.target.matrixWorld),I.lookAt(Ro),I.updateMatrixWorld(),BE.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),this._frustum.setFromProjectionMatrix(BE),g.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),g.multiply(BE)}getViewport(A){return this._viewports[A]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(A){return this.camera=A.camera.clone(),this.intensity=A.intensity,this.bias=A.bias,this.radius=A.radius,this.mapSize.copy(A.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const A={};return this.intensity!==1&&(A.intensity=this.intensity),this.bias!==0&&(A.bias=this.bias),this.normalBias!==0&&(A.normalBias=this.normalBias),this.radius!==1&&(A.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(A.mapSize=this.mapSize.toArray()),A.camera=this.camera.toJSON(!1).object,delete A.camera.matrix,A}}const po=new nI,CB=new m,QE=new m;class Fa extends Ja{constructor(){super(new VI(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pA(4,2),this._viewportCount=6,this._viewports=[new EI(2,1,1,1),new EI(0,1,1,1),new EI(3,1,1,1),new EI(1,1,1,1),new EI(3,0,1,1),new EI(1,0,1,1)],this._cubeDirections=[new m(1,0,0),new m(-1,0,0),new m(0,0,1),new m(0,0,-1),new m(0,1,0),new m(0,-1,0)],this._cubeUps=[new m(0,1,0),new m(0,1,0),new m(0,1,0),new m(0,1,0),new m(0,0,1),new m(0,0,-1)]}updateMatrices(A,I=0){const g=this.camera,C=this.matrix,Q=A.distance||g.far;Q!==g.far&&(g.far=Q,g.updateProjectionMatrix()),CB.setFromMatrixPosition(A.matrixWorld),g.position.copy(CB),QE.copy(g.position),QE.add(this._cubeDirections[I]),g.up.copy(this._cubeUps[I]),g.lookAt(QE),g.updateMatrixWorld(),C.makeTranslation(-CB.x,-CB.y,-CB.z),po.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po)}}class Ra extends Et{constructor(A,I,g=0,C=2){super(A,I),this.isPointLight=!0,this.type="PointLight",this.distance=g,this.decay=C,this.shadow=new Fa}get power(){return this.intensity*4*Math.PI}set power(A){this.intensity=A/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(A,I){return super.copy(A,I),this.distance=A.distance,this.decay=A.decay,this.shadow=A.shadow.clone(),this}}class it extends gt{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const D=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=D*this.view.offsetX,E=Q+D*this.view.width,i-=e*this.view.offsetY,o=i-e*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}class pa extends VI{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class qa{constructor(A=!0){this.autoStart=A,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let A=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const I=qo();A=(I-this.oldTime)/1e3,this.oldTime=I,this.elapsedTime+=A}return A}}function qo(){return performance.now()}function Yo(B,A,I,g){const C=Ya(g);switch(I){case mD:return B*A;case xD:return B*A;case OD:return B*A*2;case bD:return B*A/C.components*C.byteLength;case Gi:return B*A/C.components*C.byteLength;case ZD:return B*A*2/C.components*C.byteLength;case ki:return B*A*2/C.components*C.byteLength;case TD:return B*A*3/C.components*C.byteLength;case ag:return B*A*4/C.components*C.byteLength;case li:return B*A*4/C.components*C.byteLength;case AQ:case IQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case gQ:case CQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case RE:case qE:return Math.max(B,16)*Math.max(A,8)/4;case FE:case pE:return Math.max(B,8)*Math.max(A,8)/2;case YE:case dE:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case LE:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case fE:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case HE:return Math.floor((B+4)/5)*Math.floor((A+3)/4)*16;case uE:return Math.floor((B+4)/5)*Math.floor((A+4)/5)*16;case mE:return Math.floor((B+5)/6)*Math.floor((A+4)/5)*16;case TE:return Math.floor((B+5)/6)*Math.floor((A+5)/6)*16;case xE:return Math.floor((B+7)/8)*Math.floor((A+4)/5)*16;case OE:return Math.floor((B+7)/8)*Math.floor((A+5)/6)*16;case bE:return Math.floor((B+7)/8)*Math.floor((A+7)/8)*16;case ZE:return Math.floor((B+9)/10)*Math.floor((A+4)/5)*16;case _E:return Math.floor((B+9)/10)*Math.floor((A+5)/6)*16;case vE:return Math.floor((B+9)/10)*Math.floor((A+7)/8)*16;case WE:return Math.floor((B+9)/10)*Math.floor((A+9)/10)*16;case PE:return Math.floor((B+11)/12)*Math.floor((A+9)/10)*16;case VE:return Math.floor((B+11)/12)*Math.floor((A+11)/12)*16;case BQ:case jE:case XE:return Math.ceil(B/4)*Math.ceil(A/4)*16;case _D:case zE:return Math.ceil(B/4)*Math.ceil(A/4)*8;case $E:case Ai:return Math.ceil(B/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function Ya(B){switch(B){case fg:case fD:return{byteLength:1,components:1};case eB:case HD:case dg:return{byteLength:2,components:1};case ri:case ci:return{byteLength:2,components:4};case hC:case wi:case pg:return{byteLength:4,components:1};case uD:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${B}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ni}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ni);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ot(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function da(B){const A=new WeakMap;function I(i,o){const D=i.array,e=i.usage,a=D.byteLength,s=B.createBuffer();B.bindBuffer(o,s),B.bufferData(o,D,e),i.onUploadCallback();let S;if(D instanceof Float32Array)S=B.FLOAT;else if(D instanceof Uint16Array)i.isFloat16BufferAttribute?S=B.HALF_FLOAT:S=B.UNSIGNED_SHORT;else if(D instanceof Int16Array)S=B.SHORT;else if(D instanceof Uint32Array)S=B.UNSIGNED_INT;else if(D instanceof Int32Array)S=B.INT;else if(D instanceof Int8Array)S=B.BYTE;else if(D instanceof Uint8Array)S=B.UNSIGNED_BYTE;else if(D instanceof Uint8ClampedArray)S=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+D);return{buffer:s,type:S,bytesPerElement:D.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,D){const e=o.array,a=o.updateRanges;if(B.bindBuffer(D,i),a.length===0)B.bufferSubData(D,0,e);else{a.sort((S,r)=>S.start-r.start);let s=0;for(let S=1;S<a.length;S++){const r=a[s],k=a[S];k.start<=r.start+r.count+1?r.count=Math.max(r.count,k.start+k.count-r.start):(++s,a[s]=k)}a.length=s+1;for(let S=0,r=a.length;S<r;S++){const k=a[S];B.bufferSubData(D,k.start*e.BYTES_PER_ELEMENT,e,k.start,k.count)}o.clearUpdateRanges()}o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const e=A.get(i);(!e||e.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const D=A.get(i);if(D===void 0)A.set(i,I(i,o));else if(D.version<i.version){if(D.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(D.buffer,i,o),D.version=i.version}}return{get:C,remove:Q,update:E}}var La=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fa=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ha=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ua=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ma=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ta=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xa=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ba=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Za=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_a=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,va=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wa=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pa=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Va=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ja=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xa=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,za=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$a=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,As=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Is=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gs=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cs=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Bs=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qs=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Es=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,is=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,os=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ds=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ts=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,es="gl_FragColor = linearToOutputTexel( gl_FragColor );",as=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ss=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hs=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ss=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ws=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rs=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gs=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ks=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ls=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ys=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Us=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ms=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ns=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ks=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Js=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ps=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qs=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ys=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ds=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ls=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hs=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,us=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ms=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ts=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Os=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zs=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_s=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ws=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ps=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,js=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zs=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$s=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ch=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ch=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Uh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_h=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ph=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$h=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mA={alphahash_fragment:La,alphahash_pars_fragment:fa,alphamap_fragment:Ha,alphamap_pars_fragment:ua,alphatest_fragment:ma,alphatest_pars_fragment:Ta,aomap_fragment:xa,aomap_pars_fragment:Oa,batching_pars_vertex:ba,batching_vertex:Za,begin_vertex:_a,beginnormal_vertex:va,bsdfs:Wa,iridescence_fragment:Pa,bumpmap_pars_fragment:Va,clipping_planes_fragment:ja,clipping_planes_pars_fragment:Xa,clipping_planes_pars_vertex:za,clipping_planes_vertex:$a,color_fragment:As,color_pars_fragment:Is,color_pars_vertex:gs,color_vertex:Cs,common:Bs,cube_uv_reflection_fragment:Qs,defaultnormal_vertex:Es,displacementmap_pars_vertex:is,displacementmap_vertex:os,emissivemap_fragment:Ds,emissivemap_pars_fragment:ts,colorspace_fragment:es,colorspace_pars_fragment:as,envmap_fragment:ss,envmap_common_pars_fragment:hs,envmap_pars_fragment:Ss,envmap_pars_vertex:ns,envmap_physical_pars_fragment:Ks,envmap_vertex:ws,fog_vertex:rs,fog_pars_vertex:cs,fog_fragment:Gs,fog_pars_fragment:ks,gradientmap_pars_fragment:ls,lightmap_pars_fragment:ys,lights_lambert_fragment:Us,lights_lambert_pars_fragment:Ms,lights_pars_begin:Ns,lights_toon_fragment:Js,lights_toon_pars_fragment:Fs,lights_phong_fragment:Rs,lights_phong_pars_fragment:ps,lights_physical_fragment:qs,lights_physical_pars_fragment:Ys,lights_fragment_begin:ds,lights_fragment_maps:Ls,lights_fragment_end:fs,logdepthbuf_fragment:Hs,logdepthbuf_pars_fragment:us,logdepthbuf_pars_vertex:ms,logdepthbuf_vertex:Ts,map_fragment:xs,map_pars_fragment:Os,map_particle_fragment:bs,map_particle_pars_fragment:Zs,metalnessmap_fragment:_s,metalnessmap_pars_fragment:vs,morphinstance_vertex:Ws,morphcolor_vertex:Ps,morphnormal_vertex:Vs,morphtarget_pars_vertex:js,morphtarget_vertex:Xs,normal_fragment_begin:zs,normal_fragment_maps:$s,normal_pars_fragment:Ah,normal_pars_vertex:Ih,normal_vertex:gh,normalmap_pars_fragment:Ch,clearcoat_normal_fragment_begin:Bh,clearcoat_normal_fragment_maps:Qh,clearcoat_pars_fragment:Eh,iridescence_pars_fragment:ih,opaque_fragment:oh,packing:Dh,premultiplied_alpha_fragment:th,project_vertex:eh,dithering_fragment:ah,dithering_pars_fragment:sh,roughnessmap_fragment:hh,roughnessmap_pars_fragment:Sh,shadowmap_pars_fragment:nh,shadowmap_pars_vertex:wh,shadowmap_vertex:rh,shadowmask_pars_fragment:ch,skinbase_vertex:Gh,skinning_pars_vertex:kh,skinning_vertex:lh,skinnormal_vertex:yh,specularmap_fragment:Uh,specularmap_pars_fragment:Mh,tonemapping_fragment:Nh,tonemapping_pars_fragment:Kh,transmission_fragment:Jh,transmission_pars_fragment:Fh,uv_pars_fragment:Rh,uv_pars_vertex:ph,uv_vertex:qh,worldpos_vertex:Yh,background_vert:dh,background_frag:Lh,backgroundCube_vert:fh,backgroundCube_frag:Hh,cube_vert:uh,cube_frag:mh,depth_vert:Th,depth_frag:xh,distanceRGBA_vert:Oh,distanceRGBA_frag:bh,equirect_vert:Zh,equirect_frag:_h,linedashed_vert:vh,linedashed_frag:Wh,meshbasic_vert:Ph,meshbasic_frag:Vh,meshlambert_vert:jh,meshlambert_frag:Xh,meshmatcap_vert:zh,meshmatcap_frag:$h,meshnormal_vert:AS,meshnormal_frag:IS,meshphong_vert:gS,meshphong_frag:CS,meshphysical_vert:BS,meshphysical_frag:QS,meshtoon_vert:ES,meshtoon_frag:iS,points_vert:oS,points_frag:DS,shadow_vert:tS,shadow_frag:eS,sprite_vert:aS,sprite_frag:sS},QA={common:{diffuse:{value:new ZA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new HA},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new HA}},envmap:{envMap:{value:null},envMapRotation:{value:new HA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new HA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new HA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new HA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new HA},normalScale:{value:new pA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new HA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new HA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new HA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new HA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ZA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ZA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0},uvTransform:{value:new HA}},sprite:{diffuse:{value:new ZA(16777215)},opacity:{value:1},center:{value:new pA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new HA},alphaMap:{value:null},alphaMapTransform:{value:new HA},alphaTest:{value:0}}},wg={basic:{uniforms:uI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.fog]),vertexShader:mA.meshbasic_vert,fragmentShader:mA.meshbasic_frag},lambert:{uniforms:uI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:mA.meshlambert_vert,fragmentShader:mA.meshlambert_frag},phong:{uniforms:uI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)},specular:{value:new ZA(1118481)},shininess:{value:30}}]),vertexShader:mA.meshphong_vert,fragmentShader:mA.meshphong_frag},standard:{uniforms:uI([QA.common,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.roughnessmap,QA.metalnessmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag},toon:{uniforms:uI([QA.common,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.gradientmap,QA.fog,QA.lights,{emissive:{value:new ZA(0)}}]),vertexShader:mA.meshtoon_vert,fragmentShader:mA.meshtoon_frag},matcap:{uniforms:uI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,{matcap:{value:null}}]),vertexShader:mA.meshmatcap_vert,fragmentShader:mA.meshmatcap_frag},points:{uniforms:uI([QA.points,QA.fog]),vertexShader:mA.points_vert,fragmentShader:mA.points_frag},dashed:{uniforms:uI([QA.common,QA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mA.linedashed_vert,fragmentShader:mA.linedashed_frag},depth:{uniforms:uI([QA.common,QA.displacementmap]),vertexShader:mA.depth_vert,fragmentShader:mA.depth_frag},normal:{uniforms:uI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,{opacity:{value:1}}]),vertexShader:mA.meshnormal_vert,fragmentShader:mA.meshnormal_frag},sprite:{uniforms:uI([QA.sprite,QA.fog]),vertexShader:mA.sprite_vert,fragmentShader:mA.sprite_frag},background:{uniforms:{uvTransform:{value:new HA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mA.background_vert,fragmentShader:mA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new HA}},vertexShader:mA.backgroundCube_vert,fragmentShader:mA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mA.cube_vert,fragmentShader:mA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mA.equirect_vert,fragmentShader:mA.equirect_frag},distanceRGBA:{uniforms:uI([QA.common,QA.displacementmap,{referencePosition:{value:new m},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mA.distanceRGBA_vert,fragmentShader:mA.distanceRGBA_frag},shadow:{uniforms:uI([QA.lights,QA.fog,{color:{value:new ZA(0)},opacity:{value:1}}]),vertexShader:mA.shadow_vert,fragmentShader:mA.shadow_frag}};wg.physical={uniforms:uI([wg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new HA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new HA},clearcoatNormalScale:{value:new pA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new HA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new HA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new HA},sheen:{value:0},sheenColor:{value:new ZA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new HA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new HA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new HA},transmissionSamplerSize:{value:new pA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new HA},attenuationDistance:{value:0},attenuationColor:{value:new ZA(0)},specularColor:{value:new ZA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new HA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new HA},anisotropyVector:{value:new pA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new HA}}]),vertexShader:mA.meshphysical_vert,fragmentShader:mA.meshphysical_frag};const jB={r:0,b:0,g:0},BC=new kg,hS=new nI;function SS(B,A,I,g,C,Q,E){const i=new ZA(0);let o=Q===!0?0:1,D,e,a=null,s=0,S=null;function r(U){let y=U.isScene===!0?U.background:null;return y&&y.isTexture&&(y=(U.backgroundBlurriness>0?I:A).get(y)),y}function k(U){let y=!1;const f=r(U);f===null?h(i,o):f&&f.isColor&&(h(f,1),y=!0);const J=B.xr.getEnvironmentBlendMode();J==="additive"?g.buffers.color.setClear(0,0,0,1,E):J==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||y)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function n(U,y){const f=r(y);f&&(f.isCubeTexture||f.mapping===wQ)?(e===void 0&&(e=new jI(new yB(1,1,1),new OI({name:"BackgroundCubeMaterial",uniforms:ZC(wg.backgroundCube.uniforms),vertexShader:wg.backgroundCube.vertexShader,fragmentShader:wg.backgroundCube.fragmentShader,side:bI,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(J,F,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),BC.copy(y.backgroundRotation),BC.x*=-1,BC.y*=-1,BC.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(BC.y*=-1,BC.z*=-1),e.material.uniforms.envMap.value=f,e.material.uniforms.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,e.material.uniforms.backgroundRotation.value.setFromMatrix4(hS.makeRotationFromEuler(BC)),e.material.toneMapped=AI.getTransfer(f.colorSpace)!==QI,(a!==f||s!==f.version||S!==B.toneMapping)&&(e.material.needsUpdate=!0,a=f,s=f.version,S=B.toneMapping),e.layers.enableAll(),U.unshift(e,e.geometry,e.material,0,0,null)):f&&f.isTexture&&(D===void 0&&(D=new jI(new GQ(2,2),new OI({name:"BackgroundMaterial",uniforms:ZC(wg.background.uniforms),vertexShader:wg.background.vertexShader,fragmentShader:wg.background.fragmentShader,side:Vg,depthTest:!1,depthWrite:!1,fog:!1})),D.geometry.deleteAttribute("normal"),Object.defineProperty(D.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(D)),D.material.uniforms.t2D.value=f,D.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,D.material.toneMapped=AI.getTransfer(f.colorSpace)!==QI,f.matrixAutoUpdate===!0&&f.updateMatrix(),D.material.uniforms.uvTransform.value.copy(f.matrix),(a!==f||s!==f.version||S!==B.toneMapping)&&(D.material.needsUpdate=!0,a=f,s=f.version,S=B.toneMapping),D.layers.enableAll(),U.unshift(D,D.geometry,D.material,0,0,null))}function h(U,y){U.getRGB(jB,It(B)),g.buffers.color.setClear(jB.r,jB.g,jB.b,y,E)}function N(){e!==void 0&&(e.geometry.dispose(),e.material.dispose()),D!==void 0&&(D.geometry.dispose(),D.material.dispose())}return{getClearColor:function(){return i},setClearColor:function(U,y=1){i.set(U),o=y,h(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(U){o=U,h(i,o)},render:k,addToRenderList:n,dispose:N}}function nS(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=s(null);let Q=C,E=!1;function i(G,p,v,b,V){let AA=!1;const W=a(b,v,p);Q!==W&&(Q=W,D(Q.object)),AA=S(G,b,v,V),AA&&r(G,b,v,V),V!==null&&A.update(V,B.ELEMENT_ARRAY_BUFFER),(AA||E)&&(E=!1,y(G,p,v,b),V!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(V).buffer))}function o(){return B.createVertexArray()}function D(G){return B.bindVertexArray(G)}function e(G){return B.deleteVertexArray(G)}function a(G,p,v){const b=v.wireframe===!0;let V=g[G.id];V===void 0&&(V={},g[G.id]=V);let AA=V[p.id];AA===void 0&&(AA={},V[p.id]=AA);let W=AA[b];return W===void 0&&(W=s(o()),AA[b]=W),W}function s(G){const p=[],v=[],b=[];for(let V=0;V<I;V++)p[V]=0,v[V]=0,b[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:v,attributeDivisors:b,object:G,attributes:{},index:null}}function S(G,p,v,b){const V=Q.attributes,AA=p.attributes;let W=0;const CA=v.getAttributes();for(const _ in CA)if(CA[_].location>=0){const hA=V[_];let lA=AA[_];if(lA===void 0&&(_==="instanceMatrix"&&G.instanceMatrix&&(lA=G.instanceMatrix),_==="instanceColor"&&G.instanceColor&&(lA=G.instanceColor)),hA===void 0||hA.attribute!==lA||lA&&hA.data!==lA.data)return!0;W++}return Q.attributesNum!==W||Q.index!==b}function r(G,p,v,b){const V={},AA=p.attributes;let W=0;const CA=v.getAttributes();for(const _ in CA)if(CA[_].location>=0){let hA=AA[_];hA===void 0&&(_==="instanceMatrix"&&G.instanceMatrix&&(hA=G.instanceMatrix),_==="instanceColor"&&G.instanceColor&&(hA=G.instanceColor));const lA={};lA.attribute=hA,hA&&hA.data&&(lA.data=hA.data),V[_]=lA,W++}Q.attributes=V,Q.attributesNum=W,Q.index=b}function k(){const G=Q.newAttributes;for(let p=0,v=G.length;p<v;p++)G[p]=0}function n(G){h(G,0)}function h(G,p){const v=Q.newAttributes,b=Q.enabledAttributes,V=Q.attributeDivisors;v[G]=1,b[G]===0&&(B.enableVertexAttribArray(G),b[G]=1),V[G]!==p&&(B.vertexAttribDivisor(G,p),V[G]=p)}function N(){const G=Q.newAttributes,p=Q.enabledAttributes;for(let v=0,b=p.length;v<b;v++)p[v]!==G[v]&&(B.disableVertexAttribArray(v),p[v]=0)}function U(G,p,v,b,V,AA,W){W===!0?B.vertexAttribIPointer(G,p,v,V,AA):B.vertexAttribPointer(G,p,v,b,V,AA)}function y(G,p,v,b){k();const V=b.attributes,AA=v.getAttributes(),W=p.defaultAttributeValues;for(const CA in AA){const _=AA[CA];if(_.location>=0){let oA=V[CA];if(oA===void 0&&(CA==="instanceMatrix"&&G.instanceMatrix&&(oA=G.instanceMatrix),CA==="instanceColor"&&G.instanceColor&&(oA=G.instanceColor)),oA!==void 0){const hA=oA.normalized,lA=oA.itemSize,xA=A.get(oA);if(xA===void 0)continue;const iI=xA.buffer,j=xA.type,BA=xA.bytesPerElement,GA=j===B.INT||j===B.UNSIGNED_INT||oA.gpuType===wi;if(oA.isInterleavedBufferAttribute){const DA=oA.data,RA=DA.stride,LA=oA.offset;if(DA.isInstancedInterleavedBuffer){for(let OA=0;OA<_.locationSize;OA++)h(_.location+OA,DA.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=DA.meshPerAttribute*DA.count)}else for(let OA=0;OA<_.locationSize;OA++)n(_.location+OA);B.bindBuffer(B.ARRAY_BUFFER,iI);for(let OA=0;OA<_.locationSize;OA++)U(_.location+OA,lA/_.locationSize,j,hA,RA*BA,(LA+lA/_.locationSize*OA)*BA,GA)}else{if(oA.isInstancedBufferAttribute){for(let DA=0;DA<_.locationSize;DA++)h(_.location+DA,oA.meshPerAttribute);G.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=oA.meshPerAttribute*oA.count)}else for(let DA=0;DA<_.locationSize;DA++)n(_.location+DA);B.bindBuffer(B.ARRAY_BUFFER,iI);for(let DA=0;DA<_.locationSize;DA++)U(_.location+DA,lA/_.locationSize,j,hA,lA*BA,lA/_.locationSize*DA*BA,GA)}}else if(W!==void 0){const hA=W[CA];if(hA!==void 0)switch(hA.length){case 2:B.vertexAttrib2fv(_.location,hA);break;case 3:B.vertexAttrib3fv(_.location,hA);break;case 4:B.vertexAttrib4fv(_.location,hA);break;default:B.vertexAttrib1fv(_.location,hA)}}}}N()}function f(){L();for(const G in g){const p=g[G];for(const v in p){const b=p[v];for(const V in b)e(b[V].object),delete b[V];delete p[v]}delete g[G]}}function J(G){if(g[G.id]===void 0)return;const p=g[G.id];for(const v in p){const b=p[v];for(const V in b)e(b[V].object),delete b[V];delete p[v]}delete g[G.id]}function F(G){for(const p in g){const v=g[p];if(v[G.id]===void 0)continue;const b=v[G.id];for(const V in b)e(b[V].object),delete b[V];delete v[G.id]}}function L(){l(),E=!0,Q!==C&&(Q=C,D(Q.object))}function l(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:L,resetDefaultState:l,dispose:f,releaseStatesOfGeometry:J,releaseStatesOfProgram:F,initAttributes:k,enableAttribute:n,disableUnusedAttributes:N}}function wS(B,A,I){let g;function C(D){g=D}function Q(D,e){B.drawArrays(g,D,e),I.update(e,g,1)}function E(D,e,a){a!==0&&(B.drawArraysInstanced(g,D,e,a),I.update(e,g,a))}function i(D,e,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,D,0,e,0,a);let S=0;for(let r=0;r<a;r++)S+=e[r];I.update(S,g,1)}function o(D,e,a,s){if(a===0)return;const S=A.get("WEBGL_multi_draw");if(S===null)for(let r=0;r<D.length;r++)E(D[r],e[r],s[r]);else{S.multiDrawArraysInstancedWEBGL(g,D,0,e,0,s,0,a);let r=0;for(let k=0;k<a;k++)r+=e[k]*s[k];I.update(r,g,1)}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function rS(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const F=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(F){return!(F!==ag&&g.convert(F)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(F){const L=F===dg&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(F!==fg&&g.convert(F)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pg&&!L)}function o(F){if(F==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let D=I.precision!==void 0?I.precision:"highp";const e=o(D);e!==D&&(console.warn("THREE.WebGLRenderer:",D,"not supported, using",e,"instead."),D=e);const a=I.logarithmicDepthBuffer===!0,s=I.reverseDepthBuffer===!0&&A.has("EXT_clip_control"),S=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),r=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=B.getParameter(B.MAX_TEXTURE_SIZE),n=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),h=B.getParameter(B.MAX_VERTEX_ATTRIBS),N=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),U=B.getParameter(B.MAX_VARYING_VECTORS),y=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),f=r>0,J=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:D,logarithmicDepthBuffer:a,reverseDepthBuffer:s,maxTextures:S,maxVertexTextures:r,maxTextureSize:k,maxCubemapSize:n,maxAttributes:h,maxVertexUniforms:N,maxVaryings:U,maxFragmentUniforms:y,vertexTextures:f,maxSamples:J}}function cS(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new iC,i=new HA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const S=a.length!==0||s||g!==0||C;return C=s,g=a.length,S},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=e(a,s,0)},this.setState=function(a,s,S){const r=a.clippingPlanes,k=a.clipIntersection,n=a.clipShadows,h=B.get(a);if(!C||r===null||r.length===0||Q&&!n)Q?e(null):D();else{const N=Q?0:g,U=N*4;let y=h.clippingState||null;o.value=y,y=e(r,s,U,S);for(let f=0;f!==U;++f)y[f]=I[f];h.clippingState=y,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=N}};function D(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,s,S,r){const k=a!==null?a.length:0;let n=null;if(k!==0){if(n=o.value,r!==!0||n===null){const h=S+k*4,N=s.matrixWorldInverse;i.getNormalMatrix(N),(n===null||n.length<h)&&(n=new Float32Array(h));for(let U=0,y=S;U!==k;++U,y+=4)E.copy(a[U]).applyMatrix4(N,i),E.normal.toArray(n,y),n[y+3]=E.constant}o.value=n,o.needsUpdate=!0}return A.numPlanes=k,A.numIntersection=0,n}}function GS(B){let A=new WeakMap;function I(E,i){return i===ME?E.mapping=mC:i===NE&&(E.mapping=TC),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===ME||i===NE)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const D=new ka(o.height);return D.fromEquirectangularTexture(B,E),A.set(E,D),E.addEventListener("dispose",C),I(D.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}const dC=4,Lo=[.125,.215,.35,.446,.526,.582],tC=20,EE=new it,fo=new ZA;let iE=null,oE=0,DE=0,tE=!1;const oC=(1+Math.sqrt(5))/2,pC=1/oC,Ho=[new m(-oC,pC,0),new m(oC,pC,0),new m(-pC,0,oC),new m(pC,0,oC),new m(0,oC,-pC),new m(0,oC,pC),new m(-1,1,-1),new m(1,1,-1),new m(-1,1,1),new m(1,1,1)];class uo{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){iE=this._renderer.getRenderTarget(),oE=this._renderer.getActiveCubeFace(),DE=this._renderer.getActiveMipmapLevel(),tE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(iE,oE,DE),this._renderer.xr.enabled=tE,A.scissorTest=!1,XB(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===mC||A.mapping===TC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),iE=this._renderer.getRenderTarget(),oE=this._renderer.getActiveCubeFace(),DE=this._renderer.getActiveMipmapLevel(),tE=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:cg,minFilter:cg,generateMipmaps:!1,type:dg,format:ag,colorSpace:bC,depthBuffer:!1},C=mo(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(Q)),this._blurMaterial=lS(Q,A,I)}return C}_compileMaterial(A){const I=new jI(this._lodPlanes[0],A);this._renderer.compile(I,EE)}_sceneToCubeUV(A,I,g,C){const i=new VI(90,1,I,g),o=[1,-1,1,1,1,1],D=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,s=e.toneMapping;e.getClearColor(fo),e.toneMapping=Pg,e.autoClear=!1;const S=new rQ({name:"PMREM.Background",side:bI,depthWrite:!1,depthTest:!1}),r=new jI(new yB,S);let k=!1;const n=A.background;n?n.isColor&&(S.color.copy(n),A.background=null,k=!0):(S.color.copy(fo),k=!0);for(let h=0;h<6;h++){const N=h%3;N===0?(i.up.set(0,o[h],0),i.lookAt(D[h],0,0)):N===1?(i.up.set(0,0,o[h]),i.lookAt(0,D[h],0)):(i.up.set(0,o[h],0),i.lookAt(0,0,D[h]));const U=this._cubeSize;XB(C,N*U,h>2?U:0,U,U),e.setRenderTarget(C),k&&e.render(r,i),e.render(A,i)}r.geometry.dispose(),r.material.dispose(),e.toneMapping=s,e.autoClear=a,A.background=n}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===mC||A.mapping===TC;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new jI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;XB(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,EE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=Ho[(C-Q-1)%Ho.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,D=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new jI(this._lodPlanes[C],D),s=D.uniforms,S=this._sizeLods[g]-1,r=isFinite(Q)?Math.PI/(2*S):2*Math.PI/(2*tC-1),k=Q/r,n=isFinite(Q)?1+Math.floor(e*k):tC;n>tC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${n} samples when the maximum is set to ${tC}`);const h=[];let N=0;for(let F=0;F<tC;++F){const L=F/k,l=Math.exp(-L*L/2);h.push(l),F===0?N+=l:F<n&&(N+=2*l)}for(let F=0;F<h.length;F++)h[F]=h[F]/N;s.envMap.value=A.texture,s.samples.value=n,s.weights.value=h,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:U}=this;s.dTheta.value=r,s.mipInt.value=U-g;const y=this._sizeLods[C],f=3*y*(C>U-dC?C-U+dC:0),J=4*(this._cubeSize-y);XB(I,f,J,3*y,2*y),o.setRenderTarget(I),o.render(a,EE)}}function kS(B){const A=[],I=[],g=[];let C=B;const Q=B-dC+1+Lo.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-dC?o=Lo[E-B+dC-1]:E===0&&(o=0),g.push(o);const D=1/(i-2),e=-D,a=1+D,s=[e,e,a,e,a,a,e,e,a,a,e,a],S=6,r=6,k=3,n=2,h=1,N=new Float32Array(k*r*S),U=new Float32Array(n*r*S),y=new Float32Array(h*r*S);for(let J=0;J<S;J++){const F=J%3*2/3-1,L=J>2?0:-1,l=[F,L,0,F+2/3,L,0,F+2/3,L+1,0,F,L,0,F+2/3,L+1,0,F,L+1,0];N.set(l,k*r*J),U.set(s,n*r*J);const G=[J,J,J,J,J,J];y.set(G,h*r*J)}const f=new Tg;f.setAttribute("position",new Gg(N,k)),f.setAttribute("uv",new Gg(U,n)),f.setAttribute("faceIndex",new Gg(y,h)),A.push(f),C>dC&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function mo(B,A,I){const g=new hg(B,A,I);return g.texture.mapping=wQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function XB(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function lS(B,A,I){const g=new Float32Array(tC),C=new m(0,1,0);return new OI({name:"SphericalGaussianBlur",defines:{n:tC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yg,depthTest:!1,depthWrite:!1})}function To(){return new OI({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yg,depthTest:!1,depthWrite:!1})}function xo(){return new OI({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ni(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yg,depthTest:!1,depthWrite:!1})}function Ni(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yS(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,D=o===ME||o===NE,e=o===mC||o===TC;if(D||e){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new uo(B)),a=D?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const S=i.image;return D&&S&&S.height>0||e&&S&&C(S)?(I===null&&(I=new uo(B)),a=D?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const D=6;for(let e=0;e<D;e++)i[e]!==void 0&&o++;return o===D}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const D=A.get(o);D!==void 0&&(A.delete(o),D.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function US(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&YC("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function MS(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);s.removeEventListener("dispose",E),delete C[s.id];const S=Q.get(s);S&&(A.remove(S),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const S in s)A.update(s[S],B.ARRAY_BUFFER)}function D(a){const s=[],S=a.index,r=a.attributes.position;let k=0;if(S!==null){const N=S.array;k=S.version;for(let U=0,y=N.length;U<y;U+=3){const f=N[U+0],J=N[U+1],F=N[U+2];s.push(f,J,J,F,F,f)}}else if(r!==void 0){const N=r.array;k=r.version;for(let U=0,y=N.length/3-1;U<y;U+=3){const f=U+0,J=U+1,F=U+2;s.push(f,J,J,F,F,f)}}else return;const n=new(PD(s)?At:$D)(s,1);n.version=k;const h=Q.get(a);h&&A.remove(h),Q.set(a,n)}function e(a){const s=Q.get(a);if(s){const S=a.index;S!==null&&s.version<S.version&&D(a)}else D(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:e}}function NS(B,A,I){let g;function C(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,S){B.drawElements(g,S,Q,s*E),I.update(S,g,1)}function D(s,S,r){r!==0&&(B.drawElementsInstanced(g,S,Q,s*E,r),I.update(S,g,r))}function e(s,S,r){if(r===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,S,0,Q,s,0,r);let n=0;for(let h=0;h<r;h++)n+=S[h];I.update(n,g,1)}function a(s,S,r,k){if(r===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let h=0;h<s.length;h++)D(s[h]/E,S[h],k[h]);else{n.multiDrawElementsInstancedWEBGL(g,S,0,Q,s,0,k,0,r);let h=0;for(let N=0;N<r;N++)h+=S[N]*k[N];I.update(h,g,1)}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=D,this.renderMultiDraw=e,this.renderMultiDrawInstances=a}function KS(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function JS(B,A,I){const g=new WeakMap,C=new EI;function Q(E,i,o){const D=E.morphTargetInfluences,e=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=e!==void 0?e.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let l=function(){F.dispose(),g.delete(i),i.removeEventListener("dispose",l)};s!==void 0&&s.texture.dispose();const S=i.morphAttributes.position!==void 0,r=i.morphAttributes.normal!==void 0,k=i.morphAttributes.color!==void 0,n=i.morphAttributes.position||[],h=i.morphAttributes.normal||[],N=i.morphAttributes.color||[];let U=0;S===!0&&(U=1),r===!0&&(U=2),k===!0&&(U=3);let y=i.attributes.position.count*U,f=1;y>A.maxTextureSize&&(f=Math.ceil(y/A.maxTextureSize),y=A.maxTextureSize);const J=new Float32Array(y*f*4*a),F=new jD(J,y,f,a);F.type=pg,F.needsUpdate=!0;const L=U*4;for(let G=0;G<a;G++){const p=n[G],v=h[G],b=N[G],V=y*f*4*G;for(let AA=0;AA<p.count;AA++){const W=AA*L;S===!0&&(C.fromBufferAttribute(p,AA),J[V+W+0]=C.x,J[V+W+1]=C.y,J[V+W+2]=C.z,J[V+W+3]=0),r===!0&&(C.fromBufferAttribute(v,AA),J[V+W+4]=C.x,J[V+W+5]=C.y,J[V+W+6]=C.z,J[V+W+7]=0),k===!0&&(C.fromBufferAttribute(b,AA),J[V+W+8]=C.x,J[V+W+9]=C.y,J[V+W+10]=C.z,J[V+W+11]=b.itemSize===4?C.w:1)}}s={count:a,texture:F,size:new pA(y,f)},g.set(i,s),i.addEventListener("dispose",l)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let S=0;for(let k=0;k<D.length;k++)S+=D[k];const r=i.morphTargetsRelative?1:1-S;o.getUniforms().setValue(B,"morphTargetBaseInfluence",r),o.getUniforms().setValue(B,"morphTargetInfluences",D)}o.getUniforms().setValue(B,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",s.size)}return{update:Q}}function FS(B,A,I,g){let C=new WeakMap;function Q(o){const D=g.render.frame,e=o.geometry,a=A.get(o,e);if(C.get(a)!==D&&(A.update(a),C.set(a,D)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==D&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,D))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==D&&(s.update(),C.set(s,D))}return a}function E(){C=new WeakMap}function i(o){const D=o.target;D.removeEventListener("dispose",i),I.remove(D.instanceMatrix),D.instanceColor!==null&&I.remove(D.instanceColor)}return{update:Q,dispose:E}}const Dt=new ZI,Oo=new Bt(1,1),tt=new jD,et=new Qa,at=new Ct,bo=[],Zo=[],_o=new Float32Array(16),vo=new Float32Array(9),Wo=new Float32Array(4);function VC(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=bo[C];if(Q===void 0&&(Q=new Float32Array(C),bo[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function NI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function KI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function kQ(B,A){let I=Zo[A];I===void 0&&(I=new Int32Array(A),Zo[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function RS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function pS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;B.uniform2fv(this.addr,A),KI(I,A)}}function qS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(NI(I,A))return;B.uniform3fv(this.addr,A),KI(I,A)}}function YS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;B.uniform4fv(this.addr,A),KI(I,A)}}function dS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),KI(I,A)}else{if(NI(I,g))return;Wo.set(g),B.uniformMatrix2fv(this.addr,!1,Wo),KI(I,g)}}function LS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),KI(I,A)}else{if(NI(I,g))return;vo.set(g),B.uniformMatrix3fv(this.addr,!1,vo),KI(I,g)}}function fS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(NI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),KI(I,A)}else{if(NI(I,g))return;_o.set(g),B.uniformMatrix4fv(this.addr,!1,_o),KI(I,g)}}function HS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function uS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;B.uniform2iv(this.addr,A),KI(I,A)}}function mS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(NI(I,A))return;B.uniform3iv(this.addr,A),KI(I,A)}}function TS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;B.uniform4iv(this.addr,A),KI(I,A)}}function xS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function OS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(NI(I,A))return;B.uniform2uiv(this.addr,A),KI(I,A)}}function bS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(NI(I,A))return;B.uniform3uiv(this.addr,A),KI(I,A)}}function ZS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(NI(I,A))return;B.uniform4uiv(this.addr,A),KI(I,A)}}function _S(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);let Q;this.type===B.SAMPLER_2D_SHADOW?(Oo.compareFunction=WD,Q=Oo):Q=Dt,I.setTexture2D(A||Q,C)}function vS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||et,C)}function WS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||at,C)}function PS(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||tt,C)}function VS(B){switch(B){case 5126:return RS;case 35664:return pS;case 35665:return qS;case 35666:return YS;case 35674:return dS;case 35675:return LS;case 35676:return fS;case 5124:case 35670:return HS;case 35667:case 35671:return uS;case 35668:case 35672:return mS;case 35669:case 35673:return TS;case 5125:return xS;case 36294:return OS;case 36295:return bS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return _S;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return PS}}function jS(B,A){B.uniform1fv(this.addr,A)}function XS(B,A){const I=VC(A,this.size,2);B.uniform2fv(this.addr,I)}function zS(B,A){const I=VC(A,this.size,3);B.uniform3fv(this.addr,I)}function $S(B,A){const I=VC(A,this.size,4);B.uniform4fv(this.addr,I)}function An(B,A){const I=VC(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function In(B,A){const I=VC(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function gn(B,A){const I=VC(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function Cn(B,A){B.uniform1iv(this.addr,A)}function Bn(B,A){B.uniform2iv(this.addr,A)}function Qn(B,A){B.uniform3iv(this.addr,A)}function En(B,A){B.uniform4iv(this.addr,A)}function on(B,A){B.uniform1uiv(this.addr,A)}function Dn(B,A){B.uniform2uiv(this.addr,A)}function tn(B,A){B.uniform3uiv(this.addr,A)}function en(B,A){B.uniform4uiv(this.addr,A)}function an(B,A,I){const g=this.cache,C=A.length,Q=kQ(I,C);NI(g,Q)||(B.uniform1iv(this.addr,Q),KI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Dt,Q[E])}function sn(B,A,I){const g=this.cache,C=A.length,Q=kQ(I,C);NI(g,Q)||(B.uniform1iv(this.addr,Q),KI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||et,Q[E])}function hn(B,A,I){const g=this.cache,C=A.length,Q=kQ(I,C);NI(g,Q)||(B.uniform1iv(this.addr,Q),KI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||at,Q[E])}function Sn(B,A,I){const g=this.cache,C=A.length,Q=kQ(I,C);NI(g,Q)||(B.uniform1iv(this.addr,Q),KI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||tt,Q[E])}function nn(B){switch(B){case 5126:return jS;case 35664:return XS;case 35665:return zS;case 35666:return $S;case 35674:return An;case 35675:return In;case 35676:return gn;case 5124:case 35670:return Cn;case 35667:case 35671:return Bn;case 35668:case 35672:return Qn;case 35669:case 35673:return En;case 5125:return on;case 36294:return Dn;case 36295:return tn;case 36296:return en;case 35678:case 36198:case 36298:case 36306:case 35682:return an;case 35679:case 36299:case 36307:return sn;case 35680:case 36300:case 36308:case 36293:return hn;case 36289:case 36303:case 36311:case 36292:return Sn}}class wn{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=VS(I.type)}}class rn{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=nn(I.type)}}class cn{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const eE=/(\w+)(\])?(\[|\.)?/g;function Po(B,A){B.seq.push(A),B.map[A.id]=A}function Gn(B,A,I){const g=B.name,C=g.length;for(eE.lastIndex=0;;){const Q=eE.exec(g),E=eE.lastIndex;let i=Q[1];const o=Q[2]==="]",D=Q[3];if(o&&(i=i|0),D===void 0||D==="["&&E+2===C){Po(I,D===void 0?new wn(i,B,A):new rn(i,B,A));break}else{let a=I.map[i];a===void 0&&(a=new cn(i),Po(I,a)),I=a}}}class QQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);Gn(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function Vo(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const kn=37297;let ln=0;function yn(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}const jo=new HA;function Un(B){AI._getMatrix(jo,AI.workingColorSpace,B);const A=`mat3( ${jo.elements.map(I=>I.toFixed(4))} )`;switch(AI.getTransfer(B)){case EQ:return[A,"LinearTransferOETF"];case QI:return[A,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",B),[A,"LinearTransferOETF"]}}function Xo(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+yn(B.getShaderSource(A),E)}else return C}function Mn(B,A){const I=Un(A);return[`vec4 ${B}( vec4 value ) {`,`	return ${I[1]}( vec4( value.rgb * ${I[0]}, value.a ) );`,"}"].join(`
`)}function Nn(B,A){let I;switch(A){case pe:I="Linear";break;case qe:I="Reinhard";break;case Ye:I="Cineon";break;case de:I="ACESFilmic";break;case fe:I="AgX";break;case He:I="Neutral";break;case Le:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const zB=new m;function Kn(){AI.getLuminanceCoefficients(zB);const B=zB.x.toFixed(4),A=zB.y.toFixed(4),I=zB.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${B}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jn(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(BB).join(`
`)}function Fn(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function Rn(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function BB(B){return B!==""}function zo(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function $o(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const pn=/^[ \t]*#include +<([\w\d./]+)>/gm;function gi(B){return B.replace(pn,Yn)}const qn=new Map;function Yn(B,A){let I=mA[A];if(I===void 0){const g=qn.get(A);if(g!==void 0)I=mA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return gi(I)}const dn=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function AD(B){return B.replace(dn,Ln)}function Ln(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function ID(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function fn(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===YD?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===te?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===Jg&&(A="SHADOWMAP_TYPE_VSM"),A}function Hn(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case mC:case TC:A="ENVMAP_TYPE_CUBE";break;case wQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function un(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case TC:A="ENVMAP_MODE_REFRACTION";break}return A}function mn(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case dD:A="ENVMAP_BLENDING_MULTIPLY";break;case Fe:A="ENVMAP_BLENDING_MIX";break;case Re:A="ENVMAP_BLENDING_ADD";break}return A}function Tn(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function xn(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=fn(I),D=Hn(I),e=un(I),a=mn(I),s=Tn(I),S=Jn(I),r=Fn(Q),k=C.createProgram();let n,h,N=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(n=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(BB).join(`
`),n.length>0&&(n+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(BB).join(`
`),h.length>0&&(h+=`
`)):(n=[ID(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(BB).join(`
`),h=[ID(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+D:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==Pg?"#define TONE_MAPPING":"",I.toneMapping!==Pg?mA.tonemapping_pars_fragment:"",I.toneMapping!==Pg?Nn("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",mA.colorspace_pars_fragment,Mn("linearToOutputTexel",I.outputColorSpace),Kn(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(BB).join(`
`)),E=gi(E),E=zo(E,I),E=$o(E,I),i=gi(i),i=zo(i,I),i=$o(i,I),E=AD(E),i=AD(i),I.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,n=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+n,h=["#define varying in",I.glslVersion===eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const U=N+n+E,y=N+h+i,f=Vo(C,C.VERTEX_SHADER,U),J=Vo(C,C.FRAGMENT_SHADER,y);C.attachShader(k,f),C.attachShader(k,J),I.index0AttributeName!==void 0?C.bindAttribLocation(k,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(k,0,"position"),C.linkProgram(k);function F(p){if(B.debug.checkShaderErrors){const v=C.getProgramInfoLog(k).trim(),b=C.getShaderInfoLog(f).trim(),V=C.getShaderInfoLog(J).trim();let AA=!0,W=!0;if(C.getProgramParameter(k,C.LINK_STATUS)===!1)if(AA=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,k,f,J);else{const CA=Xo(C,f,"vertex"),_=Xo(C,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(k,C.VALIDATE_STATUS)+`

Material Name: `+p.name+`
Material Type: `+p.type+`

Program Info Log: `+v+`
`+CA+`
`+_)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(b===""||V==="")&&(W=!1);W&&(p.diagnostics={runnable:AA,programLog:v,vertexShader:{log:b,prefix:n},fragmentShader:{log:V,prefix:h}})}C.deleteShader(f),C.deleteShader(J),L=new QQ(C,k),l=Rn(C,k)}let L;this.getUniforms=function(){return L===void 0&&F(this),L};let l;this.getAttributes=function(){return l===void 0&&F(this),l};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(k,kn)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(k),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=ln++,this.cacheKey=A,this.usedTimes=1,this.program=k,this.vertexShader=f,this.fragmentShader=J,this}let On=0;class bn{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Zn(A),I.set(A,g)),g}}class Zn{constructor(A){this.id=On++,this.code=A,this.usedTimes=0}}function _n(B,A,I,g,C,Q,E){const i=new XD,o=new bn,D=new Set,e=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let S=C.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function k(l){return D.add(l),l===0?"uv":`uv${l}`}function n(l,G,p,v,b){const V=v.fog,AA=b.geometry,W=l.isMeshStandardMaterial?v.environment:null,CA=(l.isMeshStandardMaterial?I:A).get(l.envMap||W),_=CA&&CA.mapping===wQ?CA.image.height:null,oA=r[l.type];l.precision!==null&&(S=C.getMaxPrecision(l.precision),S!==l.precision&&console.warn("THREE.WebGLProgram.getParameters:",l.precision,"not supported, using",S,"instead."));const hA=AA.morphAttributes.position||AA.morphAttributes.normal||AA.morphAttributes.color,lA=hA!==void 0?hA.length:0;let xA=0;AA.morphAttributes.position!==void 0&&(xA=1),AA.morphAttributes.normal!==void 0&&(xA=2),AA.morphAttributes.color!==void 0&&(xA=3);let iI,j,BA,GA;if(oA){const BI=wg[oA];iI=BI.vertexShader,j=BI.fragmentShader}else iI=l.vertexShader,j=l.fragmentShader,o.update(l),BA=o.getVertexShaderID(l),GA=o.getFragmentShaderID(l);const DA=B.getRenderTarget(),RA=B.state.buffers.depth.getReversed(),LA=b.isInstancedMesh===!0,OA=b.isBatchedMesh===!0,hI=!!l.map,jA=!!l.matcap,cI=!!CA,R=!!l.aoMap,XI=!!l.lightMap,vA=!!l.bumpMap,WA=!!l.normalMap,yA=!!l.displacementMap,tI=!!l.emissiveMap,UA=!!l.metalnessMap,M=!!l.roughnessMap,w=l.anisotropy>0,T=l.clearcoat>0,X=l.dispersion>0,$=l.iridescence>0,P=l.sheen>0,kA=l.transmission>0,tA=w&&!!l.anisotropyMap,SA=T&&!!l.clearcoatMap,XA=T&&!!l.clearcoatNormalMap,gA=T&&!!l.clearcoatRoughnessMap,nA=$&&!!l.iridescenceMap,FA=$&&!!l.iridescenceThicknessMap,qA=P&&!!l.sheenColorMap,wA=P&&!!l.sheenRoughnessMap,PA=!!l.specularMap,uA=!!l.specularColorMap,DI=!!l.specularIntensityMap,d=kA&&!!l.transmissionMap,EA=kA&&!!l.thicknessMap,Z=!!l.gradientMap,z=!!l.alphaMap,aA=l.alphaTest>0,eA=!!l.alphaHash,fA=!!l.extensions;let wI=Pg;l.toneMapped&&(DA===null||DA.isXRRenderTarget===!0)&&(wI=B.toneMapping);const dI={shaderID:oA,shaderType:l.type,shaderName:l.name,vertexShader:iI,fragmentShader:j,defines:l.defines,customVertexShaderID:BA,customFragmentShaderID:GA,isRawShaderMaterial:l.isRawShaderMaterial===!0,glslVersion:l.glslVersion,precision:S,batching:OA,batchingColor:OA&&b._colorsTexture!==null,instancing:LA,instancingColor:LA&&b.instanceColor!==null,instancingMorph:LA&&b.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:DA===null?B.outputColorSpace:DA.isXRRenderTarget===!0?DA.texture.colorSpace:bC,alphaToCoverage:!!l.alphaToCoverage,map:hI,matcap:jA,envMap:cI,envMapMode:cI&&CA.mapping,envMapCubeUVHeight:_,aoMap:R,lightMap:XI,bumpMap:vA,normalMap:WA,displacementMap:s&&yA,emissiveMap:tI,normalMapObjectSpace:WA&&l.normalMapType===xe,normalMapTangentSpace:WA&&l.normalMapType===vD,metalnessMap:UA,roughnessMap:M,anisotropy:w,anisotropyMap:tA,clearcoat:T,clearcoatMap:SA,clearcoatNormalMap:XA,clearcoatRoughnessMap:gA,dispersion:X,iridescence:$,iridescenceMap:nA,iridescenceThicknessMap:FA,sheen:P,sheenColorMap:qA,sheenRoughnessMap:wA,specularMap:PA,specularColorMap:uA,specularIntensityMap:DI,transmission:kA,transmissionMap:d,thicknessMap:EA,gradientMap:Z,opaque:l.transparent===!1&&l.blending===LC&&l.alphaToCoverage===!1,alphaMap:z,alphaTest:aA,alphaHash:eA,combine:l.combine,mapUv:hI&&k(l.map.channel),aoMapUv:R&&k(l.aoMap.channel),lightMapUv:XI&&k(l.lightMap.channel),bumpMapUv:vA&&k(l.bumpMap.channel),normalMapUv:WA&&k(l.normalMap.channel),displacementMapUv:yA&&k(l.displacementMap.channel),emissiveMapUv:tI&&k(l.emissiveMap.channel),metalnessMapUv:UA&&k(l.metalnessMap.channel),roughnessMapUv:M&&k(l.roughnessMap.channel),anisotropyMapUv:tA&&k(l.anisotropyMap.channel),clearcoatMapUv:SA&&k(l.clearcoatMap.channel),clearcoatNormalMapUv:XA&&k(l.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gA&&k(l.clearcoatRoughnessMap.channel),iridescenceMapUv:nA&&k(l.iridescenceMap.channel),iridescenceThicknessMapUv:FA&&k(l.iridescenceThicknessMap.channel),sheenColorMapUv:qA&&k(l.sheenColorMap.channel),sheenRoughnessMapUv:wA&&k(l.sheenRoughnessMap.channel),specularMapUv:PA&&k(l.specularMap.channel),specularColorMapUv:uA&&k(l.specularColorMap.channel),specularIntensityMapUv:DI&&k(l.specularIntensityMap.channel),transmissionMapUv:d&&k(l.transmissionMap.channel),thicknessMapUv:EA&&k(l.thicknessMap.channel),alphaMapUv:z&&k(l.alphaMap.channel),vertexTangents:!!AA.attributes.tangent&&(WA||w),vertexColors:l.vertexColors,vertexAlphas:l.vertexColors===!0&&!!AA.attributes.color&&AA.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!AA.attributes.uv&&(hI||z),fog:!!V,useFog:l.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:l.flatShading===!0,sizeAttenuation:l.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:RA,skinning:b.isSkinnedMesh===!0,morphTargets:AA.morphAttributes.position!==void 0,morphNormals:AA.morphAttributes.normal!==void 0,morphColors:AA.morphAttributes.color!==void 0,morphTargetsCount:lA,morphTextureStride:xA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:l.dithering,shadowMapEnabled:B.shadowMap.enabled&&p.length>0,shadowMapType:B.shadowMap.type,toneMapping:wI,decodeVideoTexture:hI&&l.map.isVideoTexture===!0&&AI.getTransfer(l.map.colorSpace)===QI,decodeVideoTextureEmissive:tI&&l.emissiveMap.isVideoTexture===!0&&AI.getTransfer(l.emissiveMap.colorSpace)===QI,premultipliedAlpha:l.premultipliedAlpha,doubleSided:l.side===Rg,flipSided:l.side===bI,useDepthPacking:l.depthPacking>=0,depthPacking:l.depthPacking||0,index0AttributeName:l.index0AttributeName,extensionClipCullDistance:fA&&l.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fA&&l.extensions.multiDraw===!0||OA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:l.customProgramCacheKey()};return dI.vertexUv1s=D.has(1),dI.vertexUv2s=D.has(2),dI.vertexUv3s=D.has(3),D.clear(),dI}function h(l){const G=[];if(l.shaderID?G.push(l.shaderID):(G.push(l.customVertexShaderID),G.push(l.customFragmentShaderID)),l.defines!==void 0)for(const p in l.defines)G.push(p),G.push(l.defines[p]);return l.isRawShaderMaterial===!1&&(N(G,l),U(G,l),G.push(B.outputColorSpace)),G.push(l.customProgramCacheKey),G.join()}function N(l,G){l.push(G.precision),l.push(G.outputColorSpace),l.push(G.envMapMode),l.push(G.envMapCubeUVHeight),l.push(G.mapUv),l.push(G.alphaMapUv),l.push(G.lightMapUv),l.push(G.aoMapUv),l.push(G.bumpMapUv),l.push(G.normalMapUv),l.push(G.displacementMapUv),l.push(G.emissiveMapUv),l.push(G.metalnessMapUv),l.push(G.roughnessMapUv),l.push(G.anisotropyMapUv),l.push(G.clearcoatMapUv),l.push(G.clearcoatNormalMapUv),l.push(G.clearcoatRoughnessMapUv),l.push(G.iridescenceMapUv),l.push(G.iridescenceThicknessMapUv),l.push(G.sheenColorMapUv),l.push(G.sheenRoughnessMapUv),l.push(G.specularMapUv),l.push(G.specularColorMapUv),l.push(G.specularIntensityMapUv),l.push(G.transmissionMapUv),l.push(G.thicknessMapUv),l.push(G.combine),l.push(G.fogExp2),l.push(G.sizeAttenuation),l.push(G.morphTargetsCount),l.push(G.morphAttributeCount),l.push(G.numDirLights),l.push(G.numPointLights),l.push(G.numSpotLights),l.push(G.numSpotLightMaps),l.push(G.numHemiLights),l.push(G.numRectAreaLights),l.push(G.numDirLightShadows),l.push(G.numPointLightShadows),l.push(G.numSpotLightShadows),l.push(G.numSpotLightShadowsWithMaps),l.push(G.numLightProbes),l.push(G.shadowMapType),l.push(G.toneMapping),l.push(G.numClippingPlanes),l.push(G.numClipIntersection),l.push(G.depthPacking)}function U(l,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),G.dispersion&&i.enable(20),G.batchingColor&&i.enable(21),l.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.reverseDepthBuffer&&i.enable(4),G.skinning&&i.enable(5),G.morphTargets&&i.enable(6),G.morphNormals&&i.enable(7),G.morphColors&&i.enable(8),G.premultipliedAlpha&&i.enable(9),G.shadowMapEnabled&&i.enable(10),G.doubleSided&&i.enable(11),G.flipSided&&i.enable(12),G.useDepthPacking&&i.enable(13),G.dithering&&i.enable(14),G.transmission&&i.enable(15),G.sheen&&i.enable(16),G.opaque&&i.enable(17),G.pointsUvs&&i.enable(18),G.decodeVideoTexture&&i.enable(19),G.decodeVideoTextureEmissive&&i.enable(20),G.alphaToCoverage&&i.enable(21),l.push(i.mask)}function y(l){const G=r[l.type];let p;if(G){const v=wg[G];p=DQ.clone(v.uniforms)}else p=l.uniforms;return p}function f(l,G){let p;for(let v=0,b=e.length;v<b;v++){const V=e[v];if(V.cacheKey===G){p=V,++p.usedTimes;break}}return p===void 0&&(p=new xn(B,G,l,Q),e.push(p)),p}function J(l){if(--l.usedTimes===0){const G=e.indexOf(l);e[G]=e[e.length-1],e.pop(),l.destroy()}}function F(l){o.remove(l)}function L(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:y,acquireProgram:f,releaseProgram:J,releaseShaderCache:F,programs:e,dispose:L}}function vn(){let B=new WeakMap;function A(E){return B.has(E)}function I(E){let i=B.get(E);return i===void 0&&(i={},B.set(E,i)),i}function g(E){B.delete(E)}function C(E,i,o){B.get(E)[i]=o}function Q(){B=new WeakMap}return{has:A,get:I,remove:g,update:C,dispose:Q}}function Wn(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function gD(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function CD(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,S,r,k,n){let h=B[A];return h===void 0?(h={id:a.id,object:a,geometry:s,material:S,groupOrder:r,renderOrder:a.renderOrder,z:k,group:n},B[A]=h):(h.id=a.id,h.object=a,h.geometry=s,h.material=S,h.groupOrder=r,h.renderOrder=a.renderOrder,h.z=k,h.group=n),A++,h}function i(a,s,S,r,k,n){const h=E(a,s,S,r,k,n);S.transmission>0?g.push(h):S.transparent===!0?C.push(h):I.push(h)}function o(a,s,S,r,k,n){const h=E(a,s,S,r,k,n);S.transmission>0?g.unshift(h):S.transparent===!0?C.unshift(h):I.unshift(h)}function D(a,s){I.length>1&&I.sort(a||Wn),g.length>1&&g.sort(s||gD),C.length>1&&C.sort(s||gD)}function e(){for(let a=A,s=B.length;a<s;a++){const S=B[a];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:e,sort:D}}function Pn(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new CD,B.set(g,[E])):C>=Q.length?(E=new CD,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function Vn(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new m,color:new ZA};break;case"SpotLight":I={position:new m,direction:new m,color:new ZA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new m,color:new ZA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new m,skyColor:new ZA,groundColor:new ZA};break;case"RectAreaLight":I={color:new ZA,position:new m,halfWidth:new m,halfHeight:new m};break}return B[A.id]=I,I}}}function jn(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let Xn=0;function zn(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function $n(B){const A=new Vn,I=jn(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let D=0;D<9;D++)g.probe.push(new m);const C=new m,Q=new nI,E=new nI;function i(D){let e=0,a=0,s=0;for(let l=0;l<9;l++)g.probe[l].set(0,0,0);let S=0,r=0,k=0,n=0,h=0,N=0,U=0,y=0,f=0,J=0,F=0;D.sort(zn);for(let l=0,G=D.length;l<G;l++){const p=D[l],v=p.color,b=p.intensity,V=p.distance,AA=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)e+=v.r*b,a+=v.g*b,s+=v.b*b;else if(p.isLightProbe){for(let W=0;W<9;W++)g.probe[W].addScaledVector(p.sh.coefficients[W],b);F++}else if(p.isDirectionalLight){const W=A.get(p);if(W.color.copy(p.color).multiplyScalar(p.intensity),p.castShadow){const CA=p.shadow,_=I.get(p);_.shadowIntensity=CA.intensity,_.shadowBias=CA.bias,_.shadowNormalBias=CA.normalBias,_.shadowRadius=CA.radius,_.shadowMapSize=CA.mapSize,g.directionalShadow[S]=_,g.directionalShadowMap[S]=AA,g.directionalShadowMatrix[S]=p.shadow.matrix,N++}g.directional[S]=W,S++}else if(p.isSpotLight){const W=A.get(p);W.position.setFromMatrixPosition(p.matrixWorld),W.color.copy(v).multiplyScalar(b),W.distance=V,W.coneCos=Math.cos(p.angle),W.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),W.decay=p.decay,g.spot[k]=W;const CA=p.shadow;if(p.map&&(g.spotLightMap[f]=p.map,f++,CA.updateMatrices(p),p.castShadow&&J++),g.spotLightMatrix[k]=CA.matrix,p.castShadow){const _=I.get(p);_.shadowIntensity=CA.intensity,_.shadowBias=CA.bias,_.shadowNormalBias=CA.normalBias,_.shadowRadius=CA.radius,_.shadowMapSize=CA.mapSize,g.spotShadow[k]=_,g.spotShadowMap[k]=AA,y++}k++}else if(p.isRectAreaLight){const W=A.get(p);W.color.copy(v).multiplyScalar(b),W.halfWidth.set(p.width*.5,0,0),W.halfHeight.set(0,p.height*.5,0),g.rectArea[n]=W,n++}else if(p.isPointLight){const W=A.get(p);if(W.color.copy(p.color).multiplyScalar(p.intensity),W.distance=p.distance,W.decay=p.decay,p.castShadow){const CA=p.shadow,_=I.get(p);_.shadowIntensity=CA.intensity,_.shadowBias=CA.bias,_.shadowNormalBias=CA.normalBias,_.shadowRadius=CA.radius,_.shadowMapSize=CA.mapSize,_.shadowCameraNear=CA.camera.near,_.shadowCameraFar=CA.camera.far,g.pointShadow[r]=_,g.pointShadowMap[r]=AA,g.pointShadowMatrix[r]=p.shadow.matrix,U++}g.point[r]=W,r++}else if(p.isHemisphereLight){const W=A.get(p);W.skyColor.copy(p.color).multiplyScalar(b),W.groundColor.copy(p.groundColor).multiplyScalar(b),g.hemi[h]=W,h++}}n>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=QA.LTC_FLOAT_1,g.rectAreaLTC2=QA.LTC_FLOAT_2):(g.rectAreaLTC1=QA.LTC_HALF_1,g.rectAreaLTC2=QA.LTC_HALF_2)),g.ambient[0]=e,g.ambient[1]=a,g.ambient[2]=s;const L=g.hash;(L.directionalLength!==S||L.pointLength!==r||L.spotLength!==k||L.rectAreaLength!==n||L.hemiLength!==h||L.numDirectionalShadows!==N||L.numPointShadows!==U||L.numSpotShadows!==y||L.numSpotMaps!==f||L.numLightProbes!==F)&&(g.directional.length=S,g.spot.length=k,g.rectArea.length=n,g.point.length=r,g.hemi.length=h,g.directionalShadow.length=N,g.directionalShadowMap.length=N,g.pointShadow.length=U,g.pointShadowMap.length=U,g.spotShadow.length=y,g.spotShadowMap.length=y,g.directionalShadowMatrix.length=N,g.pointShadowMatrix.length=U,g.spotLightMatrix.length=y+f-J,g.spotLightMap.length=f,g.numSpotLightShadowsWithMaps=J,g.numLightProbes=F,L.directionalLength=S,L.pointLength=r,L.spotLength=k,L.rectAreaLength=n,L.hemiLength=h,L.numDirectionalShadows=N,L.numPointShadows=U,L.numSpotShadows=y,L.numSpotMaps=f,L.numLightProbes=F,g.version=Xn++)}function o(D,e){let a=0,s=0,S=0,r=0,k=0;const n=e.matrixWorldInverse;for(let h=0,N=D.length;h<N;h++){const U=D[h];if(U.isDirectionalLight){const y=g.directional[a];y.direction.setFromMatrixPosition(U.matrixWorld),C.setFromMatrixPosition(U.target.matrixWorld),y.direction.sub(C),y.direction.transformDirection(n),a++}else if(U.isSpotLight){const y=g.spot[S];y.position.setFromMatrixPosition(U.matrixWorld),y.position.applyMatrix4(n),y.direction.setFromMatrixPosition(U.matrixWorld),C.setFromMatrixPosition(U.target.matrixWorld),y.direction.sub(C),y.direction.transformDirection(n),S++}else if(U.isRectAreaLight){const y=g.rectArea[r];y.position.setFromMatrixPosition(U.matrixWorld),y.position.applyMatrix4(n),E.identity(),Q.copy(U.matrixWorld),Q.premultiply(n),E.extractRotation(Q),y.halfWidth.set(U.width*.5,0,0),y.halfHeight.set(0,U.height*.5,0),y.halfWidth.applyMatrix4(E),y.halfHeight.applyMatrix4(E),r++}else if(U.isPointLight){const y=g.point[s];y.position.setFromMatrixPosition(U.matrixWorld),y.position.applyMatrix4(n),s++}else if(U.isHemisphereLight){const y=g.hemi[k];y.direction.setFromMatrixPosition(U.matrixWorld),y.direction.transformDirection(n),k++}}}return{setup:i,setupView:o,state:g}}function BD(B){const A=new $n(B),I=[],g=[];function C(e){D.camera=e,I.length=0,g.length=0}function Q(e){I.push(e)}function E(e){g.push(e)}function i(){A.setup(I)}function o(e){A.setupView(I,e)}const D={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:D,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function Aw(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new BD(B),A.set(C,[i])):Q>=E.length?(i=new BD(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cw(B,A,I){let g=new Ui;const C=new pA,Q=new pA,E=new EI,i=new Ma({depthPacking:Te}),o=new Na,D={},e=I.maxTextureSize,a={[Vg]:bI,[bI]:Vg,[Rg]:Rg},s=new OI({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pA},radius:{value:4}},vertexShader:Iw,fragmentShader:gw}),S=s.clone();S.defines.HORIZONTAL_PASS=1;const r=new Tg;r.setAttribute("position",new Gg(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const k=new jI(r,s),n=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=YD;let h=this.type;this.render=function(J,F,L){if(n.enabled===!1||n.autoUpdate===!1&&n.needsUpdate===!1||J.length===0)return;const l=B.getRenderTarget(),G=B.getActiveCubeFace(),p=B.getActiveMipmapLevel(),v=B.state;v.setBlending(Yg),v.buffers.color.setClear(1,1,1,1),v.buffers.depth.setTest(!0),v.setScissorTest(!1);const b=h!==Jg&&this.type===Jg,V=h===Jg&&this.type!==Jg;for(let AA=0,W=J.length;AA<W;AA++){const CA=J[AA],_=CA.shadow;if(_===void 0){console.warn("THREE.WebGLShadowMap:",CA,"has no shadow.");continue}if(_.autoUpdate===!1&&_.needsUpdate===!1)continue;C.copy(_.mapSize);const oA=_.getFrameExtents();if(C.multiply(oA),Q.copy(_.mapSize),(C.x>e||C.y>e)&&(C.x>e&&(Q.x=Math.floor(e/oA.x),C.x=Q.x*oA.x,_.mapSize.x=Q.x),C.y>e&&(Q.y=Math.floor(e/oA.y),C.y=Q.y*oA.y,_.mapSize.y=Q.y)),_.map===null||b===!0||V===!0){const lA=this.type!==Jg?{minFilter:sg,magFilter:sg}:{};_.map!==null&&_.map.dispose(),_.map=new hg(C.x,C.y,lA),_.map.texture.name=CA.name+".shadowMap",_.camera.updateProjectionMatrix()}B.setRenderTarget(_.map),B.clear();const hA=_.getViewportCount();for(let lA=0;lA<hA;lA++){const xA=_.getViewport(lA);E.set(Q.x*xA.x,Q.y*xA.y,Q.x*xA.z,Q.y*xA.w),v.viewport(E),_.updateMatrices(CA,lA),g=_.getFrustum(),y(F,L,_.camera,CA,this.type)}_.isPointLightShadow!==!0&&this.type===Jg&&N(_,L),_.needsUpdate=!1}h=this.type,n.needsUpdate=!1,B.setRenderTarget(l,G,p)};function N(J,F){const L=A.update(k);s.defines.VSM_SAMPLES!==J.blurSamples&&(s.defines.VSM_SAMPLES=J.blurSamples,S.defines.VSM_SAMPLES=J.blurSamples,s.needsUpdate=!0,S.needsUpdate=!0),J.mapPass===null&&(J.mapPass=new hg(C.x,C.y)),s.uniforms.shadow_pass.value=J.map.texture,s.uniforms.resolution.value=J.mapSize,s.uniforms.radius.value=J.radius,B.setRenderTarget(J.mapPass),B.clear(),B.renderBufferDirect(F,null,L,s,k,null),S.uniforms.shadow_pass.value=J.mapPass.texture,S.uniforms.resolution.value=J.mapSize,S.uniforms.radius.value=J.radius,B.setRenderTarget(J.map),B.clear(),B.renderBufferDirect(F,null,L,S,k,null)}function U(J,F,L,l){let G=null;const p=L.isPointLight===!0?J.customDistanceMaterial:J.customDepthMaterial;if(p!==void 0)G=p;else if(G=L.isPointLight===!0?o:i,B.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const v=G.uuid,b=F.uuid;let V=D[v];V===void 0&&(V={},D[v]=V);let AA=V[b];AA===void 0&&(AA=G.clone(),V[b]=AA,F.addEventListener("dispose",f)),G=AA}if(G.visible=F.visible,G.wireframe=F.wireframe,l===Jg?G.side=F.shadowSide!==null?F.shadowSide:F.side:G.side=F.shadowSide!==null?F.shadowSide:a[F.side],G.alphaMap=F.alphaMap,G.alphaTest=F.alphaTest,G.map=F.map,G.clipShadows=F.clipShadows,G.clippingPlanes=F.clippingPlanes,G.clipIntersection=F.clipIntersection,G.displacementMap=F.displacementMap,G.displacementScale=F.displacementScale,G.displacementBias=F.displacementBias,G.wireframeLinewidth=F.wireframeLinewidth,G.linewidth=F.linewidth,L.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const v=B.properties.get(G);v.light=L}return G}function y(J,F,L,l,G){if(J.visible===!1)return;if(J.layers.test(F.layers)&&(J.isMesh||J.isLine||J.isPoints)&&(J.castShadow||J.receiveShadow&&G===Jg)&&(!J.frustumCulled||g.intersectsObject(J))){J.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,J.matrixWorld);const b=A.update(J),V=J.material;if(Array.isArray(V)){const AA=b.groups;for(let W=0,CA=AA.length;W<CA;W++){const _=AA[W],oA=V[_.materialIndex];if(oA&&oA.visible){const hA=U(J,oA,l,G);J.onBeforeShadow(B,J,F,L,b,hA,_),B.renderBufferDirect(L,null,b,hA,J,_),J.onAfterShadow(B,J,F,L,b,hA,_)}}}else if(V.visible){const AA=U(J,V,l,G);J.onBeforeShadow(B,J,F,L,b,AA,null),B.renderBufferDirect(L,null,b,AA,J,null),J.onAfterShadow(B,J,F,L,b,AA,null)}}const v=J.children;for(let b=0,V=v.length;b<V;b++)y(v[b],F,L,l,G)}function f(J){J.target.removeEventListener("dispose",f);for(const L in D){const l=D[L],G=J.target.uuid;G in l&&(l[G].dispose(),delete l[G])}}}const Bw={[rE]:cE,[GE]:yE,[kE]:UE,[uC]:lE,[cE]:rE,[yE]:GE,[UE]:kE,[lE]:uC};function Qw(B,A){function I(){let d=!1;const EA=new EI;let Z=null;const z=new EI(0,0,0,0);return{setMask:function(aA){Z!==aA&&!d&&(B.colorMask(aA,aA,aA,aA),Z=aA)},setLocked:function(aA){d=aA},setClear:function(aA,eA,fA,wI,dI){dI===!0&&(aA*=wI,eA*=wI,fA*=wI),EA.set(aA,eA,fA,wI),z.equals(EA)===!1&&(B.clearColor(aA,eA,fA,wI),z.copy(EA))},reset:function(){d=!1,Z=null,z.set(-1,0,0,0)}}}function g(){let d=!1,EA=!1,Z=null,z=null,aA=null;return{setReversed:function(eA){if(EA!==eA){const fA=A.get("EXT_clip_control");EA?fA.clipControlEXT(fA.LOWER_LEFT_EXT,fA.ZERO_TO_ONE_EXT):fA.clipControlEXT(fA.LOWER_LEFT_EXT,fA.NEGATIVE_ONE_TO_ONE_EXT);const wI=aA;aA=null,this.setClear(wI)}EA=eA},getReversed:function(){return EA},setTest:function(eA){eA?DA(B.DEPTH_TEST):RA(B.DEPTH_TEST)},setMask:function(eA){Z!==eA&&!d&&(B.depthMask(eA),Z=eA)},setFunc:function(eA){if(EA&&(eA=Bw[eA]),z!==eA){switch(eA){case rE:B.depthFunc(B.NEVER);break;case cE:B.depthFunc(B.ALWAYS);break;case GE:B.depthFunc(B.LESS);break;case uC:B.depthFunc(B.LEQUAL);break;case kE:B.depthFunc(B.EQUAL);break;case lE:B.depthFunc(B.GEQUAL);break;case yE:B.depthFunc(B.GREATER);break;case UE:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}z=eA}},setLocked:function(eA){d=eA},setClear:function(eA){aA!==eA&&(EA&&(eA=1-eA),B.clearDepth(eA),aA=eA)},reset:function(){d=!1,Z=null,z=null,aA=null,EA=!1}}}function C(){let d=!1,EA=null,Z=null,z=null,aA=null,eA=null,fA=null,wI=null,dI=null;return{setTest:function(BI){d||(BI?DA(B.STENCIL_TEST):RA(B.STENCIL_TEST))},setMask:function(BI){EA!==BI&&!d&&(B.stencilMask(BI),EA=BI)},setFunc:function(BI,Bg,lg){(Z!==BI||z!==Bg||aA!==lg)&&(B.stencilFunc(BI,Bg,lg),Z=BI,z=Bg,aA=lg)},setOp:function(BI,Bg,lg){(eA!==BI||fA!==Bg||wI!==lg)&&(B.stencilOp(BI,Bg,lg),eA=BI,fA=Bg,wI=lg)},setLocked:function(BI){d=BI},setClear:function(BI){dI!==BI&&(B.clearStencil(BI),dI=BI)},reset:function(){d=!1,EA=null,Z=null,z=null,aA=null,eA=null,fA=null,wI=null,dI=null}}}const Q=new I,E=new g,i=new C,o=new WeakMap,D=new WeakMap;let e={},a={},s=new WeakMap,S=[],r=null,k=!1,n=null,h=null,N=null,U=null,y=null,f=null,J=null,F=new ZA(0,0,0),L=0,l=!1,G=null,p=null,v=null,b=null,V=null;const AA=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,CA=0;const _=B.getParameter(B.VERSION);_.indexOf("WebGL")!==-1?(CA=parseFloat(/^WebGL (\d)/.exec(_)[1]),W=CA>=1):_.indexOf("OpenGL ES")!==-1&&(CA=parseFloat(/^OpenGL ES (\d)/.exec(_)[1]),W=CA>=2);let oA=null,hA={};const lA=B.getParameter(B.SCISSOR_BOX),xA=B.getParameter(B.VIEWPORT),iI=new EI().fromArray(lA),j=new EI().fromArray(xA);function BA(d,EA,Z,z){const aA=new Uint8Array(4),eA=B.createTexture();B.bindTexture(d,eA),B.texParameteri(d,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(d,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let fA=0;fA<Z;fA++)d===B.TEXTURE_3D||d===B.TEXTURE_2D_ARRAY?B.texImage3D(EA,0,B.RGBA,1,1,z,0,B.RGBA,B.UNSIGNED_BYTE,aA):B.texImage2D(EA+fA,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,aA);return eA}const GA={};GA[B.TEXTURE_2D]=BA(B.TEXTURE_2D,B.TEXTURE_2D,1),GA[B.TEXTURE_CUBE_MAP]=BA(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),GA[B.TEXTURE_2D_ARRAY]=BA(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),GA[B.TEXTURE_3D]=BA(B.TEXTURE_3D,B.TEXTURE_3D,1,1),Q.setClear(0,0,0,1),E.setClear(1),i.setClear(0),DA(B.DEPTH_TEST),E.setFunc(uC),vA(!1),WA(Eo),DA(B.CULL_FACE),R(Yg);function DA(d){e[d]!==!0&&(B.enable(d),e[d]=!0)}function RA(d){e[d]!==!1&&(B.disable(d),e[d]=!1)}function LA(d,EA){return a[d]!==EA?(B.bindFramebuffer(d,EA),a[d]=EA,d===B.DRAW_FRAMEBUFFER&&(a[B.FRAMEBUFFER]=EA),d===B.FRAMEBUFFER&&(a[B.DRAW_FRAMEBUFFER]=EA),!0):!1}function OA(d,EA){let Z=S,z=!1;if(d){Z=s.get(EA),Z===void 0&&(Z=[],s.set(EA,Z));const aA=d.textures;if(Z.length!==aA.length||Z[0]!==B.COLOR_ATTACHMENT0){for(let eA=0,fA=aA.length;eA<fA;eA++)Z[eA]=B.COLOR_ATTACHMENT0+eA;Z.length=aA.length,z=!0}}else Z[0]!==B.BACK&&(Z[0]=B.BACK,z=!0);z&&B.drawBuffers(Z)}function hI(d){return r!==d?(B.useProgram(d),r=d,!0):!1}const jA={[DC]:B.FUNC_ADD,[ae]:B.FUNC_SUBTRACT,[se]:B.FUNC_REVERSE_SUBTRACT};jA[he]=B.MIN,jA[Se]=B.MAX;const cI={[ne]:B.ZERO,[we]:B.ONE,[re]:B.SRC_COLOR,[nE]:B.SRC_ALPHA,[Ue]:B.SRC_ALPHA_SATURATE,[le]:B.DST_COLOR,[Ge]:B.DST_ALPHA,[ce]:B.ONE_MINUS_SRC_COLOR,[wE]:B.ONE_MINUS_SRC_ALPHA,[ye]:B.ONE_MINUS_DST_COLOR,[ke]:B.ONE_MINUS_DST_ALPHA,[Me]:B.CONSTANT_COLOR,[Ne]:B.ONE_MINUS_CONSTANT_COLOR,[Ke]:B.CONSTANT_ALPHA,[Je]:B.ONE_MINUS_CONSTANT_ALPHA};function R(d,EA,Z,z,aA,eA,fA,wI,dI,BI){if(d===Yg){k===!0&&(RA(B.BLEND),k=!1);return}if(k===!1&&(DA(B.BLEND),k=!0),d!==ee){if(d!==n||BI!==l){if((h!==DC||y!==DC)&&(B.blendEquation(B.FUNC_ADD),h=DC,y=DC),BI)switch(d){case LC:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case SE:B.blendFunc(B.ONE,B.ONE);break;case io:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case oo:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}else switch(d){case LC:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case SE:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case io:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case oo:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",d);break}N=null,U=null,f=null,J=null,F.set(0,0,0),L=0,n=d,l=BI}return}aA=aA||EA,eA=eA||Z,fA=fA||z,(EA!==h||aA!==y)&&(B.blendEquationSeparate(jA[EA],jA[aA]),h=EA,y=aA),(Z!==N||z!==U||eA!==f||fA!==J)&&(B.blendFuncSeparate(cI[Z],cI[z],cI[eA],cI[fA]),N=Z,U=z,f=eA,J=fA),(wI.equals(F)===!1||dI!==L)&&(B.blendColor(wI.r,wI.g,wI.b,dI),F.copy(wI),L=dI),n=d,l=!1}function XI(d,EA){d.side===Rg?RA(B.CULL_FACE):DA(B.CULL_FACE);let Z=d.side===bI;EA&&(Z=!Z),vA(Z),d.blending===LC&&d.transparent===!1?R(Yg):R(d.blending,d.blendEquation,d.blendSrc,d.blendDst,d.blendEquationAlpha,d.blendSrcAlpha,d.blendDstAlpha,d.blendColor,d.blendAlpha,d.premultipliedAlpha),E.setFunc(d.depthFunc),E.setTest(d.depthTest),E.setMask(d.depthWrite),Q.setMask(d.colorWrite);const z=d.stencilWrite;i.setTest(z),z&&(i.setMask(d.stencilWriteMask),i.setFunc(d.stencilFunc,d.stencilRef,d.stencilFuncMask),i.setOp(d.stencilFail,d.stencilZFail,d.stencilZPass)),tI(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),d.alphaToCoverage===!0?DA(B.SAMPLE_ALPHA_TO_COVERAGE):RA(B.SAMPLE_ALPHA_TO_COVERAGE)}function vA(d){G!==d&&(d?B.frontFace(B.CW):B.frontFace(B.CCW),G=d)}function WA(d){d!==oe?(DA(B.CULL_FACE),d!==p&&(d===Eo?B.cullFace(B.BACK):d===De?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):RA(B.CULL_FACE),p=d}function yA(d){d!==v&&(W&&B.lineWidth(d),v=d)}function tI(d,EA,Z){d?(DA(B.POLYGON_OFFSET_FILL),(b!==EA||V!==Z)&&(B.polygonOffset(EA,Z),b=EA,V=Z)):RA(B.POLYGON_OFFSET_FILL)}function UA(d){d?DA(B.SCISSOR_TEST):RA(B.SCISSOR_TEST)}function M(d){d===void 0&&(d=B.TEXTURE0+AA-1),oA!==d&&(B.activeTexture(d),oA=d)}function w(d,EA,Z){Z===void 0&&(oA===null?Z=B.TEXTURE0+AA-1:Z=oA);let z=hA[Z];z===void 0&&(z={type:void 0,texture:void 0},hA[Z]=z),(z.type!==d||z.texture!==EA)&&(oA!==Z&&(B.activeTexture(Z),oA=Z),B.bindTexture(d,EA||GA[d]),z.type=d,z.texture=EA)}function T(){const d=hA[oA];d!==void 0&&d.type!==void 0&&(B.bindTexture(d.type,null),d.type=void 0,d.texture=void 0)}function X(){try{B.compressedTexImage2D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function $(){try{B.compressedTexImage3D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function P(){try{B.texSubImage2D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function kA(){try{B.texSubImage3D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function tA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function SA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function XA(){try{B.texStorage2D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function gA(){try{B.texStorage3D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function nA(){try{B.texImage2D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function FA(){try{B.texImage3D.apply(B,arguments)}catch(d){console.error("THREE.WebGLState:",d)}}function qA(d){iI.equals(d)===!1&&(B.scissor(d.x,d.y,d.z,d.w),iI.copy(d))}function wA(d){j.equals(d)===!1&&(B.viewport(d.x,d.y,d.z,d.w),j.copy(d))}function PA(d,EA){let Z=D.get(EA);Z===void 0&&(Z=new WeakMap,D.set(EA,Z));let z=Z.get(d);z===void 0&&(z=B.getUniformBlockIndex(EA,d.name),Z.set(d,z))}function uA(d,EA){const z=D.get(EA).get(d);o.get(EA)!==z&&(B.uniformBlockBinding(EA,z,d.__bindingPointIndex),o.set(EA,z))}function DI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),E.setReversed(!1),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),e={},oA=null,hA={},a={},s=new WeakMap,S=[],r=null,k=!1,n=null,h=null,N=null,U=null,y=null,f=null,J=null,F=new ZA(0,0,0),L=0,l=!1,G=null,p=null,v=null,b=null,V=null,iI.set(0,0,B.canvas.width,B.canvas.height),j.set(0,0,B.canvas.width,B.canvas.height),Q.reset(),E.reset(),i.reset()}return{buffers:{color:Q,depth:E,stencil:i},enable:DA,disable:RA,bindFramebuffer:LA,drawBuffers:OA,useProgram:hI,setBlending:R,setMaterial:XI,setFlipSided:vA,setCullFace:WA,setLineWidth:yA,setPolygonOffset:tI,setScissorTest:UA,activeTexture:M,bindTexture:w,unbindTexture:T,compressedTexImage2D:X,compressedTexImage3D:$,texImage2D:nA,texImage3D:FA,updateUBOMapping:PA,uniformBlockBinding:uA,texStorage2D:XA,texStorage3D:gA,texSubImage2D:P,texSubImage3D:kA,compressedTexSubImage2D:tA,compressedTexSubImage3D:SA,scissor:qA,viewport:wA,reset:DI}}function Ew(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),D=new pA,e=new WeakMap;let a;const s=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function r(M,w){return S?new OffscreenCanvas(M,w):oQ("canvas")}function k(M,w,T){let X=1;const $=UA(M);if(($.width>T||$.height>T)&&(X=T/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const P=Math.floor(X*$.width),kA=Math.floor(X*$.height);a===void 0&&(a=r(P,kA));const tA=w?r(P,kA):a;return tA.width=P,tA.height=kA,tA.getContext("2d").drawImage(M,0,0,P,kA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+P+"x"+kA+")."),tA}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),M;return M}function n(M){return M.generateMipmaps}function h(M){B.generateMipmap(M)}function N(M){return M.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?B.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?B.TEXTURE_2D_ARRAY:B.TEXTURE_2D}function U(M,w,T,X,$=!1){if(M!==null){if(B[M]!==void 0)return B[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let P=w;if(w===B.RED&&(T===B.FLOAT&&(P=B.R32F),T===B.HALF_FLOAT&&(P=B.R16F),T===B.UNSIGNED_BYTE&&(P=B.R8)),w===B.RED_INTEGER&&(T===B.UNSIGNED_BYTE&&(P=B.R8UI),T===B.UNSIGNED_SHORT&&(P=B.R16UI),T===B.UNSIGNED_INT&&(P=B.R32UI),T===B.BYTE&&(P=B.R8I),T===B.SHORT&&(P=B.R16I),T===B.INT&&(P=B.R32I)),w===B.RG&&(T===B.FLOAT&&(P=B.RG32F),T===B.HALF_FLOAT&&(P=B.RG16F),T===B.UNSIGNED_BYTE&&(P=B.RG8)),w===B.RG_INTEGER&&(T===B.UNSIGNED_BYTE&&(P=B.RG8UI),T===B.UNSIGNED_SHORT&&(P=B.RG16UI),T===B.UNSIGNED_INT&&(P=B.RG32UI),T===B.BYTE&&(P=B.RG8I),T===B.SHORT&&(P=B.RG16I),T===B.INT&&(P=B.RG32I)),w===B.RGB_INTEGER&&(T===B.UNSIGNED_BYTE&&(P=B.RGB8UI),T===B.UNSIGNED_SHORT&&(P=B.RGB16UI),T===B.UNSIGNED_INT&&(P=B.RGB32UI),T===B.BYTE&&(P=B.RGB8I),T===B.SHORT&&(P=B.RGB16I),T===B.INT&&(P=B.RGB32I)),w===B.RGBA_INTEGER&&(T===B.UNSIGNED_BYTE&&(P=B.RGBA8UI),T===B.UNSIGNED_SHORT&&(P=B.RGBA16UI),T===B.UNSIGNED_INT&&(P=B.RGBA32UI),T===B.BYTE&&(P=B.RGBA8I),T===B.SHORT&&(P=B.RGBA16I),T===B.INT&&(P=B.RGBA32I)),w===B.RGB&&T===B.UNSIGNED_INT_5_9_9_9_REV&&(P=B.RGB9_E5),w===B.RGBA){const kA=$?EQ:AI.getTransfer(X);T===B.FLOAT&&(P=B.RGBA32F),T===B.HALF_FLOAT&&(P=B.RGBA16F),T===B.UNSIGNED_BYTE&&(P=kA===QI?B.SRGB8_ALPHA8:B.RGBA8),T===B.UNSIGNED_SHORT_4_4_4_4&&(P=B.RGBA4),T===B.UNSIGNED_SHORT_5_5_5_1&&(P=B.RGB5_A1)}return(P===B.R16F||P===B.R32F||P===B.RG16F||P===B.RG32F||P===B.RGBA16F||P===B.RGBA32F)&&A.get("EXT_color_buffer_float"),P}function y(M,w){let T;return M?w===null||w===hC||w===xC?T=B.DEPTH24_STENCIL8:w===pg?T=B.DEPTH32F_STENCIL8:w===eB&&(T=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===hC||w===xC?T=B.DEPTH_COMPONENT24:w===pg?T=B.DEPTH_COMPONENT32F:w===eB&&(T=B.DEPTH_COMPONENT16),T}function f(M,w){return n(M)===!0||M.isFramebufferTexture&&M.minFilter!==sg&&M.minFilter!==cg?Math.log2(Math.max(w.width,w.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?w.mipmaps.length:1}function J(M){const w=M.target;w.removeEventListener("dispose",J),L(w),w.isVideoTexture&&e.delete(w)}function F(M){const w=M.target;w.removeEventListener("dispose",F),G(w)}function L(M){const w=g.get(M);if(w.__webglInit===void 0)return;const T=M.source,X=s.get(T);if(X){const $=X[w.__cacheKey];$.usedTimes--,$.usedTimes===0&&l(M),Object.keys(X).length===0&&s.delete(T)}g.remove(M)}function l(M){const w=g.get(M);B.deleteTexture(w.__webglTexture);const T=M.source,X=s.get(T);delete X[w.__cacheKey],E.memory.textures--}function G(M){const w=g.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),g.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(w.__webglFramebuffer[X]))for(let $=0;$<w.__webglFramebuffer[X].length;$++)B.deleteFramebuffer(w.__webglFramebuffer[X][$]);else B.deleteFramebuffer(w.__webglFramebuffer[X]);w.__webglDepthbuffer&&B.deleteRenderbuffer(w.__webglDepthbuffer[X])}else{if(Array.isArray(w.__webglFramebuffer))for(let X=0;X<w.__webglFramebuffer.length;X++)B.deleteFramebuffer(w.__webglFramebuffer[X]);else B.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&B.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&B.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let X=0;X<w.__webglColorRenderbuffer.length;X++)w.__webglColorRenderbuffer[X]&&B.deleteRenderbuffer(w.__webglColorRenderbuffer[X]);w.__webglDepthRenderbuffer&&B.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const T=M.textures;for(let X=0,$=T.length;X<$;X++){const P=g.get(T[X]);P.__webglTexture&&(B.deleteTexture(P.__webglTexture),E.memory.textures--),g.remove(T[X])}g.remove(M)}let p=0;function v(){p=0}function b(){const M=p;return M>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+C.maxTextures),p+=1,M}function V(M){const w=[];return w.push(M.wrapS),w.push(M.wrapT),w.push(M.wrapR||0),w.push(M.magFilter),w.push(M.minFilter),w.push(M.anisotropy),w.push(M.internalFormat),w.push(M.format),w.push(M.type),w.push(M.generateMipmaps),w.push(M.premultiplyAlpha),w.push(M.flipY),w.push(M.unpackAlignment),w.push(M.colorSpace),w.join()}function AA(M,w){const T=g.get(M);if(M.isVideoTexture&&yA(M),M.isRenderTargetTexture===!1&&M.version>0&&T.__version!==M.version){const X=M.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(T,M,w);return}}I.bindTexture(B.TEXTURE_2D,T.__webglTexture,B.TEXTURE0+w)}function W(M,w){const T=g.get(M);if(M.version>0&&T.__version!==M.version){j(T,M,w);return}I.bindTexture(B.TEXTURE_2D_ARRAY,T.__webglTexture,B.TEXTURE0+w)}function CA(M,w){const T=g.get(M);if(M.version>0&&T.__version!==M.version){j(T,M,w);return}I.bindTexture(B.TEXTURE_3D,T.__webglTexture,B.TEXTURE0+w)}function _(M,w){const T=g.get(M);if(M.version>0&&T.__version!==M.version){BA(T,M,w);return}I.bindTexture(B.TEXTURE_CUBE_MAP,T.__webglTexture,B.TEXTURE0+w)}const oA={[KE]:B.REPEAT,[eC]:B.CLAMP_TO_EDGE,[JE]:B.MIRRORED_REPEAT},hA={[sg]:B.NEAREST,[ue]:B.NEAREST_MIPMAP_NEAREST,[pB]:B.NEAREST_MIPMAP_LINEAR,[cg]:B.LINEAR,[LQ]:B.LINEAR_MIPMAP_NEAREST,[aC]:B.LINEAR_MIPMAP_LINEAR},lA={[Oe]:B.NEVER,[Pe]:B.ALWAYS,[be]:B.LESS,[WD]:B.LEQUAL,[Ze]:B.EQUAL,[We]:B.GEQUAL,[_e]:B.GREATER,[ve]:B.NOTEQUAL};function xA(M,w){if(w.type===pg&&A.has("OES_texture_float_linear")===!1&&(w.magFilter===cg||w.magFilter===LQ||w.magFilter===pB||w.magFilter===aC||w.minFilter===cg||w.minFilter===LQ||w.minFilter===pB||w.minFilter===aC)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(M,B.TEXTURE_WRAP_S,oA[w.wrapS]),B.texParameteri(M,B.TEXTURE_WRAP_T,oA[w.wrapT]),(M===B.TEXTURE_3D||M===B.TEXTURE_2D_ARRAY)&&B.texParameteri(M,B.TEXTURE_WRAP_R,oA[w.wrapR]),B.texParameteri(M,B.TEXTURE_MAG_FILTER,hA[w.magFilter]),B.texParameteri(M,B.TEXTURE_MIN_FILTER,hA[w.minFilter]),w.compareFunction&&(B.texParameteri(M,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(M,B.TEXTURE_COMPARE_FUNC,lA[w.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===sg||w.minFilter!==pB&&w.minFilter!==aC||w.type===pg&&A.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||g.get(w).__currentAnisotropy){const T=A.get("EXT_texture_filter_anisotropic");B.texParameterf(M,T.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,C.getMaxAnisotropy())),g.get(w).__currentAnisotropy=w.anisotropy}}}function iI(M,w){let T=!1;M.__webglInit===void 0&&(M.__webglInit=!0,w.addEventListener("dispose",J));const X=w.source;let $=s.get(X);$===void 0&&($={},s.set(X,$));const P=V(w);if(P!==M.__cacheKey){$[P]===void 0&&($[P]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,T=!0),$[P].usedTimes++;const kA=$[M.__cacheKey];kA!==void 0&&($[M.__cacheKey].usedTimes--,kA.usedTimes===0&&l(w)),M.__cacheKey=P,M.__webglTexture=$[P].texture}return T}function j(M,w,T){let X=B.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(X=B.TEXTURE_2D_ARRAY),w.isData3DTexture&&(X=B.TEXTURE_3D);const $=iI(M,w),P=w.source;I.bindTexture(X,M.__webglTexture,B.TEXTURE0+T);const kA=g.get(P);if(P.version!==kA.__version||$===!0){I.activeTexture(B.TEXTURE0+T);const tA=AI.getPrimaries(AI.workingColorSpace),SA=w.colorSpace===Wg?null:AI.getPrimaries(w.colorSpace),XA=w.colorSpace===Wg||tA===SA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,w.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,w.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,XA);let gA=k(w.image,!1,C.maxTextureSize);gA=tI(w,gA);const nA=Q.convert(w.format,w.colorSpace),FA=Q.convert(w.type);let qA=U(w.internalFormat,nA,FA,w.colorSpace,w.isVideoTexture);xA(X,w);let wA;const PA=w.mipmaps,uA=w.isVideoTexture!==!0,DI=kA.__version===void 0||$===!0,d=P.dataReady,EA=f(w,gA);if(w.isDepthTexture)qA=y(w.format===OC,w.type),DI&&(uA?I.texStorage2D(B.TEXTURE_2D,1,qA,gA.width,gA.height):I.texImage2D(B.TEXTURE_2D,0,qA,gA.width,gA.height,0,nA,FA,null));else if(w.isDataTexture)if(PA.length>0){uA&&DI&&I.texStorage2D(B.TEXTURE_2D,EA,qA,PA[0].width,PA[0].height);for(let Z=0,z=PA.length;Z<z;Z++)wA=PA[Z],uA?d&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,wA.width,wA.height,nA,FA,wA.data):I.texImage2D(B.TEXTURE_2D,Z,qA,wA.width,wA.height,0,nA,FA,wA.data);w.generateMipmaps=!1}else uA?(DI&&I.texStorage2D(B.TEXTURE_2D,EA,qA,gA.width,gA.height),d&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,gA.width,gA.height,nA,FA,gA.data)):I.texImage2D(B.TEXTURE_2D,0,qA,gA.width,gA.height,0,nA,FA,gA.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){uA&&DI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,EA,qA,PA[0].width,PA[0].height,gA.depth);for(let Z=0,z=PA.length;Z<z;Z++)if(wA=PA[Z],w.format!==ag)if(nA!==null)if(uA){if(d)if(w.layerUpdates.size>0){const aA=Yo(wA.width,wA.height,w.format,w.type);for(const eA of w.layerUpdates){const fA=wA.data.subarray(eA*aA/wA.data.BYTES_PER_ELEMENT,(eA+1)*aA/wA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,eA,wA.width,wA.height,1,nA,fA)}w.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,0,wA.width,wA.height,gA.depth,nA,wA.data)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,Z,qA,wA.width,wA.height,gA.depth,0,wA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else uA?d&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,Z,0,0,0,wA.width,wA.height,gA.depth,nA,FA,wA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,Z,qA,wA.width,wA.height,gA.depth,0,nA,FA,wA.data)}else{uA&&DI&&I.texStorage2D(B.TEXTURE_2D,EA,qA,PA[0].width,PA[0].height);for(let Z=0,z=PA.length;Z<z;Z++)wA=PA[Z],w.format!==ag?nA!==null?uA?d&&I.compressedTexSubImage2D(B.TEXTURE_2D,Z,0,0,wA.width,wA.height,nA,wA.data):I.compressedTexImage2D(B.TEXTURE_2D,Z,qA,wA.width,wA.height,0,wA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):uA?d&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,wA.width,wA.height,nA,FA,wA.data):I.texImage2D(B.TEXTURE_2D,Z,qA,wA.width,wA.height,0,nA,FA,wA.data)}else if(w.isDataArrayTexture)if(uA){if(DI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,EA,qA,gA.width,gA.height,gA.depth),d)if(w.layerUpdates.size>0){const Z=Yo(gA.width,gA.height,w.format,w.type);for(const z of w.layerUpdates){const aA=gA.data.subarray(z*Z/gA.data.BYTES_PER_ELEMENT,(z+1)*Z/gA.data.BYTES_PER_ELEMENT);I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,z,gA.width,gA.height,1,nA,FA,aA)}w.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,gA.width,gA.height,gA.depth,nA,FA,gA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,qA,gA.width,gA.height,gA.depth,0,nA,FA,gA.data);else if(w.isData3DTexture)uA?(DI&&I.texStorage3D(B.TEXTURE_3D,EA,qA,gA.width,gA.height,gA.depth),d&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,gA.width,gA.height,gA.depth,nA,FA,gA.data)):I.texImage3D(B.TEXTURE_3D,0,qA,gA.width,gA.height,gA.depth,0,nA,FA,gA.data);else if(w.isFramebufferTexture){if(DI)if(uA)I.texStorage2D(B.TEXTURE_2D,EA,qA,gA.width,gA.height);else{let Z=gA.width,z=gA.height;for(let aA=0;aA<EA;aA++)I.texImage2D(B.TEXTURE_2D,aA,qA,Z,z,0,nA,FA,null),Z>>=1,z>>=1}}else if(PA.length>0){if(uA&&DI){const Z=UA(PA[0]);I.texStorage2D(B.TEXTURE_2D,EA,qA,Z.width,Z.height)}for(let Z=0,z=PA.length;Z<z;Z++)wA=PA[Z],uA?d&&I.texSubImage2D(B.TEXTURE_2D,Z,0,0,nA,FA,wA):I.texImage2D(B.TEXTURE_2D,Z,qA,nA,FA,wA);w.generateMipmaps=!1}else if(uA){if(DI){const Z=UA(gA);I.texStorage2D(B.TEXTURE_2D,EA,qA,Z.width,Z.height)}d&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,nA,FA,gA)}else I.texImage2D(B.TEXTURE_2D,0,qA,nA,FA,gA);n(w)&&h(X),kA.__version=P.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function BA(M,w,T){if(w.image.length!==6)return;const X=iI(M,w),$=w.source;I.bindTexture(B.TEXTURE_CUBE_MAP,M.__webglTexture,B.TEXTURE0+T);const P=g.get($);if($.version!==P.__version||X===!0){I.activeTexture(B.TEXTURE0+T);const kA=AI.getPrimaries(AI.workingColorSpace),tA=w.colorSpace===Wg?null:AI.getPrimaries(w.colorSpace),SA=w.colorSpace===Wg||kA===tA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,w.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,w.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,SA);const XA=w.isCompressedTexture||w.image[0].isCompressedTexture,gA=w.image[0]&&w.image[0].isDataTexture,nA=[];for(let z=0;z<6;z++)!XA&&!gA?nA[z]=k(w.image[z],!0,C.maxCubemapSize):nA[z]=gA?w.image[z].image:w.image[z],nA[z]=tI(w,nA[z]);const FA=nA[0],qA=Q.convert(w.format,w.colorSpace),wA=Q.convert(w.type),PA=U(w.internalFormat,qA,wA,w.colorSpace),uA=w.isVideoTexture!==!0,DI=P.__version===void 0||X===!0,d=$.dataReady;let EA=f(w,FA);xA(B.TEXTURE_CUBE_MAP,w);let Z;if(XA){uA&&DI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,EA,PA,FA.width,FA.height);for(let z=0;z<6;z++){Z=nA[z].mipmaps;for(let aA=0;aA<Z.length;aA++){const eA=Z[aA];w.format!==ag?qA!==null?uA?d&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,eA.width,eA.height,qA,eA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,PA,eA.width,eA.height,0,eA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):uA?d&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,0,0,eA.width,eA.height,qA,wA,eA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA,PA,eA.width,eA.height,0,qA,wA,eA.data)}}}else{if(Z=w.mipmaps,uA&&DI){Z.length>0&&EA++;const z=UA(nA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,EA,PA,z.width,z.height)}for(let z=0;z<6;z++)if(gA){uA?d&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,nA[z].width,nA[z].height,qA,wA,nA[z].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,nA[z].width,nA[z].height,0,qA,wA,nA[z].data);for(let aA=0;aA<Z.length;aA++){const fA=Z[aA].image[z].image;uA?d&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,fA.width,fA.height,qA,wA,fA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,PA,fA.width,fA.height,0,qA,wA,fA.data)}}else{uA?d&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,qA,wA,nA[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,PA,qA,wA,nA[z]);for(let aA=0;aA<Z.length;aA++){const eA=Z[aA];uA?d&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,0,0,qA,wA,eA.image[z]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+z,aA+1,PA,qA,wA,eA.image[z])}}}n(w)&&h(B.TEXTURE_CUBE_MAP),P.__version=$.version,w.onUpdate&&w.onUpdate(w)}M.__version=w.version}function GA(M,w,T,X,$,P){const kA=Q.convert(T.format,T.colorSpace),tA=Q.convert(T.type),SA=U(T.internalFormat,kA,tA,T.colorSpace),XA=g.get(w),gA=g.get(T);if(gA.__renderTarget=w,!XA.__hasExternalTextures){const nA=Math.max(1,w.width>>P),FA=Math.max(1,w.height>>P);$===B.TEXTURE_3D||$===B.TEXTURE_2D_ARRAY?I.texImage3D($,P,SA,nA,FA,w.depth,0,kA,tA,null):I.texImage2D($,P,SA,nA,FA,0,kA,tA,null)}I.bindFramebuffer(B.FRAMEBUFFER,M),WA(w)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,X,$,gA.__webglTexture,0,vA(w)):($===B.TEXTURE_2D||$>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,X,$,gA.__webglTexture,P),I.bindFramebuffer(B.FRAMEBUFFER,null)}function DA(M,w,T){if(B.bindRenderbuffer(B.RENDERBUFFER,M),w.depthBuffer){const X=w.depthTexture,$=X&&X.isDepthTexture?X.type:null,P=y(w.stencilBuffer,$),kA=w.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,tA=vA(w);WA(w)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,tA,P,w.width,w.height):T?B.renderbufferStorageMultisample(B.RENDERBUFFER,tA,P,w.width,w.height):B.renderbufferStorage(B.RENDERBUFFER,P,w.width,w.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,kA,B.RENDERBUFFER,M)}else{const X=w.textures;for(let $=0;$<X.length;$++){const P=X[$],kA=Q.convert(P.format,P.colorSpace),tA=Q.convert(P.type),SA=U(P.internalFormat,kA,tA,P.colorSpace),XA=vA(w);T&&WA(w)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,XA,SA,w.width,w.height):WA(w)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,XA,SA,w.width,w.height):B.renderbufferStorage(B.RENDERBUFFER,SA,w.width,w.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function RA(M,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,M),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=g.get(w.depthTexture);X.__renderTarget=w,(!X.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),AA(w.depthTexture,0);const $=X.__webglTexture,P=vA(w);if(w.depthTexture.format===fC)WA(w)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,$,0,P):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,$,0);else if(w.depthTexture.format===OC)WA(w)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,$,0,P):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function LA(M){const w=g.get(M),T=M.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),X){const $=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),w.__depthDisposeCallback=$}w.__boundDepthTexture=X}if(M.depthTexture&&!w.__autoAllocateDepthBuffer){if(T)throw new Error("target.depthTexture not supported in Cube render targets");RA(w.__webglFramebuffer,M)}else if(T){w.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(I.bindFramebuffer(B.FRAMEBUFFER,w.__webglFramebuffer[X]),w.__webglDepthbuffer[X]===void 0)w.__webglDepthbuffer[X]=B.createRenderbuffer(),DA(w.__webglDepthbuffer[X],M,!1);else{const $=M.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,P=w.__webglDepthbuffer[X];B.bindRenderbuffer(B.RENDERBUFFER,P),B.framebufferRenderbuffer(B.FRAMEBUFFER,$,B.RENDERBUFFER,P)}}else if(I.bindFramebuffer(B.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=B.createRenderbuffer(),DA(w.__webglDepthbuffer,M,!1);else{const X=M.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,$=w.__webglDepthbuffer;B.bindRenderbuffer(B.RENDERBUFFER,$),B.framebufferRenderbuffer(B.FRAMEBUFFER,X,B.RENDERBUFFER,$)}I.bindFramebuffer(B.FRAMEBUFFER,null)}function OA(M,w,T){const X=g.get(M);w!==void 0&&GA(X.__webglFramebuffer,M,M.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),T!==void 0&&LA(M)}function hI(M){const w=M.texture,T=g.get(M),X=g.get(w);M.addEventListener("dispose",F);const $=M.textures,P=M.isWebGLCubeRenderTarget===!0,kA=$.length>1;if(kA||(X.__webglTexture===void 0&&(X.__webglTexture=B.createTexture()),X.__version=w.version,E.memory.textures++),P){T.__webglFramebuffer=[];for(let tA=0;tA<6;tA++)if(w.mipmaps&&w.mipmaps.length>0){T.__webglFramebuffer[tA]=[];for(let SA=0;SA<w.mipmaps.length;SA++)T.__webglFramebuffer[tA][SA]=B.createFramebuffer()}else T.__webglFramebuffer[tA]=B.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){T.__webglFramebuffer=[];for(let tA=0;tA<w.mipmaps.length;tA++)T.__webglFramebuffer[tA]=B.createFramebuffer()}else T.__webglFramebuffer=B.createFramebuffer();if(kA)for(let tA=0,SA=$.length;tA<SA;tA++){const XA=g.get($[tA]);XA.__webglTexture===void 0&&(XA.__webglTexture=B.createTexture(),E.memory.textures++)}if(M.samples>0&&WA(M)===!1){T.__webglMultisampledFramebuffer=B.createFramebuffer(),T.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,T.__webglMultisampledFramebuffer);for(let tA=0;tA<$.length;tA++){const SA=$[tA];T.__webglColorRenderbuffer[tA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,T.__webglColorRenderbuffer[tA]);const XA=Q.convert(SA.format,SA.colorSpace),gA=Q.convert(SA.type),nA=U(SA.internalFormat,XA,gA,SA.colorSpace,M.isXRRenderTarget===!0),FA=vA(M);B.renderbufferStorageMultisample(B.RENDERBUFFER,FA,nA,M.width,M.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tA,B.RENDERBUFFER,T.__webglColorRenderbuffer[tA])}B.bindRenderbuffer(B.RENDERBUFFER,null),M.depthBuffer&&(T.__webglDepthRenderbuffer=B.createRenderbuffer(),DA(T.__webglDepthRenderbuffer,M,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if(P){I.bindTexture(B.TEXTURE_CUBE_MAP,X.__webglTexture),xA(B.TEXTURE_CUBE_MAP,w);for(let tA=0;tA<6;tA++)if(w.mipmaps&&w.mipmaps.length>0)for(let SA=0;SA<w.mipmaps.length;SA++)GA(T.__webglFramebuffer[tA][SA],M,w,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,SA);else GA(T.__webglFramebuffer[tA],M,w,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+tA,0);n(w)&&h(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(kA){for(let tA=0,SA=$.length;tA<SA;tA++){const XA=$[tA],gA=g.get(XA);I.bindTexture(B.TEXTURE_2D,gA.__webglTexture),xA(B.TEXTURE_2D,XA),GA(T.__webglFramebuffer,M,XA,B.COLOR_ATTACHMENT0+tA,B.TEXTURE_2D,0),n(XA)&&h(B.TEXTURE_2D)}I.unbindTexture()}else{let tA=B.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(tA=M.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(tA,X.__webglTexture),xA(tA,w),w.mipmaps&&w.mipmaps.length>0)for(let SA=0;SA<w.mipmaps.length;SA++)GA(T.__webglFramebuffer[SA],M,w,B.COLOR_ATTACHMENT0,tA,SA);else GA(T.__webglFramebuffer,M,w,B.COLOR_ATTACHMENT0,tA,0);n(w)&&h(tA),I.unbindTexture()}M.depthBuffer&&LA(M)}function jA(M){const w=M.textures;for(let T=0,X=w.length;T<X;T++){const $=w[T];if(n($)){const P=N(M),kA=g.get($).__webglTexture;I.bindTexture(P,kA),h(P),I.unbindTexture()}}}const cI=[],R=[];function XI(M){if(M.samples>0){if(WA(M)===!1){const w=M.textures,T=M.width,X=M.height;let $=B.COLOR_BUFFER_BIT;const P=M.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,kA=g.get(M),tA=w.length>1;if(tA)for(let SA=0;SA<w.length;SA++)I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,kA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglFramebuffer);for(let SA=0;SA<w.length;SA++){if(M.resolveDepthBuffer&&(M.depthBuffer&&($|=B.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&($|=B.STENCIL_BUFFER_BIT)),tA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,kA.__webglColorRenderbuffer[SA]);const XA=g.get(w[SA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,XA,0)}B.blitFramebuffer(0,0,T,X,0,0,T,X,$,B.NEAREST),o===!0&&(cI.length=0,R.length=0,cI.push(B.COLOR_ATTACHMENT0+SA),M.depthBuffer&&M.resolveDepthBuffer===!1&&(cI.push(P),R.push(P),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,R)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,cI))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),tA)for(let SA=0;SA<w.length;SA++){I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.RENDERBUFFER,kA.__webglColorRenderbuffer[SA]);const XA=g.get(w[SA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,kA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+SA,B.TEXTURE_2D,XA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,kA.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&o){const w=M.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[w])}}}function vA(M){return Math.min(C.maxSamples,M.samples)}function WA(M){const w=g.get(M);return M.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yA(M){const w=E.render.frame;e.get(M)!==w&&(e.set(M,w),M.update())}function tI(M,w){const T=M.colorSpace,X=M.format,$=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||T!==bC&&T!==Wg&&(AI.getTransfer(T)===QI?(X!==ag||$!==fg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",T)),w}function UA(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(D.width=M.naturalWidth||M.width,D.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(D.width=M.displayWidth,D.height=M.displayHeight):(D.width=M.width,D.height=M.height),D}this.allocateTextureUnit=b,this.resetTextureUnits=v,this.setTexture2D=AA,this.setTexture2DArray=W,this.setTexture3D=CA,this.setTextureCube=_,this.rebindTextures=OA,this.setupRenderTarget=hI,this.updateRenderTargetMipmap=jA,this.updateMultisampleRenderTarget=XI,this.setupDepthRenderbuffer=LA,this.setupFrameBufferTexture=GA,this.useMultisampledRTT=WA}function iw(B,A){function I(g,C=Wg){let Q;const E=AI.getTransfer(C);if(g===fg)return B.UNSIGNED_BYTE;if(g===ri)return B.UNSIGNED_SHORT_4_4_4_4;if(g===ci)return B.UNSIGNED_SHORT_5_5_5_1;if(g===uD)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===fD)return B.BYTE;if(g===HD)return B.SHORT;if(g===eB)return B.UNSIGNED_SHORT;if(g===wi)return B.INT;if(g===hC)return B.UNSIGNED_INT;if(g===pg)return B.FLOAT;if(g===dg)return B.HALF_FLOAT;if(g===mD)return B.ALPHA;if(g===TD)return B.RGB;if(g===ag)return B.RGBA;if(g===xD)return B.LUMINANCE;if(g===OD)return B.LUMINANCE_ALPHA;if(g===fC)return B.DEPTH_COMPONENT;if(g===OC)return B.DEPTH_STENCIL;if(g===bD)return B.RED;if(g===Gi)return B.RED_INTEGER;if(g===ZD)return B.RG;if(g===ki)return B.RG_INTEGER;if(g===li)return B.RGBA_INTEGER;if(g===AQ||g===IQ||g===gQ||g===CQ)if(E===QI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===AQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===IQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===gQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===CQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===AQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===IQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===gQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===CQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===FE||g===RE||g===pE||g===qE)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===FE)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===RE)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===pE)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===qE)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===YE||g===dE||g===LE)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===YE||g===dE)return E===QI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===LE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===fE||g===HE||g===uE||g===mE||g===TE||g===xE||g===OE||g===bE||g===ZE||g===_E||g===vE||g===WE||g===PE||g===VE)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===fE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===HE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===uE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===mE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===TE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===xE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===OE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===bE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===ZE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===_E)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===vE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===WE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===PE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===VE)return E===QI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===BQ||g===jE||g===XE)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===BQ)return E===QI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===jE)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===XE)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===_D||g===zE||g===$E||g===Ai)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===BQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===zE)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===$E)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Ai)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===xC?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}const ow={type:"move"};class aE{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new VB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new VB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new m,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new m),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new VB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new m,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new m),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,D=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(D&&A.hand){E=!0;for(const k of A.hand.values()){const n=I.getJointPose(k,g),h=this._getHandJoint(D,k);n!==null&&(h.matrix.fromArray(n.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=n.radius),h.visible=n!==null}const e=D.joints["index-finger-tip"],a=D.joints["thumb-tip"],s=e.position.distanceTo(a.position),S=.02,r=.005;D.inputState.pinching&&s>S+r?(D.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!D.inputState.pinching&&s<=S-r&&(D.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(ow)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),D!==null&&(D.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new VB;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}


		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class KB{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const bw=new it(-1,1,1,-1,0,1);class Zw extends Tg{constructor(){super(),this.setAttribute("position",new Cg([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Cg([0,2,0,0,2,0],2))}}const _w=new Zw;class zt{constructor(A){this._mesh=new jI(_w,A)}dispose(){this._mesh.geometry.dispose()}render(A){A.render(this._mesh,bw)}get material(){return this._mesh.material}set material(A){this._mesh.material=A}}class vw extends KB{constructor(A,I){super(),this.textureID=I!==void 0?I:"tDiffuse",A instanceof OI?(this.uniforms=A.uniforms,this.material=A):A&&(this.uniforms=DQ.clone(A.uniforms),this.material=new OI({name:A.name!==void 0?A.name:"unspecified",defines:Object.assign({},A.defines),uniforms:this.uniforms,vertexShader:A.vertexShader,fragmentShader:A.fragmentShader})),this.fsQuad=new zt(this.material)}render(A,I,g){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=g.texture),this.fsQuad.material=this.material,this.renderToScreen?(A.setRenderTarget(null),this.fsQuad.render(A)):(A.setRenderTarget(I),this.clear&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),this.fsQuad.render(A))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qD extends KB{constructor(A,I){super(),this.scene=A,this.camera=I,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(A,I,g){const C=A.getContext(),Q=A.state;Q.buffers.color.setMask(!1),Q.buffers.depth.setMask(!1),Q.buffers.color.setLocked(!0),Q.buffers.depth.setLocked(!0);let E,i;this.inverse?(E=0,i=1):(E=1,i=0),Q.buffers.stencil.setTest(!0),Q.buffers.stencil.setOp(C.REPLACE,C.REPLACE,C.REPLACE),Q.buffers.stencil.setFunc(C.ALWAYS,E,4294967295),Q.buffers.stencil.setClear(i),Q.buffers.stencil.setLocked(!0),A.setRenderTarget(g),this.clear&&A.clear(),A.render(this.scene,this.camera),A.setRenderTarget(I),this.clear&&A.clear(),A.render(this.scene,this.camera),Q.buffers.color.setLocked(!1),Q.buffers.depth.setLocked(!1),Q.buffers.color.setMask(!0),Q.buffers.depth.setMask(!0),Q.buffers.stencil.setLocked(!1),Q.buffers.stencil.setFunc(C.EQUAL,1,4294967295),Q.buffers.stencil.setOp(C.KEEP,C.KEEP,C.KEEP),Q.buffers.stencil.setLocked(!0)}}class Ww extends KB{constructor(){super(),this.needsSwap=!1}render(A){A.state.buffers.stencil.setLocked(!1),A.state.buffers.stencil.setTest(!1)}}class Pw{constructor(A,I){if(this.renderer=A,this._pixelRatio=A.getPixelRatio(),I===void 0){const g=A.getSize(new pA);this._width=g.width,this._height=g.height,I=new hg(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dg}),I.texture.name="EffectComposer.rt1"}else this._width=I.width,this._height=I.height;this.renderTarget1=I,this.renderTarget2=I.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vw(Xt),this.copyPass.material.blending=Yg,this.clock=new qa}swapBuffers(){const A=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=A}addPass(A){this.passes.push(A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(A,I){this.passes.splice(I,0,A),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(A){const I=this.passes.indexOf(A);I!==-1&&this.passes.splice(I,1)}isLastEnabledPass(A){for(let I=A+1;I<this.passes.length;I++)if(this.passes[I].enabled)return!1;return!0}render(A){A===void 0&&(A=this.clock.getDelta());const I=this.renderer.getRenderTarget();let g=!1;for(let C=0,Q=this.passes.length;C<Q;C++){const E=this.passes[C];if(E.enabled!==!1){if(E.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(C),E.render(this.renderer,this.writeBuffer,this.readBuffer,A,g),E.needsSwap){if(g){const i=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(i.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,A),o.setFunc(i.EQUAL,1,4294967295)}this.swapBuffers()}qD!==void 0&&(E instanceof qD?g=!0:E instanceof Ww&&(g=!1))}}this.renderer.setRenderTarget(I)}reset(A){if(A===void 0){const I=this.renderer.getSize(new pA);this._pixelRatio=this.renderer.getPixelRatio(),this._width=I.width,this._height=I.height,A=this.renderTarget1.clone(),A.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=A,this.renderTarget2=A.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(A,I){this._width=A,this._height=I;const g=this._width*this._pixelRatio,C=this._height*this._pixelRatio;this.renderTarget1.setSize(g,C),this.renderTarget2.setSize(g,C);for(let Q=0;Q<this.passes.length;Q++)this.passes[Q].setSize(g,C)}setPixelRatio(A){this._pixelRatio=A,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vw extends KB{constructor(A,I,g=null,C=null,Q=null){super(),this.scene=A,this.camera=I,this.overrideMaterial=g,this.clearColor=C,this.clearAlpha=Q,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ZA}render(A,I,g){const C=A.autoClear;A.autoClear=!1;let Q,E;this.overrideMaterial!==null&&(E=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(A.getClearColor(this._oldClearColor),A.setClearColor(this.clearColor,A.getClearAlpha())),this.clearAlpha!==null&&(Q=A.getClearAlpha(),A.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&A.clearDepth(),A.setRenderTarget(this.renderToScreen?null:g),this.clear===!0&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),A.render(this.scene,this.camera),this.clearColor!==null&&A.setClearColor(this._oldClearColor),this.clearAlpha!==null&&A.setClearAlpha(Q),this.overrideMaterial!==null&&(this.scene.overrideMaterial=E),A.autoClear=C}}const jw={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ZA(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class WC extends KB{constructor(A,I,g,C){super(),this.strength=I!==void 0?I:1,this.radius=g,this.threshold=C,this.resolution=A!==void 0?new pA(A.x,A.y):new pA(256,256),this.clearColor=new ZA(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let Q=Math.round(this.resolution.x/2),E=Math.round(this.resolution.y/2);this.renderTargetBright=new hg(Q,E,{type:dg}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let a=0;a<this.nMips;a++){const s=new hg(Q,E,{type:dg});s.texture.name="UnrealBloomPass.h"+a,s.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(s);const S=new hg(Q,E,{type:dg});S.texture.name="UnrealBloomPass.v"+a,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),Q=Math.round(Q/2),E=Math.round(E/2)}const i=jw;this.highPassUniforms=DQ.clone(i.uniforms),this.highPassUniforms.luminosityThreshold.value=C,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new OI({uniforms:this.highPassUniforms,vertexShader:i.vertexShader,fragmentShader:i.fragmentShader}),this.separableBlurMaterials=[];const o=[3,5,7,9,11];Q=Math.round(this.resolution.x/2),E=Math.round(this.resolution.y/2);for(let a=0;a<this.nMips;a++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(o[a])),this.separableBlurMaterials[a].uniforms.invSize.value=new pA(1/Q,1/E),Q=Math.round(Q/2),E=Math.round(E/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=I,this.compositeMaterial.uniforms.bloomRadius.value=.1;const D=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=D,this.bloomTintColors=[new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1),new m(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const e=Xt;this.copyUniforms=DQ.clone(e.uniforms),this.blendMaterial=new OI({uniforms:this.copyUniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,blending:SE,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ZA,this.oldClearAlpha=1,this.basic=new rQ,this.fsQuad=new zt(null)}dispose(){for(let A=0;A<this.renderTargetsHorizontal.length;A++)this.renderTargetsHorizontal[A].dispose();for(let A=0;A<this.renderTargetsVertical.length;A++)this.renderTargetsVertical[A].dispose();this.renderTargetBright.dispose();for(let A=0;A<this.separableBlurMaterials.length;A++)this.separableBlurMaterials[A].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(A,I){let g=Math.round(A/2),C=Math.round(I/2);this.renderTargetBright.setSize(g,C);for(let Q=0;Q<this.nMips;Q++)this.renderTargetsHorizontal[Q].setSize(g,C),this.renderTargetsVertical[Q].setSize(g,C),this.separableBlurMaterials[Q].uniforms.invSize.value=new pA(1/g,1/C),g=Math.round(g/2),C=Math.round(C/2)}render(A,I,g,C,Q){A.getClearColor(this._oldClearColor),this.oldClearAlpha=A.getClearAlpha();const E=A.autoClear;A.autoClear=!1,A.setClearColor(this.clearColor,0),Q&&A.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=g.texture,A.setRenderTarget(null),A.clear(),this.fsQuad.render(A)),this.highPassUniforms.tDiffuse.value=g.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,A.setRenderTarget(this.renderTargetBright),A.clear(),this.fsQuad.render(A);let i=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=i.texture,this.separableBlurMaterials[o].uniforms.direction.value=WC.BlurDirectionX,A.setRenderTarget(this.renderTargetsHorizontal[o]),A.clear(),this.fsQuad.render(A),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=WC.BlurDirectionY,A.setRenderTarget(this.renderTargetsVertical[o]),A.clear(),this.fsQuad.render(A),i=this.renderTargetsVertical[o];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,A.setRenderTarget(this.renderTargetsHorizontal[0]),A.clear(),this.fsQuad.render(A),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,Q&&A.state.buffers.stencil.setTest(!0),this.renderToScreen?(A.setRenderTarget(null),this.fsQuad.render(A)):(A.setRenderTarget(g),this.fsQuad.render(A)),A.setClearColor(this._oldClearColor,this.oldClearAlpha),A.autoClear=E}getSeperableBlurMaterial(A){const I=[];for(let g=0;g<A;g++)I.push(.39894*Math.exp(-.5*g*g/(A*A))/A);return new OI({defines:{KERNEL_RADIUS:A},uniforms:{colorTexture:{value:null},invSize:{value:new pA(.5,.5)},direction:{value:new pA(.5,.5)},gaussianCoefficients:{value:I}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(A){return new OI({defines:{NUM_MIPS:A},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}WC.BlurDirectionX=new pA(1,0);WC.BlurDirectionY=new pA(0,1);const Vi=window.innerWidth,ji=window.innerHeight,JB=new la,rB=new VI(75,Vi/ji,.1,1e3);rB.position.z=5;const qQ=new nw({antialias:!0});qQ.setSize(Vi,ji);document.body.appendChild(qQ.domElement);let Si=new pA;await pQ.init();const Xw={x:0,y:0,z:0},Xi=new pQ.World(Xw),zw=new Vw(JB,rB),$w=new WC(new pA(Vi,ji),2,0,.005),zi=new Pw(qQ);zi.addPass(zw);zi.addPass($w);const Ar=100,$t=[];for(let B=0;B<Ar;B++){const A=rw(pQ,Xi);$t.push(A),JB.add(A.mesh)}const Ae=cw(pQ,Xi);JB.add(Ae.mesh);const Ie=new Ka(48127,11141375);Ie.intensity=.2;JB.add(Ie);function ge(){requestAnimationFrame(ge),Xi.step(),Ae.update(Si),$t.forEach(B=>B.update()),zi.render(JB,rB)}ge();function Ir(){rB.aspect=window.innerWidth/window.innerHeight,rB.updateProjectionMatrix(),qQ.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",Ir,!1);function gr(B){Si.x=B.clientX/window.innerWidth*2-1,Si.y=-(B.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",gr,!1);