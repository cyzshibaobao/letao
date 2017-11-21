/**
 * Created by Administrator on 2017/11/21.
 */


$(document).ajaxStart(function () {
  NProgress.start();
});
$(document).ajaxStop(function () {
  NProgress.done();
});