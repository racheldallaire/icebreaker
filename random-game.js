function game() {
	let all_games = [
		{question: "How about you play Two Truths and a Lie?", answer: "Here are the rules: Each person tells the other 3 statements about themselves, two of which are factual and one that is false. The other person the tries to guess the lie. What a great way to get to know somebody! 😃"},
	{question:"Let's play Would You Rather?", answer: "Each person answers the following question! Would you rather always be 10 minutes late or always be 20 minutes early?"},
		{question:"Let's play Would You Rather?",  answer: "Each person answers the following question! Would you rather lose all of your money and valuables or all of the pictures you have ever taken?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather be able to see 10 minutes into your own future or 10 minutes into the future of anyone but yourself?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather your shirts be always two sizes too big or one size too small?"},
		{question:"Let's play Would You Rather?",  answer: "Each person answers the following question! Would you rather live your entire life in a virtual reality where all your wishes are granted or in the real world?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather be completely invisible for one day or be able to fly for one day?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather be able to teleport anywhere or be able to read minds?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather have an unlimited international first class ticket or never have to pay for food at restaurants?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather have free Wi-Fi wherever you go or be able to drink unlimited free coffee at any coffee shop?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather live on the beach or in a cabin in the woods?"},
		{question:"Let's play Would You Rather?", answer: " Each person answers the following question! Would you rather never run out of battery power for whatever phone and tablet you own or always have free Wi-Fi wherever you go?"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🕷🚶", answer: "Spiderman"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🕚⬅️🚗💨", answer: "Back to the Future"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 👓👦⚡️", answer: "Harry Potter "},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🏡😱🎄👦", answer:" Home Alone"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🦁👑", answer: "Lion King"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🔍🐠", answer: "Finding Nemo"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🍍🚄", answer: "Pineapple Express"},
		{question:"Guess the movie based on the following emojis! Who can get it first? 🔇🐑🐑", answer: "Silence of the Lambs"},
		{question:"Finish the lyrics! There's vomit on his sweater already, mom's _____ ", answer: " spaghetti "},
		{question:"Finish the lyrics! Well we're all in the mood for a melody and you've got us feelin' ________", answer:"alright"},
		{question:"Finish the lyrics! But every song's like gold teeth, Grey Goose, trippin' in the _____", answer:"bathroom "},
		{question:"Finish the lyrics! Make it last forever, friendship never _____", answer:"ends "},
		{question:"Finish the lyrics! Don't cry, don't raise your eye. It's only teenage _____", answer:"ends"},
		{question:"Finish the lyrics! Oh, as long as I know how to love I know I'll stay _____", answer:" alive "},
		{question:"Finish the lyrics! I remember when, I remember, I remember when I lost my _____", answer:" mind "}
	];
	return all_games[Math.floor(Math.random()*all_games.length)];
}

module.exports = game;

