export class Validator {

    validateUsername(name) {
        if(/[^a-zA-Z0-9-_]/.test(name)){
            return 'Error in name';
        }
        else if(/(^[-_0-9])|([-_0-9]$)|(\d{4})/.test(name)) {
            return 'Error in name';
        }
        else {return name};
    }

    validateNumber(number) {
        const groups = /^(\+?\d+)(\W|\s)?(\W?\d{3}\W?)(\W|\s)?(\d{3})(\W|\s)?(\d{2})(\W|\s)?(\d{2})/g.exec(number);
        let numb = '+';
        for (let i=0; i<groups.length;i++) {
            if (i % 2 !== 0) {
                let digit = /\d+/.exec(groups[i]);
                digit == '8' ? numb += '7': numb += digit; 
            }
        }
        return numb;
    }
}
