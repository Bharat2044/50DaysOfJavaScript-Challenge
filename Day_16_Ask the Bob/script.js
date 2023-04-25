// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
// Bob answers 'Sure.' if you ask him a question, such as "How are you?".
// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.


const isUpper = (string) => {
    return !/[a-z]/.test(string) && /[A-Z]/.test(string);
}

function hey(message) {
    // Code here
    let pureLetterString = ""
    message.split("").forEach(character => {
        if(/[a-zA-Z]/.test(character)){
            pureLetterString += character;
        }
    })

    if(isUpper(pureLetterString) && message.trim().charAt(message.length-1) === '?'){
        return "Calm down, I know what I'm doing!";
    }
    else if(isUpper(pureLetterString)){
        return "Whoa, chill out!";
    }
    else if(message.trim().charAt(message.length-1) === '?'){
        return "Sure.";
    }
    else if(message === ""){
        return "Fine. Be that way!";
    }

    return "Whatever.";
}

console.log(hey('How are you?'));