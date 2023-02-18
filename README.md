# AutoCarousel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## How to use this carousel

take an array of image in below formate

imageSrc: image,//Image URLS to be displayed
imageAlt: this.eventInfo?.name, // any alternate key value
imageRedirect: this.eventInfo?.infoUrl, // If any image redirect url is there
imageRegRedirect: this.eventInfo?.registrationUrl, // if you want to redirect to particular page

AutoSlide :key used to make auto swipp of the iamges
slideInterval : key used to set the interval of image to swipe
controls: whether next or prev control will be visible
eventType: there is 2 option banner it will for resolution of images to displayed (banner/featured)
countingValue : key used show the counters of images and displaying image index
showDots: Key use to show the dots as a navigation
