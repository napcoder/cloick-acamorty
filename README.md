# Cloick Acamorty

## Start instructions

This project is using Expo managed workflow.

Before starting the project, you have to install all the required packages:
```
yarn
```

After the installation you can start the Metro bundler running:

```
yarn start
```
then press `i` or `a` to launch the app on iOS or Android simulator/emulator or connected devices.

## Tests

Test are written using Jest and React Native Testing Library.

To run tests you can run:

```
yarn test
```

If you prefer watch mode, you can run:
```
yarn test:watch
```

To generate coverage run
```
yarn testFinal
```


## Storybook

Storybook is a useful tool to design components and have a showcase of common components to share with team and designers. 

Anyway, to start Storybook few manual configurations and steps are required:
1. if started, stop the metro bundler with `ctrl-c`
1. create a `.env` file in project root folder following the `.env.example`, but set `START_STORYBOOK=true` if you want to start Storybook
1. start the storybook server running `yarn storybook` -  new web page should be opened on the web browser, showing Storybook intro, but still in loading mode, waiting for mobile to be started
1. now restart the metro bundler and devices/simulator/emulator `yarn start` (alternative commands are `yarn android` or `yarn ios`)

Once the application is started on mobile, you are going to see the storybook showcase instead of the real app: you can now explore the navigation menu and view components, edit manual props, try some actions.

To switch back to app, follow these steps:
1. stop metro bundler `ctrl-c`
1. stop storybook server `ctrl-c`
1. in file `.env` set `START_STORYBOOK=false`
1. restart metro bundler `yarn start`

## About the project name

I'm so sorry, but I could not resist to make a pun with "Rick and Morty"... An awful pun, in this particular case.