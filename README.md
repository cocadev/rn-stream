# React Native Activity Feed Example

A mobile application built using React Native, [Stream.io](https://getstream.io/) and [react-native-activity-feed](https://github.com/GetStream/react-native-activity-feed)

![screenshots of example app](/images/screenshots@2x.png)

## Features

- Flat feed
- Notification feed
- Activity detail screen
- Profile screen
- Profile update screen
- Likes & Comments
- Status update with hashtags, mentions, URL enrichment and image upload

## Requirements

- NodeJS
- Expo

Get your Stream API credentials from the [user dashboard](https://getstream.io/dashboard/) and make sure your application has these feed groups:

- user (type Flat)
- timeline (type Flat)
- notification (type Notification)


Open the `.env` file in your favorite editor. And fill in the credentials.

```
npm run init-data
```

Copy the line this script outputs and put it in your `.env` file.

```
npm start
```

Follow the instructions from the terminal to preview the app on your phone or using an emulator.
