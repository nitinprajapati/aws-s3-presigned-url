var AWS = require('aws-sdk');
const EXPRESS = require('express');
const APP = EXPRESS();
APP.listen(process.env.PORT || 10);
var bodyParser = require('body-parser');
APP.use(bodyParser.json()); // support json encoded bodies
APP.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

APP.use("/public", EXPRESS.static('public'));

APP.post('/GetSignedURL', function (req, res) {
    var s3 = new AWS.S3({
        signatureVersion: 'v4',
        region : req.body.region,
        accessKeyId: req.body.accessKey,
        secretAccessKey: req.body.secretKey
    });
    var params = {Bucket: req.body.bucket, Key: req.body.key, Expires: req.body.expiry};
    var pre_signed_file = s3.getSignedUrl('getObject', params);
    console.log(s3);
    res.send(pre_signed_file);
});

APP.get('/', function (req, res) {
    res.sendFile("public/index.html", {root: __dirname});
});



