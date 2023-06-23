import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function App() {
  const insults = [
    "Your resolve is lacking today.",
    "You have the unique talent of making everyone around you feel instantly more intelligent.",
    "I envy your relentless determination to be average. It must take a lot of effort.",
    "You're the reason why shampoo has instructions.",
    "You're proof that evolution sometimes takes a nap.",
    "I envy your relentless determination to be average. It must take a lot of effort.",
    "I can't decide if you have selective hearing, or selective intelligence.",
    "I'm amazed at your ability to consistently find the most compicated solution to the simplest problems.",
    "If you had nen you would definitely be an enhancer.",
    "You're the type of person who Googles 'How to be normal' before attending a social event.",
    "If you were a font you would be Comic Sans.",
    "Someday you'll go far. I hope you stay there.",
    "It's time to fix the depression room.",
    "Keep rolling your eyes; maybe you'll find a brain back there.",
    "Are you always this awkward, or are you just making a special effort today?",
    "You're the reason they invented spell check.",
    "Fix your posture.",
    "It's a shame you can't Photoshop your personality.",
    "Did you fall from heaven? Because it looks like you landed on your face.",
    "Is your name Dwayne Johnson? Because you're as funny as a rock.",
    "Please change your haircut.",
    "You're the reason aliens fly straight past Earth.",
    "You're the human equivalent of a participation award.",
    "The project you started and didn't finish is waiting for you.",
    "You're proof that evolution can sometimes go in reverse.",
    "Are you allergic to eye contact or do you just enjoy making people uncomfortable?",
    "You need a shower.",
    "Minecraft is not your real life.",
    "That's enough twitter for today.",
    "You're contributing to climate change right now.",
    "How are those savings looking?",
    "Does the Joker impression really work for you?",
    "There's soap on the bathroom sink for a reason.",
    "If you were a flavor, you'd be vanilla.",
    "You're the kind of person who waits for the DVD menu to play rather than pressing 'play movie.'",
    "It's time to use that gym membership.",
    "You had a Glee phase didn't you?",
    "You have a black belt in the art of avoiding responsibilities.",
    "Armie Hammer would love you!",
    "I bet your favorite website is the '404 Error' page.",
    "Your clothes scream, 'I gave up.'",
    "Your cooking skills are the reason why delivery services exist.",
    "It's amazing how you manage to do the absolute minimum in every situation.",
    "Everyone can tell that you don't own a lint roller.",
    "If there were an award for underachievement, you'd be a perpetual nominee.",
    "What do you mean you don't like the taste of water?",
    "Maybe you should start taking wearing sunscreen seriously.",
    "Grammarly crashes in defeat whenever it encounters your writing.",
    "It's amazing how you manage to do the absolute minimum in every situation.",
    "You have a special talent for sucking the joy out of any situation.",
    "How many times did you hit snooze this morning?",
    "IYou put the 'pro' in procrastination.",
    "Your favorite exercise is jumping to conclusions.",
    "It's time to wash those sheets don't you think?",
    "When was the last time you filled the brita?",
    "They didn't text you. Stop checking.",
    "Don't worry- you can always move back in with your parents.",
    "You're too codependent with your bed.",
    "If there were an award for procrastination, you'd win it... eventually.",
    "Your ability to make excuses for yourself is truly remarkable.",
    "When was the last time you read a book?",
    "Your idea of a good time is rearranging your sock drawer.",
    "I'm not sure if your hair is rebellious or simply on a mission to sabotage your appearance.",
    "Your handwriting is The only thing about you that screams 'doctor.'",
    "Your parking skills are a constant source of entertainment for tow truck drivers.",
    "Your Instagram captions are proof that not everyone should have access to a keyboard.",
    "I've seen dust bunnies with more charisma than you.",
    "You're the reason 'rage quitting' was added to the gaming dictionary.",
    "I've met paperclips with more personality than you.",
    "It's amazing how you manage to find the most generic hobbies and interests.",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
    "Larry David would love you!",
  ];

  useEffect(() => {
    scheduleNotification();
  }, []);

  const scheduleNotification = async () => {
    const currentDate = new Date();
    const today = new Date().setHours(0, 0, 0, 0);
    const tomorrow = new Date(today + 24 * 60 * 60 * 1000);
    const notificationDate = new Date(
      today + getRandomTimeBetween(6, 19) * 60 * 60 * 1000
    );

    if (currentDate < notificationDate) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Insult of the Day',
          body: insults[currentDate.getUTCDate() % insults.length],
        },
        trigger: {
          date: notificationDate,
        },
      });
    } else {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'Insult of the Day',
          body: insults[tomorrow.getUTCDate() % insults.length],
        },
        trigger: {
          date: tomorrow,
        },
      });
    }
  };

  const getRandomTimeBetween = (startHour, endHour) => {
    return Math.floor(Math.random() * (endHour - startHour) + startHour);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Your insult of the day is:</Text>
      <Text style={styles.text}>{insults[new Date().getUTCDate() % insults.length]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    fontSize: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#4b0082',
    textAlign: 'center',
  },
});
