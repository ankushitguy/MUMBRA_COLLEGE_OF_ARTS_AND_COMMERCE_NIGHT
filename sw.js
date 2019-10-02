self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('video-store').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/js/main.js',
                '/css/style.css',
                '/img/mumbra-night-college-logo.png',
                '/notification.html',
                '/courses.html',
                '/contact-us.html',
                '/icon-white.png',
                '/icons-192.png',
                '/icons-512.png',
                '/title.png',
                '/title-wide.png',
                '/favicon.ico',



/*                '/sendmail/class.phpmailer.php',
                '/sendmail/class.phpmaileroauthgoogle.php',
                '/sendmail/class.pop3.php',
                '/sendmail/class.smtp.php',
                '/sendmail/get_oauth_token.php',
                '/sendmail/PHPMailerAutoload.php',
                '/sendmail/send_contact_mail.php',*/

            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});