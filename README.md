<!-- FYI, this project has done as a pre-assignment to apply for the summer engineer position at Wolt Helsinki.
You can check more detail about the assignment via [the Woltapp github page.](https://github.com/woltapp/summer2020) -->

# Restaurants in Helsinki

The web page renders and sorts 50 restaurants in Helsinki in ascending and descending alphabetical order based on restaurants' name.

![app example](./media/app-example.png)

## 1. Demo

Click [here.](https://chaeahpark.github.io/restaurant-helsinki/)

## 2. App structure

![app structure](./media/restaurant-structure.png)

## 3. Getting started

There are two ways to try out this app: clone this git or download the git. The following describes how to run the app in either one of the two ways.

#### 1) Clone the git

<!-- how to run the react app -->
<!-- https://stackoverflow.com/questions/47137086/starting-react-app-from-pulled-github-project -->

Step #1. With the command line, clone the git.

```
> git clone https://github.com/chaeahpark/restaurant-helsinki.git
```

Step #2. Access to the file with the following command line.

```
> cd restaurant-helsinki
```

Step #3. In the restaurant-helisinki folder, check 'package.json' file.

```
> touch package.json
```

And ensure scripts are notated as below:

```
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

Step #4. Delete the 'node_modules' folder and any 'lock' files such as 'yarn.lock' or 'package-lock.json' if present.

Step #5. Install all dependencies.

```
> npm install
```

Step #6. Run the app with the following command line.

```
> npm start
```

#### 2) Download the git

Step #1) Download the file.

Step #2) Extract all from the file.

Step #3) Access to the 'restaurant-helsinki-master' file.

```
> cd restaurant-helsinki-master
```

Step #4) Download dependencies from npm.

```
> npm install
```

Step #5) Check your localhost:3000 is running. If it is not, run the app with the following command line.

```
> npm start
```

If localhost:3000 is running, set another port to run the app. For example,

```
> PORT=3001 npm start
```

You can change 3001 to any port number that you'd like to run on.

## 4. Dependencies

- @testing-library/jest-dom: v. 4.2.4
- @testing-library/react: v. 9.4.0
- @testing-library/user-event: v.7.2.1
- react: v.16.12.0
- react-dom: v.16.12.0
- react-scripts: v.3.3.1

## Questions?

parkchaeah331@gmail.com
