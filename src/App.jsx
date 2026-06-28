import { useState, useEffect } from "react";

const stories = [
  {
    id: 1,
    title: "The Lost Fireflies",
    episode: "Episode 1",
    emoji: "✨",
    gradientCard: "linear-gradient(135deg, #1a0a3e, #2d5a1a)",
    pages: [
      {
        text: `The sun had just dipped behind the hills when Ellie grabbed her little sister's hand.\n\n"Katie," she whispered, eyes wide, "the fireflies are gone."\n\nEvery summer night, hundreds of tiny golden lights danced above the meadow behind the house. But tonight — nothing. Just darkness.\n\nKatie looked around, then looked at Ellie. "Did *we* break them?"\n\n"We can't break fireflies, Katie."\n\n"I broke a cracker once just by looking at it."\n\nEllie stared at her. "That's... not the same thing."`,
        emoji: "🌑",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d1b69 50%, #1a2a1a 100%)"
      },
      {
        text: `Daddy had been inside finishing his evening workout — push-ups, pull-ups, the whole plan — when he heard them calling.\n\nHe jogged out still catching his breath, hands on his hips. "Alright team. Full report. What's the situation?"\n\n"The fireflies are GONE, Daddy," Ellie said.\n\nHe gasped dramatically. *"All of them?!"*\n\n"ALL of them," Katie confirmed, arms crossed, fully ready to handle it.\n\n"Okay." Daddy cracked his knuckles. "I have a plan."`,
        emoji: "💪",
        gradient: "linear-gradient(160deg, #0d1f0d 0%, #1a3a1a 50%, #2d1b69 100%)"
      },
      {
        text: `The three of them moved into the meadow like a team on a mission — Daddy leading, Ellie Girl right behind him still talking about three different things at once, and Katers bringing up the rear with a stick she'd found, ready for anything.\n\nKatie spotted it first — a little jar tipped over by the old oak tree, with a few tired fireflies resting inside, too cozy to fly.\n\n"Found 'em," Katie announced, already moving toward it.\n\nEllie Girl ran up beside her. "We fix it together." She grabbed her sister's hand. "On three."`,
        emoji: "🫙",
        gradient: "linear-gradient(160deg, #1a1a0a 0%, #2a2a0d 40%, #1a3a1a 100%)"
      },
      {
        text: `They tilted the jar gently together until each little light floated free — blinking, spinning, soaring back into the sky. The whole meadow glowed again.\n\nKatie immediately sprinted after one, leaped, missed, and landed face-first in a bush.\n\nShe popped straight back up. "I'm okay!" Leaves everywhere. Zero regrets.\n\nDaddy scooped her up laughing. "You good, Katers?"\n\n"I almost had it," she said seriously.\n\nEllie Girl was already spinning in the light, singing a song she made up on the spot about fireflies. It had about forty verses.`,
        emoji: "🌟",
        gradient: "linear-gradient(160deg, #1a0a3e 0%, #2d5a1a 40%, #4a7a2a 100%)"
      },
      {
        text: `Daddy got quiet and looked out at all the little lights dancing across the meadow.\n\n"You know who made every single one of those?" he said.\n\n"Jesus?" said Ellie.\n\n"Jesus," Daddy nodded. "And the same Jesus who made every firefly, every star, every glowing thing — He knows *your* name. He loves *you* even more than all of this."\n\nKatie pulled a leaf out of her hair and thought hard about that. "Even me?"\n\nDaddy kissed her forehead. "Especially you, Katers."\n\nEllie Girl slipped her hand into Daddy's. "I'm glad Jesus made us."\n\n"Me too, Ellie Girl," Daddy said softly. "Me too." 🌟`,
        emoji: "🙏",
        gradient: "linear-gradient(160deg, #0a0a2e 0%, #1a1a5e 40%, #2d5a1a 100%)"
      }
    ],
    lesson: "Jesus made you and knows your name — you are deeply loved.",
    questions: [
      "Who made the fireflies, the stars, and YOU? 🌟",
      "If Jesus knows your name, does that mean He thinks about you? What do you think that feels like?",
      "Ellie and Katie fixed the firefly jar together — can you think of a time you two helped each other today?"
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
        text: `It was supposed to be a simple hike. Daddy had said so himself — he'd looked at the map, checked the trail rating, made a whole plan.\n\n"Easy trail, girls. Totally flat. Nothing crazy. I've done my research."\n\nMommy had smiled from behind her coffee. "Famous last words, Ryan."\n\nDaddy pointed at her. "I have a *plan*, Shelby."\n\nThat was before the mud.`,
        emoji: "🗺️",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #98D8C8 50%, #7CB87A 100%)"
      },
      {
        text: `Nobody knew where it came from. One minute the path was dry and sunny. The next — *SCHLORP* — Ellie's boot disappeared into a giant puddle of brown, goopy mud.\n\n"DADDY." She stood perfectly still, one boot in, one boot out. "I. Am. STUCK."\n\nDaddy looked at her. Then at the mud. Then back at her. He pressed his lips together very, very hard.\n\n"Don't you dare laugh," said Ellie Girl.\n\nHe laughed. He absolutely, completely laughed.\n\nKatie walked up, picked up a stick, and poked the mud twice. "Yep," she announced. "That's mud. I'll get her out." She grabbed Ellie's hand and pulled with everything she had.\n\n"KATERS I'm not a turnip—"`,
        emoji: "👢",
        gradient: "linear-gradient(160deg, #8B6914 0%, #A0784A 40%, #7CB87A 100%)"
      },
      {
        text: `Daddy waded in, grabbed Ellie Girl under the arms, and pulled — *THWOOOOP* — she came flying out, boot and all, and all three of them tumbled backwards into the bushes.\n\nFull chaos. Perfect chaos.\n\nThe girls lost it. Ellie started singing a made-up song called "The Mud Song." It was mostly just the word "mud" repeated many, many times.\n\nKatie was already back on her feet, sizing up the trail ahead. Rocky. Steep. Long.\n\n"Okay," she said, dusting off her hands. "What's next?"`,
        emoji: "⛰️",
        gradient: "linear-gradient(160deg, #6B8E23 0%, #8B7355 50%, #87CEEB 100%)"
      },
      {
        text: `Daddy knelt down and looked at both girls. "This next part is a real climb. Legs will burn. But we finish what we start — that's what our family does."\n\n"That's what Jesus does too, right?" Ellie Girl said. "He never quits on us?"\n\nDaddy pointed at her. "*That's* it, Ellie Girl. The Bible says Jesus is like a shepherd — He doesn't abandon His sheep on the hard hills. He goes *with* them."\n\nKatie had already started climbing. She looked back over her shoulder. "You guys coming or what?"`,
        emoji: "🤝",
        gradient: "linear-gradient(160deg, #2d5a1a 0%, #4a7a2a 50%, #87CEEB 100%)"
      },
      {
        text: `They climbed — all three of them — one muddy, laughing, determined step at a time. Katie led most of the way up, and when Ellie's legs got tired near the top, Katers grabbed her hand and pulled her the last stretch.\n\nAt the top, the view took their breath away. Golden Michigan hills and blue sky as far as they could see.\n\n"Daddy," Ellie said quietly, "did Jesus make all of this?"\n\n"Every single bit," he said.\n\nKatie stood at the very edge, hands on her hips, looking out like she owned the whole horizon.\n\n"He's pretty good," she said.\n\nDaddy laughed his best laugh. "Yeah, Katers. He really is." 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #87CEEB 60%, #4a8a3a 100%)"
      }
    ],
    lesson: "Jesus is our Good Shepherd — He goes with us on every hard hill.",
    questions: [
      "When the trail got hard, what did Daddy say Jesus does — does He leave us or go *with* us?",
      "Katie didn't stop at the hard part — she just kept climbing! Can you think of something hard you kept going at this week?",
      "Katers grabbed Ellie's hand and pulled her up the last part. How can YOU pull someone up when they need help?"
    ],
    prayer: "Dear Jesus,\n\nThank You for being our Good Shepherd — for never leaving us alone on the hard hills. When things feel too steep or too tough, remind Ellie Girl and Katers that You are right there with them, every single step.\n\nThank You for giving them each other. Help them always be the kind of sisters who pull each other up.\n\nGive them strong, sweet sleep tonight. You've got them.\n\nWe love You.\n\nAmen. 🙏"
  },
  {
    id: 3,
    title: "The Great Cleveland Cannonball",
    episode: "Episode 3",
    emoji: "💦",
    gradientCard: "linear-gradient(135deg, #1a6a9e, #0a3a6e)",
    pages: [
      {
        text: `The car had been moving for what felt like one million years.\n\nEllie Girl knew this because she had asked "are we there yet?" exactly forty-seven times. She had counted.\n\n"Forty-eight," she said. "Are we there yet?"\n\nDaddy gripped the steering wheel and smiled the smile of a man holding it together. "Ninety more minutes, Ellie Girl."\n\n"That's basically forever."\n\nKatie looked up from her snack. "I dropped my cracker."\n\n"When?" Mommy asked.\n\n"A while ago."\n\n"How long ago, Katers?"\n\nKatie thought about it. "Ohio."`,
        emoji: "🚗",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #4a8ab4 50%, #2a5a8a 100%)"
      },
      {
        text: `But then — finally, gloriously — Daddy turned onto the familiar street, and both girls saw it at the same time.\n\n*The pool.*\n\n"PAPA BUD'S POOL!!!" Ellie Girl shrieked so loud the windows practically rattled.\n\nKatie already had her seatbelt off before the car stopped. "KATERS. Car is still moving," Daddy said.\n\n"I know," she said calmly. "I'm just ready."\n\nPapa Bud was waiting in the driveway, arms out wide. He scooped Katie up first — "There's my CUTIE!" — and immediately went for the chin.\n\n"THE CHIN!" Katie screamed, laughing so hard she folded in half. She recovered in three seconds and went straight for a counterattack. Papa Bud had no idea what hit him.`,
        emoji: "🏠",
        gradient: "linear-gradient(160deg, #2a5a8a 0%, #1a6a9e 50%, #0a8a5e 100%)"
      },
      {
        text: `Didi came around the corner in her workout clothes, because Didi was always either working out or about to work out. She scooped both girls up at the same time like it was nothing — because Didi was strong like that.\n\nWithin four minutes, both girls were in their swimsuits.\n\nEllie Girl stood at the edge of the pool, arms raised, chin up. "I am going to do the biggest cannonball in the history of cannonballs."\n\n"Big claim," said Daddy, already in the water.\n\n"I am a big person."\n\n"You're four."\n\n"Fearlessly four," she corrected, and jumped.\n\nIt was, genuinely, an incredible cannonball. Papa Bud got soaked in his lawn chair and raised his lemonade like a trophy without flinching.`,
        emoji: "🏊",
        gradient: "linear-gradient(160deg, #0a4a8a 0%, #1a7ab4 50%, #0a9a9e 100%)"
      },
      {
        text: `Katie stood at the edge of the diving board — the *real* diving board, the high one — arms crossed, studying it like a coach reviewing game film.\n\n"I'm going off this one," she announced.\n\nDaddy looked up. "That's the big board, Katers."\n\n"I know," she said simply.\n\nShe bounced once. Twice. Then she ran three steps and launched herself off with a wild yell — *"CANNONBAAAAALL"* — tucked her knees, and hit the water like a meteor.\n\nThe splash was enormous. Papa Bud's lemonade didn't survive this one.\n\nKatie surfaced, threw both fists in the air, and looked at Daddy. "Your turn."`,
        emoji: "🤸",
        gradient: "linear-gradient(160deg, #1a2a6e 0%, #0a5a9e 40%, #0a8abe 100%)"
      },
      {
        text: `Later, wrapped in towels, eating Papa Bud's famous burgers — the ones he only made in Cleveland — Daddy looked at both girls.\n\n"You know what I love about today? Neither one of you quit. You both went for it. You know where that comes from?"\n\n"Jesus?" said Ellie, mouth full.\n\n"The Bible says God doesn't give us a spirit of fear," Daddy said. "He gives us *power.* That boldness you showed today — that's His gift to you. He made you brave on purpose."\n\nKatie nodded like that was exactly what she already suspected.\n\nPapa Bud leaned over and ruffled her hair. "Cutie almost took my lemonade out permanently." 🌟`,
        emoji: "🍔",
        gradient: "linear-gradient(160deg, #1a3a2a 0%, #2a5a3a 40%, #FF8C42 100%)"
      }
    ],
    lesson: "God made you brave on purpose — He gives us power, not fear.",
    questions: [
      "Daddy said God gives us power, not fear. What's one brave thing YOU did today — even something small?",
      "Katie went off the high dive without anyone pushing her. Where do you think that boldness comes from?",
      "If Jesus made you brave on purpose, how does that change the way you think about trying hard things?"
    ],
    prayer: "Dear Jesus,\n\nThank You that You don't give us a spirit of fear. You give us POWER — and You put it inside of Ellie Girl and Katers on purpose, before they were even born.\n\nThank You for big cannonballs and Papa Bud's burgers and Didi's hugs and days that feel like pure gift.\n\nRemind these brave girls tomorrow — and every day — that the boldness inside them is from You. Help them use it for good things, for kind things, and for You.\n\nNow give them the best sleep.\n\nWe love You, Jesus.\n\nAmen. 🙏"
  },
  {
    id: 4,
    title: "The Lake Day Rescue",
    episode: "Episode 4",
    emoji: "⛵",
    gradientCard: "linear-gradient(135deg, #0a5a8e, #1a9a6e)",
    pages: [
      {
        text: `Eight minutes. That's all it took to get to Pops and Gigi's house — eight glorious minutes from their driveway in Michigan to the lake.\n\nEllie Girl counted every one of them out loud. Including the seconds.\n\nKatie sat next to her staring out the window at the water getting closer, a look on her face like a general arriving at a battlefield she was very excited about.\n\n"TODAY," Katie announced to no one in particular, "is going to be a great day."\n\nShe was not wrong.`,
        emoji: "🌊",
        gradient: "linear-gradient(160deg, #87CEEB 0%, #1a9abe 50%, #0a6a8e 100%)"
      },
      {
        text: `Pops was already on the dock in his fishing hat, getting the boat ready. Gigi had snacks laid out like she was feeding an army — because she always did, because Gigi was the best.\n\n"MY GIRLS!" Gigi called, arms wide open.\n\nEllie ran into them immediately and started telling Gigi about everything that had happened since Tuesday. All of it. In one breath.\n\nKatie went straight to Pops. "Are we taking the boat out?"\n\n"Soon as Daddy helps me with this rope," Pops said.\n\nKatie looked at the rope. Looked at Pops. "I can do it."\n\nPops raised an eyebrow. She did it in about forty-five seconds. Pops looked at Daddy. Daddy shrugged proudly.`,
        emoji: "🎣",
        gradient: "linear-gradient(160deg, #0a5a8e 0%, #1a8abe 40%, #2aaa7e 100%)"
      },
      {
        text: `Out on the lake, the wind was perfect and the water was bright blue and Ellie Girl was singing a Frozen song at full volume across the open water.\n\n"ELLIE." Daddy said.\n\n"THE WIND IS BLOWING IT AWAY, DADDY, I HAVE TO SING LOUDER."\n\nPops just laughed. Gigi handed everyone juice boxes.\n\nThen Katie spotted something. A little duck, way out from the reeds, spinning in circles — one wing held funny, stuck somehow in a piece of fishing line.\n\n"Pops," she said quietly, standing up. "We have to help that duck."`,
        emoji: "🦆",
        gradient: "linear-gradient(160deg, #1a7abe 0%, #0a5a8e 40%, #2a8a4e 100%)"
      },
      {
        text: `Pops steered close. The duck splashed and fussed. Katie didn't flinch — she leaned over the side of the boat, calm and steady, and Daddy held her waist while she carefully worked the line loose with her fingers.\n\nIt took a minute. The duck was not happy about it.\n\nThen — free. The duck shook its whole body, ruffled its feathers, and paddled away fast like nothing happened. No thank you. Just gone.\n\nKatie watched it go. "You're welcome," she said flatly.\n\nEveryone on the boat lost it.`,
        emoji: "🙌",
        gradient: "linear-gradient(160deg, #0a4a6e 0%, #1a8a9e 50%, #2aaa6e 100%)"
      },
      {
        text: `On the way back to the dock, Daddy sat next to Katie at the front of the boat, wind in their faces.\n\n"You know what you did today?" he said.\n\n"Saved a duck," she said.\n\n"You did. But you know what else? You saw something hurting and you didn't just watch — you *moved.* You helped." He put his arm around her. "Jesus was like that. He always moved toward the ones who were hurting. He never just watched."\n\nKatie thought about that. "So we should do what Jesus did?"\n\n"That's exactly it," Daddy said. "That's called loving people the way He loved them."\n\nEllie Girl appeared from the back of the boat. "I was going to save the duck too but I was singing."\n\n"We know, Ellie Girl," said everyone.\n\nGigi had dinner ready the second they hit the dock. 🌟`,
        emoji: "🌅",
        gradient: "linear-gradient(160deg, #FF8C42 0%, #FFB347 30%, #1a8abe 70%, #0a5a8e 100%)"
      }
    ],
    lesson: "Jesus always moved toward hurting people — and we can too.",
    questions: [
      "Katie saw the duck hurting and moved to help right away. Can you think of someone who might need help tomorrow?",
      "Daddy said Jesus always moved *toward* the ones who were hurting. What does that tell you about what Jesus is like?",
      "Is it easier to help others when you're brave? Why do you think God made Katers so bold?"
    ],
    prayer: "Dear Jesus,\n\nThank You for lake days and Pops and Gigi and boat rides and the way Michigan summers feel like pure gift.\n\nThank You for giving Katers eyes that notice when something is hurting — and a heart that moves to help. Give Ellie Girl and Katers that same heart every single day. Help them see the people around them who need kindness, and give them the courage to move toward them the way You always did.\n\nYou are so good to this family, Jesus.\n\nNow rest these girls. They earned it.\n\nWe love You.\n\nAmen. 🙏"
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
      fontSize: "14px", cursor: "pointer", fontFamily: "'Georgia', serif",
      transition: "background 0.2s"
    }}>{label}</button>
  );
}

