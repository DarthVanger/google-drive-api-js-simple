console.log('index.js script loaded');

const clientId = '810066002433-smifmgudga64a88i9ngebr0bdabs4va7.apps.googleusercontent.com';
const apiKey = 'AIzaSyCT3dgcjVADrKlIQF8G_uw4cTQhhUmuQiM';

function init() {
  console.log('gapi loaded successfully');
  console.log('Loading auth2 module');
  gapi.load('auth2', gapiAuthorize);
}

const scopes = [
  // Per-file access to files created or opened by the app
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

function gapiAuthorize() {
  // Developer Console, https://console.developers.google.com
  console.log('Authorizing with gapi.auth2.init()');
  gapi.auth2.init({
    clientId,
    apiKey,
    scope: 'email profile openid',
    response_type: 'id_token permission'
}, function(response) {
    if (response.error) {
      // An error happened!
      cnonsole.error('gapi authorize error response: ' + response.error);
      return;
    }
    // The user authorized the application for the scopes requested.
    var accessToken = response.access_token;
    var idToken = response.id_token;
    console.log('gapi authorize success');
    // You can also now use gapi.client to perform authenticated requests.
  });
}

//import GoogleDriveApiSimple from 'google-drive-api-simple';

//const googleDriveAPiSimple = new GoogleDriveApiSimple(gapi);

