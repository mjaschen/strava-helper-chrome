var strava_helper = (function(strava_helper) {

    strava_helper.util = {

        isCurrentPage: function(fragments) {
            var fragment = document.location.pathname.split('/')[1];

            if (fragments.indexOf(fragment) > -1) {
                return true;
            }

            return false;
        },

        init: function() {
        }

    };

    strava_helper.util.init();

    return strava_helper;

}(strava_helper));
