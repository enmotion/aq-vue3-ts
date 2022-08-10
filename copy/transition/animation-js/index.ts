// const lib = require.context("./libs",true,/\.js$/);
import * as R from "ramda";
//@ts-ignore
const lib = import.meta.globEager("./libs/*.lib.js")
const anis:{[key:string]:{[key:string]:any}} = {};
const libs = R.keys(lib).filter((x) => {
  let xs = x as string;
  return xs.split("/").length <= 3
});
libs.forEach((name) => {
  let content = lib[name];
  let typename = name.split('/').pop()?.replace(/\.\w+$/, '').split('.').shift();
  if(typename!=undefined){
    anis[typename] = content.default || content;
  }
})
export default anis;