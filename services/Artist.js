const request = require('request');

class Artist {

    constructor(baseUrl, apiKey) {
        this.baseRequest = request.defaults({
            baseUrl: baseUrl,
            qs: {
              apikey: apiKey,
              page_size: 3
            }
        });
    }

    search(artistName) {
        const artist = this;

        return new Promise(function (resolve, reject) {

            let options = {
                url: '/artist.search',
                qs: {
                    q_artist: artistName
                }
            };

            let callback = function (error, response, body) {

                const httpCode = JSON.parse(body).message.header.status_code;
                if (httpCode >= 400) {
                    reject(body);
                    return;
                }

                resolve(body);
            }

            artist.baseRequest(options, callback);
        });

    }

}

module.exports = Artist;
