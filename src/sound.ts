import { Howl, Howler } from 'howler';

export const incoming_msg_sound = new Howl({
  src: ['audio/incoming_msg.mp3'],
});

export const msg_sent_sound = new Howl({
  src: ['audio/msg_sent.mp3'],
});

export const intro_bgm = new Howl({
  src: ['audio/intro.mp3'],
  html5: true,
});

export const texting_bgm = new Howl({
  src: ['audio/texting_loop.mp3'],
  volume: 0.3,
  loop: true,
  html5: true,
});

export const ending_bgm = new Howl({
  src: ['audio/ending_loop.mp3'],
  loop: true,
  html5: true,
});

// id = intro_bgm.play()
export function stop_intro (id:number) {
  intro_bgm.fade(1, 0.25, 1500, id);
  setTimeout(
    () => intro_bgm.fade(0.25, 0, 3000, id),
    1500,
  );
}

export function stop_ending (id:number) {
  ending_bgm.fade(1, 0.25, 2000, id);
  setTimeout(
    () => ending_bgm.fade(0.25, 0, 4000, id),
    2000,
  );
}
