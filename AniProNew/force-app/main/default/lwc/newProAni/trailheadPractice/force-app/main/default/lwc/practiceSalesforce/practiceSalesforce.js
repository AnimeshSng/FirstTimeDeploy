import { LightningElement, track } from 'lwc';

export default class PracticeSalesforce extends LightningElement {

@track userProfile = {}
zodiacTraits = [
  {
    sign: 'Capricorn',
    from: '12-22',
    to: '01-19',
    emoji: '🐐',
    trait: "You're disciplined, practical, and quietly ambitious. You don’t just chase goals—you build them brick by brick."
  },
  {
    sign: 'Aquarius',
    from: '01-20',
    to: '02-18',
    emoji: '💧',
    trait: "You're a thinker, a dreamer, and often the most original person in the room. Rules were made to be rewritten by you."
  },
  {
    sign: 'Pisces',
    from: '02-19',
    to: '03-20',
    emoji: '🐟',
    trait: "Your heart is a sponge for the world's emotions, and your imagination could paint entire galaxies."
  },
  {
    sign: 'Aries',
    from: '03-21',
    to: '04-19',
    emoji: '🔥',
    trait: "You're a natural-born leader—bold, driven, and full of fire. When you set your mind to something, there's no stopping you."
  },
  {
    sign: 'Taurus',
    from: '04-20',
    to: '05-20',
    emoji: '🐂',
    trait: "Steady, loyal, and grounded—you value comfort and stability, but you also have a quiet strength that others admire."
  },
  {
    sign: 'Gemini',
    from: '05-21',
    to: '06-20',
    emoji: '🌬️',
    trait: "Curious, witty, and adaptable—you thrive on variety and conversation, always ready to explore new ideas."
  },
  {
    sign: 'Cancer',
    from: '06-21',
    to: '07-22',
    emoji: '🦀',
    trait: "Deeply intuitive and nurturing—you protect those you love fiercely, with a heart that feels everything."
  },
  {
    sign: 'Leo',
    from: '07-23',
    to: '08-22',
    emoji: '🦁',
    trait: "Radiant, confident, and passionate—you light up every room you enter, inspiring others with your bold spirit."
  },
  {
    sign: 'Virgo',
    from: '08-23',
    to: '09-22',
    emoji: '🌿',
    trait: "Detail-oriented, thoughtful, and practical—you bring order to chaos and always strive for improvement."
  },
  {
    sign: 'Libra',
    from: '09-23',
    to: '10-22',
    emoji: '⚖️',
    trait: "Charming, fair, and diplomatic—you seek harmony in all things and have a gift for bringing people together."
  },
  {
    sign: 'Scorpio',
    from: '10-23',
    to: '11-21',
    emoji: '🦂',
    trait: "Intense, mysterious, and powerful—you feel everything deeply and transform challenges into strength."
  },
  {
    sign: 'Sagittarius',
    from: '11-22',
    to: '12-21',
    emoji: '🏹',
    trait: "Adventurous, optimistic, and free-spirited—you’re always chasing horizons and inspiring others to dream bigger."
  }
];
    userName;
    birthDate;

    handleNameChange(event){
        this.userName = event.target.value;
    }

    handleDateChange(event){
        this.birthDate = event.target.value;
    }

   handleSubmit() {
    let userDob = new Date(this.birthDate);
    const userMonth = userDob.getMonth() + 1;
    const userDate = userDob.getDate();
    this.userProfile = this.checkZodiacSign(userMonth, userDate);
}

checkZodiacSign(month, day) {
    for (let sign of this.zodiacTraits) {
        const [fromMonth, fromDay] = sign.from.split('-').map(Number);
        const [toMonth, toDay] = sign.to.split('-').map(Number);

        if ((month === fromMonth && day >= fromDay) || (month === toMonth && day <= toDay)) {
            console.log('Sign received in if condition: ' + JSON.stringify(sign));
            return sign;
        }
    }
}

}