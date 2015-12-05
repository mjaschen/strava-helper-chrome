(function(window, chrome, $) {

    var strava_helper = {

        getKudosAllImage: function() {
            var imageUrl = chrome.extension.getURL("kudos_all.png");
            return "<img src=\"" + imageUrl + "\" width=\"20\" height=\"20\" title=\"Give Kudos to all visible activities!\">";
        },

        initKudosAllButton: function() {
            $(
                "<div/>",
                {
                    id: "strava-helper-kudos-all-button",
                    title: "Give Kudos to all visible items.",
                    html: strava_helper.getKudosAllImage()
                }
            ).prependTo("body");
            $("#strava-helper-kudos-all-button").on("click", strava_helper.giveKudosToAll);
        },

        giveKudosToAll: function() {
            var count = $("button.js-add-kudo").length;
            $("button.js-add-kudo").trigger("click");
            strava_helper.showKudosCount(count, true);

            var timer = window.setTimeout(function() {
                strava_helper.resetKudosButton();
            }, 3000);
        },

        showKudosCount: function(count) {
            if (count === 0) {
                return;
            }
            $("#strava-helper-kudos-all-button")
                .text(count.toString() + "x")
                .addClass("strava-helper-kudos-all-button-result animated bounce");
        },

        resetKudosButton: function() {
            $("#strava-helper-kudos-all-button")
                .html(strava_helper.getKudosAllImage())
                .removeClass("strava-helper-kudos-all-button-result animated bounce");
        },

        init: function() {
            strava_helper.initKudosAllButton();
        }
    };

    strava_helper.init();

    return strava_helper;

}(window, chrome, window.jQuery));
