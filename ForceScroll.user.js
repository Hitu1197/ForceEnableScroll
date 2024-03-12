// ==UserScript==
// @name         Enable Scrolling
// @namespace    https://github.com/hitu1197
// @version      1.0
// @description  Automatically enable scrolling on websites that disable it.
// @author       Hitu1197
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    var automaticallyEnable = true;
    var automaticEnableDelay = 2000;

    // Function to enable scrolling
    function enableScrolling() {
        var scrollElements = [document.body, document.documentElement];
        scrollElements.forEach(function(element) {
            element.style.overflow = "visible";
        });
    }

    // Run enableScrolling after the page has fully loaded
    function onPageLoad() {
        if (automaticallyEnable) {
            setTimeout(enableScrolling, automaticEnableDelay);
        }
    }

    // MutationObserver to observe DOM changes and re-enable scrolling if necessary
    function observeDOMChanges() {
        var observer = new MutationObserver(function(mutations) {
            enableScrolling();
        });
        var config = { childList: true, subtree: true };
        observer.observe(document.body, config);
    }

    // Adding manual control
    GM_registerMenuCommand("Enable Scrolling", enableScrolling, 'r');

    // Check if the document is loaded
    if (document.readyState === "complete" || document.readyState === "interactive") {
        onPageLoad();
        observeDOMChanges();
    } else {
        document.addEventListener("DOMContentLoaded", onPageLoad);
        document.addEventListener("DOMContentLoaded", observeDOMChanges);
    }
})();
