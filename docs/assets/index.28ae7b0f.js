import{W as e,C as t,a as n,b as a,O as s,E as r,u as i,G as p,L as l,R as o,B as m,S as d,c as u}from"./vendor.5609a7d7.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const i=new URL(e,a);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const p=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(p),onerror(){r(new Error(`Failed to import: ${e}`)),s(l)},onload(){n(self[t].moduleMap[i]),s(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var y=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"mintRandomMage",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];const c=new e(window.ethereum).getSigner(),f=new t("0xC9AB625E65bFf6d4923BBFAf0E6317107ba1F538",y,c),b=()=>{const e=window.location.pathname.replace("/nftshop/","");f.mintRandomMage(e)},T=()=>{const e=window.location.pathname.replace("/nftshop/",""),t=i(p,`https://storageapi.fleek.co/lucasespinosa28-team-bucket/mushroomNft/mushroom${e}.gltf`);return n.createElement(n.Fragment,null,n.createElement("primitive",{position:[0,-1,3],object:t.scene,scale:1}))};function E(){return n.createElement("div",{className:"App"},n.createElement("div",{className:"btn-group m-2"},n.createElement("button",{onClick:b,className:"btn btn-primary"},"Mint #",window.location.pathname.replace("/nftshop/","")),n.createElement("h2",null,"See in ",n.createElement("a",{href:"https://testnets.opensea.io/assets?search[query]=0xC9AB625E65bFf6d4923BBFAf0E6317107ba1F538",target:"_blank"},"OpenSea"))),n.createElement(a,null,n.createElement(n.Suspense,{fallback:null},n.createElement("ambientLight",{intensity:.1}),n.createElement(T,null),n.createElement(s,null),n.createElement(r,{preset:"forest",background:!0}))))}const h=Array.from({length:256},((e,t)=>t)),v=h.map((e=>{return n.createElement(l,{className:"col-md-auto",to:`/nftshop/${e}`},(t=e,n.createElement("div",{className:"card my-3"},n.createElement("div",{className:"card-body"},n.createElement("h5",{className:"card-title"},"#",t)),n.createElement("img",{className:"card-img-top",src:`https://storageapi.fleek.co/lucasespinosa28-team-bucket/mushroomNft/images/mushroom${t}.png`}))));var t})),g=h.map((e=>n.createElement(o,{key:e,path:`/nftshop/${e}`},n.createElement("div",null,n.createElement(E,null)))));function w(){return n.createElement(m,null,n.createElement("div",{className:"App"}),n.createElement(d,null,g,n.createElement(o,{path:"/"},n.createElement(M,null))))}function M(){return n.createElement("div",{className:"row justify-content-md-center"},v)}const x=new e(window.ethereum);x.getSigner(),console.log(x),window.ethereum.enable(),u.render(n.createElement(n.StrictMode,null,n.createElement(w,null)),document.getElementById("root"));
