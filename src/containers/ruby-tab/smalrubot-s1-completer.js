import BaseCompleter from './base-completer';

class SmalrubotS1Completer extends BaseCompleter {
    getCompletions (editor, session, pos, prefix, callback) {
        const words = [
        ];
        const completions = [];
        words.forEach(w => completions.push(w));
        callback(null, completions);
    }
}

export default SmalrubotS1Completer;
