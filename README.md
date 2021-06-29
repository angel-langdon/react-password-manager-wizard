# Open bank test 


&nbsp;
## Steps to work with the app locally:

- Clone the github repo:
```bash
git clone https://github.com/angel-langdon/react-password-manager-wizard.git
```
- Change into directory, install packages and start application
```bash
cd react-password-manager-wizard
npm install
npm start
```

&nbsp;

## App description and work made:

The app is completely functional, however yesterday was my birthday and I have been celebrating it, due to this fact, I have been very limited by time constraints.
The app is completely finished and there are no bugs but there are some modules that I did not have time to test well enough.

Also, I would like to point out that in the task it specifies a maximum of seven days and I have been given only three (maybe it's a mistake)

And last but not least, I would have liked to spend one day more to build all the tests, refactor the code to be more clean, sort the imports, and improve even more the style sheets.



## Folder structure:
```
react-password-manager-wizard
├── LICENSE
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.jsx
    ├── App.scss
    ├── App.test.js
    ├── assets
    │   ├── icons
    │   │   ├── hide-eye.svg
    │   │   ├── info.svg
    │   │   ├── ok-icon.png
    │   │   ├── problem-icon.png
    │   │   └── show-eye.svg
    │   └── img
    │       ├── group-3.svg
    │       ├── group.svg
    │       ├── key_openbank.png
    │       └── logo_openbank.png
    ├── components
    │   ├── CenteredAlert
    │   │   ├── CenteredAlert.jsx
    │   │   └── CenteredAlert.scss
    │   ├── FeedbackAlert
    │   │   ├── FeedbackAlert.jsx
    │   │   └── FeedbackAlert.scss
    │   ├── InfoSnippet
    │   │   ├── ImageInfoSnippet.jsx
    │   │   ├── ImageInfoSnippet.scss
    │   │   ├── InfoSnippet.jsx
    │   │   └── InfoSnippet.scss
    │   ├── PasswordValidationInput
    │   │   ├── PasswordValidationInput.hooks.js
    │   │   ├── PasswordValidationInput.jsx
    │   │   ├── PasswordValidationInput.scss
    │   │   ├── PasswordValidationInput.test.js
    │   │   └── PasswordValidationInput.utils.js
    │   └── Stepper
    │       ├── Stepper.hooks.js
    │       ├── Stepper.jsx
    │       ├── Stepper.scss
    │       └── Steps.jsx
    ├── hooks
    │   └── useWindowSize.js
    ├── index.css
    ├── index.js
    ├── locale
    │   ├── es.json
    │   └── index.js
    ├── serviceWorker.js
    ├── services
    │   └── api.js
    ├── setupTests.js
    ├── styles
    │   ├── base.scss
    │   └── global.scss
    ├── utils
    │   ├── arrayUtils
    │   │   └── arrayUtils.js
    │   └── passwordUtils
    │       └── passwordUtils.js
    └── views
        ├── Feedback
        │   ├── Feedback.hooks.js
        │   ├── Feedback.jsx
        │   ├── error.png
        │   └── success.png
        ├── PasswordCreationForm
        │   ├── PasswordCreationForm.hooks.js
        │   ├── PasswordCreationForm.jsx
        │   ├── PasswordCreationForm.scss
        │   ├── PasswordCreationForm.test.js
        │   └── step2.png
        └── ProductInformation
            ├── ProductInformation.jsx
            ├── ProductInformation.scss
            ├── ProductInformation.test.js
            └── step1.png

22 directories, 65 files
```

&nbsp;

&nbsp;
## App screenshots:

![](/screenshots/1.png)
![](/screenshots/2.png)
![](/screenshots/3.png)
![](/screenshots/4.png)
![](/screenshots/5.png)
![](/screenshots/6.png)
![](/screenshots/7.png)
![](/screenshots/8.png)

&nbsp;

&nbsp;
## Tests coverage:
![Test coverage](/screenshots/coverage.png)