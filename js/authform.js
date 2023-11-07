$(document).ready(function () {
    $('#user_pw').focus(function () {
        $('.pw_rule').removeClass('hidden')
    })
})
function formValidation() {
    let name_f = document.getElementById('name_first').value;
    let name_l = document.getElementById('name_last').value;
    let email = document.getElementById('user_email').value;
    let pw = document.getElementById('user_pw').value;
    let confirm_pw = document.getElementById('confirm_pw').value;
    let re_fname = new RegExp(name_f, 'i')
    let re_lname = new RegExp(name_l, 'i')
    let re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    $('#name_err').addClass('hidden')
    $('email_err').addClass('hidden')
    $('.pw_rule').css('color', 'black')
    $('#pw_err').addClass('hidden')
    $('.spec_rule').css('color', 'black')
    if (name_f === '') {
        document.getElementById('name_first').focus()
        $('#name_err').removeClass('hidden')
        $('#name_err').text('Please enter your first name.')
        return false
    } else if (!/[A-Za-z ]{1,32}/.test(name_f)) {
        document.getElementById('name_first').focus()
        $('#name_err').removeClass('hidden')
        $('#name_err').text('Please enter a valid name.')
        return false
    }
    if (name_l === '') {
        document.getElementById('name_last').focus()
        $('#name_err').removeClass('hidden')
        $('#name_err').text('Please enter your last name.')
        return false
    } else if (!/[A-Za-z ]{1,32}/.test(name_l)) {
        document.getElementById('name_last').focus()
        $('#name_err').removeClass('hidden')
        $('#name_err').text('Please enter a valid name.')
        return false
    }
    if (email === '') {
        document.getElementById('user_email').focus()
        $('#email_err').removeClass('hidden')
        $('#email_err').text('Please enter your email adderss.')
        return false
    } else if (!re_email.test(email)) {
        document.getElementById('user_email').focus()
        $('#email_err').removeClass('hidden')
        $('#email_err').text('Please enter a valid email adderss.')
        return false
    }
    if (pw.length < 8) {
        document.getElementById('user_pw').focus()
        $('#pw_rule1').css('color', 'red')
        return false
    } else if (!/[0-9]/.test(pw)) {
        document.getElementById('user_pw').focus()
        $('#pw_rule2').css('color', 'red')
        $('#num_pw').css('color', 'red')
        return false
    } else if (!/[a-z]/.test(pw)) {
        document.getElementById('user_pw').focus()
        $('#pw_rule2').css('color', 'red')
        $('#lower_pw').css('color', 'red')
        return false
    } else if (!/[A-Z]/.test(pw)) {
        document.getElementById('user_pw').focus()
        $('#pw_rule2').css('color', 'red')
        $('#upper_pw').css('color', 'red')
        return false
    } else if (re_fname.test(pw) || re_lname.test(pw)) {
        document.getElementById('user_pw').focus()
        $('#pw_rule3').css('color', 'red')
        return false
    }
    if (pw !== confirm_pw) {
        document.getElementById('user_pw').focus()
        document.getElementById('confirm_pw').focus()
        $('#pw_err').removeClass('hidden')
        return false
    }
};

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-151338453-1']);
_gaq.push(['_trackPageview']);
(function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
