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
        text: `The sun had just dipped behind the hills when Ellie grabbed her little sister's hand.\n\n"Katers," she whispered, eyes wide, "the fireflies are gone."\n\nEvery summer night, hundreds of tiny golden lights danced above the meadow behind the house on Hidden Trail. But tonight — nothing. Just darkness.\n\nKatie looked around slowly, then looked up at Ellie. "Where did they go?"\n\n"I don't know," said Ellie Girl. "But we're going to find out."\n\nKatie squeezed her big sister's hand a little tighter. That was enough. If Ellie said they'd find out, they'd find out.`,
        emoji: "🌑",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 50%, #1a2a1a 100%)"
      },
      {
        text: `Daddy had been inside finishing his evening workout — push-ups, pull-ups, the whole plan — when he heard them calling.\n\nHe jogged out still catching his breath, hands on his hips. "Alright team. Full report. What's the situation?"\n\n"The fireflies are GONE, Daddy," Ellie said.\n\nHe gasped dramatically. *"All of them?!"*\n\n"ALL of them," Katie confirmed, very seriously, still holding Ellie's hand.\n\n"Okay." Daddy cracked his knuckles. "I have a plan."\n\nFrom inside, Mommy called out: "Ry, do you actually have a plan or are you just saying that?"\n\nDaddy pointed toward the meadow. "Everyone move."`,
        emoji: "💪",
        gradient: "linear-gradient(160deg, #0d1f0d 0%, #1a3a1a 50%, #2d1b69 100%)"
      },
      {
        text: `The three of them tiptoed into the meadow — Daddy leading, Ellie Girl right behind him still talking about three different things at once, and Katers holding Ellie's hand, stepping wherever her big sister stepped.\n\nEllie spotted it first — a little jar tipped over by the old oak tree, with a few tired fireflies resting inside, too cozy to fly.\n\n"Daddy, look!" Ellie whispered. She turned to Katie. "Katers, they're just stuck. We can fix it."\n\nKatie's eyes went wide. "We can?"\n\n"We can," said Ellie Girl. "Together."`,
        emoji: "🫙",
        gradient: "linear-gradient(160deg, #1a1a0a 0%, #2a2a0d 40%, #1a3a1a 100%)"
      },
      {
        text: `Ellie held the jar steady while Katie helped tilt it — very carefully, very slowly — until each little light floated free. Blinking. Spinning. Soaring back into the sky.\n\nThe whole meadow glowed again.\n\nKatie gasped and grabbed Ellie's arm. "ELLIE. ELLIE WE DID IT."\n\nEllie Girl laughed and spun her little sister around right there in the middle of the meadow. Katie giggled so hard she got the hiccups.\n\nDaddy watched them, smiling the kind of smile that takes over your whole face without asking permission.`,
        emoji: "🌟",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d5a1a 40%, #4a7a2a 100%)"
      },
      {
        text: `Daddy got quiet and looked out at all the little lights dancing across the meadow.\n\n"You know who made every single one of those?" he said.\n\n"Jesus?" said Ellie.\n\n"Jesus," Daddy nodded. "And the same Jesus who made every firefly, every star, every glowing thing — He knows *your* name. He loves *you* even more than all of this."\n\nKatie looked up at Daddy. "Even me?"\n\nDaddy knelt down and kissed her forehead. "Especially you, Katers."\n\nEllie Girl slipped her hand into Daddy's. "I'm glad Jesus made us."\n\n"Me too, Ellie Girl," Daddy said softly. "Me too." 🌟`,
        emoji: "🙏",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2d5a1a 100%)"
      }
    ],
    lesson: "Jesus made you and knows your name — you are deeply loved.",
    questions: [
      "Who made the fireflies, the stars, and YOU? 🌟",
      "If Jesus knows your name, does that mean He thinks about you? What do you think that feels like?",
      "Ellie helped Katie be brave in the dark. How can YOU help someone feel brave this week?"
    ],
    prayer: "Dear Jesus,\n\nThank You for making the fireflies, the stars, and the whole beautiful world. But most of all, thank You for making Ellie Girl and Katers. Thank You that You know their names — and that You love them more than all the lights in the sky put together.\n\nHelp them sleep tonight knowing they are safe, known, and so deeply loved by You.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 2,
    title: "The Muddy Mountain",
    episode: "Episode 2",
    emoji: "🥾",
    gradientCard: "linear-gradient(135deg, #4a7a2a, #8B6914)",
    pages: [
      {
        text: `It was supposed to be a simple hike. Daddy had said so himself — he'd looked at the map, checked the trail rating, made a whole plan.\n\n"Easy trail, girls. Totally flat. Nothing crazy. I've done my research."\n\nMommy smiled from behind her coffee. "Famous last words, Ry."\n\nDaddy pointed at her. "I have a *plan*, Shel."\n\nMommy kissed his cheek. "I know you do, honey."\n\nThat was before the mud.`,
        emoji: "🗺️",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #98D8C8 50%, #7CB87A 100%)"
      },
      {
        text: `Nobody knew where it came from. One minute the path was dry and sunny. The next — *SCHLORP* — Ellie's boot disappeared into a giant puddle of brown, goopy mud right in the middle of the trail.\n\n"DADDY." She stood perfectly still, one boot in, one boot out. "I. Am. STUCK."\n\nDaddy looked at her. Then at the mud. Then back at her. He pressed his lips together very, very hard.\n\n"Don't you dare laugh," said Ellie Girl.\n\nHe laughed. He absolutely, completely laughed.\n\nKatie stood a safe distance back, watching with enormous eyes. "Uh oh," she said quietly.`,
        emoji: "👢",
        gradient: "linear-gradient(160deg, #8B6914 0%, #A0784A 40%, #7CB87A 100%)"
      },
      {
        text: `Daddy waded in, grabbed Ellie Girl under the arms, and pulled — *THWOOOOP* — she came flying out, boot and all, and they both tumbled backwards into the bushes.\n\nThe girls erupted. Ellie started singing a made-up song called "The Mud Song." It was mostly just the word "mud" repeated many, many times.\n\nThen Katie looked up at the trail ahead. Rocky. Steep. Very long. She reached over and found Ellie's hand.\n\n"Ellie," she said quietly. "Is it hard?"\n\nEllie Girl looked at the hill, then looked at her little sister. She stood up straight. "We can do hard things, Katers. I'll be right next to you the whole way."`,
        emoji: "⛰️",
        gradient: "linear-gradient(160deg, #6B8E23 0%, #8B7355 50%, #87CEEB 100%)"
      },
      {
        text: `Daddy knelt down in the mud — didn't even check his jeans — and looked at both of them.\n\n"You know what? That hill IS hard. But the Bible says Jesus is like a shepherd. He doesn't leave His sheep on the hard hills. He goes *with* them."\n\n"So Jesus is with us right now?" Katie asked.\n\n"Right now," Daddy said. "And so am I. And so is your sister."\n\nKatie looked at Ellie. Ellie held out her hand.\n\n"Together?" said Ellie Girl.\n\nKatie took it. "Together."`,
        emoji: "🤝",
        gradient: "linear-gradient(160deg, #2d5a1a 0%, #4a7a2a 50%, #87CEEB 100%)"
      },
      {
        text: `They climbed — all three of them — one muddy, laughing, hand-holding step at a time. When Katie's little legs got tired near the top, Daddy scooped her onto his back. Ellie Girl cheered her the whole last stretch.\n\nAt the top, the view took their breath away. Golden Michigan hills and blue sky as far as they could see.\n\n"Daddy," Ellie said quietly, "did Jesus make all of this?"\n\n"Every single bit," he said.\n\nKatie, still on Daddy's back, rested her chin on his head and sighed the most satisfied sigh.\n\n"He's pretty good," she said.\n\nDaddy laughed his best laugh. "Yeah, Katers. He really is." 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #87CEEB 60%, #4a8a3a 100%)"
      }
    ],
    lesson: "Jesus is our Good Shepherd — He goes with us on every hard hill.",
    questions: [
      "When the trail got hard, what did Daddy say Jesus does — does He leave us or go *with* us?",
      "Katie felt better when Ellie held her hand. Who is someone that helps YOU feel brave?",
      "How can you be like Ellie this week — and hold someone's hand when things feel hard?"
    ],
    prayer: "Dear Jesus,\n\nThank You for being our Good Shepherd — for never leaving us alone on the hard hills. When things feel too steep or too tough, remind Ellie Girl and Katers that You are right there with them, every single step.\n\nThank You for giving them each other. Help Ellie always lead her little sister with kindness, and help Katie always trust that she is never alone.\n\nGive them strong, sweet sleep tonight. You've got them.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 3,
    title: "The Great Cleveland Cannonball",
    episode: "Episode 3",
    emoji: "💦",
    gradientCard: "linear-gradient(135deg, #1a6a9e, #0a3a6e)",
    pages: [
      {
        text: `The car had been moving for what felt like one million years.\n\nEllie Girl knew this because she had asked "are we there yet?" exactly forty-seven times. She had counted.\n\n"Forty-eight," she said. "Are we there yet?"\n\nDaddy gripped the steering wheel and smiled the smile of a man holding it together. "Ninety more minutes, Ellie Girl."\n\n"That's basically forever."\n\nKatie looked up from her snack. "I dropped my cracker."\n\n"When?" Mommy asked.\n\n"A while ago."\n\n"How long ago, Katers?"\n\nKatie thought about it. "Ohio."\n\nMommy looked at Daddy. Daddy looked at the road. "Almost there," he said, to himself as much as anyone.`,
        emoji: "🚗",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #4a8ab4 50%, #2a5a8a 100%)"
      },
      {
        text: `But then — finally, gloriously — Daddy turned onto the familiar street, and both girls saw it at the same time.\n\n*The pool.*\n\n"PAPA BUD'S POOL!!!" Ellie Girl shrieked so loud the windows practically rattled.\n\nKatie bounced in her car seat with both fists. "POOL! POOL! POOL!"\n\nPapa Bud was waiting in the driveway, arms out wide. He scooped Katie up first — "There's my CUTIE!" — and immediately went for the chin.\n\n"THE CHIN!" Katie screamed, laughing so hard she folded in half.\n\nDidi came around the corner in her workout clothes, because Didi was always either working out or about to work out, and squeezed both girls until they squeaked.`,
        emoji: "🏠",
        gradient: "linear-gradient(160deg, #2a5a8a 0%, #1a6a9e 50%, #0a8a5e 100%)"
      },
      {
        text: `Within four minutes, both girls were in their swimsuits.\n\nEllie Girl stood at the edge of the pool, arms raised, chin up. "I am going to do the biggest cannonball in the history of cannonballs."\n\n"Big claim," said Daddy, already in the water.\n\n"I am a big person."\n\n"You're four."\n\n"Fearlessly four," she corrected, and jumped.\n\nIt was, genuinely, a spectacular cannonball. Papa Bud got soaked in his lawn chair and raised his lemonade like a trophy.\n\nKatie stood at the steps of the pool watching, eyes wide. She wanted to jump too. She really, really did. But the water looked very big.`,
        emoji: "🏊",
        gradient: "linear-gradient(160deg, #0a4a8a 0%, #1a7ab4 50%, #0a9a9e 100%)"
      },
      {
        text: `Ellie swam straight over to the steps. "Katers. Come in with me."\n\n"It's big," said Katie.\n\n"I know," said Ellie Girl. "But I'll hold your hand the whole time. I won't let go. Promise."\n\nKatie looked at the water. Looked at her sister. Ellie held out both hands.\n\nKatie took them. One step. Two steps. And then — she was in, laughing and splashing, held safe by her big sister the whole time.\n\n"YOU'RE DOING IT!" Ellie yelled.\n\n"I'M DOING IT!" Katie yelled back.\n\nPapa Bud's lemonade didn't survive the celebration splash.`,
        emoji: "🤸",
        gradient: "linear-gradient(160deg, #1a2a6e 0%, #0a5a9e 40%, #0a8abe 100%)"
      },
      {
        text: `Later, wrapped in towels, eating Papa Bud's famous burgers — the ones he only made in Cleveland — Daddy looked at both girls.\n\n"You know what I loved about today?" he said. "Ellie, you didn't just jump in yourself. You went back for your sister. You know who does that?"\n\n"Jesus?" said Ellie, mouth full.\n\n"Jesus," Daddy nodded. "The Bible says God doesn't give us a spirit of fear — He gives us *power.* And He gives us people to hold our hand. Ellie was that for you today, Katers."\n\nKatie leaned over and put her head on Ellie's shoulder.\n\nEllie Girl put her arm around her. Just like that.\n\nPapa Bud pretended not to tear up. He did not fully succeed. 🌟`,
        emoji: "🍔",
        gradient: "linear-gradient(160deg, #1a3a2a 0%, #2a5a3a 40%, #FF8C42 100%)"
      }
    ],
    lesson: "God gives us power over fear — and people to hold our hand.",
    questions: [
      "Katie was nervous about the water, but Ellie held her hand. How did that help her be brave?",
      "Daddy said God gives us power, not fear. Can you think of something that felt scary until someone helped you?",
      "How can YOU be like Ellie this week — and help someone feel safe when they're nervous?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You don't give us a spirit of fear. You give us POWER — and You give us people to hold our hand.\n\nThank You for making Ellie a big sister who goes back for Katie. Help her always do that. And help Katers always know she is never alone — because You are with her, and so is her sister.\n\nThank You for Papa Bud's burgers and Didi's hugs and Cleveland days that feel like pure gift.\n\nNow give these girls the sweetest sleep.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 4,
    title: "The Lake Day Rescue",
    episode: "Episode 4",
    emoji: "⛵",
    gradientCard: "linear-gradient(135deg, #0a5a8e, #1a9a6e)",
    pages: [
      {
        text: `Eight minutes. That's all it took to get from Hidden Trail to Pops and Gigi's house on Little Crooked Lake — eight glorious minutes.\n\nEllie Girl counted every one of them out loud. Including the seconds.\n\nKatie sat next to her, nose pressed to the window, watching the water get closer and closer with the focused look of someone with very important plans.\n\n"TODAY," Katie announced, "is going to be a great day."\n\n"It really is, Katers," said Daddy.\n\n"Ry," said Mommy from the passenger seat, "you said that and then forgot the sunscreen last time."\n\n"I have the sunscreen, Shel."\n\n"I'm just saying."`,
        emoji: "🌊",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #1a9abe 50%, #0a6a8e 100%)"
      },
      {
        text: `Pops was already on the dock at Edgewood Shores, fishing hat on, getting the boat ready. Gigi had snacks laid out on the back porch like she was feeding a small army — because she always did, because Gigi was simply the best.\n\n"MY GIRLS!" Gigi called, arms wide open.\n\nEllie ran into them and immediately started telling Gigi everything that had happened since Tuesday. All of it. In one breath.\n\nKatie went straight to Pops and tugged his sleeve. "Pops. Boat. Now."\n\nPops laughed. "Soon as Daddy helps me with this rope."\n\nKatie studied the rope seriously. "I can try."\n\nShe couldn't quite get it — but she tried so hard that Pops and Daddy both cheered when she got partway through. Pops looked at Daddy. Daddy shrugged proudly.`,
        emoji: "🎣",
        gradient: "linear-gradient(160deg, #0a5a8e 0%, #1a8abe 40%, #2aaa7e 100%)"
      },
      {
        text: `Out on Little Crooked Lake, the wind was perfect and the water was bright blue and Ellie Girl was singing a Frozen song at full volume across the open water.\n\n"ELLIE." Daddy said.\n\n"THE WIND IS BLOWING IT AWAY, DADDY, I HAVE TO SING LOUDER."\n\nPops just laughed. Gigi handed everyone juice boxes.\n\nThen Ellie spotted something. A little duck, way out from the reeds, spinning in circles — one wing tangled in a piece of fishing line.\n\n"Daddy," Ellie said, grabbing his arm. "That duck is hurt. We have to help it."\n\nKatie stood up in the boat to look. "Help the duck," she agreed immediately. "Let's go."`,
        emoji: "🦆",
        gradient: "linear-gradient(160deg, #1a7abe 0%, #0a5a8e 40%, #2a8a4e 100%)"
      },
      {
        text: `Pops steered close. The duck splashed and fussed. Ellie leaned over the side, and Daddy held her waist steady while she carefully worked the fishing line loose with her fingers.\n\nKatie knelt right beside her, watching every move, steadying Ellie's arm when she wobbled. A tiny little helper.\n\nThen — free. The duck shook its whole body, ruffled its feathers, and paddled away fast like nothing happened. No thank you. Just gone.\n\nKatie watched it go. "You're welcome," she said flatly.\n\nEveryone on the boat completely lost it.`,
        emoji: "🙌",
        gradient: "linear-gradient(160deg, #0a4a6e 0%, #1a8a9e 50%, #2aaa6e 100%)"
      },
      {
        text: `On the way back to the dock, Daddy sat with both girls at the front of the boat, the warm Michigan wind in their faces.\n\n"You know what you did today?" he said. "You saw something hurting and you didn't just watch — you *moved.* Both of you." He looked at Ellie. "You led." He looked at Katie. "And you helped."\n\n"Jesus was like that," Ellie said quietly. She'd been thinking about it.\n\n"Exactly right, Ellie Girl. He always moved toward the ones who were hurting. He never just watched."\n\nKatie leaned into Ellie's side. Ellie put her arm around her little sister.\n\nGigi had dinner ready the second they hit the dock. 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a5a8e 100%)"
      }
    ],
    lesson: "Jesus always moved toward hurting people — and we can too.",
    questions: [
      "Ellie saw the duck hurting and said 'we have to help.' Can you think of someone who might need help this week?",
      "Daddy said Jesus always moved *toward* the ones who were hurting. What does that tell you about what Jesus is like?",
      "Ellie led and Katie helped — they worked together. How can you and your sister be a team like that tomorrow?"
    ],
    prayer: "Dear Jesus,\n\nThank You for lake days on Little Crooked Lake and Pops and Gigi and boat rides and the way Michigan summers feel like pure gift.\n\nThank You for giving Ellie Girl a heart that notices when something is hurting — and moves to help. And thank You for giving Katers a heart that jumps in right beside her.\n\nHelp them see the people around them who need kindness. Give them the courage to move toward them, just like You always did.\n\nYou are so good to this family, Jesus.\n\nNow rest these girls. They earned it.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 5,
    title: "The Backwards Bedtime",
    episode: "Episode 5",
    emoji: "🌙",
    gradientCard: "linear-gradient(135deg, #2d1b69, #6a0a3e)",
    pages: [
      {
        text: `It was bedtime on Hidden Trail, which meant one thing: chaos.\n\nDaddy had a plan. Daddy always had a plan. Bath, pajamas, brush teeth, story, bed. Simple. Logical. Perfect.\n\nEllie Girl had a different plan. Her plan involved three costume changes, a full performance of "Let It Go," and a very important announcement that she was NOT tired and in fact had never been tired in her entire life.\n\n"Ellie Girl." Daddy stood in the hallway with his arms crossed.\n\n"Just one more song, Daddy."\n\n"It's eight o'clock."\n\n"I do my best singing at eight o'clock."\n\nFrom the bathroom, they heard a splash. Then: "Oops."\n\nThat was Katers.`,
        emoji: "🛁",
        gradient: "linear-gradient(160deg, #2d1b69 0%, #4a0a5e 50%, #1a0a3e 100%)"
      },
      {
        text: `Daddy found Katie standing in the bathroom looking extremely innocent next to a very wet floor.\n\n"Katers. What happened?"\n\n"The water jumped out."\n\n"Water doesn't just jump out."\n\nKatie thought about this. "This water did."\n\nDaddy took a deep breath. Mommy appeared in the doorway, assessed the situation, kissed Daddy on the cheek, and handed him a towel. "You've got this, Ry."\n\n"Thank you, Shel."\n\n"I'll pray for you."\n\nShe walked away. Daddy was pretty sure she was laughing.`,
        emoji: "💦",
        gradient: "linear-gradient(160deg, #1a0a4e 0%, #2d1b69 50%, #0a1a4e 100%)"
      },
      {
        text: `Finally — finally — both girls were in pajamas, teeth brushed, tucked into bed.\n\nEllie Girl had approximately fourteen stuffed animals arranged in a very specific order that took several minutes to get right.\n\nKatie was already holding her blanket, eyes drooping, trying very hard to look awake.\n\n"Daddy," Ellie said, "why do we have to sleep? I don't want to stop the day."\n\nDaddy sat on the edge of the bed. That was a real question. He thought about it for a second.\n\n"Because God made rest on purpose," he said. "Did you know that? Even God rested. After He made the whole world — the sun, the stars, the lake, the fireflies — He rested. Because rest is a gift."`,
        emoji: "🌟",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a0a4e 50%, #2d1b69 100%)"
      },
      {
        text: `Ellie considered this very seriously. "God rested?"\n\n"He did. And when you sleep, God doesn't. He stays up watching over you all night long. The Bible says He never sleeps, never takes a break. So while *you* rest — He's working." Daddy tucked the blanket up around Katie, who was approximately forty-five seconds from being completely asleep. "It means you can close your eyes and not be scared. Because He's got you."\n\n"The whole night?" Ellie asked.\n\n"The whole night," Daddy said. "Every single minute."`,
        emoji: "🌙",
        gradient: "linear-gradient(160deg, #0a0a1e 0%, #1a0a3e 40%, #0d1a3e 100%)"
      },
      {
        text: `Ellie Girl was quiet for a moment. Then she reached over and took Katie's hand under the blanket — even though Katers was nearly asleep.\n\n"Katers," she whispered. "Jesus watches us all night. So we don't have to be scared."\n\nKatie didn't open her eyes. But she smiled. Just a tiny little smile.\n\nDaddy kissed Ellie Girl's forehead. Then Katie's. He stood up and looked at his two girls — all tucked in, hand in hand, safe and small.\n\n"Goodnight, Ellie Girl."\n\n"Goodnight, Daddy."\n\n"Goodnight, Katers."\n\nA tiny voice: "Night, Daddy."\n\nHe turned the light off. And Jesus kept the watch. 🌟`,
        emoji: "⭐",
        gradient: "linear-gradient(160deg, #050510 0%, #0a0a2e 50%, #0a1428 100%)"
      }
    ],
    lesson: "God never sleeps — He watches over us every single night.",
    questions: [
      "Daddy said God never sleeps and watches over us all night. How does that make you feel when the lights go off?",
      "God rested after making the world and said rest is a gift. What is your favorite thing about bedtime?",
      "Ellie told Katie 'we don't have to be scared' because Jesus is watching. How can YOU remind someone that Jesus is always with them?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You never sleep. While Ellie Girl and Katers close their eyes tonight, You are right here — watching over them, keeping them safe, holding them close.\n\nThank You for the gift of rest. Let their bodies rest, let their minds be still, and let their hearts feel how loved they are.\n\nThey are Yours, Jesus. And You've got them all night long.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 6,
    title: "The Thunderstorm Teammates",
    episode: "Episode 6",
    emoji: "⛈️",
    gradientCard: "linear-gradient(135deg, #1a2a4e, #3a1a5e)",
    pages: [
      {
        text: `It started with a rumble.\n\nEllie Girl heard it first — a low, faraway sound that rolled across the Howell sky and rattled the windows just a little.\n\nShe sat up in bed. Listened. Another rumble. Closer.\n\nShe looked across the room at Katie's bed. Katie was sitting up too, blanket pulled up to her chin, eyes wide.\n\n"Ellie," Katie whispered.\n\n"I know," Ellie whispered back. "Come here, Katers."\n\nKatie was across the room and into Ellie's bed in about four seconds flat. They pulled the blanket up together and listened to the storm roll in over Hidden Trail.`,
        emoji: "⛈️",
        gradient: "linear-gradient(160deg, #1a2a4e 0%, #2a1a5e 50%, #0a0a2e 100%)"
      },
      {
        text: `CRACK. A big one. The whole room lit up white for just a second.\n\nKatie made a small sound and buried her face in Ellie's shoulder.\n\nEllie put her arm around her little sister. She was a little scared too — but she was the big sister. So she held on tighter.\n\n"It's just thunder," Ellie said. "It can't get in."\n\n"It's really loud," Katie said, muffled by Ellie's pajamas.\n\n"I know. But Daddy says loud things can't hurt you."\n\n"When did Daddy say that?"\n\nEllie thought about it. "He will say it. Probably right now actually."\n\nAnd right on cue — footsteps in the hall.`,
        emoji: "⚡",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2a1a4e 100%)"
      },
      {
        text: `Daddy appeared in the doorway in his old workout shirt, hair going seventeen directions, looking like a man who had been asleep for approximately four minutes.\n\n"Okay," he said, taking in the situation — two girls, one bed, blanket fortress. "I see we've set up the command center."\n\n"The thunder is very loud, Daddy," Katie reported from inside the blanket.\n\n"It is loud," Daddy agreed, sitting right on the edge of the bed. "Scoot over."\n\nThey scooted. He squeezed in. Three of them now, watching the lightning flash through the curtains.\n\n"Is Mommy scared?" Ellie asked.\n\n"Mommy is asleep," Daddy said.\n\n"How?"\n\n"Your mother is a mystery, Ellie Girl."`,
        emoji: "🌩️",
        gradient: "linear-gradient(160deg, #1a1a4e 0%, #2a1a5e 50%, #1a0a3e 100%)"
      },
      {
        text: `Another big flash. Katie grabbed Daddy's arm with both hands.\n\nDaddy didn't flinch. He just sat there, steady and solid, like nothing in the whole sky could move him.\n\n"Can I tell you something?" he said. "In the Bible, there was a huge storm on a lake — way bigger than this. And Jesus was right there in the boat with His friends. They were terrified. But Jesus? He just stood up and told the storm to stop. And it did."\n\nKatie looked up. "He told the storm to *stop?*"\n\n"Just like that. Because He's in charge of the thunder, Katers. He made it. It listens to Him."\n\nEllie Girl stared at the window. "So He's in charge of this storm too?"\n\n"Every cloud," Daddy said. "Every lightning bolt. Every rumble. All His."`,
        emoji: "🙏",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2a1a5e 40%, #0a1a4e 100%)"
      },
      {
        text: `The storm kept going for a while. But something had changed. It felt different now — less like something scary outside, and more like something that belonged to Someone they knew.\n\nKatie relaxed her grip on Daddy's arm. Just a little.\n\nEllie Girl leaned her head on his shoulder. "Daddy, will you stay until it's done?"\n\n"I'll stay," he said.\n\nKatie snuggled in on the other side. The three of them sat there together — Daddy steady in the middle, a girl on each side — while Jesus held the storm in His hands outside.\n\nBy the time the thunder got quiet, both girls were asleep.\n\nDaddy stayed anyway. 🌟`,
        emoji: "🌈",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 40%, #1a3a5e 100%)"
      }
    ],
    lesson: "Jesus is in charge of every storm — and He is always with us.",
    questions: [
      "When the storm came, what did Ellie do for Katie right away? How can you do that for someone you love?",
      "Jesus told the storm to stop and it listened. What does that tell you about how powerful Jesus is?",
      "Daddy stayed even after the girls fell asleep. Who is someone in your life who always stays with you when things are scary?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You are in charge of every storm — every rumble of thunder, every flash of lightning, every scary sound in the night. It all belongs to You.\n\nWhen Ellie Girl and Katers feel scared, remind them that You are right there. That You spoke to the storm and it listened. And that You will never, ever leave them.\n\nThank You for big sisters who hold on tight. Thank You for daddies who stay.\n\nAnd thank You, Jesus, that You always stay too.\n\nWe love You.\n\nAmen. 🙏"
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
          <div style={{ fontFamily: "'Georgia', serif", color: "#3d2a5e", fontSize: "14px", fontStyle: "italic" }}>Episode 7 coming tonight at 7:30 PM...</div>
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
