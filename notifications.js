import React from "react";
import { AsyncStorage } from "react-native";
import { Notifications } from "expo";

import * as Permissions from "expo-permissions";

const KEY = "MobileFlashcard:notifications";
const C_ID = "DailyReminder";

export function deleteLocalNotification() {
  return AsyncStorage.removeItem(KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

function newNotification() {
  return {
    title: "Mobile Flashcards Reminder",
    body: "👋 Don't forget to study for today!",
    ios: {
      sound: true
    },
    android: {
      channelId: C_ID,
      sticky: false,
      color: "red"
    }
  };
}

function newChannel() {
  return {
    name: "Daily Reminder",
    description: "This is a daily reminder for you to study your flashcards.",
    sound: true,
    priority: "high"
  };
}

export function saveLocalNotification() {
  AsyncStorage.getItem(KEY)
    .then(JSON.parse)
    .then(data => {
      // if (true) {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
        //   console.log('got in');
        //   console.log('data', data);
          if (status === "granted") {
            // Notifications.presentLocalNotificationAsync(newNotification());
            Notifications.createChannelAndroidAsync(C_ID, newChannel())
              .then(val => console.log("channel return:", val))
              .then(() => {
                Notifications.cancelAllScheduledNotificationsAsync();

                const tomorrow = new Date();
                // 2 minute from now
                // tomorrow.setTime(tomorrow.getTime() + 2 * 60000);

                tomorrow.setDate(tomorrow.getDate() + 1);
                tomorrow.setHours(20);
                tomorrow.setMinutes(0);

                Notifications.scheduleLocalNotificationAsync(
                  newNotification(),
                  {
                    time: tomorrow,
                    repeat: "day"
                  }
                );

                AsyncStorage.setItem(KEY, JSON.stringify(true));
              })
              .catch(err => {
                console.log("err", err);
              });
          }
        });
      }
    });
}
