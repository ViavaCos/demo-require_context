/**
 * 如何将多个模块在同一个入口内导出？
 * 
 * - 使用webpack的require.context API
 */

/**
 * path：要查找的文件路径
 * isFindChild: 是否查找子目录
 * Reg: 匹配文件的正则
 * require.context(path, isFindChild, Reg)
 */
const allModules = require.context('./modules', true, /\.js$/)

console.log(allModules)


const modulesObj = {} // 模块合集
let flatObj = {} // 扁平对象

allModules.keys().forEach(fileName => {
  modulesObj[fileName] = allModules.resolve(fileName)
})

for (const key in modulesData) {
  flatObj = { ...flatObj, ...modulesData[key].default }
}

/**
 *  Object
 *  {
 *    './a.js': Module,
 *    './b.js': Module,
 *    './c.js': Module,
 *   }
 */
console.log(10010, modulesObj)

/**
 * Object
 * { doSomethingA:fn, writeSomethingA:fn, doSomethingB:fn, ... }
 */
console.log(10011, flatObj)
