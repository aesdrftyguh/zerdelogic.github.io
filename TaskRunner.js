// Imports assumed global for file:// compatibility

class TaskRunner {
    constructor() {
        this.gameStage = document.getElementById('game-stage');
        this.instructionEl = document.getElementById('task-instruction');
        this.victoryOverlay = document.getElementById('victory-overlay');
        this.nextLevelBtn = document.getElementById('btn-next-level');

        this.currentTask = null;

        this.templates = {
            'sorting': SortingTemplate,
            'matching': MatchingTemplate,
            'sequence': SequenceTemplate,
            'oddoneout': OddOneOutTemplate,
            'nextinsequence': NextInSequenceTemplate,
            'causeeffect': CauseEffectTemplate,
            'spatial': SpatialTemplate,
            'puzzle': PuzzleTemplate,
            'classification': ClassificationTemplate,
            'actionsequence': ActionSequenceTemplate,
            'visuallogic': VisualLogicTemplate,
            'truefalse': TrueFalseTemplate,
            'mathequation': MathEquationTemplate,
            'mathcomparison': MathComparisonTemplate,
            'mathmissing': MathMissingTemplate,
            'multiplechoice': MultipleChoiceTemplate,
            'memorycards': MemoryCardsTemplate
        };

        this.nextLevelBtn.style.display = 'none'; // Hide next button
    }

    loadTask(taskData) {
        this.currentTask = taskData;
        this.gameStage.innerHTML = ''; // Clear previous
        this.instructionEl.textContent = taskData.instruction;

        // Read instruction aloud
        SFX.speak(taskData.instruction);

        const TemplateClass = this.templates[taskData.template];
        if (TemplateClass) {
            // Template calls render() in constructor, no need to call it again
            this.activeTemplate = new TemplateClass(this.gameStage, taskData.content, this.onSuccess.bind(this), this.onFail.bind(this));
        } else {
            this.gameStage.innerHTML = `<div>Template ${taskData.template} not found</div>`;
        }
    }

    onSuccess() {
        // Trigger Victory
        SFX.playWin(); // Winner sound
        Confetti.launch(); // Launch confetti animation
        this.victoryOverlay.classList.remove('hidden');

        // Automatic progression after 2 seconds
        setTimeout(() => {
            this.victoryOverlay.classList.add('hidden');
            document.dispatchEvent(new Event('task-complete'));
        }, 2000);
    }

    onFail() {
        SFX.playFail(); // Fail noise
        // Trigger Shake on container
        this.gameStage.classList.add('shake-anim');
        setTimeout(() => this.gameStage.classList.remove('shake-anim'), 500);

        // Avatar sad face logic could go here
    }

    cleanup() {
        this.victoryOverlay.classList.add('hidden');
        this.gameStage.innerHTML = '';
    }
}
