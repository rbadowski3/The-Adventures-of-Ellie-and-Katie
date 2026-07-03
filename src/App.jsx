import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "The Lost Fireflies",
    episode: "Episode 1",
    emoji: "✨",
    gradientCard: "linear-gradient(135deg, #1a0a3e, #2d5a1a)",
    pages: [
      {
        text: `It was nighttime, and something was wrong.\n\nEllie grabbed Katie's hand. "Katers — the fireflies are gone!"\n\nEvery night, little lights would blink and dance in the yard. But tonight? Just dark.\n\nKatie looked around. "Did we break them?"\n\n"You can't break fireflies, Katie."\n\n"I broke a cracker once just by looking at it."\n\nEllie stared at her. "That's different."`,
        emoji: "🌑",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 50%, #1a2a1a 100%)"
      },
      {
        text: `Daddy came outside. He had just finished working out — so he was a little sweaty and a lot ready to help.\n\n"What's the situation, team?"\n\n"THE FIREFLIES ARE GONE!" Ellie said.\n\n"ALL of them?" Daddy gasped.\n\n"ALL of them," said Katie, very seriously.\n\nDaddy cracked his knuckles. "I have a plan."\n\nFrom inside, Mommy called out: "Ry, do you actually have a plan?"\n\nDaddy pointed at the yard. "Everyone move."`,
        emoji: "💪",
        gradient: "linear-gradient(160deg, #0d1f0d 0%, #1a3a1a 50%, #2d1b69 100%)"
      },
      {
        text: `They went into the yard together. Ellie led the way. Katie held her hand and stepped wherever Ellie stepped.\n\nThen Ellie saw it — a little jar, tipped over by the big tree. A few fireflies were resting inside. They weren't gone. They were just stuck!\n\n"Katers! I found them!" Ellie whispered. "We can fix it. Together."\n\nKatie's eyes went big. "Together," she said.`,
        emoji: "🫙",
        gradient: "linear-gradient(160deg, #1a1a0a 0%, #2a2a0d 40%, #1a3a1a 100%)"
      },
      {
        text: `Ellie held the jar. Katie helped tip it. Slowly, slowly — and then the fireflies floated free! Up and up, blinking and glowing. The whole yard lit up again.\n\n"WE DID IT!" Katie yelled. She grabbed Ellie and they spun around laughing.\n\nDaddy watched them and smiled the biggest smile.`,
        emoji: "🌟",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d5a1a 40%, #4a7a2a 100%)"
      },
      {
        text: `Daddy got quiet and looked at all the little lights.\n\n"Do you know who made every single firefly?" he said.\n\n"Jesus?" said Ellie.\n\n"Jesus," Daddy nodded. "And the same Jesus who made every firefly and every star — He knows YOUR name. He loves YOU more than all of this."\n\nKatie looked up. "Even me?"\n\nDaddy kissed her forehead. "Especially you, Katers."\n\nEllie took Daddy's hand. "I'm glad Jesus made us."\n\n"Me too, Ellie Girl," Daddy said. "Me too." 🌟`,
        emoji: "🙏",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2d5a1a 100%)"
      }
    ],
    lesson: "Jesus made you and knows your name — you are so loved.",
    questions: [
      "Who made the fireflies, the stars, and YOU?",
      "Jesus knows your name! What do you think it feels like to know Jesus is thinking about you?",
      "Ellie and Katie fixed the jar together. Can you think of a time you two helped each other?"
    ],
    prayer: "Dear Jesus,\n\nThank You for making fireflies and stars and the whole beautiful world. But most of all, thank You for making Ellie Girl and Katers.\n\nYou know their names. You love them so much. Help them feel that love tonight as they sleep.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 2,
    title: "The Muddy Mountain",
    episode: "Episode 2",
    emoji: "🥾",
    gradientCard: "linear-gradient(135deg, #4a7a2a, #8B6914)",
    pages: [
      {
        text: `Daddy had a plan for the hike. He always has a plan.\n\n"Easy trail, girls. No big hills. I checked the map!"\n\nMommy smiled. "Famous last words, Ry."\n\n"I have a PLAN, Shel."\n\nShe kissed his cheek. "I know you do."\n\nThen they found the mud.`,
        emoji: "🗺️",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #98D8C8 50%, #7CB87A 100%)"
      },
      {
        text: `One second the path was dry. The next — *SCHLORP* — Ellie's boot sank into a huge, goopy mud puddle.\n\n"DADDY. I am STUCK."\n\nDaddy looked at her. Looked at the mud. He tried really hard not to laugh.\n\n"Don't you dare," said Ellie.\n\nHe laughed. He completely laughed.\n\nKatie watched from far away. "Uh oh," she said quietly.`,
        emoji: "👢",
        gradient: "linear-gradient(160deg, #8B6914 0%, #A0784A 40%, #7CB87A 100%)"
      },
      {
        text: `Daddy pulled Ellie out — *THWOOOOP* — and they both fell into the bushes. The girls laughed so hard!\n\nThen Katie looked at the big hill ahead. It was steep. It was long.\n\nShe reached for Ellie's hand.\n\n"Ellie... is it hard?"\n\nEllie looked at the hill. Then she looked at her little sister. She stood up tall.\n\n"We can do hard things, Katers. I'll be with you the whole way."`,
        emoji: "⛰️",
        gradient: "linear-gradient(160deg, #6B8E23 0%, #8B7355 50%, #87CEEB 100%)"
      },
      {
        text: `Daddy knelt down right there in the mud.\n\n"Girls, did you know Jesus is like a shepherd? A shepherd never leaves his sheep alone on a hard hill. He goes WITH them."\n\n"So Jesus is with us right now?" Katie asked.\n\n"Right now," Daddy said. "And so am I. And so is your sister."\n\nEllie held out her hand. "Together?"\n\nKatie took it. "Together."`,
        emoji: "🤝",
        gradient: "linear-gradient(160deg, #2d5a1a 0%, #4a7a2a 50%, #87CEEB 100%)"
      },
      {
        text: `They climbed — all three of them. When Katie's legs got tired, Daddy put her on his back. Ellie cheered her the whole way up.\n\nAt the top, they could see so far. Green hills and blue sky everywhere.\n\n"Did Jesus make all this?" Ellie asked.\n\n"Every bit," Daddy said.\n\nKatie rested her chin on Daddy's head and sighed happily.\n\n"He's pretty good," she said.\n\nDaddy laughed. "Yeah, Katers. He really is." 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #87CEEB 60%, #4a8a3a 100%)"
      }
    ],
    lesson: "Jesus is our Good Shepherd — He goes with us on every hard hill.",
    questions: [
      "Does Jesus leave us when things get hard, or does He stay WITH us?",
      "Katie held Ellie's hand and felt better. Who helps YOU feel brave?",
      "How can YOU be like Ellie and hold someone's hand when things feel scary?"
    ],
    prayer: "Dear Jesus,\n\nThank You for being our Good Shepherd. You never leave us — not on hard hills, not ever.\n\nWhen things feel too big, remind Ellie Girl and Katers that You are right there. And thank You for giving them each other.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 3,
    title: "The Great Cleveland Cannonball",
    episode: "Episode 3",
    emoji: "💦",
    gradientCard: "linear-gradient(135deg, #1a6a9e, #0a3a6e)",
    pages: [
      {
        text: `The car ride to Cleveland felt like forever.\n\nEllie had asked "are we there yet?" forty-seven times. She counted.\n\n"Forty-eight," she said. "Are we there yet?"\n\n"Ninety more minutes," Daddy said.\n\n"That's forever."\n\nKatie looked up. "I dropped my cracker."\n\n"When?" asked Mommy.\n\nKatie thought about it. "Ohio."`,
        emoji: "🚗",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #4a8ab4 50%, #2a5a8a 100%)"
      },
      {
        text: `But then — Daddy turned a corner and both girls saw it.\n\n*The pool.*\n\n"PAPA BUD'S POOL!!!" Ellie screamed.\n\nKatie bounced in her seat. "POOL! POOL! POOL!"\n\nPapa Bud was outside waiting. He scooped Katie up — "There's my CUTIE!" — and went straight for the chin.\n\n"THE CHIN!" Katie screamed, laughing so hard she could barely breathe.\n\nDidi came out in her workout clothes — because Didi is ALWAYS working out — and hugged both girls at the same time.`,
        emoji: "🏠",
        gradient: "linear-gradient(160deg, #2a5a8a 0%, #1a6a9e 50%, #0a8a5e 100%)"
      },
      {
        text: `Four minutes later — swimsuits on.\n\nEllie stood at the edge of the pool. Arms up. Chin out. "I am going to do the biggest cannonball EVER."\n\n"You're four," Daddy said.\n\n"Fearlessly four," she said. And jumped.\n\nIt was amazing. Papa Bud got soaked and raised his lemonade like a trophy.\n\nKatie stood at the steps. She wanted to jump too. But the pool looked really, really big.`,
        emoji: "🏊",
        gradient: "linear-gradient(160deg, #0a4a8a 0%, #1a7ab4 50%, #0a9a9e 100%)"
      },
      {
        text: `Ellie swam right over. "Come in, Katers. I'll hold your hand. I promise I won't let go."\n\nKatie looked at the water. Looked at Ellie.\n\nShe took her hand.\n\nOne step. Two steps. And then she was IN — laughing and splashing, with Ellie holding on tight.\n\n"YOU'RE DOING IT!" Ellie yelled.\n\n"I'M DOING IT!" Katie yelled back.`,
        emoji: "🤸",
        gradient: "linear-gradient(160deg, #1a2a6e 0%, #0a5a9e 40%, #0a8abe 100%)"
      },
      {
        text: `Later, wrapped in towels and eating Papa Bud's famous burgers, Daddy looked at Ellie.\n\n"You didn't just jump in. You went back for your sister. Do you know who does that?"\n\n"Jesus?" said Ellie, mouth full.\n\n"Jesus," Daddy said. "The Bible says God doesn't give us a scared heart. He gives us a BRAVE heart. And He gives us people to hold our hand."\n\nKatie put her head on Ellie's shoulder.\n\nEllie put her arm around her. Just like that. 🌟`,
        emoji: "🍔",
        gradient: "linear-gradient(160deg, #1a3a2a 0%, #2a5a3a 40%, #FF8C42 100%)"
      }
    ],
    lesson: "God gives us a brave heart — and people to hold our hand.",
    questions: [
      "Katie was scared of the water, but Ellie held her hand. How did that help?",
      "God doesn't give us a scared heart — He gives us a BRAVE heart! Where do you think that braveness comes from?",
      "How can YOU be like Ellie and help someone feel safe this week?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You don't give us a scared heart. You give us a BRAVE heart!\n\nThank You for making Ellie a big sister who goes back for Katie. Help Katers always know she is never alone — because You are with her, and so is her sister.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 4,
    title: "The Lake Day Rescue",
    episode: "Episode 4",
    emoji: "⛵",
    gradientCard: "linear-gradient(135deg, #0a5a8e, #1a9a6e)",
    pages: [
      {
        text: `It was only eight minutes from their house to Pops and Gigi's lake.\n\nEllie counted every single second out loud.\n\nKatie had her nose pressed to the window, watching the water get closer.\n\n"TODAY," Katie said, "is going to be a great day."\n\n"Ry, don't forget the sunscreen," Mommy said.\n\n"I have it, Shel."\n\n"Last time you said that too."\n\nDaddy did not say anything.`,
        emoji: "🌊",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #1a9abe 50%, #0a6a8e 100%)"
      },
      {
        text: `Pops was on the dock at Little Crooked Lake, getting the boat ready. Gigi had snacks set out — because Gigi always has snacks.\n\n"MY GIRLS!" Gigi called.\n\nEllie ran to her and started talking about everything that had happened since Tuesday. All of it. Very fast.\n\nKatie walked straight to Pops. "Boat. Now."\n\nPops laughed. "Soon as Daddy helps with this rope."\n\nKatie looked at the rope. "I can try." She couldn't get it — but she tried SO hard that everyone cheered anyway.`,
        emoji: "🎣",
        gradient: "linear-gradient(160deg, #0a5a8e 0%, #1a8abe 40%, #2aaa7e 100%)"
      },
      {
        text: `Out on the lake, the water was sparkly and blue. Ellie was singing a Frozen song very loudly.\n\n"ELLIE," Daddy said.\n\n"THE WIND BLOWS IT AWAY! I HAVE TO SING LOUDER!"\n\nPops laughed. Gigi gave everyone juice boxes.\n\nThen Ellie grabbed Daddy's arm. "Daddy — that duck is hurt!"\n\nA little duck was spinning in circles. Something was wrapped around its wing.\n\n"We have to help it," Ellie said.\n\nKatie stood up. "Let's go."`,
        emoji: "🦆",
        gradient: "linear-gradient(160deg, #1a7abe 0%, #0a5a8e 40%, #2a8a4e 100%)"
      },
      {
        text: `Pops drove the boat closer. Ellie leaned over the side while Daddy held her. She worked the string loose with her fingers.\n\nKatie knelt right next to her the whole time — helping hold Ellie steady.\n\nThen — FREE! The duck shook itself off and swam away super fast. It didn't even say thank you.\n\n"You're welcome," Katie said flatly.\n\nEveryone on the boat laughed so hard.`,
        emoji: "🙌",
        gradient: "linear-gradient(160deg, #0a4a6e 0%, #1a8a9e 50%, #2aaa6e 100%)"
      },
      {
        text: `On the way back, Daddy sat with both girls.\n\n"You saw that duck hurting and you didn't just watch. You helped. Do you know who was like that?"\n\n"Jesus?" Ellie said.\n\n"Jesus always moved toward people who were hurting. He never just walked by. He always helped."\n\nKatie leaned into Ellie. Ellie put her arm around her.\n\nGigi had dinner ready when they got back. 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a5a8e 100%)"
      }
    ],
    lesson: "Jesus always helped people who were hurting — and we can too.",
    questions: [
      "Ellie saw the duck hurting and wanted to help right away. Can you think of someone you could help this week?",
      "Jesus always moved toward people who needed help. What does that tell you about Jesus?",
      "Ellie led and Katie helped. How can YOU and your sister be a team tomorrow?"
    ],
    prayer: "Dear Jesus,\n\nThank You for lake days and Pops and Gigi and boat rides on Little Crooked Lake.\n\nThank You for giving Ellie and Katie hearts that want to help. Help them see people who need kindness — and give them the courage to help, just like You always did.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 5,
    title: "The Backwards Bedtime",
    episode: "Episode 5",
    emoji: "🌙",
    gradientCard: "linear-gradient(135deg, #2d1b69, #6a0a3e)",
    pages: [
      {
        text: `Bedtime at the Badowski house was supposed to go like this:\n\nBath. Pajamas. Brush teeth. Story. Sleep.\n\nDaddy had a plan. Daddy always has a plan.\n\nBut Ellie Girl had a different idea. Her idea was: three outfit changes, a full concert, and an announcement that she had NEVER been tired in her whole life.\n\n"Ellie Girl." Daddy stood in the hallway.\n\n"Just one more song, Daddy."\n\nThen from the bathroom — *SPLASH.* Then: "Oops."\n\nThat was Katers.`,
        emoji: "🛁",
        gradient: "linear-gradient(160deg, #2d1b69 0%, #4a0a5e 50%, #1a0a3e 100%)"
      },
      {
        text: `Daddy found Katie standing next to a very wet floor, looking very innocent.\n\n"Katers. What happened?"\n\n"The water jumped out."\n\n"Water doesn't jump out."\n\n"This water did."\n\nMommy came to the door, took one look, kissed Daddy on the cheek, and handed him a towel.\n\n"You've got this, Ry."\n\n"Thank you, Shel."\n\n"I'll pray for you." She walked away. She was definitely laughing.`,
        emoji: "💦",
        gradient: "linear-gradient(160deg, #1a0a4e 0%, #2d1b69 50%, #0a1a4e 100%)"
      },
      {
        text: `FINALLY. Pajamas on. Teeth brushed. Everyone in bed.\n\nEllie had her stuffed animals in a very important order. Katie was already droopy-eyed.\n\n"Daddy," Ellie said. "Why do we have to sleep? I don't want the day to stop."\n\nDaddy sat on the edge of the bed.\n\n"Because God made sleep on purpose," he said. "Did you know — even God rested? After He made the WHOLE world, He took a rest. Because rest is a gift."`,
        emoji: "🌟",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0a4e 50%, #2d1b69 100%)"
      },
      {
        text: `"But here's the really cool part," Daddy said. "When YOU sleep — God doesn't. He stays up all night watching over you. He never gets tired. He never falls asleep on the job."\n\n"So He's watching right now?" Ellie asked.\n\n"Right now. The whole night. Every minute."\n\nKatie was almost asleep. But she smiled a tiny smile.`,
        emoji: "🌙",
        gradient: "linear-gradient(160deg, #0a0a1e 0%, #1a0a3e 40%, #0d1a3e 100%)"
      },
      {
        text: `Ellie reached over and held Katie's hand under the blanket.\n\n"Katers," she whispered. "Jesus watches us all night. We don't have to be scared."\n\nKatie didn't open her eyes. But she squeezed Ellie's hand.\n\nDaddy kissed them both. He looked at his two girls — safe and small and loved.\n\n"Goodnight, Ellie Girl."\n\n"Goodnight, Daddy."\n\n"Goodnight, Katers."\n\nA tiny little voice: "Night, Daddy."\n\nHe turned the light off. And Jesus kept watch. 🌟`,
        emoji: "⭐",
        gradient: "linear-gradient(160deg, #050510 0%, #0a0a2e 50%, #0a1428 100%)"
      }
    ],
    lesson: "God never sleeps — He watches over us all night long.",
    questions: [
      "God watches over you ALL night! How does that make you feel when the lights go off?",
      "God rested after making the world — and He made sleep as a GIFT for us! What do you love about bedtime?",
      "Ellie told Katie not to be scared because Jesus is watching. Can you remind each other of that tonight?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You never sleep. While Ellie Girl and Katers close their eyes, You are right here — watching, keeping them safe, holding them close.\n\nLet them rest tonight without being scared. Because You've got them.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 6,
    title: "The Thunderstorm Teammates",
    episode: "Episode 6",
    emoji: "⛈️",
    gradientCard: "linear-gradient(135deg, #1a2a4e, #3a1a5e)",
    pages: [
      {
        text: `It started with a big rumble.\n\nEllie woke up. She listened. Another rumble — louder.\n\nShe looked at Katie's bed across the room. Katie was sitting up, blanket pulled to her chin, eyes big.\n\n"Ellie," Katie whispered.\n\n"I know," Ellie whispered back. "Come here, Katers."\n\nKatie ran across the room and jumped into Ellie's bed. They pulled the blanket up together and listened to the storm outside.`,
        emoji: "⛈️",
        gradient: "linear-gradient(160deg, #1a2a4e 0%, #2a1a5e 50%, #0a0a2e 100%)"
      },
      {
        text: `CRACK! A big one. The whole room flashed bright for a second.\n\nKatie grabbed Ellie's arm.\n\nEllie was a little scared too. But she was the big sister. So she held on tighter.\n\n"It's just thunder," Ellie said. "It can't come in."\n\n"It's SO loud," said Katie.\n\n"I know. But Daddy says loud things can't hurt you."\n\n"When did he say that?"\n\nEllie thought. "He's about to."\n\nAnd right then — footsteps in the hall.`,
        emoji: "⚡",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2a1a4e 100%)"
      },
      {
        text: `Daddy came in looking like he'd been asleep for four minutes. Hair everywhere. Old workout shirt.\n\n"I see we've built a fort," he said.\n\n"The thunder is SO loud, Daddy," Katie said.\n\n"Scoot over."\n\nThey scooted. He squeezed in. Now it was all three of them watching the lightning flash through the curtains.\n\n"Is Mommy scared?" Ellie asked.\n\n"Mommy is asleep."\n\n"HOW?"\n\n"Your mom is a mystery, Ellie Girl."`,
        emoji: "🌩️",
        gradient: "linear-gradient(160deg, #1a1a4e 0%, #2a1a5e 50%, #1a0a3e 100%)"
      },
      {
        text: `Another big BOOM. Katie grabbed Daddy's arm with both hands.\n\nDaddy didn't move. He was solid like a rock.\n\n"Did you know," he said, "that in the Bible, Jesus was on a boat in a GIANT storm? His friends were super scared. But Jesus just stood up and said STOP to the storm. And it stopped."\n\nKatie looked up. "He told the storm to STOP?"\n\n"Just like that. Because Jesus made the thunder. It listens to Him."\n\n"So He's in charge of this storm too?" Ellie asked.\n\n"Every single cloud," Daddy said. "All His."`,
        emoji: "🙏",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2a1a5e 40%, #0a1a4e 100%)"
      },
      {
        text: `The storm kept going. But now it felt different. Like it belonged to Someone they knew.\n\nKatie loosened her grip on Daddy's arm. Just a little.\n\nEllie leaned her head on his shoulder. "Will you stay, Daddy?"\n\n"I'll stay," he said.\n\nThe three of them sat together — Daddy in the middle, a girl on each side — while Jesus held the storm outside.\n\nBoth girls fell asleep before the thunder stopped.\n\nDaddy stayed anyway. 🌟`,
        emoji: "🌈",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 40%, #1a3a5e 100%)"
      }
    ],
    lesson: "Jesus is in charge of every storm — we don't have to be scared.",
    questions: [
      "When the storm came, what did Ellie do for Katie right away?",
      "Jesus told the storm to STOP and it listened! How powerful is Jesus?",
      "Daddy stayed even after the girls fell asleep. Who always stays with you when you're scared?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You are in charge of every storm. Every rumble. Every flash. It's all Yours.\n\nWhen Ellie Girl and Katers feel scared, help them remember that You are right there. You spoke to the storm and it listened. You will never leave them.\n\nThank You for big sisters who hold on. Thank You for daddies who stay. And thank You that YOU always stay too.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 7,
    title: "The Sharing War",
    episode: "Episode 7",
    emoji: "🐘",
    gradientCard: "linear-gradient(135deg, #7a2a8e, #3a1a6e)",
    pages: [
      {
        text: `It all started with a waffle.\n\nEllie had put syrup in every square. It was perfect.\n\nKatie wanted a bite.\n\n"You have your OWN waffle, Katers."\n\n"I know. But yours looks better."\n\n"They're the SAME waffle!"\n\nKatie studied both waffles very carefully. "Yours has more squares."\n\nMommy stood at the counter watching. Daddy whispered, "Shel, are you going to help?"\n\n"I'm observing," she said, very calmly.`,
        emoji: "🧇",
        gradient: "linear-gradient(160deg, #8B6914 0%, #c8960a 40%, #FFB347 100%)"
      },
      {
        text: `By 9am — a fight over the purple crayon.\n\nBy 10am — a fight over who got which couch cushion.\n\nBy lunch — a fight over a stuffed elephant. Nobody could even remember where the elephant came from.\n\n"MINE!" said Katie, holding it with both arms.\n\n"I had it FIRST!" said Ellie.\n\n"MINE!"\n\n"MINE!"\n\nDaddy walked in after his workout. Two girls. One elephant. Big standoff.\n\nHe looked at Mommy. "How long?"\n\n"Since the waffle," she said.`,
        emoji: "😤",
        gradient: "linear-gradient(160deg, #6a1a4e 0%, #8a2a6e 50%, #4a1a5e 100%)"
      },
      {
        text: `Daddy sat down right on the floor. "Sit with me. Both of you. Elephant too."\n\nThey sat. Katie still held the elephant very tight.\n\n"Can I tell you about someone in the Bible?" Daddy said.\n\n"Is it about sharing?" Ellie asked.\n\n"It's about sharing."\n\nEllie sighed. She knew it.\n\n"There was a man named Zacchaeus. He kept everything for himself. But then Jesus came to his house. And something happened to his heart. He started giving everything AWAY. Because when Jesus is in your heart — it changes you."`,
        emoji: "📖",
        gradient: "linear-gradient(160deg, #2a1a5e 0%, #4a1a7e 50%, #3a0a5e 100%)"
      },
      {
        text: `Ellie was quiet. She looked at Katie.\n\n"Katers," she said softly. "You can have the elephant."\n\nKatie blinked. "Really?"\n\n"Yeah." Ellie reached over and fixed a little piece of Katie's hair. Just like a big sister does.\n\n"You can have it," Ellie said again.\n\nKatie looked at the elephant. Then she did something that surprised everyone.\n\nShe held it out to Ellie. "We can share it."`,
        emoji: "💜",
        gradient: "linear-gradient(160deg, #3a0a5e 0%, #5a1a8e 40%, #4a0a7e 100%)"
      },
      {
        text: `Ellie took one ear. Katie kept the other.\n\nTwo girls. One elephant. Shared.\n\nDaddy looked at Mommy. Mommy had her hand over her heart.\n\n"Ry," she said quietly.\n\n"I know, Shel," he said. "I know." 🌟`,
        emoji: "🐘",
        gradient: "linear-gradient(160deg, #4a1a7e 0%, #7a2a8e 50%, #5a1a6e 100%)"
      }
    ],
    lesson: "When Jesus is in your heart, it makes you want to give.",
    questions: [
      "What made Ellie decide to give Katie the elephant?",
      "Zacchaeus changed when Jesus came to his house. What do you think Jesus does to our hearts?",
      "Is there something you could share with your sister tomorrow that would make her really happy?"
    ],
    prayer: "Dear Jesus,\n\nThank You for changing hearts. You did it for Zacchaeus — and You do it for Ellie Girl and Katers too.\n\nGive them giving hearts. Hearts that think about others first. Help them hold things loosely because You are the One who gives them everything good.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 8,
    title: "The Biggest Sorry",
    episode: "Episode 8",
    emoji: "🤍",
    gradientCard: "linear-gradient(135deg, #8e4a1a, #5e1a3e)",
    pages: [
      {
        text: `Ellie and Katie were playing in the backyard.\n\nIt was a really fun game — until they disagreed on a rule.\n\nEllie got frustrated. And then she said something mean.\n\n"You're being a BABY, Katers. You don't even know how to play right!"\n\nKatie went very still. Her chin wobbled. She sat down in the grass and wouldn't look at Ellie.\n\nEllie stood there. She knew right away she had made a mistake.`,
        emoji: "💧",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #5ab4d4 40%, #2a7a9e 100%)"
      },
      {
        text: `Mommy saw what happened. She came outside and sat right next to Katie in the grass. She didn't say anything. She just put her arm around her.\n\nThat's what Mommy does. She sits with you first.\n\nEllie came closer. "Mommy... I said something mean."\n\n"I know," Mommy said gently.\n\n"I didn't mean it."\n\n"I know. But Katie doesn't know that yet."`,
        emoji: "🤱",
        gradient: "linear-gradient(160deg, #d4786a 0%, #b45a4a 40%, #8e3a2a 100%)"
      },
      {
        text: `Daddy came outside and sat in the grass too. All four of them together.\n\n"Ellie Girl," he said. "What happened?"\n\nShe told him everything. She didn't leave the bad parts out.\n\n"Do you know what's brave?" Daddy said. "Saying sorry. It feels hard and embarrassing. But Jesus says when we make something right — that is one of the bravest things we can do."\n\nEllie looked at Katie.\n\n"That kind of brave," Daddy said softly.`,
        emoji: "💪",
        gradient: "linear-gradient(160deg, #5e1a3e 0%, #8e2a5e 40%, #6e1a4e 100%)"
      },
      {
        text: `Ellie crawled over and sat right in front of her little sister.\n\n"Katers."\n\nKatie didn't look up.\n\n"Katers, I'm sorry. I said something mean and I didn't mean it. You're not a baby. You're my favorite person to play with."\n\nKatie was quiet. Then she looked up. Her eyes were a little red.\n\n"You hurt my feelings," she said.\n\n"I know," said Ellie. "I'm really sorry."\n\nKatie looked at her for a long second. Then she leaned forward and put her head on Ellie's shoulder.`,
        emoji: "🤍",
        gradient: "linear-gradient(160deg, #3a1a5e 0%, #6a2a8e 40%, #4a1a6e 100%)"
      },
      {
        text: `Ellie wrapped both arms around her little sister.\n\nDaddy looked at them both. "Do you know — that's exactly what Jesus does for US? Every time we mess up, every time we say sorry — Jesus forgives us. Every single time. No matter what."\n\n"Every time?" Katie asked.\n\n"Every time," Daddy said.\n\nMommy went inside and came back with lemonade. The argument stayed in the yard.\n\nEverything was okay. 🌟`,
        emoji: "🍋",
        gradient: "linear-gradient(160deg, #4a7a1a 0%, #8aaa2a 40%, #FFD700 100%)"
      }
    ],
    lesson: "Saying sorry is brave — and Jesus forgives us every time.",
    questions: [
      "Ellie said sorry even when it was hard. How do you think Katie felt when she heard it?",
      "Daddy said saying sorry is actually BRAVE. Do you think that's true?",
      "Jesus forgives us every time we mess up. How does it feel to know He always forgives you?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You forgive us. Every time. No matter what.\n\nWhen Ellie Girl says something that hurts, give her the bravery to say sorry fast. When Katers gets hurt, give her a heart that forgives — just like You forgive us.\n\nHelp these sisters always come back to each other. And thank You, Jesus, that You always forgive us and bring us back to You.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 9,
    title: "The Gigi Surprise",
    episode: "Episode 9",
    emoji: "🎉",
    gradientCard: "linear-gradient(135deg, #1a6e3e, #0a4e8e)",
    pages: [
      {
        text: `Mommy had a secret. Ellie could always tell.\n\n"Mommy. You have a secret."\n\n"I don't know what you're talking about."\n\n"Your eyes are doing the sparkly thing."\n\nMommy blinked. "Eat your eggs, Ellie Girl."\n\nKatie looked up. "What sparkly thing?"\n\n"The thing her eyes do when she has a secret!"\n\nDaddy looked at the ceiling. He was not going to survive breakfast.`,
        emoji: "🍳",
        gradient: "linear-gradient(160deg, #FFB347 0%, #FF8C42 40%, #d4603a 100%)"
      },
      {
        text: `After breakfast, Mommy said: "Shoes on, girls. We're going somewhere."\n\n"WHERE?!" said Ellie.\n\n"Surprise."\n\n"Is it the park?"\n\n"No."\n\n"The library?"\n\n"No."\n\n"Is it—"\n\n"Shoes, Ellie Girl."\n\nKatie already had her shoes on. On the wrong feet. But on.\n\nSeven minutes later — Ellie saw water through the trees.\n\n"LITTLE CROOKED LAKE!" she yelled.\n\n"GIGI!" Katie yelled.`,
        emoji: "🚗",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #4ab4d4 40%, #1a8abe 100%)"
      },
      {
        text: `But it wasn't just Gigi and Pops.\n\nThere were balloons! Pink and gold ones on the porch. A special table in the yard with a pretty cloth. Flowers. A CAKE.\n\nGigi stood in the middle with her arms wide open.\n\n"HAPPY JUST-BECAUSE DAY!"\n\nEllie stopped. "What's a Just-Because Day?"\n\n"It's a day," Gigi said, spinning Katie around, "where we celebrate you for NO reason at all. Just because we love you. Just because you're HERE. Just because you're OURS!"`,
        emoji: "🎈",
        gradient: "linear-gradient(160deg, #1a6e3e 0%, #2a9e5e 40%, #1a8e4e 100%)"
      },
      {
        text: `Pops grilled. Gigi made a pink cake with sprinkles. They ate outside by the lake.\n\nEllie talked the whole time. Katie asked for more cake approximately five times. Mommy said "one more piece" approximately five times.\n\nLater, Daddy and Ellie sat on the dock with their feet over the water.\n\n"Daddy, why did Gigi do all that for no reason?"\n\n"Because that's what love does," he said. "It doesn't wait for a reason. It just gives."`,
        emoji: "🎂",
        gradient: "linear-gradient(160deg, #0a4e8e 0%, #1a6eae 40%, #0a8ebe 100%)"
      },
      {
        text: `"Is that what Jesus is like?" Ellie asked.\n\nDaddy looked at her. Sometimes she just figured it out herself.\n\n"Exactly like that," he said. "The Bible says God loved us so much — He GAVE. Not because we earned it. Not because we were perfect. Just because. Just because we're His."\n\nEllie looked at the lake, all shiny in the sun.\n\n"I want to love people like that," she said.\n\n"Me too, Ellie Girl."\n\nKatie ran down the dock and jumped on both of them. Nobody fell in. Barely. 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a4e8e 100%)"
      }
    ],
    lesson: "God loves us just because — not because we earned it.",
    questions: [
      "Gigi threw a whole party just because she loves the girls! How did that make you feel?",
      "Daddy said God loves us JUST BECAUSE — not because we're perfect. What does that tell you about God?",
      "Can you think of one way to love someone tomorrow — just because, for no reason at all?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You love us just because. Not because we're perfect. Not because we earned it. Just because we're Yours.\n\nThank You for Gigi and the way she shows that love. Help Ellie Girl and Katers grow up knowing that's exactly what YOU are like — a God who loves them just because.\n\nLet them fall asleep tonight feeling so loved.\n\nWe love You.\n\nAmen. 🙏"
  }
];

function StarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="#FFD700">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function SceneIllustration({ emoji, gradient }) {
  return (
    <div style={{
      width: "100%", aspectRatio: "16/9", borderRadius: "16px",
      background: gradient, display: "flex", alignItems: "center",
      justifyContent: "center", fontSize: "64px",
      boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
      border: "2px solid rgba(255,255,255,0.12)",
      position: "relative", overflow: "hidden"
    }}>
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
  return (
    <button onClick={onClick} style={{
      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "10px", color: "#C9A8FF", padding: "8px 14px",
      fontSize: "14px", cursor: "pointer", fontFamily: "'Georgia', serif"
    }}>{label}</button>
  );
}

function TopBar({ left, center, right }) {
  return (
    <div style={{
      width: "100%", padding: "14px 18px", display: "flex",
      alignItems: "center", justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.08)", boxSizing: "border-box"
    }}>
      <div style={{ minWidth: "70px" }}>{left}</div>
      <div style={{ textAlign: "center", flex: 1 }}>{center}</div>
      <div style={{ minWidth: "70px", textAlign: "right" }}>{right}</div>
    </div>
  );
}

function PrayerScreen({ story, onBack, onDone }) {
  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TopBar
        left={<BackButton onClick={onBack} />}
        center={<div>
          <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
          <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Bedtime Prayer</div>
        </div>}
      />
      <div style={{ maxWidth: "480px", width: "100%", padding: "28px 20px 40px", display: "flex", flexDirection: "column", gap: "20px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "52px", marginBottom: "10px" }}>🙏</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#FFD700", fontSize: "21px", fontWeight: "bold" }}>Tonight's Prayer</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#9B7FD4", fontSize: "13px", fontStyle: "italic", marginTop: "5px" }}>Read aloud over Ellie Girl & Katers</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "26px 24px", border: "1px solid rgba(255,215,0,0.18)", boxSizing: "border-box" }}>
          {story.prayer.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontFamily: "'Georgia', serif", fontSize: "17px", lineHeight: "1.85",
              color: para.startsWith("Amen") ? "#FFD700" : "#F0E6FF",
              fontWeight: para.startsWith("Amen") ? "700" : "400",
              margin: "0 0 14px", textAlign: para.startsWith("Amen") ? "center" : "left"
            }}>{para}</p>
          ))}
        </div>
        <button onClick={onDone} style={{
          background: "linear-gradient(135deg, #c8960a, #FFD700)", border: "none", borderRadius: "14px",
          color: "#1a0a2e", padding: "16px", fontSize: "17px", cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(255,215,0,0.3)"
        }}>Sweet Dreams ⭐</button>
      </div>
    </div>
  );
}

function QuestionsScreen({ story, onBack, onNext }) {
  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TopBar
        left={<BackButton onClick={onBack} />}
        center={<div>
          <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
          <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Talk It Over</div>
        </div>}
      />
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
        <button onClick={onNext} style={{
          background: "linear-gradient(135deg, #5a28a0, #8a40c0)", border: "none", borderRadius: "14px",
          color: "#fff", padding: "16px", fontSize: "16px", cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: "bold", marginTop: "6px",
          boxShadow: "0 4px 20px rgba(90,40,160,0.45)"
        }}>Bedtime Prayer 🙏</button>
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
        center={<div>
          <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
          <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>{story.title}</div>
        </div>}
        right={<span style={{ color: "#7B5FA4", fontSize: "13px", fontFamily: "'Georgia', serif" }}>{page + 1} / {story.pages.length}</span>}
      />
      <div style={{ display: "flex", gap: "6px", padding: "12px 0 14px", alignItems: "center" }}>
        {story.pages.map((_, i) => (
          <div key={i} onClick={() => setPage(i)} style={{
            width: i === page ? "24px" : "8px", height: "8px", borderRadius: "4px",
            background: i === page ? "#FFD700" : i < page ? "rgba(255,215,0,0.35)" : "rgba(255,255,255,0.2)",
            cursor: "pointer", transition: "all 0.3s ease"
          }} />
        ))}
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
        {page > 0 && (
          <button onClick={() => setPage(p => p - 1)} style={{ flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: "14px", color: "#C9A8FF", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif" }}>← Back</button>
        )}
        {!isLast ? (
          <button onClick={() => setPage(p => p + 1)} style={{ flex: page > 0 ? 2 : 1, background: "linear-gradient(135deg, #5a28a0, #8a40c0)", border: "none", borderRadius: "14px", color: "#fff", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(90,40,160,0.45)" }}>Next Page →</button>
        ) : (
          <button onClick={() => setPhase("questions")} style={{ flex: page > 0 ? 2 : 1, background: "linear-gradient(135deg, #c8960a, #FFD700)", border: "none", borderRadius: "14px", color: "#1a0a2e", padding: "15px", fontSize: "15px", cursor: "pointer", fontFamily: "'Georgia', serif", fontWeight: "bold", boxShadow: "0 4px 20px rgba(255,215,0,0.3)" }}>Talk About It 💬</button>
        )}
      </div>
    </div>
  );
}

function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i, size: Math.random() * 2.2 + 0.8,
      top: Math.random() * 68, left: Math.random() * 100,
      dur: Math.random() * 3 + 1.5, delay: Math.random() * 2.5
    }))
  );
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <style>{`@keyframes tw{from{opacity:0.1}to{opacity:0.9}} @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      {stars.map(s => (
        <div key={s.id} style={{
          position: "absolute", width: s.size + "px", height: s.size + "px",
          background: "#fff", borderRadius: "50%", top: s.top + "%", left: s.left + "%", opacity: 0.25,
          animation: `tw ${s.dur}s ease-in-out ${s.delay}s infinite alternate`
        }} />
      ))}
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
        <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "31px", fontWeight: "bold", color: "#FFD700", margin: "0 0 10px", lineHeight: 1.22, textShadow: "0 0 40px rgba(255,215,0,0.3)" }}>
          The Adventures of<br />Ellie & Katie
        </h1>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#B090E0", fontStyle: "italic", margin: 0 }}>Sisters · Best Friends · Forever Teammates ✨</p>
      </div>
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px", padding: "0 18px", display: "flex", flexDirection: "column", gap: "12px", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#6a4a94", letterSpacing: "2.5px", textTransform: "uppercase", paddingLeft: "4px", marginBottom: "2px" }}>📖 All Stories</div>
        {stories.map(story => (
          <button key={story.id} onClick={() => setActiveStory(story)} style={{
            background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)",
            borderRadius: "20px", padding: "18px", cursor: "pointer", textAlign: "left", width: "100%",
            transition: "background 0.2s, transform 0.15s", boxSizing: "border-box"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.055)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: story.gradientCard, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0, boxShadow: "0 4px 14px rgba(0,0,0,0.35)" }}>{story.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#9060C0", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{story.episode}</div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "17px", fontWeight: "bold", color: "#EEE0FF", marginBottom: "5px", lineHeight: 1.2 }}>{story.title}</div>
                <div style={{ display: "flex", gap: "2px" }}>{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              </div>
              <div style={{ color: "#6a4a94", fontSize: "20px", flexShrink: 0 }}>›</div>
            </div>
            <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.07)", fontFamily: "'Georgia', serif", fontSize: "12px", color: "#9060C0", fontStyle: "italic", lineHeight: 1.4 }}>
              💡 {story.lesson}
            </div>
          </button>
        ))}
        <div style={{ background: "rgba(255,255,255,0.025)", border: "1px dashed rgba(255,255,255,0.09)", borderRadius: "20px", padding: "22px", textAlign: "center" }}>
          <div style={{ fontSize: "28px", marginBottom: "7px" }}>🌙</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#3d2a5e", fontSize: "14px", fontStyle: "italic" }}>Episode 10 coming tonight at 7:30 PM...</div>
        </div>
      </div>
      <div style={{ position: "relative", zIndex: 1, marginTop: "44px", textAlign: "center", padding: "0 32px" }}>
        <div style={{ fontSize: "20px", marginBottom: "8px" }}>🙏</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "13px", color: "#3d2a5e", fontStyle: "italic", lineHeight: 1.7 }}>
          "Jesus said, 'Let the little children come to me.'"<br />
          <span style={{ fontSize: "11px" }}>— Matthew 19:14</span>
        </div>
      </div>
    </div>
  );
}
