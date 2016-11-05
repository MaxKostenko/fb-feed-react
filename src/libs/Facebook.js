/* global FB */
const fbAPI = {
    config: {
        appId: '1245947508789324',
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: false, // parse social plugins on this page
        version: 'v2.3' // use graph api version 2.5
    },
    init: function(callback) {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        window.fbAsyncInit = () => {
            FB.init(this.config);
            FB.getLoginStatus((response) => {
                callback(response);
            });
        };
    },
    login: (callback) => {
        FB.login(callback, {
            scope: [
                'user_birthday',
                'user_posts',
                'email',
                //'user_hometown',
                'publish_actions',
                // 'user_likes',
                //'user_status',
                'user_about_me',
                // 'user_location',
                // 'user_tagged_places',
                'user_photos',
                'user_videos',
                //'user_education_history',
                // 'user_website',
                'user_friends',
                // 'user_relationship_details',
                //'user_work_history',
                // 'user_games_activity',
                //'user_relationships' 
            ].join(',')
        });
    },
    logout: (callback) => FB.logout(callback)

};

export default fbAPI;