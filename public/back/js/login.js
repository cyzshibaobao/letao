/**
 * Created by Administrator on 2017/11/21.
 */


$(function () {
  $("form").bootstrapValidator({
    feedbackIcons: {
      valid: 'glyphicon glyphicon-ok',
      invalid:'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      username: {
        validators: {
          notEmpty: {
            message: "用户名不得为空"
          },
          callback:{
            message:"用户名不存在"
          }
        }
      },
      password: {
        validators: {
          notEmpty: {
            message: "密码不得为空"
          },
          stringLength: {
            min: 6,
            max: 12,
            message:"用户密码长度为6至12位"
          },
          callback:{
            message:"密码不正确"
          }
        }
      }
     
  
    }
  })
  $("form").on("success.form.bv",function (e) {
      e.preventDefault();
      
    // ajax
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$("form").serialize(),
      success:function (data) {
          console.log(data);
        if(data.success){
           location.href="index.html";
        }else if(data.error==1000){
          $("form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
        }else if(data.error==1001){
          $("form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
        }
      }
    })
  })
  
  
  $("[type='reset']").on("click",function () {
    $("form").data("bootstrapValidator").resetForm();
  })
})