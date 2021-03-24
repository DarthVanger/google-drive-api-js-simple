# Simplified Google Drive Api client
```
// create a new folder
const folderId = await googleDriveApiSimple.createDirectory('my new folder');

// create a text file
const textFileId = await googleDriveApiSimple.createTextFile({
  filename: 'something.txt',
  content: 'a brand new text file',
});

// create a json file
const configFileId = await googleDriveApiSimple.createTextFile({
  filename: 'app-config.json',
  content: '{ userLanguage: "en-us" }',
});
```

## Install and init
```
npm i google-drive-api-simple
```

```
import GoogleDriveApiSimple from 'google-drive-api-simple';

/**
 * Global "gapi" object from the official google drive api library.
 * Should be loaded using a script tag, see the docs:
 * https://developers.google.com/identity/sign-in/web/reference
 */
const gapi = window.gapi;

// Init passing the google api dependency
const googleDriveApiSimple = new googleDriveApiSimple({ gapi });

// create a new folder
const folderId = await googleDriveApiSimple.createDirectory('my new folder');
```

## Why store data on Google Drive?
- Store data for each user individually without any backend, server or database.
- All setup needed is a Google Login button.
- Free backups: Google Drive takes care of files being always there.

