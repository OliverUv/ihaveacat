import { Howl, Howler } from 'howler';

const incoming_msg_sound = new Howl({
  src: ['audio/incoming_msg.mp3'],
});

const msg_sent_sound = new Howl({
  src: ['audio/msg_sent.mp3'],
});

const bgm_intro_bgm = new Howl({
  src: ['audio/bgm_intro.mp3'],
  html5: true,
});

const bgm_main_bgm = new Howl({
  src: ['audio/bgm_main_loop.mp3'],
  volume: 0.3,
  loop: true,
  html5: true,
});

const ending_bgm = new Howl({
  src: ['audio/ending_loop.mp3'],
  loop: true,
  html5: true,
});

export function play_msg_in() {
  incoming_msg_sound.play();
}

export function play_msg_out() {
  msg_sent_sound.play();
}

let bgm_intro_id:number;
export function play_bgm_intro() {
  bgm_intro_id = bgm_intro_bgm.play();
}

let bgm_main_id:number;
export function play_bgm_main() {
  bgm_main_id = bgm_main_bgm.play();
}

let bgm_ending_id:number;
export function play_bgm_ending() {
  bgm_ending_id = ending_bgm.play();
}

export function stop_bgm_intro() {
  bgm_intro_bgm.fade(1, 0.25, 1500, bgm_intro_id);
  setTimeout(
    () => bgm_intro_bgm.fade(0.25, 0, 3000, bgm_intro_id),
    1500,
  );
}

export function stop_bgm_main() {
  ending_bgm.fade(1, 0.25, 2000, bgm_main_id);
  setTimeout(
    () => ending_bgm.fade(0.25, 0, 4000, bgm_main_id),
    2000,
  );
}

export function stop_bgm_ending () {
  ending_bgm.fade(1, 0.25, 2000, bgm_ending_id);
  setTimeout(
    () => ending_bgm.fade(0.25, 0, 4000, bgm_ending_id),
    2000,
  );
}
