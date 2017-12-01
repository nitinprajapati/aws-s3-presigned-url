# aws-s3-presigned-url

Get Amazon web services(AWS) S3 bucket presigned URL. By providing the Access Key, Secret Key, Bucket name, Key, Expiry time and region name. It also uses HTML5 localstorage to save your recent data on browser.

## Getting Started

Just download it and start your node server. Currently it will run on port 10 you can change it in index.js file.

### Prerequisites

Node version 6.10.1 should be installed.

```
You can check Nodejs version by node -v
```

### Installing

Download or clone the project

start your server by node index.js

# Deployment

It hosted on [Heroku.com](https://aws-presigned-urls.herokuapp.com/)

# Rest API

```
You can also use it as REST API

RestAPI end point: https://aws-presigned-urls.herokuapp.com/GetSignedURL
Input parameters are: 
{
  "bucket": "BUCKET_NAME",
  "key": "KEY_NAME",
  "region": "REGION_NAME",
  "expiry" : "EXPIRY_IN_SECONDS",
  "accessKey" : "ACCESS_KEY",
  "secretKey" : "SECRET_KEY"
}
```

## Authors

* **Nitin Kumar** - *Initial work* - [Nitin Kumar](https://github.com/nitinprajapati)