function TopBar({ left, center, right }) {
  return (
    <div style={{
      width: "100%", padding: "14px 18px", display: "flex",
      alignItems: "center", justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      boxSizing: "border-box"
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
        center={
          <div>
            <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
            <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Bedtime Prayer</div>
          </div>
        }
      />
      <div style={{ maxWidth: "480px", width: "100%", padding: "28px 20px 40px", display: "flex", flexDirection: "column", gap: "20px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "52px", marginBottom: "10px" }}>🙏</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#FFD700", fontSize: "21px", fontWeight: "bold" }}>Tonight's Prayer</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#9B7FD4", fontSize: "13px", fontStyle: "italic", marginTop: "5px" }}>Read aloud over Ellie Girl & Katers</div>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "26px 24px",
          border: "1px solid rgba(255,215,0,0.18)", boxSizing: "border-box"
        }}>
          {story.prayer.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontFamily: "'Georgia', serif", fontSize: "17px", lineHeight: "1.85",
              color: para.startsWith("Amen") ? "#FFD700" : "#F0E6FF",
              fontWeight: para.startsWith("Amen") ? "700" : "400",
              margin: "0 0 14px",
              textAlign: para.startsWith("Amen") ? "center" : "left"
            }}>{para}</p>
          ))}
        </div>
        <button onClick={onDone} style={{
          background: "linear-gradient(135deg, #c8960a, #FFD700)",
          border: "none", borderRadius: "14px", color: "#1a0a2e",
          padding: "16px", fontSize: "17px", cursor: "pointer",
          fontFamily: "'Georgia', serif", fontWeight: "bold",
          boxShadow: "0 4px 20px rgba(255,215,0,0.3)", letterSpacing: "0.3px"
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
        center={
          <div>
            <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
            <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>Talk It Over</div>
          </div>
        }
      />
      <div style={{ maxWidth: "480px", width: "100%", padding: "28px 20px 40px", display: "flex", flexDirection: "column", gap: "14px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "46px", marginBottom: "8px" }}>💬</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#FFD700", fontSize: "20px", fontWeight: "bold" }}>Talk It Over</div>
          <div style={{
            fontFamily: "'Georgia', serif", color: "#C9A8FF", fontSize: "13px",
            fontStyle: "italic", marginTop: "8px",
            background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "10px 16px"
          }}>
            Tonight's lesson: <span style={{ color: "#FFD700" }}>{story.lesson}</span>
          </div>
        </div>
        {story.questions.map((q, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.07)", borderRadius: "16px",
            padding: "18px 20px", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", gap: "14px", alignItems: "flex-start"
          }}>
            <div style={{
              width: "30px", height: "30px", borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #5a28a0, #8a40c0)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: "14px", fontFamily: "'Georgia', serif", fontWeight: "bold"
            }}>{i + 1}</div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "16px", lineHeight: "1.65", color: "#F0E6FF", margin: 0 }}>{q}</p>
          </div>
        ))}
        <button onClick={onNext} style={{
          background: "linear-gradient(135deg, #5a28a0, #8a40c0)",
          border: "none", borderRadius: "14px", color: "#fff",
          padding: "16px", fontSize: "16px", cursor: "pointer",
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

  if (phase === "questions") {
    return <QuestionsScreen story={story} onBack={() => setPhase("story")} onNext={() => setPhase("prayer")} />;
  }
  if (phase === "prayer") {
    return <PrayerScreen story={story} onBack={() => setPhase("questions")} onDone={onBack} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "40px" }}>
      <TopBar
        left={<BackButton onClick={onBack} />}
        center={
          <div>
            <div style={{ color: "#FFD700", fontSize: "11px", fontFamily: "'Georgia', serif", letterSpacing: "1.5px", textTransform: "uppercase" }}>{story.episode}</div>
            <div style={{ color: "#C9A8FF", fontSize: "14px", fontFamily: "'Georgia', serif" }}>{story.title}</div>
          </div>
        }
        right={
          <span style={{ color: "#7B5FA4", fontSize: "13px", fontFamily: "'Georgia', serif" }}>
            {page + 1} / {story.pages.length}
          </span>
        }
      />

      {/* Progress dots */}
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
        <div style={{
          background: "rgba(255,255,255,0.06)", borderRadius: "20px",
          padding: "22px 22px 6px", border: "1px solid rgba(255,255,255,0.1)"
        }}>
          {renderText(currentPage.text)}
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", padding: "20px 18px 0", width: "100%", maxWidth: "480px", boxSizing: "border-box" }}>
        {page > 0 && (
          <button onClick={() => setPage(p => p - 1)} style={{
            flex: 1, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "14px", color: "#C9A8FF", padding: "15px", fontSize: "15px",
            cursor: "pointer", fontFamily: "'Georgia', serif"
          }}>← Back</button>
        )}
        {!isLast ? (
          <button onClick={() => setPage(p => p + 1)} style={{
            flex: page > 0 ? 2 : 1,
            background: "linear-gradient(135deg, #5a28a0, #8a40c0)",
            border: "none", borderRadius: "14px", color: "#fff",
            padding: "15px", fontSize: "15px", cursor: "pointer",
            fontFamily: "'Georgia', serif", fontWeight: "bold",
            boxShadow: "0 4px 20px rgba(90,40,160,0.45)"
          }}>Next Page →</button>
        ) : (
          <button onClick={() => setPhase("questions")} style={{
            flex: page > 0 ? 2 : 1,
            background: "linear-gradient(135deg, #c8960a, #FFD700)",
            border: "none", borderRadius: "14px", color: "#1a0a2e",
            padding: "15px", fontSize: "15px", cursor: "pointer",
            fontFamily: "'Georgia', serif", fontWeight: "bold",
            boxShadow: "0 4px 20px rgba(255,215,0,0.3)"
          }}>Talk About It 💬</button>
        )}
      </div>
    </div>
  );
}

