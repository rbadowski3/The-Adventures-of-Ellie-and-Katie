import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Lost Fireflies",
    episode: "Episode 1",
    emoji: "✨",
    gradientCard: "linear-gradient(135deg, #1a0a3e, #2d5a1a)",
    pages: [
      { text: `It was nighttime, and something was wrong.\n\nEllie grabbed Katie's hand. "Katers — the fireflies are gone!"\n\nEvery night, little lights would blink and dance in the yard. But tonight? Just dark.\n\nKatie looked around. "Did we break them?"\n\n"You can't break fireflies, Katie."\n\n"I broke a cracker once just by looking at it."\n\nEllie stared at her. "That's different."`, emoji: "🌑", gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 50%, #1a2a1a 100%)" },
      { text: `Daddy came outside. He had just finished working out — so he was a little sweaty and a lot ready to help.\n\n"What's the situation, team?"\n\n"THE FIREFLIES ARE GONE!" Ellie said.\n\n"ALL of them?" Daddy gasped.\n\n"ALL of them," said Katie, very seriously.\n\nDaddy cracked his knuckles. "I have a plan."\n\nFrom inside, Mommy called out: "Ry, do you actually have a plan?"\n\nDaddy pointed at the yard. "Everyone move."`, emoji: "💪", gradient: "linear-gradient(160deg, #0d1f0d 0%, #1a3a1a 50%, #2d1b69 100%)" },
      { text: `They went into the yard together. Ellie led the way. Katie held her hand and stepped wherever Ellie stepped.\n\nThen Ellie saw it — a little jar, tipped over by the big tree. A few fireflies were resting inside. They weren't gone. They were just stuck!\n\n"Katers! I found them!" Ellie whispered. "We can fix it. Together."\n\nKatie's eyes went big. "Together," she said.`, emoji: "🫙", gradient: "linear-gradient(160deg, #1a1a0a 0%, #2a2a0d 40%, #1a3a1a 100%)" },
      { text: `Ellie held the jar. Katie helped tip it. Slowly, slowly — and then the fireflies floated free! Up and up, blinking and glowing. The whole yard lit up again.\n\n"WE DID IT!" Katie yelled. She grabbed Ellie and they spun around laughing.\n\nDaddy watched them and smiled the biggest smile.`, emoji: "🌟", gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d5a1a 40%, #4a7a2a 100%)" },
      { text: `Daddy got quiet and looked at all the little lights.\n\n"Do you know who made every single firefly?" he said.\n\n"Jesus?" said Ellie.\n\n"Jesus," Daddy nodded. "And the same Jesus who made every firefly and every star — He knows YOUR name. He loves YOU more than all of this."\n\nKatie looked up. "Even me?"\n\nDaddy kissed her forehead. "Especially you, Katers."\n\nEllie took Daddy's hand. "I'm glad Jesus made us."\n\n"Me too, Ellie Girl," Daddy said. "Me too." 🌟`, emoji: "🙏", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2d5a1a 100%)" }
    ],
    lesson: "Jesus made you and knows your name — you are so loved.",
    questions: ["Who made the fireflies, the stars, and YOU?", "Jesus knows your name! What do you think it feels like to know Jesus is thinking about you?", "Ellie and Katie fixed the jar together. Can you think of a time you two helped each other?"],
    prayer: "Dear Jesus,\n\nThank You for making fireflies and stars and the whole beautiful world. But most of all, thank You for making Ellie Girl and Katers.\n\nYou know their names. You love them so much. Help them feel that love tonight as they sleep.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 2,
    title: "The Muddy Mountain",
    episode: "Episode 2",
    emoji: "🥾",
    gradientCard: "linear-gradient(135deg, #4a7a2a, #8B6914)",
    pages: [
      { text: `Daddy had a plan for the hike. He always has a plan.\n\n"Easy trail, girls. No big hills. I checked the map!"\n\nMommy smiled. "Famous last words, Ry."\n\n"I have a PLAN, Shel."\n\nShe kissed his cheek. "I know you do."\n\nThen they found the mud.`, emoji: "🗺️", gradient: "linear-gradient(160deg, #87CEEB 0%, #98D8C8 50%, #7CB87A 100%)" },
      { text: `One second the path was dry. The next — *SCHLORP* — Ellie's boot sank into a huge, goopy mud puddle.\n\n"DADDY. I am STUCK."\n\nDaddy looked at her. Looked at the mud. He tried really hard not to laugh.\n\n"Don't you dare," said Ellie.\n\nHe laughed. He completely laughed.\n\nKatie watched from far away. "Uh oh," she said quietly.`, emoji: "👢", gradient: "linear-gradient(160deg, #8B6914 0%, #A0784A 40%, #7CB87A 100%)" },
      { text: `Daddy pulled Ellie out — *THWOOOOP* — and they both fell into the bushes. The girls laughed so hard!\n\nThen Katie looked at the big hill ahead. It was steep. It was long.\n\nShe reached for Ellie's hand.\n\n"Ellie... is it hard?"\n\nEllie looked at the hill. Then she looked at her little sister. She stood up tall.\n\n"We can do hard things, Katers. I'll be with you the whole way."`, emoji: "⛰️", gradient: "linear-gradient(160deg, #6B8E23 0%, #8B7355 50%, #87CEEB 100%)" },
      { text: `Daddy knelt down right there in the mud.\n\n"Girls, did you know Jesus is like a shepherd? A shepherd never leaves his sheep alone on a hard hill. He goes WITH them."\n\n"So Jesus is with us right now?" Katie asked.\n\n"Right now," Daddy said. "And so am I. And so is your sister."\n\nEllie held out her hand. "Together?"\n\nKatie took it. "Together."`, emoji: "🤝", gradient: "linear-gradient(160deg, #2d5a1a 0%, #4a7a2a 50%, #87CEEB 100%)" },
      { text: `They climbed — all three of them. When Katie's legs got tired, Daddy put her on his back. Ellie cheered her the whole way up.\n\nAt the top, they could see so far. Green hills and blue sky everywhere.\n\n"Did Jesus make all this?" Ellie asked.\n\n"Every bit," Daddy said.\n\nKatie rested her chin on Daddy's head and sighed happily.\n\n"He's pretty good," she said.\n\nDaddy laughed. "Yeah, Katers. He really is." 🌟`, emoji: "🌅", gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #87CEEB 60%, #4a8a3a 100%)" }
    ],
    lesson: "Jesus is our Good Shepherd — He goes with us on every hard hill.",
    questions: ["Does Jesus leave us when things get hard, or does He stay WITH us?", "Katie held Ellie's hand and felt better. Who helps YOU feel brave?", "How can YOU be like Ellie and hold someone's hand when things feel scary?"],
    prayer: "Dear Jesus,\n\nThank You for being our Good Shepherd. You never leave us — not on hard hills, not ever.\n\nWhen things feel too big, remind Ellie Girl and Katers that You are right there. And thank You for giving them each other.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 3,
    title: "The Great Cleveland Cannonball",
    episode: "Episode 3",
    emoji: "💦",
    gradientCard: "linear-gradient(135deg, #1a6a9e, #0a3a6e)",
    pages: [
      { text: `The car ride to Cleveland felt like forever.\n\nEllie had asked "are we there yet?" forty-seven times. She counted.\n\n"Forty-eight," she said. "Are we there yet?"\n\n"Ninety more minutes," Daddy said.\n\n"That's forever."\n\nKatie looked up. "I dropped my cracker."\n\n"When?" asked Mommy.\n\nKatie thought about it. "Ohio."`, emoji: "🚗", gradient: "linear-gradient(160deg, #87CEEB 0%, #4a8ab4 50%, #2a5a8a 100%)" },
      { text: `But then — Daddy turned a corner and both girls saw it.\n\n*The pool.*\n\n"PAPA BUD'S POOL!!!" Ellie screamed.\n\nKatie bounced in her seat. "POOL! POOL! POOL!"\n\nPapa Bud was outside waiting. He scooped Katie up — "There's my CUTIE!" — and went straight for the chin.\n\n"THE CHIN!" Katie screamed, laughing so hard she could barely breathe.\n\nDidi came out in her workout clothes — because Didi is ALWAYS working out — and hugged both girls at the same time.`, emoji: "🏠", gradient: "linear-gradient(160deg, #2a5a8a 0%, #1a6a9e 50%, #0a8a5e 100%)" },
      { text: `Four minutes later — swimsuits on.\n\nEllie stood at the edge of the pool. Arms up. Chin out. "I am going to do the biggest cannonball EVER."\n\n"You're four," Daddy said.\n\n"Fearlessly four," she said. And jumped.\n\nIt was amazing. Papa Bud got soaked and raised his lemonade like a trophy.\n\nKatie stood at the steps. She wanted to jump too. But the pool looked really, really big.`, emoji: "🏊", gradient: "linear-gradient(160deg, #0a4a8a 0%, #1a7ab4 50%, #0a9a9e 100%)" },
      { text: `Ellie swam right over. "Come in, Katers. I'll hold your hand. I promise I won't let go."\n\nKatie looked at the water. Looked at Ellie.\n\nShe took her hand.\n\nOne step. Two steps. And then she was IN — laughing and splashing, with Ellie holding on tight.\n\n"YOU'RE DOING IT!" Ellie yelled.\n\n"I'M DOING IT!" Katie yelled back.`, emoji: "🤸", gradient: "linear-gradient(160deg, #1a2a6e 0%, #0a5a9e 40%, #0a8abe 100%)" },
      { text: `Later, wrapped in towels and eating Papa Bud's famous burgers, Daddy looked at Ellie.\n\n"You didn't just jump in. You went back for your sister. Do you know who does that?"\n\n"Jesus?" said Ellie, mouth full.\n\n"Jesus," Daddy said. "The Bible says God doesn't give us a scared heart. He gives us a BRAVE heart. And He gives us people to hold our hand."\n\nKatie put her head on Ellie's shoulder.\n\nEllie put her arm around her. Just like that. 🌟`, emoji: "🍔", gradient: "linear-gradient(160deg, #1a3a2a 0%, #2a5a3a 40%, #FF8C42 100%)" }
    ],
    lesson: "God gives us a brave heart — and people to hold our hand.",
    questions: ["Katie was scared of the water, but Ellie held her hand. How did that help?", "God gives us a BRAVE heart! Where do you think that braveness comes from?", "How can YOU be like Ellie and help someone feel safe this week?"],
    prayer: "Dear Jesus,\n\nThank You that You don't give us a scared heart. You give us a BRAVE heart!\n\nThank You for making Ellie a big sister who goes back for Katie. Help Katers always know she is never alone.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 4,
    title: "The Lake Day Rescue",
    episode: "Episode 4",
    emoji: "⛵",
    gradientCard: "linear-gradient(135deg, #0a5a8e, #1a9a6e)",
    pages: [
      { text: `It was only eight minutes from their house to Pops and Gigi's lake.\n\nEllie counted every single second out loud.\n\nKatie had her nose pressed to the window, watching the water get closer.\n\n"TODAY," Katie said, "is going to be a great day."\n\n"Ry, don't forget the sunscreen," Mommy said.\n\n"I have it, Shel."\n\n"Last time you said that too."\n\nDaddy did not say anything.`, emoji: "🌊", gradient: "linear-gradient(160deg, #87CEEB 0%, #1a9abe 50%, #0a6a8e 100%)" },
      { text: `Pops was on the dock at Little Crooked Lake, getting the boat ready. Gigi had snacks set out — because Gigi always has snacks.\n\n"MY GIRLS!" Gigi called.\n\nEllie ran to her and started talking about everything that had happened since Tuesday. All of it. Very fast.\n\nKatie walked straight to Pops. "Boat. Now."\n\nPops laughed. "Soon as Daddy helps with this rope."\n\nKatie looked at the rope. "I can try." She couldn't get it — but she tried SO hard that everyone cheered anyway.`, emoji: "🎣", gradient: "linear-gradient(160deg, #0a5a8e 0%, #1a8abe 40%, #2aaa7e 100%)" },
      { text: `Out on the lake, the water was sparkly and blue. Ellie was singing a Frozen song very loudly.\n\n"ELLIE," Daddy said.\n\n"THE WIND BLOWS IT AWAY! I HAVE TO SING LOUDER!"\n\nPops laughed. Gigi gave everyone juice boxes.\n\nThen Ellie grabbed Daddy's arm. "Daddy — that duck is hurt!"\n\nA little duck was spinning in circles. Something was wrapped around its wing.\n\n"We have to help it," Ellie said.\n\nKatie stood up. "Let's go."`, emoji: "🦆", gradient: "linear-gradient(160deg, #1a7abe 0%, #0a5a8e 40%, #2a8a4e 100%)" },
      { text: `Pops drove the boat closer. Ellie leaned over the side while Daddy held her. She worked the string loose with her fingers.\n\nKatie knelt right next to her the whole time — helping hold Ellie steady.\n\nThen — FREE! The duck shook itself off and swam away super fast. It didn't even say thank you.\n\n"You're welcome," Katie said flatly.\n\nEveryone on the boat laughed so hard.`, emoji: "🙌", gradient: "linear-gradient(160deg, #0a4a6e 0%, #1a8a9e 50%, #2aaa6e 100%)" },
      { text: `On the way back, Daddy sat with both girls.\n\n"You saw that duck hurting and you didn't just watch. You helped. Do you know who was like that?"\n\n"Jesus?" Ellie said.\n\n"Jesus always moved toward people who were hurting. He never just walked by. He always helped."\n\nKatie leaned into Ellie. Ellie put her arm around her.\n\nGigi had dinner ready when they got back. 🌟`, emoji: "🌅", gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a5a8e 100%)" }
    ],
    lesson: "Jesus always helped people who were hurting — and we can too.",
    questions: ["Ellie saw the duck hurting and wanted to help right away. Can you think of someone you could help this week?", "Jesus always moved toward people who needed help. What does that tell you about Jesus?", "Ellie led and Katie helped. How can YOU and your sister be a team tomorrow?"],
    prayer: "Dear Jesus,\n\nThank You for lake days and Pops and Gigi and boat rides on Little Crooked Lake.\n\nThank You for giving Ellie and Katie hearts that want to help. Help them see people who need kindness — and give them the courage to help, just like You always did.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 5,
    title: "The Backwards Bedtime",
    episode: "Episode 5",
    emoji: "🌙",
    gradientCard: "linear-gradient(135deg, #2d1b69, #6a0a3e)",
    pages: [
      { text: `Bedtime was supposed to go like this:\n\nBath. Pajamas. Brush teeth. Story. Sleep.\n\nDaddy had a plan. Daddy always has a plan.\n\nBut Ellie Girl had a different idea. Three outfit changes, a full concert, and an announcement that she had NEVER been tired in her whole life.\n\n"Ellie Girl." Daddy stood in the hallway.\n\n"Just one more song, Daddy."\n\nThen from the bathroom — *SPLASH.* "Oops."\n\nThat was Katers.`, emoji: "🛁", gradient: "linear-gradient(160deg, #2d1b69 0%, #4a0a5e 50%, #1a0a3e 100%)" },
      { text: `Daddy found Katie standing next to a very wet floor, looking very innocent.\n\n"Katers. What happened?"\n\n"The water jumped out."\n\n"Water doesn't jump out."\n\n"This water did."\n\nMommy came to the door, kissed Daddy on the cheek, and handed him a towel.\n\n"You've got this, Ry."\n\n"Thank you, Shel."\n\n"I'll pray for you." She walked away. She was definitely laughing.`, emoji: "💦", gradient: "linear-gradient(160deg, #1a0a4e 0%, #2d1b69 50%, #0a1a4e 100%)" },
      { text: `FINALLY. Pajamas on. Teeth brushed. Everyone in bed.\n\nEllie had her stuffed animals in a very important order. Katie was already droopy-eyed.\n\n"Daddy," Ellie said. "Why do we have to sleep? I don't want the day to stop."\n\nDaddy sat on the edge of the bed.\n\n"Because God made sleep on purpose," he said. "Did you know — even God rested? After He made the WHOLE world, He took a rest. Because rest is a gift."`, emoji: "🌟", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0a4e 50%, #2d1b69 100%)" },
      { text: `"But here's the really cool part," Daddy said. "When YOU sleep — God doesn't. He stays up all night watching over you. He never gets tired. He never falls asleep."\n\n"So He's watching right now?" Ellie asked.\n\n"Right now. The whole night. Every minute."\n\nKatie was almost asleep. But she smiled a tiny smile.`, emoji: "🌙", gradient: "linear-gradient(160deg, #0a0a1e 0%, #1a0a3e 40%, #0d1a3e 100%)" },
      { text: `Ellie reached over and held Katie's hand under the blanket.\n\n"Katers," she whispered. "Jesus watches us all night. We don't have to be scared."\n\nKatie didn't open her eyes. But she squeezed Ellie's hand.\n\nDaddy kissed them both. He looked at his two girls — safe and small and loved.\n\n"Goodnight, Ellie Girl." "Goodnight, Daddy."\n\n"Goodnight, Katers." A tiny little voice: "Night, Daddy."\n\nHe turned the light off. And Jesus kept watch. 🌟`, emoji: "⭐", gradient: "linear-gradient(160deg, #050510 0%, #0a0a2e 50%, #0a1428 100%)" }
    ],
    lesson: "God never sleeps — He watches over us all night long.",
    questions: ["God watches over you ALL night! How does that make you feel when the lights go off?", "God made sleep as a GIFT for us! What do you love about bedtime?", "Ellie told Katie not to be scared because Jesus is watching. Can you remind each other of that tonight?"],
    prayer: "Dear Jesus,\n\nThank You that You never sleep. While Ellie Girl and Katers close their eyes, You are right here — watching, keeping them safe, holding them close.\n\nLet them rest tonight without being scared. Because You've got them.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 6,
    title: "The Thunderstorm Teammates",
    episode: "Episode 6",
    emoji: "⛈️",
    gradientCard: "linear-gradient(135deg, #1a2a4e, #3a1a5e)",
    pages: [
      { text: `It started with a big rumble.\n\nEllie woke up. She listened. Another rumble — louder.\n\nShe looked at Katie's bed across the room. Katie was sitting up, blanket pulled to her chin, eyes big.\n\n"Ellie," Katie whispered.\n\n"I know," Ellie whispered back. "Come here, Katers."\n\nKatie ran across the room and jumped into Ellie's bed. They pulled the blanket up together and listened to the storm outside.`, emoji: "⛈️", gradient: "linear-gradient(160deg, #1a2a4e 0%, #2a1a5e 50%, #0a0a2e 100%)" },
      { text: `CRACK! A big one. The whole room flashed bright for a second.\n\nKatie grabbed Ellie's arm.\n\nEllie was a little scared too. But she was the big sister. So she held on tighter.\n\n"It's just thunder," Ellie said. "It can't come in."\n\n"It's SO loud," said Katie.\n\n"I know. But Daddy says loud things can't hurt you."\n\n"When did he say that?"\n\nEllie thought. "He's about to."\n\nAnd right then — footsteps in the hall.`, emoji: "⚡", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2a1a4e 100%)" },
      { text: `Daddy came in looking like he'd been asleep for four minutes. Hair everywhere. Old workout shirt.\n\n"I see we've built a fort," he said.\n\n"The thunder is SO loud, Daddy," Katie said.\n\n"Scoot over."\n\nThey scooted. He squeezed in. Now all three of them watched the lightning flash through the curtains.\n\n"Is Mommy scared?" Ellie asked.\n\n"Mommy is asleep." "HOW?"\n\n"Your mom is a mystery, Ellie Girl."`, emoji: "🌩️", gradient: "linear-gradient(160deg, #1a1a4e 0%, #2a1a5e 50%, #1a0a3e 100%)" },
      { text: `Another big BOOM. Katie grabbed Daddy's arm with both hands.\n\nDaddy didn't move. Solid like a rock.\n\n"In the Bible, Jesus was on a boat in a GIANT storm. His friends were super scared. But Jesus stood up and said STOP to the storm. And it stopped."\n\nKatie looked up. "He told the storm to STOP?"\n\n"Just like that. Because Jesus made the thunder. It listens to Him."\n\n"So He's in charge of this storm?" Ellie asked.\n\n"Every single cloud," Daddy said. "All His."`, emoji: "🙏", gradient: "linear-gradient(160deg, #1a0a3e 0%, #2a1a5e 40%, #0a1a4e 100%)" },
      { text: `The storm kept going. But now it felt different. Like it belonged to Someone they knew.\n\nKatie loosened her grip on Daddy's arm. Just a little.\n\nEllie leaned her head on his shoulder. "Will you stay, Daddy?"\n\n"I'll stay," he said.\n\nThe three of them sat together — Daddy in the middle, a girl on each side — while Jesus held the storm outside.\n\nBoth girls fell asleep before the thunder stopped.\n\nDaddy stayed anyway. 🌟`, emoji: "🌈", gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 40%, #1a3a5e 100%)" }
    ],
    lesson: "Jesus is in charge of every storm — we don't have to be scared.",
    questions: ["When the storm came, what did Ellie do for Katie right away?", "Jesus told the storm to STOP and it listened! How powerful is Jesus?", "Daddy stayed even after the girls fell asleep. Who always stays with you when you're scared?"],
    prayer: "Dear Jesus,\n\nThank You that You are in charge of every storm. Every rumble. Every flash. It's all Yours.\n\nWhen Ellie Girl and Katers feel scared, help them remember that You are right there. You will never leave them.\n\nThank You for big sisters who hold on. Thank You for daddies who stay. And thank You that YOU always stay too.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 7,
    title: "The Sharing War",
    episode: "Episode 7",
    emoji: "🐘",
    gradientCard: "linear-gradient(135deg, #7a2a8e, #3a1a6e)",
    pages: [
      { text: `It all started with a waffle.\n\nEllie had put syrup in every square. It was perfect.\n\nKatie wanted a bite.\n\n"You have your OWN waffle, Katers."\n\n"I know. But yours looks better."\n\n"They're the SAME waffle!"\n\nKatie studied both waffles carefully. "Yours has more squares."\n\nMommy stood at the counter watching. Daddy whispered, "Shel, are you going to help?"\n\n"I'm observing," she said, very calmly.`, emoji: "🧇", gradient: "linear-gradient(160deg, #8B6914 0%, #c8960a 40%, #FFB347 100%)" },
      { text: `By 9am — a fight over the purple crayon.\n\nBy 10am — a fight over who got which couch cushion.\n\nBy lunch — a fight over a stuffed elephant. Nobody could remember where it came from.\n\n"MINE!" said Katie, holding it with both arms.\n\n"I had it FIRST!" said Ellie.\n\nDaddy walked in after his workout. Two girls. One elephant. Big standoff.\n\nHe looked at Mommy. "How long?"\n\n"Since the waffle," she said.`, emoji: "😤", gradient: "linear-gradient(160deg, #6a1a4e 0%, #8a2a6e 50%, #4a1a5e 100%)" },
      { text: `Daddy sat down right on the floor. "Sit with me. Both of you. Elephant too."\n\nThey sat. Katie still held the elephant very tight.\n\n"Can I tell you about someone in the Bible?" Daddy said.\n\n"Is it about sharing?" Ellie asked. "It's about sharing." Ellie sighed.\n\n"There was a man named Zacchaeus. He kept everything for himself. But then Jesus came to his house — and something happened to his heart. He started giving everything AWAY. Because when Jesus is in your heart, it changes you."`, emoji: "📖", gradient: "linear-gradient(160deg, #2a1a5e 0%, #4a1a7e 50%, #3a0a5e 100%)" },
      { text: `Ellie was quiet. She looked at Katie.\n\n"Katers," she said softly. "You can have the elephant."\n\nKatie blinked. "Really?"\n\n"Yeah." Ellie reached over and fixed a little piece of Katie's hair. Just like a big sister does.\n\n"You can have it," Ellie said again.\n\nKatie looked at the elephant. Then she did something that surprised everyone.\n\nShe held it out to Ellie. "We can share it."`, emoji: "💜", gradient: "linear-gradient(160deg, #3a0a5e 0%, #5a1a8e 40%, #4a0a7e 100%)" },
      { text: `Ellie took one ear. Katie kept the other.\n\nTwo girls. One elephant. Shared.\n\nDaddy looked at Mommy. Mommy had her hand over her heart.\n\n"Ry," she said quietly.\n\n"I know, Shel," he said. "I know." 🌟`, emoji: "🐘", gradient: "linear-gradient(160deg, #4a1a7e 0%, #7a2a8e 50%, #5a1a6e 100%)" }
    ],
    lesson: "When Jesus is in your heart, it makes you want to give.",
    questions: ["What made Ellie decide to give Katie the elephant?", "Zacchaeus changed when Jesus came to his house. What do you think Jesus does to our hearts?", "Is there something you could share with your sister tomorrow that would make her really happy?"],
    prayer: "Dear Jesus,\n\nThank You for changing hearts. You did it for Zacchaeus — and You do it for Ellie Girl and Katers too.\n\nGive them giving hearts. Hearts that think about others first.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 8,
    title: "The Biggest Sorry",
    episode: "Episode 8",
    emoji: "🤍",
    gradientCard: "linear-gradient(135deg, #8e4a1a, #5e1a3e)",
    pages: [
      { text: `Ellie and Katie were playing in the backyard.\n\nIt was a really fun game — until they disagreed on a rule.\n\nEllie got frustrated. And then she said something mean.\n\n"You're being a BABY, Katers. You don't even know how to play right!"\n\nKatie went very still. Her chin wobbled. She sat down in the grass and wouldn't look at Ellie.\n\nEllie stood there. She knew right away she had made a mistake.`, emoji: "💧", gradient: "linear-gradient(160deg, #87CEEB 0%, #5ab4d4 40%, #2a7a9e 100%)" },
      { text: `Mommy saw what happened. She came outside and sat right next to Katie in the grass. She didn't say anything. She just put her arm around her.\n\nThat's what Mommy does. She sits with you first.\n\nEllie came closer. "Mommy... I said something mean."\n\n"I know," Mommy said gently.\n\n"I didn't mean it."\n\n"I know. But Katie doesn't know that yet."`, emoji: "🤱", gradient: "linear-gradient(160deg, #d4786a 0%, #b45a4a 40%, #8e3a2a 100%)" },
      { text: `Daddy came outside and sat in the grass too. All four of them together.\n\n"Ellie Girl," he said. "What happened?"\n\nShe told him everything. She didn't leave the bad parts out.\n\n"Do you know what's brave?" Daddy said. "Saying sorry. It feels hard. But Jesus says when we make something right — that is one of the bravest things we can do."\n\nEllie looked at Katie.\n\n"That kind of brave," Daddy said softly.`, emoji: "💪", gradient: "linear-gradient(160deg, #5e1a3e 0%, #8e2a5e 40%, #6e1a4e 100%)" },
      { text: `Ellie crawled over and sat right in front of her little sister.\n\n"Katers. I'm sorry. I said something mean and I didn't mean it. You're not a baby. You're my favorite person to play with."\n\nKatie was quiet. Then she looked up. Her eyes were a little red.\n\n"You hurt my feelings," she said.\n\n"I know," said Ellie. "I'm really sorry."\n\nKatie looked at her for a long second.\n\nThen she leaned forward and put her head on Ellie's shoulder.`, emoji: "🤍", gradient: "linear-gradient(160deg, #3a1a5e 0%, #6a2a8e 40%, #4a1a6e 100%)" },
      { text: `Ellie wrapped both arms around her little sister.\n\nDaddy looked at them. "That's exactly what Jesus does for US. Every time we mess up and say sorry — Jesus forgives us. Every single time. No matter what."\n\n"Every time?" Katie asked.\n\n"Every time," Daddy said.\n\nMommy came back with lemonade. The argument stayed in the yard.\n\nEverything was okay. 🌟`, emoji: "🍋", gradient: "linear-gradient(160deg, #4a7a1a 0%, #8aaa2a 40%, #FFD700 100%)" }
    ],
    lesson: "Saying sorry is brave — and Jesus forgives us every time.",
    questions: ["Ellie said sorry even when it was hard. How do you think Katie felt when she heard it?", "Daddy said saying sorry is actually BRAVE. Do you think that's true?", "Jesus forgives us every time we mess up. How does it feel to know He always forgives you?"],
    prayer: "Dear Jesus,\n\nThank You that You forgive us. Every time. No matter what.\n\nWhen Ellie Girl says something that hurts, give her the bravery to say sorry fast. When Katers gets hurt, give her a heart that forgives — just like You forgive us.\n\nHelp these sisters always come back to each other.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 9,
    title: "The Gigi Surprise",
    episode: "Episode 9",
    emoji: "🎉",
    gradientCard: "linear-gradient(135deg, #1a6e3e, #0a4e8e)",
    pages: [
      { text: `Mommy had a secret. Ellie could always tell.\n\n"Mommy. You have a secret."\n\n"I don't know what you're talking about."\n\n"Your eyes are doing the sparkly thing."\n\nMommy blinked. "Eat your eggs, Ellie Girl."\n\nKatie looked up. "What sparkly thing?"\n\n"The thing her eyes do when she has a secret!"\n\nDaddy looked at the ceiling. He was not going to survive breakfast.`, emoji: "🍳", gradient: "linear-gradient(160deg, #FFB347 0%, #FF8C42 40%, #d4603a 100%)" },
      { text: `After breakfast, Mommy said: "Shoes on, girls. We're going somewhere."\n\n"WHERE?!" said Ellie.\n\n"Surprise."\n\n"Is it the park?" "No." "The library?" "No." "Is it—" "Shoes, Ellie Girl."\n\nKatie already had her shoes on. On the wrong feet. But on.\n\nSeven minutes later — Ellie saw water through the trees.\n\n"LITTLE CROOKED LAKE!" she yelled.\n\n"GIGI!" Katie yelled.`, emoji: "🚗", gradient: "linear-gradient(160deg, #87CEEB 0%, #4ab4d4 40%, #1a8abe 100%)" },
      { text: `But it wasn't just Gigi and Pops.\n\nThere were BALLOONS! Pink and gold ones on the porch. A special table in the yard. Flowers. A CAKE.\n\nGigi stood in the middle with her arms wide open.\n\n"HAPPY JUST-BECAUSE DAY!"\n\nEllie stopped. "What's a Just-Because Day?"\n\n"It's a day," Gigi said, spinning Katie around, "where we celebrate you for NO reason! Just because we love you. Just because you're HERE. Just because you're OURS!"`, emoji: "🎈", gradient: "linear-gradient(160deg, #1a6e3e 0%, #2a9e5e 40%, #1a8e4e 100%)" },
      { text: `Pops grilled. Gigi made a pink cake with sprinkles. They ate outside by the lake.\n\nEllie talked the whole time. Katie asked for more cake five times. Mommy said "one more piece" five times.\n\nLater, Daddy and Ellie sat on the dock with their feet over the water.\n\n"Daddy, why did Gigi do all that for no reason?"\n\n"Because that's what love does," he said. "It doesn't wait for a reason. It just gives."`, emoji: "🎂", gradient: "linear-gradient(160deg, #0a4e8e 0%, #1a6eae 40%, #0a8ebe 100%)" },
      { text: `"Is that what Jesus is like?" Ellie asked.\n\nDaddy smiled. "Exactly like that. God loved us so much — He GAVE. Not because we were perfect. Just because. Just because we're His."\n\nEllie looked at the lake, all shiny in the sun.\n\n"I want to love people like that," she said.\n\n"Me too, Ellie Girl."\n\nKatie ran down the dock and jumped on both of them. Nobody fell in. Barely. 🌟`, emoji: "🌅", gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a4e8e 100%)" }
    ],
    lesson: "God loves us just because — not because we earned it.",
    questions: ["Gigi threw a whole party just because she loves the girls! How did that make you feel?", "Daddy said God loves us JUST BECAUSE — not because we're perfect. What does that tell you about God?", "Can you think of one way to love someone tomorrow — just because, for no reason at all?"],
    prayer: "Dear Jesus,\n\nThank You that You love us just because. Not because we're perfect. Just because we're Yours.\n\nThank You for Gigi and the way she shows that love. Help Ellie Girl and Katers grow up knowing that's exactly what YOU are like.\n\nLet them fall asleep tonight feeling so loved.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 10,
    title: "The Kindness Contest",
    episode: "Episode 10",
    emoji: "🎨",
    gradientCard: "linear-gradient(135deg, #1a6e4e, #6e1a6e)",
    pages: [
      { text: `Ellie had a great idea. She was going to make Mommy a card.\n\n"I'm making Mommy a card," she announced.\n\n"I'm making Mommy a card TOO," said Katie immediately.\n\n"I said it first."\n\n"We can BOTH make cards," Ellie said. "It's not a competition."\n\nKatie looked at her. "Mine is going to be better."\n\nEllie looked back. "...Okay NOW it's a competition."\n\nDaddy walked in. Two girls. Crayons everywhere. Very serious faces.\n\n"What's happening?" "Kindness contest," Ellie said.\n\nDaddy sat down. "I am absolutely staying for this."`, emoji: "🖍️", gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 40%, #FFD700 100%)" },
      { text: `They drew as fast as they could.\n\nEllie made a rainbow, a heart, and a drawing of Mommy that looked a little bit like a potato with hair. But it was made with love.\n\nKatie made scribbles, a big yellow sun, and wrote MOM in giant letters. She pressed so hard the crayon broke.\n\n"Done!" Katie yelled.\n\n"Done!" Ellie yelled one second later.\n\nThey ran to Mommy and shoved both cards at her at the same time.`, emoji: "🌈", gradient: "linear-gradient(160deg, #6e1a6e 0%, #9e2a9e 40%, #6e1a9e 100%)" },
      { text: `Mommy looked at both cards.\n\nHer eyes got shiny.\n\n"These are the most beautiful things I have ever seen," she said.\n\nAnd she meant every single word.\n\nKatie looked at Ellie. Ellie looked at Katie.\n\nThey both smiled so big.`, emoji: "🥹", gradient: "linear-gradient(160deg, #1a6e4e 0%, #2a9e6e 40%, #1a8e5e 100%)" },
      { text: `Later, Daddy sat with both girls.\n\n"You tried to out-nice each other today. Do you know what that's called?"\n\n"A contest?" Katie said.\n\n"It's called being kind. The Bible says to always look for ways to be kind. Jesus was the kindest person who ever lived. He was always looking for someone to help. Someone to notice. Someone to love."\n\n"So we should look for people to be kind to?" Ellie asked.\n\n"Every single day," Daddy said.`, emoji: "💛", gradient: "linear-gradient(160deg, #4e2a1a 0%, #8e5a2a 40%, #c8960a 100%)" },
      { text: `"And here's a secret," Daddy said. "When you're kind to someone — it makes YOU feel good too."\n\nKatie nodded very seriously. "I felt really good when Mommy cried a little."\n\n"Those were happy tears, Katers." "I know. I made her cry happy. That's the best thing I've ever done."\n\nMommy kept both cards on the fridge.\n\nRight next to each other.\n\nBecause that's what Mommy does. 🌟`, emoji: "❤️", gradient: "linear-gradient(160deg, #8e1a1a 0%, #c84a2a 40%, #FF8C42 100%)" }
    ],
    lesson: "Jesus was kind to everyone — and we can be too.",
    questions: ["Who did Ellie and Katie want to be kind to today? Can you think of someone YOU could be kind to tomorrow?", "Daddy said Jesus was ALWAYS looking for someone to love. What do you think that looked like?", "How does it feel inside when you do something kind for someone?"],
    prayer: "Dear Jesus,\n\nThank You for being the kindest person who ever lived. You always noticed people. You always stopped. You always helped.\n\nHelp Ellie Girl and Katers look for people to be kind to every single day.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 11,
    title: "The Biggest Helper",
    episode: "Episode 11",
    emoji: "🧹",
    gradientCard: "linear-gradient(135deg, #2a6e8e, #6e2a1a)",
    pages: [
      { text: `Mommy was having a hard day.\n\nEllie could tell. Mommy was still in her cozy clothes at lunchtime. She was moving a little slower. She had that tired look in her eyes.\n\nEllie grabbed Katie's arm. "Mommy needs help today."\n\nKatie looked at Mommy. Then back at Ellie. "What do we do?"\n\n"We help," Ellie said. "Come on."`, emoji: "🏠", gradient: "linear-gradient(160deg, #87CEEB 0%, #5ab4d4 40%, #2a7a9e 100%)" },
      { text: `First — they made Mommy's bed.\n\nSort of. The blanket was lumpy and one pillow ended up on the floor. But they tried SO hard.\n\n"Good?" Ellie asked.\n\nKatie looked at it. "Good enough."\n\nThen they picked up the living room. Ellie told Katie where things went. Katie carried them there — sometimes to the right place, sometimes close enough.\n\nThen Ellie had a very big idea. "Let's make Mommy a snack."\n\n"Can we do that?" Katie asked.\n\n"We can do ANYTHING," Ellie said.\n\nKatie thought. "Can anything involve crackers? Because I know where those are."`, emoji: "🛏️", gradient: "linear-gradient(160deg, #2a6e8e 0%, #3a8eae 40%, #2a7e9e 100%)" },
      { text: `Mommy came into the kitchen.\n\nThere were crackers on a plate. A juice box. And two girls standing next to it with the biggest smiles.\n\n"We made you a snack," Ellie announced. "And we cleaned up. And we made your bed."\n\nMommy looked around. Then she looked at her girls.\n\nShe sat right down on the kitchen floor and pulled them both into her arms.\n\n"Thank you," she said quietly. "Thank you, thank you, thank you."\n\nThey stayed like that for a long time.`, emoji: "🧃", gradient: "linear-gradient(160deg, #6e2a1a 0%, #9e4a2a 40%, #c8703a 100%)" },
      { text: `That night, Daddy sat on the edge of the bed.\n\n"I heard what you two did for Mommy today. Do you know what that's called?"\n\n"Helping?" Katie said.\n\n"Serving," Daddy said. "The Bible says Jesus didn't come to be served. He came to SERVE. To help people. To put others first. And today — you did exactly what Jesus did."`, emoji: "✨", gradient: "linear-gradient(160deg, #1a3a6e 0%, #2a5a9e 40%, #1a4a8e 100%)" },
      { text: `Ellie looked at the ceiling, thinking. "So when we help Mommy, we're being like Jesus?"\n\n"Exactly like Jesus," Daddy said.\n\nKatie smiled a sleepy smile. "I want to do it again tomorrow."\n\n"Yeah?" Daddy said.\n\n"Yeah. But maybe something besides crackers."\n\nDaddy kissed her forehead. "We'll work on the menu, Katers." 🌟`, emoji: "🙏", gradient: "linear-gradient(160deg, #2a5a1a 0%, #4a8a2a 40%, #3a7a1a 100%)" }
    ],
    lesson: "Jesus came to serve others — and we can help the people we love.",
    questions: ["Ellie noticed Mommy was having a hard day and wanted to help right away. How can YOU notice when someone needs help?", "Daddy said Jesus came to SERVE — to help and put others first. Can you think of a way Jesus helped someone?", "What is one thing you could do tomorrow to help someone in our family?"],
    prayer: "Dear Jesus,\n\nThank You for coming to serve — not to be served. You put everyone else first. Every single time.\n\nHelp Ellie Girl and Katers see when the people they love need help. Give them hearts that want to serve.\n\nThank You for the way they loved Mommy today. That was You in them, Jesus. We saw it.\n\nNow let them rest. They were such good helpers.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 12,
    title: "The Pops Fishing Trip",
    episode: "Episode 12",
    emoji: "🎣",
    gradientCard: "linear-gradient(135deg, #1a4e6e, #2e6e1a)",
    pages: [
      { text: `Pops had a very important plan.\n\nHe was going to teach Ellie and Katie how to fish.\n\n"Fishing takes patience," he told them on the dock at Little Crooked Lake. "You have to be very still. And very quiet."\n\nEllie Girl looked at him. "I can be quiet."\n\nPops looked at Daddy. Daddy looked at the water.\n\n"She can try," Daddy said diplomatically.`, emoji: "🌅", gradient: "linear-gradient(160deg, #87CEEB 0%, #4ab4d4 40%, #1a8abe 100%)" },
      { text: `They sat on the dock with their fishing poles. Pops showed them how to cast. Katie went first and got her line stuck in a bush. Ellie went second and somehow almost caught Daddy's hat.\n\n"This is harder than it looks," Ellie whispered.\n\n"Most good things are," Pops said.\n\nThen they waited. And waited. And waited.\n\nEllie lasted about four minutes before she started singing quietly to herself.\n\nKatie lasted longer. She sat very still, holding her pole, watching the water like it owed her something.`, emoji: "🎣", gradient: "linear-gradient(160deg, #1a4e6e 0%, #2a7e9e 40%, #1a6e8e 100%)" },
      { text: `Then — Katie's pole bent!\n\n"I GOT ONE!" she yelled.\n\nEveryone jumped. Pops grabbed her hands to help. Ellie cheered so loud the birds flew away.\n\nSlowly, slowly — up came a little fish. Shiny and wiggling.\n\nKatie stared at it with enormous eyes. "I caught it," she whispered. Like she couldn't quite believe it.\n\n"You caught it, Katers," Pops said, smiling so big.`, emoji: "🐟", gradient: "linear-gradient(160deg, #2e6e1a 0%, #4e9e2a 40%, #3e8e1a 100%)" },
      { text: `They let the fish go. Katie watched it swim away and waved.\n\nOn the way back to the house, Daddy put his arm around both girls.\n\n"Do you know what fishing teaches you?"\n\n"Patience?" Ellie guessed.\n\n"Patience," Daddy said. "Waiting without giving up. The Bible says that's important. Good things take time. God doesn't always work fast — but He always works. And He always comes through. Just like that fish came up eventually."\n\nKatie nodded. "I waited SO long."\n\n"You did," Daddy said. "And it was worth it."`, emoji: "🌊", gradient: "linear-gradient(160deg, #1a3e6e 0%, #2a5e9e 40%, #1a4e8e 100%)" },
      { text: `Gigi had dinner ready — Pops had cooked his famous chili.\n\nKatie told the fish story four more times during dinner. It got a little bigger each time.\n\nBy the fourth telling, the fish was approximately the size of a school bus.\n\nPops didn't correct her. He just smiled and let her tell it.\n\nThat's what Pops does. 🌟`, emoji: "🍲", gradient: "linear-gradient(160deg, #FF8C42 0%, #c8603a 40%, #8e3a1a 100%)" }
    ],
    lesson: "God always comes through — good things are worth waiting for.",
    questions: ["Katie waited a long time for that fish. Is there something YOU are waiting for right now?", "Daddy said God doesn't always work fast, but He always comes through. Does that make waiting feel easier?", "What is something good in your life that was worth waiting for?"],
    prayer: "Dear Jesus,\n\nThank You that You always come through. Even when we have to wait. Even when it feels like nothing is happening — You are working.\n\nHelp Ellie Girl and Katers trust You when they have to wait. Help them know that You are always, always worth it.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 13,
    title: "The Didi Workout",
    episode: "Episode 13",
    emoji: "💪",
    gradientCard: "linear-gradient(135deg, #8e1a4e, #1a4e8e)",
    pages: [
      { text: `Didi was doing her morning workout in the backyard in Cleveland.\n\nThis was not unusual. Didi was ALWAYS doing her morning workout.\n\nEllie and Katie watched from the window in their pajamas.\n\n"She's doing a lot of jumping," Katie said.\n\n"She does this every day," Daddy said.\n\nKatie was quiet for a second. "Why?"\n\n"Because she wants to be strong and healthy."\n\nKatie looked at Didi. Looked at her own arms. Flexed as hard as she could.\n\n"I want to do it too."`, emoji: "🏃", gradient: "linear-gradient(160deg, #8e1a4e 0%, #ae3a6e 40%, #6e0a3e 100%)" },
      { text: `Five minutes later, all three of them were in the backyard with Didi.\n\nDidi showed them jumping jacks. Ellie did them perfectly. Katie did something that was more like a very enthusiastic wiggle.\n\n"That's great, Katers!" Didi said.\n\nKatie wiggled harder.\n\nThen push-ups. Ellie did two real ones. Katie lay on the ground and pushed up once and announced she was done.\n\n"That was one," Daddy said.\n\n"It was a good one," Katie said.`, emoji: "⭐", gradient: "linear-gradient(160deg, #1a4e8e 0%, #2a6eae 40%, #1a5e9e 100%)" },
      { text: `Then Didi had them run to the fence and back. Three times.\n\nKatie ran the first one fast. The second one a little slower. The third one she was mostly walking and breathing very dramatically.\n\n"Keep going, Katers!" Ellie cheered, running beside her. "You can do it! I'll run with you!"\n\nShe grabbed Katie's hand.\n\nThey crossed the finish line together.`, emoji: "🏁", gradient: "linear-gradient(160deg, #4e1a8e 0%, #7e2aae 40%, #5e0a9e 100%)" },
      { text: `Daddy high-fived both of them.\n\n"You know what? God made our bodies on purpose. Strong legs to run. Arms to hug. A heart that beats. All of it — God made it. And when we take care of our bodies, we're saying thank you to God for making them so good."\n\n"So working out is like saying thank you to God?" Ellie asked.\n\n"Exactly," Daddy said.\n\nKatie looked at her arms. "I'm going to be SO thankful," she said.`, emoji: "🙏", gradient: "linear-gradient(160deg, #2e1a6e 0%, #5e2a9e 40%, #3e0a8e 100%)" },
      { text: `Didi made them all smoothies after.\n\nKatie drank hers very fast and got a brain freeze and made a face like she had seen something very upsetting.\n\nEllie patted her on the back. "You okay, Katers?"\n\nKatie blinked slowly. "I'm fine. I'm just very thankful right now."\n\nEveryone laughed.\n\nDidi gave her another sip. Slower this time. 🌟`, emoji: "🥤", gradient: "linear-gradient(160deg, #1a6e3e 0%, #2a9e5e 40%, #1a8e4e 100%)" }
    ],
    lesson: "God made your body on purpose — it is a gift to take care of.",
    questions: ["Daddy said God made our bodies on purpose. What is something amazing your body can do?", "Ellie ran beside Katie and held her hand when she was tired. How can YOU encourage someone when they want to give up?", "How can you say 'thank you' to God for giving you a strong, healthy body?"],
    prayer: "Dear Jesus,\n\nThank You for making Ellie Girl and Katers' bodies — their strong legs, their big hugs, their loud laughs.\n\nHelp them take good care of what You made. And remind them that every time they run and jump and move — that's a gift from You.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 14,
    title: "The Wrong Turn",
    episode: "Episode 14",
    emoji: "🗺️",
    gradientCard: "linear-gradient(135deg, #6e4e1a, #1a4e6e)",
    pages: [
      { text: `Daddy had a plan for the drive to Gigi and Pops' house.\n\nThis was not unusual. Daddy always has a plan.\n\nBut today, Daddy made a wrong turn.\n\nMommy saw it happen. She did not say anything for approximately three seconds.\n\n"Ry."\n\n"I see it."\n\n"We were supposed to turn left."\n\n"I know, Shel."\n\n"Your plan said turn left."\n\n"I am aware, Shel. Thank you."`, emoji: "🚗", gradient: "linear-gradient(160deg, #87CEEB 0%, #4ab4d4 40%, #1a8abe 100%)" },
      { text: `They drove down a road nobody recognized.\n\nEllie looked out the window. "Where are we?"\n\n"We're on an adventure," Daddy said.\n\n"That's what people say when they're lost," Ellie said.\n\nKatie pressed her nose to the window. "I see a horse!"\n\nEveryone looked. There was indeed a horse.\n\n"Okay," Ellie said. "The adventure has a horse. That's pretty good."`, emoji: "🐴", gradient: "linear-gradient(160deg, #4e6e1a 0%, #7e9e2a 40%, #5e8e1a 100%)" },
      { text: `Daddy found his way back to the right road. It took about ten extra minutes.\n\nBut on the way, they passed a little farm stand with fresh flowers and tomatoes, and Mommy said "oh, stop!" so Daddy stopped.\n\nThey all got out. Katie picked out flowers for Gigi — big yellow ones. Ellie picked a small pumpkin because she said it looked like it needed a home.\n\n"We never would have found this if we hadn't gotten lost," Mommy said.\n\n"I wasn't lost," Daddy said. "I was exploring."\n\nMommy smiled. "Sure, Ry."`, emoji: "🌻", gradient: "linear-gradient(160deg, #8e6e1a 0%, #c8960a 40%, #FFD700 100%)" },
      { text: `When they got to Gigi's, Katie ran in with the flowers.\n\nGigi's whole face lit up. "For ME?"\n\n"We found them on an adventure," Katie said.\n\nLater, Daddy sat with the girls on the porch.\n\n"You know what? Sometimes in life things don't go the way we planned. We take a wrong turn. Something goes sideways. But God can use even the wrong turns for something good."\n\n"Like the flowers?" Ellie asked.\n\n"Like the flowers," Daddy said.`, emoji: "💛", gradient: "linear-gradient(160deg, #1a4e6e 0%, #2a6e9e 40%, #1a5e8e 100%)" },
      { text: `"The Bible says God works ALL things together for good," Daddy said. "Not just the things that go right. ALL things. Even the detours. Even the wrong turns."\n\nKatie thought about this very carefully.\n\n"So getting lost was actually God's plan?"\n\n"It might have been," Daddy said.\n\nKatie nodded slowly. "God is sneaky."\n\nDaddy laughed so hard. "He's surprising, Katers. There's a difference." 🌟`, emoji: "🌟", gradient: "linear-gradient(160deg, #3e1a6e 0%, #6e2a9e 40%, #4e0a8e 100%)" }
    ],
    lesson: "God can use even wrong turns for something good.",
    questions: ["Daddy made a wrong turn but they found something beautiful! Can you think of a time something went wrong but something good came out of it?", "Daddy said God works ALL things for good — even detours! Does that make you feel better when things don't go as planned?", "What is something surprising and good that happened to you recently?"],
    prayer: "Dear Jesus,\n\nThank You that You are in charge — even when things don't go the way we planned. Thank You that You can use wrong turns and detours and surprises for something good.\n\nHelp Ellie Girl and Katers trust You even when things feel mixed up. Because You always know the way.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 15,
    title: "The New Friend",
    episode: "Episode 15",
    emoji: "👋",
    gradientCard: "linear-gradient(135deg, #1a8e5e, #8e1a5e)",
    pages: [
      { text: `There was a new girl at the park.\n\nShe was sitting by herself on the bench near the swings. She had her arms crossed and was looking at the ground.\n\nEllie saw her right away.\n\n"Daddy," Ellie said quietly, "that girl is by herself."\n\n"I see her," Daddy said.\n\n"She looks sad."\n\n"She might be nervous. Sometimes when we don't know anyone, we feel both."`, emoji: "🛝", gradient: "linear-gradient(160deg, #87CEEB 0%, #5ab4d4 40%, #2a7abe 100%)" },
      { text: `Ellie watched the girl for a minute.\n\nKatie watched Ellie watching the girl.\n\n"Are you going to go say hi?" Katie asked.\n\n"I'm thinking about it."\n\n"It's just saying hi," Katie said. "You say hi to EVERYONE."\n\nThis was true. Ellie did say hi to everyone. Including grocery store workers, strangers' dogs, and one time a fire hydrant.\n\n"Okay," Ellie said. She stood up straight. "Come with me, Katers."\n\nKatie took her hand. "Okay."`, emoji: "💭", gradient: "linear-gradient(160deg, #1a8e5e 0%, #2aae7e 40%, #1a9e6e 100%)" },
      { text: `They walked right up to the girl.\n\n"Hi," Ellie said. "I'm Ellie. This is my sister Katie. Do you want to play with us?"\n\nThe girl looked up. She had been hoping someone would come over. You could tell.\n\n"My name is Lily," she said quietly.\n\n"That's a really pretty name," Ellie said. And she meant it.\n\nKatie was already grabbing Lily's hand. "Come on. We know where the best swings are."`, emoji: "🤝", gradient: "linear-gradient(160deg, #8e1a5e 0%, #ae3a7e 40%, #7e0a4e 100%)" },
      { text: `They played for a long time. By the end, Lily was laughing and running and not looking at the ground anymore.\n\nOn the way to the car, Daddy knelt down.\n\n"Do you know what you just did? You saw someone who felt left out — and you went to them. You included her. That is one of the most Jesus things you can do."\n\n"Jesus included people?" Ellie asked.\n\n"All the time. The people nobody else noticed — Jesus always noticed. He always walked toward them."`, emoji: "🌸", gradient: "linear-gradient(160deg, #4e1a8e 0%, #7e2aae 40%, #5e0a9e 100%)" },
      { text: `Katie was quiet in the car.\n\nThen she said: "Lily was happy when we left."\n\n"She was," Daddy said.\n\n"She wasn't happy when we got there."\n\n"She wasn't," Daddy said.\n\nKatie thought about that for a while.\n\n"We should do that more," she said.\n\nDaddy looked in the rearview mirror at his little girl.\n\n"Yes we should, Katers," he said. "Yes we should." 🌟`, emoji: "💛", gradient: "linear-gradient(160deg, #6e4e1a 0%, #9e7e2a 40%, #c8960a 100%)" }
    ],
    lesson: "Jesus always noticed people who felt left out — and so can we.",
    questions: ["Ellie noticed the girl sitting alone and went to her. How do you think Lily felt when they came over?", "Daddy said Jesus always noticed the people nobody else noticed. Can you think of someone who might feel left out that you could include?", "Is it scary to go say hi to someone new? What makes it easier?"],
    prayer: "Dear Jesus,\n\nThank You for always noticing people. The ones who felt alone. The ones who felt left out. You always saw them.\n\nHelp Ellie Girl and Katers have eyes like that. Eyes that notice. Hearts that go toward people instead of walking past them.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 16,
    title: "The Broken Promise",
    episode: "Episode 16",
    emoji: "🌧️",
    gradientCard: "linear-gradient(135deg, #4e1a6e, #6e3a1a)",
    pages: [
      { text: `Daddy had promised to take the girls to the park after lunch.\n\nEllie and Katie had been thinking about this ALL morning.\n\nBut after lunch, Daddy got a work call. A long one.\n\nEllie stood at the window watching the sunny day go by. Her arms were crossed.\n\nKatie stood next to her. Also arms crossed. They were a united front.`, emoji: "☀️", gradient: "linear-gradient(160deg, #87CEEB 0%, #FFD700 50%, #FF8C42 100%)" },
      { text: `When Daddy finally got off the call, he found them both still at the window.\n\n"Girls. I'm so sorry. That took way longer than I thought."\n\n"You promised," Ellie said quietly.\n\n"I know. And I'm sorry I broke that promise."\n\nEllie turned around. "When people break promises it doesn't feel good."\n\n"You're right," Daddy said. "It doesn't. And I was wrong to promise something I wasn't sure I could keep. That's on me."`, emoji: "📱", gradient: "linear-gradient(160deg, #4e1a6e 0%, #7e2a9e 40%, #5e0a8e 100%)" },
      { text: `Katie had been listening very carefully.\n\n"Are you going to fix it?" she asked.\n\n"I'm going to try," Daddy said. "We can't go to the park today — but I'm taking tomorrow morning completely off. No phone. No calls. Just us. Wherever you want to go."\n\nEllie thought about this. "Anywhere?"\n\n"Anywhere."\n\nKatie looked at Ellie. Ellie looked at Katie.\n\n"Donuts first," Katie said.\n\n"Donuts first," Daddy agreed.`, emoji: "🍩", gradient: "linear-gradient(160deg, #6e3a1a 0%, #9e5a2a 40%, #c8803a 100%)" },
      { text: `That night, Daddy sat with the girls.\n\n"I want to tell you something. People break promises sometimes — even people who love you very much. Daddies mess up. Mommies mess up. Everyone does.\n\nBut there is One who NEVER breaks a promise. Ever. Not once."\n\n"Jesus?" said Ellie.\n\n"Jesus," Daddy said. "Every single thing He ever promised — He kept. He said He would always be with us. He is. He said He would never leave us. He won't. His promises never break."`, emoji: "📖", gradient: "linear-gradient(160deg, #1a3e6e 0%, #2a5e9e 40%, #1a4e8e 100%)" },
      { text: `Katie pulled her blanket up.\n\n"So even when people mess up... Jesus doesn't?"\n\n"Never," Daddy said.\n\n"That's good," Katie said simply. "Because people mess up a lot."\n\n"They do," Daddy said. "Including me. I'm sorry again, girls."\n\nEllie reached over and patted his hand. "It's okay, Daddy. We forgive you."\n\nKatie nodded seriously. "Donuts make it better though." 🌟`, emoji: "🌟", gradient: "linear-gradient(160deg, #3e1a5e 0%, #6e2a8e 40%, #4e0a7e 100%)" }
    ],
    lesson: "People mess up — but Jesus never breaks a promise.",
    questions: ["How did Ellie and Katie feel when Daddy broke his promise? Have you ever felt that way?", "Daddy said Jesus never breaks a promise. Not even one! How does that make you feel?", "Ellie forgave Daddy even though he messed up. Is it easy or hard to forgive someone? Why?"],
    prayer: "Dear Jesus,\n\nThank You that You never break a promise. Not ever. Not once.\n\nWhen people let Ellie Girl and Katers down — and they will, because everyone messes up sometimes — help them remember that YOU never will.\n\nAnd help them be quick to forgive, just like You are quick to forgive us.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 17,
    title: "The Big Church Day",
    episode: "Episode 17",
    emoji: "⛪",
    gradientCard: "linear-gradient(135deg, #1a3e8e, #8e6e1a)",
    pages: [
      { text: `Sunday morning at the Badowski house was an event.\n\nDaddy was up early. He had a plan. Everyone would be dressed, fed, and in the car by 9:15. Sharp.\n\nMommy was getting Katie's hair ready. Katie was not cooperating.\n\n"Hold still, Katers."\n\n"It pulls."\n\n"Beauty takes sacrifice."\n\n"I don't want to sacrifice," Katie said.\n\nEllie walked in already fully dressed, spinning in her church dress. "How do I look?"\n\n"Beautiful," Mommy said. "Now go ask Daddy where your shoes are."`, emoji: "👗", gradient: "linear-gradient(160deg, #FFD700 0%, #c8960a 40%, #8e6e1a 100%)" },
      { text: `They made it. 9:22. Only seven minutes late.\n\nDaddy considered this a win.\n\nAt church, the music started and Ellie grabbed Mommy's hand and started swaying. She knew some of the words and sang them VERY loudly and made up the rest just as loudly.\n\nKatie stood very still next to Daddy, watching everything with enormous eyes. All the people. All the singing. The big room.\n\n"Daddy," she whispered. "Why is everyone singing?"\n\n"Because they love Jesus," Daddy whispered back.\n\nKatie looked around at all the singing people. "Me too," she said simply.`, emoji: "🎵", gradient: "linear-gradient(160deg, #1a3e8e 0%, #2a5eae 40%, #1a4e9e 100%)" },
      { text: `After church, they went to the lobby and someone gave the girls a donut.\n\nThis was Katie's favorite part. She had strong feelings about church donuts.\n\n"Daddy," she said with her mouth full, "can we come back next week?"\n\n"Every week," Daddy said.\n\n"Because of Jesus?"\n\n"Because of Jesus. And the donuts."\n\nKatie nodded. "Good reasons."`, emoji: "🍩", gradient: "linear-gradient(160deg, #8e3a1a 0%, #c8601a 40%, #FF8C42 100%)" },
      { text: `On the way home, Daddy asked: "What did you learn today?"\n\nEllie thought. "That Jesus loves everyone."\n\n"That's right. What about you, Katers?"\n\nKatie was quiet for a second.\n\n"That there are a LOT of people who love Jesus," she said. "Like, a really lot."\n\n"There are," Daddy said. "And when we come to church, we get to be together with all of them. The Bible says we need each other. We're supposed to do life together."`, emoji: "👨‍👩‍👧‍👧", gradient: "linear-gradient(160deg, #2e5e1a 0%, #4e8e2a 40%, #3e7e1a 100%)" },
      { text: `That night, Ellie was still humming one of the songs from church.\n\nKatie listened. "What song is that?"\n\n"I don't know the name," Ellie said. "But it's about how Jesus is good."\n\n"Sing it again."\n\nEllie sang it again. Just the little bit she knew. Over and over until Katie's eyes were drooping.\n\nDaddy stood in the doorway listening.\n\nThis. This right here. This was everything. 🌟`, emoji: "🌙", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #0a0a1e 100%)" }
    ],
    lesson: "We need each other — God made us to do life together.",
    questions: ["Why does our family go to church? What is your favorite part?", "Daddy said the Bible tells us we need each other. Why do you think God made us to be together instead of alone?", "Katie said she loved seeing all the people who love Jesus. Does it make you feel good to know so many people love Jesus too?"],
    prayer: "Dear Jesus,\n\nThank You for church. Thank You for giving us a whole big family of people who love You too.\n\nHelp Ellie Girl and Katers love going to Your house. Help them learn more about You every week.\n\nAnd thank You that none of us have to do life alone.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 18,
    title: "The Scary Doctor",
    episode: "Episode 18",
    emoji: "🏥",
    gradientCard: "linear-gradient(135deg, #1a6e8e, #8e1a1a)",
    pages: [
      { text: `It was checkup day.\n\nEllie Girl was not worried about this at all. She had been to the doctor many times. She was an expert.\n\nKatie was also not worried.\n\nUntil Mommy mentioned the word "shot."\n\nKatie went very still.\n\n"How big is the shot?" she asked quietly.\n\n"Very small," Mommy said.\n\n"How small?"\n\n"Tiny."\n\nKatie looked at Mommy for a long time. "Is that the truth or is that a mom thing you say?"`, emoji: "🏥", gradient: "linear-gradient(160deg, #87CEEB 0%, #5ab4d4 40%, #1a7a9e 100%)" },
      { text: `In the waiting room, Katie sat very close to Ellie.\n\nEllie put her arm around her. "It's okay, Katers. I've had lots of shots. It's fast."\n\n"Does it hurt?"\n\nEllie thought about being honest vs. being helpful. "A tiny bit. But then it's over and you get a sticker."\n\nKatie considered this. "What kind of sticker?"\n\n"Usually a good one."\n\nKatie nodded slowly. "Okay. I can do it for a good sticker."`, emoji: "🪑", gradient: "linear-gradient(160deg, #1a6e8e 0%, #2a8eae 40%, #1a7e9e 100%)" },
      { text: `When it was Katie's turn, she held Mommy's hand and Ellie's hand at the same time.\n\nThe doctor was very nice. She counted to three.\n\nKatie squeezed both hands hard.\n\nAnd then it was done.\n\nKatie blinked. "That's it?"\n\n"That's it," the doctor said.\n\nKatie looked at the tiny bandage on her arm. "I thought it would be worse."\n\n"Most scary things are like that," Mommy said gently.`, emoji: "💉", gradient: "linear-gradient(160deg, #8e1a1a 0%, #ae3a2a 40%, #7e0a0a 100%)" },
      { text: `In the car, Katie had her sticker on her shirt. It was a star. She had chosen wisely.\n\nDaddy was driving. "How'd it go, Katers?"\n\n"I was brave," she said.\n\n"You were very brave," Mommy agreed.\n\n"Ellie held my hand."\n\n"I heard," Daddy said. "That's what big sisters do."\n\nEllie smiled. Katie looked at her star sticker. "Daddy, was Jesus ever scared?"`, emoji: "⭐", gradient: "linear-gradient(160deg, #4e3e1a 0%, #8e6e2a 40%, #c8960a 100%)" },
      { text: `Daddy thought about that carefully.\n\n"Yes. The Bible says Jesus felt scared sometimes too. He was human just like us. But even when He was scared — He trusted His Father. He held on."\n\nKatie looked out the window.\n\n"So even Jesus needed someone to hold on to?"\n\n"Even Jesus," Daddy said. "And that's okay. Being scared doesn't mean you're not brave. Being brave means you do it even when you ARE scared. Just like you did today, Katers."\n\nKatie looked at her sticker one more time. "I'm going to do it again next year," she said. "I'll be ready." 🌟`, emoji: "💪", gradient: "linear-gradient(160deg, #1a3e6e 0%, #2a5e9e 40%, #1a4e8e 100%)" }
    ],
    lesson: "Being brave means doing it even when you're scared — Jesus helps us.",
    questions: ["Katie was scared but she did it anyway. What does THAT tell you about what brave really means?", "Daddy said even Jesus felt scared sometimes, but He trusted God. Does it help to know that Jesus understands being scared?", "What is something you're a little scared of? Can you ask Jesus to help you be brave?"],
    prayer: "Dear Jesus,\n\nThank You that You understand being scared. You felt it too. And even then, You trusted Your Father.\n\nWhen Ellie Girl and Katers feel scared, remind them that brave doesn't mean not scared. Brave means doing it anyway — and knowing YOU are right there with them.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 19,
    title: "The Rainy Day Project",
    episode: "Episode 19",
    emoji: "🌧️",
    gradientCard: "linear-gradient(135deg, #2a4e6e, #6e2a4e)",
    pages: [
      { text: `It was raining outside. All day.\n\nThis was a problem because Daddy had promised a bike ride.\n\nEllie and Katie stood at the window watching the rain.\n\n"It's ruining everything," Ellie said dramatically.\n\n"Everything," Katie agreed.\n\nMommy came in. "I have an idea."\n\n"Is it going outside?" Ellie asked.\n\n"No."\n\n"Then it's not the same," Ellie said.\n\n"Give me five minutes," Mommy said.`, emoji: "🌧️", gradient: "linear-gradient(160deg, #87CEEB 0%, #5a8ab4 40%, #2a4e8e 100%)" },
      { text: `Five minutes later, the kitchen table was covered in supplies.\n\nPaper. Paint. Glue. Glitter. Stickers. Old magazines. Scissors.\n\nEllie's eyes went wide. "What is happening?"\n\n"We're making care packages," Mommy said. "For people who need some cheering up."\n\n"Who?" Katie asked.\n\n"Mrs. Gentry next door just got out of the hospital. And Daddy's friend Tim is having a hard week. And Gigi said she's been feeling a little lonely."\n\nKatie picked up a glitter shaker. "Let's go."`, emoji: "🎨", gradient: "linear-gradient(160deg, #6e2a4e 0%, #9e3a6e 40%, #7e1a5e 100%)" },
      { text: `They worked for an HOUR.\n\nEllie made cards with careful drawings and words she sounded out herself.\n\nKatie used approximately half the glitter on one card for Gigi. It was incredible. It was also going to be in their hair for three days.\n\nMommy helped them put little treats in bags — some candy, some stickers, a small flower from the garden.\n\n"These are the best things I've ever made," Katie announced.\n\n"You say that every time you make something," Ellie said.\n\n"And every time I'm right."`, emoji: "✂️", gradient: "linear-gradient(160deg, #2a4e6e 0%, #3a6e9e 40%, #2a5e8e 100%)" },
      { text: `They put on their rain boots and raincoats and walked next door to Mrs. Gentry's house first.\n\nWhen Mrs. Gentry opened the door and saw the package, her eyes went bright.\n\n"For me?" she said. "Oh, you sweet girls."\n\nKatie beamed. Ellie beamed. They both stood a little taller.\n\nOn the walk back, Daddy was waiting at the door. "How'd that feel?"\n\n"Really good," Ellie said.\n\n"Better than the bike ride?" Daddy asked.\n\nEllie thought about it. "Different good," she said carefully. "A deeper good."`, emoji: "🌻", gradient: "linear-gradient(160deg, #4e6e1a 0%, #7e9e2a 40%, #5e8e1a 100%)" },
      { text: `That night, Daddy talked about it at bedtime.\n\n"What you did today — thinking about OTHER people when YOU were disappointed — that's not easy. But the Bible says real love doesn't just think about itself. It looks around and asks: who needs help right now?"\n\n"Gigi is going to love all that glitter," Katie said.\n\n"She really is," Daddy said.\n\nKatie smiled. "I put extra on hers because she's my favorite grandma."\n\n"You have two grandmas," Ellie said.\n\n"I know," Katie said. "They're both my favorite." 🌟`, emoji: "💛", gradient: "linear-gradient(160deg, #6e4e1a 0%, #9e7e2a 40%, #c8960a 100%)" }
    ],
    lesson: "Real love looks around and asks — who needs help right now?",
    questions: ["Ellie and Katie were disappointed about the bike ride, but they made something good out of a rainy day. Can you think of a time something disappointing turned into something good?", "Daddy said real love looks around and asks who needs help. Who could YOU do something kind for this week?", "How did it feel to give the packages away? Did it make YOUR day better too?"],
    prayer: "Dear Jesus,\n\nThank You for teaching us that love looks outward. That even on hard days — rainy days, disappointing days — we can still find someone to love.\n\nHelp Ellie Girl and Katers always have eyes that look around for who needs them.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 20,
    title: "The Night Sky",
    episode: "Episode 20",
    emoji: "🌠",
    gradientCard: "linear-gradient(135deg, #0a0a3e, #1a3e6e)",
    pages: [
      { text: `It was past bedtime.\n\nBut Daddy had a plan. (He always has a plan.)\n\nHe came into the room, flipped on the light, and said: "Shoes on. We're going outside."\n\nEllie sat straight up. "It's nighttime."\n\n"I know."\n\n"We're supposed to be sleeping."\n\n"I know. Shoes on."\n\nKatie was already putting on her shoes. On the right feet this time. She'd been practicing.`, emoji: "🌙", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0a4e 50%, #0a1428 100%)" },
      { text: `They went out to the backyard in their pajamas.\n\nDaddy had laid a big blanket on the grass. He lay down in the middle. One arm out on each side.\n\n"Come here," he said.\n\nEllie tucked in on his left. Katie tucked in on his right.\n\nAll three of them looked up.\n\nThe sky was FULL of stars. More than they could count. More than they could imagine.\n\n"Whoa," Ellie said quietly.\n\n"Whoa," Katie said, quieter.`, emoji: "🌟", gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0a5e 40%, #0a1438 100%)" },
      { text: `"Did you know," Daddy said, "that God knows every single star? Every one. He named them all."\n\n"There are too many to name," Ellie said.\n\n"Not for God," Daddy said. "The Bible says He calls them each by name. Every star. And the same God who made all of that—" he pointed up at the sky "—knows YOUR name. Knows YOUR face. Thinks about YOU."\n\nKatie stared up. "All those stars and He still thinks about me?"\n\n"You're MORE important to Him than all of them," Daddy said.`, emoji: "⭐", gradient: "linear-gradient(160deg, #0a0a3e 0%, #1a1a6e 40%, #0a0a2e 100%)" },
      { text: `Ellie was quiet for a long time.\n\nThen she said: "Daddy, why did God make so many stars if He only needed a few?"\n\nDaddy smiled. "I think because He wanted to show us something about Himself. That He's big. Bigger than we can imagine. And wild. And creative. And showing off — just a little."\n\nKatie laughed. "God shows off?"\n\n"I think sometimes He does," Daddy said. "Just to remind us how good He is."`, emoji: "🔭", gradient: "linear-gradient(160deg, #1a0a3e 0%, #3a1a6e 40%, #1a0a5e 100%)" },
      { text: `They stayed outside until it got cold.\n\nMommy brought blankets out without being asked. Because that's what Mommy does.\n\nEllie fell half asleep looking at the stars. Daddy carried her in.\n\nKatie walked in herself. She stopped at the door and looked back up at the sky one more time.\n\n"Goodnight, stars," she said.\n\nThen quietly, like it was just for her and God:\n\n"Thanks for making me." 🌟`, emoji: "🌙", gradient: "linear-gradient(160deg, #050510 0%, #0a0a2e 50%, #050518 100%)" }
    ],
    lesson: "God made every star — and He knows YOUR name more than all of them.",
    questions: ["God knows every star by name AND knows your name. How big does that make you feel inside?", "Daddy said God made so many stars to show us how big and creative He is. What is your favorite thing God made?", "Katie said 'thanks for making me' to God. Can you say that too, right now?"],
    prayer: "Dear Jesus,\n\nYou made every star. Every one. You named them all.\n\nAnd You know Ellie Girl's name. And Katers' name. And You think about them more than all those stars put together.\n\nThank You for making them. Thank You that they are Yours.\n\nHelp them fall asleep tonight knowing how big You are — and how close You are at the very same time.\n\nWe love You so much.\n\nAmen. 🙏"
  },
  {
    id: 21,
    title: "The Last Piece",
    episode: "Episode 21",
    emoji: "🍕",
    gradientCard: "linear-gradient(135deg, #8e3a1a, #1a6e3e)",
    pages: [
      { text: `There was one piece of pizza left.\n\nEllie saw it. Katie saw it. They both saw each other see it.\n\nThis was a problem.\n\nEllie was older. Katie was quicker. It was anybody's game.\n\nDaddy watched this play out from across the table. He did not intervene. He was curious.\n\nMommy watched too. "Shel, should we—" "Not yet," she said. "Give it a second."`, emoji: "🍕", gradient: "linear-gradient(160deg, #8e3a1a 0%, #c8601a 40%, #FF8C42 100%)" },
      { text: `Katie reached for the pizza.\n\nThen stopped.\n\nShe looked at Ellie.\n\nEllie looked at Katie.\n\nA long moment passed.\n\n"You can have it," Katie said.\n\nEllie blinked. "Really?"\n\n"You're bigger. You're probably more hungry."\n\nEllie looked at the pizza. Then at her sister. Then back at the pizza.\n\n"Let's split it," Ellie said.\n\nKatie smiled. "Okay."`, emoji: "🤝", gradient: "linear-gradient(160deg, #1a6e3e 0%, #2a9e5e 40%, #1a8e4e 100%)" },
      { text: `Daddy cut the piece in half. Perfectly even. He was a fair man.\n\nThey ate their half pieces.\n\nEllie was done in two bites. She looked at her plate. "That was so good."\n\nKatie had saved hers a little longer. She held it out to Ellie. "You can have the last bite of mine."\n\nEllie stared at her. "You're giving ME the last bite?"\n\n"You gave me the whole piece first," Katie said simply. "It's my turn."`, emoji: "🍽️", gradient: "linear-gradient(160deg, #4e1a8e 0%, #7e2aae 40%, #5e0a9e 100%)" },
      { text: `Daddy looked at Mommy. Mommy looked at Daddy.\n\n"Ry," she said quietly.\n\n"I know, Shel."\n\nLater, he sat with both girls.\n\n"What happened at dinner was really special. When one of you gave — the other one wanted to give back. That's how love works. It's contagious. It spreads."\n\n"Like a cold?" Katie asked.\n\n"Like a GOOD cold," Daddy said.`, emoji: "💛", gradient: "linear-gradient(160deg, #6e4e1a 0%, #9e7e2a 40%, #c8960a 100%)" },
      { text: `"The Bible says love is not selfish," Daddy said. "It doesn't think about itself all the time. And when we give — it makes other people want to give too. You both showed that tonight over one piece of pizza."\n\nEllie smiled. "We're pretty good at love."\n\n"You are," Daddy said. He kissed them both. "Now sleep. You've earned it."\n\nKatie was already closing her eyes.\n\n"Daddy?" she said quietly.\n\n"Yeah, Katers?"\n\n"Can we have pizza tomorrow?"\n\nDaddy laughed. "Goodnight, Katers." 🌟`, emoji: "🌙", gradient: "linear-gradient(160deg, #050510 0%, #0a0a2e 50%, #080e20 100%)" }
    ],
    lesson: "Love is not selfish — when we give, it spreads.",
    questions: ["Katie gave up the pizza first, then Ellie gave some back. Why do you think giving makes OTHER people want to give too?", "Daddy said love spreads like a good cold! Can you think of a time someone was kind to you and it made you want to be kind to someone else?", "What is something you could give up or share tomorrow — just because you love someone?"],
    prayer: "Dear Jesus,\n\nThank You for love that spreads. Thank You that when Ellie gives, it makes Katie want to give — and when Katie gives, it makes Ellie want to give more.\n\nHelp them always be the one who gives first. Help them always think of each other before themselves.\n\nThat's how YOU loved us, Jesus. You gave first. Every time.\n\nWe love You.\n\nAmen. 🙏"
  }
];

function StarIcon() {
  return (<svg width="15" height="15" viewBox="0 0 24 24" fill="#FFD700"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>);
}

function SceneIllustration({ emoji, gradient }) {
  return (
    <div style={{ width: "100%", aspectRatio: "16/9", borderRadius: "16px", background: gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "64px", boxShadow: "0 8px 32px rgba(0,0,0,0.35)", border: "2px solid rgba(255,255,255,0.12)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 40% 35%, rgba(255,255,255,0.09) 0%, transparent 65%)" }} />
      <span style={{ filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.5))", zIndex: 1, lineHeight: 1 }}>{emoji}</span>
    </div>
  );
}

function renderText(text) {
  return text.split('\n\n').map((para, i) => (
    <p key={i} style={{ fontFamily: "'Georgia', serif", fontSize: "17px", lineHeight: "1.8", color: "#F0E6FF", margin: "0 0 16px" }}>
      {para.split(/(\*[^*]+\*)/).map((chunk, j) =>
        chunk.startsWith('*') && chunk.endsWith('*')
          ? <em key={j} style={{ color: "#FFD700", fontStyle: "italic", fontWeight: "600" }}>{chunk.slice(1, -1)}</em>
          : chunk
      )}
    </p>
  ));
}

const BG = "linear-gradient(180deg, #100520 0%, #1e0a40 50%, #080e20 100%)";

function BackButton({ onClick, label = "← Back" }) {
  return (<button onClick={onClick} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "10px", color: "#C9A8FF", padding: "8px 14px", fontSize: "14px", cursor: "pointer", fontFamily: "'Georgia', serif" }}>{label}</button>);
}

function TopBar({ left, center, right }) {
  return (
    <div style={{ width: "100%", padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.08)", boxSizing: "border-box" }}>
      <div style={{ minWidth: "70px" }}>{left}</div>
      <div style={{ textAlign: "center", flex: 1 }}>{center}</div>
      <div style={{ minWidth: "70px", textAlign: "right" }}>{right}</div>
    </div>
  );
}

function PrayerScreen({ story, onBack, onDone }) {
  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TopBar left={<BackButton onClick={onBack} />} center={<div><div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div><div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Bedtime Prayer</div></div>} />
      <div style={{ maxWidth: "480px", width: "100%", padding: "28px 20px 40px", display: "flex", flexDirection: "column", gap: "20px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "52px", marginBottom: "10px" }}>🙏</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#FFD700", fontSize: "21px", fontWeight: "bold" }}>Tonight's Prayer</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#9B7FD4", fontSize: "13px", fontStyle: "italic", marginTop: "5px" }}>Read aloud over Ellie Girl & Katers</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "26px 24px", border: "1px solid rgba(255,215,0,0.18)", boxSizing: "border-box" }}>
          {story.prayer.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontFamily: "'Georgia', serif", fontSize: "17px", lineHeight: "1.85", color: para.startsWith("Amen") ? "#FFD700" : "#F0E6FF", fontWeight: para.startsWith("Amen") ? "700" : "400", margin: "0 0 14px", textAlign: para.startsWith("Amen") ? "center" : "left" }}>{para}</p>
          ))}
        </div>
        <button onClick={onDone} style={{ background: "linear-gradient(135deg, #c8960a, #FFD700)", border: "none", borderRadius: "14px", color: "#1a0a2e", padding: "16px", fontSize: "17px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(255,215,0,0.3)" }}>Sweet Dreams ⭐</button>
      </div>
    </div>
  );
}

function QuestionsScreen({ story, onBack, onNext }) {
  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TopBar left={<BackButton onClick={onBack} />} center={<div><div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div><div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Talk It Over</div></div>} />
      <div style={{ maxWidth: "480px", width: "100%", padding: "28px 20px 40px", display: "flex", flexDirection: "column", gap: "14px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "46px", marginBottom: "8px" }}>💬</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#FFD700", fontSize: "20px", fontWeight: "bold" }}>Talk It Over</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#C9A8FF", fontSize: "13px", fontStyle: "italic", marginTop: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "10px 16px" }}>
            Tonight's lesson: <span style={{ color: "#FFD700" }}>{story.lesson}</span>
          </div>
        </div>
        {story.questions.map((q, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.07)", borderRadius: "16px", padding: "18px 20px", border: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <div style={{ width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, #5a28a0, #8a40c0)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "14px", fontFamily: "'Georgia', serif", fontWeight: "bold" }}>{i + 1}</div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "16px", lineHeight: "1.65", color: "#F0E6FF", margin: 0 }}>{q}</p>
          </div>
        ))}
        <button onClick={onNext} style={{ background: "linear-gradient(135deg, #5a28a0, #8a40c0)", border: "none", borderRadius: "14px", color: "#fff", padding: "16px", fontSize: "16px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", marginTop: "6px", boxShadow: "0 4px 20px rgba(90,40,160,0.45)" }}>Bedtime Prayer 🙏</button>
      </div>
    </div>
  );
}

