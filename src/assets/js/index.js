import { HttpRequest } from "./axios";
let Make = {
  // 关注医生
  followDoctor: function(parames) {
    return HttpRequest.getRequest({
      method: "GET",
      url: "api/KZCDBasice/GetAllMagazinePhoto",
      data: parames
    });
  },
  // 获取评价标签
  getElvaluateTag: function(parames) {
    return HttpRequest.getRequest({
      method: "GET",
      url: "API地址",
      data: parames
    });
  }
};
export { Make };
