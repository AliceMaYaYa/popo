/**
 * Created by chale on 2016/5/1.
 */
(function ($) {
    $(function () {
       $(".logo-btn").click(function () {
           var _username=$(".username").val().trim();
           if(_username.length<1){
               $(".logo-tips").html("请输入用户名！");
               return;
           }
       })
    })
})(jQuery);