export interface QuestionItemTypes {
  id: number;
  question: string;
  answers: AnswerItemTypes[];
}
export interface AnswerItemTypes {
  id: number;
  text: string;
  target: TargetTyep;
  score: number;
}
export type TargetTyep = 'D' | 'C' | 'J' | 'P' | 'I' | 'E' | 'JP';

export const QUESTION_LIST: QuestionItemTypes[] = [
  {
    id: 1,
    question:
      '당신의 최애템이 전범기업의 제품이라는 것을 알게되었다. 새로 살 때가 됐는데.. 당신은?',
    answers: [
      {
        id: 1,
        text: '다른 대체품을 찾는다.',
        target: 'D',
        score: 3,
      },
      {
        id: 2,
        text: '이것만한게 없는데,,,, 어쩔 수 없이 다시 산다.',
        target: 'C',
        score: -3,
      },
    ],
  },
  {
    id: 2,
    question: '전범기업을 3개 이상 알고 있다.',
    answers: [
      {
        id: 1,
        text: '그렇다.',
        target: 'C',
        score: 1,
      },
      {
        id: 2,
        text: '아니다.',
        target: 'D',
        score: -1,
      },
    ],
  },
  {
    id: 3,
    question: '최근 2년 안에 일본여행을 간적있다.',
    answers: [
      {
        id: 1,
        text: '있다',
        target: 'C',
        score: 1,
      },
      {
        id: 2,
        text: '없다.',
        target: 'D',
        score: -1,
      },
    ],
  },
  {
    id: 4,
    question: '나는 국경일에 태국기를 계양한 적이 있다(SNS 게시 포함)',
    answers: [
      {
        id: 1,
        text: '있다',
        target: 'D',
        score: 5,
      },
      {
        id: 2,
        text: '없다.',
        target: 'C',
        score: -3,
      },
    ],
  },
  {
    id: 5,
    question:
      '당신은 어느 날과 다름 없이 출근(통학)하는 날! 당신의 출근(통학)룩은?',
    answers: [
      {
        id: 1,
        text: '어제 생각해놨던 옷으로 입어야징~',
        target: 'J',
        score: 1,
      },
      {
        id: 2,
        text: '아침에 부랴부랴 아무거나 꺼내서 입는다.',
        target: 'P',
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question:
      '출근(통학)길 중 지하철에서 만난 모르는 할아버지/할머니의 말도 안되는 시비... 당신의 대처는?',
    answers: [
      {
        id: 1,
        text: '어우 왜저래 진짜ㅠ 무시한다.',
        target: 'I',
        score: 1,
      },
      {
        id: 2,
        text: '아니 갑자기 뭔소리야? 하나하나 반박한다.',
        target: 'E',
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question:
      '그렇게 모르는 할아버지/할머니와 마무리되고 주위를 두리번거리는 순간 마스크를 쓰지 않은 사람이 보인다. 당신의 행동은?',
    answers: [
      {
        id: 1,
        text: '이 시국에 마스크를 안쓴다고? 코레일에 당장 연락한다.',
        target: 'E',
        score: 1,
      },
      {
        id: 2,
        text: '누군가는 연락하겠지... 마음속으로만 욕한다.',
        target: 'I',
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question:
      '회사(학교)에 도착 후 일한 뒤 점심시간! 점심 메뉴를 고를때의 당신은?',
    answers: [
      {
        id: 1,
        text: '지금 당장 먹고싶은 메뉴를 말한다.',
        target: 'E',
        score: 1,
      },
      {
        id: 2,
        text: '다수의 의견을 따른다.',
        target: 'I',
        score: 1,
      },
    ],
  },
  {
    id: 9,
    question: '퇴근 후 집에 도착한 당신. 갑자기 처리하지 못한 업무가 생각난다.',
    answers: [
      {
        id: 1,
        text: '내일 까먹기 전에 다이어리에 적어 놓는다.',
        target: 'J',
        score: 2,
      },
      {
        id: 2,
        text: '생각만 열심히 해놓는다.',
        target: 'JP',
        score: 1,
      },
      {
        id: 3,
        text: '내일 어떻게든 되겠지~ 내일의 나에게 맡겨놓는다.',
        target: 'P',
        score: 2,
      },
    ],
  },
  {
    id: 10,
    question:
      '불금이지만 약속이 없어 집에서 뒹굴거리고 있는데 갑자기 친구에게 나오라고 연락이 온다!',
    answers: [
      {
        id: 1,
        text: '바로 약속 장소로 나간다.',
        target: 'P',
        score: 2,
      },
      {
        id: 2,
        text: '계획에 없던 약속은 별룽,, 담에 만나자~!',
        target: 'J',
        score: 2,
      },
    ],
  },
];

export interface ResultTypes {
  id: number;
  name: ResultNameType;
  title: string;
  contants: string[];
}
export type ResultNameType = 'CE' | 'CI' | 'DEJ' | 'DIJ' | 'DEP' | 'DIP';

export const RESULT_LIST: ResultTypes[] = [
  {
    id: 1,
    name: 'CE',
    title: '적극/친일파',
    contants: [
      '혹시,, 전생의 이완용? 앞장서서 나라를 팔아 먹었을 수 도 있어요..',
      '당신의 지금 눈 앞에 있는 이익만을 위해서 주변 사람이 어떻게 되어도 신경쓰지 않고 모든 걸 다 거는 사람',
      '혹시라도 지금 잘살고 있다면 전재산 환원하세요. 정말 조상이 이완용이라면 다른 사람의 피와 살을 밟고 일으켜진 재산이니까요~!',
    ],
  },
  {
    id: 2,
    name: 'CI',
    title: '소극/친일파',
    contants: [
      '당신은 앞잡이',
      '자그마한 이익이라도 포기하지 못하고 포기하지 못하는 사람. 하지만 배포도 많지 않아 쫌쫌따리 해먹는 사람이에요. ',
      '주위사람을 버리고 당장의 이익을 쫓았지만 얻는 것 하나도 없이 당신은 쓰고 버려지는 패로 팽당했을 거에요',
      '혹시라도 지금 잘살고 있다면 전재산 환원하세요. ',
    ],
  },
  {
    id: 3,
    name: 'DEP',
    title: '적극/무계획 - 의리의 독립투사',
    contants: [
      '가장 앞장서서 독립운동을 하는 타입! 제일 먼저 일본군의 눈에 띌 수 있어요',
      '하지만 그만큼 의리도 뛰어나서 본인이 알고 있는 정보를 말하지 않아요',
      '활동적인 성격인 탓에 본인의 열정을 주체할 수 없어요. 다양한 활동을 추진하지만 뒷감당은... 혼자서는 힘든 타입! 당신은 혼자가 아니니 주위 사람들과 어쩌구 저쩌구',
    ],
  },
  {
    id: 4,
    name: 'DEJ',
    title: '적극/계획 - 앞장서는 의사',
    contants: [
      '불의를 참을 수 없는 당신.. 우리나라를 강제로 점령해버린 일본에게 화가 나지만 계획없이 무작정 독립운동 할 순 없어요. 체계적으로 나라를 되찾기 위해 독립운동단체를 세우거나, 독립운동단체에 가입했을 타입!',
      '꼼꼼한 계획을 세워 여러 명과의 계획에서도 틀어짐 없이 계획 수행. 하지만 상황에 민첩하게 대응할 수 있어 계획이 틀어져도 성공적인 방향으로 이끎',
      '리더십 굿. 하지만 다른 사람의 의견보다 본인의 의견을 더 내세우려는 나머지 동료들과 불화가 생길 수 있어요',
      '상황에 민첩, 일처리에 있어 자신이 주도적인 입장에 있어야함',
      '직진 성향, 머뭇거림X, 남의 의견보다 자신의 의견을 피력하려는 나머지 주위 사람에게 공격적으로 비춰질 수 있음',
    ],
  },
  {
    id: 5,
    name: 'DIP',
    title: '소극/무계획 - 마음속 ~~~ 지사',
    contants: [
      '일본군에게 쫒기는 독립군이 있다면 집에 잠깐 숨겨주는 것 까진 가능',
      '주위에서 친구들이 독립운동에 동참해도 용기가 없어 실행하진 않음',
      '느긋, 관대, 여유',
      '세상 순응적으로 살아가며 무리를 이끌 때 민주적인 지도력',
      '우유부단',
    ],
  },
  {
    id: 6,
    name: 'DIJ',
    title: '소극/계획 - 열사',
    contants: [
      '앞장서서 독립운동 하지는 않지만 그림자같이 전달책 혹은 자금조달 역할로 활약',
      '계획을 위해선 목숨도 바칠 수 있다?????????????????????? 마져? 바칠수있어? 소극?',
      '무엇을 쉽게 믿으려 하지 않음',
      '배후 주동형으로써 직접 나서려는 것으 ㄹ꺼려하며 작전참모의 역할 수행',
    ],
  },
];
