const SECTIONS = [
    {
        id: 'logic',
        title: '1-БӨЛІМ — ЛОГИКА ЖӘНЕ ОЙЛАУ',
        icon: '🧠',
        color: '#8b5cf6', // Violet
        categories: [
            { id: 'logic_patterns', title: 'Заңдылықтар', icon: '🔗', stars: 0, total: 5 },
            { id: 'logic_odd_one', title: 'Артық затты тап', icon: '❌', stars: 0, total: 5 },
            { id: 'logic_prediction', title: 'Жалғасын тап', icon: '🔮', stars: 0, total: 5 },
            { id: 'logic_cause_effect', title: 'Себеп-салдар', icon: '⚡', stars: 0, total: 5 },
            { id: 'logic_spatial', title: 'Кеңістіктік ойлау', icon: '📐', stars: 0, total: 5 },
            { id: 'logic_classification', title: 'Жіктеу', icon: '📂', stars: 0, total: 5 },
            { id: 'logic_sequence', title: 'Іс-әрекет реті', icon: '📋', stars: 0, total: 5 },
            { id: 'logic_visual', title: 'Суретті логика', icon: '🖼️', stars: 0, total: 5 },
            { id: 'logic_true_false', title: 'Шын немесе жалған', icon: '✅', stars: 0, total: 5 },
        ]
    },
    {
        id: 'math',
        title: '2-БӨЛІМ — МАТЕМАТИКА ЖӘНЕ САНДАР',
        icon: '🔢',
        color: '#3b82f6', // Blue
        categories: [
            { id: 'math_add_sub', title: 'Қосу және азайту', icon: '➕', stars: 0, total: 5 },
            { id: 'math_compare', title: 'Сандарды салыстыру', icon: '⚖️', stars: 0, total: 5 },
            { id: 'math_missing', title: 'Түсіп қалған сан', icon: '❓', stars: 0, total: 5 },
            { id: 'math_multiply', title: 'Көбейту', icon: '✖️', stars: 0, total: 5 },
            { id: 'math_divide', title: 'Бөлу', icon: '➗', stars: 0, total: 5 },
            { id: 'math_word_problems', title: 'Мәтіндік есептер', icon: '📝', stars: 0, total: 5 },
            { id: 'math_measurements', title: 'Шамалармен жұмыс', icon: '📏', stars: 0, total: 5 },
            { id: 'math_geometry', title: 'Геометрия', icon: '🔺', stars: 0, total: 5 },
            { id: 'math_logic', title: 'Математикалық логика', icon: '📊', stars: 0, total: 5 },
        ]
    },
    {
        id: 'attention',
        title: '3-БӨЛІМ — ЗЕЙІН ЖӘНЕ ЕСТЕ САҚТАУ',
        icon: '👀',
        color: '#eab308', // Yellow/Gold
        categories: [
            { id: 'attn_diff', title: 'Айырмашылықты тап', icon: '🔍', stars: 0, total: 3 },
            { id: 'attn_memory_repeat', title: 'Есте сақта және қайтала', icon: '🧠', stars: 0, total: 3 },
            { id: 'attn_missing', title: 'Не жоғалды?', icon: '👻', stars: 0, total: 3 },
            { id: 'attn_condition', title: 'Шарт бойынша тап', icon: '🎯', stars: 0, total: 3 },
            { id: 'attn_patterns', title: 'Визуалды өрнектер', icon: '🧩', stars: 0, total: 3 },
            { id: 'attn_concentration', title: 'Зейін қою', icon: '🧘', stars: 0, total: 3 },
            { id: 'attn_visual_memory', title: 'Көру жады', icon: '👁️', stars: 0, total: 3 },
            { id: 'attn_maze', title: 'Лабиринттер', icon: '🌀', stars: 0, total: 5 },
            { id: 'attn_count', title: 'Зейінді санау', icon: '⏱️', stars: 0, total: 5 },
        ]
    }
];

