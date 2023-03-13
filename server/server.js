const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');


const app = express();

app.post('login', (req, res) => {
    const code = req.boidy.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '21efd09454c5498a81e7e7b20bebb1b0',
        clientSecret: '6251019b44c04f0e90121f86dea45e0f'
    })
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    }).catch(() => {
        res.sendStatus(400)
    })
})