/**
 * Created by Administrator on 2017/11/21.
 */

NProgress.configure({
  showSpinner: false
	});

$(document).ajaxStart(function () {
  NProgress.start();
});
$(document).ajaxStop(function () {
  setTimeout(function () {
    NProgress.done();
  }, 500);
});