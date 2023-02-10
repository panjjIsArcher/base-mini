import { isEmptyObj } from "./validate"

export const navigatoteTo = async (path = "", param = {}) => {
  let query = "";
  if (!isEmptyObj(param)) {
    query = "?" + transformObjToStr(param, "/")
  }
  const url = `${path}${query}`
  return await wx.navigateTo({
    url
  })
}

export const transformObjToStr = (obj = {}, linkChar = "") => {
  let str = ""
  for (let key in obj) {
    const value = obj[key];
    str += `${key}=${value}${linkChar}`;
  }
  return str
}