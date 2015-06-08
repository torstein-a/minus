// ==UserScript==
// @include http://*.adressa.no/*
// @include http://*.vg.no/*
// @include http://*.dagbladet.no/*
// @include http://*.dn.no/*
// ==/UserScript==

// Just fuck these guys.
document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('iframe'), function (el) {
        el.parentNode.removeChild(el);
    });
});

if (location.hostname.match("adressa.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.payed'), function (el) {
            el.style.visibility = "hidden";
            el.parentNode.style.background = "rgba(99,66,66,.3)";
        });
    });
}

if (location.hostname.match("vg.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="http://pluss.vg"]'), function (el) {
            el.parentNode.style.visibility = "hidden";
            el.parentNode.parentNode.style.background = "rgba(99,66,66,.3)";
        });
    });
}

if (location.hostname.match("dn.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.df-skin-paid > div'), function (el) {
            el.style.visibility = "hidden";
            el.parentNode.style.background = "rgba(99,66,66,.3)";
        });
    });
}