var strava_helper = (function(strava_helper) {

    strava_helper.util = {

        isCurrentPage: function(fragments) {
            var fragment = document.location.pathname.split('/')[1];

            return fragments.indexOf(fragment) > -1;
        },

        init: function() {
        }

    };

    strava_helper.util.init();

    return strava_helper;

}(strava_helper));
