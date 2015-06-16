// ==UserScript==
// @include http://*.adressa.no/*
// @include http://*.t-a.no/*
// @include http://*.vg.no/*
// @include http://*.dagbladet.no/*
// @include http://*.dn.no/*
// ==/UserScript==

console.log('running');

// Just fuck these guys.
document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('iframe'), function (el) {
        el.parentNode.removeChild(el);
    });
});

var blandColour = function() {
    return "rgba(" + ((60 + Math.random() * 80)|0) +
        "," + ((60 + Math.random() * 80)|0) +
        "," + ((60 + Math.random() * 80)|0) +
        ",.3)";
};

// Polaris
if (location.hostname.match(/((adressa)|(t-a))\.no/)) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.payed > *'), function (el) {
            el.style.visibility = "hidden";
            el.parentNode.style.background = blandColour();
        });
    });
}

if (location.hostname.match("vg.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        // Plus and VGtv
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="http://pluss.vg"], .df-img-skin-play-button, .video-unit, .vgpluss-header'), function (el) {
            console.log(el);
            el.parentNode.style.visibility = "hidden";
            el.parentNode.parentNode.style.background = blandColour();
        });
    });
}

if (location.hostname.match("dagbladet.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        // Plus
        Array.prototype.forEach.call(document.querySelectorAll('.plussArticle, .plussbox_article'), function (el) {
            el.style.visibility = "hidden";
            el.parentNode.style.background = blandColour();
        });
        // DBtv
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="http://dbtv.no"]'), function (el) {
            el.parentNode.style.visibility = "hidden";
            el.parentNode.parentNode.style.background = blandColour();
        });
        //Se.no
        Array.prototype.forEach.call(document.querySelectorAll('a[href^="http://se.no"]'), function (el) {
            el.style.visibility = "hidden";
            el.parentNode.style.background = blandColour();
        });
    });
}

if (location.hostname.match("dn.no")) {
    document.addEventListener('DOMContentLoaded', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.df-skin-paid > div'), function (el) {
            console.log(el);
            el.style.visibility = "hidden";
            el.parentNode.style.background = blandColour();
        });
    });
}