const TASKS = {
    'logic_patterns': [
        // 1. Hot vs Cold - Classification
        {
            id: 'pat_01',
            template: 'classification',
            instruction: 'Топтастыр: Ыстық және Суық заттар',
            content: {
                categories: [
                    { id: 'hot', label: 'ЫСТЫҚ 🔥', color: '#ef4444' },
                    { id: 'cold', label: 'СУЫҚ ❄️', color: '#3b82f6' }
                ],
                items: [
                    { id: 'i1', content: '☀️', category: 'hot' },
                    { id: 'i2', content: '🧊', category: 'cold' },
                    { id: 'i3', content: '🔥', category: 'hot' },
                    { id: 'i4', content: '⛄', category: 'cold' },
                    { id: 'i5', content: '🌶️', category: 'hot' },
                    { id: 'i6', content: '🍦', category: 'cold' }
                ]
            }
        },
        // 2. Growing Sequence - Next in Sequence
        {
            id: 'pat_02',
            template: 'nextinsequence',
            instruction: 'Өсу реті: Жұмыртқа → Балапан → ?',
            content: {
                sequence: ['🥚', '🐣', '🐥'],
                options: [
                    { content: '🐓', correct: true },
                    { content: '🦴', correct: false },
                    { content: '🍳', correct: false }
                ]
            }
        },
        // 3. Find Different Shape
        {
            id: 'pat_03',
            template: 'oddoneout',
            instruction: 'Артық затты тап: Бір ғана пішіні басқа!',
            content: {
                items: [
                    { content: '🔴', isOdd: false },
                    { content: '🟠', isOdd: false },
                    { content: '🟡', isOdd: false },
                    { content: '🔺', isOdd: true },
                    { content: '🔴', isOdd: false },
                    { content: '🟤', isOdd: false }
                ]
            }
        }
    ],
    'logic_odd_one': [
        {
            id: 'odd_01',
            template: 'oddoneout',
            instruction: 'Артық затты тап: Бір ғана жеміс емес!',
            content: {
                items: [
                    { content: '🍎', isOdd: false },
                    { content: '🍌', isOdd: false },
                    { content: '🍇', isOdd: false },
                    { content: '🍊', isOdd: false },
                    { content: '🥕', isOdd: true }, // Carrot - not a fruit!
                    { content: '🍓', isOdd: false }
                ]
            }
        },
        {
            id: 'odd_02',
            template: 'oddoneout',
            instruction: 'Артық затты тап: Бір ғана ұшпайды!',
            content: {
                items: [
                    { content: '🦅', isOdd: false },
                    { content: '🦋', isOdd: false },
                    { content: '🐝', isOdd: false },
                    { content: '🐢', isOdd: true }, // Turtle - can't fly!
                    { content: '🦆', isOdd: false },
                    { content: '🦉', isOdd: false }
                ]
            }
        },
        {
            id: 'odd_03',
            template: 'oddoneout',
            instruction: 'Артық затты тап: Бір ғана түс басқа!',
            content: {
                items: [
                    { content: '🔴', isOdd: false },
                    { content: '🍎', isOdd: false },
                    { content: '❤️', isOdd: false },
                    { content: '🟢', isOdd: true }, // Green - different color!
                    { content: '🌹', isOdd: false },
                    { content: '🍓', isOdd: false }
                ]
            }
        }
    ],
    'logic_prediction': [
        {
            id: 'next_01',
            template: 'nextinsequence',
            instruction: 'Жалғасын тап: Қандай сан келесі?',
            content: {
                sequence: ['1️⃣', '2️⃣', '3️⃣', '4️⃣'],
                options: [
                    { content: '5️⃣', correct: true },
                    { content: '6️⃣', correct: false },
                    { content: '3️⃣', correct: false }
                ]
            }
        },
        {
            id: 'next_02',
            template: 'nextinsequence',
            instruction: 'Жалғасын тап: Ай фазалары...',
            content: {
                sequence: ['🌑', '🌓', '🌕'],
                options: [
                    { content: '🌗', correct: true },
                    { content: '🌑', correct: false },
                    { content: '☀️', correct: false }
                ]
            }
        },
        {
            id: 'next_03',
            template: 'nextinsequence',
            instruction: 'Жалғасын тап: Өсімдік өсуі...',
            content: {
                sequence: ['🌱', '🌿', '🌳'],
                options: [
                    { content: '🍎', correct: true },
                    { content: '🌱', correct: false },
                    { content: '🔥', correct: false }
                ]
            }
        }
    ],
    'logic_cause_effect': [
        {
            id: 'cause_01',
            template: 'causeeffect',
            instruction: 'Себепті салдарымен байланыстыр!',
            content: {
                pairs: [
                    { cause: '☀️', effect: '🌡️' }, // Sun → Hot
                    { cause: '☁️', effect: '🌧️' }, // Cloud → Rain
                    { cause: '🌱', effect: '🌳' }  // Seed → Tree
                ]
            }
        },
        {
            id: 'cause_02',
            template: 'causeeffect',
            instruction: 'Не болады? Себепті тап!',
            content: {
                pairs: [
                    { cause: '🔥', effect: '💨' }, // Fire → Smoke
                    { cause: '💧', effect: '🌊' }, // Drop → Water
                    { cause: '🍎', effect: '🌳' }  // Apple → Tree
                ]
            }
        },
        {
            id: 'cause_03',
            template: 'causeeffect',
            instruction: 'Логикалық байланыс тап!',
            content: {
                pairs: [
                    { cause: '🥚', effect: '🐣' }, // Egg → Chick
                    { cause: '🌙', effect: '⭐' }, // Moon → Stars
                    { cause: '🌧️', effect: '🌈' }  // Rain → Rainbow
                ]
            }
        }
    ],
    'logic_spatial': [
        {
            id: 'spatial_01',
            template: 'spatial',
            instruction: 'Қайсысы айналдырылған?',
            content: {
                original: '👉',
                options: [
                    { content: '👈', correct: true, transform: 'scaleX(-1)' },
                    { content: '👆', correct: false },
                    { content: '👇', correct: false }
                ]
            }
        },
        {
            id: 'spatial_02',
            template: 'spatial',
            instruction: 'Қайсысы айнадағы көрініс?',
            content: {
                original: '🌙',
                options: [
                    { content: '🌙', correct: true, transform: 'scaleX(-1)' },
                    { content: '☀️', correct: false },
                    { content: '⭐', correct: false }
                ]
            }
        },
        {
            id: 'spatial_03',
            template: 'spatial',
            instruction: '90° айналдырылған фигура?',
            content: {
                original: '⬆️',
                options: [
                    { content: '➡️', correct: true },
                    { content: '⬅️', correct: false },
                    { content: '⬇️', correct: false }
                ]
            }
        }
    ],
    'logic_classification': [
        {
            id: 'class_01',
            template: 'classification',
            instruction: 'Жануарларды топтарға бөл!',
            content: {
                categories: [
                    { name: 'Үй жануарлары', accepts: ['dog', 'cat', 'cow'] },
                    { name: 'Жабайы жануарлар', accepts: ['lion', 'elephant', 'tiger'] }
                ],
                items: [
                    { content: '🐶', category: 'Үй жануарлары' },
                    { content: '🦁', category: 'Жабайы жануарлар' },
                    { content: '🐱', category: 'Үй жануарлары' },
                    { content: '🐘', category: 'Жабайы жануарлар' }
                ]
            }
        },
        {
            id: 'class_02',
            template: 'classification',
            instruction: 'Тамақты түріне қарай бөл!',
            content: {
                categories: [
                    { name: 'Жемістер', accepts: ['apple', 'banana', 'grape'] },
                    { name: 'Көкөністер', accepts: ['carrot', 'tomato', 'broccoli'] }
                ],
                items: [
                    { content: '🍎', category: 'Жемістер' },
                    { content: '🥕', category: 'Көкөністер' },
                    { content: '🍌', category: 'Жемістер' },
                    { content: '🍅', category: 'Көкөністер' }
                ]
            }
        },
        {
            id: 'class_03',
            template: 'classification',
            instruction: 'Көлікті түріне қарай бөл!',
            content: {
                categories: [
                    { name: 'Жер көлігі', accepts: ['car', 'bus', 'bike'] },
                    { name: 'Әуе көлігі', accepts: ['plane', 'helicopter', 'rocket'] }
                ],
                items: [
                    { content: '🚗', category: 'Жер көлігі' },
                    { content: '✈️', category: 'Әуе көлігі' },
                    { content: '🚌', category: 'Жер көлігі' },
                    { content: '🚁', category: 'Әуе көлігі' }
                ]
            }
        }
    ],
    'logic_sequence': [
        {
            id: 'seq_action_01',
            template: 'actionsequence',
            instruction: 'Таңғы іс-әрекеттер реті',
            content: {
                steps: [
                    { content: '😴', order: 0 }, // Wake up
                    { content: '🚿', order: 1 }, // Shower
                    { content: '🍳', order: 2 }, // Breakfast
                    { content: '🎒', order: 3 }  // Go to school
                ]
            }
        },
        {
            id: 'seq_action_02',
            template: 'actionsequence',
            instruction: 'Ағаш өсу реті',
            content: {
                steps: [
                    { content: '🌰', order: 0 }, // Seed
                    { content: '🌱', order: 1 }, // Sprout
                    { content: '🌿', order: 2 }, // Plant
                    { content: '🌳', order: 3 }  // Tree
                ]
            }
        },
        {
            id: 'seq_action_03',
            template: 'actionsequence',
            instruction: 'Күн мезгілдері реті',
            content: {
                steps: [
                    { content: '🌅', order: 0 }, // Morning
                    { content: '☀️', order: 1 }, // Day
                    { content: '🌆', order: 2 }, // Evening
                    { content: '🌙', order: 3 }  // Night
                ]
            }
        }
    ],
    'logic_visual': [
        {
            id: 'visual_01',
            template: 'visuallogic',
            instruction: 'Өрнекті толықтыр!',
            content: {
                grid: [
                    ['🔴', '🔵', '🔴'],
                    ['🔵', '🔴', '🔵'],
                    ['🔴', '🔵', '?']
                ],
                options: [
                    { content: '🔴', correct: true },
                    { content: '🔵', correct: false },
                    { content: '🟢', correct: false }
                ]
            }
        },
        {
            id: 'visual_02',
            template: 'visuallogic',
            instruction: 'Қандай фигура келесі?',
            content: {
                grid: [
                    ['⭐', '⭐', '🌙'],
                    ['⭐', '⭐', '🌙'],
                    ['⭐', '⭐', '?']
                ],
                options: [
                    { content: '🌙', correct: true },
                    { content: '⭐', correct: false },
                    { content: '☀️', correct: false }
                ]
            }
        },
        {
            id: 'visual_03',
            template: 'visuallogic',
            instruction: 'Логикалық өрнек!',
            content: {
                grid: [
                    ['🍎', '🍌', '🍎'],
                    ['🍌', '🍎', '🍌'],
                    ['🍎', '?', '🍎']
                ],
                options: [
                    { content: '🍌', correct: true },
                    { content: '🍎', correct: false },
                    { content: '🍇', correct: false }
                ]
            }
        }
    ],
    'logic_true_false': [
        {
            id: 'tf_01',
            template: 'truefalse',
            instruction: 'Бұл дұрыс па?',
            content: {
                statement: 'Балық суда жүзеді',
                image: '🐟',
                isTrue: true
            }
        },
        {
            id: 'tf_02',
            template: 'truefalse',
            instruction: 'Бұл шын ба?',
            content: {
                statement: 'Күн түнде жарқырайды',
                image: '☀️',
                isTrue: false
            }
        },
        {
            id: 'tf_03',
            template: 'truefalse',
            instruction: 'Дұрыс па?',
            content: {
                statement: 'Құстар ұша алады',
                image: '🦅',
                isTrue: true
            }
        }
    ],
    'math_add_sub': [
        {
            id: 'math_as_01',
            template: 'mathequation',
            instruction: 'Қосу амалын орында!',
            content: {
                operand1: { type: 'visual', value: '🍎', count: 2 },
                operator: '+',
                operand2: { type: 'visual', value: '🍎', count: 1 },
                answer: 3,
                options: [2, 3, 4]
            }
        },
        {
            id: 'math_as_02',
            template: 'mathequation',
            instruction: 'Азайту амалын орында!',
            content: {
                operand1: { type: 'visual', value: '🥕', count: 4 },
                operator: '-',
                operand2: { type: 'visual', value: '🥕', count: 1 },
                answer: 3,
                options: [2, 3, 5]
            }
        },
        {
            id: 'math_as_03',
            template: 'mathequation',
            instruction: 'Есепті шығар!',
            content: {
                operand1: { type: 'number', value: 5 },
                operator: '+',
                operand2: { type: 'number', value: 3 },
                answer: 8,
                options: [7, 8, 9]
            }
        }
    ],
    'math_compare': [
        {
            id: 'math_cmp_01',
            template: 'mathcomparison',
            instruction: 'Салыстыр: Қай жағы көп?',
            content: {
                left: { type: 'visual', value: '🍎', count: 2 },
                right: { type: 'visual', value: '🍎', count: 4 },
                answer: '<'
            }
        },
        {
            id: 'math_cmp_02',
            template: 'mathcomparison',
            instruction: 'Салыстыр: Тең бе?',
            content: {
                left: { type: 'number', value: 8 },
                right: { type: 'number', value: 8 },
                answer: '='
            }
        },
        {
            id: 'math_cmp_03',
            template: 'mathcomparison',
            instruction: 'Салыстыр: Қай сан үлкен?',
            content: {
                left: { type: 'number', value: 10 },
                right: { type: 'number', value: 5 },
                answer: '>'
            }
        }
    ],
    'math_missing': [
        {
            id: 'math_miss_01',
            template: 'mathmissing',
            instruction: 'Қандай сан жетіспейді?',
            content: {
                sequence: [1, 2, null, 4],
                options: [3, 5, 2],
                correct: 3
            }
        },
        {
            id: 'math_miss_02',
            template: 'mathmissing',
            instruction: 'Сандарды ретімен қой',
            content: {
                sequence: [10, 20, null, 40],
                options: [25, 30, 50],
                correct: 30
            }
        },
        {
            id: 'math_miss_03',
            template: 'mathmissing',
            instruction: 'Кері сана!',
            content: {
                sequence: [9, 8, null, 6],
                options: [5, 7, 10],
                correct: 7
            }
        }
    ],
    'math_multiply': [
        {
            id: 'math_mult_01',
            template: 'mathequation',
            instruction: 'Көбейту амалын орында!',
            content: {
                operand1: { type: 'number', value: 2 },
                operator: '×',
                operand2: { type: 'number', value: 3 },
                answer: 6,
                options: [5, 6, 8]
            }
        },
        {
            id: 'math_mult_02',
            template: 'mathequation',
            instruction: 'Беске көбейт!',
            content: {
                operand1: { type: 'number', value: 5 },
                operator: '×',
                operand2: { type: 'number', value: 2 },
                answer: 10,
                options: [7, 10, 15]
            }
        },
        {
            id: 'math_mult_03',
            template: 'mathequation',
            instruction: 'Көбейту кестесін білесің бе?',
            content: {
                operand1: { type: 'number', value: 3 },
                operator: '×',
                operand2: { type: 'number', value: 3 },
                answer: 9,
                options: [6, 9, 12]
            }
        }
    ],
    'math_divide': [
        {
            id: 'math_div_01',
            template: 'mathequation',
            instruction: 'Бөлу амалын орында!',
            content: {
                operand1: { type: 'number', value: 6 },
                operator: '÷',
                operand2: { type: 'number', value: 2 },
                answer: 3,
                options: [2, 3, 4]
            }
        },
        {
            id: 'math_div_02',
            template: 'mathequation',
            instruction: 'Теңдей бөл!',
            content: {
                operand1: { type: 'number', value: 10 },
                operator: '÷',
                operand2: { type: 'number', value: 5 },
                answer: 2,
                options: [2, 5, 10]
            }
        },
        {
            id: 'math_div_03',
            template: 'mathequation',
            instruction: 'ЕСЕПТІ ШЫҒАР!',
            content: {
                operand1: { type: 'number', value: 8 },
                operator: '÷',
                operand2: { type: 'number', value: 4 },
                answer: 2,
                options: [2, 4, 8]
            }
        }
    ],
    'math_word_problems': [
        {
            id: 'math_wp_01',
            template: 'multiplechoice',
            instruction: 'Есепті шығар!',
            content: {
                question: 'Әлиде 3 алма бар еді. Ол біреуін Алинаға берді. Әлиде неше алма қалды?',
                image: '🍎',
                options: [
                    { content: '1', correct: false },
                    { content: '2', correct: true },
                    { content: '3', correct: false }
                ]
            }
        },
        {
            id: 'math_wp_02',
            template: 'multiplechoice',
            instruction: 'Барлығы нешеу?',
            content: {
                question: 'Аулада 2 мысық және 2 ит жүр. Барлығы неше жануар?',
                image: '🐱🐶',
                options: [
                    { content: '3', correct: false },
                    { content: '4', correct: true },
                    { content: '5', correct: false }
                ]
            }
        },
        {
            id: 'math_wp_03',
            template: 'multiplechoice',
            instruction: 'Дөңгелек сана!',
            content: {
                question: 'Бір көлікте 4 дөңгелек бар. Екі көлікте барлығы неше дөңгелек?',
                image: '🚗🚗',
                options: [
                    { content: '6', correct: false },
                    { content: '8', correct: true },
                    { content: '4', correct: false }
                ]
            }
        }
    ],
    'math_measurements': [
        {
            id: 'math_meas_01',
            template: 'multiplechoice',
            instruction: 'Сағат неше болды?',
            content: {
                question: 'Сағат тілі 3-ті көрсетіп тұр.',
                image: '🕒',
                options: [
                    { content: '3:00', correct: true },
                    { content: '12:00', correct: false },
                    { content: '6:00', correct: false }
                ]
            }
        },
        {
            id: 'math_meas_02',
            template: 'multiplechoice',
            instruction: 'Қайсысы ауыр?',
            content: {
                question: 'Піл ауыр ма, әлде құмырсқа ма?',
                image: '🐘🐜',
                options: [
                    { content: 'Піл 🐘', correct: true },
                    { content: 'Құмырсқа 🐜', correct: false }
                ]
            }
        },
        {
            id: 'math_meas_03',
            template: 'multiplechoice',
            instruction: 'Қайсысы ұзын?',
            content: {
                question: 'Қалам ұзын ба, әлде сызғыш па?',
                image: '✏️📏',
                options: [
                    { content: 'Сызғыш 📏', correct: true },
                    { content: 'Қалам ✏️', correct: false }
                ]
            }
        }
    ],
    'math_geometry': [
        {
            id: 'math_geo_01',
            template: 'multiplechoice',
            instruction: 'Құрастыр!',
            content: {
                question: 'Екі үшбұрышты қосқанда қандай фигура шығуы мүмкін?',
                image: '🔺 ➕ 🔺',
                options: [
                    { content: '🔶', correct: true }, // Rhombus/Square
                    { content: '🔵', correct: false },
                    { content: '⬛', correct: false }
                ]
            }
        },
        {
            id: 'math_geo_02',
            template: 'multiplechoice',
            instruction: 'Көлемді пішіндер',
            content: {
                question: 'Цилиндр пішінді затты тап:',
                options: [
                    { content: '🛢️', correct: true },
                    { content: '📦', correct: false },
                    { content: '🏀', correct: false }
                ]
            }
        },
        {
            id: 'math_geo_03',
            template: 'multiplechoice',
            instruction: 'Қабырғаларды сана!',
            content: {
                question: 'Алтыбұрыштың (гексагон) неше қабырғасы бар?',
                image: '🛑', // Stop sign is octagon usually, but close enough visually for abstraction or just use text
                options: [
                    { content: '6', correct: true },
                    { content: '5', correct: false },
                    { content: '8', correct: false }
                ]
            }
        }
    ],
    'math_logic': [
        {
            id: 'math_log_01',
            template: 'multiplechoice',
            instruction: 'Логикалық сұрақ',
            content: {
                question: 'Бүгін дүйсенбі болса, ертең қандай күн?',
                image: '📅',
                options: [
                    { content: 'Сейсенбі', correct: true },
                    { content: 'Жексенбі', correct: false }
                ]
            }
        },
        {
            id: 'math_log_02',
            template: 'multiplechoice',
            instruction: 'Сандар қатары',
            content: {
                question: '2, 4, 6, ... Келесі сан қандай?',
                image: '🔢',
                options: [
                    { content: '7', correct: false },
                    { content: '8', correct: true },
                    { content: '9', correct: false }
                ]
            }
        },
        {
            id: 'math_log_03',
            template: 'multiplechoice',
            instruction: 'Тақ санды тап!',
            content: {
                question: 'Қайсысы тақ сан?',
                options: [
                    { content: '2', correct: false },
                    { content: '5', correct: true },
                    { content: '4', correct: false }
                ]
            }
        }
    ],
    'attn_visual_memory': [
        {
            id: 'attn_mem_01',
            template: 'memorycards',
            instruction: 'Жұптарды тап!',
            content: {
                pairs: ['🐶', '🐱', '🦁']
            }
        },
        {
            id: 'attn_mem_02',
            template: 'memorycards',
            instruction: 'Жемістерді есіңе сақта!',
            content: {
                pairs: ['🍎', '🍌', '🍇', '🍉']
            }
        },
        {
            id: 'attn_mem_03',
            template: 'memorycards',
            instruction: 'Пішіндерді тап!',
            content: {
                pairs: ['🔴', '🟦', '🔺', '⭐']
            }
        }
    ],
    'attn_diff': [
        {
            id: 'attn_diff_01',
            template: 'oddoneout',
            instruction: 'Өзгеше смайликті тап!',
            content: {
                items: ['😀', '😀', '😃', '😀'],
                correct: 2
            }
        },
        {
            id: 'attn_diff_02',
            template: 'oddoneout',
            instruction: 'Қайсысы басқа?',
            content: {
                items: ['🍎', '🍎', '🍎', '🍅'],
                correct: 3
            }
        },
        {
            id: 'attn_diff_03',
            template: 'oddoneout',
            instruction: 'Айырмашылықты тап!',
            content: {
                items: ['🚗', '🚙', '🚗', '🚗'],
                correct: 1
            }
        }
    ],
    'attn_missing': [
        {
            id: 'attn_miss_01',
            template: 'mathmissing',
            instruction: 'Не жетіспейді?',
            content: {
                sequence: ['🐱', '🐶', null, '🐹'],
                options: ['🐰', '🐵', '🦊'],
                correct: '🐰' // MathMissing assumes numbers usually, but text works if CSS fits. We might need to adjust CSS font size if emojis are huge.
            }
        },
        {
            id: 'attn_miss_02',
            template: 'mathmissing',
            instruction: 'Ретін тап',
            content: {
                sequence: ['🌞', null, '🌧️', '❄️'],
                options: ['☁️', '🌤️', '⛈️'],
                correct: '🌤️'
            }
        }
    ],
    'attn_condition': [
        {
            id: 'attn_cond_01',
            template: 'classification',
            instruction: 'Түстерді ажырат: Қызыл және Көк',
            content: {
                categories: [
                    { id: 'red', title: 'Қызыл 🔴', items: ['🍎', '🍓', '🚗'] },
                    { id: 'blue', title: 'Көк 🔵', items: ['🚙', '🫐', '🧢'] }
                ]
            }
        }
    ],
    'attn_patterns': [
        {
            id: 'attn_pat_01',
            template: 'visuallogic',
            instruction: 'Өрнекті жалғастыр',
            content: {
                grid: [
                    ['🟩', '🟧', '🟩'],
                    ['🟧', '🟩', '🟧'],
                    ['🟩', '🟧', '?']
                ],
                options: [
                    { content: '🟩', correct: true },
                    { content: '🟧', correct: false },
                    { content: '🟦', correct: false }
                ]
            }
        }
    ],
    'attn_maze': [
        {
            id: 'attn_maze_01',
            template: 'multiplechoice',
            instruction: 'Қоянға сәбізге жетуге көмектес!',
            content: {
                question: 'Қай жол дұрыс?',
                image: '🐰 ➡️ 🥕', // Placeholder for maze image. In real app, use <img> tag or complex ASCII
                options: [
                    { content: 'Жол 1', correct: true },
                    { content: 'Жол 2', correct: false }
                ]
            }
        }
    ],
    'attn_count': [
        {
            id: 'attn_cnt_01',
            template: 'multiplechoice',
            instruction: 'Барлығы неше жұлдыз?',
            content: {
                question: 'Суреттегі жұлдыздарды сана:',
                image: '⭐⭐⭐⭐⭐',
                options: [
                    { content: '4', correct: false },
                    { content: '5', correct: true },
                    { content: '6', correct: false }
                ]
            }
        },
        {
            id: 'attn_cnt_02',
            template: 'multiplechoice',
            instruction: 'Неше құс бар?',
            content: {
                question: '🐦🐦 🐦',
                options: [
                    { content: '2', correct: false },
                    { content: '3', correct: true },
                    { content: '4', correct: false }
                ]
            }
        }
    ],
    'attn_diff': [
        // 1. Memory Cards - Find matching pairs
        {
            id: 'diff_01',
            template: 'memorycards',
            instruction: 'Жұптарды тап: Бірдей суреттерді есте сақта!',
            content: {
                pairs: ['🦊', '🐻', '🐰', '🦁']
            }
        },
        // 2. Spatial Rotation - Find the rotated shape
        {
            id: 'diff_02',
            template: 'spatial',
            instruction: 'Айырмашылықты тап: Қайсысы айналдырылған?',
            content: {
                original: '🔺',
                options: [
                    { content: '🔻', correct: true, transform: 'rotate(180deg)' },
                    { content: '🔺', correct: false },
                    { content: '◀️', correct: false }
                ]
            }
        },
        // 3. Classification - Sort by category with twist
        {
            id: 'diff_03',
            template: 'classification',
            instruction: 'Айырмашылықты тап: Жануарлар мен Көліктер',
            content: {
                categories: [
                    { id: 'animals', label: 'ЖАНУАРЛАР 🐾', color: '#10b981' },
                    { id: 'vehicles', label: 'КӨЛІКТЕР 🚗', color: '#3b82f6' }
                ],
                items: [
                    { id: 'i1', content: '🦁', category: 'animals' },
                    { id: 'i2', content: '🚗', category: 'vehicles' },
                    { id: 'i3', content: '🐘', category: 'animals' },
                    { id: 'i4', content: '✈️', category: 'vehicles' },
                    { id: 'i5', content: '🐸', category: 'animals' },
                    { id: 'i6', content: '🚂', category: 'vehicles' }
                ]
            }
        }
    ],
    'attn_memory_repeat': [
        // 1. Shadows - Match object to shadow
        {
            id: 'mem_01',
            template: 'matching',
            instruction: 'Көлеңкесін тап: Кімнің көлеңкесі?',
            content: {
                pairs: [
                    { id: 'p1', left: { content: '🐰' }, right: { content: '👤' } }, // Rabbit -> Shadow (use silhouette if possible, but emojis work)
                    { id: 'p2', left: { content: '🌵' }, right: { content: '⬛' } }, // Cactus -> Block (abstract shadow)
                    { id: 'p3', left: { content: '✈️' }, right: { content: '➕' } }  // Plane -> Cross shape
                ]
            }
        },
        // 2. Animal Tracks - Detective game
        {
            id: 'mem_02',
            template: 'matching',
            instruction: 'Ізін тап: Бұл кімнің ізі?',
            content: {
                pairs: [
                    { id: 'p1', left: { content: '🐾' }, right: { content: '🐶' } }, // Paw -> Dog
                    { id: 'p2', left: { content: '👣' }, right: { content: '👶' } }, // Footprint -> Baby
                    { id: 'p3', left: { content: '👠' }, right: { content: '💃' } }  // Heel -> Dancer
                ]
            }
        },
        // 3. Water Reflection - Physics/Nature logic
        {
            id: 'mem_03',
            template: 'spatial',
            instruction: 'Судағы бейне: Қайсысы дұрыс?',
            content: {
                original: '🌳', // Tree
                options: [
                    { content: '🌳', correct: false }, // Same
                    { content: '🌳', correct: true, transform: 'rotate(180deg) scaleX(-1)' }, // Reflected in water (Upside down + mirrored)
                    { content: '🌵', correct: false } // Wrong object
                ]
            }
        }
    ],
    'attn_missing': [
        // 1. Detective - What is missing from the picture?
        {
            id: 'miss_01',
            template: 'multiplechoice',
            instruction: 'Мұқият қара: Суретте не жоқ?',
            content: {
                question: '🍎 🍌 🍇 🍓', // Apple, Banana, Grapes, Strawberry
                options: [
                    { content: '🍎', correct: false },
                    { content: '🍊', correct: true }, // Orange is MISSING!
                    { content: '🍇', correct: false }
                ]
            }
        },
        // 2. Hide and Seek - Match hidden animal to full animal
        {
            id: 'miss_02',
            template: 'matching',
            instruction: 'Жасырынбақ: Кім тығылып қалды?',
            content: {
                pairs: [
                    { id: 'p1', left: { content: '🌳🐰' }, right: { content: '🐰' } }, // Bush+Ears -> Rabbit
                    { id: 'p2', left: { content: '🌊🦈' }, right: { content: '🦈' } }, // Water+Fin -> Shark
                    { id: 'p3', left: { content: '🏠🐈' }, right: { content: '🐈' } }  // House+Tail -> Cat
                ]
            }
        },
        // 3. Missing Piece - Complete the object
        {
            id: 'miss_03',
            template: 'matching',
            instruction: 'Бөлшегін тап: Қай бөлік жетіспейді?',
            content: {
                pairs: [
                    { id: 'p1', left: { content: '🍕' }, right: { content: '🍰' } }, // Pizza -> Slice (using cake slice emoji as pizza slice visually)
                    { id: 'p2', left: { content: '🧩' }, right: { content: '🟦' } }, // Puzzle -> Piece
                    { id: 'p3', left: { content: '🚗' }, right: { content: '🛞' } }  // Car -> Wheel
                ]
            }
        }
    ],
    'attn_condition': [
        // 1. Rule-based Odd One Out
        {
            id: 'cond_01',
            template: 'oddoneout',
            instruction: 'Ереже: Барлығы ДӨҢГЕЛЕК және САРЫ болуы керек. Қайсысы артық?',
            content: {
                items: [
                    { content: '🟡', isOdd: false },
                    { content: '🟡', isOdd: false },
                    { content: '🟨', isOdd: true }, // Square - breaks "Round" rule
                    { content: '🟡', isOdd: false },
                    { content: '🟡', isOdd: false },
                    { content: '🟡', isOdd: false }
                ]
            }
        },
        // 2. Find All Matching (Classification)
        {
            id: 'cond_02',
            template: 'classification',
            instruction: 'Тап: 3 бұрыштан КӨП бұрышы бар фигуралар', // >3 corners
            content: {
                categories: [
                    { id: 'yes', label: 'ДҰРЫС ✅', color: '#22c55e' },
                    { id: 'no', label: 'БҰРЫС ❌', color: '#ef4444' }
                ],
                items: [
                    { id: 'i1', content: '🟩', category: 'yes' }, // Square (4)
                    { id: 'i2', content: '🔺', category: 'no' }, // Triangle (3)
                    { id: 'i3', content: '⭐', category: 'yes' }, // Star (10)
                    { id: 'i4', content: '⏺️', category: 'no' }, // Circle (0)
                    { id: 'i5', content: '🔷', category: 'yes' }  // Diamond (4)
                ]
            }
        },
        // 3. Basket sorting by complex condition
        {
            id: 'cond_03',
            template: 'classification',
            instruction: 'Себетке сал: Тек КӨК және КӨЛІК емес!',
            content: {
                categories: [
                    { id: 'target', label: 'КЕРЕК 📥', color: '#3b82f6' },
                    { id: 'trash', label: 'КЕРЕК ЕМЕС 🗑️', color: '#94a3b8' }
                ],
                items: [
                    { id: 'i1', content: '📘', category: 'target' }, // Blue Book (Yes)
                    { id: 'i2', content: '🚙', category: 'trash' }, // Blue Car (No - is car)
                    { id: 'i3', content: '🧢', category: 'target' }, // Blue Cap (Yes)
                    { id: 'i4', content: '🍎', category: 'trash' }, // Red Apple (No - color)
                    { id: 'i5', content: '🖌️', category: 'trash' }  // Not blue
                ]
            }
        }
    ],
    'attn_patterns': [
        // 1. Puzzle 1
        {
            id: 'pat_01',
            template: 'puzzle',
            instruction: 'Пазлды жина: Бұл кім?',
            content: {
                emoji: '🦊'
            }
        },
        // 2. Puzzle 2
        {
            id: 'pat_02',
            template: 'puzzle',
            instruction: 'Пазлды жина: Кім тығылды?',
            content: {
                emoji: '🦁'
            }
        },
        // 3. Puzzle 3
        {
            id: 'pat_03',
            template: 'puzzle',
            instruction: 'Пазлды жина: Мынау не?',
            content: {
                emoji: '🐯'
            }
        }
    ],
    'attn_concentration': [
        // 1. Quick Math (Divisible by 3) -> Classification
        {
            id: 'conc_01',
            template: 'classification',
            instruction: 'Тез сана: 3-ке бөлінетін сандарды тап!',
            content: {
                categories: [
                    { id: 'div3', label: '3-ке бөлінеді ÷3', color: '#8b5cf6' },
                    { id: 'other', label: 'Басқалар', color: '#9ca3af' }
                ],
                items: [
                    { id: 'i1', content: '3', category: 'div3' },
                    { id: 'i2', content: '6', category: 'div3' },
                    { id: 'i3', content: '9', category: 'div3' },
                    { id: 'i4', content: '4', category: 'other' },
                    { id: 'i5', content: '5', category: 'other' },
                    { id: 'i6', content: '7', category: 'other' }
                ]
            }
        },
        // 2. Memory/Track object (Simulated with MemoryCards)
        {
            id: 'conc_02',
            template: 'memorycards',
            instruction: 'Есте сақта: Бірдей заттарды қайда жасырды?',
            content: {
                pairs: ['⌚', '🕶️', '🔑', '🪙']
            }
        },
        // 3. Find differences (Odd One Out - subtle)
        {
            id: 'conc_03',
            template: 'oddoneout',
            instruction: 'Айырмашылықты тап: Бір смайлик өзгеше!',
            content: {
                items: [
                    { content: '🙂', isOdd: false },
                    { content: '🙂', isOdd: false },
                    { content: '🙂', isOdd: false },
                    { content: '🙃', isOdd: true }, // Upside down
                    { content: '🙂', isOdd: false },
                    { content: '🙂', isOdd: false }
                ]
            }
        }
    ]
};
