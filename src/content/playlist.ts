import {
  Chat,
  NodeType,
  PlayList,
  PlayType,
  Scene,
} from '../game';

const scene1:Scene = {
  type: PlayType.scene,
  id: 'scene_one',
};

export const chat1:Chat = {
  type: PlayType.chat,
  chat_id: 'oliver',
  content: [
    {
      type: NodeType.system_message,
      id: `S1`,
    },
    {
      type: NodeType.npcsay,
      id: `O1`,
    },
    {
      type: NodeType.npcsay,
      id: `O2`,
    },
    {
      type: NodeType.npcimage,
      id: `O3`,
    },
    {
      type: NodeType.npcsay,
      id: `O4`,
    },
    {
      type: NodeType.pcsay,
      choices: [
        'C1',
        'C2',
        'C3',
      ],
    },
    {
      type: NodeType.npcsay,
      id: `O5`,
    },
    {
      type: NodeType.npcsay,
      id: `O6`,
    },
    {
      type: NodeType.system_message,
      id: `S2`,
    },
  ],
};

// export const testchat:Chat = {
//   type: PlayType.chat,
//   chat_id: 'oliver',
//   content: [
//     {
//       type: NodeType.npcsay,
//       id: 'testchat_1',
//     },
//     {
//       type: NodeType.pcsay,
//       choices: [
//         'testchat_21',
//         'testchat_22',
//         {
//           id: 'testchat_23',
//           next: {
//             type: NodeType.npcsay,
//             id: 'testchat_24',
//           },
//         },
//       ],
//     },
//     {
//       type: NodeType.npcsay,
//       id: 'testchat_3',
//     },
//     {
//       type: NodeType.npcsay,
//       id: 'testchat_4',
//       npc: 'bingo',
//     },
//     {
//       type: NodeType.pcimage,
//       choices: [
//         'testchat_5',
//         {
//           id: 'testchat_6',
//           next: {
//             type: NodeType.npcsay,
//             id: 'testchat_7',
//           },
//         },
//       ],
//     },
//     {
//       type: NodeType.pcbutton,
//       choices: [
//         {
//           id: 'testchat_8',
//           color: '#ffffff',
//           disabled: false,
//           next: {
//             type: NodeType.npcsay,
//             id: 'testchat_9',
//           },
//         },
//         {
//           id: 'testchat_10',
//           color: '#333333',
//           disabled: true,
//           next: {
//             type: NodeType.npcsay,
//             id: 'testchat_11',
//           },
//         },
//       ],
//     },
//   ],
// };

export const playlist:PlayList = [
  scene1,
  chat1,
];
