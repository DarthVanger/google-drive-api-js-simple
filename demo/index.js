console.log('index.js script loaded');

const clientId = '810066002433-smifmgudga64a88i9ngebr0bdabs4va7.apps.googleusercontent.com';
const apiKey = 'AIzaSyCT3dgcjVADrKlIQF8G_uw4cTQhhUmuQiM';

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

const scopes = [
  // Per-file access to files created or opened by the app
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  console.log('Gapi client loaded successfully');
  console.log('Loading client module');
  gapi.load('client', initClient);
}


const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

function initClient() {
  // Developer Console, https://console.developers.google.com
  console.log('Authorizing with gapi.auth2.init()');
  gapi.client.init({
    clientId,
    apiKey,
    discoveryDocs: ['https://people.googleapis.com/$discovery/rest'],
    scope: 'profile',
    response_type: 'id_token permission'
  }).then(function (response) {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
  }, function(error) {
    throw error;
  });
}

//import GoogleDriveApiSimple from 'google-drive-api-simple';

//const googleDriveAPiSimple = new GoogleDriveApiSimple(gapi);

