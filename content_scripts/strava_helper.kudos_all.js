var strava_helper = (function(strava_helper) {

    strava_helper.kudos_all = {
        getKudosAllImage: function() {
            var imageUrl = chrome.extension.getURL("/assets/img/kudos_all.png");
            return "<img src=\"" + imageUrl + "\" width=\"20\" height=\"20\" title=\"Give Kudos to all visible activities!\">";
        },

        giveKudosToAll: function() {
            var count = $("button.js-add-kudo").length;
            $("button.js-add-kudo").trigger("click");
            strava_helper.kudos_all.showKudosCount(count, true);

            var timer = window.setTimeout(function() {
                strava_helper.kudos_all.resetKudosButton();
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
                .html(strava_helper.kudos_all.getKudosAllImage())
                .removeClass("strava-helper-kudos-all-button-result animated bounce");
        },

        init: function() {
            $(
                "<div/>",
                {
                    id: "strava-helper-kudos-all-button",
                    title: "Give Kudos to all visible items.",
                    html: strava_helper.kudos_all.getKudosAllImage()
                }
            ).prependTo("body");
            $("#strava-helper-kudos-all-button").on("click", strava_helper.kudos_all.giveKudosToAll);
        }
    };

    strava_helper.kudos_all.init();

    return strava_helper;

}(strava_helper));
