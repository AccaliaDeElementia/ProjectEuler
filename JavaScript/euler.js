/*global JSLINT:false */

load('jslint.js');

var file = arguments[0],
    source = readFile(file),
    error,
    i;

if (JSLINT(source, {rhino: true})) {
    print('JSLINT checks out OK!');
} else {
    for (i = 0; i < JSLINT.errors.length; i = i + 1) {
        error = JSLINT.errors[i];
        if (!error) {
            print('WOAH NELLIE! JSLINT could not complete analysis, something went very wrong!');
            quit(255);
        }
        print('ERROR: line ' + error.line + ' character ' + error.character);
        print('       ' + error.reason);
        print(error.evidence + '\n');
    }
}

load(file);