function Stars() {
  const [stars] = useState(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      size: Math.random() * 2.2 + 0.8,
      top: Math.random() * 68,
      left: Math.random() * 100,
      dur: Math.random() * 3 + 1.5,
      delay: Math.random() * 2.5
    }))
  );
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <style>{`@keyframes tw{from{opacity:0.1}to{opacity:0.9}} @keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
      {stars.map(s => (
        <div key={s.id} style={{
          position: "absolute", width: s.size + "px", height: s.size + "px",
          background: "#fff", borderRadius: "50%",
          top: s.top + "%", left: s.left + "%", opacity: 0.25,
          animation: `tw ${s.dur}s ease-in-out ${s.delay}s infinite alternate`
        }} />
      ))}
    </div>
  );
}

export default function App() {
  const [activeStory, setActiveStory] = useState(null);

  if (activeStory) {
    return <StoryScreen story={activeStory} onBack={() => setActiveStory(null)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: BG, display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "56px" }}>
      <Stars />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "48px 24px 30px" }}>
        <div style={{ fontSize: "60px", marginBottom: "6px", animation: "fl 4s ease-in-out infinite", display: "inline-block" }}>🌙</div>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", letterSpacing: "3.5px", color: "#6a4a94", textTransform: "uppercase", marginBottom: "12px" }}>
          A Bedtime Story Series
        </div>
        <h1 style={{
          fontFamily: "'Georgia', serif", fontSize: "31px", fontWeight: "bold",
          color: "#FFD700", margin: "0 0 10px", lineHeight: 1.22,
          textShadow: "0 0 40px rgba(255,215,0,0.3)"
        }}>
          The Adventures of<br />Ellie & Katie
        </h1>
        <p style={{ fontFamily: "'Georgia', serif", fontSize: "14px", color: "#B090E0", fontStyle: "italic", margin: 0 }}>
          Sisters · Best Friends · Forever Teammates ✨
        </p>
      </div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px", padding: "0 18px", display: "flex", flexDirection: "column", gap: "12px", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#6a4a94", letterSpacing: "2.5px", textTransform: "uppercase", paddingLeft: "4px", marginBottom: "2px" }}>
          📖 All Stories
        </div>

        {stories.map(story => (
          <button key={story.id} onClick={() => setActiveStory(story)} style={{
            background: "rgba(255,255,255,0.055)", border: "1px solid rgba(255,255,255,0.11)",
            borderRadius: "20px", padding: "18px", cursor: "pointer",
            textAlign: "left", width: "100%", transition: "background 0.2s, transform 0.15s",
            boxSizing: "border-box"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.055)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: story.gradientCard,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "24px", flexShrink: 0, boxShadow: "0 4px 14px rgba(0,0,0,0.35)"
              }}>{story.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "11px", color: "#9060C0", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{story.episode}</div>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "17px", fontWeight: "bold", color: "#EEE0FF", marginBottom: "5px", lineHeight: 1.2 }}>{story.title}</div>
                <div style={{ display: "flex", gap: "2px" }}>{[...Array(5)].map((_, i) => <StarIcon key={i} />)}</div>
              </div>
              <div style={{ color: "#6a4a94", fontSize: "20px", flexShrink: 0 }}>›</div>
            </div>
            <div style={{
              marginTop: "12px", paddingTop: "12px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              fontFamily: "'Georgia', serif", fontSize: "12px",
              color: "#9060C0", fontStyle: "italic", lineHeight: 1.4
            }}>
              💡 {story.lesson}
            </div>
          </button>
        ))}

        <div style={{
          background: "rgba(255,255,255,0.025)", border: "1px dashed rgba(255,255,255,0.09)",
          borderRadius: "20px", padding: "22px", textAlign: "center"
        }}>
          <div style={{ fontSize: "28px", marginBottom: "7px" }}>🌙</div>
          <div style={{ fontFamily: "'Georgia', serif", color: "#3d2a5e", fontSize: "14px", fontStyle: "italic" }}>
            Episode 5 coming tonight at 7:30 PM...
          </div>
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
