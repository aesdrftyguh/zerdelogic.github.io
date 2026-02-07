class AudioManager {
    constructor() {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.synth = window.speechSynthesis;
        this.enabled = localStorage.getItem('sfx_enabled') !== 'false';
    }

    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('sfx_enabled', this.enabled);
        if (this.synth) this.synth.cancel();
        return this.enabled;
    }

    // Generate a simple oscillator tone
    playTone(freq, type, duration, vol = 0.1) {
        if (!this.enabled) return;
        if (this.ctx.state === 'suspended') this.ctx.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type; // 'sine', 'square', 'sawtooth', 'triangle'
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    }

    // Sound Presets
    playHover() {
        // High, short 'pop'
        this.playTone(800, 'sine', 0.1, 0.05);
    }

    playClick() {
        // Lower 'thud'
        this.playTone(300, 'triangle', 0.15, 0.1);
    }

    playWin() {
        // Major Arpeggio
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major
        notes.forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 'sine', 0.3, 0.1), i * 100);
        });
    }

    playFail() {
        // Dissapointed low saw
        this.playTone(150, 'sawtooth', 0.4, 0.1);
        setTimeout(() => this.playTone(130, 'sawtooth', 0.4, 0.1), 300);
    }

    // Text to Speech
    speak(text) {
        if (!this.enabled || !this.synth) return;

        // Cancel existing speech
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        // Find best Kazakh voice
        const voices = this.synth.getVoices();
        const kkVoice = voices.find(v => v.lang.startsWith('kk'));
        if (kkVoice) utterance.voice = kkVoice;

        utterance.lang = 'kk-KZ';
        utterance.rate = 0.85;
        utterance.pitch = 1.0;

        // Small timeout helps mobile browsers prep the synth
        setTimeout(() => this.synth.speak(utterance), 100);
    }
}

// Global Instance
const SFX = new AudioManager();
