jQuery(document).ready(function(e){"use strict";e("form.contactForm").submit(function(){var t=e(this).find(".form-group"),a=!1,s=/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;if(t.children("input").each(function(){var t=e(this),r=t.attr("data-rule");if(void 0!==r){var n=!1,i=r.indexOf(":",0);if(i>=0){var l=r.substr(i+1,r.length);r=r.substr(0,i)}else r=r.substr(i+1,r.length);switch(r){case"required":""===t.val()&&(a=n=!0);break;case"maxlen":t.val().length<parseInt(l)&&(a=n=!0);break;case"email":s.test(t.val())||(a=n=!0);break;case"checked":t.attr("checked")||(a=n=!0);break;case"regexp":l=new RegExp(l),l.test(t.val())||(a=n=!0)}t.next(".validation").html(n?void 0!==t.attr("data-msg")?t.attr("data-msg"):"wrong Input":"").show("blind")}}),t.children("textarea").each(function(){var t=e(this),s=t.attr("data-rule");if(void 0!==s){var r=!1,n=s.indexOf(":",0);if(n>=0){var i=s.substr(n+1,s.length);s=s.substr(0,n)}else s=s.substr(n+1,s.length);switch(s){case"required":""===t.val()&&(a=r=!0);break;case"maxlen":t.val().length<parseInt(i)&&(a=r=!0)}t.next(".validation").html(r?void 0!=t.attr("data-msg")?t.attr("data-msg"):"wrong Input":"").show("blind")}}),a)return!1;var r=e(this).serialize();return e.ajax({type:"POST",url:"contact/contact.php",data:r,success:function(t){e("#sendmessage").addClass("show"),e("#errormessage").ajaxComplete(function(a,s,r){"OK"==t?e("#sendmessage").addClass("show"):(e("#sendmessage").removeClass("show"),result=t),e(this).html(result)})}}),!1})});