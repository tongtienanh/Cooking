!function (c) {
    "use strict";
    require(["GrowlNotification"], function (a) {
        c(document).ready(function () {
            c("#show-notification-default-alert").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1});
                var e = {
                    title: "Hello!",
                    description: "I am a default notification. I am a default notification. I am a default notification. I am a default notification.",
                    position: o,
                    closeTimeout: i,
                    closeWith: ["click"],
                    animation: t
                };
                a.GrowlNotification.notify(e)
            }), c("#show-notification-default-success").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Well Done!",
                    description: "You just submit your resume successfully.",
                    type: "success",
                    position: o,
                    closeTimeout: i,
                    closeWith: ["button"],
                    animation: t
                }).show()
            }), c("#show-notification-default-error").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Warning!",
                    description: "The data presentation here can be change.",
                    type: "error",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-default-warning").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Reminder!",
                    description: "You have a meeting at 10:30 ????",
                    type: "warning",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-default-info").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Sorry!",
                    description: "Could not complete your transaction.",
                    image: "img/notifications/05.png",
                    type: "info",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-icon-alert").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Hello!",
                    description: "I am a default notification.",
                    image: "img/notifications/01.png",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-icon-success").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Well Done!",
                    description: "You just submit your resume successfully.",
                    image: "img/notifications/03.png",
                    type: "success",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-icon-error").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Warning!",
                    description: "The data presentation here can be change.",
                    image: "img/notifications/04.png",
                    type: "error",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-icon-warning").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Reminder!",
                    description: "You have a meeting at 10:30 ????",
                    image: "img/notifications/02.png",
                    type: "warning",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            }), c("#show-notification-icon-info").on("click", function () {
                var o = c("#notification-position").val(), i = c("#close-timeout").val(), n = c("#animation").val(),
                    t = {open: n + "-in", close: n + "-out"};
                "none" === n && (t = {open: !1, close: !1}), new a.GrowlNotification({
                    title: "Sorry!",
                    description: "Could not complete your transaction.",
                    image: "img/notifications/05.png",
                    type: "info",
                    position: o,
                    closeTimeout: i,
                    animation: t
                }).show()
            })
        })
    })
}(jQuery);