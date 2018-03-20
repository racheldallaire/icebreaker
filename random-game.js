function game() {
	let all_games = [
		{question: "How about you play Two Truths and a Lie?", answer: "Here are the rules: Each person tells the other 3 statements about themselves, two of which are factual and one that is false. The other person the tries to guess the lie. What a great way to get to know somebody! 😃"},
	{question:"Let's play Would You Rather? Would you rather always be 10 minutes late or always be 20 minutes early?", answer:" Each person answers the preceding question!"},
		{question:"Let's play Would You Rather? Would you rather lose all of your money and valuables or all of the pictures you have ever taken?",  answer:" Each person answers the preceding question!"  },
		{question:"Let's play Would You Rather? Would you rather be able to see 10 minutes into your own future or 10 minutes into the future of anyone but yourself?" answer: " Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather your shirts be always two sizes too big or one size too small?" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather live your entire life in a virtual reality where all your wishes are granted or in the real world?"answer:" Each person answers the preceding question!" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather be completely invisible for one day or be able to fly for one day?" answer:" Each person answers the preceding question!" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather be able to teleport anywhere or be able to read minds?" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather have an unlimited international first class ticket or never have to pay for food at restaurants?" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather have free Wi-Fi wherever you go or be able to drink unlimited free coffee at any coffee shop?" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather live on the beach or in a cabin in the woods?" answer:" Each person answers the preceding question!" },
		{question:"Let's play Would You Rather? Would you rather never run out of battery power for whatever phone and tablet you own or always have free Wi-Fi wherever you go?" answer:" Each person answers the preceding question!" },
		{question:"Guess the movie based on the following emojis! Who can get it first? 🕷🚶", answer: " Answer: Spiderman"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🕚⬅️🚗💨", answer: " Answer: Back to the Future"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 👓👦⚡️", answer: " Answer: Harry Potter "},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🏡😱🎄👦", answer:"Answer: Home Alone"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🦁👑", answer: "Answer: Lion King"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🔍🐠", answer: "Answer: Finding Nemo"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🍍🚄", answer: "Answer: Pineapple Express"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🔇🐑🐑", answer: "Answer: Silence of the Lambs"},
		{question:"Finish the lyrics! There's vomit on his sweater already, mom's _____ ", answer: "Answer: spaghetti "},
		{question:"Finish the lyrics! Well we're all in the mood for a melody and you've got us feelin' ________", answer:"Answer: alright"},
		{question:"Finish the lyrics! But every song's like gold teeth, Grey Goose, trippin' in the _____", answer:"Answer: bathroom "},
		{question:"Finish the lyrics! Make it last forever, friendship never _____", answer:"Answer: ends "},
		{question:"Finish the lyrics! Don't cry, don't raise your eye. It's only teenage _____", answer:"Answer: ends"},
		{question:"Finish the lyrics! Oh, as long as I know how to love I know I'll stay _____", answer:" Answer: alive "},
		{question:"Finish the lyrics! I remember when, I remember, I remember when I lost my _____", answer:"Answer: mind "}
	];
	return all_games[Math.floor(Math.random()*all_games.length)];
}

module.exports = game;