function StoryScreen({ story, onBack }) {
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState("story");
  const currentPage = story.pages[page];
  const isLast = page === story.pages.length - 1;

  if (phase === "questions") return <QuestionsScreen story={story} onBack={() => setPhase("story")} onNext={() => setPhase("prayer")} />;
  if (phase === "prayer") return <PrayerScreen story={story} onBack={() => setPhase("questions")} onDone={onBack} />;

  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
      <TopBar
        left={<BackButton onClick={onBack} />}
        center={<div><div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div><div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>{story.title}</div></div>}
        right={<span style={{ color: "#7B5FA4", fontSize: "13px", fontFamily: "'Georgia', serif" }}>{page + 1} / {story.pages.length}</span>}
      />
      <div style={{ display: "flex", gap: "6px", padding: "12px 0 14px", alignItems: "center" }}>
        {story.pages.map((_, i) => (<div key={i} onClick={() => setPage(i)} style={{ width: i === page ? "24px" : "8px", height: "8px", borderRadius: "4px", background: i === page ? "#FFD700" : i < page ? "rgba(255,215,0,0.35)" : "rgba(255,255,255,0.2)", cursor: "pointer", transition: "all 0.3s ease" }} />))}
      </div>
      <div style={{ width: "100%", maxWidth: "480px", padding: "0 18px 18px", boxSizing: "border-box" }}>
        <SceneIllustration emoji={currentPage.emoji} gradient={currentPage.gradient} />
      </div>
      <div style={{ maxWidth: "480px", width: "100%", padding: "0 18px", flex: 1, boxSizing: "border-box" }}>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "22px 22px 6px", border: "1px solid rgba(255,255,255,0.1)" }}>
          {renderText(currentPage.text)}
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px", padding: "20px 18px 0", width: "100%", maxWidth: "480px", boxSizing: "border-box" }}>
        {page > 0 && (<button onClick={() => setPage(p => p - 1)} style={{ flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "14px", color: "#C9A8FF", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif" }}>← Back</button>)}
        {!isLast
          ? <button onClick={() => setPage(p => p + 1)} style={{ flex: page > 0 ? 2 : 1, background: "linear-gradient(135deg, #5a28a0, #8a40c0)", border: "none", borderRadius: "14px", color: "#fff", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(90,40,160,0.45)" }}>Next Page →</button>
          : <button onClick={() => setPhase("questions")} style={{ flex: page > 0 ? 2 : 1, background: "linear-gradient(135deg, #c8960a, #FFD700)", border: "none", borderRadius: "14px", color: "#1a0a2e", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(255,215,0,0.3)" }}>Talk About It 💬</button>}
      </div>
    </div>
  );
}

function Stars() {
  const [stars] = useState(() => Array.from({ length: 55 }, (_, i) => ({ id: i, size: Math.random() * 2.2 + 0.8, top: Math.random() * 68, left: Math.random() * 100, dur: Math.random() * 3 + 1.5, delay: Math.random() * 2.5 })));
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <style>{`@keyframes tw{from{opacity:0.1}to{opacity:0.9}} @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      {stars.map(s => (<div key={s.id} style={{ position: "absolute", width: s.size + "px", height: s.size + "px", background: "#fff", borderRadius: "50%", top: s.top + "%", left: s.left + "%", opacity: 0.25, animation: `tw ${s.dur}s ease-in-out ${s.delay}s infinite alternate` }} />))}
    </div>
  );
}

export default function App() {
  const [activeStory, setActiveStory] = useState(null);
  if (activeStory) return <StoryScreen story={activeStory} onBack={() => setActiveStory(null)} />;

  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "56px" }}>
      <Stars />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "48px 24px 30px" }}>
        <div style={{ fontSize: "60px", marginBottom: "6px", animation: "fl 4s ease-in-out infinite", display: "inline-block" }}>🌙</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", letterSpacing: "3.5px", color: "#6a4a94", textTransform: "uppercase", marginBottom: "12px" }}>A Bedtime Story Series</div>
        <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "31px", fontWeight: "bold", color: "#FFD700", margin: "0 0 10px", lineHeight: 1.22, textShadow: "0 0 40px rgba(255,215,0,0.3)" }}>The Adventures of<br />Ellie & Katie</h1>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#B090E0", fontStyle: "italic", margin: 0 }}>Sisters · Best Friends · Forever Teammates ✨</p>
      </div>
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px", padding: "0 18px", display: "flex", flexDirection: "column", gap: "12px", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#6a4a94", letterSpacing: "2.5px", textTransform: "uppercase", paddingLeft: "4px", marginBottom: "2px" }}>📖 All Stories</div>
        {stories.map(story => (
          <button key={story.id} onClick={() => setActiveStory(story)} style={{ background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)", borderRadius: "20px", padding: "18px", cursor: "pointer", textAlign: "left", width: "100%", transition: "background 0.2s, transform 0.15s", boxSizing: "border-box" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.055)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: story.gradientCard, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0, boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>{story.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#9060C0", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{story.episode}</div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "17px", fontWeight: "bold", color: "#EEE0FF", marginBottom: "5px", lineHeight: 1.2 }}>{story.title}</div>
                <div style={{ display: "flex", gap: "2px" }}>{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              </div>
              <div style={{ color: "#6a4a94", fontSize: "20px", flexShrink: 0 }}>›</div>
            </div>
            <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Georgia', serif", fontSize: "12px", color: "#9060C0", fontStyle: "italic", lineHeight: 1.4 }}>💡 {story.lesson}</div>
          </button>
        ))}
        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px dashed rgba(255,255,255,0.09)", borderRadius: "20px", padding: "22px", textAlign: "center" }}>
          <div style={{ fontSize: "28px", marginBottom: "7px" }}>🌙</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#3d2a5e", fontSize: "14px", fontStyle: "italic" }}>Episode 22 coming tonight at 7:30 PM...</div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1, marginTop: "44px", textAlign: "center", padding: "0 32px" }}>
        <div style={{ fontSize: "20px", marginBottom: "8px" }}>🙏</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "13px", color: "#3d2a5e", fontStyle: "italic", lineHeight: 1.7 }}>
          "Jesus said, 'Let the little children come to me.'"<br /><span style={{ fontSize: "11px" }}>— Matthew 19:14</span>
        </div>
      </div>
    </div>
  );
}
